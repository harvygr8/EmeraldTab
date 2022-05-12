var app=function(){"use strict";function t(){}function e(t){return t()}function o(){return Object.create(null)}function n(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,o){t.insertBefore(e,o||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e,o,n){return t.addEventListener(e,o,n),()=>t.removeEventListener(e,o,n)}function m(t,e,o){null==o?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e,o,n){t.style.setProperty(e,o,n?"important":"")}let g;function p(t){g=t}const w=[],b=[],$=[],y=[],v=Promise.resolve();let F=!1;function C(t){$.push(t)}const T=new Set;let k=0;function _(){const t=g;do{for(;k<w.length;){const t=w[k];k++,p(t),E(t.$$)}for(p(null),w.length=0,k=0;b.length;)b.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];T.has(e)||(T.add(e),e())}$.length=0}while(w.length);for(;y.length;)y.pop()();F=!1,T.clear(),p(t)}function E(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const A=new Set;function D(t,e){t&&t.i&&(A.delete(t),t.i(e))}function j(t,e,o,n){if(t&&t.o){if(A.has(t))return;A.add(t),undefined.c.push((()=>{A.delete(t),n&&(o&&t.d(1),n())})),t.o(e)}}function P(t){t&&t.c()}function S(t,o,l,c){const{fragment:s,on_mount:a,on_destroy:i,after_update:u}=t.$$;s&&s.m(o,l),c||C((()=>{const o=a.map(e).filter(r);i?i.push(...o):n(o),t.$$.on_mount=[]})),u.forEach(C)}function M(t,e){const o=t.$$;null!==o.fragment&&(n(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(w.push(t),F||(F=!0,v.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,r,l,c,s,i,u,d=[-1]){const f=g;p(e);const m=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:o(),dirty:d,skip_bound:!1,root:r.target||f.$$.root};u&&u(m.root);let h=!1;if(m.ctx=l?l(e,r.props||{},((t,o,...n)=>{const r=n.length?n[0]:o;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),h&&L(e,t)),o})):[],m.update(),h=!0,n(m.before_update),m.fragment=!!c&&c(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();r.intro&&D(e.$$.fragment),S(e,r.target,r.anchor,r.customElement),_()}p(f)}class W{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function O(e){let o,n,r;return{c(){o=i("div"),n=i("p"),r=u(e[0]),m(n,"class","text-7xl sm:text-8xl text-white rounded-md p-2")},m(t,e){s(t,o,e),c(o,n),c(n,r)},p(t,[e]){1&e&&h(r,t[0])},i:t,o:t,d(t){t&&a(o)}}}function N(t,e,o){let n,r,l="";return chrome.storage.local.get(["timeF"],(function(t){t.timeF?(n=t.timeF,r=new Date,"12h"==n?o(0,l=r.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0})):"24h"==n&&o(0,l=r.toTimeString().split(" ")[0])):(chrome.storage.local.set({timeF:"24h"}),window.location.reload(!0))})),setInterval((()=>{r=new Date,"12h"==n?o(0,l=r.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0})):"24h"==n&&o(0,l=r.toTimeString().split(" ")[0])}),1e3),[l]}class R extends W{constructor(t){super(),I(this,t,N,O,l,{})}}function U(e){let o,n;return{c(){o=i("div"),n=i("p"),n.textContent=`${e[0]}`,m(n,"class","text-2xl text-white p-2"),x(n,"text-transform","uppercase")},m(t,e){s(t,o,e),c(o,n)},p:t,i:t,o:t,d(t){t&&a(o)}}}function B(t){const e=new Date;let o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=e.getDate();let r,l=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()];switch(e.getFullYear(),n){case 1:r="st";break;case 2:r="nd";break;case 3:r="rd";break;default:r="th"}return 1===n&&(r="st"),2===n&&(r="nd"),3==n&&(r="rd"),n>3&&(r="th"),[`${o}, ${n}${r} ${l}`]}class H extends W{constructor(t){super(),I(this,t,B,U,l,{})}}function V(e){let o;return{c(){o=i("div"),o.innerHTML='<a class="text-1xl font-bold text-white rounded-md p-2 hover:outline outline-offset-2 outline-1" href="https://www.google.com/"><i class="fab fa-google fa-2x"></i></a> \n  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2 hover:outline outline-offset-2 outline-1" href="https://www.twitter.com/"><i class="fab fa-twitter fa-2x"></i></a> \n  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2 hover:outline outline-offset-2 outline-1" href="https://www.reddit.com/"><i class="fab fa-reddit-alien fa-2x"></i></a> \n  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2 hover:outline outline-offset-2 outline-1" href="https://www.facebook.com/"><i class="fab fa-facebook fa-2x"></i></a> \n  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2 hover:outline outline-offset-2 outline-1" href="https://www.linkedin.com/"><i class="fab fa-linkedin-in fa-2x"></i></a> \n  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2 hover:outline outline-offset-2 outline-1" href="https://www.twitch.com/"><i class="fab fa-twitch fa-2x"></i></a> \n  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2 hover:outline outline-offset-2 outline-1" href="https://www.youtube.com/"><i class="fab fa-youtube fa-2x"></i></a> \n  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2 hover:outline outline-offset-2 outline-1" href="https://www.gmail.com/"><i class="fas fa-envelope fa-2x"></i></a>',m(o,"class","mt-4 flex flex-row justify-center")},m(t,e){s(t,o,e)},p:t,i:t,o:t,d(t){t&&a(o)}}}function G(t){let e=new Date;return e.toTimeString().split(" ")[0],setInterval((()=>{e=new Date,e.toTimeString().split(" ")[0]}),1e3),[]}class q extends W{constructor(t){super(),I(this,t,G,V,l,{})}}function J(e){let o,n,r,l;return{c(){o=i("div"),n=i("p"),r=u(e[0]),l=u(e[1]),m(n,"class","text-2xl text-white p-2"),m(o,"class","ml-2")},m(t,e){s(t,o,e),c(o,n),c(n,r),c(n,l)},p(t,[e]){1&e&&h(r,t[0]),2&e&&h(l,t[1])},i:t,o:t,d(t){t&&a(o)}}}function Y(t,e,o){let n=-1,r="cel",l="°C";const c=(t,e)=>{console.log("Got Values: "+t+" "+e);let c="https://api.open-meteo.com/v1/forecast?latitude="+t+"&longitude="+e+"&current_weather=true";console.log("Got Url: "+c),chrome.storage.local.get(["lastFetchT"],(function(t){if(t.lastFetchT){let e=t.lastFetchT,a=new Date,i=s(e,a.getTime());console.log(`Last Fetch was ${i} minute(s) ago`),i>60?fetch(c).then((t=>t.json())).then((t=>{let e=new Date;console.log("Requesting Data from API"),o(0,n=t.current_weather.temperature),chrome.storage.local.set({lastFetchT:e.getTime()}),chrome.storage.local.set({lastFetchW:n})})):(console.log("Didnt fetch"),chrome.storage.local.get(["lastFetchW"],(function(t){t.lastFetchW?(console.log("Recent weather data Found"),o(0,n=t.lastFetchW),chrome.storage.local.get(["weatherF"],(function(t){t.weatherF?(console.log("FOUND WEATHER FORMAT VALUE"),r=t.weatherF,"far"==r&&(o(0,n=9*n/5+32),o(0,n=n.toFixed(2)),o(1,l="°F"))):(console.log("NO WEATHER FORMAT VALUE FOUND , SETTING FORMAT"),chrome.storage.local.set({weatherF:"cel"}),window.location.reload(!0))}))):(console.log("No Recent Weather data,Fetching..."),fetch(c).then((t=>t.json())).then((t=>{let e=new Date;console.log("API CALLED"),o(0,n=t.current_weather.temperature),chrome.storage.local.set({lastFetchT:e.getTime()}),chrome.storage.local.set({lastFetchW:n})})))})))}else{let t=new Date;console.log("No previous fetch time found , adding one"),chrome.storage.local.set({lastFetchT:t.getTime()}),fetch(c).then((t=>t.json())).then((t=>{console.log("Requesting Data from API"),o(0,n=t.current_weather.temperature),chrome.storage.local.set({lastFetchW:n})}))}}))},s=(t,e)=>{var o=(t-e)/1e3;return o/=60,Math.abs(Math.round(o))},a=t=>{console.log("Getting Location"),chrome.storage.local.set({latitudePce:t.coords.latitude,longitudePce:t.coords.longitude},(function(){let e=t.coords.latitude,o=t.coords.longitude;c(e,o)}))},i=t=>{console.log(t)};return chrome.storage.local.get(["latitudePce","longitudePce"],(function(t){t.latitudePce&&t.longitudePce?(console.log("Found Location Values"),chrome.storage.local.get(["latitudePce","longitudePce"],(function(t){let e=t.latitudePce,o=t.longitudePce;c(e,o)}))):(console.log("Missing Location Values"),navigator.geolocation.getCurrentPosition(a,i))})),[n,l]}class z extends W{constructor(t){super(),I(this,t,Y,J,l,{})}}function K(e){let o,r,l,u,h,g,p,w,b,$,y,v,F,C,T,k,_,E,A,D,j,P,S,M,L,I,W,O,N,R;return{c(){o=i("div"),r=i("div"),l=i("p"),l.textContent="Colour",u=d(),h=i("input"),g=d(),p=i("button"),p.textContent="Apply",w=d(),b=i("div"),$=i("p"),$.textContent="Font",y=d(),v=i("button"),v.textContent="Share Tech Mono",F=d(),C=i("button"),C.textContent="Roboto Mono",T=d(),k=i("div"),_=i("p"),_.textContent="Time",E=d(),A=i("button"),A.textContent="24 Hour",D=d(),j=i("button"),j.textContent="12 Hour",P=d(),S=i("div"),M=i("p"),M.textContent="Weather",L=d(),I=i("button"),I.textContent="Celsius",W=d(),O=i("button"),O.textContent="Farheneit",m(l,"class","mt-1 text-white text-center mb-1 underline"),m(h,"class","mt-2 mx-2 self-center"),x(h,"padding","0"),x(h,"background","none"),m(h,"type","color"),m(h,"id","bgColor-1"),m(p,"class","uppercase mx-2 mt-2 p-1 mb-1 w-12 self-center text-xs border border-white hover:font-bold rounded-sm text-white"),m(r,"class","mb-1 flex flex-col justify-center "),m($,"class","mt-1 text-white text-center mb-1 underline"),m(v,"class","uppercase mt-2 mx-2 p-1 text-xs border border-white hover:font-bold rounded-sm text-white"),m(C,"class","uppercase mx-2 mt-2 p-1 mb-2 text-xs border border-white hover:font-bold rounded-sm text-white"),m(b,"class","ml-8 mt-1 mb-1 flex flex-col justify-center "),m(_,"class","mt-1 text-white text-center mb-1 underline"),m(A,"class","uppercase mt-2 mx-2 p-1 text-xs border border-white hover:font-bold rounded-sm text-white"),m(j,"class","uppercase mx-2 mt-2 p-1 mb-2 text-xs border border-white hover:font-bold rounded-sm text-white"),m(k,"class","ml-8 mt-1 mb-1 flex flex-col justify-center "),m(M,"class","mt-1 text-white text-center mb-1 underline"),m(I,"class","uppercase mt-2 mx-2 p-1 text-xs border border-white hover:font-bold rounded-sm text-white"),m(O,"class","uppercase mx-2 mt-2 p-1 mb-2 text-xs border border-white hover:font-bold rounded-sm text-white"),m(S,"class","ml-8 mt-1 mb-1 flex flex-col justify-center "),m(o,"class","uppercase mt-4 flex flex-row justify-center")},m(t,n){s(t,o,n),c(o,r),c(r,l),c(r,u),c(r,h),c(r,g),c(r,p),c(o,w),c(o,b),c(b,$),c(b,y),c(b,v),c(b,F),c(b,C),c(o,T),c(o,k),c(k,_),c(k,E),c(k,A),c(k,D),c(k,j),c(o,P),c(o,S),c(S,M),c(S,L),c(S,I),c(S,W),c(S,O),N||(R=[f(p,"click",e[7]),f(v,"click",e[8]),f(C,"click",e[9]),f(A,"click",e[10]),f(j,"click",e[11]),f(I,"click",e[12]),f(O,"click",e[13])],N=!0)},p:t,i:t,o:t,d(t){t&&a(o),N=!1,n(R)}}}function Q(t){const e=()=>{chrome.storage.local.set({bgcolor1:document.getElementById("bgColor-1").value},(function(){window.location.reload(!0)}))},o=()=>{chrome.storage.local.set({font:"font-customfont"},(function(){window.location.reload(!0)}))},n=()=>{chrome.storage.local.set({font:"font-customfont2"},(function(){window.location.reload(!0)}))},r=()=>{chrome.storage.local.set({timeF:"24h"},(function(){window.location.reload(!0)}))},l=()=>{chrome.storage.local.set({timeF:"12h"},(function(){window.location.reload(!0)}))},c=()=>{chrome.storage.local.set({weatherF:"cel"},(function(){window.location.reload(!0)}))},s=()=>{chrome.storage.local.set({weatherF:"far"},(function(){window.location.reload(!0)}))};return[e,o,n,r,l,c,s,()=>e(),()=>o(),()=>n(),()=>r(),()=>l(),()=>c(),()=>s()]}class X extends W{constructor(t){super(),I(this,t,Q,K,l,{})}}function Z(t){let e,o,n,r,l,u,h,g,p,w,b,$,y,v,F,C,T,k,_,E,A,L,I,W,O,N,U,B,V,G,J,Y,K,Q,Z,tt,et;return n=new R({}),u=new H({}),w=new z({}),$=new q({}),K=new X({}),{c(){e=i("main"),o=i("div"),P(n.$$.fragment),r=d(),l=i("div"),P(u.$$.fragment),h=d(),g=i("p"),g.textContent="|",p=d(),P(w.$$.fragment),b=d(),P($.$$.fragment),y=d(),v=i("div"),F=i("div"),C=i("i"),T=d(),k=i("button"),k.textContent="Extension Settings",_=d(),E=i("p"),E.textContent="|",A=d(),L=i("i"),I=d(),W=i("a"),W.textContent="Weather data by Open-Meteo.com",O=d(),N=i("p"),N.textContent="|",U=d(),B=i("i"),V=d(),G=i("a"),G.textContent="Icons from font awesome",J=d(),Y=i("div"),P(K.$$.fragment),m(g,"class","text-xl ml-2 text-white"),m(l,"class","mt-4 flex flex-row justify-center items-center"),m(o,"class","m-auto flex flex-col justify-center items-center"),m(C,"class","fas fa-cogs fa-lg text-white "),m(k,"class","ml-2 rounded-md hover:font-bold uppercase text-white"),m(E,"class","text-xs ml-2 text-white"),m(L,"class","ml-2 fas fa-cloud-sun-rain fa-lg text-white"),m(W,"class","rounded-md hover:font-bold ml-2 text-white"),m(W,"href","https://open-meteo.com/"),m(N,"class","text-xs ml-2 text-white"),m(B,"class","ml-2 fas fa-icons fa-lg text-white"),m(G,"class","rounded-md hover:font-bold ml-2 text-white"),m(G,"href","https://fontawesome.com/"),m(F,"class","mt-1 uppercase flex flex-row justify-center items-center"),m(Y,"id","set"),x(Y,"visibility","hidden"),m(v,"class","fixed"),m(e,"id","maindiv"),m(e,"class",Q=t[1]+" font-thin flex h-screen justify-center svelte-1mfbc1r"),x(e,"background-color",t[0])},m(a,i){s(a,e,i),c(e,o),S(n,o,null),c(o,r),c(o,l),S(u,l,null),c(l,h),c(l,g),c(l,p),S(w,l,null),c(o,b),S($,o,null),c(e,y),c(e,v),c(v,F),c(F,C),c(F,T),c(F,k),c(F,_),c(F,E),c(F,A),c(F,L),c(F,I),c(F,W),c(F,O),c(F,N),c(F,U),c(F,B),c(F,V),c(F,G),c(v,J),c(v,Y),S(K,Y,null),Z=!0,tt||(et=f(k,"click",t[3]),tt=!0)},p(t,[o]){(!Z||2&o&&Q!==(Q=t[1]+" font-thin flex h-screen justify-center svelte-1mfbc1r"))&&m(e,"class",Q),(!Z||1&o)&&x(e,"background-color",t[0])},i(t){Z||(D(n.$$.fragment,t),D(u.$$.fragment,t),D(w.$$.fragment,t),D($.$$.fragment,t),D(K.$$.fragment,t),Z=!0)},o(t){j(n.$$.fragment,t),j(u.$$.fragment,t),j(w.$$.fragment,t),j($.$$.fragment,t),j(K.$$.fragment,t),Z=!1},d(t){t&&a(e),M(n),M(u),M(w),M($),M(K),tt=!1,et()}}}function tt(t,e,o){let n,r="#292524";chrome.storage.local.get(["bgcolor1"],(function(t){t.bgcolor1?(o(0,r=t.bgcolor1),document.getElementById("maindiv").style.backgroundColor=r):(chrome.storage.local.set({bgcolor1:"#292524"}),window.location.reload(!0))})),chrome.storage.local.get(["font"],(function(t){t.font?o(1,n=t.font):(chrome.storage.local.set({font:"font-customfont"}),window.location.reload(!0))}));const l=()=>{"hidden"===document.getElementById("set").style.visibility?document.getElementById("set").style.visibility="visible":document.getElementById("set").style.visibility="hidden"};return[r,n,l,()=>l()]}return new class extends W{constructor(t){super(),I(this,t,tt,Z,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
