(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[5],{101:function(e,t,a){e.exports={container:"Users_container__iuwYM",changePage:"Users_changePage__YkKaG",prevPage:"Users_prevPage__xwxAh",nextPage:"Users_nextPage__Y1DQT",inactive:"Users_inactive__hveiX",usersArea:"Users_usersArea__15cQa",wrapper:"Users_wrapper__2_7qC",avatar:"Users_avatar__qQIPI",photo:"Users_photo__3uU2C",btn:"Users_btn__2Hsx5",loading:"Users_loading__3TNnf",subcribe:"Users_subcribe__1z8kQ",unSubcribe:"Users_unSubcribe__7r4HU",infoWrapper:"Users_infoWrapper__T-b-2",name:"Users_name__Y6pTf",age:"Users_age__qk651"}},102:function(e,t,a){e.exports={controlBtn:"Paginator_controlBtn__3uvcx",controlsArea:"Paginator_controlsArea__1aGqo",pages:"Paginator_pages__2qRwX",pageNumber:"Paginator_pageNumber__3tJsr",activePage:"Paginator_activePage__1O-gD"}},115:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(16),s=a(17),c=a(20),o=a(19),u=a(27),i=a(0),l=a.n(i),b=a(11),g=a(12),j=a(55),P=a(101),d=a.n(P),p=a(42),_=a(8),h=a(97),f=a(102),m=a.n(f),v=a(1);var O=function(e){var t=e.totalCount,a=e.itemsPerPage,r=e.currentPage,n=e.loadPage,s=e.portionSize,c=void 0===s?10:s,o=Math.ceil(t/a),u=o/c,l=Array.from({length:o},(function(e,t){return t+1})),b=Object(i.useState)(1),g=Object(h.a)(b,2),j=g[0],P=g[1],d=Object(i.useState)(l.slice(0,c)),p=Object(h.a)(d,2),_=p[0],f=p[1];Object(i.useEffect)((function(){var e=Math.ceil(j*c);f(l.slice(e-c,e))}),[j]),Object(i.useEffect)((function(){f(l.slice(r-1,r+c-1)),P(Math.ceil(r/c))}),[r]);var O=_.map((function(e){return Object(v.jsx)("p",{className:r===e?m.a.activePage:m.a.pageNumber,onClick:function(){return n(e,r,a)},children:e})}));return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:m.a.controlsArea,children:[j<=1?null:Object(v.jsx)("button",{className:m.a.controlBtn,onClick:function(){P(--j)},children:"PREV"}),Object(v.jsx)("div",{className:m.a.pages,children:O}),j>=u?null:Object(v.jsx)("button",{className:m.a.controlBtn,onClick:function(){P(++j)},children:"NEXT"})]})})};function x(e){return e.users.map((function(t){return Object(v.jsxs)("div",{className:d.a.wrapper,children:[Object(v.jsxs)("div",{className:d.a.avatar,children:[Object(v.jsx)(_.b,{to:"profile/".concat(t.id),children:Object(v.jsx)("img",{className:d.a.photo,src:t.photos.small?t.photos.small:p.a,alt:"user avatar"})}),t.followed?Object(v.jsx)("button",{disabled:e.currentRequests.some((function(e){return e===t.id})),className:"".concat(d.a.btn," ").concat(d.a.unSubcribe),onClick:function(){e.unSubscribeRequest(t.id)},children:"UNSUBSCRIBE"}):Object(v.jsx)("button",{disabled:e.currentRequests.some((function(e){return e===t.id})),className:"".concat(d.a.btn," ").concat(d.a.subcribe),onClick:function(){e.subscribeRequest(t.id)},children:"SUBSCRIBE"})]}),Object(v.jsxs)("div",{className:d.a.infoWrapper,children:[Object(v.jsx)("p",{className:d.a.name,children:t.name}),Object(v.jsxs)("p",{className:d.a.age,children:["Age: ",t.age]}),Object(v.jsxs)("p",{className:d.a.location,children:["From: ",t.city," ",t.country]}),Object(v.jsxs)("p",{className:d.a.status,children:["Status: ",t.status]})]})]},t.id)}))}var N=function(e){return Object(v.jsxs)("div",{children:[e.totalCount?Object(v.jsx)(O,{totalCount:e.totalCount,itemsPerPage:e.usersPerPage,currentPage:e.currentPage,loadPage:e.loadPage}):null,Object(v.jsxs)("div",{className:d.a.container,children:[Object(v.jsx)("button",{className:e.currentPage>1?"".concat(d.a.changePage," ").concat(d.a.prevPage):"".concat(d.a.changePage," ").concat(d.a.prevPage," ").concat(d.a.inactive),onClick:function(){return e.loadPrevPage(e.currentPage,e.usersPerPage)},children:"\xab"}),Object(v.jsx)("div",{className:d.a.usersArea,children:Object(v.jsx)(x,{users:e.users,subscribeRequest:e.subscribeRequest,unSubscribeRequest:e.unSubscribeRequest,currentRequests:e.currentRequests})}),Object(v.jsx)("button",{className:e.currentPage>=e.totalCount/e.usersPerPage?"".concat(d.a.changePage," ").concat(d.a.nextPage," ").concat(d.a.inactive):"".concat(d.a.changePage," ").concat(d.a.nextPage),onClick:function(){return e.loadNextPage(e.totalCount,e.usersPerPage,e.currentPage)},children:"\xbb"})]})]})},U=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).componentDidMount=function(){e.props.getUsers(e.props.currentPage,e.props.usersPerPage)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[this.props.isFetching?Object(v.jsx)(u.a,{}):null,Object(v.jsx)(N,Object(r.a)(Object(r.a)({},this.props),{},{users:this.props.users}))]})}}]),a}(l.a.Component);t.default=Object(g.compose)(Object(b.b)((function(e){return{users:e.usersPage.users,currentPage:e.usersPage.currentPage,totalCount:e.usersPage.totalCount,usersPerPage:e.usersPage.usersPerPage,isFetching:e.usersPage.isFetching,currentRequests:e.usersPage.currentRequests}}),{getUsers:j.b,loadPage:j.d,loadNextPage:j.c,loadPrevPage:j.e,subscribeRequest:j.f,unSubscribeRequest:j.g}))(U)},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(41);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,s=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(u){n=!0,s=u}finally{try{r||null==o.return||o.return()}finally{if(n)throw s}}return a}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=5.f06b2088.chunk.js.map