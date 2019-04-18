import React from "react";
import Navbar from "./Components/TheNavBar.jsx";
import ParticleBtc from "./Components/ParticleBtc";

const ResponsiveLayoutBtc = ({ children }) => {
   let getItems = () => {
      return [{ label: "BTC", to: "/btc" }, { label: "ETH", to: "/eth" }, { label: "TRX", to: "/trx" }, ];
   };
   return (
      <>
         <ParticleBtc />
         <Navbar items={getItems} />
         <div className="container-fluid">{children}</div>
      </>
   );
};

export default ResponsiveLayoutBtc;
