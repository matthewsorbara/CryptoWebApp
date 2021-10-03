import React from 'react';
import './pricing.css'

export default class XRPPrice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            XRPclose: "0",
        }
        this.updateXRPPrice = this.updateXRPPrice.bind(this);

    }

    updateXRPPrice(event) {
        let messageObject = JSON.parse(event.data);
        let newClose = messageObject.k.c;

        const display = document.getElementById("XRPpriceDisplay")
        if (newClose > this.state.XRPclose) {
            display.style.color = "#40a35a";
            setTimeout(() => display.style.color = "black", 750)
        }
        if (newClose < this.state.XRPclose) {
            display.style.color = "#ab3733";
            setTimeout(() => display.style.color = "black", 750)
        }


        this.setState({
            XRPclose: newClose
        })
    }

    componentDidMount() {
        const XRPsocket = new WebSocket("wss://stream.binance.com:9443/ws/xrpusdt@kline_1m");

        XRPsocket.onmessage = (event) => {
            this.updateXRPPrice(event);
        }
    }

    render() {
        return (
            <h1 id="XRPpriceDisplay">XRP Price: US${this.state.XRPclose}</h1>
        )
    }



};