(this.webpackJsonpcryptowebapp=this.webpackJsonpcryptowebapp||[]).push([[0],{118:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=118},134:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(22),i=n.n(a),o=(n(79),n(15)),s=n(16),j=n(18),b=n(17),l=(n(80),n(139),n(81),n(1));n(85);r.a.Component;var u=n(144),p=n(142),d=n(143),O=(n(133),n(134),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(l.jsx)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(l.jsxs)(p.a,{children:[Object(l.jsx)(u.a.Brand,{className:"fontnav",href:"#home",children:"Crypto Web App"}),Object(l.jsx)(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(l.jsxs)(u.a.Collapse,{id:"responsive-navbar-nav",children:[Object(l.jsx)(d.a,{className:"me-auto"}),Object(l.jsxs)(d.a,{children:[Object(l.jsx)(d.a.Link,{className:"fontnav",href:"#deets",children:"Home"}),Object(l.jsx)(d.a.Link,{className:"fontnav",href:"#deets",children:"Charts"}),Object(l.jsx)(d.a.Link,{className:"fontnav",href:"#deets",children:"Trading Bot"})]})]})]})})}}]),n}(r.a.Component)),h=n(4),x=n(74),f=n.n(x),k=n(40),v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={price:0,priceId:"".concat(c.props.ticker,"display").concat(Math.random())},c.updatePrice=c.updatePrice.bind(Object(k.a)(c)),c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new WebSocket("wss://stream.binance.com:9443/ws/".concat(this.props.ticker.toLowerCase(),"usdt@kline_1m")),n="https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=".concat(this.props.ticker,"&market=USD&apikey=SC9476BN3E2GJVGR");fetch(n).then((function(e){return e.json()})).then((function(e){return console.log(e)})),t.onmessage=function(t){e.updatePrice(t)}}},{key:"updatePrice",value:function(e){var t=JSON.parse(e.data).k.c;t=Number.parseFloat(t).toFixed(3);var n=document.getElementById("".concat(this.state.priceId));t>this.state.price&&(n.style.color="#40a35a",setTimeout((function(){return n.style.color="white"}),750)),t<this.state.price&&(n.style.color="#ab3733",setTimeout((function(){return n.style.color="white"}),750)),this.setState({price:t})}},{key:"render",value:function(){var e,t=(e={backgroundColor:"black",color:"white",marginBottom:"0px",width:"200px",border:"grey",margin:"0px"},Object(h.a)(e,"border","1px solid black"),Object(h.a)(e,"fontSize","20px"),Object(h.a)(e,"textAlign","left"),e);return Object(l.jsxs)("div",{style:t,children:[Object(l.jsx)("div",{style:{display:"inline-flex"},children:Object(l.jsx)("h6",{children:this.props.ticker})}),Object(l.jsxs)("h4",{id:this.state.priceId,children:["$",this.state.price]})]})}}]),n}(r.a.Component),m=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e;e={backgroundColor:"black",color:"white",marginBottom:"0px",padding:"20px 50px 20px 50px",border:"grey",margin:"0px"},Object(h.a)(e,"border","1px solid black"),Object(h.a)(e,"fontSize","20px"),Object(h.a)(e,"textAlign","left");return Object(l.jsxs)(f.a,{pauseOnHover:!0,gradient:!1,children:[Object(l.jsx)(v,{ticker:"BTC"}),Object(l.jsx)(v,{ticker:"ETH"}),Object(l.jsx)(v,{ticker:"XRP"}),Object(l.jsx)(v,{ticker:"ADA"}),Object(l.jsx)(v,{ticker:"BNB"}),Object(l.jsx)(v,{ticker:"SOL"}),Object(l.jsx)(v,{ticker:"DOGE"}),Object(l.jsx)(v,{ticker:"LTC"}),Object(l.jsx)(v,{ticker:"DOT"}),Object(l.jsx)(v,{ticker:"BCH"}),Object(l.jsx)(v,{ticker:"XLM"}),Object(l.jsx)(v,{ticker:"ETC"}),Object(l.jsx)(v,{ticker:"CAKE"})]})}}]),n}(r.a.Component),y=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{}),Object(l.jsx)(O,{})]})}}]),n}(r.a.Component);n(137);var g=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(y,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),C()},79:function(e,t,n){},80:function(e,t,n){},92:function(e,t){},94:function(e,t){}},[[138,1,2]]]);
//# sourceMappingURL=main.24216431.chunk.js.map