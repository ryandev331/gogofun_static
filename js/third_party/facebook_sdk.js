const vue_fb = {}
vue_fb.install = function install(Vue, options) {
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) { return }
        js = d.createElement(s)
        js.id = id
        js.src = "//connect.facebook.net/en_US/sdk.js"
        fjs.parentNode.insertBefore(js, fjs)
        console.log('setting fb sdk')
    }(document, 'script', 'facebook-jssdk'))

    window.fbAsyncInit = function onSDKInit() {
        FB.init(options)
        FB.AppEvents.logPageView()
        Vue.FB = FB
        window.dispatchEvent(new Event('fb-sdk-ready'))
    }
    Vue.FB = undefined
}

import Vue from 'vue'

Vue.use(vue_fb, {
    appId: 'your-app-id',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v2.9'
})


// window.fbAsyncInit = function () {
//     FB.init({
//         appId: '732399940570016',
//         cookie: true,
//         xfbml: true,
//         version: 'v5.0'
//     });
//     FB.AppEvents.logPageView();
// };

// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) { return; }
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "https://connect.facebook.net/zh_TW/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));