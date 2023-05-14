(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",u="quarter",c="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},_=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:c,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},$="en",g={};g[$]=v;var y=function(e){return e instanceof D},b=function e(t,n,i){var s;if(!t)return $;if("string"==typeof t){var r=t.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;g[o]=t,s=o}return!i&&s&&($=s),s||!i&&$},E=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},M=m;M.l=b,M.i=y,M.w=function(e,t){return E(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function v(e){this.$L=b(e.locale,null,!0),this.parse(e)}var _=v.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return M},_.isValid=function(){return!(this.$d.toString()===f)},_.isSame=function(e,t){var n=E(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return E(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<E(e)},_.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,u=!!M.u(t)||t,f=M.p(e),p=function(e,t){var i=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?i:i.endOf(a)},h=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,_=this.$M,m=this.$D,$="set"+(this.$u?"UTC":"");switch(f){case c:return u?p(1,0):p(31,11);case l:return u?p(1,_):p(0,_+1);case o:var g=this.$locale().weekStart||0,y=(v<g?v+7:v)-g;return p(u?m-y:m+(6-y),_);case a:case d:return h($+"Hours",0);case r:return h($+"Minutes",1);case s:return h($+"Seconds",2);case i:return h($+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var o,u=M.p(e),f="set"+(this.$u?"UTC":""),p=(o={},o[a]=f+"Date",o[d]=f+"Date",o[l]=f+"Month",o[c]=f+"FullYear",o[r]=f+"Hours",o[s]=f+"Minutes",o[i]=f+"Seconds",o[n]=f+"Milliseconds",o)[u],h=u===a?this.$D+(t-this.$W):t;if(u===l||u===c){var v=this.clone().set(d,1);v.$d[p](h),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[M.p(e)]()},_.add=function(n,u){var d,f=this;n=Number(n);var p=M.p(u),h=function(e){var t=E(f);return M.w(t.date(t.date()+Math.round(e*n)),f)};if(p===l)return this.set(l,this.$M+n);if(p===c)return this.set(c,this.$y+n);if(p===a)return h(1);if(p===o)return h(7);var v=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[p]||1,_=this.$d.getTime()+n*v;return M.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},d=function(e){return M.s(r%12||12,e,"0")},p=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:c(n.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:d(1),hh:d(2),a:p(r,a,!0),A:p(r,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(h,(function(e,t){return t||v[e]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,d,f){var p,h=M.p(d),v=E(n),_=(v.utcOffset()-this.utcOffset())*e,m=this-v,$=M.m(this,v);return $=(p={},p[c]=$/12,p[l]=$,p[u]=$/3,p[o]=(m-_)/6048e5,p[a]=(m-_)/864e5,p[r]=m/t,p[s]=m/e,p[i]=m/1e3,p)[h]||m,f?$:M.a($)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return g[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=b(e,t,!0);return i&&(n.$L=i),n},_.clone=function(){return M.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},v}(),T=D.prototype;return E.prototype=T,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",c],["$D",d]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),E.extend=function(e,t){return e.$i||(e(t,D,E),e.$i=!0),E},E.locale=b,E.isDayjs=y,E.unix=function(e){return E(1e3*e)},E.en=g[$],E.Ls=g,E.p={},E}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function i(t,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.BEFOREEND;n.insertAdjacentElement(i,t.getElement())}const s={EVERYTHING:"everything",FUTURE:"future",PRESENT:"present",PAST:"past"},r={DAY:"day",EVENT:"event",TIME:"time",PRICE:"price",OFFERS:"offers"},a={TAXI:"taxi",BUS:"bus",TRAIN:"train",SHIP:"ship",DRIVE:"drive",FLIGHT:"flight",CHECK_IN:"check-in",SIGHTSEEING:"sightseeing",RESTAURANT:"restaurant"};class o{getTemplate(){return function(){return`<form class="trip-events__trip-sort trip-sort" action="#" method="get">\n    ${(e=>{let t="";return Object.values(r).forEach((n=>{t+=function(e){return`<div class="trip-sort__item  trip-sort__item--${e}">\n    <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}" ${arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"checked":""}>\n    <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n  </div>`}(n,n===e)})),t})(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"day")}\n  </form>`}()}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class l{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}var u=n(484),c=n.n(u);const d=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),f=e=>e[d(0,e.length-1)],p=e=>e?c()(e).format("MMM D"):"",h=e=>e?c()(e).format("HH:mm"):"",v=e=>e?c()(e).format("DD/MM/YY HH:mm"):"",_=e=>e[0].toUpperCase()+e.slice(1);class m{constructor(e){let{point:t,destinations:n,offers:i}=e;this.point=t,this.destinations=n,this.offers=i}getTemplate(){return((e,t,n)=>{const{basePrice:i,dateFrom:s,dateTo:r,destination:a,isFavorite:o,offers:l,type:u}=e,d=t.filter((e=>e.id===a))[0].name,f=n.filter((e=>e.type===u))[0].offers;return`<li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="${s}">${p(s)}</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/${u}.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${_(u)} ${d}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${s}">${h(s)}</time>\n          &mdash;\n          <time class="event__end-time" datetime="${r}">${h(r)}</time>\n        </p>\n        <p class="event__duration">${((e,t)=>{if(!t||!e)return"";e=c()(e);const n=(t=c()(t)).diff(e,"day"),i=t.diff(e,"hour"),s=t.diff(e,"minute");return 0===i?`${s}M`:i>0&&i<24?`${i}H ${s%60}M`:i>=24?`${n}D ${i%24}H ${s%60}M`:""})(s,r)}</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${i}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      <ul class="event__selected-offers">\n        ${((e,t)=>{let n="";return e.forEach((e=>{e=t.filter((t=>t.id===e))[0],n+=`\n      <li class="event__offer">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </li>`})),n})(l,f)}\n      </ul>\n      <button class="event__favorite-btn ${o?"event__favorite-btn--active":""}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>`})(this.point,this.destinations,this.offers)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class ${constructor(e){let{destinations:t,offers:n}=e;this.destinations=t,this.offers=n}getTemplate(){return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.DRIVE;return`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/${n}.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n              ${(e=>{let t="";return Object.values(a).forEach((n=>{t+=function(e){return`<div class="event__type-item">\n    <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}" ${arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"checked":""}>\n    <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${e[0].toUpperCase()+e.slice(1)}</label>\n  </div>`}(n,n===e)})),t})(n)}\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${_(n)}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">\n          <datalist id="destination-list-1">\n            ${(e=>{let t="";return e.forEach((e=>{t+=`<option value="${e.name}"></option>`})),t})(e)}\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Cancel</button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n          <div class="event__available-offers">\n            ${((e,t)=>{const n=e.filter((e=>e.type===t))[0].offers;let i="";return n.forEach((e=>{i+=(e=>`<div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e.title}-${e.id}" type="checkbox" name="event-offer-${e.title}">\n    <label class="event__offer-label" for="event-offer-${e.title}-${e.id}">\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n    </label>\n  </div>`)(e)})),i})(t,n)}\n          </div>\n        </section>\n      </section>\n    </form>\n  </li>`}(this.destinations,this.offers)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class g{constructor(e){let{point:t,destinations:n,offers:i}=e;this.point=t,this.destinations=n,this.offers=i}getTemplate(){return((e,t,n)=>{const{basePrice:i,dateFrom:s,dateTo:r,destination:o,offers:l,type:u}=e,c=t.filter((e=>e.id===o))[0],d=n.filter((e=>e.type===u))[0].offers;return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${u}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${(e=>{let t="";return Object.values(a).forEach((n=>{t+=function(e){return`<div class="event__type-item">\n    <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}" ${arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"checked":""}>\n    <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${e[0].toUpperCase()+e.slice(1)}</label>\n  </div>`}(n,n===e)})),t})(u)}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${_(u)}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${c.name}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${(e=>{let t="";return e.forEach((e=>{t+=`<option value="${e.name}"></option>`})),t})(t)}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${v(s)}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${v(r)}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n              ${((e,t)=>{let n="";return t.forEach((t=>{n+=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return`<div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden"\n      id="event-offer-${e.title}-${e.id}"\n      type="checkbox"\n      name="event-offer-${e.title}"\n      ${t?"checked":""}\n    >\n    <label class="event__offer-label" for="event-offer-${e.title}-${e.id}">\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n    </label>\n  </div>`}(t,e.includes(t.id))})),n})(l,d)}\n            </div>\n          </section>\n\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${c.description}</p>\n            ${(e=>{const t=e.pictures;if(!t||0===t.length)return"";let n='<div class="event__photos-container"><div class="event__photos-tape">';return t.forEach((e=>{n+=`<img class="event__photo" src="${e.src}" alt="${e.description}">`})),n+="</div></div>",n})(c)}\n\n          </section>\n        </section>\n      </form>\n    </li>`})(this.point,this.destinations,this.offers)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const y=["Berlin","Paris","London","Barcelona","Amsterdam"],b=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam erat volutpat.","Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui."],E=[],M=[],D=d(2,10),T=[];class S{constructor(e){let{points:t,destinations:n,offers:i}=e;this.points=t,this.destinations=n,this.offers=i}getTemplate(){return((e,t,n)=>{const i=((e,t)=>{const n=[...new Set(e.map((e=>e.destination)))],i=t.filter((t=>t.id===e[0].destination))[0].name,s=t.filter((t=>t.id===e[e.length-1].destination))[0].name;return n.length>=3?`${i} &mdash; ... &mdash; ${s}`:2===n.length&&i===s?`${i} &mdash; ${t.filter((e=>e.id===n[1]))[0].name} &mdash; ${s}`:2===n.length&&i!==s||1===n.length?`${i} &mdash; ${s}`:""})(e,t),s=(e=>{const t=c()(e[0].dateFrom),n=c()(e[e.length-1].dateTo);return t.month()===n.month()?`${p(t)}&nbsp;&mdash;&nbsp;${n.format("D")}`:`${p(t)}&nbsp;&mdash;&nbsp;${p(n)}`})(e),r=((e,t)=>{let n=0;return e.forEach((e=>{const i=t.filter((t=>t.type===e.type))[0].offers.filter((t=>e.offers.includes(t.id)));n+=i.reduce(((e,t)=>e+t.price),0)+e.basePrice})),n})(e,n);return`<section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">${i}</h1>\n\n      <p class="trip-info__dates">${s}</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">${r}</span>\n    </p>\n  </section>`})(this.points,this.destinations,this.offers)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const w=document.querySelector(".trip-controls__filters"),O=document.querySelector(".trip-events"),C=document.querySelector(".trip-main"),x=new class{points=(()=>(0===T.length&&(()=>{const e=Object.values(a),t=d(1,12);let n=d(1,15);for(let i=0;i<D;i++){const s={id:`point-${i}`,basePrice:d(50,3e3),dateFrom:`2019-${t}-${n}T${d(0,11)}:${d(10,59)}`,dateTo:`2019-${t}-${n++}T${d(12,23)}:${d(10,59)}`,destination:`destination-${d(0,4)}`,isFavorite:d(1,10)%2==0,offers:[],type:f(e)};for(let e=0;e<d(0,4);e++)s.offers.push(`offer-${e}`);T.push(s)}})(),T))();destinations=(()=>(0===E.length&&y.forEach(((e,t)=>{const n={id:`destination-${t}`,description:f(b),name:e,pictures:[]};for(let e=0;e<d(0,8);e++)n.pictures.push({src:`https://loremflickr.com/248/152?random=${d(1,1e4)}`,description:f(b)});E.push(n)})),E))();offers=(()=>(0===M.length&&Object.values(a).forEach((e=>{const t={type:e,offers:[]};for(let n=0;n<5;n++)t.offers.push({id:`offer-${n}`,title:`${e} upgrade`,price:d(50,1e3)});M.push(t)})),M))();getPoints(){return this.points}getDestinations(){return this.destinations}getOffers(){return this.offers}},I=new class{constructor(e){let{tripInfoContainer:t,pointsModel:n}=e;this.tripInfoContainer=t,this.pointsModel=n}init(){this.points=[...this.pointsModel.getPoints()],this.destinations=[...this.pointsModel.getDestinations()],this.offers=[...this.pointsModel.getOffers()],i(new S({points:this.points,destinations:this.destinations,offers:this.offers}),this.tripInfoContainer,e.AFTERBEGIN)}}({tripInfoContainer:C,pointsModel:x}),H=new class{pointListComponent=new l;constructor(e){let{pointsContainer:t,pointsModel:n}=e;this.pointsContainer=t,this.pointsModel=n}init(){this.points=[...this.pointsModel.getPoints()],this.destinations=[...this.pointsModel.getDestinations()],this.offers=[...this.pointsModel.getOffers()],i(new o,this.pointsContainer),i(this.pointListComponent,this.pointsContainer),i(new $({destinations:this.destinations,offers:this.offers}),this.pointListComponent.getElement()),i(new g({point:this.points[0],destinations:this.destinations,offers:this.offers}),this.pointListComponent.getElement());for(let e=1;e<this.points.length;e++)i(new m({point:this.points[e],destinations:this.destinations,offers:this.offers}),this.pointListComponent.getElement())}}({pointsContainer:O,pointsModel:x});i(new class{getTemplate(){return function(){return`<form class="trip-filters" action="#" method="get">\n    ${(e=>{let t="";return Object.values(s).forEach((n=>{t+=function(e){return`<div class="trip-filters__filter">\n    <input id="filter-${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e}" ${arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"checked":""}>\n    <label class="trip-filters__filter-label" for="filter-${e}">${e}</label>\n  </div>`}(n,n===e)})),t})(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"everything")}\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>`}()}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},w),I.init(),H.init()})()})();
//# sourceMappingURL=bundle.cce5ce369f6d87973c7b.js.map