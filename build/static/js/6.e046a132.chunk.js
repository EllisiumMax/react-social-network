(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[6],{100:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return a}));var c=function(e){return e.profilePage.profileInfo},s=function(e){return e.profilePage.posts},o=function(e){return e.profilePage.status},a=function(e){return e.profilePage.isFetching}},112:function(e,t,n){e.exports={mainWrapper:"UserInfo_mainWrapper__2mbbN",sectionContainer:"UserInfo_sectionContainer__1x86-",sectionHeader:"UserInfo_sectionHeader__3OUGL",personalInfo:"UserInfo_personalInfo__3rj8n",jobInfo:"UserInfo_jobInfo__O3tUb",contactsInfo:"UserInfo_contactsInfo__tgwA9",job:"UserInfo_job__NCInm",submit:"UserInfo_submit__2U8sM",loading:"UserInfo_loading__3omNj",responseResult:"UserInfo_responseResult__SwDOb",error:"UserInfo_error__w-DDH",sucess:"UserInfo_sucess__fD6ko"}},115:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n(43),o=n(0),a=n(10),i=n(13),l=n(14),r=n(44),b=n(100),j=n(57),u=n(29),f=n(37),d=n(112),p=n.n(d),m=n.p+"static/media/puff.be69e7a9.svg",x=n(1);var O=function(e){return e.profileInfo.fullName?Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:m,className:p.a.loading,alt:"request is loading",style:{display:"none"}}),Object(x.jsx)(f.b,{onSubmit:function(t){t.userId=e.id,e.changeProfileInfo(t),console.log(t)},render:function(t){var n=t.handleSubmit,c=t.submitting;return Object(x.jsx)("form",{onSubmit:n,children:Object(x.jsxs)("div",{className:p.a.mainWrapper,children:[Object(x.jsxs)("div",{className:"".concat(p.a.sectionContainer," ").concat(p.a.personalInfo),children:[Object(x.jsx)("h4",{className:p.a.sectionHeader,children:"Personal Info"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Full name: "}),Object(x.jsx)(f.a,{name:"fullName",component:"input",type:"text",defaultValue:e.profileInfo.fullName})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"About me: "}),Object(x.jsx)(f.a,{name:"aboutMe",component:"input",type:"text",defaultValue:e.profileInfo.aboutMe})]})]}),Object(x.jsxs)("div",{className:"".concat(p.a.sectionContainer," ").concat(p.a.jobInfo),children:[Object(x.jsx)("h4",{className:p.a.sectionHeader,children:"Job Information"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Looking for a job?"}),Object(x.jsx)(f.a,{name:"lookingForAJob",component:"input",type:"checkbox",defaultValue:e.profileInfo.lookingForAJob})]}),Object(x.jsxs)("div",{className:p.a.job,children:[Object(x.jsx)("label",{children:"Describe the job you are looking for: "}),Object(x.jsx)(f.a,{name:"lookingForAJobDescription",component:"input",type:"text",defaultValue:e.profileInfo.lookingForAJobDescription})]})]}),Object(x.jsxs)("div",{className:"".concat(p.a.sectionContainer," ").concat(p.a.contactsInfo),children:[Object(x.jsx)("h4",{className:p.a.sectionHeader,children:"Contacts"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"GitHub:"}),Object(x.jsx)(f.a,{name:"contacts.github",component:"input",type:"text",defaultValue:e.profileInfo.contacts.github})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Vkontakte:"}),Object(x.jsx)(f.a,{name:"contacts.vk",component:"input",type:"text",defaultValue:e.profileInfo.contacts.vk})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Facebook:"}),Object(x.jsx)(f.a,{name:"contacts.facebook",component:"input",type:"text",defaultValue:e.profileInfo.contacts.facebook})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Instagram:"}),Object(x.jsx)(f.a,{name:"contacts.instagram",component:"input",type:"text",defaultValue:e.profileInfo.contacts.instagram})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Twitter:"}),Object(x.jsx)(f.a,{name:"contacts.twitter",component:"input",type:"text",defaultValue:e.profileInfo.contacts.twitter})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Website:"}),Object(x.jsx)(f.a,{name:"contacts.website",component:"input",type:"text",defaultValue:e.profileInfo.contacts.website})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Youtube:"}),Object(x.jsx)(f.a,{name:"contacts.youtube",component:"input",type:"text",defaultValue:e.profileInfo.contacts.youtube})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Main Link:"}),Object(x.jsx)(f.a,{name:"contacts.mainLink",component:"input",type:"text",defaultValue:e.profileInfo.contacts.mainLink})]})]}),e.isFetching?Object(x.jsx)("img",{src:m,className:p.a.loading,alt:"request is loading"}):Object(x.jsx)("button",{type:"submit",disabled:c,className:p.a.submit,children:"Submit"}),e.sentSucessfully?Object(x.jsx)("div",{className:"".concat(p.a.responseResult," ").concat(p.a.sucess),children:"Profile info has been updated"}):null,e.messages.length&&e.messages.length>=1?Object(x.jsxs)("div",{className:"".concat(p.a.responseResult," ").concat(p.a.error),children:["Error: ",e.messages]}):null]})})}})]}):Object(x.jsx)(u.a,{})};t.default=Object(i.compose)(Object(a.b)((function(e){return{isFetching:e.settingsPage.isFetching,messages:e.settingsPage.messages,sentSucessfully:e.settingsPage.sentSucessfully,profileInfo:Object(b.c)(e),id:Object(l.f)(e)}}),{changeProfileInfo:j.a,loadProfile:r.c}),s.a)((function(e){return Object(o.useEffect)((function(){return e.loadProfile(e.id)}),[]),Object(x.jsx)("div",{children:Object(x.jsx)(O,Object(c.a)(Object(c.a)({},e),{},{changeProfileInfo:e.changeProfileInfo}))})}))}}]);
//# sourceMappingURL=6.e046a132.chunk.js.map