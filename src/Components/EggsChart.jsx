import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Axios from "axios";
import { Col } from "reactstrap";

class EggsChart extends Component {
   constructor(props) {
      super(props);
      this.state = {
         chocolateTrading: []
      };
   }
   componentDidMount() {
      Axios.get("http://easteregg.wildcodeschool.fr/api/stocks/eggs?min=1555599607").then(res => {
         this.setState({
            chocolateTrading: res.data
         });
      });
   }
   render() {
      const random = Math.floor(Math.random() * 10);
      const theArray = [];
      const datas = this.state.chocolateTrading.map((data, i) => {
         return theArray.push(parseInt(data.price, 10));
      });

      const options = {
         chart: {
            type: "line",
            backgroundColor: "#343a40",
            zoomType: "x"
         },
         title: {
            text: "",
            style: {
               color: "#FFF",
               font: '16px "Trebuchet MS", Verdana, sans-serif'
            }
         },
         xAxis: {
            categories: [],

            labels: {
               style: {
                  color: "#FFF",
                  font: "11px Trebuchet MS, Verdana, sans-serif"
               }
            }
         },
         yAxis: {
            categories: [],
            label: {
               style: {
                  color: "#FFF",
                  font: "11px Trebucher MS, Verdana, sans-serif"
               }
            }
         },
         series: [
            {
               type: "area",
               colorIndex: random,
               data: theArray,
               threshold: 0,
               turboThresold: 0
            }
         ]
      };

      return (
         <Col lg={{ size: 10, offset: 1 }}>
            <HighchartsReact highcharts={Highcharts} options={options} />
         </Col>
      );
   }
}

export default EggsChart;
