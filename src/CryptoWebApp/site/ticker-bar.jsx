import React, { useEffect, useState } from 'react'
import BTCPrice from '../PriceCalculators/BTCprice';
import Marquee from "react-fast-marquee";

export default class PricingBox extends React.Component {

  constructor(props) {

    super(props);
    this.updateBTCPrice = this.updateBTCPrice.bind(this);
    this.updateETHPrice = this.updateETHPrice.bind(this);
    this.updateXRPPrice = this.updateXRPPrice.bind(this);
    this.updateETCPrice = this.updateETCPrice.bind(this);
    this.updateADAPrice = this.updateADAPrice.bind(this);

    this.state = {
      'BTC': 0,
      'ETH': 0,
      'XRP': 0,
      'ETC': 0,
      'ADA': 0
    }

  }

  componentDidMount() {
    const btcSocket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1m');
    const ethSocket = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@kline_1m');
    const xrpSocket = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@kline_1m');
    const etcSocket = new WebSocket('wss://stream.binance.com:9443/ws/etcusdt@kline_1m');
    const adaSocket = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@kline_1m');

    btcSocket.onmessage = (event) => { this.updateBTCPrice(event); }
    ethSocket.onmessage = (event) => { this.updateETHPrice(event); }
    xrpSocket.onmessage = (event) => { this.updateXRPPrice(event); }
    etcSocket.onmessage = (event) => { this.updateETCPrice(event); }
    adaSocket.onmessage = (event) => { this.updateADAPrice(event); }
  }

  updateBTCPrice(event) {
    let messageObject = JSON.parse(event.data);
    const newClose = messageObject.k.c;

    this.setState({
      BTC: newClose
    });
    console.log(this.state.BTC)
  }

  updateETHPrice(event) {
    let messageObject = JSON.parse(event.data);
    const newClose = messageObject.k.c;

    this.setState({
      'ETH': newClose
    });
  }

  updateXRPPrice(event) {
    let messageObject = JSON.parse(event.data);
    const newClose = messageObject.k.c;

    this.setState({
      'XRP': newClose
    });
  }
  updateETCPrice(event) {
    let messageObject = JSON.parse(event.data);
    const newClose = messageObject.k.c;

    this.setState({
      'ETC': newClose
    });
  }
  updateADAPrice(event) {
    let messageObject = JSON.parse(event.data);
    const newClose = messageObject.k.c;

    this.setState({
      'ADA': newClose
    });
  }

  render() {
    const boxStyle = {
      backgroundColor: "black",
      color: "white",
      marginBottom: "0px",
      padding: "30px 50px 30px 50px",
      border: "grey",
      margin: "0px",
      border: "1px solid black",
      fontSize: "20px",
      textAlign: "left"
    }

    const tickerStyle = {
      paddingBottom: '25px'
    }

    return (
        <Marquee>
          <h1 style={boxStyle}>Testing1</h1>
          <h1 style={boxStyle}>Testing2</h1>
          <h1 style={boxStyle}>Testing3</h1>
          <h1 style={boxStyle}>Testing4</h1>
          <h1 style={boxStyle}>Testing5</h1>
          <h1 style={boxStyle}>Testing6</h1>
          <h1 style={boxStyle}>Testing7</h1>
          <h1 style={boxStyle}>Testing8</h1>
          <h1 style={boxStyle}>Testing9</h1>
          <h1 style={boxStyle}>Testing10</h1>
          <h1 style={boxStyle}>Testing11</h1>

        </Marquee>


    )
  }
}




