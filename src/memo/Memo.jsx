import React, { useReducer, useEffect } from "react";
import axios from "axios";
import GameMemo from '../Components/MemoryGame'

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

function createEgg(egg, isCopy = false, index = 0) {
  return {
    raw: egg,
    isFlipped: false,
    id: index + (isCopy ? "COPY-FROM:" + egg.id : egg.id)
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

const initialState = {
  eggs: [],
  firstEggId: null,
  secondEggId: null,
};

const eggByIdSelector = eggId => state => {
  return state.eggs.find(egg => egg.id === eggId);
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
          ((!firstEggId && !secondEggId) || (firstEggId && !secondEggId)) && egg.id === eggId ? flipEgg(egg) : egg
        ),
        firstEggId: firstEggId ? firstEggId : eggId,
        secondEggId: !firstEggId ? null : secondEggId ? secondEggId : eggId,
      };
    }

    case "free": {
      return {
        ...state,
        firstEggId: null,
        secondEggId: null
      }
    }

    case "fetch_egg_success": {
      let eggs = action.payload;
      return {
        ...state,
        eggs: shuffle(
          eggs
            .map((egg,i) => createEgg(egg, false, i))
            .concat(eggs.map((egg,i) => createEgg(egg, true, i)))
        )
      };
    }
    default:
      throw new Error();
  }
}

export default function Memorize() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    Promise.all(
      Array.from(new Array(12)).map(() =>
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
          eggByIdSelector(firstEggId)(state).raw.image !== eggByIdSelector(eggId)(state).raw.image
        ) {
          dispatch({ type: "unflip" });
        } else {
          dispatch({ type: 'free' });
        }
      }, 1000);
    }
    return dispatch({ type: "flip", payload: eggId });
  }
  return (
    <div>
      <GameMemo eggs={state.eggs} toggle={toggle} isLoading={state.firstEggId && state.secondEggId} />
    </div>
  );
}
