(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[3],{100:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return u}));var s=a(3),o=(a(1),a(101)),n=a.n(o),c=a(0),r=function(t){var e=t.input,a=t.meta;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:n.a.inputWrapper,children:[Object(c.jsx)("textarea",Object(s.a)(Object(s.a)({},e),{},{placeholder:"Please enter your text here"})),a.error&&a.touched&&Object(c.jsxs)("span",{className:n.a.errorMessage,children:[" \u26a0 ",a.error]})]})})},i=function(t){var e=t.input,a=t.meta;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:n.a.inputWrapper,children:[Object(c.jsx)("input",Object(s.a)(Object(s.a)({},e),{},{type:"email",placeholder:"Email",autoComplete:"off"})),a.error&&a.touched&&Object(c.jsxs)("span",{className:n.a.errorMessage,children:[" \u26a0 ",a.error]})]})})},u=function(t){var e=t.input,a=t.meta;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:n.a.inputWrapper,children:[Object(c.jsx)("input",Object(s.a)(Object(s.a)({},e),{},{type:"password",placeholder:"Password"})),a.error&&a.touched&&Object(c.jsxs)("span",{className:n.a.errorMessage,children:[" \u26a0 ",a.error]})]})})}},101:function(t,e,a){t.exports={inputWrapper:"fieldComponents_inputWrapper__1KlTK",errorMessage:"fieldComponents_errorMessage__1Tnfx",background:"fieldComponents_background__2GTi7"}},102:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"d",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return c}));var s=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return function(t){return e.reduce((function(e,a){return e||a(t)}),void 0)}},o=function(t){return t?void 0:"This field can't be empty"},n=function(t){return function(e){return e&&e.length>t?"Maximum length not more than ".concat(t," symbols"):void 0}},c=function(t){return t.match(/^\S+@\S+\.\S+$/gi)?void 0:"Email not valid"}},108:function(t,e,a){t.exports={postForm:"CreatePost_postForm__23Gah"}},109:function(t,e,a){t.exports={post:"Post_post__3SVuS",message:"Post_message__3bpxM",date:"Post_date__2z5SY",like:"Post_like__1NQS2",likesAmmount:"Post_likesAmmount__20e6p"}},110:function(t,e,a){t.exports={mainWrapper:"ProfileInfo_mainWrapper__3oCoZ",infoWrapper:"ProfileInfo_infoWrapper__2CfUd",userName:"ProfileInfo_userName__1TfC6"}},111:function(t,e,a){t.exports={wrapper:"Status_wrapper__3PuWM",input:"Status_input__3PQ-O",edit:"Status_edit__2J9ap",statusText:"Status_statusText__1BLHP",editable:"Status_editable__37TRa"}},112:function(t,e,a){t.exports={photoContainer:"Photo_photoContainer__1pxqK",hiddenUpload:"Photo_hiddenUpload__1EInu",loadPhoto:"Photo_loadPhoto__2hwpW",upploadIco:"Photo_upploadIco__JJ6iq",userPhoto:"Photo_userPhoto__RJgM-"}},113:function(t,e,a){t.exports={job:"Info_job__2NYm1",contactsList:"Info_contactsList__vxak9",contactsHeader:"Info_contactsHeader__y1eAX",contactCell:"Info_contactCell__g27Qp"}},114:function(t,e,a){"use strict";a.r(e);var s=a(3),o=a(99),n=a(25),c=a(33),r=a(1),i=a(10),u=a(4),d=a(13),l=a(34),j=a(57),p=a(108),b=a.n(p),m=a(109),f=a.n(m),h=a(0);var O=function(t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:f.a.post,children:[Object(h.jsx)("img",{src:t.imgLink,alt:"User profile image"}),Object(h.jsxs)("div",{className:f.a.message,children:[Object(h.jsx)("p",{className:f.a.date,children:t.date}),Object(h.jsx)("p",{children:t.message})]}),Object(h.jsx)("svg",{className:f.a.like,children:Object(h.jsx)("path",{d:"M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"})}),Object(h.jsx)("p",{className:f.a.likesAmmount,children:t.likes})]})})},x=a(8),_=a(55),v=a.n(_),g=a(102),N=a(100);var P=function(t){var e=t.posts.map((function(t){return Object(h.jsx)(O,{imgLink:t.imgLink,date:t.date,message:t.text,likes:t.likes},t.id)})),a=Object(g.c)(500),s=function(){return Object(h.jsxs)("div",{className:b.a.postForm,children:[Object(h.jsx)("h3",{children:"Enter your message: "}),Object(h.jsx)(x.b,{onSubmit:function(e,a){var s=v()().format("MM.DD.YY, HH:mm:ss");e.post&&(t.addPost(e.post,s),a.reset())},render:function(t){var e=t.handleSubmit,s=t.submitting,o=t.pristine;return Object(h.jsxs)("form",{onSubmit:e,children:[Object(h.jsx)(x.a,{component:N.c,name:"post",validate:a}),Object(h.jsx)("button",{type:"submit",disabled:s||o,children:"POST"})]})}})]})};return Object(h.jsxs)("div",{children:[Object(h.jsx)(s,{}),Object(h.jsx)("div",{children:e}),";"]})},k=a(110),S=a.n(k),y=a(111),M=a.n(y),w=a.p+"static/media/edit.c1f4540d.svg";var C=function(t){var e,a=Object(r.useState)(t.status),s=Object(o.a)(a,2),n=s[0],c=s[1],i=Object(r.useState)(!1),u=Object(o.a)(i,2),d=u[0],l=u[1];return Object(r.useEffect)((function(){c(t.status)}),[t.status]),t.editMode?Object(h.jsx)("div",{children:d?Object(h.jsx)("input",{className:M.a.input,maxLength:300,value:n,onChange:function(t){return c(t.target.value)},autoFocus:!0,onBlur:function(){t.setStatusRequest(t.status,n),l(!1)},onKeyDown:function(e){return function(e){13===e.keyCode&&t.setStatusRequest(t.status,n)}(e)}}):Object(h.jsxs)("div",{className:M.a.wrapper,children:[Object(h.jsx)("h3",{className:"".concat(M.a.statusText," ").concat(M.a.editable),children:t.status||"No status"}),Object(h.jsx)("img",{className:M.a.edit,src:w,onClick:function(){return l(!0)}})]})}):Object(h.jsx)("div",{className:M.a.wrapper,children:Object(h.jsx)("h3",{className:M.a.statusText,children:null!==(e=t.status)&&void 0!==e?e:"No status"})})},I=a.p+"static/media/unknown-user-big.3109215c.svg",A=a.p+"static/media/upload.c16d5bf6.svg",F=a(112),L=a.n(F);var W=function(t){return Object(h.jsxs)("div",{className:L.a.photoContainer,children:[Object(h.jsx)("img",{src:t.imgLarge||t.imgSmall||I,alt:"User profile image",className:L.a.userPhoto}),t.editMode?Object(h.jsxs)("label",{className:L.a.loadPhoto,title:"Uppload new photo",onChange:function(e){console.log(e.target),t.uploadPhoto(e.target)},children:[Object(h.jsx)("input",{type:"file",className:L.a.hiddenUpload}),Object(h.jsx)("img",{src:A,alt:"uppload image",className:L.a.upploadIco})]}):null]})},J=a(113),T=a.n(J),q=a.p+"static/media/Facebook_logo.dbbf2ddf.svg",R=a.p+"static/media/www.81a9a833.svg",U=a.p+"static/media/vk.a3fef7f7.svg",E=a.p+"static/media/twitter.82fd64c6.svg",D=a.p+"static/media/instagram.ce8e2d93.svg",H=a.p+"static/media/youtube.f4bab243.svg",K=a.p+"static/media/github.848b615b.svg",Y=a.p+"static/media/mainLink.10c3c555.svg";var z=function(t){var e=[q,R,U,E,D,H,K,Y],a=Object.entries(t.contacts).map((function(t,a){if(t[1])return Object(h.jsx)("a",{className:T.a.contactCell,href:"//".concat(t[1]),target:"_blank",children:Object(h.jsx)("img",{src:e[a],alt:t[0]})})}));return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:T.a.job,children:[Object(h.jsxs)("h4",{children:["About me: ",t.aboutMe]}),t.lookingForAJob?Object(h.jsxs)("h4",{children:["Looking for a job: ",t.lookingForAJobDescription," "]}):Object(h.jsx)("h4",{children:" Not looking for a job."})]}),Object(h.jsx)("div",{className:T.a.contactsList,children:a})]})};var Q=function(t){return t.userId?Object(h.jsxs)("div",{className:S.a.mainWrapper,children:[Object(h.jsx)(W,{imgLarge:t.photos.large,imgSmall:t.photos.small,editMode:t.editMode,uploadPhoto:t.uploadPhoto}),Object(h.jsxs)("div",{className:S.a.infoWrapper,children:[Object(h.jsxs)("div",{className:S.a.userName,children:[Object(h.jsx)("h1",{children:t.fullName}),Object(h.jsx)(C,{status:t.status,setStatusRequest:t.setStatusRequest,editMode:t.editMode})]}),Object(h.jsx)(z,{contacts:t.contacts,aboutMe:t.aboutMe,lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription})]})]}):Object(h.jsx)(n.a,{})};var B=function(t){return Object(h.jsxs)("main",{className:"app-wrapper-content",children:[Object(h.jsx)(Q,Object(s.a)(Object(s.a)({},t.profileInfo),{},{setStatusRequest:t.setStatusRequest,status:t.status,loggedUserId:t.id,uploadPhoto:t.uploadPhoto,editMode:t.editMode})),Object(h.jsx)("div",{children:Object(h.jsx)(P,{posts:t.posts,addPost:t.addPost})})]})};e.default=Object(d.compose)(Object(i.b)((function(t){return{profileInfo:Object(j.c)(t),posts:Object(j.b)(t),status:Object(j.d)(t),isFetching:Object(j.a)(t)}}),{loadProfile:l.c,statusRequest:l.e,setStatusRequest:l.d,addPost:l.a,uploadPhoto:l.f}),u.f,c.a)((function(t){var e=t.match.params.userId,a=Object(r.useState)(t.id===e),c=Object(o.a)(a,2),i=c[0],u=c[1];return Object(r.useEffect)((function(){t.loadProfile(null!==e&&void 0!==e?e:t.id),t.statusRequest(null!==e&&void 0!==e?e:t.id),e&&t.id!=e?u(!1):u(!0)}),[t.location.key]),t.isFetching?Object(h.jsx)(n.a,{}):Object(h.jsx)(B,Object(s.a)(Object(s.a)({},t),{},{editMode:i}))}))},99:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var s=a(45);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],s=!0,o=!1,n=void 0;try{for(var c,r=t[Symbol.iterator]();!(s=(c=r.next()).done)&&(a.push(c.value),!e||a.length!==e);s=!0);}catch(i){o=!0,n=i}finally{try{s||null==r.return||r.return()}finally{if(o)throw n}}return a}}(t,e)||Object(s.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=3.153faeaf.chunk.js.map