"use strict";(self.webpackChunklottery_ticket=self.webpackChunklottery_ticket||[]).push([[199],{9386:function(e,t,n){n.d(t,{t0:function(){return L},zv:function(){return E},uA:function(){return k},uc:function(){return q},jb:function(){return G},zb:function(){return A},AV:function(){return W},Ic:function(){return ne},Vs:function(){return oe}});var r=n(93433),o=n(37762),a=n(74165),i=n(15861),s=n(29439),c=(Symbol(),Symbol()),u=Object.getPrototypeOf,l=new WeakMap,f=function(e){return e&&(l.has(e)?l.get(e):u(e)===Object.prototype||u(e)===Array.prototype)},d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l.set(e,t)},p=function(e){return"object"===typeof e&&null!==e},v=new WeakMap,h=new WeakSet,b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return new Proxy(e,t)},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return p(e)&&!h.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,r=a.get(e);if((null==r?void 0:r[0])===t)return r[1];var c=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return d(c,!0),a.set(e,[t,c]),Reflect.ownKeys(e).forEach((function(t){if(!Object.getOwnPropertyDescriptor(c,t)){var r=Reflect.get(e,t),o={value:r,enumerable:!0,configurable:!0};if(h.has(r))d(r,!1);else if(r instanceof Promise)delete o.value,o.get=function(){return n(r)};else if(v.has(r)){var a=v.get(r),u=(0,s.Z)(a,2),l=u[0],f=u[1];o.value=i(l,f(),n)}Object.defineProperty(c,t,o)}})),c},u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],b=arguments.length>8&&void 0!==arguments[8]?arguments[8]:function(o){if(!p(o))throw new Error("object required");var a=u.get(o);if(a)return a;var d=l[0],m=new Set,w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++l[0];d!==t&&(d=t,m.forEach((function(n){return n(e,t)})))},g=l[1],y=function(e){return function(t,n){var o=(0,r.Z)(t);o[1]=[e].concat((0,r.Z)(o[1])),w(o,n)}},I=new Map,C=function(e){var t,n=I.get(e);n&&(I.delete(e),null==(t=n[1])||t.call(n))},W=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),E={deleteProperty:function(e,t){var n=Reflect.get(e,t);C(t);var r=Reflect.deleteProperty(e,t);return r&&w(["delete",[t],n]),r},set:function(t,r,o,a){var i=Reflect.has(t,r),s=Reflect.get(t,r,a);if(i&&(e(s,o)||u.has(o)&&e(s,u.get(o))))return!0;C(r),p(o)&&(o=function(e){return f(e)&&e[c]||null}(o)||o);var l=o;if(o instanceof Promise)o.then((function(e){o.status="fulfilled",o.value=e,w(["resolve",[r],e])})).catch((function(e){o.status="rejected",o.reason=e,w(["reject",[r],e])}));else{!v.has(o)&&n(o)&&(l=b(o));var d=!h.has(l)&&v.get(l);d&&function(e,t){if(I.has(e))throw new Error("prop listener already exists");if(m.size){var n=t[3](y(e));I.set(e,[t,n])}else I.set(e,[t])}(r,d)}return Reflect.set(t,r,l,a),w(["set",[r],o,s]),!0}},O=t(W,E);u.set(o,O);var k=[W,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++l[1];return g===e||m.size||(g=e,I.forEach((function(t){var n=(0,s.Z)(t,1)[0][1](e);n>d&&(d=n)}))),d},i,function(e){m.add(e),1===m.size&&I.forEach((function(e,t){var n=(0,s.Z)(e,2),r=n[0];if(n[1])throw new Error("remove already exists");var o=r[3](y(t));I.set(t,[r,o])}));return function(){m.delete(e),0===m.size&&I.forEach((function(e,t){var n=(0,s.Z)(e,2),r=n[0],o=n[1];o&&(o(),I.set(t,[r]))}))}}];return v.set(O,k),Reflect.ownKeys(o).forEach((function(e){var t=Object.getOwnPropertyDescriptor(o,e);"value"in t&&(O[e]=o[e],delete t.value,delete t.writable),Object.defineProperty(W,e,t)})),O};return[b,v,h,e,t,n,o,a,i,u,l]},m=b(),w=(0,s.Z)(m,1)[0];function g(){return w(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function y(e,t,n){var r,o=v.get(e);o||console.warn("Please use proxy object");var a=[],i=o[3],s=!1,c=i((function(e){a.push(e),n?t(a.splice(0)):r||(r=Promise.resolve().then((function(){r=void 0,s&&t(a.splice(0))})))}));return s=!0,function(){s=!1,c()}}var I=n(40918),C=g({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),W={state:C,subscribe:function(e){return y(C,(function(){return e(C)}))},push:function(e,t){e!==C.view&&(C.view=e,t&&(C.data=t),C.history.push(e))},reset:function(e){C.view=e,C.history=[e]},replace:function(e){C.history.length>1&&(C.history[C.history.length-1]=e,C.view=e)},goBack:function(){if(C.history.length>1){C.history.pop();var e=C.history.slice(-1),t=(0,s.Z)(e,1)[0];C.view=t}},setData:function(e){C.data=e}},E={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:function(){return typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/.test(navigator.userAgent))},isAndroid:function(){return E.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos:function(){var e=navigator.userAgent.toLowerCase();return E.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:function(e){return e.startsWith("http://")||e.startsWith("https://")},isArray:function(e){return Array.isArray(e)&&e.length>0},formatNativeUrl:function(e,t,n){if(E.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);var r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r="".concat(r,"://")),r.endsWith("/")||(r="".concat(r,"/")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},formatUniversalUrl:function(e,t,n){if(!E.isHttpUrl(e))return this.formatNativeUrl(e,t,n);var r=e;r.endsWith("/")||(r="".concat(r,"/")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},wait:function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))()},openHref:function(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink:function(e,t){try{localStorage.setItem(E.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch(n){console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink:function(e){try{var t=e.split("?"),n=(0,s.Z)(t,1)[0];localStorage.setItem(E.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:n,name:"Android"}))}catch(r){console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink:function(){try{localStorage.removeItem(E.WALLETCONNECT_DEEPLINK_CHOICE)}catch(e){console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage:function(){try{typeof localStorage<"u"&&localStorage.setItem(E.WCM_VERSION,"2.5.9")}catch(e){console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData:function(){var e,t=null==(e=W.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},O=g({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),k={state:O,subscribe:function(e){return y(O.events,(function(){return e(function(e,t){var n=v.get(e);n||console.warn("Please use proxy object");var r=(0,s.Z)(n,3),o=r[0],a=r[1];return(0,r[2])(o,a(),t)}(O.events[O.events.length-1]))}))},initialize:function(){O.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(O.userSessionId=crypto.randomUUID())},setConnectedWalletId:function(e){O.connectedWalletId=e},click:function(e){if(O.enabled){var t={type:"CLICK",name:e.name,userSessionId:O.userSessionId,timestamp:Date.now(),data:e};O.events.push(t)}},track:function(e){if(O.enabled){var t={type:"TRACK",name:e.name,userSessionId:O.userSessionId,timestamp:Date.now(),data:e};O.events.push(t)}},view:function(e){if(O.enabled){var t={type:"VIEW",name:e.name,userSessionId:O.userSessionId,timestamp:Date.now(),data:e};O.events.push(t)}}},j=g({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),A={state:j,subscribe:function(e){return y(j,(function(){return e(j)}))},setChains:function(e){j.chains=e},setWalletConnectUri:function(e){j.walletConnectUri=e},setIsCustomDesktop:function(e){j.isCustomDesktop=e},setIsCustomMobile:function(e){j.isCustomMobile=e},setIsDataLoaded:function(e){j.isDataLoaded=e},setIsUiLoaded:function(e){j.isUiLoaded=e},setIsAuth:function(e){j.isAuth=e}},x=g({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),L={state:x,subscribe:function(e){return y(x,(function(){return e(x)}))},setConfig:function(e){var t,n;k.initialize(),A.setChains(e.chains),A.setIsAuth(Boolean(e.enableAuthMode)),A.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),A.setIsCustomDesktop(Boolean(null==(n=e.desktopWallets)?void 0:n.length)),E.setModalVersionInStorage(),Object.assign(x,e)}},Z="https://explorer-api.walletconnect.com";function M(e,t){return U.apply(this,arguments)}function U(){return U=(0,i.Z)((0,a.Z)().mark((function e(t,n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL(t,Z)).searchParams.append("projectId",L.state.projectId),Object.entries(n).forEach((function(e){var t=(0,s.Z)(e,2),n=t[0],o=t[1];o&&r.searchParams.append(n,String(o))})),e.next=5,fetch(r);case 5:return e.abrupt("return",e.sent.json());case 6:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}var D=function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",M("/w3m/v1/getDesktopListings",e));case 1:case"end":return t.stop()}}),t)})))()},P=function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",M("/w3m/v1/getMobileListings",e));case 1:case"end":return t.stop()}}),t)})))()},S=function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",M("/w3m/v1/getAllListings",e));case 1:case"end":return t.stop()}}),t)})))()},N=function(e){return"".concat(Z,"/w3m/v1/getWalletImage/").concat(e,"?projectId=").concat(L.state.projectId)},R=function(e){return"".concat(Z,"/w3m/v1/getAssetImage/").concat(e,"?projectId=").concat(L.state.projectId)},T=Object.defineProperty,_=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,z=function(e,t,n){return t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},H=function(e,t){for(var n in t||(t={}))B.call(t,n)&&z(e,n,t[n]);if(_){var r,a=(0,o.Z)(_(t));try{for(a.s();!(r=a.n()).done;){n=r.value;V.call(t,n)&&z(e,n,t[n])}}catch(i){a.e(i)}finally{a.f()}}return e},K=E.isMobile(),J=g({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),q={state:J,getRecomendedWallets:function(){return(0,i.Z)((0,a.Z)().mark((function e(){var t,n,r,o,i,s,c,u,l,f,d,p,v,h,b;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=L.state,n=t.explorerRecommendedWalletIds,r=t.explorerExcludedWalletIds,"NONE"!==n&&("ALL"!==r||n)){e.next=3;break}return e.abrupt("return",J.recomendedWallets);case 3:if(!E.isArray(n)){e.next=13;break}return o={recommendedIds:n.join(",")},e.next=7,S(o);case 7:i=e.sent,s=i.listings,(c=Object.values(s)).sort((function(e,t){return n.indexOf(e.id)-n.indexOf(t.id)})),J.recomendedWallets=c,e.next=31;break;case 13:if(u=A.state,l=u.chains,f=u.isAuth,d=null===l||void 0===l?void 0:l.join(","),p=E.isArray(r),v={page:1,sdks:f?"auth_v1":void 0,entries:E.RECOMMENDED_WALLET_AMOUNT,chains:d,version:2,excludedIds:p?r.join(","):void 0},!K){e.next=25;break}return e.next=22,P(v);case 22:e.t0=e.sent,e.next=28;break;case 25:return e.next=27,D(v);case 27:e.t0=e.sent;case 28:h=e.t0,b=h.listings,J.recomendedWallets=Object.values(b);case 31:return e.abrupt("return",J.recomendedWallets);case 32:case"end":return e.stop()}}),e)})))()},getWallets:function(e){return(0,i.Z)((0,a.Z)().mark((function t(){var n,o,i,s,c,u,l,f,d,p,v,h;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=H({},e),o=L.state,i=o.explorerRecommendedWalletIds,s=o.explorerExcludedWalletIds,c=J.recomendedWallets,"ALL"!==s){t.next=3;break}return t.abrupt("return",J.wallets);case 3:if(c.length?n.excludedIds=c.map((function(e){return e.id})).join(","):E.isArray(i)&&(n.excludedIds=i.join(",")),E.isArray(s)&&(n.excludedIds=[n.excludedIds,s].filter(Boolean).join(",")),A.state.isAuth&&(n.sdks="auth_v1"),u=e.page,l=e.search,!K){t.next=12;break}return t.next=9,P(n);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,D(n);case 14:t.t0=t.sent;case 15:return f=t.t0,d=f.listings,p=f.total,v=Object.values(d),h=l?"search":"wallets",t.abrupt("return",(J[h]={listings:[].concat((0,r.Z)(J[h].listings),v),total:p,page:null!==u&&void 0!==u?u:1},{listings:v,total:p}));case 21:case"end":return t.stop()}}),t)})))()},getWalletImageUrl:function(e){return N(e)},getAssetImageUrl:function(e){return R(e)},resetSearch:function(){J.search={listings:[],total:0,page:1}}},F=g({open:!1}),G={state:F,subscribe:function(e){return y(F,(function(){return e(F)}))},open:function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var n=A.state,r=n.isUiLoaded,o=n.isDataLoaded;if(A.setWalletConnectUri(null===e||void 0===e?void 0:e.uri),A.setChains(null===e||void 0===e?void 0:e.chains),W.reset("ConnectWallet"),r&&o)F.open=!0,t();else var a=setInterval((function(){var e=A.state;e.isUiLoaded&&e.isDataLoaded&&(clearInterval(a),F.open=!0,t())}),200)})));case 1:case"end":return t.stop()}}),t)})))()},close:function(){F.open=!1}},Q=Object.defineProperty,X=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,ee=function(e,t,n){return t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n};var te=g({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),ne={state:te,subscribe:function(e){return y(te,(function(){return e(te)}))},setThemeConfig:function(e){var t=e.themeMode,n=e.themeVariables;t&&(te.themeMode=t),n&&(te.themeVariables=function(e,t){for(var n in t||(t={}))Y.call(t,n)&&ee(e,n,t[n]);if(X){var r,a=(0,o.Z)(X(t));try{for(a.s();!(r=a.n()).done;)n=r.value,$.call(t,n)&&ee(e,n,t[n])}catch(i){a.e(i)}finally{a.f()}}return e}({},n))}},re=g({open:!1,message:"",variant:"success"}),oe={state:re,subscribe:function(e){return y(re,(function(){return e(re)}))},openToast:function(e,t){re.open=!0,re.message=e,re.variant=t},closeToast:function(){re.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=I.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window))},41199:function(e,t,n){n.r(t),n.d(t,{WalletConnectModal:function(){return c}});var r=n(74165),o=n(15861),a=n(15671),i=n(43144),s=n(9386),c=function(){function e(t){(0,a.Z)(this,e),this.openModal=s.jb.open,this.closeModal=s.jb.close,this.subscribeModal=s.jb.subscribe,this.setTheme=s.Ic.setThemeConfig,s.Ic.setThemeConfig(t),s.t0.setConfig(t),this.initUi()}return(0,i.Z)(e,[{key:"initUi",value:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(typeof window<"u")){e.next=5;break}return e.next=3,n.e(544).then(n.bind(n,66544));case 3:t=document.createElement("wcm-modal"),document.body.insertAdjacentElement("beforeend",t),s.zb.setIsUiLoaded(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()}}]);