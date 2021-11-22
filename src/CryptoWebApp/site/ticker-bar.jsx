import React, { useEffect, useState } from 'react'
import BTCPrice from '../PriceCalculators/BTCprice';
import Marquee from "react-fast-marquee";
import TickerElement from './ticker-element';

export default class PricingBox extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    const boxStyle = {
      backgroundColor: "black",
      color: "white",
      marginBottom: "0px",
      padding: "20px 50px 20px 50px",
      border: "grey",
      margin: "0px",
      border: "1px solid black",
      fontSize: "20px",
      textAlign: "left"
    }

    const tickerStyle = {
      paddingBottom: '15px'
    }

    return (
      <Marquee pauseOnHover={true} gradient={false}>

        <TickerElement ticker="BTC" name="Bitcoin" />
        <TickerElement ticker="ETH" name="Ethereum" />
        <TickerElement ticker="XRP" name="Ripple"/>
        <TickerElement ticker="ADA" name="Cardano"/>
        <TickerElement ticker="BNB" name="Binance Coin"/>
        <TickerElement ticker="SOL" name="Solana"/>
        <TickerElement ticker="DOGE" name="Dogecoin"/>
        <TickerElement ticker="LTC" name="Litecoin"/>
        <TickerElement ticker="DOT" name="Polkadot"/>
        <TickerElement ticker="BCH" name="Bitcoin Cash"/>
        <TickerElement ticker="XLM" name="Stellar"/>
        <TickerElement ticker="ETC" name="ETH Classic"/>
        <TickerElement ticker="CAKE" name="Pancake"/>


      </Marquee>


    )
  }
}




