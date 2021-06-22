(this["webpackJsonpexpenses-app"]=this["webpackJsonpexpenses-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(8),s=n.n(l),i=(n(14),n(5)),r=n(2),o=(n(15),[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}]),j=(n(16),n(17),n(18),n(19),n(0)),u=function(e){var t=e.className,n=e.children,a="card-style ".concat(t);return Object(j.jsx)("div",{className:a,children:n})},d=function(e){var t=e.date,n=t.toLocaleString("pl-PL",{month:"long"}),a=t.toLocaleString("pl-PL",{day:"2-digit"}),c=t.getFullYear();return Object(j.jsxs)(u,{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:n}),Object(j.jsx)("div",{className:"expense-date__year",children:c}),Object(j.jsx)("div",{className:"expense-date__day",children:a})]})},b=function(e){var t=e.title,n=e.date,a=e.amount;return Object(j.jsx)("li",{children:Object(j.jsxs)(u,{className:"expense-item",children:[Object(j.jsx)(d,{date:n}),Object(j.jsxs)("section",{className:"expense-item__description",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsxs)("p",{className:"expense-item__price",children:["$",a]})]})]})})},x=(n(21),function(e){return 0===e.filteredItems.length?Object(j.jsx)("h2",{className:"expenses-list__fallback",children:"No expenses for this year"}):Object(j.jsx)("ul",{className:"expenses-list",children:e.filteredItems.map((function(e){return Object(j.jsx)(b,{title:e.title,date:e.date,amount:e.amount},e.id)}))})}),h=(n(22),function(e){return Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter by year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){console.log("filter: ".concat(t.target.value)),e.onChangeSelectedYear(t.target.value)},children:[Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2019",children:"2019"})]})]})})}),O=n(9),m=(n(23),n(24),function(e){var t="0%";return e.maxValue>0&&(t="".concat(Math.round(e.value/e.maxValue*100),"%")),Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar__inner",children:Object(j.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(j.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=function(e){var t=e.data.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.data.map((function(e){return Object(j.jsx)(m,{value:e.value,maxValue:n,label:e.label},e.label)}))})},p=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"July",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(O.a)(e.filteredItems);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(j.jsx)(v,{data:n})},f=function(e){var t=e.items,n=Object(a.useState)("2021"),c=Object(r.a)(n,2),l=c[0],s=c[1],i=t.filter((function(e){return e.date.getFullYear().toString()===l}));return Object(j.jsx)("div",{children:Object(j.jsxs)(u,{className:"expenses",children:[Object(j.jsx)(p,{filteredItems:i}),Object(j.jsx)(h,{selected:l,onChangeSelectedYear:function(e){console.log("expenses: ".concat(e)),s(e)}}),Object(j.jsx)(x,{filteredItems:i})]})})},g=n(7),N=(n(25),n(26),function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),o=i[0],u=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),x=b[0],h=b[1];return Object(j.jsx)("form",{action:"",onSubmit:function(t){t.preventDefault();var n={title:c,amount:+o,date:new Date(x)};e.onSaveExpenseData(n),l(""),u(""),h("")},children:Object(j.jsxs)("section",{className:"new-expense__controls",children:[Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{htmlFor:"",children:"Title"}),Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){l(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{htmlFor:"",children:"Amount"}),Object(j.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:o,onChange:function(e){u(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{htmlFor:"",children:"Date"}),Object(j.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){h(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__actions",children:[Object(j.jsx)("button",{type:"subbmit",children:"Add new Expence"}),Object(j.jsx)("button",{type:"button",onClick:e.onHideFormHandler,children:"Cancel"})]})]})})}),_=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],l=n[1];return c?Object(j.jsx)("div",{className:"new-expense",children:Object(j.jsx)(N,{onSaveExpenseData:function(t){var n=Object(g.a)(Object(g.a)({},t),{},{id:Math.random().toString()});e.onAddExpenseData(n),l(!1)},onHideFormHandler:function(){l(!1)}})}):Object(j.jsx)("div",{className:"new-expense",children:Object(j.jsx)("button",{onClick:function(){l(!0)},children:"Add new expense"})})};var y=function(){var e=Object(a.useState)(o),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Expense Manager"}),Object(j.jsx)(_,{onAddExpenseData:function(e){console.log(e),c((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(j.jsx)(f,{items:n})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),w()}],[[27,1,2]]]);
//# sourceMappingURL=main.fea44763.chunk.js.map