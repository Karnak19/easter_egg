import React from "react";
import ResponsiveLayout from "../Responsive.layout";
import EggsChart from './EggsChart'

class Eggs extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <ResponsiveLayout>
            <EggsChart />
         </ResponsiveLayout>
      );
   }
}

export default Eggs;
