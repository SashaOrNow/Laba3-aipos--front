(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{125:function(e,t,a){e.exports=a(285)},130:function(e,t,a){},131:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(77),i=a.n(s),c=(a(130),a(131),a(4)),o=a(5),u=a(7),p=a(6),l=a(8),m=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("label",null,"You are welcome!"))}}]),t}(n.a.Component),d=a(82),h=JSON.stringify,y={credentials:"include","Content-type":"application/json",Accept:"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",Authorization:"Basic "},b=function(e,t){return"https://localhost:8443"+(e||"")+(t?"?"+function(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")}(t):"")};var v={getJSON:function(e){var t=e.url,a=e.params;return fetch(b(t,a),{headers:y,credentials:"same-origin"})},postJSON:function(e){var t=e.url,a=e.data,r=e.params,n=e.options,s=void 0===n?{}:n;return console.log(h(a)),fetch(b(t,r),Object(d.a)({},s,{headers:y,credentials:"same-origin",method:"POST",body:h(a),mode:"cors"}))},deleteJSON:function(e){var t=e.url,a=e.data,r=e.options,n=void 0===r?{}:r;return fetch(b(t),Object(d.a)({},n,{headers:y,credentials:"same-origin",method:"DELETE",body:h(a)}))}},f=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];return v[e].apply(v,a).then((function(e){return e.json()})).catch((function(e){}))},g=function(e){return f("getJSON",{url:"/users/"+e+"/watchRoutes"})},E=function(e){return f("deleteJSON",{url:"/routes/"+e+"/delete"})},N=function(e){return f("deleteJSON",{url:"/transports/"+e+"/delete"})},C=function(){return f("getJSON",{url:"/routes/all"})},O=function(){return f("getJSON",{url:"/transports/all"})},S=function(){return f("getJSON",{url:"/types/all"})},j=function(e,t,a){return f("postJSON",{url:"/transports/add",data:{type:e,capacity:t,name:a}})},k=function(e,t,a,r,n,s,i,c,o,u,p){return f("postJSON",{url:"/routes/add",data:{departureAddress:{country:e,city:t,street:a,number:r},arrivalAddress:{country:n,city:s,street:i,number:c},departureDateTime:o,arrivalDateTime:u,transport:p}})},D=function(e,t,a,r){return f("postJSON",{url:"/transports/"+e+"/update",data:{type:t,capacity:a,name:r}})},A=function(e,t){return f("postJSON",{url:"/routes/"+e+"/join",data:{login:t}})},x=function(e){return f("getJSON",{url:"/types/"+e})},T=function(e){return f("getJSON",{url:"/transports/"+e})},J=function(e){return f("getJSON",{url:"/users/"+e})},w=function(e,t,a,r,n,s,i,c,o,u,p,l){return f("postJSON",{url:"/routes/"+e+"/update",data:{departureAddress:{country:t,city:a,street:r,number:n},arrivalAddress:{country:s,city:i,street:c,number:o},departureDateTime:u,arrivalDateTime:p,transport:l}})},I=function(e){return f("getJSON",{url:"/routes/"+e})},M=a(122),R=a.n(M)()(),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={login:null},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"loginChange",value:function(e){this.setState({login:e.target.value})}},{key:"onclick",value:function(){var e=this;this.props.match.params.id?(A(this.props.match.params.id,this.state.login),this.props.history.push("/routes")):J(this.state.login).then((function(t){1==t?e.props.history.push("/users/"+e.state.login+"/watchRoutes"):e.props.history.push("/")}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("form",{method:"post"},n.a.createElement("div",null,n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"name"},"Login")),n.a.createElement("input",{type:"text",onInput:this.loginChange.bind(this),className:"form-control",placeholder:"Name","aria-label":"Name","aria-describedby":"name"}))),n.a.createElement("button",{className:"btn btn-outline-success p-2",onClick:function(t){e.onclick()},type:"button"}," Push ")))}}]),t}(n.a.Component),P=a(18),W=a(16),z=a(286),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"getOpportunities",value:function(){var e=this,t=this.props.update;if(1==this.props.join)return n.a.createElement("div",null,n.a.createElement("div",{className:"d-flex justify-content-around mb-4"},n.a.createElement(P.a,{className:"m-2",icon:W.c,onClick:function(a){t(e.props.id)}}),n.a.createElement(z.a,{type:"button",to:"/routes/".concat(this.props.id,"/join"),className:"btn btn-primary m-3"},"Join"),n.a.createElement(P.a,{className:"m-2",icon:W.a,onClick:function(t){e.props.history.push("/routes/"+e.props.id+"/update")}})))}},{key:"formatDate",value:function(e){if(null!=e){var t=e.getDate(),a=e.getMonth(),r=e.getFullYear();return t+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][a]+" "+r}}},{key:"render",value:function(){return n.a.createElement("div",{className:"card d-flex justify-content-around"},n.a.createElement("h4",null,this.props.transportName),n.a.createElement("h6",null,this.props.transportType),n.a.createElement("h4",null,"From: ",this.props.departureAddress),n.a.createElement("h6",null,this.formatDate(new Date(this.props.depDateTime))),n.a.createElement("h4",null,"To: ",this.props.arrivalAddress),n.a.createElement("h6",null,this.formatDate(new Date(this.props.arrDateTime))),n.a.createElement("strong",null,"Free seats: ",this.props.freeSeats),this.getOpportunities())}}]),t}(n.a.Component),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).update=function(e){E(e).then((function(e){a.setState({routes:e})}))},a.state={routes:null},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;C().then((function(t){e.setState({routes:t})}))}},{key:"componentWillMount",value:function(){var e=this;C().then((function(t){e.setState({routes:t})}))}},{key:"getArr",value:function(e){var t=this;if(e)return e.map((function(e){return n.a.createElement(B,Object.assign({departureAddress:e.departureAddress.country+" "+e.departureAddress.city,arrivalAddress:e.arrivalAddress.country+" "+e.arrivalAddress.city,id:e.id,depDateTime:e.departureDateTime,arrDateTime:e.arrivalDateTime,freeSeats:e.freeSeats,transportName:e.transport.name,transportType:e.transport.type.description,update:t.update},t.props,{join:!0}))}))}},{key:"render",value:function(){var e=this;if(this.state.routes)var t=this.state.routes;return n.a.createElement("div",{className:"container row"},this.getArr(t),n.a.createElement("div",{onClick:function(t){e.props.history.push("/routes/add")},className:"card addCard"},n.a.createElement(P.a,{icon:W.b,size:"8x"})))}}]),t}(n.a.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={routes:null},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g(this.props.match.params.login).then((function(t){e.setState({routes:t})}))}},{key:"getArr",value:function(e){var t=this;if(e)return e.map((function(e){return n.a.createElement(B,Object.assign({departureAddress:e.departureAddress.country+" "+e.departureAddress.city,arrivalAddress:e.arrivalAddress.country+" "+e.arrivalAddress.city,id:e.id,depDateTime:e.departureDateTime,arrDateTime:e.arrivalDateTime,freeSeats:e.freeSeats,transportName:e.transport.name,transportType:e.transport.type.description},t.props,{join:!1}))}))}},{key:"render",value:function(){if(this.state.routes)var e=this.state.routes;return n.a.createElement("div",{className:"container row"},this.getArr(e))}}]),t}(n.a.Component),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.update;return n.a.createElement("div",{className:"card d-flex justify-content-around"},n.a.createElement("h4",null,this.props.name),n.a.createElement("h6",null,this.props.type),n.a.createElement("strong",null,"Capacity: ",this.props.capacity),n.a.createElement("div",{className:"d-flex justify-content-around mb-2"},n.a.createElement(P.a,{icon:W.c,onClick:function(){t(e.props.id)}}),n.a.createElement(P.a,{icon:W.a,onClick:function(){e.props.history.push("/transports/"+e.props.id+"/update")}})))}}]),t}(n.a.Component),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).update=function(e){N(e).then((function(e){a.setState({transports:e})}))},a.state={transports:null},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({transports:t})}))}},{key:"componentWillMount",value:function(){var e=this;O().then((function(t){e.setState({transports:t})}))}},{key:"getArr",value:function(e){var t=this;if(e)return e.map((function(e){return n.a.createElement(Y,Object.assign({name:e.name,capacity:e.capacity,id:e.id,type:e.type.description,update:t.update},t.props))}))}},{key:"render",value:function(){var e=this;if(this.state.transports)var t=this.state.transports;return n.a.createElement("div",{className:"container row"},this.getArr(t),n.a.createElement("div",{onClick:function(){e.props.history.push("/transports/add")},className:"card addCard"},n.a.createElement(P.a,{icon:W.b,size:"8x"})))}}]),t}(n.a.Component),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={types:null,capacity:null,type:null,name:null,transport:null},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;S().then((function(t){e.props.match.params.id?T(e.props.match.params.id).then((function(a){e.setState({types:t,transport:a,capacity:a.capacity,type:a.type,name:a.name})})):e.setState({types:t})}))}},{key:"typeChange",value:function(e){var t=this;x(e.target.value).then((function(e){t.setState({type:e})}))}},{key:"nameChange",value:function(e){this.setState({name:e.target.value})}},{key:"capacityChange",value:function(e){this.setState({capacity:e.target.value})}},{key:"getArr",value:function(e){if(e)return e.map((function(e){return n.a.createElement("option",{value:e.id},e.description)}))}},{key:"onclick",value:function(){null!=this.props.match.params.id?D(this.props.match.params.id,this.state.type,this.state.capacity,this.state.name):j(this.state.type,this.state.capacity,this.state.name),this.props.history.push("/transports")}},{key:"render",value:function(){var e=this;if(this.state.types)var t=this.state.types;return n.a.createElement("div",{className:"container"},n.a.createElement("form",{method:"post"},n.a.createElement("div",{className:"container p-2"},n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("label",{className:"input-group-text",htmlFor:"inputType"},"Type")),n.a.createElement("select",{onInput:this.typeChange.bind(this),className:"custom-select",id:"inputType"},n.a.createElement("option",{selected:!0},"Choose..."),this.getArr(t))),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"name"},"Name")),n.a.createElement("input",{onInput:this.nameChange.bind(this),type:"text",className:"form-control","aria-label":"Name","aria-describedby":"name"})),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"capacity"},"Capacity")),n.a.createElement("input",{type:"number",min:"0",onInput:this.capacityChange.bind(this),className:"form-control","aria-label":"Capacity","aria-describedby":"capacity"})),n.a.createElement("button",{className:"btn btn-outline-success p-2",onClick:function(t){e.onclick()},type:"button"},"Save"))))}}]),t}(n.a.Component),G=(a(139),a(81)),H=(a(283),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).depDateChange=function(e){a.setState({depDateTime:e})},a.arrDateChange=function(e){a.setState({arrDateTime:e})},a.state={transports:null,transport:null,depCountry:null,depCity:null,depStreet:null,depNumber:null,arrCountry:null,arrCity:null,arrStreet:null,arrNumber:null,depDateTime:null,arrDateTime:null},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.props.match.params.id?I(e.props.match.params.id).then((function(a){e.setState({transports:t,route:a,transport:a.transport,depCountry:a.departureAddress.country,depCity:a.departureAddress.city,depStreet:a.departureAddress.street,depNumber:a.departureAddress.number,arrCountry:a.arrivalAddress.country,arrCity:a.arrivalAddress.city,arrStreet:a.arrivalAddress.street,arrNumber:a.arrivalAddress.number,depDateTime:a.departureDateTime,arrDateTime:a.arrivalDateTime})})):e.setState({transports:t})}))}},{key:"getArr",value:function(e){if(e)return e.map((function(e){return n.a.createElement("option",{value:e.id},e.name,", ",e.type.description)}))}},{key:"depCountryChange",value:function(e){this.setState({depCountry:e.target.value})}},{key:"arrCountryChange",value:function(e){this.setState({arrCountry:e.target.value})}},{key:"depCityChange",value:function(e){this.setState({depCity:e.target.value})}},{key:"arrCityChange",value:function(e){this.setState({arrCity:e.target.value})}},{key:"depStreetChange",value:function(e){this.setState({depStreet:e.target.value})}},{key:"arrStreetChange",value:function(e){this.setState({arrStreet:e.target.value})}},{key:"depNumberChange",value:function(e){this.setState({depNumber:e.target.value})}},{key:"arrNumberChange",value:function(e){this.setState({arrNumber:e.target.value})}},{key:"transportChange",value:function(e){var t=this;T(e.target.value).then((function(e){t.setState({transport:e})}))}},{key:"onclick",value:function(){this.props.match.params.id?w(this.props.match.params.id,this.state.depCountry,this.state.depCity,this.state.depStreet,this.state.depNumber,this.state.arrCountry,this.state.arrCity,this.state.arrStreet,this.state.arrNumber,this.state.depDateTime,this.state.arrDateTime,this.state.transport):k(this.state.depCountry,this.state.depCity,this.state.depStreet,this.state.depNumber,this.state.arrCountry,this.state.arrCity,this.state.arrStreet,this.state.arrNumber,this.state.depDateTime,this.state.arrDateTime,this.state.transport),this.props.history.push("/routes")}},{key:"render",value:function(){var e=this;if(this.state.transports)var t=this.state.transports;return n.a.createElement("div",{className:"container"},n.a.createElement("form",{method:"post"},n.a.createElement("div",{className:"container p-2"},n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("label",{className:"input-group-text",for:"inputType"},"Transport")),n.a.createElement("select",{onInput:this.transportChange.bind(this),className:"custom-select",id:"inputType"},n.a.createElement("option",{selected:!0},"Choose..."),this.getArr(t))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"container"},n.a.createElement("label",null,"Departure address"),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"country"},"Country")),n.a.createElement("input",{type:"text",onInput:this.depCountryChange.bind(this),className:"form-control","aria-label":"Country","aria-describedby":"country"})),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"city"},"City")),n.a.createElement("input",{type:"text",onInput:this.depCityChange.bind(this),className:"form-control","aria-label":"city","aria-describedby":"city"})),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"street"},"Street")),n.a.createElement("input",{type:"text",onInput:this.depStreetChange.bind(this),className:"form-control","aria-label":"street","aria-describedby":"street"})),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"number"},"Number")),n.a.createElement("input",{type:"text",onInput:this.depNumberChange.bind(this),className:"form-control","aria-label":"number","aria-describedby":"number"}))),n.a.createElement("div",{className:"input-group mb-3 ml-3"},n.a.createElement(G.DatePickerInput,{onChange:this.depDateChange.bind(this),minDate:new Date,className:"my-custom-datepicker-component"}))),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"container"},n.a.createElement("label",null,"Arrival address"),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"arrcountry"},"Country")),n.a.createElement("input",{type:"text",onInput:this.arrCountryChange.bind(this),className:"form-control","aria-label":"Country","aria-describedby":"arrcountry"})),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"arrcity"},"City")),n.a.createElement("input",{type:"text",onInput:this.arrCityChange.bind(this),className:"form-control","aria-label":"city","aria-describedby":"arrcity"})),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"arrstreet"},"Street")),n.a.createElement("input",{type:"text",onInput:this.arrStreetChange.bind(this),className:"form-control","aria-label":"street","aria-describedby":"arrstreet"})),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"arrnumber"},"Number")),n.a.createElement("input",{type:"text",onInput:this.arrNumberChange.bind(this),className:"form-control","aria-label":"number","aria-describedby":"arrnumber"}))),n.a.createElement("div",{className:"input-group mb-3 ml-3"},n.a.createElement(G.DatePickerInput,{onChange:this.arrDateChange.bind(this),minDate:new Date,className:"my-custom-datepicker-component"})))),n.a.createElement("button",{className:"btn btn-outline-success p-2",onClick:function(t){e.onclick()},type:"button"},"Save"))))}}]),t}(n.a.Component)),K=a(288),Q=a(287);var V=function(){return n.a.createElement(K.a,{history:R},n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"d-flex justify-content-around"},n.a.createElement(z.a,{type:"button",to:"/routes",className:"btn btn-primary m-3"},"Routes"),n.a.createElement(z.a,{type:"button",to:"/transports",className:"btn btn-primary m-3"},"Transports"),n.a.createElement(z.a,{type:"button",to:"/users/login",className:"btn btn-primary m-3"},"My Routes")),n.a.createElement(Q.a,{path:"/",exact:!0,component:m}),n.a.createElement(Q.a,{strict:!0,path:"/routes",exact:!0,component:U}),n.a.createElement(Q.a,{strict:!0,path:"/transports",exact:!0,component:$}),n.a.createElement(Q.a,{path:"/routes/add",exact:!0,component:H}),n.a.createElement(Q.a,{strict:!0,path:"/routes/:id/join",exact:!0,component:F}),n.a.createElement(Q.a,{strict:!0,path:"/transports/add",exact:!0,component:q}),n.a.createElement(Q.a,{path:"/users/login",exact:!0,component:F}),n.a.createElement(Q.a,{path:"/users/:login/watchRoutes",exact:!0,component:L}),n.a.createElement(Q.a,{path:"/transports/:id/update",exact:!0,component:q}),n.a.createElement(Q.a,{path:"/routes/:id/update",exact:!0,component:H}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[125,1,2]]]);
//# sourceMappingURL=main.878a0843.chunk.js.map