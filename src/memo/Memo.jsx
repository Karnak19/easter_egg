import React, { useReducer, useEffect } from "react";
import axios from "axios";

/**
 * @see https://www.frankmitchell.org/2015/01/fisher-yates/
 * @param {*} array
 */
function shuffle(array) {
  let res = Array.from(array);
  let i = 0;
  let j = 0;
  let temp = null;

  for (i = res.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = res[i];
    res[i] = res[j];
    res[j] = temp;
  }
  return res;
}

function createEgg(egg, isCopy = false) {
  return {
    raw: egg,
    isFlipped: false,
    id: isCopy ? "COPY-FROM:" + egg.id : egg.id
  };
}

function flipEgg(egg) {
  return {
    ...egg,
    isFlipped: true
  };
}

function unflipEgg(egg) {
  return {
    ...egg,
    isFlipped: false
  };
}

// function isEggCopy(egg) {
//   return egg.id.includes("COPY-FROM:");
// }

const initialState = {
  eggs: [],
  firstEggId: null,
  secondEggId: null
};

const isTwinsFlippedSelector = eggId => state => {
  let id = state.eggs.find(egg => egg.id === eggId).raw.id;
  let twins = state.eggs.filter(egg => egg.raw.id === id);
  return twins[0].isFlipped && twins[1].isFlipped;
};

const isEggFlippedSelector = eggId => state => {
  return state.eggs.find(egg => egg.id === eggId).isFlipped;
};

const eggByIdSelector = eggId => state => {
  return state.find(egg => egg.id === eggId);
};

function reducer(state, action) {
  switch (action.type) {
    case "unflip":
      const { firstEggId, secondEggId } = state;
      return {
        ...state,
        eggs: state.eggs.map(egg =>
          egg.id === firstEggId || egg.id === secondEggId ? unflipEgg(egg) : egg
        ),
        firstEggId: null,
        secondEggId: null
      };
    case "flip": {
      const { firstEggId, secondEggId } = state;
      const { payload: eggId } = action;
      return {
        ...state,
        eggs: state.eggs.map(egg =>
          !firstEggId && !secondEggId && egg.id === eggId ? flipEgg(egg) : egg
        ),
        firstEggId: firstEggId ? firstEggId : eggId,
        secondEggId: !firstEggId ? null : secondEggId ? secondEggId : eggId
      };
    }

    case "fetch_egg_success": {
      let eggs = action.payload;
      return {
        ...state,
        eggs: shuffle(
          eggs
            .map(egg => createEgg(egg, false))
            .concat(eggs.map(egg => createEgg(egg, true)))
        )
      };
    }
    default:
      throw new Error();
  }
}

export default function Memorize() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function() {
    Promise.all(
      Array.from(new Array(10)).map(() =>
        axios
          .get("http://easteregg.wildcodeschool.fr/api/eggs/random")
          .then(res => res.data)
      )
    ).then(eggs => {
      dispatch({
        type: "fetch_egg_success",
        payload: eggs
      });
    });
  }, []);

  function toggle(eggId) {
    const { firstEggId, secondEggId } = state;
    if (firstEggId && !secondEggId) {
      setTimeout(() => {
        if (
          eggByIdSelector(firstEggId).raw.id !== eggByIdSelector(eggId).raw.id
        ) {
          dispatch({ type: "unflip" });
        }
      }, 750);
    }
    return dispatch({ type: "flip", payload: eggId });
  }
  return (
    <div>
      {state.eggs.map(({ raw: egg }) => (
        <img alt="lol" src={egg.image} height="20px" width="20px" />
      ))}
    </div>
  );
}
