(function(A){function t(t){for(var n,a,s=t[0],c=t[1],i=t[2],u=0,g=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&g.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(A[n]=c[n]);l&&l(t);while(g.length)g.shift()();return r.push.apply(r,i||[]),e()}function e(){for(var A,t=0;t<r.length;t++){for(var e=r[t],n=!0,a=1;a<e.length;a++){var s=e[a];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),A=c(c.s=e[0]))}return A}var n={},a={app:0},o={app:0},r=[];function s(A){return c.p+"js/"+({about:"about"}[A]||A)+"."+{about:"33817ca8"}[A]+".js"}function c(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(A){var t=[],e={about:1};a[A]?t.push(a[A]):0!==a[A]&&e[A]&&t.push(a[A]=new Promise((function(t,e){for(var n="css/"+({about:"about"}[A]||A)+"."+{about:"ed921a6e"}[A]+".css",o=c.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===n||u===o))return t()}var g=document.getElementsByTagName("style");for(s=0;s<g.length;s++){i=g[s],u=i.getAttribute("data-href");if(u===n||u===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+A+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete a[A],l.parentNode.removeChild(l),e(r)},l.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){a[A]=0})));var n=o[A];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,e){n=o[A]=[t,e]}));t.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(A);var g=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(l);var e=o[A];if(0!==e){if(e){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;g.message="Loading chunk "+A+" failed.\n("+n+": "+a+")",g.name="ChunkLoadError",g.type=n,g.request=a,e[1](g)}o[A]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},c.m=A,c.c=n,c.d=function(A,t,e){c.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},c.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},c.t=function(A,t){if(1&t&&(A=c(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var n in A)c.d(e,n,function(t){return A[t]}.bind(null,n));return e},c.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return c.d(t,"a",t),t},c.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},c.p="/insta-clone-postgres-boiler/",c.oe=function(A){throw console.error(A),A};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var g=0;g<i.length;g++)t(i[g]);var l=u;r.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"01ac":function(A,t,e){A.exports=e.p+"img/instagram-name.dcc389e5.png"},"034f":function(A,t,e){"use strict";var n=e("85ec"),a=e.n(n);a.a},"34e3":function(A,t,e){A.exports=e.p+"img/google-stor.d9982832.png"},"56d7":function(A,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("ab8b");var n=e("2b0e"),a=e("a6f4"),o=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],s=(e("034f"),e("2877")),c={},i=Object(s["a"])(c,o,r,!1,null,null,null),u=i.exports,g=(e("d3b7"),e("8c4f")),l=function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{staticClass:"home",attrs:{id:"home"}},[n("div",{staticClass:"row main"},[n("div",{staticClass:"col-sm-2"}),n("div",{staticClass:"col-sm-4 mobile"},[n("transition-group",{attrs:{name:"fade",tag:"div"}},A._l([A.currentIndex],(function(t){return n("div",{key:t},[n("img",{attrs:{src:A.currentImg}})])})),0)],1),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"login"},[n("center",[n("img",{staticClass:"img-insta",attrs:{src:e("01ac")}})]),n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:A.moboremail,expression:"moboremail"}],staticClass:"box-in",attrs:{placeholder:"Mobile number or username or email"},domProps:{value:A.moboremail},on:{input:function(t){t.target.composing||(A.moboremail=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:A.pass,expression:"pass"}],staticClass:"box-in",attrs:{type:"password",placeholder:"password"},domProps:{value:A.pass},on:{input:function(t){t.target.composing||(A.pass=t.target.value)}}}),n("button",{staticClass:"login-btn",attrs:{type:"button"},on:{click:A.check}},[A._v("Log In")])]),A._m(0),n("div",{staticClass:"facebook"},[n("a",{attrs:{href:""}},[n("img",{attrs:{src:e("d0c5"),alt:""}}),A._v("Log in with Facebook")])]),A._m(1)],1),n("div",{staticClass:"login"},[n("p",{staticClass:"signup"},[A._v("Don't have an account? "),n("router-link",{attrs:{to:"/signup"}},[A._v("Sign Up")])],1)]),n("p",{staticClass:"get-app"},[A._v("Get the app")]),n("div",{staticClass:"row app-getting"},[n("div",{staticClass:"col-sm-1"}),n("div",{staticClass:"col-sm-4"},[n("img",{staticClass:"Rt8TI ",attrs:{src:e("f9c7"),alt:""}})]),n("div",{staticClass:"col-sm-4"},[n("img",{staticClass:"Rt8TI ",attrs:{src:e("34e3"),alt:""}})]),n("div",{staticClass:"col-sm-2"})])]),n("div",{staticClass:"col-sm-2"})]),A._m(2)])},m=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"row K-1uj Z7p_S"},[e("div",{staticClass:"col-sm-1"}),e("div",{staticClass:"col-sm-4 s311c"}),e("div",{staticClass:"col-sm-1 _0tv-g"},[A._v("OR")]),e("div",{staticClass:"col-sm-4 s311c"}),e("div",{staticClass:"col-sm-1"})])},function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"for-pass"},[e("a",{attrs:{href:""}},[A._v("Forget Password?")])])},function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"footer"},[e("p",[e("a",{attrs:{href:""}},[A._v("ABOUT")]),e("a",{attrs:{href:""}},[A._v("HELP")]),e("a",{attrs:{href:""}},[A._v("PRESS")]),e("a",{attrs:{href:""}},[A._v("API")]),e("a",{attrs:{href:""}},[A._v("JOBS")]),e("a",{attrs:{href:""}},[A._v("PRIVACY")]),e("a",{attrs:{href:""}},[A._v("TERMS")]),e("a",{attrs:{href:""}},[A._v("LOCATIONS")]),e("a",{attrs:{href:""}},[A._v("HASHTAGS")]),e("a",{attrs:{href:""}},[A._v("TOP ACCOUNTS")]),e("a",{attrs:{href:""}},[A._v("LANGUAGE")]),e("a",{staticClass:"disabled",attrs:{href:""}},[A._v("©2020 INSTAGRAM FROM FACEBOOK")])])])}],p={name:"Home",props:{msg:String},data:function(){return{moboremail:null,pass:null,images:["https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg","https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg","https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg","https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg","https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"],timer:null,currentIndex:0}},mounted:function(){sessionStorage.setItem("email",""),this.startSlide()},methods:{startSlide:function(){this.timer=setInterval(this.next,4e3)},next:function(){this.currentIndex+=1},check:function(){var A=this;this.moboremail&&fetch("https://evening-reef-11191.herokuapp.com/api/user/login/"+this.moboremail+"/"+this.pass).then((function(A){return A.json()})).then((function(t){1==t.status?(localStorage.setItem("token",t.token),A.$router.push({path:"/upload"}),sessionStorage.setItem("email",A.moboremail)):alert("invalid")}))}},computed:{currentImg:function(){return this.images[Math.abs(this.currentIndex)%this.images.length]}}},d=p,f=(e("d308"),Object(s["a"])(d,l,m,!1,null,"2a345614",null)),h=f.exports;n["default"].use(g["a"]);var C=[{path:"/",name:"Home",component:h},{path:"/movieapp",name:"movieapp",component:function(){return e.e("about").then(e.bind(null,"d1b3"))}},{path:"/signup",name:"signup",component:function(){return e.e("about").then(e.bind(null,"6cd2"))}},{path:"/home",name:"home",component:h},{path:"/upload",name:"upload",component:function(){return e.e("about").then(e.bind(null,"9dac"))}},{path:"/profile",name:"profile",component:function(){return e.e("about").then(e.bind(null,"09ee"))}},{path:"/edit",name:"edit",component:function(){return e.e("about").then(e.bind(null,"bf45"))}},{path:"/change_poto",name:"change_poto",component:function(){return e.e("about").then(e.bind(null,"e3c3"))}},{path:"/edit-post",name:"edit-post",component:function(){return e.e("about").then(e.bind(null,"81f7"))}},{path:"/postcom",name:"postcom",component:function(){return e.e("about").then(e.bind(null,"bd17"))}},{path:"/Error",name:"Error",component:function(){return e.e("about").then(e.bind(null,"3fb9"))}},{path:"/request",name:"request",component:function(){return e.e("about").then(e.bind(null,"2608"))}}],v=new g["a"]({routes:C}),b=v,Q=e("ea07"),E=e.n(Q),B=e("0a63"),w=e.n(B);n["default"].use(E.a),n["default"].use(w.a),n["default"].config.productionTip=!1,n["default"].use(a["b"]),new n["default"]({router:b,render:function(A){return A(u)}}).$mount("#app")},"85ec":function(A,t,e){},b82c:function(A,t,e){},d0c5:function(A,t){A.exports="data:image/png;base64,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"},d308:function(A,t,e){"use strict";var n=e("b82c"),a=e.n(n);a.a},f9c7:function(A,t,e){A.exports=e.p+"img/app-store.5a105248.png"}});
//# sourceMappingURL=app.050acfd1.js.map