(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);i&&o[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",u="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",y={};y[$]=v;var g=function(t){return t instanceof w},b=function t(e,n,i){var s;if(!e)return $;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;y[a]=e,s=a}return!i&&s&&($=s),s||!i&&$},E=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},M=_;M.l=b,M.i=g,M.w=function(t,e){return E(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function v(t){this.$L=b(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return M},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(t,e){var n=E(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return E(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<E(t)},m.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,c=!!M.u(e)||e,f=M.p(t),p=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},h=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,_=this.$D,$="set"+(this.$u?"UTC":"");switch(f){case u:return c?p(1,0):p(31,11);case l:return c?p(1,m):p(0,m+1);case a:var y=this.$locale().weekStart||0,g=(v<y?v+7:v)-y;return p(c?_-g:_+(6-g),m);case o:case d:return h($+"Hours",0);case r:return h($+"Minutes",1);case s:return h($+"Seconds",2);case i:return h($+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var a,c=M.p(t),f="set"+(this.$u?"UTC":""),p=(a={},a[o]=f+"Date",a[d]=f+"Date",a[l]=f+"Month",a[u]=f+"FullYear",a[r]=f+"Hours",a[s]=f+"Minutes",a[i]=f+"Seconds",a[n]=f+"Milliseconds",a)[c],h=c===o?this.$D+(e-this.$W):e;if(c===l||c===u){var v=this.clone().set(d,1);v.$d[p](h),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[M.p(t)]()},m.add=function(n,c){var d,f=this;n=Number(n);var p=M.p(c),h=function(t){var e=E(f);return M.w(e.date(e.date()+Math.round(t*n)),f)};if(p===l)return this.set(l,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===o)return h(1);if(p===a)return h(7);var v=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[p]||1,m=this.$d.getTime()+n*v;return M.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,u=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return M.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:u(n.monthsShort,a,c,3),MMMM:u(c,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:d(1),hh:d(2),a:p(r,o,!0),A:p(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(h,(function(t,e){return e||v[t]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,f){var p,h=M.p(d),v=E(n),m=(v.utcOffset()-this.utcOffset())*t,_=this-v,$=M.m(this,v);return $=(p={},p[u]=$/12,p[l]=$,p[c]=$/3,p[a]=(_-m)/6048e5,p[o]=(_-m)/864e5,p[r]=_/e,p[s]=_/t,p[i]=_/1e3,p)[h]||_,f?$:M.a($)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return y[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},m.clone=function(){return M.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),C=w.prototype;return E.prototype=C,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",u],["$D",d]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),E.extend=function(t,e){return t.$i||(t(e,w,E),t.$i=!0),E},E.locale=b,E.isDayjs=g,E.unix=function(t){return E(1e3*t)},E.en=y[$],E.Ls=y,E.p={},E}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var f=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=s(p,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:h,references:1})}o.push(d)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),c=n(216),u=n.n(c),d=n(589),f=n.n(d),p=n(10),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=o().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=u(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const v="shake";class m{#t=null;constructor(){if(new.target===m)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(v),setTimeout((()=>{this.element.classList.remove(v),t?.()}),600)}}const _={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function $(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_.BEFOREEND;if(!(t instanceof m))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function y(t,e){if(!(t instanceof m&&e instanceof m))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}const g={EVERYTHING:"everything",FUTURE:"future",PRESENT:"present",PAST:"past"},b={DAY:"day",EVENT:"event",TIME:"time",PRICE:"price",OFFERS:"offers"},E={TAXI:"taxi",BUS:"bus",TRAIN:"train",SHIP:"ship",DRIVE:"drive",FLIGHT:"flight",CHECK_IN:"check-in",SIGHTSEEING:"sightseeing",RESTAURANT:"restaurant"};class M extends m{get template(){return function(){return`<form class="trip-events__trip-sort trip-sort" action="#" method="get">\n    ${(t=>{let e="";return Object.values(b).forEach((n=>{e+=function(t){return`<div class="trip-sort__item  trip-sort__item--${t}">\n    <input id="sort-${t}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${t}" ${arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"checked":""}>\n    <label class="trip-sort__btn" for="sort-${t}">${t}</label>\n  </div>`}(n,n===t)})),e})(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"day")}\n  </form>`}()}}class w extends m{get template(){return'<ul class="trip-events__list"></ul>'}}var C=n(484),A=n.n(C);const S=(t,e)=>(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t),D=t=>t[S(0,t.length-1)],x=t=>t?A()(t).format("MMM D"):"",T=t=>t?A()(t).format("HH:mm"):"",k=t=>t?A()(t).format("DD/MM/YY HH:mm"):"",O=t=>t[0].toUpperCase()+t.slice(1);class I extends m{#e=null;#n=null;#i=null;#s=null;constructor(t){let{point:e,destinations:n,offers:i,onEditClick:s}=t;super(),this.#e=e,this.#n=n,this.#i=i,this.#s=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r)}get template(){return((t,e,n)=>{const{basePrice:i,dateFrom:s,dateTo:r,destination:o,isFavorite:a,offers:l,type:c}=t,u=e.filter((t=>t.id===o))[0].name,d=n.filter((t=>t.type===c))[0].offers;return`<li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="${s}">${x(s)}</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/${c}.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${O(c)} ${u}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${s}">${T(s)}</time>\n          &mdash;\n          <time class="event__end-time" datetime="${r}">${T(r)}</time>\n        </p>\n        <p class="event__duration">${((t,e)=>{if(!e||!t)return"";t=A()(t);const n=(e=A()(e)).diff(t,"day"),i=e.diff(t,"hour"),s=e.diff(t,"minute");return 0===i?`${s}M`:i>0&&i<24?`${i}H ${s%60}M`:i>=24?`${n}D ${i%24}H ${s%60}M`:""})(s,r)}</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${i}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      <ul class="event__selected-offers">\n        ${((t,e)=>{let n="";return t.forEach((t=>{t=e.filter((e=>e.id===t))[0],n+=`\n      <li class="event__offer">\n        <span class="event__offer-title">${t.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n      </li>`})),n})(l,d)}\n      </ul>\n      <button class="event__favorite-btn ${a?"event__favorite-btn--active":""}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>`})(this.#e,this.#n,this.#i)}#r=t=>{t.preventDefault(),this.#s()}}class F extends m{#e=null;#n=null;#i=null;#o=null;#a=null;constructor(t){let{point:e,destinations:n,offers:i,onFormSubmit:s,onFormClose:r}=t;super(),this.#e=e,this.#n=n,this.#i=i,this.#o=s,this.element.querySelector("form").addEventListener("submit",this.#l),this.#a=r,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#c)}get template(){return((t,e,n)=>{const{basePrice:i,dateFrom:s,dateTo:r,destination:o,offers:a,type:l}=t,c=e.filter((t=>t.id===o))[0],u=n.filter((t=>t.type===l))[0].offers;return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${l}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${(t=>{let e="";return Object.values(E).forEach((n=>{e+=function(t){return`<div class="event__type-item">\n    <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}" ${arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"checked":""}>\n    <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${t[0].toUpperCase()+t.slice(1)}</label>\n  </div>`}(n,n===t)})),e})(l)}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${O(l)}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${c.name}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${(t=>{let e="";return t.forEach((t=>{e+=`<option value="${t.name}"></option>`})),e})(e)}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${k(s)}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${k(r)}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n              ${((t,e)=>{let n="";return e.forEach((e=>{n+=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return`<div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden"\n      id="event-offer-${t.title}-${t.id}"\n      type="checkbox"\n      name="event-offer-${t.title}"\n      ${e?"checked":""}\n    >\n    <label class="event__offer-label" for="event-offer-${t.title}-${t.id}">\n      <span class="event__offer-title">${t.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t.price}</span>\n    </label>\n  </div>`}(e,t.includes(e.id))})),n})(a,u)}\n            </div>\n          </section>\n\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${c.description}</p>\n            ${(t=>{const e=t.pictures;if(!e||0===e.length)return"";let n='<div class="event__photos-container"><div class="event__photos-tape">';return e.forEach((t=>{n+=`<img class="event__photo" src="${t.src}" alt="${t.description}">`})),n+="</div></div>",n})(c)}\n\n          </section>\n        </section>\n      </form>\n    </li>`})(this.#e,this.#n,this.#i)}#l=t=>{t.preventDefault(),this.#o()};#c=t=>{t.preventDefault(),this.#a()}}const H=["Berlin","Paris","London","Barcelona","Amsterdam"],L=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam erat volutpat.","Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui."],B=[],N=[],P=S(2,10),R=[];class Y extends m{#u=null;#n=null;#i=null;constructor(t){let{points:e,destinations:n,offers:i}=t;super(),this.#u=e,this.#n=n,this.#i=i}get template(){return((t,e,n)=>{const i=((t,e)=>{const n=[...new Set(t.map((t=>t.destination)))],i=e.filter((e=>e.id===t[0].destination))[0].name,s=e.filter((e=>e.id===t[t.length-1].destination))[0].name;return n.length>=3?`${i} &mdash; ... &mdash; ${s}`:2===n.length&&i===s?`${i} &mdash; ${e.filter((t=>t.id===n[1]))[0].name} &mdash; ${s}`:2===n.length&&i!==s||1===n.length?`${i} &mdash; ${s}`:""})(t,e),s=(t=>{const e=A()(t[0].dateFrom),n=A()(t[t.length-1].dateTo);return e.month()===n.month()?`${x(e)}&nbsp;&mdash;&nbsp;${n.format("D")}`:`${x(e)}&nbsp;&mdash;&nbsp;${x(n)}`})(t),r=((t,e)=>{let n=0;return t.forEach((t=>{const i=e.filter((e=>e.type===t.type))[0].offers.filter((e=>t.offers.includes(e.id)));n+=i.reduce(((t,e)=>t+e.price),0)+t.basePrice})),n})(t,n);return`<section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">${i}</h1>\n\n      <p class="trip-info__dates">${s}</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">${r}</span>\n    </p>\n  </section>`})(this.#u,this.#n,this.#i)}}const j=document.querySelector(".trip-controls__filters"),q=document.querySelector(".trip-events"),U=document.querySelector(".trip-main"),W=new class{#u=(()=>(0===R.length&&(()=>{const t=Object.values(E),e=S(1,12);let n=S(1,15);for(let i=0;i<P;i++){const s={id:`point-${i}`,basePrice:S(50,3e3),dateFrom:`2019-${e}-${n}T${S(0,11)}:${S(10,59)}`,dateTo:`2019-${e}-${n++}T${S(12,23)}:${S(10,59)}`,destination:`destination-${S(0,4)}`,isFavorite:S(1,10)%2==0,offers:[],type:D(t)};for(let t=0;t<S(0,4);t++)s.offers.push(`offer-${t}`);R.push(s)}})(),R))();#n=(()=>(0===B.length&&H.forEach(((t,e)=>{const n={id:`destination-${e}`,description:D(L),name:t,pictures:[]};for(let t=0;t<S(0,8);t++)n.pictures.push({src:`https://loremflickr.com/248/152?random=${S(1,1e4)}`,description:D(L)});B.push(n)})),B))();#i=(()=>(0===N.length&&Object.values(E).forEach((t=>{const e={type:t,offers:[]};for(let n=0;n<5;n++)e.offers.push({id:`offer-${n}`,title:`${t} upgrade`,price:S(50,1e3)});N.push(e)})),N))();get points(){return this.#u}get destinations(){return this.#n}get offers(){return this.#i}},Z=new class{#d=null;#f=null;#u=[];#n=[];#i=[];constructor(t){let{tripInfoContainer:e,pointsModel:n}=t;this.#d=e,this.#f=n}init(){this.#u=[...this.#f.points],this.#n=[...this.#f.destinations],this.#i=[...this.#f.offers],$(new Y({points:this.#u,destinations:this.#n,offers:this.#i}),this.#d,_.AFTERBEGIN)}}({tripInfoContainer:U,pointsModel:W}),G=new class{#p=new w;#h=null;#f=null;#u=[];#n=[];#i=[];constructor(t){let{pointsContainer:e,pointsModel:n}=t;this.#h=e,this.#f=n}init(){this.#u=[...this.#f.points],this.#n=[...this.#f.destinations],this.#i=[...this.#f.offers],$(new M,this.#h),$(this.#p,this.#h);for(let t=0;t<this.#u.length;t++)this.#v({point:this.#u[t],destinations:this.#n,offers:this.#i})}#v(t){let{point:e,destinations:n,offers:i}=t;const s=t=>{"Escape"===t.key&&(t.preventDefault(),a(),document.removeEventListener("keydown",s))},r=new I({point:e,destinations:n,offers:i,onEditClick:()=>{y(o,r),document.addEventListener("keydown",s)}}),o=new F({point:e,destinations:n,offers:i,onFormSubmit:()=>{s()},onFormClose:()=>{a(),document.removeEventListener("keydown",s)}});function a(){y(r,o)}$(r,this.#p.element)}#m=()=>{}}({pointsContainer:q,pointsModel:W});$(new class extends m{get template(){return function(){return`<form class="trip-filters" action="#" method="get">\n    ${(t=>{let e="";return Object.values(g).forEach((n=>{e+=function(t){return`<div class="trip-filters__filter">\n    <input id="filter-${t}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${t}" ${arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"checked":""}>\n    <label class="trip-filters__filter-label" for="filter-${t}">${t}</label>\n  </div>`}(n,n===t)})),e})(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"everything")}\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>`}()}},j),Z.init(),G.init()})()})();
//# sourceMappingURL=bundle.5c3b6178ce0e1bc493fc.js.map