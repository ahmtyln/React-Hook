(this["webpackJsonpreact-hook"]=this["webpackJsonpreact-hook"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(5),r=n.n(s),i=(n(14),n(3)),u=(n(15),n(6)),a=n(7),l=n(2),j=n(9),b=n(8),d=n(0),h=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).increase=c.increase.bind(Object(l.a)(c)),c.decrease=c.decrease.bind(Object(l.a)(c)),c.reset=c.reset.bind(Object(l.a)(c)),c.state={counter:0,resetCounter:0},c}return Object(a.a)(n,[{key:"componentDidMount",value:function(){console.log("ComponentDidMount")}},{key:"componentDidUpdate",value:function(){console.log("ComponentDidUpdate")}},{key:"componentWillUnmount",value:function(){console.log("componentwillunmount")}},{key:"increase",value:function(){this.setState({counter:this.state.counter+1})}},{key:"decrease",value:function(){this.setState({counter:this.state.counter-1})}},{key:"reset",value:function(){this.setState({counter:this.state.resetCounter})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"class",children:[Object(d.jsx)("h2",{children:"Class Component"}),Object(d.jsxs)("p",{children:["Counter:",this.state.counter]}),Object(d.jsx)("button",{onClick:function(){return e.increase()},children:"\u0130ncrease"}),Object(d.jsx)("button",{onClick:function(){return e.decrease()},children:"Decrease"}),Object(d.jsx)("button",{onClick:function(){return e.reset()},children:"Reset"})]})}}]),n}(c.Component),f=function(e){var t=Object(c.useState)(0),n=Object(i.a)(t,2),o=n[0],s=n[1];Object(c.useEffect)((function(){return console.log("useeffect"),function(){console.log("functionalcomponentwillunmount")}}),[o]);return Object(d.jsxs)("div",{className:"function",children:[Object(d.jsx)("h2",{children:"Functional Component"}),Object(d.jsxs)("p",{children:["Counter:",o]}),Object(d.jsx)("button",{onClick:function(){s(o+1)},children:"\u0130ncrease"}),Object(d.jsx)("button",{onClick:function(){s(o-1)},children:"Decrease"}),Object(d.jsx)("button",{onClick:function(){s(e.counter)},children:"Reset"})]})};f.defaultProps={counter:0};var O=f;var p=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("button",{onClick:function(){return o(!n)},children:"Toogle"}),n&&Object(d.jsx)(h,{}),n?Object(d.jsx)(O,{counter:0}):null]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),C()}},[[17,1,2]]]);
//# sourceMappingURL=main.c3a489f7.chunk.js.map