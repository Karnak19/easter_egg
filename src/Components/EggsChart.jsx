import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Axios from 'axios';

class EggsChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chocolateTrading: []
        };
    }
    componentDidMount() {
        Axios.get("http://easteregg.wildcodeschool.fr/api/stocks/eggs?min=1555599607")
            .then(res => {
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

export default EggsChart;