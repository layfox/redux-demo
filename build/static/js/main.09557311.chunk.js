(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(37)},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(12),o=n.n(c),l=(n(31),n(13)),i=n(14),u=n(21),m=n(15),f=n(23),d=n(5),s=0,p=n(40),E=function(e){var t=e.filter,n=e.children;return a.a.createElement(p.a,{exact:!0,to:"all"===t?"/":"/".concat(t),activeStyle:{textDecoration:"none",color:"black"}},n)},v=function(){return a.a.createElement("p",null,"Show:"," ",a.a.createElement(E,{filter:"all"},"ALL"),", ",a.a.createElement(E,{filter:"active"},"ACTIVE"),", ",a.a.createElement(E,{filter:"completed"},"COMPLETED"))},h=Object(d.b)()(function(e){var t,n=e.dispatch;return a.a.createElement("form",{onSubmit:function(e){var r;e.preventDefault(),t.value.trim()&&(n((r=t.value,{type:"ADD_TODO",id:s++,text:r})),t.value="")}},a.a.createElement("input",{ref:function(e){t=e}}),a.a.createElement("button",{type:"submit"},"Add Todo"))}),O=function(e){var t=e.onClick,n=e.text,r=e.completed;return a.a.createElement("li",{onClick:t,style:{textDecoration:r?"line-through":""}},n)},b=function(e){var t=e.todos,n=e.onTodoClick;return a.a.createElement("ul",null,t.map(function(e,t){return a.a.createElement(O,Object.assign({key:t},e,{onClick:function(){return n(t)}}))}))},w=Object(d.b)(function(e,t){return{todos:function(e,t){switch(t){case"all":return e;case"active":return e.filter(function(e){return!e.completed});case"completed":return e.filter(function(e){return e.completed});default:return e}}(e.todos,t.filter)}},function(e){return{onTodoClick:function(t){e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}})(b),T=function(e){var t=e.match;return a.a.createElement("div",null,a.a.createElement(h,null),a.a.createElement(w,{filter:t.params.filter||"all"}),a.a.createElement(v,null))},j=n(6),k=n(24),y=n(20),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(y.a)(e).concat([{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map(function(e){return e.id==t.id?Object(k.a)({},e,{completed:!e.completed}):e});default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},x=Object(j.b)({todos:D,filter:g}),C=n(38),I=n(39),L=n(22),_=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(j.c)(x);return a.a.createElement(d.a,{store:e},a.a.createElement(C.a,null,a.a.createElement(I.a,null,a.a.createElement(L.a,{path:"/:filter",component:T}),a.a.createElement(L.a,{path:"/",component:T}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.09557311.chunk.js.map