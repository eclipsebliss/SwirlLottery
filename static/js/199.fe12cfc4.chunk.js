"use strict";(self.webpackChunklottery_ticket=self.webpackChunklottery_ticket||[]).push([[199],{9386:(e,t,s)=>{s.d(t,{ConfigCtrl:()=>E,zv:()=>b,uA:()=>y,ExplorerCtrl:()=>N,jb:()=>x,OptionsCtrl:()=>C,AV:()=>v,ThemeCtrl:()=>V,ToastCtrl:()=>J});Symbol();const o=Symbol();const n=Object.getPrototypeOf,a=new WeakMap,i=e=>e&&(a.has(e)?a.get(e):n(e)===Object.prototype||n(e)===Array.prototype),r=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a.set(e,t)},l=e=>"object"===typeof e&&null!==e,c=new WeakMap,d=new WeakSet,u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e,t)=>new Proxy(e,t),s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;const o=a.get(e);if((null==o?void 0:o[0])===t)return o[1];const i=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return r(i,!0),a.set(e,[t,i]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(i,t))return;const o=Reflect.get(e,t),n={value:o,enumerable:!0,configurable:!0};if(d.has(o))r(o,!1);else if(o instanceof Promise)delete n.value,n.get=()=>s(o);else if(c.has(o)){const[e,t]=c.get(o);n.value=u(e,t(),s)}Object.defineProperty(i,t,n)})),i},p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],g=arguments.length>8&&void 0!==arguments[8]?arguments[8]:n=>{if(!l(n))throw new Error("object required");const a=p.get(n);if(a)return a;let r=h[0];const f=new Set,m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++h[0];r!==t&&(r=t,f.forEach((s=>s(e,t))))};let v=h[1];const b=e=>(t,s)=>{const o=[...t];o[1]=[e,...o[1]],m(o,s)},w=new Map,y=e=>{var t;const s=w.get(e);s&&(w.delete(e),null==(t=s[1])||t.call(s))},I=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),C={deleteProperty(e,t){const s=Reflect.get(e,t);y(t);const o=Reflect.deleteProperty(e,t);return o&&m(["delete",[t],s]),o},set(t,n,a,r){const u=Reflect.has(t,n),h=Reflect.get(t,n,r);if(u&&(e(h,a)||p.has(a)&&e(h,p.get(a))))return!0;y(n),l(a)&&(a=(e=>i(e)&&e[o]||null)(a)||a);let v=a;if(a instanceof Promise)a.then((e=>{a.status="fulfilled",a.value=e,m(["resolve",[n],e])})).catch((e=>{a.status="rejected",a.reason=e,m(["reject",[n],e])}));else{!c.has(a)&&s(a)&&(v=g(a));const e=!d.has(v)&&c.get(v);e&&((e,t)=>{if(w.has(e))throw new Error("prop listener already exists");if(f.size){const s=t[3](b(e));w.set(e,[t,s])}else w.set(e,[t])})(n,e)}return Reflect.set(t,n,v,r),m(["set",[n],a,h]),!0}},W=t(I,C);p.set(n,W);const E=[I,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++h[1];return v===e||f.size||(v=e,w.forEach((t=>{let[s]=t;const o=s[1](e);o>r&&(r=o)}))),r},u,e=>{f.add(e),1===f.size&&w.forEach(((e,t)=>{let[s,o]=e;if(o)throw new Error("remove already exists");const n=s[3](b(t));w.set(t,[s,n])}));return()=>{f.delete(e),0===f.size&&w.forEach(((e,t)=>{let[s,o]=e;o&&(o(),w.set(t,[s]))}))}}];return c.set(W,E),Reflect.ownKeys(n).forEach((e=>{const t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(W[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(I,e,t)})),W};return[g,c,d,e,t,s,n,a,u,p,h]},[p]=u();function h(){return p(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function g(e,t,s){const o=c.get(e);let n;o||console.warn("Please use proxy object");const a=[],i=o[3];let r=!1;const l=i((e=>{a.push(e),s?t(a.splice(0)):n||(n=Promise.resolve().then((()=>{n=void 0,r&&t(a.splice(0))})))}));return r=!0,()=>{r=!1,l()}}var f=s(918);const m=h({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),v={state:m,subscribe:e=>g(m,(()=>e(m))),push(e,t){e!==m.view&&(m.view=e,t&&(m.data=t),m.history.push(e))},reset(e){m.view=e,m.history=[e]},replace(e){m.history.length>1&&(m.history[m.history.length-1]=e,m.view=e)},goBack(){if(m.history.length>1){m.history.pop();const[e]=m.history.slice(-1);m.view=e}},setData(e){m.data=e}},b={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>b.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return b.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(b.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!b.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(b.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(b.WCM_VERSION,"2.5.9")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=v.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},w=h({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),y={state:w,subscribe:e=>g(w.events,(()=>e(function(e,t){const s=c.get(e);s||console.warn("Please use proxy object");const[o,n,a]=s;return a(o,n(),t)}(w.events[w.events.length-1])))),initialize(){w.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(w.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){w.connectedWalletId=e},click(e){if(w.enabled){const t={type:"CLICK",name:e.name,userSessionId:w.userSessionId,timestamp:Date.now(),data:e};w.events.push(t)}},track(e){if(w.enabled){const t={type:"TRACK",name:e.name,userSessionId:w.userSessionId,timestamp:Date.now(),data:e};w.events.push(t)}},view(e){if(w.enabled){const t={type:"VIEW",name:e.name,userSessionId:w.userSessionId,timestamp:Date.now(),data:e};w.events.push(t)}}},I=h({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),C={state:I,subscribe:e=>g(I,(()=>e(I))),setChains(e){I.chains=e},setWalletConnectUri(e){I.walletConnectUri=e},setIsCustomDesktop(e){I.isCustomDesktop=e},setIsCustomMobile(e){I.isCustomMobile=e},setIsDataLoaded(e){I.isDataLoaded=e},setIsUiLoaded(e){I.isUiLoaded=e},setIsAuth(e){I.isAuth=e}},W=h({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),E={state:W,subscribe:e=>g(W,(()=>e(W))),setConfig(e){var t,s;y.initialize(),C.setChains(e.chains),C.setIsAuth(Boolean(e.enableAuthMode)),C.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),C.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),b.setModalVersionInStorage(),Object.assign(W,e)}},O="https://explorer-api.walletconnect.com";async function L(e,t){const s=new URL(e,O);return s.searchParams.append("projectId",E.state.projectId),Object.entries(t).forEach((e=>{let[t,o]=e;o&&s.searchParams.append(t,String(o))})),(await fetch(s)).json()}const A={getDesktopListings:async e=>L("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>L("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>L("/w3m/v1/getInjectedListings",e),getAllListings:async e=>L("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${O}/w3m/v1/getWalletImage/${e}?projectId=${E.state.projectId}`,getAssetImageUrl:e=>`${O}/w3m/v1/getAssetImage/${e}?projectId=${E.state.projectId}`};var j=Object.defineProperty,M=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,D=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const P=b.isMobile(),S=h({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),N={state:S,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=E.state;if("NONE"===e||"ALL"===t&&!e)return S.recomendedWallets;if(b.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await A.getAllListings(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),S.recomendedWallets=o}else{const{chains:e,isAuth:s}=C.state,o=null===e||void 0===e?void 0:e.join(","),n=b.isArray(t),a={page:1,sdks:s?"auth_v1":void 0,entries:b.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:n?t.join(","):void 0},{listings:i}=P?await A.getMobileListings(a):await A.getDesktopListings(a);S.recomendedWallets=Object.values(i)}return S.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))U.call(t,s)&&D(e,s,t[s]);if(M)for(var s of M(t))k.call(t,s)&&D(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=E.state,{recomendedWallets:n}=S;if("ALL"===o)return S.wallets;n.length?t.excludedIds=n.map((e=>e.id)).join(","):b.isArray(s)&&(t.excludedIds=s.join(",")),b.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),C.state.isAuth&&(t.sdks="auth_v1");const{page:a,search:i}=e,{listings:r,total:l}=P?await A.getMobileListings(t):await A.getDesktopListings(t),c=Object.values(r),d=i?"search":"wallets";return S[d]={listings:[...S[d].listings,...c],total:l,page:null!==a&&void 0!==a?a:1},{listings:c,total:l}},getWalletImageUrl:e=>A.getWalletImageUrl(e),getAssetImageUrl:e=>A.getAssetImageUrl(e),resetSearch(){S.search={listings:[],total:0,page:1}}},T=h({open:!1}),x={state:T,subscribe:e=>g(T,(()=>e(T))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=C.state;if(C.setWalletConnectUri(null===e||void 0===e?void 0:e.uri),C.setChains(null===e||void 0===e?void 0:e.chains),v.reset("ConnectWallet"),s&&o)T.open=!0,t();else{const e=setInterval((()=>{const s=C.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),T.open=!0,t())}),200)}})),close(){T.open=!1}};var R=Object.defineProperty,_=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,H=(e,t,s)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const K=h({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),V={state:K,subscribe:e=>g(K,(()=>e(K))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(K.themeMode=t),s&&(K.themeVariables=((e,t)=>{for(var s in t||(t={}))$.call(t,s)&&H(e,s,t[s]);if(_)for(var s of _(t))B.call(t,s)&&H(e,s,t[s]);return e})({},s))}},z=h({open:!1,message:"",variant:"success"}),J={state:z,subscribe:e=>g(z,(()=>e(z))),openToast(e,t){z.open=!0,z.message=e,z.variant=t},closeToast(){z.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=f.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window))},78:(e,t,s)=>{s.d(t,{WalletConnectModal:()=>n});var o=s(9386);class n{constructor(e){this.openModal=o.jb.open,this.closeModal=o.jb.close,this.subscribeModal=o.jb.subscribe,this.setTheme=o.ThemeCtrl.setThemeConfig,o.ThemeCtrl.setThemeConfig(e),o.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(544).then(s.bind(s,6544));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);