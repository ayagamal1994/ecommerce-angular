import{a as z2,b as A3,c as T3,k as A2,l as T2,m as E3,n as P3}from"./chunk-22KOPLQH.js";import{Aa as V,Ba as C3,C as s3,Fa as f2,Ga as h3,Hb as i1,I as a3,Ib as v3,Kb as k2,L as w,Lb as A,N as x,Nb as k3,O as i2,Oa as t1,Pa as m2,Q as T,Qa as g3,R as d,S,T as e1,Ta as x3,U as n3,V as o3,Va as Q,W as t3,_ as v,a as G,aa as s1,ab as N3,b as c1,f as Q1,ga as i3,l as c3,la as r3,lb as b3,m as l1,ma as a1,na as f3,oa as r2,ob as y3,pa as n1,pb as w3,q as t2,qa as o1,ra as K,sa as Z,ta as m3,ua as z3,va as L3,vb as S3,wa as p3,x as l3,xa as M3,ya as u3,z as e3,za as d3}from"./chunk-JPNOK5HP.js";var D2=new T(""),z1=(()=>{class c{_zone;_plugins;_eventNameToPlugin=new Map;constructor(l,s){this._zone=s,l.forEach(a=>{a.manager=this}),this._plugins=l.slice().reverse()}addEventListener(l,s,a,n){return this._findPluginFor(s).addEventListener(l,s,a,n)}getZone(){return this._zone}_findPluginFor(l){let s=this._eventNameToPlugin.get(l);if(s)return s;if(s=this._plugins.find(n=>n.supports(l)),!s)throw new w(5101,!1);return this._eventNameToPlugin.set(l,s),s}static \u0275fac=function(s){return new(s||c)(d(D2),d(Q))};static \u0275prov=x({token:c,factory:c.\u0275fac})}return c})(),L2=class{_doc;constructor(e){this._doc=e}manager},E2="ng-app-id";function R3(c){for(let e of c)e.remove()}function D3(c,e){let l=e.createElement("style");return l.textContent=c,l}function p0(c,e,l,s){let a=c.head?.querySelectorAll(`style[${E2}="${e}"],link[${E2}="${e}"]`);if(a)for(let n of a)n.removeAttribute(E2),n instanceof HTMLLinkElement?s.set(n.href.slice(n.href.lastIndexOf("/")+1),{usage:0,elements:[n]}):n.textContent&&l.set(n.textContent,{usage:0,elements:[n]})}function f1(c,e){let l=e.createElement("link");return l.setAttribute("rel","stylesheet"),l.setAttribute("href",c),l}var L1=(()=>{class c{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(l,s,a,n={}){this.doc=l,this.appId=s,this.nonce=a,this.isServer=P3(n),p0(l,s,this.inline,this.external),this.hosts.add(l.head)}addStyles(l,s){for(let a of l)this.addUsage(a,this.inline,D3);s?.forEach(a=>this.addUsage(a,this.external,f1))}removeStyles(l,s){for(let a of l)this.removeUsage(a,this.inline);s?.forEach(a=>this.removeUsage(a,this.external))}addUsage(l,s,a){let n=s.get(l);n?n.usage++:s.set(l,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(l,this.doc)))})}removeUsage(l,s){let a=s.get(l);a&&(a.usage--,a.usage<=0&&(R3(a.elements),s.delete(l)))}ngOnDestroy(){for(let[,{elements:l}]of[...this.inline,...this.external])R3(l);this.hosts.clear()}addHost(l){this.hosts.add(l);for(let[s,{elements:a}]of this.inline)a.push(this.addElement(l,D3(s,this.doc)));for(let[s,{elements:a}]of this.external)a.push(this.addElement(l,f1(s,this.doc)))}removeHost(l){this.hosts.delete(l)}addElement(l,s){return this.nonce&&s.setAttribute("nonce",this.nonce),this.isServer&&s.setAttribute(E2,this.appId),l.appendChild(s)}static \u0275fac=function(s){return new(s||c)(d(v),d(a1),d(n1,8),d(r2))};static \u0275prov=x({token:c,factory:c.\u0275fac})}return c})(),r1={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},p1=/%COMP%/g;var I3="%COMP%",M0=`_nghost-${I3}`,u0=`_ngcontent-${I3}`,d0=!0,C0=new T("",{providedIn:"root",factory:()=>d0});function h0(c){return u0.replace(p1,c)}function g0(c){return M0.replace(p1,c)}function O3(c,e){return e.map(l=>l.replace(p1,c))}var M1=(()=>{class c{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(l,s,a,n,o,t,i,f=null,m=null){this.eventManager=l,this.sharedStylesHost=s,this.appId=a,this.removeStylesOnCompDestroy=n,this.doc=o,this.platformId=t,this.ngZone=i,this.nonce=f,this.tracingService=m,this.platformIsServer=!1,this.defaultRenderer=new p2(l,o,i,this.platformIsServer,this.tracingService)}createRenderer(l,s){if(!l||!s)return this.defaultRenderer;let a=this.getOrCreateRenderer(l,s);return a instanceof P2?a.applyToHost(l):a instanceof M2&&a.applyStyles(),a}getOrCreateRenderer(l,s){let a=this.rendererByCompId,n=a.get(s.id);if(!n){let o=this.doc,t=this.ngZone,i=this.eventManager,f=this.sharedStylesHost,m=this.removeStylesOnCompDestroy,L=this.platformIsServer,p=this.tracingService;switch(s.encapsulation){case o1.Emulated:n=new P2(i,f,s,this.appId,m,o,t,L,p);break;case o1.ShadowDom:return new m1(i,f,l,s,o,t,this.nonce,L,p);default:n=new M2(i,f,s,m,o,t,L,p);break}a.set(s.id,n)}return n}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(l){this.rendererByCompId.delete(l)}static \u0275fac=function(s){return new(s||c)(d(z1),d(L1),d(a1),d(C0),d(v),d(r2),d(Q),d(n1),d(x3,8))};static \u0275prov=x({token:c,factory:c.\u0275fac})}return c})(),p2=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,l,s,a,n){this.eventManager=e,this.doc=l,this.ngZone=s,this.platformIsServer=a,this.tracingService=n}destroy(){}destroyNode=null;createElement(e,l){return l?this.doc.createElementNS(r1[l]||l,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,l){(F3(e)?e.content:e).appendChild(l)}insertBefore(e,l,s){e&&(F3(e)?e.content:e).insertBefore(l,s)}removeChild(e,l){l.remove()}selectRootElement(e,l){let s=typeof e=="string"?this.doc.querySelector(e):e;if(!s)throw new w(-5104,!1);return l||(s.textContent=""),s}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,l,s,a){if(a){l=a+":"+l;let n=r1[a];n?e.setAttributeNS(n,l,s):e.setAttribute(l,s)}else e.setAttribute(l,s)}removeAttribute(e,l,s){if(s){let a=r1[s];a?e.removeAttributeNS(a,l):e.removeAttribute(`${s}:${l}`)}else e.removeAttribute(l)}addClass(e,l){e.classList.add(l)}removeClass(e,l){e.classList.remove(l)}setStyle(e,l,s,a){a&(f2.DashCase|f2.Important)?e.style.setProperty(l,s,a&f2.Important?"important":""):e.style[l]=s}removeStyle(e,l,s){s&f2.DashCase?e.style.removeProperty(l):e.style[l]=""}setProperty(e,l,s){e!=null&&(e[l]=s)}setValue(e,l){e.nodeValue=l}listen(e,l,s,a){if(typeof e=="string"&&(e=z2().getGlobalEventTarget(this.doc,e),!e))throw new w(5102,!1);let n=this.decoratePreventDefault(s);return this.tracingService?.wrapEventListener&&(n=this.tracingService.wrapEventListener(e,l,n)),this.eventManager.addEventListener(e,l,n,a)}decoratePreventDefault(e){return l=>{if(l==="__ngUnwrap__")return e;e(l)===!1&&l.preventDefault()}}};function F3(c){return c.tagName==="TEMPLATE"&&c.content!==void 0}var m1=class extends p2{sharedStylesHost;hostEl;shadowRoot;constructor(e,l,s,a,n,o,t,i,f){super(e,n,o,i,f),this.sharedStylesHost=l,this.hostEl=s,this.shadowRoot=s.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let m=a.styles;m=O3(a.id,m);for(let p of m){let C=document.createElement("style");t&&C.setAttribute("nonce",t),C.textContent=p,this.shadowRoot.appendChild(C)}let L=a.getExternalStyles?.();if(L)for(let p of L){let C=f1(p,n);t&&C.setAttribute("nonce",t),this.shadowRoot.appendChild(C)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,l){return super.appendChild(this.nodeOrShadowRoot(e),l)}insertBefore(e,l,s){return super.insertBefore(this.nodeOrShadowRoot(e),l,s)}removeChild(e,l){return super.removeChild(null,l)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},M2=class extends p2{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,l,s,a,n,o,t,i,f){super(e,n,o,t,i),this.sharedStylesHost=l,this.removeStylesOnCompDestroy=a;let m=s.styles;this.styles=f?O3(f,m):m,this.styleUrls=s.getExternalStyles?.(f)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},P2=class extends M2{contentAttr;hostAttr;constructor(e,l,s,a,n,o,t,i,f){let m=a+"-"+s.id;super(e,l,s,n,o,t,i,f,m),this.contentAttr=h0(m),this.hostAttr=g0(m)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,l){let s=super.createElement(e,l);return super.setAttribute(s,this.contentAttr,""),s}};var F2=class c extends T3{supportsDOMEvents=!0;static makeCurrent(){A3(new c)}onAndCancel(e,l,s,a){return e.addEventListener(l,s,a),()=>{e.removeEventListener(l,s,a)}}dispatchEvent(e,l){e.dispatchEvent(l)}remove(e){e.remove()}createElement(e,l){return l=l||this.getDefaultDocument(),l.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,l){return l==="window"?window:l==="document"?e:l==="body"?e.body:null}getBaseHref(e){let l=N0();return l==null?null:b0(l)}resetBaseElement(){u2=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return A2(document.cookie,e)}},u2=null;function N0(){return u2=u2||document.head.querySelector("base"),u2?u2.getAttribute("href"):null}function b0(c){return new URL(c,document.baseURI).pathname}var y0=(()=>{class c{build(){return new XMLHttpRequest}static \u0275fac=function(s){return new(s||c)};static \u0275prov=x({token:c,factory:c.\u0275fac})}return c})(),B3=(()=>{class c extends L2{constructor(l){super(l)}supports(l){return!0}addEventListener(l,s,a,n){return l.addEventListener(s,a,n),()=>this.removeEventListener(l,s,a,n)}removeEventListener(l,s,a,n){return l.removeEventListener(s,a,n)}static \u0275fac=function(s){return new(s||c)(d(v))};static \u0275prov=x({token:c,factory:c.\u0275fac})}return c})(),_3=["alt","control","meta","shift"],w0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},S0={alt:c=>c.altKey,control:c=>c.ctrlKey,meta:c=>c.metaKey,shift:c=>c.shiftKey},U3=(()=>{class c extends L2{constructor(l){super(l)}supports(l){return c.parseEventName(l)!=null}addEventListener(l,s,a,n){let o=c.parseEventName(s),t=c.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>z2().onAndCancel(l,o.domEventName,t,n))}static parseEventName(l){let s=l.toLowerCase().split("."),a=s.shift();if(s.length===0||!(a==="keydown"||a==="keyup"))return null;let n=c._normalizeKey(s.pop()),o="",t=s.indexOf("code");if(t>-1&&(s.splice(t,1),o="code."),_3.forEach(f=>{let m=s.indexOf(f);m>-1&&(s.splice(m,1),o+=f+".")}),o+=n,s.length!=0||n.length===0)return null;let i={};return i.domEventName=a,i.fullKey=o,i}static matchEventFullKeyCode(l,s){let a=w0[l.key]||l.key,n="";return s.indexOf("code.")>-1&&(a=l.code,n="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),_3.forEach(o=>{if(o!==a){let t=S0[o];t(l)&&(n+=o+".")}}),n+=a,n===s)}static eventCallback(l,s,a){return n=>{c.matchEventFullKeyCode(n,l)&&a.runGuarded(()=>s(n))}}static _normalizeKey(l){return l==="esc"?"escape":l}static \u0275fac=function(s){return new(s||c)(d(v))};static \u0275prov=x({token:c,factory:c.\u0275fac})}return c})();function v0(c,e){return k3(G({rootComponent:c},k0(e)))}function k0(c){return{appProviders:[...R0,...c?.providers??[]],platformProviders:P0}}function A0(){F2.makeCurrent()}function T0(){return new s1}function E0(){return r3(document),document}var P0=[{provide:r2,useValue:E3},{provide:f3,useValue:A0,multi:!0},{provide:v,useFactory:E0}];var R0=[{provide:n3,useValue:"root"},{provide:s1,useFactory:T0},{provide:D2,useClass:B3,multi:!0,deps:[v]},{provide:D2,useClass:U3,multi:!0,deps:[v]},M1,L1,z1,{provide:h3,useExisting:M1},{provide:T2,useClass:y0},[]];var l2=class{},d2=class{},U=class c{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(l=>{let s=l.indexOf(":");if(s>0){let a=l.slice(0,s),n=l.slice(s+1).trim();this.addHeaderEntry(a,n)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((l,s)=>{this.addHeaderEntry(s,l)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([l,s])=>{this.setHeaderEntries(l,s)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let l=this.headers.get(e.toLowerCase());return l&&l.length>0?l[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,l){return this.clone({name:e,value:l,op:"a"})}set(e,l){return this.clone({name:e,value:l,op:"s"})}delete(e,l){return this.clone({name:e,value:l,op:"d"})}maybeSetNormalizedName(e,l){this.normalizedNames.has(l)||this.normalizedNames.set(l,e)}init(){this.lazyInit&&(this.lazyInit instanceof c?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(l=>{this.headers.set(l,e.headers.get(l)),this.normalizedNames.set(l,e.normalizedNames.get(l))})}clone(e){let l=new c;return l.lazyInit=this.lazyInit&&this.lazyInit instanceof c?this.lazyInit:this,l.lazyUpdate=(this.lazyUpdate||[]).concat([e]),l}applyUpdate(e){let l=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if(typeof s=="string"&&(s=[s]),s.length===0)return;this.maybeSetNormalizedName(e.name,l);let a=(e.op==="a"?this.headers.get(l):void 0)||[];a.push(...s),this.headers.set(l,a);break;case"d":let n=e.value;if(!n)this.headers.delete(l),this.normalizedNames.delete(l);else{let o=this.headers.get(l);if(!o)return;o=o.filter(t=>n.indexOf(t)===-1),o.length===0?(this.headers.delete(l),this.normalizedNames.delete(l)):this.headers.set(l,o)}break}}addHeaderEntry(e,l){let s=e.toLowerCase();this.maybeSetNormalizedName(e,s),this.headers.has(s)?this.headers.get(s).push(l):this.headers.set(s,[l])}setHeaderEntries(e,l){let s=(Array.isArray(l)?l:[l]).map(n=>n.toString()),a=e.toLowerCase();this.headers.set(a,s),this.maybeSetNormalizedName(e,a)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(l=>e(this.normalizedNames.get(l),this.headers.get(l)))}};var O2=class{encodeKey(e){return H3(e)}encodeValue(e){return H3(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function D0(c,e){let l=new Map;return c.length>0&&c.replace(/^\?/,"").split("&").forEach(a=>{let n=a.indexOf("="),[o,t]=n==-1?[e.decodeKey(a),""]:[e.decodeKey(a.slice(0,n)),e.decodeValue(a.slice(n+1))],i=l.get(o)||[];i.push(t),l.set(o,i)}),l}var F0=/%(\d[a-f0-9])/gi,I0={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function H3(c){return encodeURIComponent(c).replace(F0,(e,l)=>I0[l]??e)}function I2(c){return`${c}`}var F=class c{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new O2,e.fromString){if(e.fromObject)throw new w(2805,!1);this.map=D0(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(l=>{let s=e.fromObject[l],a=Array.isArray(s)?s.map(I2):[I2(s)];this.map.set(l,a)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let l=this.map.get(e);return l?l[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,l){return this.clone({param:e,value:l,op:"a"})}appendAll(e){let l=[];return Object.keys(e).forEach(s=>{let a=e[s];Array.isArray(a)?a.forEach(n=>{l.push({param:s,value:n,op:"a"})}):l.push({param:s,value:a,op:"a"})}),this.clone(l)}set(e,l){return this.clone({param:e,value:l,op:"s"})}delete(e,l){return this.clone({param:e,value:l,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let l=this.encoder.encodeKey(e);return this.map.get(e).map(s=>l+"="+this.encoder.encodeValue(s)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let l=new c({encoder:this.encoder});return l.cloneFrom=this.cloneFrom||this,l.updates=(this.updates||[]).concat(e),l}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let l=(e.op==="a"?this.map.get(e.param):void 0)||[];l.push(I2(e.value)),this.map.set(e.param,l);break;case"d":if(e.value!==void 0){let s=this.map.get(e.param)||[],a=s.indexOf(I2(e.value));a!==-1&&s.splice(a,1),s.length>0?this.map.set(e.param,s):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var _2=class{map=new Map;set(e,l){return this.map.set(e,l),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function O0(c){switch(c){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function j3(c){return typeof ArrayBuffer<"u"&&c instanceof ArrayBuffer}function q3(c){return typeof Blob<"u"&&c instanceof Blob}function W3(c){return typeof FormData<"u"&&c instanceof FormData}function _0(c){return typeof URLSearchParams<"u"&&c instanceof URLSearchParams}var G3="Content-Type",V3="Accept",X3="X-Request-URL",$3="text/plain",Y3="application/json",B0=`${Y3}, ${$3}, */*`,c2=class c{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;keepalive=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(e,l,s,a){this.url=l,this.method=e.toUpperCase();let n;if(O0(this.method)||a?(this.body=s!==void 0?s:null,n=a):n=s,n&&(this.reportProgress=!!n.reportProgress,this.withCredentials=!!n.withCredentials,this.keepalive=!!n.keepalive,n.responseType&&(this.responseType=n.responseType),n.headers&&(this.headers=n.headers),n.context&&(this.context=n.context),n.params&&(this.params=n.params),this.transferCache=n.transferCache),this.headers??=new U,this.context??=new _2,!this.params)this.params=new F,this.urlWithParams=l;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=l;else{let t=l.indexOf("?"),i=t===-1?"?":t<l.length-1?"&":"";this.urlWithParams=l+i+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||j3(this.body)||q3(this.body)||W3(this.body)||_0(this.body)?this.body:this.body instanceof F?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||W3(this.body)?null:q3(this.body)?this.body.type||null:j3(this.body)?null:typeof this.body=="string"?$3:this.body instanceof F?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Y3:null}clone(e={}){let l=e.method||this.method,s=e.url||this.url,a=e.responseType||this.responseType,n=e.keepalive??this.keepalive,o=e.transferCache??this.transferCache,t=e.body!==void 0?e.body:this.body,i=e.withCredentials??this.withCredentials,f=e.reportProgress??this.reportProgress,m=e.headers||this.headers,L=e.params||this.params,p=e.context??this.context;return e.setHeaders!==void 0&&(m=Object.keys(e.setHeaders).reduce((C,N)=>C.set(N,e.setHeaders[N]),m)),e.setParams&&(L=Object.keys(e.setParams).reduce((C,N)=>C.set(N,e.setParams[N]),L)),new c(l,s,t,{params:L,headers:m,context:p,reportProgress:f,responseType:a,withCredentials:i,transferCache:o,keepalive:n})}},X=function(c){return c[c.Sent=0]="Sent",c[c.UploadProgress=1]="UploadProgress",c[c.ResponseHeader=2]="ResponseHeader",c[c.DownloadProgress=3]="DownloadProgress",c[c.Response=4]="Response",c[c.User=5]="User",c}(X||{}),e2=class{headers;status;statusText;url;ok;type;constructor(e,l=200,s="OK"){this.headers=e.headers||new U,this.status=e.status!==void 0?e.status:l,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},B2=class c extends e2{constructor(e={}){super(e)}type=X.ResponseHeader;clone(e={}){return new c({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},C2=class c extends e2{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=X.Response;clone(e={}){return new c({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},h2=class extends e2{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},U0=200,H0=204;function u1(c,e){return{body:e,headers:c.headers,context:c.context,observe:c.observe,params:c.params,reportProgress:c.reportProgress,responseType:c.responseType,withCredentials:c.withCredentials,transferCache:c.transferCache,keepalive:c.keepalive}}var J3=(()=>{class c{handler;constructor(l){this.handler=l}request(l,s,a={}){let n;if(l instanceof c2)n=l;else{let i;a.headers instanceof U?i=a.headers:i=new U(a.headers);let f;a.params&&(a.params instanceof F?f=a.params:f=new F({fromObject:a.params})),n=new c2(l,s,a.body!==void 0?a.body:null,{headers:i,context:a.context,params:f,reportProgress:a.reportProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials,transferCache:a.transferCache,keepalive:a.keepalive})}let o=l1(n).pipe(e3(i=>this.handler.handle(i)));if(l instanceof c2||a.observe==="events")return o;let t=o.pipe(l3(i=>i instanceof C2));switch(a.observe||"body"){case"body":switch(n.responseType){case"arraybuffer":return t.pipe(t2(i=>{if(i.body!==null&&!(i.body instanceof ArrayBuffer))throw new w(2806,!1);return i.body}));case"blob":return t.pipe(t2(i=>{if(i.body!==null&&!(i.body instanceof Blob))throw new w(2807,!1);return i.body}));case"text":return t.pipe(t2(i=>{if(i.body!==null&&typeof i.body!="string")throw new w(2808,!1);return i.body}));case"json":default:return t.pipe(t2(i=>i.body))}case"response":return t;default:throw new w(2809,!1)}}delete(l,s={}){return this.request("DELETE",l,s)}get(l,s={}){return this.request("GET",l,s)}head(l,s={}){return this.request("HEAD",l,s)}jsonp(l,s){return this.request("JSONP",l,{params:new F().append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(l,s={}){return this.request("OPTIONS",l,s)}patch(l,s,a={}){return this.request("PATCH",l,u1(a,s))}post(l,s,a={}){return this.request("POST",l,u1(a,s))}put(l,s,a={}){return this.request("PUT",l,u1(a,s))}static \u0275fac=function(s){return new(s||c)(d(l2))};static \u0275prov=x({token:c,factory:c.\u0275fac})}return c})();var j0=new T("");function q0(c,e){return e(c)}function W0(c,e,l){return(s,a)=>t3(l,()=>e(s,n=>c(n,a)))}var K3=new T(""),Z3=new T(""),Q3=new T("",{providedIn:"root",factory:()=>!0});var U2=(()=>{class c extends l2{backend;injector;chain=null;pendingTasks=S(i3);contributeToStability=S(Q3);constructor(l,s){super(),this.backend=l,this.injector=s}handle(l){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(K3),...this.injector.get(Z3,[])]));this.chain=s.reduceRight((a,n)=>W0(a,n,this.injector),q0)}if(this.contributeToStability){let s=this.pendingTasks.add();return this.chain(l,a=>this.backend.handle(a)).pipe(s3(s))}else return this.chain(l,s=>this.backend.handle(s))}static \u0275fac=function(s){return new(s||c)(d(d2),d(o3))};static \u0275prov=x({token:c,factory:c.\u0275fac})}return c})();var G0=/^\)\]\}',?\n/,V0=RegExp(`^${X3}:`,"m");function X0(c){return"responseURL"in c&&c.responseURL?c.responseURL:V0.test(c.getAllResponseHeaders())?c.getResponseHeader(X3):null}var d1=(()=>{class c{xhrFactory;constructor(l){this.xhrFactory=l}handle(l){if(l.method==="JSONP")throw new w(-2800,!1);l.keepalive;let s=this.xhrFactory;return(s.\u0275loadImpl?c3(s.\u0275loadImpl()):l1(null)).pipe(a3(()=>new Q1(n=>{let o=s.build();if(o.open(l.method,l.urlWithParams),l.withCredentials&&(o.withCredentials=!0),l.headers.forEach((u,M)=>o.setRequestHeader(u,M.join(","))),l.headers.has(V3)||o.setRequestHeader(V3,B0),!l.headers.has(G3)){let u=l.detectContentTypeHeader();u!==null&&o.setRequestHeader(G3,u)}if(l.responseType){let u=l.responseType.toLowerCase();o.responseType=u!=="json"?u:"text"}let t=l.serializeBody(),i=null,f=()=>{if(i!==null)return i;let u=o.statusText||"OK",M=new U(o.getAllResponseHeaders()),b=X0(o)||l.url;return i=new B2({headers:M,status:o.status,statusText:u,url:b}),i},m=()=>{let{headers:u,status:M,statusText:b,url:y}=f(),h=null;M!==H0&&(h=typeof o.response>"u"?o.responseText:o.response),M===0&&(M=h?U0:0);let P=M>=200&&M<300;if(l.responseType==="json"&&typeof h=="string"){let B=h;h=h.replace(G0,"");try{h=h!==""?JSON.parse(h):null}catch(Z2){h=B,P&&(P=!1,h={error:Z2,text:h})}}P?(n.next(new C2({body:h,headers:u,status:M,statusText:b,url:y||void 0})),n.complete()):n.error(new h2({error:h,headers:u,status:M,statusText:b,url:y||void 0}))},L=u=>{let{url:M}=f(),b=new h2({error:u,status:o.status||0,statusText:o.statusText||"Unknown Error",url:M||void 0});n.error(b)},p=!1,C=u=>{p||(n.next(f()),p=!0);let M={type:X.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(M.total=u.total),l.responseType==="text"&&o.responseText&&(M.partialText=o.responseText),n.next(M)},N=u=>{let M={type:X.UploadProgress,loaded:u.loaded};u.lengthComputable&&(M.total=u.total),n.next(M)};return o.addEventListener("load",m),o.addEventListener("error",L),o.addEventListener("timeout",L),o.addEventListener("abort",L),l.reportProgress&&(o.addEventListener("progress",C),t!==null&&o.upload&&o.upload.addEventListener("progress",N)),o.send(t),n.next({type:X.Sent}),()=>{o.removeEventListener("error",L),o.removeEventListener("abort",L),o.removeEventListener("load",m),o.removeEventListener("timeout",L),l.reportProgress&&(o.removeEventListener("progress",C),t!==null&&o.upload&&o.upload.removeEventListener("progress",N)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(s){return new(s||c)(d(T2))};static \u0275prov=x({token:c,factory:c.\u0275fac})}return c})(),c4=new T(""),$0="XSRF-TOKEN",Y0=new T("",{providedIn:"root",factory:()=>$0}),J0="X-XSRF-TOKEN",K0=new T("",{providedIn:"root",factory:()=>J0}),g2=class{},Z0=(()=>{class c{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(l,s){this.doc=l,this.cookieName=s}getToken(){let l=this.doc.cookie||"";return l!==this.lastCookieString&&(this.parseCount++,this.lastToken=A2(l,this.cookieName),this.lastCookieString=l),this.lastToken}static \u0275fac=function(s){return new(s||c)(d(v),d(Y0))};static \u0275prov=x({token:c,factory:c.\u0275fac})}return c})();function Q0(c,e){let l=c.url.toLowerCase();if(!S(c4)||c.method==="GET"||c.method==="HEAD"||l.startsWith("http://")||l.startsWith("https://"))return e(c);let s=S(g2).getToken(),a=S(K0);return s!=null&&!c.headers.has(a)&&(c=c.clone({headers:c.headers.set(a,s)})),e(c)}function c6(...c){let e=[J3,d1,U2,{provide:l2,useExisting:U2},{provide:d2,useFactory:()=>S(j0,{optional:!0})??S(d1)},{provide:K3,useValue:Q0,multi:!0},{provide:c4,useValue:!0},{provide:g2,useClass:Z0}];for(let l of c)e.push(...l.\u0275providers);return e1(e)}var W7=(()=>{class c{_doc;constructor(l){this._doc=l}getTitle(){return this._doc.title}setTitle(l){this._doc.title=l||""}static \u0275fac=function(s){return new(s||c)(d(v))};static \u0275prov=x({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var C1=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275prov=x({token:c,factory:function(s){let a=null;return s?a=new(s||c):a=d(e6),a},providedIn:"root"})}return c})(),e6=(()=>{class c extends C1{_doc;constructor(l){super(),this._doc=l}sanitize(l,s){if(s==null)return null;switch(l){case V.NONE:return s;case V.HTML:return Z(s,"HTML")?K(s):d3(this._doc,String(s)).toString();case V.STYLE:return Z(s,"Style")?K(s):s;case V.SCRIPT:if(Z(s,"Script"))return K(s);throw new w(5200,!1);case V.URL:return Z(s,"URL")?K(s):u3(String(s));case V.RESOURCE_URL:if(Z(s,"ResourceURL"))return K(s);throw new w(5201,!1);default:throw new w(5202,!1)}}bypassSecurityTrustHtml(l){return m3(l)}bypassSecurityTrustStyle(l){return z3(l)}bypassSecurityTrustScript(l){return L3(l)}bypassSecurityTrustUrl(l){return p3(l)}bypassSecurityTrustResourceUrl(l){return M3(l)}static \u0275fac=function(s){return new(s||c)(d(v))};static \u0275prov=x({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function s6(c,e,l){return(e=n6(e))in c?Object.defineProperty(c,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[e]=l,c}function l4(c,e){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),l.push.apply(l,s)}return l}function r(c){for(var e=1;e<arguments.length;e++){var l=arguments[e]!=null?arguments[e]:{};e%2?l4(Object(l),!0).forEach(function(s){s6(c,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):l4(Object(l)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(l,s))})}return c}function a6(c,e){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var s=l.call(c,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(c)}function n6(c){var e=a6(c,"string");return typeof e=="symbol"?e:e+""}var e4=()=>{},H1={},k4={},A4=null,T4={mark:e4,measure:e4};try{typeof window<"u"&&(H1=window),typeof document<"u"&&(k4=document),typeof MutationObserver<"u"&&(A4=MutationObserver),typeof performance<"u"&&(T4=performance)}catch{}var{userAgent:s4=""}=H1.navigator||{},j=H1,g=k4,a4=A4,H2=T4,X7=!!j.document,_=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",E4=~s4.indexOf("MSIE")||~s4.indexOf("Trident/"),o6=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,t6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,P4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},i6={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},R4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],k="classic",X2="duotone",r6="sharp",f6="sharp-duotone",D4=[k,X2,r6,f6],m6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},z6={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},L6=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),p6={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},M6=["fak","fa-kit","fakd","fa-kit-duotone"],n4={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},u6=["kit"],d6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},C6=["fak","fakd"],h6={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},o4={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},j2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},g6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],x6=["fak","fa-kit","fakd","fa-kit-duotone"],N6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},b6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},y6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},y1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},w6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],w1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...g6,...w6],S6=["solid","regular","light","thin","duotone","brands"],F4=[1,2,3,4,5,6,7,8,9,10],v6=F4.concat([11,12,13,14,15,16,17,18,19,20]),k6=[...Object.keys(y6),...S6,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",j2.GROUP,j2.SWAP_OPACITY,j2.PRIMARY,j2.SECONDARY].concat(F4.map(c=>"".concat(c,"x"))).concat(v6.map(c=>"w-".concat(c))),A6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},I="___FONT_AWESOME___",S1=16,I4="fa",O4="svg-inline--fa",Y="data-fa-i2svg",v1="data-fa-pseudo-element",T6="data-fa-pseudo-element-pending",j1="data-prefix",q1="data-icon",t4="fontawesome-i2svg",E6="async",P6=["HTML","HEAD","STYLE","SCRIPT"],_4=(()=>{try{return!0}catch{return!1}})();function S2(c){return new Proxy(c,{get(e,l){return l in e?e[l]:e[k]}})}var B4=r({},P4);B4[k]=r(r(r(r({},{"fa-duotone":"duotone"}),P4[k]),n4.kit),n4["kit-duotone"]);var R6=S2(B4),k1=r({},p6);k1[k]=r(r(r(r({},{duotone:"fad"}),k1[k]),o4.kit),o4["kit-duotone"]);var i4=S2(k1),A1=r({},y1);A1[k]=r(r({},A1[k]),h6.kit);var W1=S2(A1),T1=r({},b6);T1[k]=r(r({},T1[k]),d6.kit);var $7=S2(T1),D6=o6,U4="fa-layers-text",F6=t6,I6=r({},m6),Y7=S2(I6),O6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],h1=i6,_6=[...u6,...k6],N2=j.FontAwesomeConfig||{};function B6(c){var e=g.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function U6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[l,s]=e,a=U6(B6(l));a!=null&&(N2[s]=a)});var H4={styleDefault:"solid",familyDefault:k,cssPrefix:I4,replacementClass:O4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};N2.familyPrefix&&(N2.cssPrefix=N2.familyPrefix);var n2=r(r({},H4),N2);n2.autoReplaceSvg||(n2.observeMutations=!1);var z={};Object.keys(H4).forEach(c=>{Object.defineProperty(z,c,{enumerable:!0,set:function(e){n2[c]=e,b2.forEach(l=>l(z))},get:function(){return n2[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(c){n2.cssPrefix=c,b2.forEach(e=>e(z))},get:function(){return n2.cssPrefix}});j.FontAwesomeConfig=z;var b2=[];function H6(c){return b2.push(c),()=>{b2.splice(b2.indexOf(c),1)}}var H=S1,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function j6(c){if(!c||!_)return;let e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;let l=g.head.childNodes,s=null;for(let a=l.length-1;a>-1;a--){let n=l[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=n)}return g.head.insertBefore(e,s),c}var q6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function y2(){let c=12,e="";for(;c-- >0;)e+=q6[Math.random()*62|0];return e}function o2(c){let e=[];for(let l=(c||[]).length>>>0;l--;)e[l]=c[l];return e}function G1(c){return c.classList?o2(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function j4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function W6(c){return Object.keys(c||{}).reduce((e,l)=>e+"".concat(l,'="').concat(j4(c[l]),'" '),"").trim()}function $2(c){return Object.keys(c||{}).reduce((e,l)=>e+"".concat(l,": ").concat(c[l].trim(),";"),"")}function V1(c){return c.size!==R.size||c.x!==R.x||c.y!==R.y||c.rotate!==R.rotate||c.flipX||c.flipY}function G6(c){let{transform:e,containerWidth:l,iconWidth:s}=c,a={transform:"translate(".concat(l/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),t="rotate(".concat(e.rotate," 0 0)"),i={transform:"".concat(n," ").concat(o," ").concat(t)},f={transform:"translate(".concat(s/2*-1," -256)")};return{outer:a,inner:i,path:f}}function V6(c){let{transform:e,width:l=S1,height:s=S1,startCentered:a=!1}=c,n="";return a&&E4?n+="translate(".concat(e.x/H-l/2,"em, ").concat(e.y/H-s/2,"em) "):a?n+="translate(calc(-50% + ".concat(e.x/H,"em), calc(-50% + ").concat(e.y/H,"em)) "):n+="translate(".concat(e.x/H,"em, ").concat(e.y/H,"em) "),n+="scale(".concat(e.size/H*(e.flipX?-1:1),", ").concat(e.size/H*(e.flipY?-1:1),") "),n+="rotate(".concat(e.rotate,"deg) "),n}var X6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function q4(){let c=I4,e=O4,l=z.cssPrefix,s=z.replacementClass,a=X6;if(l!==c||s!==e){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(e),"g");a=a.replace(n,".".concat(l,"-")).replace(o,"--".concat(l,"-")).replace(t,".".concat(s))}return a}var r4=!1;function g1(){z.autoAddCss&&!r4&&(j6(q4()),r4=!0)}var $6={mixout(){return{dom:{css:q4,insertCss:g1}}},hooks(){return{beforeDOMElementCreation(){g1()},beforeI2svg(){g1()}}}},O=j||{};O[I]||(O[I]={});O[I].styles||(O[I].styles={});O[I].hooks||(O[I].hooks={});O[I].shims||(O[I].shims=[]);var D=O[I],W4=[],G4=function(){g.removeEventListener("DOMContentLoaded",G4),G2=1,W4.map(c=>c())},G2=!1;_&&(G2=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),G2||g.addEventListener("DOMContentLoaded",G4));function Y6(c){_&&(G2?setTimeout(c,0):W4.push(c))}function v2(c){let{tag:e,attributes:l={},children:s=[]}=c;return typeof c=="string"?j4(c):"<".concat(e," ").concat(W6(l),">").concat(s.map(v2).join(""),"</").concat(e,">")}function f4(c,e,l){if(c&&c[e]&&c[e][l])return{prefix:e,iconName:l,icon:c[e][l]}}var J6=function(e,l){return function(s,a,n,o){return e.call(l,s,a,n,o)}},x1=function(e,l,s,a){var n=Object.keys(e),o=n.length,t=a!==void 0?J6(l,a):l,i,f,m;for(s===void 0?(i=1,m=e[n[0]]):(i=0,m=s);i<o;i++)f=n[i],m=t(m,e[f],f,e);return m};function K6(c){let e=[],l=0,s=c.length;for(;l<s;){let a=c.charCodeAt(l++);if(a>=55296&&a<=56319&&l<s){let n=c.charCodeAt(l++);(n&64512)==56320?e.push(((a&1023)<<10)+(n&1023)+65536):(e.push(a),l--)}else e.push(a)}return e}function E1(c){let e=K6(c);return e.length===1?e[0].toString(16):null}function Z6(c,e){let l=c.length,s=c.charCodeAt(e),a;return s>=55296&&s<=56319&&l>e+1&&(a=c.charCodeAt(e+1),a>=56320&&a<=57343)?(s-55296)*1024+a-56320+65536:s}function m4(c){return Object.keys(c).reduce((e,l)=>{let s=c[l];return!!s.icon?e[s.iconName]=s.icon:e[l]=s,e},{})}function P1(c,e){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:s=!1}=l,a=m4(e);typeof D.hooks.addPack=="function"&&!s?D.hooks.addPack(c,m4(e)):D.styles[c]=r(r({},D.styles[c]||{}),a),c==="fas"&&P1("fa",e)}var{styles:w2,shims:Q6}=D,V4=Object.keys(W1),c8=V4.reduce((c,e)=>(c[e]=Object.keys(W1[e]),c),{}),X1=null,X4={},$4={},Y4={},J4={},K4={};function l8(c){return~_6.indexOf(c)}function e8(c,e){let l=e.split("-"),s=l[0],a=l.slice(1).join("-");return s===c&&a!==""&&!l8(a)?a:null}var Z4=()=>{let c=s=>x1(w2,(a,n,o)=>(a[o]=x1(n,s,{}),a),{});X4=c((s,a,n)=>(a[3]&&(s[a[3]]=n),a[2]&&a[2].filter(t=>typeof t=="number").forEach(t=>{s[t.toString(16)]=n}),s)),$4=c((s,a,n)=>(s[n]=n,a[2]&&a[2].filter(t=>typeof t=="string").forEach(t=>{s[t]=n}),s)),K4=c((s,a,n)=>{let o=a[2];return s[n]=n,o.forEach(t=>{s[t]=n}),s});let e="far"in w2||z.autoFetchSvg,l=x1(Q6,(s,a)=>{let n=a[0],o=a[1],t=a[2];return o==="far"&&!e&&(o="fas"),typeof n=="string"&&(s.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:o,iconName:t}),s},{names:{},unicodes:{}});Y4=l.names,J4=l.unicodes,X1=Y2(z.styleDefault,{family:z.familyDefault})};H6(c=>{X1=Y2(c.styleDefault,{family:z.familyDefault})});Z4();function $1(c,e){return(X4[c]||{})[e]}function s8(c,e){return($4[c]||{})[e]}function $(c,e){return(K4[c]||{})[e]}function Q4(c){return Y4[c]||{prefix:null,iconName:null}}function a8(c){let e=J4[c],l=$1("fas",c);return e||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function q(){return X1}var c0=()=>({prefix:null,iconName:null,rest:[]});function n8(c){let e=k,l=V4.reduce((s,a)=>(s[a]="".concat(z.cssPrefix,"-").concat(a),s),{});return D4.forEach(s=>{(c.includes(l[s])||c.some(a=>c8[s].includes(a)))&&(e=s)}),e}function Y2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:l=k}=e,s=R6[l][c];if(l===X2&&!c)return"fad";let a=i4[l][c]||i4[l][s],n=c in D.styles?c:null;return a||n||null}function o8(c){let e=[],l=null;return c.forEach(s=>{let a=e8(z.cssPrefix,s);a?l=a:s&&e.push(s)}),{iconName:l,rest:e}}function z4(c){return c.sort().filter((e,l,s)=>s.indexOf(e)===l)}function J2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:l=!1}=e,s=null,a=w1.concat(x6),n=z4(c.filter(L=>a.includes(L))),o=z4(c.filter(L=>!w1.includes(L))),t=n.filter(L=>(s=L,!R4.includes(L))),[i=null]=t,f=n8(n),m=r(r({},o8(o)),{},{prefix:Y2(i,{family:f})});return r(r(r({},m),f8({values:c,family:f,styles:w2,config:z,canonical:m,givenPrefix:s})),t8(l,s,m))}function t8(c,e,l){let{prefix:s,iconName:a}=l;if(c||!s||!a)return{prefix:s,iconName:a};let n=e==="fa"?Q4(a):{},o=$(s,a);return a=n.iconName||o||a,s=n.prefix||s,s==="far"&&!w2.far&&w2.fas&&!z.autoFetchSvg&&(s="fas"),{prefix:s,iconName:a}}var i8=D4.filter(c=>c!==k||c!==X2),r8=Object.keys(y1).filter(c=>c!==k).map(c=>Object.keys(y1[c])).flat();function f8(c){let{values:e,family:l,canonical:s,givenPrefix:a="",styles:n={},config:o={}}=c,t=l===X2,i=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",m=s.prefix==="fad"||s.prefix==="fa-duotone";if(!t&&(i||f||m)&&(s.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),!s.prefix&&i8.includes(l)&&(Object.keys(n).find(p=>r8.includes(p))||o.autoFetchSvg)){let p=L6.get(l).defaultShortPrefixId;s.prefix=p,s.iconName=$(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||a==="fa")&&(s.prefix=q()||"fas"),s}var R1=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,l=new Array(e),s=0;s<e;s++)l[s]=arguments[s];let a=l.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]=r(r({},this.definitions[n]||{}),a[n]),P1(n,a[n]);let o=W1[k][n];o&&P1(o,a[n]),Z4()})}reset(){this.definitions={}}_pullDefinitions(e,l){let s=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(s).map(a=>{let{prefix:n,iconName:o,icon:t}=s[a],i=t[2];e[n]||(e[n]={}),i.length>0&&i.forEach(f=>{typeof f=="string"&&(e[n][f]=t)}),e[n][o]=t}),e}},L4=[],s2={},a2={},m8=Object.keys(a2);function z8(c,e){let{mixoutsTo:l}=e;return L4=c,s2={},Object.keys(a2).forEach(s=>{m8.indexOf(s)===-1&&delete a2[s]}),L4.forEach(s=>{let a=s.mixout?s.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(l[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(o=>{l[n]||(l[n]={}),l[n][o]=a[n][o]})}),s.hooks){let n=s.hooks();Object.keys(n).forEach(o=>{s2[o]||(s2[o]=[]),s2[o].push(n[o])})}s.provides&&s.provides(a2)}),l}function D1(c,e){for(var l=arguments.length,s=new Array(l>2?l-2:0),a=2;a<l;a++)s[a-2]=arguments[a];return(s2[c]||[]).forEach(o=>{e=o.apply(null,[e,...s])}),e}function J(c){for(var e=arguments.length,l=new Array(e>1?e-1:0),s=1;s<e;s++)l[s-1]=arguments[s];(s2[c]||[]).forEach(n=>{n.apply(null,l)})}function W(){let c=arguments[0],e=Array.prototype.slice.call(arguments,1);return a2[c]?a2[c].apply(null,e):void 0}function F1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c,l=c.prefix||q();if(e)return e=$(l,e)||e,f4(l0.definitions,l,e)||f4(D.styles,l,e)}var l0=new R1,L8=()=>{z.autoReplaceSvg=!1,z.observeMutations=!1,J("noAuto")},p8={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(J("beforeI2svg",c),W("pseudoElements2svg",c),W("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=c;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,Y6(()=>{u8({autoReplaceSvgRoot:e}),J("watch",c)})}},M8={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:$(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],l=Y2(c[0]);return{prefix:l,iconName:$(l,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(z.cssPrefix,"-"))>-1||c.match(D6))){let e=J2(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||q(),iconName:$(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){let e=q();return{prefix:e,iconName:$(e,c)||c}}}},E={noAuto:L8,config:z,dom:p8,parse:M8,library:l0,findIconDefinition:F1,toHtml:v2},u8=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=g}=c;(Object.keys(D.styles).length>0||z.autoFetchSvg)&&_&&z.autoReplaceSvg&&E.dom.i2svg({node:e})};function K2(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(l=>v2(l))}}),Object.defineProperty(c,"node",{get:function(){if(!_)return;let l=g.createElement("div");return l.innerHTML=c.html,l.children}}),c}function d8(c){let{children:e,main:l,mask:s,attributes:a,styles:n,transform:o}=c;if(V1(o)&&l.found&&!s.found){let{width:t,height:i}=l,f={x:t/i/2,y:.5};a.style=$2(r(r({},n),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function C8(c){let{prefix:e,iconName:l,children:s,attributes:a,symbol:n}=c,o=n===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(l):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:r(r({},a),{},{id:o}),children:s}]}]}function Y1(c){let{icons:{main:e,mask:l},prefix:s,iconName:a,transform:n,symbol:o,title:t,maskId:i,titleId:f,extra:m,watchable:L=!1}=c,{width:p,height:C}=l.found?l:e,N=C6.includes(s),u=[z.replacementClass,a?"".concat(z.cssPrefix,"-").concat(a):""].filter(B=>m.classes.indexOf(B)===-1).filter(B=>B!==""||!!B).concat(m.classes).join(" "),M={children:[],attributes:r(r({},m.attributes),{},{"data-prefix":s,"data-icon":a,class:u,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(C)})},b=N&&!~m.classes.indexOf("fa-fw")?{width:"".concat(p/C*16*.0625,"em")}:{};L&&(M.attributes[Y]=""),t&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(f||y2())},children:[t]}),delete M.attributes.title);let y=r(r({},M),{},{prefix:s,iconName:a,main:e,mask:l,maskId:i,transform:n,symbol:o,styles:r(r({},b),m.styles)}),{children:h,attributes:P}=l.found&&e.found?W("generateAbstractMask",y)||{children:[],attributes:{}}:W("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=h,y.attributes=P,o?C8(y):d8(y)}function p4(c){let{content:e,width:l,height:s,transform:a,title:n,extra:o,watchable:t=!1}=c,i=r(r(r({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});t&&(i[Y]="");let f=r({},o.styles);V1(a)&&(f.transform=V6({transform:a,startCentered:!0,width:l,height:s}),f["-webkit-transform"]=f.transform);let m=$2(f);m.length>0&&(i.style=m);let L=[];return L.push({tag:"span",attributes:i,children:[e]}),n&&L.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),L}function h8(c){let{content:e,title:l,extra:s}=c,a=r(r(r({},s.attributes),l?{title:l}:{}),{},{class:s.classes.join(" ")}),n=$2(s.styles);n.length>0&&(a.style=n);let o=[];return o.push({tag:"span",attributes:a,children:[e]}),l&&o.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),o}var{styles:N1}=D;function I1(c){let e=c[0],l=c[1],[s]=c.slice(4),a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(h1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(h1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(h1.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:l,icon:a}}var g8={found:!1,width:512,height:512};function x8(c,e){!_4&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function O1(c,e){let l=e;return e==="fa"&&z.styleDefault!==null&&(e=q()),new Promise((s,a)=>{if(l==="fa"){let n=Q4(c)||{};c=n.iconName||c,e=n.prefix||e}if(c&&e&&N1[e]&&N1[e][c]){let n=N1[e][c];return s(I1(n))}x8(c,e),s(r(r({},g8),{},{icon:z.showMissingIcons&&c?W("missingIconAbstract")||{}:{}}))})}var M4=()=>{},_1=z.measurePerformance&&H2&&H2.mark&&H2.measure?H2:{mark:M4,measure:M4},x2='FA "6.7.2"',N8=c=>(_1.mark("".concat(x2," ").concat(c," begins")),()=>e0(c)),e0=c=>{_1.mark("".concat(x2," ").concat(c," ends")),_1.measure("".concat(x2," ").concat(c),"".concat(x2," ").concat(c," begins"),"".concat(x2," ").concat(c," ends"))},J1={begin:N8,end:e0},q2=()=>{};function u4(c){return typeof(c.getAttribute?c.getAttribute(Y):null)=="string"}function b8(c){let e=c.getAttribute?c.getAttribute(j1):null,l=c.getAttribute?c.getAttribute(q1):null;return e&&l}function y8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function w8(){return z.autoReplaceSvg===!0?W2.replace:W2[z.autoReplaceSvg]||W2.replace}function S8(c){return g.createElementNS("http://www.w3.org/2000/svg",c)}function v8(c){return g.createElement(c)}function s0(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:l=c.tag==="svg"?S8:v8}=e;if(typeof c=="string")return g.createTextNode(c);let s=l(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){s.appendChild(s0(n,{ceFn:l}))}),s}function k8(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var W2={replace:function(c){let e=c[0];if(e.parentNode)if(c[1].forEach(l=>{e.parentNode.insertBefore(s0(l),e)}),e.getAttribute(Y)===null&&z.keepOriginalSource){let l=g.createComment(k8(e));e.parentNode.replaceChild(l,e)}else e.remove()},nest:function(c){let e=c[0],l=c[1];if(~G1(e).indexOf(z.replacementClass))return W2.replace(c);let s=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){let n=l[0].attributes.class.split(" ").reduce((o,t)=>(t===z.replacementClass||t.match(s)?o.toSvg.push(t):o.toNode.push(t),o),{toNode:[],toSvg:[]});l[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}let a=l.map(n=>v2(n)).join(`
`);e.setAttribute(Y,""),e.innerHTML=a}};function d4(c){c()}function a0(c,e){let l=typeof e=="function"?e:q2;if(c.length===0)l();else{let s=d4;z.mutateApproach===E6&&(s=j.requestAnimationFrame||d4),s(()=>{let a=w8(),n=J1.begin("mutate");c.map(a),n(),l()})}}var K1=!1;function n0(){K1=!0}function B1(){K1=!1}var V2=null;function C4(c){if(!a4||!z.observeMutations)return;let{treeCallback:e=q2,nodeCallback:l=q2,pseudoElementsCallback:s=q2,observeMutationsRoot:a=g}=c;V2=new a4(n=>{if(K1)return;let o=q();o2(n).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!u4(t.addedNodes[0])&&(z.searchPseudoElements&&s(t.target),e(t.target)),t.type==="attributes"&&t.target.parentNode&&z.searchPseudoElements&&s(t.target.parentNode),t.type==="attributes"&&u4(t.target)&&~O6.indexOf(t.attributeName))if(t.attributeName==="class"&&b8(t.target)){let{prefix:i,iconName:f}=J2(G1(t.target));t.target.setAttribute(j1,i||o),f&&t.target.setAttribute(q1,f)}else y8(t.target)&&l(t.target)})}),_&&V2.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function A8(){V2&&V2.disconnect()}function T8(c){let e=c.getAttribute("style"),l=[];return e&&(l=e.split(";").reduce((s,a)=>{let n=a.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(s[o]=t.join(":").trim()),s},{})),l}function E8(c){let e=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",a=J2(G1(c));return a.prefix||(a.prefix=q()),e&&l&&(a.prefix=e,a.iconName=l),a.iconName&&a.prefix||(a.prefix&&s.length>0&&(a.iconName=s8(a.prefix,c.innerText)||$1(a.prefix,E1(c.innerText))),!a.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function P8(c){let e=o2(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),l=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return z.autoA11y&&(l?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(s||y2()):(e["aria-hidden"]="true",e.focusable="false")),e}function R8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function h4(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:l,prefix:s,rest:a}=E8(c),n=P8(c),o=D1("parseNodeAttributes",{},c),t=e.styleParser?T8(c):[];return r({iconName:l,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t,attributes:n}},o)}var{styles:D8}=D;function o0(c){let e=z.autoReplaceSvg==="nest"?h4(c,{styleParser:!1}):h4(c);return~e.extra.classes.indexOf(U4)?W("generateLayersText",c,e):W("generateSvgReplacementMutation",c,e)}function F8(){return[...M6,...w1]}function g4(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();let l=g.documentElement.classList,s=m=>l.add("".concat(t4,"-").concat(m)),a=m=>l.remove("".concat(t4,"-").concat(m)),n=z.autoFetchSvg?F8():R4.concat(Object.keys(D8));n.includes("fa")||n.push("fa");let o=[".".concat(U4,":not([").concat(Y,"])")].concat(n.map(m=>".".concat(m,":not([").concat(Y,"])"))).join(", ");if(o.length===0)return Promise.resolve();let t=[];try{t=o2(c.querySelectorAll(o))}catch{}if(t.length>0)s("pending"),a("complete");else return Promise.resolve();let i=J1.begin("onTree"),f=t.reduce((m,L)=>{try{let p=o0(L);p&&m.push(p)}catch(p){_4||p.name==="MissingIcon"&&console.error(p)}return m},[]);return new Promise((m,L)=>{Promise.all(f).then(p=>{a0(p,()=>{s("active"),s("complete"),a("pending"),typeof e=="function"&&e(),i(),m()})}).catch(p=>{i(),L(p)})})}function I8(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;o0(c).then(l=>{l&&a0([l],e)})}function O8(c){return function(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:F1(e||{}),{mask:a}=l;return a&&(a=(a||{}).icon?a:F1(a||{})),c(s,r(r({},l),{},{mask:a}))}}var _8=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=R,symbol:s=!1,mask:a=null,maskId:n=null,title:o=null,titleId:t=null,classes:i=[],attributes:f={},styles:m={}}=e;if(!c)return;let{prefix:L,iconName:p,icon:C}=c;return K2(r({type:"icon"},c),()=>(J("beforeDOMElementCreation",{iconDefinition:c,params:e}),z.autoA11y&&(o?f["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(t||y2()):(f["aria-hidden"]="true",f.focusable="false")),Y1({icons:{main:I1(C),mask:a?I1(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:p,transform:r(r({},R),l),symbol:s,title:o,maskId:n,titleId:t,extra:{attributes:f,styles:m,classes:i}})))},B8={mixout(){return{icon:O8(_8)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=g4,c.nodeCallback=I8,c}}},provides(c){c.i2svg=function(e){let{node:l=g,callback:s=()=>{}}=e;return g4(l,s)},c.generateSvgReplacementMutation=function(e,l){let{iconName:s,title:a,titleId:n,prefix:o,transform:t,symbol:i,mask:f,maskId:m,extra:L}=l;return new Promise((p,C)=>{Promise.all([O1(s,o),f.iconName?O1(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(N=>{let[u,M]=N;p([e,Y1({icons:{main:u,mask:M},prefix:o,iconName:s,transform:t,symbol:i,maskId:m,title:a,titleId:n,extra:L,watchable:!0})])}).catch(C)})},c.generateAbstractIcon=function(e){let{children:l,attributes:s,main:a,transform:n,styles:o}=e,t=$2(o);t.length>0&&(s.style=t);let i;return V1(n)&&(i=W("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),l.push(i||a.icon),{children:l,attributes:s}}}},U8={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:l=[]}=e;return K2({type:"layer"},()=>{J("beforeDOMElementCreation",{assembler:c,params:e});let s=[];return c(a=>{Array.isArray(a)?a.map(n=>{s=s.concat(n.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers"),...l].join(" ")},children:s}]})}}}},H8={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:l=null,classes:s=[],attributes:a={},styles:n={}}=e;return K2({type:"counter",content:c},()=>(J("beforeDOMElementCreation",{content:c,params:e}),h8({content:c.toString(),title:l,extra:{attributes:a,styles:n,classes:["".concat(z.cssPrefix,"-layers-counter"),...s]}})))}}}},j8={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=R,title:s=null,classes:a=[],attributes:n={},styles:o={}}=e;return K2({type:"text",content:c},()=>(J("beforeDOMElementCreation",{content:c,params:e}),p4({content:c,transform:r(r({},R),l),title:s,extra:{attributes:n,styles:o,classes:["".concat(z.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(e,l){let{title:s,transform:a,extra:n}=l,o=null,t=null;if(E4){let i=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/i,t=f.height/i}return z.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,p4({content:e.innerHTML,width:o,height:t,transform:a,title:s,extra:n,watchable:!0})])}}},q8=new RegExp('"',"ug"),x4=[1105920,1112319],N4=r(r(r(r({},{FontAwesome:{normal:"fas",400:"fas"}}),z6),A6),N6),U1=Object.keys(N4).reduce((c,e)=>(c[e.toLowerCase()]=N4[e],c),{}),W8=Object.keys(U1).reduce((c,e)=>{let l=U1[e];return c[e]=l[900]||[...Object.entries(l)][0][1],c},{});function G8(c){let e=c.replace(q8,""),l=Z6(e,0),s=l>=x4[0]&&l<=x4[1],a=e.length===2?e[0]===e[1]:!1;return{value:E1(a?e[0]:e),isSecondary:s||a}}function V8(c,e){let l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),a=isNaN(s)?"normal":s;return(U1[l]||{})[a]||W8[l]}function b4(c,e){let l="".concat(T6).concat(e.replace(":","-"));return new Promise((s,a)=>{if(c.getAttribute(l)!==null)return s();let o=o2(c.children).filter(p=>p.getAttribute(v1)===e)[0],t=j.getComputedStyle(c,e),i=t.getPropertyValue("font-family"),f=i.match(F6),m=t.getPropertyValue("font-weight"),L=t.getPropertyValue("content");if(o&&!f)return c.removeChild(o),s();if(f&&L!=="none"&&L!==""){let p=t.getPropertyValue("content"),C=V8(i,m),{value:N,isSecondary:u}=G8(p),M=f[0].startsWith("FontAwesome"),b=$1(C,N),y=b;if(M){let h=a8(N);h.iconName&&h.prefix&&(b=h.iconName,C=h.prefix)}if(b&&!u&&(!o||o.getAttribute(j1)!==C||o.getAttribute(q1)!==y)){c.setAttribute(l,y),o&&c.removeChild(o);let h=R8(),{extra:P}=h;P.attributes[v1]=e,O1(b,C).then(B=>{let Z2=Y1(r(r({},h),{},{icons:{main:B,mask:c0()},prefix:C,iconName:y,extra:P,watchable:!0})),Q2=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(Q2,c.firstChild):c.appendChild(Q2),Q2.outerHTML=Z2.map(L0=>v2(L0)).join(`
`),c.removeAttribute(l),s()}).catch(a)}else s()}else s()})}function X8(c){return Promise.all([b4(c,"::before"),b4(c,"::after")])}function $8(c){return c.parentNode!==document.head&&!~P6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(v1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function y4(c){if(_)return new Promise((e,l)=>{let s=o2(c.querySelectorAll("*")).filter($8).map(X8),a=J1.begin("searchPseudoElements");n0(),Promise.all(s).then(()=>{a(),B1(),e()}).catch(()=>{a(),B1(),l()})})}var Y8={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=y4,c}}},provides(c){c.pseudoElements2svg=function(e){let{node:l=g}=e;z.searchPseudoElements&&y4(l)}}},w4=!1,J8={mixout(){return{dom:{unwatch(){n0(),w4=!0}}}},hooks(){return{bootstrap(){C4(D1("mutationObserverCallbacks",{}))},noAuto(){A8()},watch(c){let{observeMutationsRoot:e}=c;w4?B1():C4(D1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},S4=c=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((l,s)=>{let a=s.toLowerCase().split("-"),n=a[0],o=a.slice(1).join("-");if(n&&o==="h")return l.flipX=!0,l;if(n&&o==="v")return l.flipY=!0,l;if(o=parseFloat(o),isNaN(o))return l;switch(n){case"grow":l.size=l.size+o;break;case"shrink":l.size=l.size-o;break;case"left":l.x=l.x-o;break;case"right":l.x=l.x+o;break;case"up":l.y=l.y-o;break;case"down":l.y=l.y+o;break;case"rotate":l.rotate=l.rotate+o;break}return l},e)},K8={mixout(){return{parse:{transform:c=>S4(c)}}},hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-transform");return l&&(c.transform=S4(l)),c}}},provides(c){c.generateAbstractTransformGrouping=function(e){let{main:l,transform:s,containerWidth:a,iconWidth:n}=e,o={transform:"translate(".concat(a/2," 256)")},t="translate(".concat(s.x*32,", ").concat(s.y*32,") "),i="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),f="rotate(".concat(s.rotate," 0 0)"),m={transform:"".concat(t," ").concat(i," ").concat(f)},L={transform:"translate(".concat(n/2*-1," -256)")},p={outer:o,inner:m,path:L};return{tag:"g",attributes:r({},p.outer),children:[{tag:"g",attributes:r({},p.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:r(r({},l.icon.attributes),p.path)}]}]}}}},b1={x:0,y:0,width:"100%",height:"100%"};function v4(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function Z8(c){return c.tag==="g"?c.children:[c]}var Q8={hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-mask"),s=l?J2(l.split(" ").map(a=>a.trim())):c0();return s.prefix||(s.prefix=q()),c.mask=s,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(e){let{children:l,attributes:s,main:a,mask:n,maskId:o,transform:t}=e,{width:i,icon:f}=a,{width:m,icon:L}=n,p=G6({transform:t,containerWidth:m,iconWidth:i}),C={tag:"rect",attributes:r(r({},b1),{},{fill:"white"})},N=f.children?{children:f.children.map(v4)}:{},u={tag:"g",attributes:r({},p.inner),children:[v4(r({tag:f.tag,attributes:r(r({},f.attributes),p.path)},N))]},M={tag:"g",attributes:r({},p.outer),children:[u]},b="mask-".concat(o||y2()),y="clip-".concat(o||y2()),h={tag:"mask",attributes:r(r({},b1),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,M]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Z8(L)},h]};return l.push(P,{tag:"rect",attributes:r({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(b,")")},b1)}),{children:l,attributes:s}}}},c5={provides(c){let e=!1;j.matchMedia&&(e=j.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let l=[],s={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:r(r({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=r(r({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:r(r({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:r(r({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:r(r({},n),{},{values:"1;0;1;1;0;1;"})}),l.push(o),l.push({tag:"path",attributes:r(r({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:r(r({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||l.push({tag:"path",attributes:r(r({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:r(r({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},l5={hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-symbol"),s=l===null?!1:l===""?!0:l;return c.symbol=s,c}}}},e5=[$6,B8,U8,H8,j8,Y8,J8,K8,Q8,c5,l5];z8(e5,{mixoutsTo:E});var J7=E.noAuto,t0=E.config,K7=E.library,i0=E.dom,r0=E.parse,Z7=E.findIconDefinition,Q7=E.toHtml,f0=E.icon,cc=E.layer,s5=E.text,a5=E.counter;var n5=["*"],o5=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(l){t0.autoAddCss=l,this._autoAddCss=l}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(s){return new(s||c)};static \u0275prov=x({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),t5=(()=>{class c{definitions={};addIcons(...l){for(let s of l){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let a of s.icon[2])typeof a=="string"&&(this.definitions[s.prefix][a]=s)}}addIconPacks(...l){for(let s of l){let a=Object.keys(s).map(n=>s[n]);this.addIcons(...a)}}getIconDefinition(l,s){return l in this.definitions&&s in this.definitions[l]?this.definitions[l][s]:null}static \u0275fac=function(s){return new(s||c)};static \u0275prov=x({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),i5=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},r5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},z0=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),f5=c=>{let e=z0(c.rotate),l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:e,"fa-rotate-by":c.rotate!=null&&!e,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(s=>l[s]?s:null).filter(s=>s!=null)},Z1=new WeakSet,m0="fa-auto-css";function m5(c,e){if(!e.autoAddCss||Z1.has(c))return;if(c.getElementById(m0)!=null){e.autoAddCss=!1,Z1.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",m0),l.innerHTML=i0.css();let s=c.head.childNodes,a=null;for(let n=s.length-1;n>-1;n--){let o=s[n],t=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(a=o)}c.head.insertBefore(l,a),e.autoAddCss=!1,Z1.add(c)}var z5=c=>c.prefix!==void 0&&c.iconName!==void 0,L5=(c,e)=>z5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},p5=(()=>{class c{stackItemSize=k2("1x");size=k2();_effect=v3(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(s){return new(s||c)};static \u0275dir=g3({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),M5=(()=>{class c{size=k2();classes=i1(()=>{let l=this.size(),s=l?{[`fa-${l}`]:!0}:{};return c1(G({},s),{"fa-stack":!0})});static \u0275fac=function(s){return new(s||c)};static \u0275cmp=t1({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(s,a){s&2&&S3(a.classes())},inputs:{size:[1,"size"]},ngContentSelectors:n5,decls:1,vars:0,template:function(s,a){s&1&&(y3(),w3(0))},encapsulation:2,changeDetection:0})}return c})(),zc=(()=>{class c{icon=A.required();title=A();animation=A();mask=A();flip=A();size=A();pull=A();border=A();inverse=A();symbol=A();rotate=A();fixedWidth=A();transform=A();a11yRole=A();renderedIconHTML=i1(()=>{let l=this.icon();if(l==null&&this.config.fallbackIcon==null)return r5(),"";let s=this.findIconDefinition(l??this.config.fallbackIcon);if(!s)return"";let a=this.buildParams();m5(this.document,this.config);let n=f0(s,a);return this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))});document=S(v);sanitizer=S(C1);config=S(o5);iconLibrary=S(t5);stackItem=S(p5,{optional:!0});stack=S(M5,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}findIconDefinition(l){let s=L5(l,this.config.defaultPrefix);if("icon"in s)return s;let a=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return a??(i5(s),null)}buildParams(){let l=this.fixedWidth(),s={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof l=="boolean"?l:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},a=this.transform(),n=typeof a=="string"?r0.transform(a):a,o=this.mask(),t=o!=null?this.findIconDefinition(o):null,i={},f=this.a11yRole();f!=null&&(i.role=f);let m={};return s.rotate!=null&&!z0(s.rotate)&&(m["--fa-rotate-angle"]=`${s.rotate}`),{title:this.title(),transform:n,classes:f5(s),mask:t??void 0,symbol:this.symbol(),attributes:i,styles:m}}static \u0275fac=function(s){return new(s||c)};static \u0275cmp=t1({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,a){s&2&&(b3("innerHTML",a.renderedIconHTML(),C3),N3("title",a.title()))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(s,a){},encapsulation:2,changeDetection:0})}return c})();var Lc=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275mod=m2({type:c});static \u0275inj=i2({})}return c})();var uc={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]};var dc={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]};var Cc={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]};var hc={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]};var gc={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};export{v0 as a,J3 as b,c6 as c,W7 as d,zc as e,Lc as f,uc as g,dc as h,Cc as i,hc as j,gc as k};
