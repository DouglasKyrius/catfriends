(this.webpackJsonpcatfriends=this.webpackJsonpcatfriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o);n(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(5),s=n(7),u=n(15),l=n(16),h=(n(28),n(1)),d=n(2),b=n(4),p=n(3),m=function(){return function(e){var t;e({type:"REQUEST_ROBOTS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}},E=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,".png?set=set4")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},f=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(E,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},g=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search cats",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{border:"1px solid black"}},e.children)},O=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return r.a.createElement("h1",{className:"f1"},"CatFriends")}}]),n}(a.Component),j=n(11);var y=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e,t){return Object(j.a)(Object(j.a)({},e),{},{count:e.count+1})}))},e.state={count:0},e}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return console.log(e,t),!0}},{key:"render",value:function(){return r.a.createElement("a",{className:"f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue noselect",onClick:this.updateCount},"Count: ",this.state.count)}}]),n}(a.Component),C=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),n}(a.Component),S=(n(29),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,a=e.onSearchChange,o=e.isPending,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement(O,null),r.a.createElement(y,{color:"red"}),r.a.createElement(g,{searchChange:a}),r.a.createElement(v,null,o?r.a.createElement("h1",null,"Loading"):r.a.createElement(C,null,r.a.createElement(f,{robots:c}))))}}]),n}(a.Component)),R=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(m())}}}))(S),w={searchField:""},k={robots:[],isPending:!0},_=Object(l.createLogger)(),N=Object(i.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}}),T=Object(i.d)(N,Object(i.a)(u.a,_));c.a.render(r.a.createElement(s.a,{store:T},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a9b2c1ae.chunk.js.map