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

        <TickerElement ticker="BTC" />
        <TickerElement ticker="ETH" />
        <TickerElement ticker="XRP" />
        <TickerElement ticker="ADA" />
        <TickerElement ticker="BNB" />
        <TickerElement ticker="SOL" />
        <TickerElement ticker="DOGE" />
        <TickerElement ticker="LTC" />


      </Marquee>


    )
  }
}




