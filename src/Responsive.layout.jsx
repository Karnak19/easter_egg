import React from "react";
import Navbar from "./Components/TheNavBar.jsx";
<<<<<<< HEAD
import Particle from "./Components/Particle";
=======
import Particle from './Components/Particle'
>>>>>>> b0d7222e65710e44ad27022d4bd7a9710eb94ad5

const ResponsiveLayout = ({ children }) => {
   let getItems = () => {
      return [{ label: "Chocolate", to: "/chocolate" }, { label: "Eggs", to: "/eggs" }, { label: "Milk", to: "/milk" }];
   };
   return (
      <>
         <Particle />
         <Navbar items={getItems} />
         <div className="container-fluid">{children}</div>
         {/* TODO: Add a footer here */}
      </>
   );
};

export default ResponsiveLayout;
