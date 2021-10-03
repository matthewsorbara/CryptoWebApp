import React from 'react';

export default class ETHPrice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ETHclose: "0",
        }
        this.updateETHPrice = this.updateETHPrice.bind(this);

    }

    updateETHPrice(event) {
        let messageObject = JSON.parse(event.data);
        let newClose = messageObject.k.c;

        const display = document.getElementById("ETHpriceDisplay")
        if (newClose > this.state.ETHclose) {
            display.style.color = "#40a35a";
            setTimeout(() => display.style.color = "black", 750)
        }
        if (newClose < this.state.ETHclose) {
            display.style.color = "#ab3733";
            setTimeout(() => display.style.color = "black", 750)
        }


        this.setState({
            ETHclose: newClose
        })
    }

    componentDidMount() {
        const ETHsocket = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@kline_1m");

        ETHsocket.onmessage = (event) => {
            this.updateETHPrice(event);
        }
    }

    render() {
        return (
            <h1 id="ETHpriceDisplay">ETH Price: US${this.state.ETHclose}</h1>
        )
    }



};