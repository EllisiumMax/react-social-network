(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[0],{12:function(e,t,n){e.exports={messageWrapper:"Message_messageWrapper__36R4N",user:"Message_user__-Ob5z",text:"Message_text__t46C2",container:"Message_container__L4LEP",time:"Message_time__2T9dj",self:"Message_self__1DcSV",anotherUser:"Message_anotherUser__HdIPS",isViewed:"Message_isViewed__1bJ0u",contextMenu:"Message_contextMenu__3slGW"}},14:function(e,t,n){"use strict";n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return i}));var s=function(e){return e.auth.isLogged},a=function(e){return e.auth.login},r=function(e){return e.auth.isFetching},c=function(e){return e.auth.errorCodes},u=function(e){return e.auth.errorMessages},o=function(e){return e.auth.captcha},i=function(e){return e.auth.id}},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return f}));var s=n(3),a=n(4),r="LOGIN-REQ",c="SERVER-ERROR",u="CAPTCHA",o={isLogged:!1,id:null,login:null,email:null,messages:[],isFetching:!1,errorMessages:null,errorCodes:null,captcha:null};function i(e,t,n,s,a){return{type:"LOGIN-REQ",login:e,id:t,email:n,messages:s,isLogged:a}}function l(e,t){return{type:c,messages:e,code:t}}function d(){return function(e){return a.a.auth.authRequest().then((function(t){0===t.resultCode&&e(i(t.data.login,t.data.id,t.data.email,t.data.messages,!0))}))}}function g(e){return function(t){a.a.auth.login(e).then((function(e){0===e.resultCode?(d(),a.a.auth.authRequest().then((function(e){0===e.resultCode&&t(i(e.data.login,e.data.id,e.data.email,e.data.messages,!0))}))):10===e.resultCode?(t(l(e.messages,e.resultCode)),a.a.auth.getCaptcha().then((function(e){return t((n=e.url,{type:u,url:n}));var n}))):t(l(e.messages,e.resultCode))}))}}function f(){return function(e){a.a.auth.logout().then((function(t){0===t.resultCode&&e(i(null,null,null,[],!1))}))}}t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,n=Object(s.a)({},e);switch(t.type){case r:return n.isLogged=t.isLogged,n.login=t.login,n.id=t.id,n.email=t.email,n.messages=t.messages,n;case c:return n.errorMessages=t.messages,n.errorCodes=t.code,setTimeout((function(){n.errorMessages=n.errorCodes=null}),0),n;case u:return n.captcha=t.url,setTimeout((function(){n.captcha=n.errorMessages=n.errorCodes=null}),0),n;default:return e}}},17:function(e,t,n){e.exports={wrapper:"User_wrapper__1wFGK",container:"User_container__2D4vm",avatar:"User_avatar__2YDBq",active:"User_active__1bOFJ",newMessagesWrapper:"User_newMessagesWrapper__3NSI8",newMessage:"User_newMessage__Qnvzl",newMessagesCount:"User_newMessagesCount__2XWU0"}},19:function(e,t,n){e.exports={container:"Navbar_container__1_ue6",nav:"Navbar_nav__3UMRc",active:"Navbar_active__1KUtM"}},25:function(e,t,n){e.exports={chat:"Chat_chat__3TtEy",welcomeMessage:"Chat_welcomeMessage__1IJK3",inputWindow:"Chat_inputWindow__3Wr9T",blankSpace:"Chat_blankSpace__1F6yl"}},29:function(e,t,n){e.exports={header:"Header_header__1zvcz",logInOutWrapper:"Header_logInOutWrapper__3m6Os"}},30:function(e,t,n){"use strict";n(0);var s=n.p+"static/media/loader.6aaaa7bc.svg",a=n(37),r=n.n(a),c=n(1);t.a=function(e){var t=e.fullscreen,n=void 0!==t&&t;return Object(c.jsx)("div",{className:r.a.loaderWrapper,children:Object(c.jsx)("img",{className:n?r.a.fullScreenLoader:r.a.loader,src:s,alt:"LOADING..."})})}},37:function(e,t,n){e.exports={loaderWrapper:"Loader_loaderWrapper__3XmWS",loader:"Loader_loader__1w7OH",fullScreenLoader:"Loader_fullScreenLoader__3H8A5"}},4:function(e,t,n){"use strict";var s=n(3),a=n(61),r=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"7bc71dc4-bd30-40b8-a02a-666b7e04e450"}}),c={security:{},auth:{authRequest:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e){return r.post("auth/login",e).then((function(e){return e.data}))},logout:function(){return r.delete("/auth/login").then((function(e){return e.data}))},getCaptcha:function(){return r.get("/security/get-captcha-url").then((function(e){return e.data}))}},users:{getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},loadPage:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},loadNextPage:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},loadPrevPage:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},subscribeRequest:function(e){return r.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(e)).then((function(e){return e.data}))},uNsubscribeRequest:function(e){return r.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(e)).then((function(e){return e.data}))}},profile:{loadProfileInfo:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},setStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))},uploadPhoto:function(e){var t=new FormData;return t.append("image",e.files[0]),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))}},messages:{startChating:function(e){return r.put("dialogs/".concat(e)).then((function(e){return e.data}))},getAllDialogs:function(){return r.get("dialogs/").then((function(e){return e.data}))},getMessages:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return r.get("dialogs/".concat(e,"/messages?page=").concat(t,"&count=").concat(n)).then((function(e){return e.data}))},sendMessage:function(e,t){return r.post("dialogs/".concat(e,"/messages"),JSON.stringify(t),{headers:{"content-type":"application/json; charset=utf-8"}}).then((function(e){return e.data}))},checkMessageViewed:function(e){return r.get("dialogs/messages/".concat(e,"/viewed")).then((function(e){return e.data}))},markAsSpam:function(e){return r.post("dialogs/messages/".concat(e,"/spam")).then((function(e){return e.data}))},deleteMessage:function(e){return r.delete("dialogs/messages/".concat(e)).then((function(e){return e.data}))},restoreMessage:function(e){return r.put("dialogs/messages/".concat(e,"/restore")).then((function(e){return e.data}))},filterMessagesByDate:function(e,t){return r.get("dialogs/".concat(e,"/messages/new?newerThen=").concat(t)).then((function(e){return e.data}))},listOfNewMessages:function(){return r.get("dialogs/messages/new/count").then((function(e){return e.data}))}},settings:{changeProfileInfo:function(e){return r.put("profile",Object(s.a)({},e)).then((function(e){return e.data}))}}};t.a=c},42:function(e,t,n){e.exports={loginName:"Login_loginName__1xOxy",loginBtn:"Login_loginBtn__WqQGl"}},46:function(e,t,n){"use strict";var s=n(3),a=n(20),r=n(21),c=n(24),u=n(23),o=n(0),i=n.n(o),l=n(10),d=n(5),g=n(14),f=n(1);function p(e){return{isLogged:Object(g.g)(e),id:Object(g.f)(e)}}t.a=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(u.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return this.props.isLogged?Object(f.jsx)(e,Object(s.a)({},this.props)):Object(f.jsx)(d.a,{to:"/login"})}}]),o}(i.a.Component);return Object(l.b)(p,{})(t)}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return O}));var s=n(15),a=n(3),r=n(4),c="ADD-POST",u="SET-PROFILE-INFO",o="GET-STATUS",i="SET-STATUS",l="REQUEST-IS-FETCHING",d="UPPLOAD-PHOTO",g={profileInfo:{photos:{small:null,large:null}},status:"",posts:[{imgLink:"https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",date:"03.02.2021 12:41",text:"Hello World",likes:"25",id:1},{imgLink:"https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",date:"03.02.2021 12:44",text:"Hello React",likes:"125",id:2},{imgLink:"https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",date:"03.02.2021 12:41",text:"Hello JavaScript",likes:"1125",id:3},{imgLink:"https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",date:"03.02.2021 12:41",text:"Hello Web",likes:"23",id:4}],isFetching:!1};function f(e,t){return{type:c,post:e,date:t}}function p(e){return{type:"REQUEST-IS-FETCHING",fetching:e}}function m(e){return{type:i,status:e}}function h(e){return function(t){t(p(!0)),r.a.profile.loadProfileInfo(e).then((function(e){t({type:"SET-PROFILE-INFO",profileInfo:e}),t(p(!1))}))}}function j(e){return function(t){r.a.profile.getStatus(e).then((function(e){t({type:o,status:e})}))}}function b(e,t){return function(n){e!==t&&""!==t&&t.length<=300?r.a.profile.setStatus(t).then((function(e){0===e.resultCode&&n(m(t))})):n(m(e))}}function O(e){return function(t){r.a.profile.uploadPhoto(e).then((function(e){var n;0===e.resultCode&&t((n=e.data.photos,{type:d,small:n.small,large:n.large}))}))}}t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=Object(a.a)({},e);switch(n.profileInfo=Object(a.a)({},e.profileInfo),n.profileInfo.photos=Object(a.a)({},e.profileInfo.photos),n.posts=Object(s.a)(e.posts),t.type){case c:var r={imgLink:"https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",date:t.date,text:t.post,likes:"0"};return n.posts.push(r),n;case u:return n.profileInfo=t.profileInfo,n;case l:return n.isFetching=t.fetching,n;case o:case i:return n.status=t.status,n;case d:return n.profileInfo.photos.small=t.small,n.profileInfo.photos.large=t.large,n;default:return e}}},57:function(e,t,n){"use strict";t.a=n.p+"static/media/unknown-user.2a8085fe.svg"},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return x})),n.d(t,"d",(function(){return _})),n.d(t,"c",(function(){return S})),n.d(t,"e",(function(){return M})),n.d(t,"f",(function(){return I})),n.d(t,"g",(function(){return N}));var s=n(15),a=n(3),r=n(4),c="SET-USERS",u="SET-SUBSCRIBE",o="SET-UN-SUBSCRIBE",i="SET-TOTAL-USERS",l="SET-CURRENT-PAGE",d="REQUEST-IS-FETCHING",g="ADD-FOLLOW-UNFOLLOW-REQUEST",f="REMOVE-FOLLOW-UNFOLLOW-REQUEST",p={users:[],totalCount:0,usersPerPage:8,currentPage:1,isFetching:!0,currentRequests:[]};function m(e){return{type:c,users:e}}function h(e){return{type:i,totalCount:e}}function j(e){return{type:l,currentPage:e}}function b(e){return{type:d,isFetching:e}}function O(e){return{type:g,id:e}}function v(e){return{type:f,id:e}}function x(e,t){return function(n){n(b(!0)),r.a.users.getUsers(e,t).then((function(e){n(b(!1)),n(m(e.items)),n(h(e.totalCount))}))}}function _(e,t,n){return function(s){e!==t&&(s(b(!0)),r.a.users.loadPage(e,n).then((function(e){s(b(!1)),s(m(e.items)),s(h(e.totalCount))})),s(j(e)))}}function S(e,t,n){return function(s){var a=Math.ceil(e/t),c=n+1;c<=a&&(s(b(!0)),r.a.users.loadNextPage(c,t).then((function(e){s(b(!1)),s(m(e.items)),s(h(e.totalCount)),s(j(c))})))}}function M(e,t){return function(n){var s=e-1;s>=1&&(n(b(!0)),r.a.users.loadPrevPage(s,t).then((function(e){n(m(e.items)),n(h(e.totalCount)),n(b(!1)),n(j(s))})))}}function I(e){return function(t){t(O(e)),r.a.users.subscribeRequest(e).then((function(n){0===n.resultCode&&t({type:u,userID:e}),t(v(e))}))}}function N(e){return function(t){t(O(e)),r.a.users.uNsubscribeRequest(e).then((function(n){0===n.resultCode&&t({type:o,userID:e}),t(v(e))}))}}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=Object(a.a)({},e);switch(n.users=Object(s.a)(e.users),n.currentRequests=Object(s.a)(e.currentRequests),t.type){case c:return n.users=t.users,n;case u:return n.users.forEach((function(e){e.id===t.userID&&(e.followed=!0)})),n;case o:return n.users.forEach((function(e){e.id===t.userID&&(e.followed=!1)})),n;case i:return n.totalCount=t.totalCount,n;case l:return n.currentPage=t.currentPage,n;case d:return n.isFetching=t.isFetching,n;case g:return n.currentRequests.push(t.id),n;case f:return n.currentRequests=n.currentRequests.filter((function(e){return e!==t.id})),n;default:return e}}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var s=n(15),a=n(3),r=n(4),c="ERROR-ON-SUBMIT",u="SENT-SUCESSFULLY",o="IS-FETCHING",i="HIDE-NOTIFICATIONS",l={messages:[],sentSucessfully:!1,isFetching:!1};function d(e){return{type:o,boolean:e}}function g(e){return function(t){t(d(!0)),r.a.settings.changeProfileInfo(e).then((function(e){var n;0===e.resultCode?t({type:u}):t((n=e.messages,{type:c,messages:n}))})).then((function(){t(d(!1)),window.setTimeout((function(){return t({type:i})}),5500)}))}}t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,n=Object(a.a)({},e);switch(n.messages=Object(s.a)(e.messages),t.type){case c:return n.messages=t.messages,n.sentSucessfully=!1,n;case u:return n.sentSucessfully=!0,n.messages=[],n;case o:return n.isFetching=t.boolean,n;case i:return n.sentSucessfully=!1,n.messages=[],n;default:return e}}},62:function(e,t,n){e.exports={logout:"Logout_logout__1DQkS"}},63:function(e,t,n){e.exports={chatWrapper:"Messages_chatWrapper__tzRIL"}},64:function(e,t,n){e.exports={users:"UserList_users__2I2wg"}},71:function(e,t,n){},72:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(32),c=n.n(r),u=(n(71),n(20)),o=n(21),i=n(24),l=n(23),d=n(11),g=n(5),f=(n(72),n(29)),p=n.n(f),m=n.p+"static/media/toucan.85b0421a.svg",h=n(3),j=n(10),b=n(16),O=n(14),v=n(42),x=n.n(v),_=n(1);var S=function(e){return e.isLogged?Object(_.jsx)("p",{className:x.a.loginName,children:e.login}):Object(_.jsx)(d.b,{to:"/login",className:x.a.loginBtn,onClick:function(){return e.authRequest()},children:"Login"})},M=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(_.jsx)(S,Object(h.a)({},this.props))}}]),n}(a.a.Component);var I=Object(j.b)((function(e){return{isLogged:Object(O.g)(e),login:Object(O.e)(e),isFetching:Object(O.d)(e)}}),{authRequest:b.a})(M),N=n(62),y=n.n(N);var C=function(e){return Object(_.jsxs)("button",{className:y.a.logout,onClick:function(){return e.logout()},children:["LOG ",Object(_.jsx)("br",{})," OUT"]})};var w=Object(j.b)((function(e){return{isLogged:Object(O.g)(e)}}),{logout:b.d})((function(e){return e.isLogged?Object(_.jsx)(C,Object(h.a)({},e)):null}));var E=function(){return Object(_.jsxs)("header",{className:p.a.header,children:[Object(_.jsx)("img",{src:m,alt:"toucan"}),Object(_.jsx)("p",{children:"Toucan Social Network"}),Object(_.jsxs)("div",{className:p.a.logInOutWrapper,children:[Object(_.jsx)(I,{className:p.a.logIn}),Object(_.jsx)(w,{className:p.a.logOut})]})]})},L=n(19),R=n.n(L);var T=function(){return Object(_.jsx)("div",{className:R.a.container,children:Object(_.jsxs)("nav",{className:R.a.nav,children:[Object(_.jsx)(d.b,{to:"/profile",activeClassName:R.a.active,children:"Profile"}),Object(_.jsx)(d.b,{to:"/messages",activeClassName:R.a.active,children:"Messages"}),Object(_.jsx)(d.b,{to:"/users",activeClassName:R.a.active,children:"Users"}),Object(_.jsx)(d.b,{to:"/settings",activeClassName:R.a.active,children:"Settings"})]})})},k=n(18),U=n(46),P=n(13),A=n(15),D=n(4),W=n(45),F=n.n(W),G=n(26),q=n.n(G),H="SEND-MESSAGE",z="GET-DIALOGS-LIST",B="GET-MESSAGES",Q="DELETE-MESSAGE",J="MARK-SPAM",V={userList:[],messages:{items:[]},targetUserId:null};var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case H:return n.messages.items.push(t.message),n;case Q:return n.messages.items=n.messages.items.filter((function(e){return e.id!==t.messageId})),n;case J:return n;case z:return n.userList=Object(A.a)(t.users),n;case B:return n.targetUserId!=t.targetUserId?(n.targetUserId=t.targetUserId,n.messages.items=t.messages.items):n.messages.items=F.a.unionWith(n.messages.items,t.messages.items,F.a.isEqual).sort((function(e,t){return q()(e.addedAt)-q()(t.addedAt)})),n.messages.totalCount=t.messages.totalCount,n;default:return n}},K=function(e){return e.messagesPage.userList},X=function(e){return e.messagesPage.messages},Z=n(25),$=n.n(Z),ee=n(12),te=n.n(ee),ne=n.p+"static/media/viewed.89e68a95.svg",se=n.p+"static/media/not_viewed.f10d84c9.svg";var ae=function(e){var t=q.a.utc(e.timeStamp).local().format("DD.MM.YYYY, HH:mm:ss"),n=Object(s.useState)(!1),a=Object(k.a)(n,2),r=a[0],c=a[1];return window.addEventListener("click",(function(){r&&c(!1)})),Object(_.jsxs)("div",{onClick:function(){c(!1)},onContextMenu:function(e){e.preventDefault(),c(!r)},className:e.self?"".concat(te.a.messageWrapper," ").concat(te.a.self):"".concat(te.a.messageWrapper," ").concat(te.a.anotherUser),children:[r?Object(_.jsxs)("div",{className:te.a.contextMenu,children:[Object(_.jsx)("p",{onClick:function(){return e.deleteMessage(e.id)},children:"Delete message"}),Object(_.jsx)("p",{onClick:function(){return e.markAsSpam(e.id)},children:"Mark as SPAM"})]}):null,Object(_.jsx)("p",{className:te.a.user,children:e.userName}),Object(_.jsx)("p",{className:te.a.text,children:e.text}),Object(_.jsx)("p",{className:te.a.time,children:t}),e.viewed&&e.self&&Object(_.jsx)("img",{className:te.a.isViewed,src:ne,alt:"viewed"}),!e.viewed&&e.self&&Object(_.jsx)("img",{className:te.a.isViewed,src:se,alt:"not viewed"})]})},re=n(38);var ce=function(e){return Object(_.jsx)(re.b,{onSubmit:function(t,n){t.message&&(e.sendMessage(+e.friendId,{body:t.message}),n.reset())},render:function(e){var t=e.handleSubmit,n=e.submitting;return Object(_.jsx)("form",{onSubmit:t,children:Object(_.jsxs)("div",{className:$.a.inputWindow,children:[Object(_.jsx)(re.a,{name:"message",component:"input",type:"text",maxLength:5e3,placeholder:"Input your message..",autoComplete:"off"}),Object(_.jsx)("button",{disabled:n,children:"SEND"})]})})}})},ue=function(e){var t=Math.ceil(e.messages.totalCount/20),n=Object(_.jsx)("p",{className:$.a.welcomeMessage,children:"No messages yet.."}),a=Object(s.useRef)(null),r=Object(s.useState)(1),c=Object(k.a)(r,2),u=c[0],o=c[1];return Object(s.useEffect)((function(){a.current&&a.current.scrollIntoView({behavior:"smooth"})}),[e.messages.totalCount]),e.friendId?(e.messages.items.length>0&&(n=e.messages.items.map((function(t,n){return t.senderId!==e.loggedId?Object(_.jsx)(ae,{id:t.id,userName:t.senderName,text:t.body,timeStamp:t.addedAt,self:!1,deleteMessage:e.deleteMessage,markAsSpam:e.markAsSpam},t.id):Object(_.jsx)(ae,{id:t.id,userName:"You",text:t.body,timeStamp:t.addedAt,self:!0,viewed:t.viewed,deleteMessage:e.deleteMessage,markAsSpam:e.markAsSpam},t.id)}))),Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{onScroll:function(n){return function(n){0==n.target.scrollTop&&(u<t?(o(++u),console.log(u),e.getMessages(e.friendId,u,20)):o(--u))}(n)},className:$.a.chat,children:[n,Object(_.jsx)("div",{ref:a,className:$.a.blankSpace})]}),Object(_.jsx)(ce,Object(h.a)({},e))]})):Object(_.jsx)("div",{className:$.a.welcomeMessage,children:" Select user to start chat"})},oe=n(63),ie=n.n(oe),le=n(17),de=n.n(le),ge=n(57),fe=n.p+"static/media/newMessage.59d9faef.svg";var pe=function(e){var t="/messages/".concat(e.id);return Object(_.jsx)("div",{className:de.a.wrapper,onClick:function(){e.getMessages(e.id)},children:Object(_.jsx)(d.b,{to:t,activeClassName:de.a.active,children:Object(_.jsxs)("div",{className:de.a.container,children:[Object(_.jsx)("img",{className:de.a.avatar,src:e.photos.small||e.photos.large||ge.a,alt:"User avatar"}),Object(_.jsx)("p",{children:e.userName}),e.hasNewMessages?Object(_.jsxs)("div",{className:de.a.newMessagesWrapper,children:[Object(_.jsx)("img",{className:de.a.newMessage,src:fe,alt:"new message"}),Object(_.jsx)("p",{className:de.a.newMessagesCount,children:e.newMessagesCount})]}):null]})})})},me=n(64),he=n.n(me);var je=function(e){var t=e.userList.map((function(t,n){return Object(_.jsx)(pe,Object(h.a)(Object(h.a)({},t),{},{getMessages:e.getMessages}),"user".concat(n))}));return Object(_.jsx)("div",{className:he.a.users,children:t})};var be=function(e){return Object(_.jsxs)("div",{className:ie.a.chatWrapper,children:[Object(_.jsx)(je,{userList:e.userList,getMessages:e.getMessages}),Object(_.jsx)(ue,{messages:e.messages,sendMessage:e.sendMessage,friendId:e.match.params.userId,loggedId:e.id,deleteMessage:e.deleteMessage,markAsSpam:e.markAsSpam,getMessages:e.getMessages})]})};var Oe=Object(P.compose)(Object(j.b)((function(e){return{userList:K(e),messages:X(e)}}),{getDialogs:function(){return function(e){D.a.messages.getAllDialogs().then((function(t){e({type:z,users:t})}))}},getMessages:function(e,t,n){return function(s){return D.a.messages.getMessages(e,t,n).then((function(t){return s({type:B,messages:t,targetUserId:e})}))}},sendMessage:function(e,t){return function(n){return D.a.messages.sendMessage(e,t).then((function(e){var t;0===e.resultCode&&n((t=e.data.message,{type:H,message:t}))}))}},startChating:function(e){return function(t){return D.a.messages.startChating(e)}},deleteMessage:function(e){return function(t){D.a.messages.deleteMessage(e).then((function(n){console.log(n),0===n.resultCode&&t(function(e){return{type:Q,messageId:e}}(e))}))}},markAsSpam:function(e){return function(t){D.a.messages.markAsSpam(e).then((function(n){console.log(n),0===n.resultCode&&t({type:J,messageID:e})}))}}}),U.a,g.f)((function(e){var t=Object(s.useState)(1),n=Object(k.a)(t,2),a=n[0],r=n[1],c=Object(s.useState)(!0),u=Object(k.a)(c,2),o=u[0],i=u[1];return Object(s.useEffect)((function(){e.getDialogs(),void 0!==e.match.params.userId&&(e.startChating(e.match.params.userId),e.getMessages(e.match.params.userId))}),[]),Object(s.useEffect)((function(){i(!0);var e=null;return o&&(e=setInterval((function(){r(++a)}),8e3)),function(){clearInterval(e),i(!1)}})),Object(s.useEffect)((function(){e.getDialogs(),void 0!==e.match.params.userId&&e.getMessages(e.match.params.userId)}),[a]),Object(_.jsx)(be,Object(h.a)({},e))})),ve=n(30),xe="INITIALIZE",_e={appReady:!1};var Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0,n=Object(h.a)({},e);switch(t.type){case xe:return n.appReady=!0,n;default:return e}};var Me=function(e,t){return Object(_.jsx)(s.Suspense,{fallback:Object(_.jsx)(ve.a,{}),children:Object(_.jsx)(e,Object(h.a)({},t))})},Ie=a.a.lazy((function(){return n.e(5).then(n.bind(null,115))})),Ne=a.a.lazy((function(){return n.e(4).then(n.bind(null,117))})),ye=a.a.lazy((function(){return n.e(3).then(n.bind(null,114))})),Ce=a.a.lazy((function(){return n.e(6).then(n.bind(null,116))})),we=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.appReady?Object(_.jsx)(d.a,{basename:"/toucan/",children:Object(_.jsxs)("div",{className:"app-wrapper",children:[Object(_.jsx)(E,{}),Object(_.jsx)(T,{}),Object(_.jsxs)("div",{className:"app-wrapper-content",children:[Object(_.jsx)(g.b,{path:"/profile/:userId?",render:function(){return Me(ye)}}),Object(_.jsx)(g.b,{path:"/messages/:userId?",render:function(){return Object(_.jsx)(Oe,{})}}),Object(_.jsx)(g.b,{path:"/users",render:function(){return Me(Ie)}}),Object(_.jsx)(g.b,{path:"/settings",render:function(){return Me(Ce)}}),Object(_.jsx)(g.b,{path:"/login",render:function(){return Me(Ne)}})]})]})}):Object(_.jsx)(ve.a,{fullscreen:!0})}}]),n}(a.a.Component),Ee=Object(j.b)((function(e){return{appReady:e.app.appReady}}),{initializeApp:function(){return function(e){e(Object(b.a)()).then((function(){return e({type:xe})}))}}})(we),Le=n(47),Re=n(58),Te=n(65),ke=n(66),Ue=n(59),Pe=Object(P.combineReducers)({profilePage:Le.b,messagesPage:Y,usersPage:Re.a,auth:b.b,app:Se,settingsPage:Ue.b}),Ae=Object(P.createStore)(Pe,Object(ke.composeWithDevTools)(Object(P.applyMiddleware)(Te.a)));c.a.render(Object(_.jsx)(j.a,{store:Ae,children:Object(_.jsx)(Ee,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.683c5e29.chunk.js.map