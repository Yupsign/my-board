(this["webpackJsonpmy-board"]=this["webpackJsonpmy-board"]||[]).push([[0],{30:function(e,a,t){e.exports=t(64)},35:function(e,a,t){},36:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(27),l=t.n(c),m=(t(35),t(36),t(37),t(4)),o=t.n(m),s=t(9),i=t(11),u=t(10),p=t.n(u),d=t(3),b=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){var e=Object(s.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3001/users");case 2:a=e.sent,c(a.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("http://localhost:3001/users/".concat(a));case 2:l();case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement("h1",null),r.a.createElement("table",{class:"table border shadow"},r.a.createElement("thead",{class:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"\ubc88\ud638"),r.a.createElement("th",{scope:"col"},"\uc774\ub984"),r.a.createElement("th",{scope:"col"},"\uc601\ubb38\uc774\ub984"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map((function(e,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},a+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email),r.a.createElement("td",null,r.a.createElement(d.b,{class:"btn btn-primary mr-2",to:"/users/".concat(e.id)},"\uc815\ubcf4"),r.a.createElement(d.b,{class:"btn btn-outline-primary mr-2",to:"/users/edit/".concat(e.id)},"\uc218\uc815"),r.a.createElement(d.b,{class:"btn btn-danger",onClick:function(){return m(e.id)}},"\uc0ad\uc81c")))}))))))},E=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement("h1",null,"Notice"),r.a.createElement("p",{className:"lead"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt nam accusantium? Soluta cupiditate, accusamus commodi praesentium laborum dolorum libero maiores!"),r.a.createElement("p",{className:"lead"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt nam accusantium? Soluta cupiditate, accusamus commodi praesentium laborum dolorum libero maiores!"),r.a.createElement("p",{className:"lead"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt nam accusantium? Soluta cupiditate, accusamus commodi praesentium laborum dolorum libero maiores!")),r.a.createElement("div",{className:"py-4"},r.a.createElement("h1",null,"Notice"),r.a.createElement("p",{className:"lead"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt nam accusantium? Soluta cupiditate, accusamus commodi praesentium laborum dolorum libero maiores!"),r.a.createElement("p",{className:"lead"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt nam accusantium? Soluta cupiditate, accusamus commodi praesentium laborum dolorum libero maiores!"),r.a.createElement("p",{className:"lead"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt nam accusantium? Soluta cupiditate, accusamus commodi praesentium laborum dolorum libero maiores!")))},f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement("h1",null),r.a.createElement("form",null,r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"\uc774\uba54\uc77c \uc8fc\uc18c"),r.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),r.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"\uc6b0\ub9ac\ub294 \uadc0\ud558\uc758 \uc815\ubcf4\ub97c \uacf5\uc720\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputPassword1"},"\ube44\ubc00\ubc88\ud638"),r.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1"})),r.a.createElement("div",{class:"mb-3"},r.a.createElement("label",{for:"exampleFormControlTextarea1",class:"form-label"},"\ub0b4\uc6a9"),r.a.createElement("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3"})),r.a.createElement("div",{class:"form-group form-check"},r.a.createElement("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),r.a.createElement("label",{class:"form-check-label",for:"exampleCheck1"},"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ub3d9\uc758")),r.a.createElement("button",{type:"submit",class:"btn btn-primary"},"\ubcf4\ub0b4\uae30"))))},v=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement(d.c,{className:"navbar-brand",exact:!0,to:"/"},"\ud68c\uc6d0 \uad00\ub9ac \uc2dc\uc2a4\ud15c"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.c,{className:"nav-link",exact:!0,to:"/"},"\ud648")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.c,{className:"nav-link",exact:!0,to:"/about"},"\uacf5\uc9c0\uc0ac\ud56d")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.c,{className:"nav-link",exact:!0,to:"/contact"},"\uace0\uac1d\uc13c\ud130")))),r.a.createElement(d.b,{className:"btn btn-outline-light",to:"/users/add"},"\ud68c\uc6d0 \ucd94\uac00")))},h=t(1),g=t(13),N=t(14),x=function(){var e=Object(h.f)(),a=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),t=Object(i.a)(a,2),c=t[0],l=t[1],m=c.name,u=c.username,d=c.email,b=c.phone,E=c.website,f=function(e){l(Object(N.a)(Object(N.a)({},c),{},Object(g.a)({},e.target.name,e.target.value)))},v=function(){var a=Object(s.a)(o.a.mark((function a(t){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,p.a.post("http://localhost:3001/users",c);case 3:e.push("/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"w-75 mx-auto shadow p-5"},r.a.createElement("h2",{className:"text-center mb-4"},"\ud68c\uc6d0 \uc815\ubcf4 \ucd94\uac00"),r.a.createElement("form",{onSubmit:function(e){return v(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"\uc774\ub984 ",name:"name",value:m,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"\uc601\ubb38\uc774\ub984",name:"username",value:u,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control form-control-lg",placeholder:"\uc774\uba54\uc77c",name:"email",value:d,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"\uc804\ud654\ubc88\ud638",name:"phone",value:b,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"\ud648\ud398\uc774\uc9c0 \uc8fc\uc18c",name:"website",value:E,onChange:function(e){return f(e)}})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Add User"))))},y=function(){var e=Object(h.f)(),a=Object(h.g)().id,t=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),c=Object(i.a)(t,2),l=c[0],m=c[1],u=l.name,d=l.username,b=l.email,E=l.phone,f=l.website,v=function(e){m(Object(N.a)(Object(N.a)({},l),{},Object(g.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){y()}),[]);var x=function(){var t=Object(s.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,p.a.put("http://localhost:3001/users/".concat(a),l);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3001/users/".concat(a));case 2:t=e.sent,m(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"w-75 mx-auto shadow p-5"},r.a.createElement("h2",{className:"text-center mb-4"},"\ud68c\uc6d0 \uc815\ubcf4 \uc218\uc815"),r.a.createElement("form",{onSubmit:function(e){return x(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:u,onChange:function(e){return v(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:d,onChange:function(e){return v(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:b,onChange:function(e){return v(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:E,onChange:function(e){return v(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:f,onChange:function(e){return v(e)}})),r.a.createElement("button",{className:"btn btn-warning btn-block"},"\uc218\uc815\ud558\uae30"))))},w=function(){var e=Object(n.useState)({name:"",username:"",email:"",phone:"",webiste:""}),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(h.g)().id;Object(n.useEffect)((function(){m()}),[]);var m=function(){var e=Object(s.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3001/users/".concat(l));case 2:a=e.sent,c(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container py-4"},r.a.createElement(d.b,{className:"btn btn-primary",to:"/"},"\ub4a4\ub85c\uac00\uae30"),r.a.createElement("h1",{className:"display-5"},"\ud68c\uc6d0 \uc815\ubcf4"),r.a.createElement("hr",null),r.a.createElement("ul",{className:"list-group w-50"},r.a.createElement("li",{className:"list-group-item"},"name: ",t.name),r.a.createElement("li",{className:"list-group-item"},"user name: ",t.username),r.a.createElement("li",{className:"list-group-item"},"email: ",t.email),r.a.createElement("li",{className:"list-group-item"},"phone: ",t.phone),r.a.createElement("li",{className:"list-group-item"},"website: ",t.website)))};var j=function(e){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:b}),r.a.createElement(h.a,{path:"/about",component:E}),r.a.createElement(h.a,{path:"/contact",component:f}),r.a.createElement(h.a,{path:"/users/add",component:x}),r.a.createElement(h.a,{path:"/users/edit/:id",component:y}),r.a.createElement(h.a,{path:"/users/:id",component:w}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.15864ab7.chunk.js.map