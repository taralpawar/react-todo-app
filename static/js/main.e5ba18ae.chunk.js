(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{44:function(e,t,a){e.exports=a(62)},49:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),o=(a(49),a(6)),u=a(64),i=a(37),m=a(65),s=a(19),d=a.n(s),E=Object(n.createContext)(),v=function(e){var t=Object(n.useState)([{text:"Give me attention",id:d.a.generate()}]),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(E.Provider,{value:[r,c,function(e){var t=r.filter((function(t){return t.id!==e}));console.log(e),c(t)}]},e.children)},p=function(e){var t=Object(n.useContext)(E),a=Object(o.a)(t,3),r=(a[0],a[1],a[2]);return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(i.a,{xs:8},l.a.createElement("h5",null,e.todoname)),l.a.createElement(i.a,{xs:4},l.a.createElement(m.a,{size:"sm",onClick:function(){r(e.id)}},"Completed"))))},b=a(73),h=a(71),f=a(66),g=function(){var e=Object(n.useContext)(E),t=Object(o.a)(e,2),a=t[0],r=(t[1],a.length?l.a.createElement(b.a,null,a.map((function(e){return l.a.createElement(b.a.Item,null,l.a.createElement(p,{todoname:e.text,id:e.id}))}))):l.a.createElement(h.a,{variant:"success"}," No Pending Tasks !"));return l.a.createElement("div",null,l.a.createElement(f.a,{style:{padding:"20px"}},r))},j=(a(60),a(43)),O=a(69),x=a(67),w=a(42),C=function(){var e=Object(n.useContext)(E),t=Object(o.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)(""),c=Object(o.a)(r,2),u=c[0],i=c[1];return l.a.createElement(f.a,null,l.a.createElement(O.a,{onSubmit:function(e){e.preventDefault(),console.log(u),i(""),a((function(e){return[{text:u,id:d.a.generate()}].concat(Object(j.a)(e))}))}},l.a.createElement(x.a,null,l.a.createElement(w.a,{placeholder:"Add new todo...",value:u,onChange:function(e){i(e.target.value)}}),l.a.createElement(x.a.Append,null,l.a.createElement(m.a,{variant:"primary",type:"submit"},"Add")))))},k=a(70),y=a(72),T=function(){var e=Object(n.useContext)(E),t=Object(o.a)(e,2),a=t[0];t[1];return l.a.createElement("div",null,l.a.createElement(k.a,{bg:"light",expand:"lg"},l.a.createElement(k.a.Brand,{href:"#home"},l.a.createElement("h3",null,"Total Tasks : ",a.length)),l.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(y.a,{className:"mr-auto"}))))},A=a(68),S=function(){return l.a.createElement(v,null,l.a.createElement("div",{className:"App"},l.a.createElement(T,null),l.a.createElement(A.a,null,l.a.createElement("h1",null,"ToDo's")),l.a.createElement(C,null),l.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.e5ba18ae.chunk.js.map