(this.webpackJsonptodolistapp=this.webpackJsonptodolistapp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(7),c=n.n(i),r=(n(13),n(2)),l=n(3),o=n(5),d=n(4),m=n(8),u=(n(14),n(0)),j=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={name:"",age:""},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.additems,n=function(t){console.log(t.target.value),e.setState(Object(m.a)({},t.target.id,t.target.value))};return Object(u.jsx)("div",{className:"Additems",children:Object(u.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),""===n.target.name.value||""===n.target.age.value)return!1;t(e.state),e.setState({name:"",age:""})},children:[Object(u.jsx)("input",{type:"text",placeholder:"Enter your Name...",id:"name",onChange:n,value:this.state.name}),Object(u.jsx)("input",{type:"number",placeholder:"Enter your Age...",id:"age",onChange:n,value:this.state.age}),Object(u.jsx)("input",{type:"submit",value:"Add"})]})})}}]),n}(a.Component),h=j,p=(n(16),function(e){var t=e.items1,n=e.deleteitem,a=t.length?t.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{className:"name",children:[e.name," "]}),Object(u.jsx)("span",{className:"age",children:e.age}),Object(u.jsx)("span",{className:"action icon",onClick:function(){return n(t)},children:"\xd7"})]},t)})):Object(u.jsx)("p",{children:"There is no items to show"});return Object(u.jsxs)("div",{className:"Listitems",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"name title",children:"Name"}),Object(u.jsx)("span",{className:"age title",children:"Age"}),Object(u.jsx)("span",{className:"action title",children:"Action"})]}),a]})}),b=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={items:[{id:1,name:"Ahmad",age:23},{id:2,name:"Mohammed",age:26},{id:3,name:"Ali",age:28}]},e.deleteitem=function(t){var n=e.state.items;n.splice(t,1),e.setState({items:n})},e.additem=function(t){var n=e.state.items;n.push(t),e.setState({items:n})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App container",children:[Object(u.jsx)("h1",{className:"text-center",children:"TodoList App"}),Object(u.jsx)(p,{items1:this.state.items,deleteitem:this.deleteitem}),Object(u.jsx)(h,{additems:this.additem})]})}}]),n}(a.Component),g=b,O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.601a49cd.chunk.js.map