(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{436:function(e,t,n){},651:function(e,t,n){"use strict";var o=n(436);n.n(o).a},706:function(e,t,n){"use strict";n.r(t);n(57);var o,r=n(17),l=(n(18),n(103)),c=n.n(l),d=n(250),h=n.n(d),v=(n(498),n(499)),f=n(28),m={components:{ValidationObserver:f.a,ValidationProvider:f.b,textInput:v.a},head:function(){return{script:[{src:"https://apis.google.com/js/platform.js",asyc:!0,defer:!0}],meta:[{name:"google-signin-client_id",content:"715485560909-74ae0so36l8rcimnrrsm71a42a75ss44.apps.googleusercontent.com"}]}},data:function(){return{phone:"",email:"",password:"",isFBReady:!1,userFbId:"",responses:{responseSigninText:""},formGroup:[{fields:[{name:"UserID",label:"手機號碼",type:"text",rules:"required|mobile",value:"",placeholder:"請輸入註冊時的手機號碼"},{name:"password",label:"輸入密碼",type:"text",rules:"required|min:6|max:20",value:"",placeholder:"請輸入註冊時的密碼"}]}]}},computed:{generalFormData:function(){return this.formGroup.reduce((function(e,t,n,o){return t.fields.forEach((function(t){e.data[t.name]=t.value})),e}),{data:{login_type:"1"}})}},methods:{switchModal:function(e,t,n,o,r){"showModal"===e?(this.responses[n]=o,this.$bvModal.show(t),r&&(location.href=r)):"hideModal"===e&&(this.$bvModal.hide(t),r&&(location.href=r))},submit:(o=Object(r.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.next=3,this.$refs.form.validate();case 3:e.sent?(t=this,n=h.a.stringify(t.generalFormData),c.a.post("/test_user/login",n).then((function(e){switch(console.log("postData",n),console.log("response",e),console.log("response data",e.data),e.data.status){case"0":t.switchModal("showModal","responseSignin","responseSigninText","/登入成功");break;case"1":t.switchModal("showModal","responseSignin","responseSigninText","無此電話號碼");break;case"2":console.log(),t.switchModal("showModal","responseSignin","responseSigninText","密碼錯誤")}setTimeout(t.switchModal,7e3,"hideModal","responseSignin")})).then((function(e){console.log("error:"+e)}))):t.switchModal("showModal","responseSignin","responseSigninText","請確認欄位填寫正確!");case 5:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),checkLoginState:function(e,t){var n=this;e=e;FB.getLoginStatus((function(e){if(console.log("statusChange",e),"connected"===e.status)switch(alert("已登入FB/已登入GoGoFun"),console.log("已登入FB/已登入GoGoFun"),n.getFbUserData(),t){case"logout":FB.logout((function(e){console.log("logout",e)}));break;case"revoke":n.revokeFbUserAuth()}else"not_authorized"===e.status||"unknown"===e.status?(console.log("App未授權或用戶登出FB網站"),"login"===t&&FB.login((function(e){"connected"===e.status?(n.userFbId=e.authResponse.userID,console.log("已授權App登入FB 的 userID:".concat(userID)),n.getFbUserData()):alert("Facebook帳號無法登入")}),{scope:"mail"})):console.log("未登入 FB")}),e)},userFbLogin:function(){this.checkLoginState(!0,"login")},getFbUserData:function(){FB.api("/me","GET",{fields:"last_name,first_name,name,email,id"},(function(e){console.log("會員暱稱："+e.name+"會員名字："+e.first_name+"會員姓氏："+e.last_name+"會員 email："+e.email+"會員 uid :"+e.id)}))},userLineLogin:function(){var e="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1653561077&redirect_uri="+(location.href+"/check")+"&state=12345abcde&scope=openid%20profile%20email&nonce=ryantestline";window.open(e,"_self")},userGoogleLogin:function(){var e="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1653561077&redirect_uri="+(location.href+"/check")+"&state=12345abcde&scope=openid%20profile%20email&nonce=ryantestline";window.open(e,"_self")}},mounted:function(){var e,s,t,n,o,r=this;window.fbAsyncInit=function(){FB.init({appId:"732399940570016",cookie:!0,xfbml:!0,version:"v5.0"}),FB.AppEvents.logPageView(),r.checkLoginState()},e=document,s="script",t="facebook-jssdk",o=e.getElementsByTagName(s)[0],e.getElementById(t)||((n=e.createElement(s)).id=t,n.src="https://connect.facebook.net/zh_TW/sdk.js",o.parentNode.insertBefore(n,o))}},_=(n(651),n(11)),component=Object(_.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("section",{staticClass:"left"},[n("div",{staticClass:"signin_page"},[n("h1",{staticClass:"text-dark-blue-3 py-3",attrs:{align:"center"}},[e._v("會員登入")]),e._v(" "),n("ValidationObserver",{ref:"form",attrs:{tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){t.invalid,t.passes;return e._l(e.formGroup[0].fields,(function(t){return n(t.type+"Input",{key:t.name,tag:"component",staticClass:"w-16 mx-auto mb-3",attrs:{name:t.name,rules:t.rules,placeholder:t.placeholder,type:t.type,label:t.label},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"field.value"}},[e._v(e._s(t.name))])}))}}])}),e._v(" "),n("div",{staticClass:"forgot_psd"},[n("div",[e._v("忘記密碼?")]),e._v(" "),n("nuxt-link",{attrs:{to:"/signup"}},[e._v("還不是會員嗎?點我註冊")])],1),e._v(" "),n("button",{staticClass:"d-block login_btn w-16 mx-auto",on:{click:e.submit}},[e._v("\n\t\t\t\t登入\n\t\t\t")]),e._v(" "),n("div",{staticClass:"other_login"},[n("div",[e._v("選擇其他登入方式：")]),e._v(" "),n("div",{staticClass:"circles"},[n("div",{staticClass:"circle line",on:{click:e.userLineLogin}}),e._v(" "),n("div",{staticClass:"circle fb",on:{click:e.userFbLogin}}),e._v(" "),n("div",{staticClass:"circle google"}),e._v(" "),n("div",{staticClass:"g-signin2",attrs:{"data-onsuccess":"onSignIn"}})])])],1)]),e._v(" "),n("section",{staticClass:"right"},[n("div",{staticClass:"signin_page"},[n("div",{attrs:{id:"FB_STATUS_1"}}),e._v(" "),n("div",[e._v("歡迎回來!")]),e._v(" "),n("div",[e._v("立即登入解鎖全部功能")]),e._v(" "),e._m(0),e._v(" "),n("div",[n("nuxt-link",{attrs:{to:"/signup"}},[e._v("還不是會員")])],1)]),e._v(" "),n("b-modal",{attrs:{id:"responseSignin",size:"sm","no-stacking":"","hide-header":"","hide-footer":"","body-bg-variant":"modal-bg","body-text-variant":"white","body-border-variant":"white","header-border-variant":"white","footer-border-variant":"white","content-class":"bg-transparent"}},[e._v(e._s(e.responses.responseSigninText))])],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("降價通知")]),this._v(" "),t("li",[this._v("私訊諮詢案件")]),this._v(" "),t("li",[this._v("新案件通知")]),this._v(" "),t("li",[this._v("刊登案件")])])}],!1,null,"f5419d7c",null);t.default=component.exports}}]);