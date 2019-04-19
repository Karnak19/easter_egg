import React, { Fragment } from "react";
import Navbar from "./Components/TheNavBar.jsx";
import Particlebtc from "./Components/ParticleBtc";
import TheFooter from "./Components/TheFooter.jsx";

const ResponsiveLayout = ({ children }) => {
   let getItems = () => {
      return [
         { label: "CHOCOLATE", to: "/chocolate" },
         { label: "EGGS", to: "/eggs" },
         { label: "MILK", to: "/milk" },
         { label: "BTC", to: "/btc" },
         { label: "ETH", to: "/eth" },
         { label: "TRX", to: "/trx" }
      ];
   };
   let FootItems = () => {
      return [{ label: "Wild Code School", to: "https://wildcodeschool.fr/" }, { label: "2019", to: "/memory" }];
   };
   return (
      <Fragment style={{ height: "100vh" }}>
         <Particlebtc />
         <Navbar items={getItems} />
         <div className="container-fluid">
            {children}
            <TheFooter items={FootItems} />
         </div>
      </Fragment>
   );
};

export default ResponsiveLayout;
