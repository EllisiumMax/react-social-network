(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[5],{102:function(e,a,t){e.exports={container:"Users_container__iuwYM",changePage:"Users_changePage__YkKaG",prevPage:"Users_prevPage__xwxAh",nextPage:"Users_nextPage__Y1DQT",inactive:"Users_inactive__hveiX",usersArea:"Users_usersArea__15cQa",wrapper:"Users_wrapper__2_7qC",avatar:"Users_avatar__qQIPI",photo:"Users_photo__3uU2C",btn:"Users_btn__2Hsx5",loading:"Users_loading__3TNnf",subcribe:"Users_subcribe__1z8kQ",unSubcribe:"Users_unSubcribe__7r4HU",infoWrapper:"Users_infoWrapper__T-b-2",name:"Users_name__Y6pTf",status:"Users_status__y2RXZ"}},103:function(e,a,t){e.exports={controlBtn:"Paginator_controlBtn__3uvcx",controlsArea:"Paginator_controlsArea__1aGqo",pages:"Paginator_pages__2qRwX",pageNumber:"Paginator_pageNumber__3tJsr",activePage:"Paginator_activePage__1O-gD"}},115:function(e,a,t){"use strict";t.r(a);var s=t(3),r=t(20),n=t(21),c=t(24),u=t(23),o=t(30),i=t(0),l=t.n(i),b=t(10),g=t(13),P=t(58),j=t(102),_=t.n(j),p=t(57),d=t(11),h=t(18),f=t(103),O=t.n(f),v=t(1);var m=function(e){var a=e.totalCount,t=e.itemsPerPage,s=e.currentPage,r=e.loadPage,n=e.portionSize,c=void 0===n?10:n,u=Math.ceil(a/t),o=u/c,l=Array.from({length:u},(function(e,a){return a+1})),b=Object(i.useState)(1),g=Object(h.a)(b,2),P=g[0],j=g[1],_=Object(i.useState)(l.slice(0,c)),p=Object(h.a)(_,2),d=p[0],f=p[1];Object(i.useEffect)((function(){var e=Math.ceil(P*c);f(l.slice(e-c,e))}),[P]),Object(i.useEffect)((function(){f(l.slice(s-1,s+c-1)),j(Math.ceil(s/c))}),[s]);var m=d.map((function(e,a){return Object(v.jsx)("p",{className:s===e?O.a.activePage:O.a.pageNumber,onClick:function(){return r(e,s,t)},children:e},"page".concat(a))}));return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:O.a.controlsArea,children:[P<=1?null:Object(v.jsx)("button",{className:O.a.controlBtn,onClick:function(){j(--P)},children:"PREV"}),Object(v.jsx)("div",{className:O.a.pages,children:m}),P>=o?null:Object(v.jsx)("button",{className:O.a.controlBtn,onClick:function(){j(++P)},children:"NEXT"})]})})};function x(e){return e.users.map((function(a){return Object(v.jsxs)("div",{className:_.a.wrapper,children:[Object(v.jsxs)("div",{className:_.a.avatar,children:[Object(v.jsx)(d.b,{to:"profile/".concat(a.id),children:Object(v.jsx)("img",{className:_.a.photo,src:a.photos.small?a.photos.small:p.a,alt:"user avatar"})}),a.followed?Object(v.jsx)("button",{disabled:e.currentRequests.some((function(e){return e===a.id})),className:"".concat(_.a.btn," ").concat(_.a.unSubcribe),onClick:function(){e.unSubscribeRequest(a.id)},children:"UNSUBSCRIBE"}):Object(v.jsx)("button",{disabled:e.currentRequests.some((function(e){return e===a.id})),className:"".concat(_.a.btn," ").concat(_.a.subcribe),onClick:function(){e.subscribeRequest(a.id)},children:"SUBSCRIBE"})]}),Object(v.jsxs)("div",{className:_.a.infoWrapper,children:[Object(v.jsx)("p",{className:_.a.name,children:a.name}),a.status?Object(v.jsxs)("p",{className:_.a.status,children:["Status: ",a.status]}):null]})]},a.id)}))}var N=function(e){return Object(v.jsxs)("div",{children:[e.totalCount?Object(v.jsx)(m,{totalCount:e.totalCount,itemsPerPage:e.usersPerPage,currentPage:e.currentPage,loadPage:e.loadPage}):null,Object(v.jsxs)("div",{className:_.a.container,children:[Object(v.jsx)("button",{className:e.currentPage>1?"".concat(_.a.changePage," ").concat(_.a.prevPage):"".concat(_.a.changePage," ").concat(_.a.prevPage," ").concat(_.a.inactive),onClick:function(){return e.loadPrevPage(e.currentPage,e.usersPerPage)},children:"\xab"}),Object(v.jsx)("div",{className:_.a.usersArea,children:Object(v.jsx)(x,{users:e.users,subscribeRequest:e.subscribeRequest,unSubscribeRequest:e.unSubscribeRequest,currentRequests:e.currentRequests})}),Object(v.jsx)("button",{className:e.currentPage>=e.totalCount/e.usersPerPage?"".concat(_.a.changePage," ").concat(_.a.nextPage," ").concat(_.a.inactive):"".concat(_.a.changePage," ").concat(_.a.nextPage),onClick:function(){return e.loadNextPage(e.totalCount,e.usersPerPage,e.currentPage)},children:"\xbb"})]})]})},U=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).componentDidMount=function(){e.props.getUsers(e.props.currentPage,e.props.usersPerPage)},e}return Object(n.a)(t,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[this.props.isFetching?Object(v.jsx)(o.a,{}):null,Object(v.jsx)(N,Object(s.a)(Object(s.a)({},this.props),{},{users:this.props.users}))]})}}]),t}(l.a.Component);a.default=Object(g.compose)(Object(b.b)((function(e){return{users:e.usersPage.users,currentPage:e.usersPage.currentPage,totalCount:e.usersPage.totalCount,usersPerPage:e.usersPage.usersPerPage,isFetching:e.usersPage.isFetching,currentRequests:e.usersPage.currentRequests}}),{getUsers:P.b,loadPage:P.d,loadNextPage:P.c,loadPrevPage:P.e,subscribeRequest:P.f,unSubscribeRequest:P.g}))(U)}}]);
//# sourceMappingURL=5.aa827226.chunk.js.map