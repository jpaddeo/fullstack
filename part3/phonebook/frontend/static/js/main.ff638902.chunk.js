(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),s=t(14),a=t.n(s),j=t(4),u=t(15),o=t.n(u),b=t(0),i=function(e){var n=e.persons,t=e.setPersons,r=Object(c.useState)(""),s=Object(j.a)(r,2),a=s[0],u=s[1];return Object(b.jsxs)("div",{children:["search:",Object(b.jsx)("input",{value:a,onChange:function(e){u(e.target.value),t(n.filter((function(n){return n.name.includes(e.target.value)})))}})]})},d=t(3),O=function(e){var n=e.persons,t=e.setPersons,r=Object(c.useState)({id:0,name:"",number:""}),s=Object(j.a)(r,2),a=s[0],u=s[1];return Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{children:["name:"," ",Object(b.jsx)("input",{value:a.name,onChange:function(e){u(Object(d.a)(Object(d.a)({},a),{},{name:e.target.value}))}}),"number:"," ",Object(b.jsx)("input",{value:a.number,onChange:function(e){u(Object(d.a)(Object(d.a)({},a),{},{number:e.target.value}))}})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),u(Object(d.a)(Object(d.a)({},a),{},{id:n.length+1})),n.filter((function(e){return e.name===a.name})).length>0?alert("".concat(a.name," is already added to phonebook")):(t(n.concat(a)),u({id:0,name:"",number:""}))},children:"add"})})]})},h=function(e){var n=e.name,t=e.number;return Object(b.jsxs)("h2",{children:[n," ",t]})},l=function(e){var n=e.persons;return Object(b.jsx)("ul",{children:n.map((function(e){return Object(b.jsx)(h,{name:e.name,number:e.number},e.id)}))})},m=function(){var e=Object(c.useState)([]),n=Object(j.a)(e,2),t=n[0],r=n[1];return Object(c.useEffect)((function(){o.a.get("/api/persons").then((function(e){r(e.data)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"PhoneBook"}),Object(b.jsx)("h3",{children:"Search"}),Object(b.jsx)(i,{persons:t,setPersons:r}),Object(b.jsx)("h3",{children:"Add new"}),Object(b.jsx)(O,{persons:t,setPersons:r}),Object(b.jsx)("h3",{children:"Numbers"}),Object(b.jsx)(l,{persons:t})]})};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ff638902.chunk.js.map