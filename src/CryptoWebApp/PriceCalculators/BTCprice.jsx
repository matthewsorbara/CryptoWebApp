import React from 'react';
import { createChart } from 'lightweight-charts'
import Ticker from 'react-ticker'


require("scramjet")

const API_KEY = 'SC9476BN3E2GJVGR'

export default class BTCPrice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            BTCclose: "0",
        }
        // this.updateBTCPrice = this.updateBTCPrice.bind(this);

    }

    // updateBTCPrice(event, chart, candlesticks) {
    //     let messageObject = JSON.parse(event.data);
    //     let newClose = messageObject.k.c;


    //     const display = document.getElementById("BTCpriceDisplay")
    //     if (newClose > this.state.BTCclose) {
    //         display.style.color = "#40a35a";
    //         setTimeout(() => display.style.color = "black", 750)
    //     }
    //     if (newClose < this.state.BTCclose) {
    //         display.style.color = "#ab3733";
    //         setTimeout(() => display.style.color = "black", 750)
    //     }

    //     candlesticks.setData([
    //         { time: messageObject.k.T, open: messageObject.k.o, high: messageObject.k.h, low: messageObject.k.l, close: messageObject.k.c },
    //     ])

    //     console.log(candlesticks.getData)


    //     this.setState({
    //         BTCclose: newClose
    //     })
    // }

    componentDidMount() {

        // WEB SOCKET STUFF, ONLY FOR REALTIME DATA

        // const BTCsocket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");

        // const chart = createChart(document.getElementById("BTCchart"), { width: 400, height: 300 });
        // const candlestickSeries = chart.addCandlestickSeries();

        // BTCsocket.onmessage = (event) => {
        //     this.updateBTCPrice(event, chart, candlestickSeries);
        // }


        let url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=${API_KEY}`;

        fetch(url)
            .then((res) => res.json())
            .then((result) => console.log(result))

    }

    render() {

        const chartStyle = {
            margin: "0% 40% 0%",
        }
        
        return (
            <div>
                <h1 id="BTCpriceDisplay">BTC Price: US${this.state.BTCclose}</h1>
                <div id="BTCchart" style={chartStyle}></div>
                <p></p>
            </div >
        )
    }



};