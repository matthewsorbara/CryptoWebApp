(this.webpackJsonpcryptowebapp=this.webpackJsonpcryptowebapp||[]).push([[0],{118:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=118},134:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(22),i=n.n(r),o=(n(79),n(15)),s=n(16),j=n(18),l=n(17),b=(n(80),n(139),n(81),n(1));n(85);a.a.Component;var u=n(144),p=n(142),d=n(143),O=(n(133),n(134),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(u.a.Brand,{className:"fontnav",href:"#home",children:"Crypto Web App"}),Object(b.jsx)(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsxs)(u.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsx)(d.a,{className:"me-auto"}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(d.a.Link,{className:"fontnav",href:"#deets",children:"Home"}),Object(b.jsx)(d.a.Link,{className:"fontnav",href:"#deets",children:"Charts"}),Object(b.jsx)(d.a.Link,{className:"fontnav",href:"#deets",children:"Trading Bot"})]})]})]})})}}]),n}(a.a.Component)),h=n(4),x=n(74),f=n.n(x),m=n(40),k=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={price:0,priceId:"".concat(c.props.ticker,"display").concat(Math.random())},c.updatePrice=c.updatePrice.bind(Object(m.a)(c)),c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new WebSocket("wss://stream.binance.com:9443/ws/".concat(this.props.ticker.toLowerCase(),"usdt@kline_1m")),n="https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=".concat(this.props.ticker,"&market=USD&apikey=SC9476BN3E2GJVGR");fetch(n).then((function(e){return e.json()})).then((function(e){return console.log(e)})),t.onmessage=function(t){e.updatePrice(t)}}},{key:"updatePrice",value:function(e){var t=JSON.parse(e.data).k.c;t=Number.parseFloat(t).toFixed(3);var n=document.getElementById("".concat(this.state.priceId));t>this.state.price&&(n.style.color="#40a35a",setTimeout((function(){return n.style.color="white"}),750)),t<this.state.price&&(n.style.color="#ab3733",setTimeout((function(){return n.style.color="white"}),750)),this.setState({price:t})}},{key:"render",value:function(){var e,t=(e={backgroundColor:"black",color:"white",marginBottom:"0px",width:"200px",border:"grey",margin:"0px"},Object(h.a)(e,"border","1px solid black"),Object(h.a)(e,"fontSize","20px"),Object(h.a)(e,"textAlign","left"),e);return Object(b.jsxs)("div",{style:t,children:[Object(b.jsxs)("div",{style:{display:"inline-flex"},children:[Object(b.jsx)("h6",{children:this.props.ticker}),Object(b.jsxs)("h6",{style:{fontSize:"12px",alignSelf:"center"},children:["\xa0-\xa0",this.props.name]})]}),Object(b.jsxs)("h4",{id:this.state.priceId,children:["$",this.state.price]})]})}}]),n}(a.a.Component),v=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e;e={backgroundColor:"black",color:"white",marginBottom:"0px",padding:"20px 50px 20px 50px",border:"grey",margin:"0px"},Object(h.a)(e,"border","1px solid black"),Object(h.a)(e,"fontSize","20px"),Object(h.a)(e,"textAlign","left");return Object(b.jsxs)(f.a,{pauseOnHover:!0,gradient:!1,children:[Object(b.jsx)(k,{ticker:"BTC",name:"Bitcoin"}),Object(b.jsx)(k,{ticker:"ETH",name:"Ethereum"}),Object(b.jsx)(k,{ticker:"XRP",name:"Ripple"}),Object(b.jsx)(k,{ticker:"ADA",name:"Cardano"}),Object(b.jsx)(k,{ticker:"BNB",name:"Binance Coin"}),Object(b.jsx)(k,{ticker:"SOL",name:"Solana"}),Object(b.jsx)(k,{ticker:"DOGE",name:"Dogecoin"}),Object(b.jsx)(k,{ticker:"LTC",name:"Litecoin"}),Object(b.jsx)(k,{ticker:"DOT",name:"Polkadot"}),Object(b.jsx)(k,{ticker:"BCH",name:"Bitcoin Cash"}),Object(b.jsx)(k,{ticker:"XLM",name:"Stellar"}),Object(b.jsx)(k,{ticker:"ETC",name:"ETH Classic"}),Object(b.jsx)(k,{ticker:"CAKE",name:"Pancake"})]})}}]),n}(a.a.Component),g=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{}),Object(b.jsx)(O,{})]})}}]),n}(a.a.Component);n(137);var y=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(g,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),C()},79:function(e,t,n){},80:function(e,t,n){},92:function(e,t){},94:function(e,t){}},[[138,1,2]]]);
//# sourceMappingURL=main.c86e5d66.chunk.js.map