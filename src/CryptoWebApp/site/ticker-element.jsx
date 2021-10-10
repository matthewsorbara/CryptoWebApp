import React from 'react';

export default class TickerElement extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          price: 0,
          priceId: `${this.props.ticker}display${Math.random()}` 
        }

        this.updatePrice = this.updatePrice.bind(this); 
    }

    componentDidMount() {
      console.log(this.state.priceId)
      const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${this.props.ticker.toLowerCase()}usdt@kline_1m`);
      console.log(socket)
      socket.onmessage = (event) => { this.updatePrice(event); }
    }

    updatePrice(event) {
      console.log('run')
      let messageObject = JSON.parse(event.data);
      let newClose = messageObject.k.c;
      newClose = Number.parseFloat(newClose).toFixed(3);
  
      const display = document.getElementById(`${this.state.priceId}`)
      if (newClose > this.state.price) {
        display.style.color = "#40a35a";
        setTimeout(() => display.style.color = "white", 750)
      }
      if (newClose < this.state.price) {
        display.style.color = "#ab3733";
        setTimeout(() => display.style.color = "white", 750)
      }
  
      this.setState({
        price: newClose
      });
    }

    render() {

        const boxStyle = {
            backgroundColor: "black",
            color: "white",
            marginBottom: "0px",
            // padding: "20px 50px 20px 50px",
            width: "200px",
            border: "grey",
            margin: "0px",
            border: "1px solid black",
            fontSize: "20px",
            textAlign: "left"
          }
        
        

        return (
            <div style={boxStyle}>
            <h6>{this.props.ticker}</h6>
            <h4 id={this.state.priceId}>${this.state.price}</h4>
          </div>
        )
    }

}