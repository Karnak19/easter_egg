import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Axios from "axios";

class MilkChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chocolateTrading: []
        };
    }
    componentDidMount() {
        Axios.get("http://easteregg.wildcodeschool.fr/api/stocks/milks?min=1555599843")
            .then(res => {
                this.setState({
                    chocolateTrading: res.data
                });
            });
    }
    render() {
        const random = Math.floor(Math.random() * 10)
        const theArray = [];
        const datas = this.state.chocolateTrading.map((data, i) => {
            return theArray.push(parseInt(data.price, 10));
        });

        const options = {
            series: [
                {   
                    type: "area",
                    colorIndex : random,
                    data: theArray,
                    turboThresold: 0
                }
            ]
        };

        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        );
    }
}

export default MilkChart;
