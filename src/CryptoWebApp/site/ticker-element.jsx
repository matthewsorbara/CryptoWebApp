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
      const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${this.props.ticker.toLowerCase()}usdt@kline_1m`);
      const historicalDataUrl = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${this.props.ticker}&market=USD&apikey=SC9476BN3E2GJVGR`

      fetch(historicalDataUrl)
        .then((res) => res.json())
        .then((result) => console.log(result))



      socket.onmessage = (event) => { this.updatePrice(event); }
    }

    updatePrice(event) {
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

          const titleStyle = {
            display: "inline-flex"
          }

          const percentageStyle = {
            marginLeft: "20px"
          }

        return (
            <div style={boxStyle}>
              <div style={titleStyle}>
                <h6>{this.props.ticker}</h6>
                {/* <h6 style={percentageStyle}>▲ 0.19%</h6> */}
              </div>
            
            <h4 id={this.state.priceId}>${this.state.price}</h4>
          </div>
        )
    }

}