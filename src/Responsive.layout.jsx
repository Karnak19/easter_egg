import React from "react";
import Navbar from "./Components/TheNavBar.jsx";
import Particlebtc from "./Components/ParticleBtc";

const ResponsiveLayout = ({ children }) => {
   let getItems = () => {
      return [{ label: "CHOCOLATE", to: "/chocolate" }, { label: "EGGS", to: "/eggs" }, { label: "MILK", to: "/milk" },{ label: "BTC", to: "/btc" }, { label: "ETH", to: "/eth" }, { label: "TRX", to: "/trx" } ];
   };
   return (
      <>
         <Particlebtc />
         <Navbar items={getItems} />
         <div className="container-fluid">{children}</div>
         {/* TODO: Add a footer here */}
      </>
   );
};

export default ResponsiveLayout;
