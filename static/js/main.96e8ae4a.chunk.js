(this.webpackJsonpcatfriends=this.webpackJsonpcatfriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),i=(n(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=n(5),u=n(7),d=n(15),h=n(16),f=(n(28),n(1)),p=n(2),b=n(4),g=n(3),m=function(){return function(e){var t;e({type:"REQUEST_ROBOTS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}},v=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,".png?set=set4&size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},E=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(v,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},O=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Cats",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search cats",onChange:t}))},w=function(e){return a.a.createElement("div",{style:{border:"1px solid black"}},e.children)},y=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return a.a.createElement("h1",{className:"f1"},"CatFriends")}}]),n}(r.Component),j=n(11);var C=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e,t){return Object(j.a)(Object(j.a)({},e),{},{count:e.count+1})}))},e.state={count:0},e}return Object(p.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return console.log(e,t),!0}},{key:"render",value:function(){return a.a.createElement("a",{className:"f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue noselect",onClick:this.updateCount},"Count: ",this.state.count)}}]),n}(r.Component),S=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),n}(r.Component),R=(n(29),function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,r=e.onSearchChange,o=e.isPending,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.a.createElement("div",{className:"tc"},a.a.createElement(y,null),a.a.createElement(C,{color:"red"}),a.a.createElement(O,{searchChange:r}),a.a.createElement(w,null,o?a.a.createElement("h1",null,"Loading"):a.a.createElement(S,null,a.a.createElement(E,{robots:c}))))}}]),n}(r.Component)),k=Object(u.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(m())}}}))(R),N={searchField:""},T={robots:[],isPending:!0},_=Object(h.createLogger)(),U=Object(l.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}}),A=Object(l.d)(U,Object(l.a)(d.a,_));c.a.render(a.a.createElement(u.a,{store:A},a.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/catfriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/catfriends","/service-worker.js");i?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.96e8ae4a.chunk.js.map