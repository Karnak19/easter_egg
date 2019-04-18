import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Axios from "axios";
import { Row, Col } from "reactstrap";

class ChocolateChart extends Component {
   constructor(props) {
      super(props);
      this.state = {
         chocolateTrading: []
      };
   }
   componentDidMount() {
      Axios.get("http://easteregg.wildcodeschool.fr/api/stocks/chocolates?min=1555596705&interval=10000").then(res => {
         this.setState({
            chocolateTrading: res.data
         });
      });
   }
   render() {
      const theArray = [];
      const datas = this.state.chocolateTrading.map((data, i) => {
         return theArray.push(parseInt(data.price, 10));
      });

      const options = {
         series: [
            {
               type: "area",
               colorIndex: 3,
               data: theArray,
               threshold: 10,
               turboThresold: 0
            }
         ]
      };

      return (
         <Row>
            <Col lg={{ size: 10, offset: 1 }}>
               <HighchartsReact highcharts={Highcharts} options={options} />
            </Col>
         </Row>
      );
   }
}

export default ChocolateChart;
