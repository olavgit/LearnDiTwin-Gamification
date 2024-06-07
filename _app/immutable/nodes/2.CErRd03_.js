import{s as Pe,x as No,y as bs,z as ic,a as La,u as Fa,g as Ua,d as Ba,A as $a,b as oc,c as Pn,o as ac}from"../chunks/scheduler.CIES8I8f.js";import{S as Ge,i as He,q as Mo,g as Ot,o as nt,p as ut,d as W,e as it,c as ot,a as pt,A as Oo,m as ja,w as oe,x as ae,y as le,z as ue,s as Vt,k as Ws,f as Dt,l as kt,h as z,u as fr,r as mr,B as Xs,t as xt,b as Lt,j as Sn}from"../chunks/index.DrEJGZEG.js";import{w as Ys}from"../chunks/index.DniSgY8y.js";function Fe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function lc(n,t){const e={},r={},s={$$scope:1};let o=n.length;for(;o--;){const a=n[o],u=t[o];if(u){for(const h in a)h in u||(r[h]=1);for(const h in u)s[h]||(e[h]=u[h],s[h]=1);n[o]=u}else for(const h in a)s[h]=1}for(const a in r)a in e||(e[a]=void 0);return e}var xo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},uc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,p=(o&3)<<4|u>>4;let E=(u&15)<<2|d>>6,R=d&63;h||(R=64,a||(E=64)),r.push(e[m],e[p],e[E],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(qa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):uc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const p=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||p==null)throw new cc;const E=o<<2|u>>4;if(r.push(E),d!==64){const R=u<<4&240|d>>2;if(r.push(R),p!==64){const C=d<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hc=function(n){const t=qa(n);return za.encodeByteArray(t,!0)},vr=function(n){return hc(n).replace(/\./g,"")},dc=function(n){try{return za.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=()=>fc().__FIREBASE_DEFAULTS__,pc=()=>{if(typeof process>"u"||typeof xo>"u")return;const n=xo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&dc(n[1]);return t&&JSON.parse(t)},Js=()=>{try{return mc()||pc()||gc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_c=n=>{var t,e;return(e=(t=Js())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},yc=n=>{const t=_c(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ka=()=>{var n;return(n=Js())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vr(JSON.stringify(e)),vr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ic(){var n;const t=(n=Js())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wc(){return!Ic()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ac(){try{return typeof indexedDB=="object"}catch{return!1}}function Rc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="FirebaseError";class Qe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Pc,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ga.prototype.create)}}class Ga{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Sc(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Qe(s,u,r)}}function Sc(n,t){return n.replace(bc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const bc=/\{\$([^}]+)}/g;function Cs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Lo(o)&&Lo(a)){if(!Cs(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Lo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n){return n&&n._delegate?n._delegate:n}class bn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ec;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Dc(t))try{this.getOrInitializeService({instanceIdentifier:ye})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ye){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ye){return this.instances.has(t)}getOptions(t=ye){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ye){return this.component?this.component.multipleInstances?t:ye:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vc(n){return n===ye?void 0:n}function Dc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Cc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const Nc={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Mc=G.INFO,Oc={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},xc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Oc[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ha{constructor(t){this.name=t,this._logLevel=Mc,this._logHandler=xc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const Lc=(n,t)=>t.some(e=>n instanceof e);let Fo,Uo;function Fc(){return Fo||(Fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uc(){return Uo||(Uo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qa=new WeakMap,Vs=new WeakMap,Wa=new WeakMap,Es=new WeakMap,Zs=new WeakMap;function Bc(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(re(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Qa.set(e,n)}).catch(()=>{}),Zs.set(t,n),t}function $c(n){if(Vs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Vs.set(n,t)}let Ds={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Vs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Wa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return re(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function jc(n){Ds=n(Ds)}function qc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(vs(this),t,...e);return Wa.set(r,t.sort?t.sort():[t]),re(r)}:Uc().includes(n)?function(...t){return n.apply(vs(this),t),re(Qa.get(this))}:function(...t){return re(n.apply(vs(this),t))}}function zc(n){return typeof n=="function"?qc(n):(n instanceof IDBTransaction&&$c(n),Lc(n,Fc())?new Proxy(n,Ds):n)}function re(n){if(n instanceof IDBRequest)return Bc(n);if(Es.has(n))return Es.get(n);const t=zc(n);return t!==n&&(Es.set(n,t),Zs.set(t,n)),t}const vs=n=>Zs.get(n);function Kc(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=re(a);return r&&a.addEventListener("upgradeneeded",h=>{r(re(a.result),h.oldVersion,h.newVersion,re(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Gc=["get","getKey","getAll","getAllKeys","count"],Hc=["put","add","delete","clear"],Ts=new Map;function Bo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ts.get(t))return Ts.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Hc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Gc.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return Ts.set(t,o),o}jc(n=>({...n,get:(t,e,r)=>Bo(t,e)||n.get(t,e,r),has:(t,e)=>!!Bo(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Wc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Wc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ks="@firebase/app",$o="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new Ha("@firebase/app"),Xc="@firebase/app-compat",Yc="@firebase/analytics-compat",Jc="@firebase/analytics",Zc="@firebase/app-check-compat",th="@firebase/app-check",eh="@firebase/auth",nh="@firebase/auth-compat",rh="@firebase/database",sh="@firebase/database-compat",ih="@firebase/functions",oh="@firebase/functions-compat",ah="@firebase/installations",lh="@firebase/installations-compat",uh="@firebase/messaging",ch="@firebase/messaging-compat",hh="@firebase/performance",dh="@firebase/performance-compat",fh="@firebase/remote-config",mh="@firebase/remote-config-compat",ph="@firebase/storage",gh="@firebase/storage-compat",_h="@firebase/firestore",yh="@firebase/vertexai-preview",Eh="@firebase/firestore-compat",vh="firebase",Th="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="[DEFAULT]",Ih={[ks]:"fire-core",[Xc]:"fire-core-compat",[Jc]:"fire-analytics",[Yc]:"fire-analytics-compat",[th]:"fire-app-check",[Zc]:"fire-app-check-compat",[eh]:"fire-auth",[nh]:"fire-auth-compat",[rh]:"fire-rtdb",[sh]:"fire-rtdb-compat",[ih]:"fire-fn",[oh]:"fire-fn-compat",[ah]:"fire-iid",[lh]:"fire-iid-compat",[uh]:"fire-fcm",[ch]:"fire-fcm-compat",[hh]:"fire-perf",[dh]:"fire-perf-compat",[fh]:"fire-rc",[mh]:"fire-rc-compat",[ph]:"fire-gcs",[gh]:"fire-gcs-compat",[_h]:"fire-fst",[Eh]:"fire-fst-compat",[yh]:"fire-vertex","fire-js":"fire-js",[vh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map,wh=new Map,Ms=new Map;function jo(n,t){try{n.container.addComponent(t)}catch(e){Te.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ir(n){const t=n.name;if(Ms.has(t))return Te.debug(`There were multiple attempts to register component ${t}.`),!1;Ms.set(t,n);for(const e of Tr.values())jo(e,n);for(const e of wh.values())jo(e,n);return!0}function Ah(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},se=new Ga("app","Firebase",Rh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw se.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=Th;function Xa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ns,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw se.create("bad-app-name",{appName:String(s)});if(e||(e=Ka()),!e)throw se.create("no-options");const o=Tr.get(s);if(o){if(Cs(e,o.options)&&Cs(r,o.config))return o;throw se.create("duplicate-app",{appName:s})}const a=new kc(s);for(const h of Ms.values())a.addComponent(h);const u=new Ph(e,r,a);return Tr.set(s,u),u}function bh(n=Ns){const t=Tr.get(n);if(!t&&n===Ns&&Ka())return Xa();if(!t)throw se.create("no-app",{appName:n});return t}function xe(n,t,e){var r;let s=(r=Ih[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Te.warn(u.join(" "));return}Ir(new bn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="firebase-heartbeat-database",Vh=1,Cn="firebase-heartbeat-store";let Is=null;function Ya(){return Is||(Is=Kc(Ch,Vh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Cn)}catch(e){console.warn(e)}}}}).catch(n=>{throw se.create("idb-open",{originalErrorMessage:n.message})})),Is}async function Dh(n){try{const e=(await Ya()).transaction(Cn),r=await e.objectStore(Cn).get(Ja(n));return await e.done,r}catch(t){if(t instanceof Qe)Te.warn(t.message);else{const e=se.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Te.warn(e.message)}}}async function qo(n,t){try{const r=(await Ya()).transaction(Cn,"readwrite");await r.objectStore(Cn).put(t,Ja(n)),await r.done}catch(e){if(e instanceof Qe)Te.warn(e.message);else{const r=se.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Te.warn(r.message)}}}function Ja(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=1024,Nh=30*24*60*60*1e3;class Mh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new xh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=zo();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Nh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zo(),{heartbeatsToSend:r,unsentEntries:s}=Oh(this._heartbeatsCache.heartbeats),o=vr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function zo(){return new Date().toISOString().substring(0,10)}function Oh(n,t=kh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ko(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ko(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class xh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ac()?Rc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Dh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return qo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return qo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ko(n){return vr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n){Ir(new bn("platform-logger",t=>new Qc(t),"PRIVATE")),Ir(new bn("heartbeat",t=>new Mh(t),"PRIVATE")),xe(ks,$o,n),xe(ks,$o,"esm2017"),xe("fire-js","")}Lh("");var Go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ve,Za;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,g){function y(){}y.prototype=g.prototype,v.D=g.prototype,v.prototype=new y,v.prototype.constructor=v,v.C=function(T,I,A){for(var _=Array(arguments.length-2),Kt=2;Kt<arguments.length;Kt++)_[Kt-2]=arguments[Kt];return g.prototype[I].apply(T,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,y){y||(y=0);var T=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)T[I]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(I=0;16>I;++I)T[I]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=v.g[0],y=v.g[1],I=v.g[2];var A=v.g[3],_=g+(A^y&(I^A))+T[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=A+(I^g&(y^I))+T[1]+3905402710&4294967295,A=g+(_<<12&4294967295|_>>>20),_=I+(y^A&(g^y))+T[2]+606105819&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(g^I&(A^g))+T[3]+3250441966&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(A^y&(I^A))+T[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(I^g&(y^I))+T[5]+1200080426&4294967295,A=g+(_<<12&4294967295|_>>>20),_=I+(y^A&(g^y))+T[6]+2821735955&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(g^I&(A^g))+T[7]+4249261313&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(A^y&(I^A))+T[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(I^g&(y^I))+T[9]+2336552879&4294967295,A=g+(_<<12&4294967295|_>>>20),_=I+(y^A&(g^y))+T[10]+4294925233&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(g^I&(A^g))+T[11]+2304563134&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(A^y&(I^A))+T[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(I^g&(y^I))+T[13]+4254626195&4294967295,A=g+(_<<12&4294967295|_>>>20),_=I+(y^A&(g^y))+T[14]+2792965006&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(g^I&(A^g))+T[15]+1236535329&4294967295,y=I+(_<<22&4294967295|_>>>10),_=g+(I^A&(y^I))+T[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(g^y))+T[6]+3225465664&4294967295,A=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(A^g))+T[11]+643717713&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(I^A))+T[0]+3921069994&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(I^A&(y^I))+T[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(g^y))+T[10]+38016083&4294967295,A=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(A^g))+T[15]+3634488961&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(I^A))+T[4]+3889429448&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(I^A&(y^I))+T[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(g^y))+T[14]+3275163606&4294967295,A=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(A^g))+T[3]+4107603335&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(I^A))+T[8]+1163531501&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(I^A&(y^I))+T[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(g^y))+T[2]+4243563512&4294967295,A=g+(_<<9&4294967295|_>>>23),_=I+(g^y&(A^g))+T[7]+1735328473&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(I^A))+T[12]+2368359562&4294967295,y=I+(_<<20&4294967295|_>>>12),_=g+(y^I^A)+T[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^I)+T[8]+2272392833&4294967295,A=g+(_<<11&4294967295|_>>>21),_=I+(A^g^y)+T[11]+1839030562&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^g)+T[14]+4259657740&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(y^I^A)+T[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^I)+T[4]+1272893353&4294967295,A=g+(_<<11&4294967295|_>>>21),_=I+(A^g^y)+T[7]+4139469664&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^g)+T[10]+3200236656&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(y^I^A)+T[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^I)+T[0]+3936430074&4294967295,A=g+(_<<11&4294967295|_>>>21),_=I+(A^g^y)+T[3]+3572445317&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^g)+T[6]+76029189&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(y^I^A)+T[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^I)+T[12]+3873151461&4294967295,A=g+(_<<11&4294967295|_>>>21),_=I+(A^g^y)+T[15]+530742520&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^g)+T[2]+3299628645&4294967295,y=I+(_<<23&4294967295|_>>>9),_=g+(I^(y|~A))+T[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~I))+T[7]+1126891415&4294967295,A=g+(_<<10&4294967295|_>>>22),_=I+(g^(A|~y))+T[14]+2878612391&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~g))+T[5]+4237533241&4294967295,y=I+(_<<21&4294967295|_>>>11),_=g+(I^(y|~A))+T[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~I))+T[3]+2399980690&4294967295,A=g+(_<<10&4294967295|_>>>22),_=I+(g^(A|~y))+T[10]+4293915773&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~g))+T[1]+2240044497&4294967295,y=I+(_<<21&4294967295|_>>>11),_=g+(I^(y|~A))+T[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~I))+T[15]+4264355552&4294967295,A=g+(_<<10&4294967295|_>>>22),_=I+(g^(A|~y))+T[6]+2734768916&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~g))+T[13]+1309151649&4294967295,y=I+(_<<21&4294967295|_>>>11),_=g+(I^(y|~A))+T[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~I))+T[11]+3174756917&4294967295,A=g+(_<<10&4294967295|_>>>22),_=I+(g^(A|~y))+T[2]+718787259&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~g))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+A&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var y=g-this.blockSize,T=this.B,I=this.h,A=0;A<g;){if(I==0)for(;A<=y;)s(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<g;)if(T[I++]=v.charCodeAt(A++),I==this.blockSize){s(this,T),I=0;break}}else for(;A<g;)if(T[I++]=v[A++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var y=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=y&255,y/=256;for(this.u(v),v=Array(16),g=y=0;4>g;++g)for(var T=0;32>T;T+=8)v[y++]=this.g[g]>>>T&255;return v};function o(v,g){var y=u;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=g(v)}function a(v,g){this.h=g;for(var y=[],T=!0,I=v.length-1;0<=I;I--){var A=v[I]|0;T&&A==g||(y[I]=A,T=!1)}this.g=y}var u={};function h(v){return-128<=v&&128>v?o(v,function(g){return new a([g|0],0>g?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return V(d(-v));for(var g=[],y=1,T=0;v>=y;T++)g[T]=v/y|0,y*=4294967296;return new a(g,0)}function m(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return V(m(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),T=p,I=0;I<v.length;I+=8){var A=Math.min(8,v.length-I),_=parseInt(v.substring(I,I+A),g);8>A?(A=d(Math.pow(g,A)),T=T.j(A).add(d(_))):(T=T.j(y),T=T.add(d(_)))}return T}var p=h(0),E=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-V(this).m();for(var v=0,g=1,y=0;y<this.g.length;y++){var T=this.i(y);v+=(0<=T?T:4294967296+T)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(k(this))return"-"+V(this).toString(v);for(var g=d(Math.pow(v,6)),y=this,T="";;){var I=j(y,g).g;y=$(y,I.j(g));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(v);if(y=I,C(y))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=$(this,v),k(v)?-1:C(v)?0:1};function V(v){for(var g=v.g.length,y=[],T=0;T<g;T++)y[T]=~v.g[T];return new a(y,~v.h).add(E)}n.abs=function(){return k(this)?V(this):this},n.add=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],T=0,I=0;I<=g;I++){var A=T+(this.i(I)&65535)+(v.i(I)&65535),_=(A>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);T=_>>>16,A&=65535,_&=65535,y[I]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(v,g){return v.add(V(g))}n.j=function(v){if(C(this)||C(v))return p;if(k(this))return k(v)?V(this).j(V(v)):V(V(this).j(v));if(k(v))return V(this.j(V(v)));if(0>this.l(R)&&0>v.l(R))return d(this.m()*v.m());for(var g=this.g.length+v.g.length,y=[],T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<v.g.length;I++){var A=this.i(T)>>>16,_=this.i(T)&65535,Kt=v.i(I)>>>16,Je=v.i(I)&65535;y[2*T+2*I]+=_*Je,O(y,2*T+2*I),y[2*T+2*I+1]+=A*Je,O(y,2*T+2*I+1),y[2*T+2*I+1]+=_*Kt,O(y,2*T+2*I+1),y[2*T+2*I+2]+=A*Kt,O(y,2*T+2*I+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new a(y,0)};function O(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function N(v,g){this.g=v,this.h=g}function j(v,g){if(C(g))throw Error("division by zero");if(C(v))return new N(p,p);if(k(v))return g=j(V(v),g),new N(V(g.g),V(g.h));if(k(g))return g=j(v,V(g)),new N(V(g.g),g.h);if(30<v.g.length){if(k(v)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var y=E,T=g;0>=T.l(v);)y=et(y),T=et(T);var I=X(y,1),A=X(T,1);for(T=X(T,2),y=X(y,2);!C(T);){var _=A.add(T);0>=_.l(v)&&(I=I.add(y),A=_),T=X(T,1),y=X(y,1)}return g=$(v,I.j(g)),new N(I,g)}for(I=p;0<=v.l(g);){for(y=Math.max(1,Math.floor(v.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=d(y),_=A.j(g);k(_)||0<_.l(v);)y-=T,A=d(y),_=A.j(g);C(A)&&(A=E),I=I.add(A),v=$(v,_)}return new N(I,v)}n.A=function(v){return j(this,v).h},n.and=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)&v.i(T);return new a(y,this.h&v.h)},n.or=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)|v.i(T);return new a(y,this.h|v.h)},n.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)^v.i(T);return new a(y,this.h^v.h)};function et(v){for(var g=v.g.length+1,y=[],T=0;T<g;T++)y[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(y,v.h)}function X(v,g){var y=g>>5;g%=32;for(var T=v.g.length-y,I=[],A=0;A<T;A++)I[A]=0<g?v.i(A+y)>>>g|v.i(A+y+1)<<32-g:v.i(A+y);return new a(I,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Za=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ve=a}).apply(typeof Go<"u"?Go:typeof self<"u"?self:typeof window<"u"?window:{});var ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tl,el,yn,nl,pr,Os,rl,sl,il;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ur=="object"&&ur];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in c))break t;c=c[w]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,f=!1,w={next:function(){if(!f&&c<i.length){var P=c++;return{value:l(P,i[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,c){return i.call.apply(i.bind,arguments)}function p(i,l,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),i.apply(l,w)}}return function(){return i.apply(l,arguments)}}function E(i,l,c){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:p,E.apply(null,arguments)}function R(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function C(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,w,P){for(var D=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)D[Y-2]=arguments[Y];return l.prototype[w].apply(f,D)}}function k(i){const l=i.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function V(i,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const w=i.length||0,P=f.length||0;i.length=w+P;for(let D=0;D<P;D++)i[w+D]=f[D]}else i.push(f)}}class ${constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(i){return/^[\s\xa0]*$/.test(i)}function N(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function j(i){return j[" "](i),i}j[" "]=function(){};var et=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function X(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function v(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function g(i){const l={};for(const c in i)l[c]=i[c];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(i,l){let c,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(c in f)i[c]=f[c];for(let P=0;P<y.length;P++)c=y[P],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function I(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function A(i){u.setTimeout(()=>{throw i},0)}function _(){var i=Wr;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Kt{constructor(){this.h=this.g=null}add(l,c){const f=Je.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Je=new $(()=>new Au,i=>i.reset());class Au{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Ze,tn=!1,Wr=new Kt,ki=()=>{const i=u.Promise.resolve(void 0);Ze=()=>{i.then(Ru)}};var Ru=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(c){A(c)}var l=Je;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}tn=!1};function Jt(){this.s=this.s,this.C=this.C}Jt.prototype.s=!1,Jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function yt(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var Pu=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function en(i,l){if(yt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(et){t:{try{j(l.nodeName);var w=!0;break t}catch{}w=!1}w||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Su[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&en.aa.h.call(this)}}C(en,yt);var Su={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Kn="closure_listenable_"+(1e6*Math.random()|0),bu=0;function Cu(i,l,c,f,w){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=w,this.key=++bu,this.da=this.fa=!1}function Gn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Hn(i){this.src=i,this.g={},this.h=0}Hn.prototype.add=function(i,l,c,f,w){var P=i.toString();i=this.g[P],i||(i=this.g[P]=[],this.h++);var D=Yr(i,l,f,w);return-1<D?(l=i[D],c||(l.fa=!1)):(l=new Cu(l,this.src,P,!!f,w),l.fa=c,i.push(l)),l};function Xr(i,l){var c=l.type;if(c in i.g){var f=i.g[c],w=Array.prototype.indexOf.call(f,l,void 0),P;(P=0<=w)&&Array.prototype.splice.call(f,w,1),P&&(Gn(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Yr(i,l,c,f){for(var w=0;w<i.length;++w){var P=i[w];if(!P.da&&P.listener==l&&P.capture==!!c&&P.ha==f)return w}return-1}var Jr="closure_lm_"+(1e6*Math.random()|0),Zr={};function Ni(i,l,c,f,w){if(Array.isArray(l)){for(var P=0;P<l.length;P++)Ni(i,l[P],c,f,w);return null}return c=xi(c),i&&i[Kn]?i.K(l,c,d(f)?!!f.capture:!!f,w):Vu(i,l,c,!1,f,w)}function Vu(i,l,c,f,w,P){if(!l)throw Error("Invalid event type");var D=d(w)?!!w.capture:!!w,Y=es(i);if(Y||(i[Jr]=Y=new Hn(i)),c=Y.add(l,c,f,D,P),c.proxy)return c;if(f=Du(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)Pu||(w=D),w===void 0&&(w=!1),i.addEventListener(l.toString(),f,w);else if(i.attachEvent)i.attachEvent(Oi(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Du(){function i(c){return l.call(i.src,i.listener,c)}const l=ku;return i}function Mi(i,l,c,f,w){if(Array.isArray(l))for(var P=0;P<l.length;P++)Mi(i,l[P],c,f,w);else f=d(f)?!!f.capture:!!f,c=xi(c),i&&i[Kn]?(i=i.i,l=String(l).toString(),l in i.g&&(P=i.g[l],c=Yr(P,c,f,w),-1<c&&(Gn(P[c]),Array.prototype.splice.call(P,c,1),P.length==0&&(delete i.g[l],i.h--)))):i&&(i=es(i))&&(l=i.g[l.toString()],i=-1,l&&(i=Yr(l,c,f,w)),(c=-1<i?l[i]:null)&&ts(c))}function ts(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Kn])Xr(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(Oi(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=es(l))?(Xr(c,i),c.h==0&&(c.src=null,l[Jr]=null)):Gn(i)}}}function Oi(i){return i in Zr?Zr[i]:Zr[i]="on"+i}function ku(i,l){if(i.da)i=!0;else{l=new en(l,this);var c=i.listener,f=i.ha||i.src;i.fa&&ts(i),i=c.call(f,l)}return i}function es(i){return i=i[Jr],i instanceof Hn?i:null}var ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function xi(i){return typeof i=="function"?i:(i[ns]||(i[ns]=function(l){return i.handleEvent(l)}),i[ns])}function Et(){Jt.call(this),this.i=new Hn(this),this.M=this,this.F=null}C(Et,Jt),Et.prototype[Kn]=!0,Et.prototype.removeEventListener=function(i,l,c,f){Mi(this,i,l,c,f)};function Pt(i,l){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new yt(l,i);else if(l instanceof yt)l.target=l.target||i;else{var w=l;l=new yt(f,i),T(l,w)}if(w=!0,c)for(var P=c.length-1;0<=P;P--){var D=l.g=c[P];w=Qn(D,f,!0,l)&&w}if(D=l.g=i,w=Qn(D,f,!0,l)&&w,w=Qn(D,f,!1,l)&&w,c)for(P=0;P<c.length;P++)D=l.g=c[P],w=Qn(D,f,!1,l)&&w}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],f=0;f<c.length;f++)Gn(c[f]);delete i.g[l],i.h--}}this.F=null},Et.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},Et.prototype.L=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function Qn(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var w=!0,P=0;P<l.length;++P){var D=l[P];if(D&&!D.da&&D.capture==c){var Y=D.listener,ft=D.ha||D.src;D.fa&&Xr(i.i,D),w=Y.call(ft,f)!==!1&&w}}return w&&!f.defaultPrevented}function Li(i,l,c){if(typeof i=="function")c&&(i=E(i,c));else if(i&&typeof i.handleEvent=="function")i=E(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function Fi(i){i.g=Li(()=>{i.g=null,i.i&&(i.i=!1,Fi(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Nu extends Jt{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Fi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nn(i){Jt.call(this),this.h=i,this.g={}}C(nn,Jt);var Ui=[];function Bi(i){X(i.g,function(l,c){this.g.hasOwnProperty(c)&&ts(l)},i),i.g={}}nn.prototype.N=function(){nn.aa.N.call(this),Bi(this)},nn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rs=u.JSON.stringify,Mu=u.JSON.parse,Ou=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function ss(){}ss.prototype.h=null;function $i(i){return i.h||(i.h=i.i())}function ji(){}var rn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function is(){yt.call(this,"d")}C(is,yt);function os(){yt.call(this,"c")}C(os,yt);var me={},qi=null;function Wn(){return qi=qi||new Et}me.La="serverreachability";function zi(i){yt.call(this,me.La,i)}C(zi,yt);function sn(i){const l=Wn();Pt(l,new zi(l))}me.STAT_EVENT="statevent";function Ki(i,l){yt.call(this,me.STAT_EVENT,i),this.stat=l}C(Ki,yt);function St(i){const l=Wn();Pt(l,new Ki(l,i))}me.Ma="timingevent";function Gi(i,l){yt.call(this,me.Ma,i),this.size=l}C(Gi,yt);function on(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function an(){this.g=!0}an.prototype.xa=function(){this.g=!1};function xu(i,l,c,f,w,P){i.info(function(){if(i.g)if(P)for(var D="",Y=P.split("&"),ft=0;ft<Y.length;ft++){var H=Y[ft].split("=");if(1<H.length){var vt=H[0];H=H[1];var Tt=vt.split("_");D=2<=Tt.length&&Tt[1]=="type"?D+(vt+"="+H+"&"):D+(vt+"=redacted&")}}else D=null;else D=P;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+l+`
`+c+`
`+D})}function Lu(i,l,c,f,w,P,D){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+l+`
`+c+`
`+P+" "+D})}function Ce(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Uu(i,c)+(f?" "+f:"")})}function Fu(i,l){i.info(function(){return"TIMEOUT: "+l})}an.prototype.info=function(){};function Uu(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var P=w[0];if(P!="noop"&&P!="stop"&&P!="close")for(var D=1;D<w.length;D++)w[D]=""}}}}return rs(c)}catch{return l}}var Xn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},as;function Yn(){}C(Yn,ss),Yn.prototype.g=function(){return new XMLHttpRequest},Yn.prototype.i=function(){return{}},as=new Yn;function Zt(i,l,c,f){this.j=i,this.i=l,this.l=c,this.R=f||1,this.U=new nn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qi}function Qi(){this.i=null,this.g="",this.h=!1}var Wi={},ls={};function us(i,l,c){i.L=1,i.v=er(Gt(l)),i.m=c,i.P=!0,Xi(i,null)}function Xi(i,l){i.F=Date.now(),Jn(i),i.A=Gt(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),co(c.i,"t",f),i.C=0,c=i.j.J,i.h=new Qi,i.g=Co(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Nu(E(i.Y,i,i.g),i.O)),l=i.U,c=i.g,f=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(Ui[0]=w.toString()),w=Ui);for(var P=0;P<w.length;P++){var D=Ni(c,w[P],f||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),sn(),xu(i.i,i.u,i.A,i.l,i.R,i.m)}Zt.prototype.ca=function(i){i=i.target;const l=this.M;l&&Ht(i)==3?l.j():this.Y(i)},Zt.prototype.Y=function(i){try{if(i==this.g)t:{const Tt=Ht(this.g);var l=this.g.Ba();const ke=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||yo(this.g)))){this.J||Tt!=4||l==7||(l==8||0>=ke?sn(3):sn(2)),cs(this);var c=this.g.Z();this.X=c;e:if(Yi(this)){var f=yo(this.g);i="";var w=f.length,P=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pe(this),ln(this);var D="";break e}this.h.i=new u.TextDecoder}for(l=0;l<w;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(P&&l==w-1)});f.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=c==200,Lu(this.i,this.u,this.A,this.l,this.R,Tt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var Y,ft=this.g;if((Y=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Y)){var H=Y;break e}}H=null}if(c=H)Ce(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hs(this,c);else{this.o=!1,this.s=3,St(12),pe(this),ln(this);break t}}if(this.P){c=!0;let Ut;for(;!this.J&&this.C<D.length;)if(Ut=Bu(this,D),Ut==ls){Tt==4&&(this.s=4,St(14),c=!1),Ce(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==Wi){this.s=4,St(15),Ce(this.i,this.l,D,"[Invalid Chunk]"),c=!1;break}else Ce(this.i,this.l,Ut,null),hs(this,Ut);if(Yi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||D.length!=0||this.h.h||(this.s=1,St(16),c=!1),this.o=this.o&&c,!c)Ce(this.i,this.l,D,"[Invalid Chunked Response]"),pe(this),ln(this);else if(0<D.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),_s(vt),vt.M=!0,St(11))}}else Ce(this.i,this.l,D,null),hs(this,D);Tt==4&&pe(this),this.o&&!this.J&&(Tt==4?Ro(this.j,this):(this.o=!1,Jn(this)))}else rc(this.g),c==400&&0<D.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),pe(this),ln(this)}}}catch{}finally{}};function Yi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Bu(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?ls:(c=Number(l.substring(c,f)),isNaN(c)?Wi:(f+=1,f+c>l.length?ls:(l=l.slice(f,f+c),i.C=f+c,l)))}Zt.prototype.cancel=function(){this.J=!0,pe(this)};function Jn(i){i.S=Date.now()+i.I,Ji(i,i.I)}function Ji(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=on(E(i.ba,i),l)}function cs(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Zt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Fu(this.i,this.A),this.L!=2&&(sn(),St(17)),pe(this),this.s=2,ln(this)):Ji(this,this.S-i)};function ln(i){i.j.G==0||i.J||Ro(i.j,i)}function pe(i){cs(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Bi(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function hs(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||ds(c.h,i))){if(!i.K&&ds(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)or(c),sr(c);else break t;gs(c),St(18)}}else c.za=w[1],0<c.za-c.T&&37500>w[2]&&c.F&&c.v==0&&!c.C&&(c.C=on(E(c.Za,c),6e3));if(1>=eo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else _e(c,11)}else if((i.K||c.g==i)&&or(c),!O(l))for(w=c.Da.g.parse(l),l=0;l<w.length;l++){let H=w[l];if(c.T=H[0],H=H[1],c.G==2)if(H[0]=="c"){c.K=H[1],c.ia=H[2];const vt=H[3];vt!=null&&(c.la=vt,c.j.info("VER="+c.la));const Tt=H[4];Tt!=null&&(c.Aa=Tt,c.j.info("SVER="+c.Aa));const ke=H[5];ke!=null&&typeof ke=="number"&&0<ke&&(f=1.5*ke,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Ut=i.g;if(Ut){const lr=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lr){var P=f.h;P.g||lr.indexOf("spdy")==-1&&lr.indexOf("quic")==-1&&lr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(fs(P,P.h),P.h=null))}if(f.D){const ys=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;ys&&(f.ya=ys,Z(f.I,f.D,ys))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var D=i;if(f.qa=bo(f,f.J?f.ia:null,f.W),D.K){no(f.h,D);var Y=D,ft=f.L;ft&&(Y.I=ft),Y.B&&(cs(Y),Jn(Y)),f.g=D}else wo(f);0<c.i.length&&ir(c)}else H[0]!="stop"&&H[0]!="close"||_e(c,7);else c.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?_e(c,7):ps(c):H[0]!="noop"&&c.l&&c.l.ta(H),c.v=0)}}sn(4)}catch{}}var $u=class{constructor(i,l){this.g=i,this.map=l}};function Zi(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function to(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function eo(i){return i.h?1:i.g?i.g.size:0}function ds(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function fs(i,l){i.g?i.g.add(l):i.h=l}function no(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Zi.prototype.cancel=function(){if(this.i=ro(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ro(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return k(i.i)}function ju(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,f=0;f<c;f++)l.push(i[f]);return l}l=[],c=0;for(f in i)l[c++]=i[f];return l}function qu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const f in i)l[c++]=f;return l}}}function so(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=qu(i),f=ju(i),w=f.length,P=0;P<w;P++)l.call(void 0,f[P],c&&c[P],i)}var io=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zu(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),w=null;if(0<=f){var P=i[c].substring(0,f);w=i[c].substring(f+1)}else P=i[c];l(P,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ge(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ge){this.h=i.h,Zn(this,i.j),this.o=i.o,this.g=i.g,tr(this,i.s),this.l=i.l;var l=i.i,c=new hn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),oo(this,c),this.m=i.m}else i&&(l=String(i).match(io))?(this.h=!1,Zn(this,l[1]||"",!0),this.o=un(l[2]||""),this.g=un(l[3]||"",!0),tr(this,l[4]),this.l=un(l[5]||"",!0),oo(this,l[6]||"",!0),this.m=un(l[7]||"")):(this.h=!1,this.i=new hn(null,this.h))}ge.prototype.toString=function(){var i=[],l=this.j;l&&i.push(cn(l,ao,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(cn(l,ao,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(cn(c,c.charAt(0)=="/"?Hu:Gu,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",cn(c,Wu)),i.join("")};function Gt(i){return new ge(i)}function Zn(i,l,c){i.j=c?un(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function tr(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function oo(i,l,c){l instanceof hn?(i.i=l,Xu(i.i,i.h)):(c||(l=cn(l,Qu)),i.i=new hn(l,i.h))}function Z(i,l,c){i.i.set(l,c)}function er(i){return Z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function un(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function cn(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,Ku),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Ku(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ao=/[#\/\?@]/g,Gu=/[#\?:]/g,Hu=/[#\?]/g,Qu=/[#\?@]/g,Wu=/#/g;function hn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function te(i){i.g||(i.g=new Map,i.h=0,i.i&&zu(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=hn.prototype,n.add=function(i,l){te(this),this.i=null,i=Ve(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function lo(i,l){te(i),l=Ve(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function uo(i,l){return te(i),l=Ve(i,l),i.g.has(l)}n.forEach=function(i,l){te(this),this.g.forEach(function(c,f){c.forEach(function(w){i.call(l,w,f,this)},this)},this)},n.na=function(){te(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const w=i[f];for(let P=0;P<w.length;P++)c.push(l[f])}return c},n.V=function(i){te(this);let l=[];if(typeof i=="string")uo(this,i)&&(l=l.concat(this.g.get(Ve(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return te(this),this.i=null,i=Ve(this,i),uo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function co(i,l,c){lo(i,l),0<c.length&&(i.i=null,i.g.set(Ve(i,l),k(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const P=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var w=P;D[f]!==""&&(w+="="+encodeURIComponent(String(D[f]))),i.push(w)}}return this.i=i.join("&")};function Ve(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Xu(i,l){l&&!i.j&&(te(i),i.i=null,i.g.forEach(function(c,f){var w=f.toLowerCase();f!=w&&(lo(this,f),co(this,w,c))},i)),i.j=l}function Yu(i,l){const c=new an;if(u.Image){const f=new Image;f.onload=R(ee,c,"TestLoadImage: loaded",!0,l,f),f.onerror=R(ee,c,"TestLoadImage: error",!1,l,f),f.onabort=R(ee,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(ee,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function Ju(i,l){const c=new an,f=new AbortController,w=setTimeout(()=>{f.abort(),ee(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(P=>{clearTimeout(w),P.ok?ee(c,"TestPingServer: ok",!0,l):ee(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),ee(c,"TestPingServer: error",!1,l)})}function ee(i,l,c,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(c)}catch{}}function Zu(){this.g=new Ou}function tc(i,l,c){const f=c||"";try{so(i,function(w,P){let D=w;d(w)&&(D=rs(w)),l.push(f+P+"="+encodeURIComponent(D))})}catch(w){throw l.push(f+"type="+encodeURIComponent("_badmap")),w}}function dn(i){this.l=i.Ub||null,this.j=i.eb||!1}C(dn,ss),dn.prototype.g=function(){return new nr(this.l,this.j)},dn.prototype.i=function(i){return function(){return i}}({});function nr(i,l){Et.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(nr,Et),n=nr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,mn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,mn(this)),this.g&&(this.readyState=3,mn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ho(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ho(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?fn(this):mn(this),this.readyState==3&&ho(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,fn(this))},n.Qa=function(i){this.g&&(this.response=i,fn(this))},n.ga=function(){this.g&&fn(this)};function fn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,mn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function mn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(nr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function fo(i){let l="";return X(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function ms(i,l,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=fo(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):Z(i,l,c))}function st(i){Et.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(st,Et);var ec=/^https?$/i,nc=["POST","PUT"];n=st.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():as.g(),this.v=this.o?$i(this.o):$i(as),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(P){mo(this,P);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)c.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())c.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(P=>P.toLowerCase()=="content-type"),w=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(nc,l,void 0))||f||w||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,D]of c)this.g.setRequestHeader(P,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_o(this),this.u=!0,this.g.send(i),this.u=!1}catch(P){mo(this,P)}};function mo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,po(i),rr(i)}function po(i){i.A||(i.A=!0,Pt(i,"complete"),Pt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Pt(this,"complete"),Pt(this,"abort"),rr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rr(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?go(this):this.bb())},n.bb=function(){go(this)};function go(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ht(i)!=4||i.Z()!=2)){if(i.u&&Ht(i)==4)Li(i.Ea,0,i);else if(Pt(i,"readystatechange"),Ht(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var f;if(f=D===0){var w=String(i.D).match(io)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),f=!ec.test(w?w.toLowerCase():"")}c=f}if(c)Pt(i,"complete"),Pt(i,"success");else{i.m=6;try{var P=2<Ht(i)?i.g.statusText:""}catch{P=""}i.l=P+" ["+i.Z()+"]",po(i)}}finally{rr(i)}}}}function rr(i,l){if(i.g){_o(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Pt(i,"ready");try{c.onreadystatechange=f}catch{}}}function _o(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ht(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Mu(l)}};function yo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function rc(i){const l={};i=(i.g&&2<=Ht(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(O(i[f]))continue;var c=I(i[f]);const w=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const P=l[w]||[];l[w]=P,P.push(c)}v(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function pn(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function Eo(i){this.Aa=0,this.i=[],this.j=new an,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pn("baseRetryDelayMs",5e3,i),this.cb=pn("retryDelaySeedMs",1e4,i),this.Wa=pn("forwardChannelMaxRetries",2,i),this.wa=pn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Zi(i&&i.concurrentRequestLimit),this.Da=new Zu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Eo.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,f){St(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=bo(this,null,this.W),ir(this)};function ps(i){if(vo(i),i.G==3){var l=i.U++,c=Gt(i.I);if(Z(c,"SID",i.K),Z(c,"RID",l),Z(c,"TYPE","terminate"),gn(i,c),l=new Zt(i,i.j,l),l.L=2,l.v=er(Gt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=Co(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Jn(l)}So(i)}function sr(i){i.g&&(_s(i),i.g.cancel(),i.g=null)}function vo(i){sr(i),i.u&&(u.clearTimeout(i.u),i.u=null),or(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function ir(i){if(!to(i.h)&&!i.s){i.s=!0;var l=i.Ga;Ze||ki(),tn||(Ze(),tn=!0),Wr.add(l,i),i.B=0}}function sc(i,l){return eo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=on(E(i.Ga,i,l),Po(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new Zt(this,this.j,i);let P=this.o;if(this.S&&(P?(P=g(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(w.H=P,P=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=Io(this,w,l),c=Gt(this.I),Z(c,"RID",i),Z(c,"CVER",22),this.D&&Z(c,"X-HTTP-Session-Id",this.D),gn(this,c),P&&(this.O?l="headers="+encodeURIComponent(String(fo(P)))+"&"+l:this.m&&ms(c,this.m,P)),fs(this.h,w),this.Ua&&Z(c,"TYPE","init"),this.P?(Z(c,"$req",l),Z(c,"SID","null"),w.T=!0,us(w,c,null)):us(w,c,l),this.G=2}}else this.G==3&&(i?To(this,i):this.i.length==0||to(this.h)||To(this))};function To(i,l){var c;l?c=l.l:c=i.U++;const f=Gt(i.I);Z(f,"SID",i.K),Z(f,"RID",c),Z(f,"AID",i.T),gn(i,f),i.m&&i.o&&ms(f,i.m,i.o),c=new Zt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Io(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),fs(i.h,c),us(c,f,l)}function gn(i,l){i.H&&X(i.H,function(c,f){Z(l,f,c)}),i.l&&so({},function(c,f){Z(l,f,c)})}function Io(i,l,c){c=Math.min(i.i.length,c);var f=i.l?E(i.l.Na,i.l,i):null;t:{var w=i.i;let P=-1;for(;;){const D=["count="+c];P==-1?0<c?(P=w[0].g,D.push("ofs="+P)):P=0:D.push("ofs="+P);let Y=!0;for(let ft=0;ft<c;ft++){let H=w[ft].g;const vt=w[ft].map;if(H-=P,0>H)P=Math.max(0,w[ft].g-100),Y=!1;else try{tc(vt,D,"req"+H+"_")}catch{f&&f(vt)}}if(Y){f=D.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,f}function wo(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Ze||ki(),tn||(Ze(),tn=!0),Wr.add(l,i),i.v=0}}function gs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=on(E(i.Fa,i),Po(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ao(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=on(E(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),sr(this),Ao(this))};function _s(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function Ao(i){i.g=new Zt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Gt(i.qa);Z(l,"RID","rpc"),Z(l,"SID",i.K),Z(l,"AID",i.T),Z(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&Z(l,"TO",i.ja),Z(l,"TYPE","xmlhttp"),gn(i,l),i.m&&i.o&&ms(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=er(Gt(l)),c.m=null,c.P=!0,Xi(c,i)}n.Za=function(){this.C!=null&&(this.C=null,sr(this),gs(this),St(19))};function or(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Ro(i,l){var c=null;if(i.g==l){or(i),_s(i),i.g=null;var f=2}else if(ds(i.h,l))c=l.D,no(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var w=i.B;f=Wn(),Pt(f,new Gi(f,c)),ir(i)}else wo(i);else if(w=l.s,w==3||w==0&&0<l.X||!(f==1&&sc(i,l)||f==2&&gs(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),w){case 1:_e(i,5);break;case 4:_e(i,10);break;case 3:_e(i,6);break;default:_e(i,2)}}}function Po(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function _e(i,l){if(i.j.info("Error code "+l),l==2){var c=E(i.fb,i),f=i.Xa;const w=!f;f=new ge(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Zn(f,"https"),er(f),w?Yu(f.toString(),c):Ju(f.toString(),c)}else St(2);i.G=0,i.l&&i.l.sa(l),So(i),vo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function So(i){if(i.G=0,i.ka=[],i.l){const l=ro(i.h);(l.length!=0||i.i.length!=0)&&(V(i.ka,l),V(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function bo(i,l,c){var f=c instanceof ge?Gt(c):new ge(c);if(f.g!="")l&&(f.g=l+"."+f.g),tr(f,f.s);else{var w=u.location;f=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;var P=new ge(null);f&&Zn(P,f),l&&(P.g=l),w&&tr(P,w),c&&(P.l=c),f=P}return c=i.D,l=i.ya,c&&l&&Z(f,c,l),Z(f,"VER",i.la),gn(i,f),f}function Co(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new st(new dn({eb:c})):new st(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vo(){}n=Vo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ar(){}ar.prototype.g=function(i,l){return new Nt(i,l)};function Nt(i,l){Et.call(this),this.g=new Eo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!O(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new De(this)}C(Nt,Et),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){ps(this.g)},Nt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=rs(i),i=c);l.i.push(new $u(l.Ya++,i)),l.G==3&&ir(l)},Nt.prototype.N=function(){this.g.l=null,delete this.j,ps(this.g),delete this.g,Nt.aa.N.call(this)};function Do(i){is.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}C(Do,is);function ko(){os.call(this),this.status=1}C(ko,os);function De(i){this.g=i}C(De,Vo),De.prototype.ua=function(){Pt(this.g,"a")},De.prototype.ta=function(i){Pt(this.g,new Do(i))},De.prototype.sa=function(i){Pt(this.g,new ko)},De.prototype.ra=function(){Pt(this.g,"b")},ar.prototype.createWebChannel=ar.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,il=function(){return new ar},sl=function(){return Wn()},rl=me,Os={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xn.NO_ERROR=0,Xn.TIMEOUT=8,Xn.HTTP_ERROR=6,pr=Xn,Hi.COMPLETE="complete",nl=Hi,ji.EventType=rn,rn.OPEN="a",rn.CLOSE="b",rn.ERROR="c",rn.MESSAGE="d",Et.prototype.listen=Et.prototype.K,yn=ji,el=dn,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,tl=st}).apply(typeof ur<"u"?ur:typeof self<"u"?self:typeof window<"u"?window:{});const Ho="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let We="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new Ha("@firebase/firestore");function _n(){return Ie.logLevel}function M(n,...t){if(Ie.logLevel<=G.DEBUG){const e=t.map(ti);Ie.debug(`Firestore (${We}): ${n}`,...e)}}function Xt(n,...t){if(Ie.logLevel<=G.ERROR){const e=t.map(ti);Ie.error(`Firestore (${We}): ${n}`,...e)}}function Ue(n,...t){if(Ie.logLevel<=G.WARN){const e=t.map(ti);Ie.warn(`Firestore (${We}): ${n}`,...e)}}function ti(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n="Unexpected state"){const t=`FIRESTORE (${We}) INTERNAL ASSERTION FAILED: `+n;throw Xt(t),new Error(t)}function J(n,t){n||F()}function B(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Qe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Fh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(wt.UNAUTHENTICATED))}shutdown(){}}class Uh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Bh{constructor(t){this.t=t,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new ol(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string"),new wt(t)}}class $h{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new $h(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(J(typeof e.token=="string"),this.R=e.token,new qh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Kh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function Q(n,t){return n<t?-1:n>t?1:0}function Be(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ht.fromMillis(Date.now())}static fromDate(t){return ht.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ht(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Q(this.nanoseconds,t.nanoseconds):Q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new ht(0,0))}static max(){return new U(new ht(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(),r===void 0?r=t.length-e:r>t.length-e&&F(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Vn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Vn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class tt extends Vn{construct(t,e,r){return new tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const Gh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Vn{construct(t,e,r){return new gt(t,e,r)}static isValidIdentifier(t){return Gh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new x(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new x(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gt(e)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(tt.fromString(t))}static fromName(t){return new L(tt.fromString(t).popFirst(5))}static empty(){return new L(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new tt(t.slice()))}}function Hh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new ht(e+1,0):new ht(e,r));return new ce(s,L.empty(),t)}function Qh(n){return new ce(n.readTime,n.key,-1)}class ce{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ce(U.min(),L.empty(),-1)}static max(){return new ce(U.max(),L.empty(),-1)}}function Wh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(n.documentKey,t.documentKey),e!==0?e:Q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Xh)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,r)=>{e(t)})}static reject(t){return new b((e,r)=>{r(t)})}static waitFor(t){return new b((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=b.resolve(!1);for(const r of t)e=e.next(s=>s?b.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new b((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new b((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Jh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Un(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ei.oe=-1;function Nr(n){return n==null}function wr(n){return n===0&&1/n==-1/0}function Zh(n){return typeof n=="number"&&Number.isInteger(n)&&!wr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Se(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ll(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||mt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,mt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cr(this.root,t,this.comparator,!1)}getReverseIterator(){return new cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cr(this.root,t,this.comparator,!0)}}class cr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class mt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??mt.RED,this.left=s??mt.EMPTY,this.right=o??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new mt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,r,s,o){return this}insert(t,e,r){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Wo(this.data.getIterator())}getIteratorFrom(t){return new Wo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof _t)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new _t(this.comparator);return e.data=t,e}}class Wo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.fields=t,t.sort(gt.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new _t(gt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Be(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ul("Invalid base64 string: "+o):o}}(t);return new Rt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Rt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const td=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function he(n){if(J(!!n),typeof n=="string"){let t=0;const e=td.exec(n);if(J(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function we(n){return typeof n=="string"?Rt.fromBase64String(n):Rt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ri(n){const t=n.mapValue.fields.__previous_value__;return ni(t)?ri(t):t}function Dn(n){const t=he(n.mapValue.fields.__local_write_time__.timestampValue);return new ht(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,e,r,s,o,a,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class kn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof kn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ae(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ni(n)?4:nd(n)?9007199254740991:10:F()}function qt(n,t){if(n===t)return!0;const e=Ae(n);if(e!==Ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Dn(n).isEqual(Dn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=he(s.timestampValue),u=he(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return we(s.bytesValue).isEqual(we(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return lt(s.geoPointValue.latitude)===lt(o.geoPointValue.latitude)&&lt(s.geoPointValue.longitude)===lt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return lt(s.integerValue)===lt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=lt(s.doubleValue),u=lt(o.doubleValue);return a===u?wr(a)===wr(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Be(n.arrayValue.values||[],t.arrayValue.values||[],qt);case 10:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Qo(a)!==Qo(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!qt(a[h],u[h])))return!1;return!0}(n,t);default:return F()}}function Nn(n,t){return(n.values||[]).find(e=>qt(e,t))!==void 0}function $e(n,t){if(n===t)return 0;const e=Ae(n),r=Ae(t);if(e!==r)return Q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=lt(o.integerValue||o.doubleValue),h=lt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Xo(n.timestampValue,t.timestampValue);case 4:return Xo(Dn(n),Dn(t));case 5:return Q(n.stringValue,t.stringValue);case 6:return function(o,a){const u=we(o),h=we(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=Q(u[d],h[d]);if(m!==0)return m}return Q(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=Q(lt(o.latitude),lt(a.latitude));return u!==0?u:Q(lt(o.longitude),lt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const u=o.values||[],h=a.values||[];for(let d=0;d<u.length&&d<h.length;++d){const m=$e(u[d],h[d]);if(m)return m}return Q(u.length,h.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===hr.mapValue&&a===hr.mapValue)return 0;if(o===hr.mapValue)return 1;if(a===hr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let p=0;p<h.length&&p<m.length;++p){const E=Q(h[p],m[p]);if(E!==0)return E;const R=$e(u[h[p]],d[m[p]]);if(R!==0)return R}return Q(h.length,m.length)}(n.mapValue,t.mapValue);default:throw F()}}function Xo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Q(n,t);const e=he(n),r=he(t),s=Q(e.seconds,r.seconds);return s!==0?s:Q(e.nanos,r.nanos)}function je(n){return xs(n)}function xs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=he(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return we(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return L.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=xs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${xs(e.fields[a])}`;return s+"}"}(n.mapValue):F()}function Ls(n){return!!n&&"integerValue"in n}function si(n){return!!n&&"arrayValue"in n}function Yo(n){return!!n&&"nullValue"in n}function Jo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gr(n){return!!n&&"mapValue"in n}function In(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Se(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=In(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=In(n.arrayValue.values[e]);return t}return Object.assign({},n)}function nd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!gr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=In(e)}setAll(t){let e=gt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=In(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());gr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];gr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Se(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Ct(In(this.value))}}function cl(n){const t=[];return Se(n.fields,(e,r)=>{const s=new gt([e]);if(gr(r)){const o=cl(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Mt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new At(t,0,U.min(),U.min(),U.min(),Ct.empty(),0)}static newFoundDocument(t,e,r,s){return new At(t,1,e,U.min(),r,s,0)}static newNoDocument(t,e){return new At(t,2,e,U.min(),U.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,U.min(),U.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e){this.position=t,this.inclusive=e}}function Zo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),e.key):r=$e(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ta(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!qt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,e="asc"){this.field=t,this.dir=e}}function rd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{}class ct extends hl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new id(t,e,r):e==="array-contains"?new ld(t,r):e==="in"?new ud(t,r):e==="not-in"?new cd(t,r):e==="array-contains-any"?new hd(t,r):new ct(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new od(t,r):new ad(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison($e(e,this.value)):e!==null&&Ae(this.value)===Ae(e)&&this.matchesComparison($e(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends hl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new zt(t,e)}matches(t){return dl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dl(n){return n.op==="and"}function fl(n){return sd(n)&&dl(n)}function sd(n){for(const t of n.filters)if(t instanceof zt)return!1;return!0}function Fs(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+je(n.value);if(fl(n))return n.filters.map(t=>Fs(t)).join(",");{const t=n.filters.map(e=>Fs(e)).join(",");return`${n.op}(${t})`}}function ml(n,t){return n instanceof ct?function(r,s){return s instanceof ct&&r.op===s.op&&r.field.isEqual(s.field)&&qt(r.value,s.value)}(n,t):n instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&ml(a,s.filters[u]),!0):!1}(n,t):void F()}function pl(n){return n instanceof ct?function(e){return`${e.field.canonicalString()} ${e.op} ${je(e.value)}`}(n):n instanceof zt?function(e){return e.op.toString()+" {"+e.getFilters().map(pl).join(" ,")+"}"}(n):"Filter"}class id extends ct{constructor(t,e,r){super(t,e,r),this.key=L.fromName(r.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class od extends ct{constructor(t,e){super(t,"in",e),this.keys=gl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ad extends ct{constructor(t,e){super(t,"not-in",e),this.keys=gl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function gl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>L.fromName(r.referenceValue))}class ld extends ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return si(e)&&Nn(e.arrayValue,this.value)}}class ud extends ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Nn(this.value.arrayValue,e)}}class cd extends ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(Nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Nn(this.value.arrayValue,e)}}class hd extends ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!si(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Nn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function ea(n,t=null,e=[],r=[],s=null,o=null,a=null){return new dd(n,t,e,r,s,o,a)}function ii(n){const t=B(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Fs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Nr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>je(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>je(r)).join(",")),t.ue=e}return t.ue}function oi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!rd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ml(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ta(n.startAt,t.startAt)&&ta(n.endAt,t.endAt)}function Us(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fd(n,t,e,r,s,o,a,u){return new Mr(n,t,e,r,s,o,a,u)}function Or(n){return new Mr(n)}function na(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function md(n){return n.collectionGroup!==null}function wn(n){const t=B(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new _t(gt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Rr(o,r))}),e.has(gt.keyField().canonicalString())||t.ce.push(new Rr(gt.keyField(),r))}return t.ce}function Bt(n){const t=B(n);return t.le||(t.le=pd(t,wn(n))),t.le}function pd(n,t){if(n.limitType==="F")return ea(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Rr(s.field,o)});const e=n.endAt?new Ar(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ar(n.startAt.position,n.startAt.inclusive):null;return ea(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Bs(n,t,e){return new Mr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function xr(n,t){return oi(Bt(n),Bt(t))&&n.limitType===t.limitType}function _l(n){return`${ii(Bt(n))}|lt:${n.limitType}`}function Ne(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>pl(s)).join(", ")}]`),Nr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>je(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>je(s)).join(",")),`Target(${r})`}(Bt(n))}; limitType=${n.limitType})`}function Lr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of wn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=Zo(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,wn(r),s)||r.endAt&&!function(a,u,h){const d=Zo(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,wn(r),s))}(n,t)}function gd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yl(n){return(t,e)=>{let r=!1;for(const s of wn(n)){const o=_d(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function _d(n,t,e){const r=n.field.isKeyField()?L.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?$e(h,d):F()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Se(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return ll(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new rt(L.comparator);function Yt(){return yd}const El=new rt(L.comparator);function En(...n){let t=El;for(const e of n)t=t.insert(e.key,e);return t}function vl(n){let t=El;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ee(){return An()}function Tl(){return An()}function An(){return new Xe(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ed=new rt(L.comparator),vd=new _t(L.comparator);function q(...n){let t=vd;for(const e of n)t=t.add(e);return t}const Td=new _t(Q);function Id(){return Td}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wr(t)?"-0":t}}function wl(n){return{integerValue:""+n}}function wd(n,t){return Zh(t)?wl(t):Il(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this._=void 0}}function Ad(n,t,e){return n instanceof Pr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ni(o)&&(o=ri(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Mn?Rl(n,t):n instanceof On?Pl(n,t):function(s,o){const a=Al(s,o),u=ra(a)+ra(s.Pe);return Ls(a)&&Ls(s.Pe)?wl(u):Il(s.serializer,u)}(n,t)}function Rd(n,t,e){return n instanceof Mn?Rl(n,t):n instanceof On?Pl(n,t):e}function Al(n,t){return n instanceof Sr?function(r){return Ls(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Pr extends Fr{}class Mn extends Fr{constructor(t){super(),this.elements=t}}function Rl(n,t){const e=Sl(t);for(const r of n.elements)e.some(s=>qt(s,r))||e.push(r);return{arrayValue:{values:e}}}class On extends Fr{constructor(t){super(),this.elements=t}}function Pl(n,t){let e=Sl(t);for(const r of n.elements)e=e.filter(s=>!qt(s,r));return{arrayValue:{values:e}}}class Sr extends Fr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ra(n){return lt(n.integerValue||n.doubleValue)}function Sl(n){return si(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Pd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Mn&&s instanceof Mn||r instanceof On&&s instanceof On?Be(r.elements,s.elements,qt):r instanceof Sr&&s instanceof Sr?qt(r.Pe,s.Pe):r instanceof Pr&&s instanceof Pr}(n.transform,t.transform)}class Sd{constructor(t,e){this.version=t,this.transformResults=e}}class $t{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new $t}static exists(t){return new $t(void 0,t)}static updateTime(t){return new $t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _r(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ur{}function bl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Vl(n.key,$t.none()):new Bn(n.key,n.data,$t.none());{const e=n.data,r=Ct.empty();let s=new _t(gt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new fe(n.key,r,new Mt(s.toArray()),$t.none())}}function bd(n,t,e){n instanceof Bn?function(s,o,a){const u=s.value.clone(),h=ia(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof fe?function(s,o,a){if(!_r(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=ia(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Cl(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Rn(n,t,e,r){return n instanceof Bn?function(o,a,u,h){if(!_r(o.precondition,a))return u;const d=o.value.clone(),m=oa(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof fe?function(o,a,u,h){if(!_r(o.precondition,a))return u;const d=oa(o.fieldTransforms,h,a),m=a.data;return m.setAll(Cl(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(n,t,e,r):function(o,a,u){return _r(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Cd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Al(r.transform,s||null);o!=null&&(e===null&&(e=Ct.empty()),e.set(r.field,o))}return e||null}function sa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Be(r,s,(o,a)=>Pd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Bn extends Ur{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fe extends Ur{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Cl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ia(n,t,e){const r=new Map;J(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Rd(a,u,e[s]))}return r}function oa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Ad(o,a,t))}return r}class Vl extends Ur{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vd extends Ur{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&bd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Rn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Rn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Tl();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=bl(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Be(this.mutations,t.mutations,(e,r)=>sa(e,r))&&Be(this.baseMutations,t.baseMutations,(e,r)=>sa(e,r))}}class ai{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){J(t.mutations.length===r.length);let s=function(){return Ed}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ai(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,K;function Md(n){switch(n){default:return F();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Dl(n){if(n===void 0)return Xt("GRPC error has no .code"),S.UNKNOWN;switch(n){case at.OK:return S.OK;case at.CANCELLED:return S.CANCELLED;case at.UNKNOWN:return S.UNKNOWN;case at.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case at.INTERNAL:return S.INTERNAL;case at.UNAVAILABLE:return S.UNAVAILABLE;case at.UNAUTHENTICATED:return S.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case at.NOT_FOUND:return S.NOT_FOUND;case at.ALREADY_EXISTS:return S.ALREADY_EXISTS;case at.PERMISSION_DENIED:return S.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case at.ABORTED:return S.ABORTED;case at.OUT_OF_RANGE:return S.OUT_OF_RANGE;case at.UNIMPLEMENTED:return S.UNIMPLEMENTED;case at.DATA_LOSS:return S.DATA_LOSS;default:return F()}}(K=at||(at={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new ve([4294967295,4294967295],0);function aa(n){const t=Od().encode(n),e=new Za;return e.update(t),new Uint8Array(e.digest())}function la(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ve([e,r],0),new ve([s,o],0)]}class li{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new vn(`Invalid padding: ${e}`);if(r<0)throw new vn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new vn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new vn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ve.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(ve.fromNumber(r)));return s.compare(xd)===1&&(s=new ve([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=aa(t),[r,s]=la(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new li(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=aa(t),[r,s]=la(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class vn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,$n.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Br(U.min(),s,new rt(Q),Yt(),q())}}class $n{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new $n(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class kl{constructor(t,e){this.targetId=t,this.me=e}}class Nl{constructor(t,e,r=Rt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ua{constructor(){this.fe=0,this.ge=ha(),this.pe=Rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=q(),e=q(),r=q();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:F()}}),new $n(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=ha()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ld{constructor(t){this.Le=t,this.Be=new Map,this.ke=Yt(),this.qe=ca(),this.Qe=new rt(Q)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:F()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Us(o))if(r===0){const a=new L(o.path);this.Ue(e,a,At.newNoDocument(a,U.min()))}else J(r===1);else{const a=this.Ye(e);if(a!==r){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=we(r).toUint8Array()}catch(h){if(h instanceof ul)return Ue("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new li(a,s,o)}catch(h){return Ue(h instanceof vn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&Us(u.target)){const h=new L(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,At.newNoDocument(h,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=q();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Br(t,e,this.Qe,this.ke,r);return this.ke=Yt(),this.qe=ca(),this.Qe=new rt(Q),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ua,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new _t(Q),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ua),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ca(){return new rt(L.comparator)}function ha(){return new rt(L.comparator)}const Fd={asc:"ASCENDING",desc:"DESCENDING"},Ud={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bd={and:"AND",or:"OR"};class $d{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function $s(n,t){return n.useProto3Json||Nr(t)?t:{value:t}}function br(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ml(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function jd(n,t){return br(n,t.toTimestamp())}function jt(n){return J(!!n),U.fromTimestamp(function(e){const r=he(e);return new ht(r.seconds,r.nanos)}(n))}function ui(n,t){return js(n,t).canonicalString()}function js(n,t){const e=function(s){return new tt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ol(n){const t=tt.fromString(n);return J(Bl(t)),t}function qs(n,t){return ui(n.databaseId,t.path)}function ws(n,t){const e=Ol(t);if(e.get(1)!==n.databaseId.projectId)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new L(Ll(e))}function xl(n,t){return ui(n.databaseId,t)}function qd(n){const t=Ol(n);return t.length===4?tt.emptyPath():Ll(t)}function zs(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ll(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function da(n,t,e){return{name:qs(n,t),fields:e.value.mapValue.fields}}function zd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(J(m===void 0||typeof m=="string"),Rt.fromBase64String(m||"")):(J(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Rt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?S.UNKNOWN:Dl(d.code);return new x(m,d.message||"")}(a);e=new Nl(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ws(n,r.document.name),o=jt(r.document.updateTime),a=r.document.createTime?jt(r.document.createTime):U.min(),u=new Ct({mapValue:{fields:r.document.fields}}),h=At.newFoundDocument(s,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];e=new yr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ws(n,r.document),o=r.readTime?jt(r.readTime):U.min(),a=At.newNoDocument(s,o),u=r.removedTargetIds||[];e=new yr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ws(n,r.document),o=r.removedTargetIds||[];e=new yr([],o,s,null)}else{if(!("filter"in t))return F();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Nd(s,o),u=r.targetId;e=new kl(u,a)}}return e}function Kd(n,t){let e;if(t instanceof Bn)e={update:da(n,t.key,t.value)};else if(t instanceof Vl)e={delete:qs(n,t.key)};else if(t instanceof fe)e={update:da(n,t.key,t.data),updateMask:tf(t.fieldMask)};else{if(!(t instanceof Vd))return F();e={verify:qs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Pr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Mn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof On)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Sr)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw F()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:jd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F()}(n,t.precondition)),e}function Gd(n,t){return n&&n.length>0?(J(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?jt(s.updateTime):jt(o);return a.isEqual(U.min())&&(a=jt(o)),new Sd(a,s.transformResults||[])}(e,t))):[]}function Hd(n,t){return{documents:[xl(n,t.path)]}}function Qd(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=xl(n,s);const o=function(d){if(d.length!==0)return Ul(zt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(E){return{field:Me(E.field),direction:Yd(E.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=$s(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function Wd(n){let t=qd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){J(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(p){const E=Fl(p);return E instanceof zt&&fl(E)?E.getFilters():[E]}(e.where));let a=[];e.orderBy&&(a=function(p){return p.map(E=>function(C){return new Rr(Oe(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(E))}(e.orderBy));let u=null;e.limit&&(u=function(p){let E;return E=typeof p=="object"?p.value:p,Nr(E)?null:E}(e.limit));let h=null;e.startAt&&(h=function(p){const E=!!p.before,R=p.values||[];return new Ar(R,E)}(e.startAt));let d=null;return e.endAt&&(d=function(p){const E=!p.before,R=p.values||[];return new Ar(R,E)}(e.endAt)),fd(t,s,a,o,u,"F",h,d)}function Xd(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Fl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Oe(e.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Oe(e.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Oe(e.unaryFilter.field);return ct.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Oe(e.unaryFilter.field);return ct.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(e){return ct.create(Oe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return zt.create(e.compositeFilter.filters.map(r=>Fl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(n):F()}function Yd(n){return Fd[n]}function Jd(n){return Ud[n]}function Zd(n){return Bd[n]}function Me(n){return{fieldPath:n.canonicalString()}}function Oe(n){return gt.fromServerFormat(n.fieldPath)}function Ul(n){return n instanceof ct?function(e){if(e.op==="=="){if(Jo(e.value))return{unaryFilter:{field:Me(e.field),op:"IS_NAN"}};if(Yo(e.value))return{unaryFilter:{field:Me(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jo(e.value))return{unaryFilter:{field:Me(e.field),op:"IS_NOT_NAN"}};if(Yo(e.value))return{unaryFilter:{field:Me(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Me(e.field),op:Jd(e.op),value:e.value}}}(n):n instanceof zt?function(e){const r=e.getFilters().map(s=>Ul(s));return r.length===1?r[0]:{compositeFilter:{op:Zd(e.op),filters:r}}}(n):F()}function tf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Bl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e,r,s,o=U.min(),a=U.min(),u=Rt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new ne(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ne(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ne(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ne(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t){this.ct=t}}function nf(n){const t=Wd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Bs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this._n=new sf}addToCollectionParentIndex(t,e){return this._n.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(ce.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(ce.min())}updateCollectionGroup(t,e,r){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class sf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new _t(tt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new _t(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new qe(0)}static Ln(){return new qe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.changes=new Xe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?b.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Rn(r.mutation,s,Mt.empty(),ht.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const s=Ee();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=En();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Ee();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=Yt();const a=An(),u=function(){return An()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof fe)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Rn(m.mutation,d,m.mutation.getFieldMask(),ht.now())):a.set(d.key,Mt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var p;return u.set(d,new af(m,(p=a.get(d))!==null&&p!==void 0?p:null))}),u))}recalculateAndSaveOverlays(t,e){const r=An();let s=new rt((a,u)=>a-u),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Mt.empty();m=u.applyToLocalView(d,m),r.set(h,m);const p=(s.get(u.batchId)||q()).add(h);s=s.insert(u.batchId,p)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,p=Tl();m.forEach(E=>{if(!o.has(E)){const R=bl(e.get(E),r.get(E));R!==null&&p.set(E,R),o=o.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,p))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):md(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):b.resolve(Ee());let u=-1,h=o;return a.next(d=>b.forEach(d,(m,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),o.get(m)?b.resolve():this.remoteDocumentCache.getEntry(t,m).next(E=>{h=h.insert(m,E)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,q())).next(m=>({batchId:u,changes:vl(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(r=>{let s=En();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=En();return this.indexManager.getCollectionParents(t,o).next(u=>b.forEach(u,h=>{const d=function(p,E){return new Mr(E,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((p,E)=>{a=a.insert(p,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,At.newInvalidDocument(m)))});let u=En();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&Rn(m.mutation,d,Mt.empty(),ht.now()),Lr(e,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return b.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:jt(s.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:nf(s.bundledQuery),readTime:jt(s.readTime)}}(e)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.overlays=new rt(L.comparator),this.hr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ee();return b.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),b.resolve()}getOverlaysForCollection(t,e,r){const s=Ee(),o=e.length+1,a=new L(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return b.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new rt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Ee(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=Ee(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return b.resolve(u)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new kd(e,r));let o=this.hr.get(e);o===void 0&&(o=q(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.Pr=new _t(dt.Ir),this.Tr=new _t(dt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new dt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new dt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new L(new tt([])),r=new dt(e,t),s=new dt(e,t+1),o=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new L(new tt([])),r=new dt(e,t),s=new dt(e,t+1);let o=q();return this.Tr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new dt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class dt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return L.comparator(t.key,e.key)||Q(t.pr,e.pr)}static Er(t,e){return Q(t.pr,e.pr)||L.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new _t(dt.Ir)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Dd(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.wr=this.wr.add(new dt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new dt(e,0),s=new dt(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],a=>{const u=this.Sr(a.pr);o.push(u)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new _t(Q);return e.forEach(s=>{const o=new dt(s,0),a=new dt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],u=>{r=r.add(u.pr)})}),b.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const a=new dt(new L(o),0);let u=new _t(Q);return this.wr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.pr)),!0)},a),b.resolve(this.Dr(u))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){J(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return b.forEach(e.mutations,s=>{const o=new dt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new dt(e,0),s=this.wr.firstAfterOrEqual(r);return b.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t){this.vr=t,this.docs=function(){return new rt(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return b.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Yt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():At.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Yt();const a=e.path,u=new L(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Wh(Qh(m),r)<=0||(s.has(m.key)||Lr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,r,s){F()}Fr(t,e){return b.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new ff(this)}getSize(t){return b.resolve(this.size)}}class ff extends of{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),b.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t){this.persistence=t,this.Mr=new Xe(e=>ii(e),oi),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ci,this.targetCount=0,this.Lr=qe.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),b.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new qe(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.qn(e),b.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),b.waitFor(o).next(()=>s)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return b.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),b.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return b.resolve(r)}containsKey(t,e){return b.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,e){this.Br={},this.overlays={},this.kr=new ei(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new mf(this),this.indexManager=new rf,this.remoteDocumentCache=function(s){return new df(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ef(e),this.$r=new uf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new cf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new hf(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const s=new gf(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return b.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class gf extends Yh{constructor(t){super(),this.currentSequenceNumber=t}}class hi{constructor(t){this.persistence=t,this.zr=new ci,this.jr=null}static Hr(t){return new hi(t)}get Jr(){if(this.jr)return this.jr;throw F()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),b.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),b.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Jr,r=>{const s=L.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,U.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return b.or([()=>b.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new di(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return wc()?8:Jh(Tc())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new _f;return this.Ji(t,e,a).next(u=>{if(o.result=u,this.Ui)return this.Yi(t,e,a,u.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(_n()<=G.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Ne(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),b.resolve()):(_n()<=G.DEBUG&&M("QueryEngine","Query:",Ne(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(_n()<=G.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Ne(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Bt(e))):b.resolve())}ji(t,e){if(na(e))return b.resolve(null);let r=Bt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Bs(e,null,"F"),r=Bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=q(...o);return this.zi.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.Zi(e,u);return this.Xi(e,d,a,h.readTime)?this.ji(t,Bs(e,null,"F")):this.es(t,d,e,h)}))})))}Hi(t,e,r,s){return na(e)||s.isEqual(U.min())?b.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,s)?b.resolve(null):(_n()<=G.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ne(e)),this.es(t,a,e,Hh(s,-1)).next(u=>u))})}Zi(t,e){let r=new _t(yl(t));return e.forEach((s,o)=>{Lr(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return _n()<=G.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Ne(e)),this.zi.getDocumentsMatchingQuery(t,e,ce.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new rt(Q),this.rs=new Xe(o=>ii(o),oi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new lf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function vf(n,t,e,r){return new Ef(n,t,e,r)}async function $l(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=q();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({us:d,removedBatchIds:a,addedBatchIds:u}))})})}function Tf(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){const p=d.batch,E=p.keys();let R=b.resolve();return E.forEach(C=>{R=R.next(()=>m.getEntry(h,C)).next(k=>{const V=d.docVersions.get(C);J(V!==null),k.version.compareTo(V)<0&&(p.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(h,p))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=q();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function jl(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function If(n,t){const e=B(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const u=[];t.targetChanges.forEach((m,p)=>{const E=s.get(p);if(!E)return;u.push(e.Qr.removeMatchingKeys(o,m.removedDocuments,p).next(()=>e.Qr.addMatchingKeys(o,m.addedDocuments,p)));let R=E.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(p)!==null?R=R.withResumeToken(Rt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),s=s.insert(p,R),function(k,V,$){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(E,R,m)&&u.push(e.Qr.updateTargetData(o,R))});let h=Yt(),d=q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(wf(o,a,t.documentUpdates).next(m=>{h=m.cs,d=m.ls})),!r.isEqual(U.min())){const m=e.Qr.getLastRemoteSnapshotVersion(o).next(p=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return b.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.ns=s,o))}function wf(n,t,e){let r=q(),s=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Yt();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):M("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{cs:a,ls:s}})}function Af(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Rf(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(o=>o?(s=o,b.resolve(s)):e.Qr.allocateTargetId(r).next(a=>(s=new ne(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Ks(n,t,e){const r=B(n),s=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Un(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function fa(n,t,e){const r=B(n);let s=U.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const p=B(h),E=p.rs.get(m);return E!==void 0?b.resolve(p.ns.get(E)):p.Qr.getTargetData(d,m)}(r,a,Bt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?o:q())).next(u=>(Pf(r,gd(t),u),{documents:u,hs:o})))}function Pf(n,t,e){let r=n.ss.get(t)||U.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class ma{constructor(){this.activeTargetIds=Id()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Sf{constructor(){this.no=new ma,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ma,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr=null;function As(){return dr===null?dr=function(){return 268435456+Math.round(2147483648*Math.random())}():dr++,"0x"+dr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class Df extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,a){const u=As(),h=this.vo(e,r.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${u}:`,h,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,a),this.Mo(e,h,d,s).then(m=>(M("RestConnection",`Received RPC '${e}' ${u}: `,m),m),m=>{throw Ue("RestConnection",`RPC '${e}' ${u} failed with error: `,m,"url: ",h,"request:",s),m})}xo(e,r,s,o,a,u){return this.Co(e,r,s,o,a)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+We}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const s=Cf[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=As();return new Promise((a,u)=>{const h=new tl;h.setWithCredentials(!0),h.listenOnce(nl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case pr.NO_ERROR:const m=h.getResponseJson();M(It,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case pr.TIMEOUT:M(It,`RPC '${t}' ${o} timed out`),u(new x(S.DEADLINE_EXCEEDED,"Request time out"));break;case pr.HTTP_ERROR:const p=h.getStatus();if(M(It,`RPC '${t}' ${o} failed with status:`,p,"response text:",h.getResponseText()),p>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const R=E==null?void 0:E.error;if(R&&R.status&&R.message){const C=function(V){const $=V.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf($)>=0?$:S.UNKNOWN}(R.status);u(new x(C,R.message))}else u(new x(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new x(S.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{M(It,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);M(It,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Oo(t,e,r){const s=As(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=il(),u=sl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.xmlHttpFactory=new el({})),this.Fo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");M(It,`Creating RPC '${t}' stream ${s}: ${m}`,h);const p=a.createWebChannel(m,h);let E=!1,R=!1;const C=new Vf({lo:V=>{R?M(It,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(E||(M(It,`Opening RPC '${t}' stream ${s} transport.`),p.open(),E=!0),M(It,`RPC '${t}' stream ${s} sending:`,V),p.send(V))},ho:()=>p.close()}),k=(V,$,O)=>{V.listen($,N=>{try{O(N)}catch(j){setTimeout(()=>{throw j},0)}})};return k(p,yn.EventType.OPEN,()=>{R||(M(It,`RPC '${t}' stream ${s} transport opened.`),C.mo())}),k(p,yn.EventType.CLOSE,()=>{R||(R=!0,M(It,`RPC '${t}' stream ${s} transport closed`),C.po())}),k(p,yn.EventType.ERROR,V=>{R||(R=!0,Ue(It,`RPC '${t}' stream ${s} transport errored:`,V),C.po(new x(S.UNAVAILABLE,"The operation could not be completed")))}),k(p,yn.EventType.MESSAGE,V=>{var $;if(!R){const O=V.data[0];J(!!O);const N=O,j=N.error||(($=N[0])===null||$===void 0?void 0:$.error);if(j){M(It,`RPC '${t}' stream ${s} received error:`,j);const et=j.status;let X=function(y){const T=at[y];if(T!==void 0)return Dl(T)}(et),v=j.message;X===void 0&&(X=S.INTERNAL,v="Unknown error status: "+et+" with message "+j.message),R=!0,C.po(new x(X,v)),p.close()}else M(It,`RPC '${t}' stream ${s} received:`,O),C.yo(O)}}),k(u,rl.STAT_EVENT,V=>{V.stat===Os.PROXY?M(It,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===Os.NOPROXY&&M(It,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function Rs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){return new $d(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e,r,s,o,a,u,h){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ql(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Xt(e.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new x(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kf extends zl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=zd(this.serializer,t),r=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?jt(a.readTime):U.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=zs(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=Us(h)?{documents:Hd(o,h)}:{query:Qd(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ml(o,a.resumeToken);const d=$s(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=br(o,a.snapshotVersion.toTimestamp());const d=$s(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=Xd(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=zs(this.serializer),e.removeTarget=t,this.i_(e)}}class Nf extends zl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(J(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Gd(t.writeResults,t.commitTime),r=jt(t.commitTime);return this.listener.A_(r,e)}return J(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=zs(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Kd(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,js(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(S.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.xo(t,js(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(S.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Of{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Xt(e),this.y_=!1):M("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{be(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=B(h);d.M_.add(4),await jn(d),d.N_.set("Unknown"),d.M_.delete(4),await jr(d)}(this))})}),this.N_=new Of(r,s)}}async function jr(n){if(be(n))for(const t of n.x_)await t(!0)}async function jn(n){for(const t of n.x_)await t(!1)}function Kl(n,t){const e=B(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),gi(e)?pi(e):Ye(e).Xo()&&mi(e,t))}function fi(n,t){const e=B(n),r=Ye(e);e.F_.delete(t),r.Xo()&&Gl(e,t),e.F_.size===0&&(r.Xo()?r.n_():be(e)&&e.N_.set("Unknown"))}function mi(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ye(n).P_(t)}function Gl(n,t){n.L_.xe(t),Ye(n).I_(t)}function pi(n){n.L_=new Ld({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ye(n).start(),n.N_.w_()}function gi(n){return be(n)&&!Ye(n).Zo()&&n.F_.size>0}function be(n){return B(n).M_.size===0}function Hl(n){n.L_=void 0}async function Lf(n){n.N_.set("Online")}async function Ff(n){n.F_.forEach((t,e)=>{mi(n,t)})}async function Uf(n,t){Hl(n),gi(n)?(n.N_.D_(t),pi(n)):n.N_.set("Unknown")}async function Bf(n,t,e){if(n.N_.set("Online"),t instanceof Nl&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.F_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.F_.delete(u),s.L_.removeTarget(u))}(n,t)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Cr(n,r)}else if(t instanceof yr?n.L_.Ke(t):t instanceof kl?n.L_.He(t):n.L_.We(t),!e.isEqual(U.min()))try{const r=await jl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.L_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.F_.get(d);m&&o.F_.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.F_.get(h);if(!m)return;o.F_.set(h,m.withResumeToken(Rt.EMPTY_BYTE_STRING,m.snapshotVersion)),Gl(o,h);const p=new ne(m.target,h,d,m.sequenceNumber);mi(o,p)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Cr(n,r)}}async function Cr(n,t,e){if(!Un(t))throw t;n.M_.add(1),await jn(n),n.N_.set("Offline"),e||(e=()=>jl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await jr(n)})}function Ql(n,t){return t().catch(e=>Cr(n,e,t))}async function qr(n){const t=B(n),e=de(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;$f(t);)try{const s=await Af(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,jf(t,s)}catch(s){await Cr(t,s)}Wl(t)&&Xl(t)}function $f(n){return be(n)&&n.v_.length<10}function jf(n,t){n.v_.push(t);const e=de(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Wl(n){return be(n)&&!de(n).Zo()&&n.v_.length>0}function Xl(n){de(n).start()}async function qf(n){de(n).V_()}async function zf(n){const t=de(n);for(const e of n.v_)t.d_(e.mutations)}async function Kf(n,t,e){const r=n.v_.shift(),s=ai.from(r,t,e);await Ql(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await qr(n)}async function Gf(n,t){t&&de(n).E_&&await async function(r,s){if(function(a){return Md(a)&&a!==S.ABORTED}(s.code)){const o=r.v_.shift();de(r).t_(),await Ql(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await qr(r)}}(n,t),Wl(n)&&Xl(n)}async function ga(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=be(e);e.M_.add(3),await jn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await jr(e)}async function Hf(n,t){const e=B(n);t?(e.M_.delete(2),await jr(e)):t||(e.M_.add(2),await jn(e),e.N_.set("Unknown"))}function Ye(n){return n.B_||(n.B_=function(e,r,s){const o=B(e);return o.f_(),new kf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:Lf.bind(null,n),To:Ff.bind(null,n),Ao:Uf.bind(null,n),h_:Bf.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),gi(n)?pi(n):n.N_.set("Unknown")):(await n.B_.stop(),Hl(n))})),n.B_}function de(n){return n.k_||(n.k_=function(e,r,s){const o=B(e);return o.f_(),new Nf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:qf.bind(null,n),Ao:Gf.bind(null,n),R_:zf.bind(null,n),A_:Kf.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await qr(n)):(await n.k_.stop(),n.v_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new _i(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yi(n,t){if(Xt("AsyncQueue",`${t}: ${n}`),Un(n))return new x(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.comparator=t?(e,r)=>t(e,r)||L.comparator(e.key,r.key):(e,r)=>L.comparator(e.key,r.key),this.keyedMap=En(),this.sortedSet=new rt(this.comparator)}static emptySet(t){return new Le(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Le)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Le;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.q_=new rt(L.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):F():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class ze{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new ze(t,e,Le.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Wf{constructor(){this.queries=new Xe(t=>_l(t),xr),this.onlineState="Unknown",this.z_=new Set}}async function Ei(n,t){const e=B(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(r=2):(o=new Qf,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=yi(a,`Initialization of query '${Ne(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Ti(e)}async function vi(n,t){const e=B(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Xf(n,t){const e=B(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.U_)u.H_(s)&&(r=!0);a.K_=s}}r&&Ti(e)}function Yf(n,t,e){const r=B(n),s=r.queries.get(t);if(s)for(const o of s.U_)o.onError(e);r.queries.delete(t)}function Ti(n){n.z_.forEach(t=>{t.next()})}var Gs,ya;(ya=Gs||(Gs={})).J_="default",ya.Cache="cache";class Ii{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ze(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=ze.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Gs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t){this.key=t}}class Jl{constructor(t){this.key=t}}class Jf{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=q(),this.mutatedKeys=q(),this.Ia=yl(t),this.Ta=new Le(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new _a,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,p)=>{const E=s.get(m),R=Lr(this.query,p)?p:null,C=!!E&&this.mutatedKeys.has(E.key),k=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;E&&R?E.data.isEqual(R.data)?C!==k&&(r.track({type:3,doc:R}),V=!0):this.Ra(E,R)||(r.track({type:2,doc:R}),V=!0,(h&&this.Ia(R,h)>0||d&&this.Ia(R,d)<0)&&(u=!0)):!E&&R?(r.track({type:0,doc:R}),V=!0):E&&!R&&(r.track({type:1,doc:E}),V=!0,(h||d)&&(u=!0)),V&&(R?(a=a.add(R),o=k?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ta:a,Aa:r,Xi:u,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((m,p)=>function(R,C){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return k(R)-k(C)}(m.type,p.type)||this.Ia(m.doc,p.doc)),this.Va(r),s=s!=null&&s;const u=e&&!s?this.ma():[],h=this.Pa.size===0&&this.current&&!s?1:0,d=h!==this.ha;return this.ha=h,a.length!==0||d?{snapshot:new ze(this.query,t.Ta,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:u}:{fa:u}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new _a,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=q(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Jl(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Yl(r))}),e}pa(t){this.la=t.hs,this.Pa=q();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return ze.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Zf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class tm{constructor(t){this.key=t,this.wa=!1}}class em{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Xe(u=>_l(u),xr),this.Da=new Map,this.Ca=new Set,this.va=new rt(L.comparator),this.Fa=new Map,this.Ma=new ci,this.xa={},this.Oa=new Map,this.Na=qe.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function nm(n,t,e=!0){const r=su(n);let s;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await Zl(r,t,e,!0),s}async function rm(n,t){const e=su(n);await Zl(e,t,!0,!1)}async function Zl(n,t,e,r){const s=await Rf(n.localStore,Bt(t)),o=s.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let u;return r&&(u=await sm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Kl(n.remoteStore,s),u}async function sm(n,t,e,r,s){n.Ba=(p,E,R)=>async function(k,V,$,O){let N=V.view.da($);N.Xi&&(N=await fa(k.localStore,V.query,!1).then(({documents:v})=>V.view.da(v,N)));const j=O&&O.targetChanges.get(V.targetId),et=O&&O.targetMismatches.get(V.targetId)!=null,X=V.view.applyChanges(N,k.isPrimaryClient,j,et);return va(k,V.targetId,X.fa),X.snapshot}(n,p,E,R);const o=await fa(n.localStore,t,!0),a=new Jf(t,o.hs),u=a.da(o.documents),h=$n.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);va(n,e,d.fa);const m=new Zf(t,e,a);return n.ba.set(t,m),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),d.snapshot}async function im(n,t,e){const r=B(n),s=r.ba.get(t),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(a=>!xr(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ks(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&fi(r.remoteStore,s.targetId),Hs(r,s.targetId)}).catch(Fn)):(Hs(r,s.targetId),await Ks(r.localStore,s.targetId,!0))}async function om(n,t){const e=B(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),fi(e.remoteStore,r.targetId))}async function am(n,t,e){const r=mm(n);try{const s=await function(a,u){const h=B(a),d=ht.now(),m=u.reduce((R,C)=>R.add(C.key),q());let p,E;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=Yt(),k=q();return h.os.getEntries(R,m).next(V=>{C=V,C.forEach(($,O)=>{O.isValidDocument()||(k=k.add($))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,C)).next(V=>{p=V;const $=[];for(const O of u){const N=Cd(O,p.get(O.key).overlayedDocument);N!=null&&$.push(new fe(O.key,N,cl(N.value.mapValue),$t.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,$,u)}).next(V=>{E=V;const $=V.applyToLocalDocumentSet(p,k);return h.documentOverlayCache.saveOverlays(R,V.batchId,$)})}).then(()=>({batchId:E.batchId,changes:vl(p)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.xa[a.currentUser.toKey()];d||(d=new rt(Q)),d=d.insert(u,h),a.xa[a.currentUser.toKey()]=d}(r,s.batchId,e),await qn(r,s.changes),await qr(r.remoteStore)}catch(s){const o=yi(s,"Failed to persist write");e.reject(o)}}async function tu(n,t){const e=B(n);try{const r=await If(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Fa.get(o);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?J(a.wa):s.removedDocuments.size>0&&(J(a.wa),a.wa=!1))}),await qn(e,r,t)}catch(r){await Fn(r)}}function Ea(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,a)=>{const u=a.view.j_(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=B(a);h.onlineState=u;let d=!1;h.queries.forEach((m,p)=>{for(const E of p.U_)E.j_(u)&&(d=!0)}),d&&Ti(h)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function lm(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),o=s&&s.key;if(o){let a=new rt(L.comparator);a=a.insert(o,At.newNoDocument(o,U.min()));const u=q().add(o),h=new Br(U.min(),new Map,new rt(Q),a,u);await tu(r,h),r.va=r.va.remove(o),r.Fa.delete(t),wi(r)}else await Ks(r.localStore,t,!1).then(()=>Hs(r,t,e)).catch(Fn)}async function um(n,t){const e=B(n),r=t.batch.batchId;try{const s=await Tf(e.localStore,t);nu(e,r,null),eu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await qn(e,s)}catch(s){await Fn(s)}}async function cm(n,t,e){const r=B(n);try{const s=await function(a,u){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(p=>(J(p!==null),m=p.keys(),h.mutationQueue.removeMutationBatch(d,p))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);nu(r,t,e),eu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await qn(r,s)}catch(s){await Fn(s)}}function eu(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function nu(n,t,e){const r=B(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function Hs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||ru(n,r)})}function ru(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(fi(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),wi(n))}function va(n,t,e){for(const r of e)r instanceof Yl?(n.Ma.addReference(r.key,t),hm(n,r)):r instanceof Jl?(M("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||ru(n,r.key)):F()}function hm(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(M("SyncEngine","New document in limbo: "+e),n.Ca.add(r),wi(n))}function wi(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new L(tt.fromString(t)),r=n.Na.next();n.Fa.set(r,new tm(e)),n.va=n.va.insert(e,r),Kl(n.remoteStore,new ne(Bt(Or(e.path)),r,"TargetPurposeLimboResolution",ei.oe))}}async function qn(n,t,e){const r=B(n),s=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((u,h)=>{a.push(r.Ba(h,t,e).then(d=>{if((d||e)&&r.isPrimaryClient){const m=d&&!d.fromCache;r.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(d){s.push(d);const m=di.Ki(h.targetId,d);o.push(m)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(h,d){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(d,E=>b.forEach(E.qi,R=>m.persistence.referenceDelegate.addReference(p,E.targetId,R)).next(()=>b.forEach(E.Qi,R=>m.persistence.referenceDelegate.removeReference(p,E.targetId,R)))))}catch(p){if(!Un(p))throw p;M("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const E=p.targetId;if(!p.fromCache){const R=m.ns.get(E),C=R.snapshotVersion,k=R.withLastLimboFreeSnapshotVersion(C);m.ns=m.ns.insert(E,k)}}}(r.localStore,o))}async function dm(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await $l(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(u=>{u.forEach(h=>{h.reject(new x(S.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await qn(e,r.us)}}function fm(n,t){const e=B(n),r=e.Fa.get(t);if(r&&r.wa)return q().add(r.key);{let s=q();const o=e.Da.get(t);if(!o)return s;for(const a of o){const u=e.ba.get(a);s=s.unionWith(u.view.Ea)}return s}}function su(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=tu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lm.bind(null,t),t.Sa.h_=Xf.bind(null,t.eventManager),t.Sa.ka=Yf.bind(null,t.eventManager),t}function mm(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=um.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cm.bind(null,t),t}class Ta{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=$r(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return vf(this.persistence,new yf,t.initialUser,this.serializer)}createPersistence(t){return new pf(hi.Hr,this.serializer)}createSharedClientState(t){return new Sf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pm{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ea(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dm.bind(null,this.syncEngine),await Hf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Wf}()}createDatastore(t){const e=$r(t.databaseInfo.databaseId),r=function(o){return new Df(o)}(t.databaseInfo);return function(o,a,u,h){return new Mf(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new xf(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Ea(this.syncEngine,e,0),function(){return pa.D()?new pa:new bf}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,m){const p=new em(s,o,a,u,h,d);return m&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=B(r);M("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await jn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Xt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=al.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{M("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(M("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=yi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ps(n,t){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $l(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ia(n,t){n.asyncQueue.verifyOperationInProgress();const e=await ym(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ga(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ga(t.remoteStore,s)),n._onlineComponents=t}function _m(n){return n.name==="FirebaseError"?n.code===S.FAILED_PRECONDITION||n.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ym(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ps(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!_m(e))throw e;Ue("Error using user provided cache. Falling back to memory cache: "+e),await Ps(n,new Ta)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Ps(n,new Ta);return n._offlineComponents}async function iu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Ia(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Ia(n,new pm))),n._onlineComponents}function Em(n){return iu(n).then(t=>t.syncEngine)}async function Vr(n){const t=await iu(n),e=t.eventManager;return e.onListen=nm.bind(null,t.syncEngine),e.onUnlisten=im.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=rm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=om.bind(null,t.syncEngine),e}function vm(n,t,e={}){const r=new Qt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new Ai({next:E=>{a.enqueueAndForget(()=>vi(o,p));const R=E.docs.has(u);!R&&E.fromCache?d.reject(new x(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&E.fromCache&&h&&h.source==="server"?d.reject(new x(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),p=new Ii(Or(u.path),m,{includeMetadataChanges:!0,ra:!0});return Ei(o,p)}(await Vr(n),n.asyncQueue,t,e,r)),r.promise}function Tm(n,t,e={}){const r=new Qt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new Ai({next:E=>{a.enqueueAndForget(()=>vi(o,p)),E.fromCache&&h.source==="server"?d.reject(new x(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),p=new Ii(u,m,{includeMetadataChanges:!0,ra:!0});return Ei(o,p)}(await Vr(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(n,t,e){if(!e)throw new x(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Im(n,t,e,r){if(t===!0&&r===!0)throw new x(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Aa(n){if(!L.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ra(n){if(L.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ri(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F()}function Ft(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ri(n);throw new x(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Im("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ou((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class zr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Fh;switch(r.type){case"firstParty":return new jh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=wa.get(e);r&&(M("ComponentProvider","Removing Datastore"),wa.delete(e),r.terminate())}(this),Promise.resolve()}}function wm(n,t,e,r={}){var s;const o=(n=Ft(n,zr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ue("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=wt.MOCK_USER;else{u=vc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new x(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new wt(d)}n._authCredentials=new Uh(new ol(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new zn(this.firestore,t,this._query)}}class bt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ie(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class ie extends zn{constructor(t,e,r){super(t,e,Or(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new L(t))}withConverter(t){return new ie(this.firestore,t,this._path)}}function Am(n,t,...e){if(n=Wt(n),au("collection","path",t),n instanceof zr){const r=tt.fromString(t,...e);return Ra(r),new ie(n,null,r)}{if(!(n instanceof bt||n instanceof ie))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return Ra(r),new ie(n.firestore,null,r)}}function Rm(n,t,...e){if(n=Wt(n),arguments.length===1&&(t=al.newId()),au("doc","path",t),n instanceof zr){const r=tt.fromString(t,...e);return Aa(r),new bt(n,null,new L(r))}{if(!(n instanceof bt||n instanceof ie))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return Aa(r),new bt(n.firestore,n instanceof ie?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ql(this,"async_queue_retry"),this.hu=()=>{const e=Rs();e&&M("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Rs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Rs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Qt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Un(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Xt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=_i.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&F()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}function Sa(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Re extends zr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Pm}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lu(this),this._firestoreClient.terminate()}}function Sm(n,t){const e=typeof n=="object"?n:bh(),r=typeof n=="string"?n:"(default)",s=Ah(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=yc("firestore");o&&wm(s,...o)}return s}function Kr(n){return n._firestoreClient||lu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function lu(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,m){return new ed(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,ou(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new gm(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ke(Rt.fromBase64String(t))}catch(e){throw new x(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ke(Rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Q(this._lat,t._lat)||Q(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=/^__.*__$/;class Cm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new fe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Bn(t,this.data,e,this.fieldTransforms)}}class uu{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new fe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function cu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class bi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new bi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Dr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(cu(this.fu)&&bm.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Vm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||$r(t)}Fu(t,e,r,s=!1){return new bi({fu:t,methodName:e,vu:r,path:gt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hu(n){const t=n._freezeSettings(),e=$r(n._databaseId);return new Vm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Dm(n,t,e,r,s,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);Ci("Data must be an object, but it was:",a,r);const u=du(r,a);let h,d;if(o.merge)h=new Mt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const p of o.mergeFields){const E=Qs(t,p,e);if(!a.contains(E))throw new x(S.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);mu(m,E)||m.push(E)}h=new Mt(m),d=a.fieldTransforms.filter(p=>h.covers(p.field))}else h=null,d=a.fieldTransforms;return new Cm(new Ct(u),h,d)}class Hr extends Pi{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Hr}}function km(n,t,e,r){const s=n.Fu(1,t,e);Ci("Data must be an object, but it was:",s,r);const o=[],a=Ct.empty();Se(r,(h,d)=>{const m=Vi(t,h,e);d=Wt(d);const p=s.Su(m);if(d instanceof Hr)o.push(m);else{const E=Qr(d,p);E!=null&&(o.push(m),a.set(m,E))}});const u=new Mt(o);return new uu(a,u,s.fieldTransforms)}function Nm(n,t,e,r,s,o){const a=n.Fu(1,t,e),u=[Qs(t,r,e)],h=[s];if(o.length%2!=0)throw new x(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)u.push(Qs(t,o[E])),h.push(o[E+1]);const d=[],m=Ct.empty();for(let E=u.length-1;E>=0;--E)if(!mu(d,u[E])){const R=u[E];let C=h[E];C=Wt(C);const k=a.Su(R);if(C instanceof Hr)d.push(R);else{const V=Qr(C,k);V!=null&&(d.push(R),m.set(R,V))}}const p=new Mt(d);return new uu(m,p,a.fieldTransforms)}function Qr(n,t){if(fu(n=Wt(n)))return Ci("Unsupported field value:",t,n),du(n,t);if(n instanceof Pi)return function(r,s){if(!cu(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Qr(u,s.bu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ht.fromDate(r);return{timestampValue:br(s.serializer,o)}}if(r instanceof ht){const o=new ht(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:br(s.serializer,o)}}if(r instanceof Si)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ke)return{bytesValue:Ml(s.serializer,r._byteString)};if(r instanceof bt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ui(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Ri(r)}`)}(n,t)}function du(n,t){const e={};return ll(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(n,(r,s)=>{const o=Qr(s,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function fu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ht||n instanceof Si||n instanceof Ke||n instanceof bt||n instanceof Pi)}function Ci(n,t,e){if(!fu(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Ri(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function Qs(n,t,e){if((t=Wt(t))instanceof Gr)return t._internalPath;if(typeof t=="string")return Vi(n,t);throw Dr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Mm=new RegExp("[~\\*/\\[\\]]");function Vi(n,t,e){if(t.search(Mm)>=0)throw Dr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Gr(...t.split("."))._internalPath}catch{throw Dr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Dr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(S.INVALID_ARGUMENT,u+n+h)}function mu(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Om(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(gu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Om extends pu{data(){return super.data()}}function gu(n,t){return typeof t=="string"?Vi(n,t):t instanceof Gr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xm{convertValue(t,e="none"){switch(Ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(we(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw F()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Se(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new Si(lt(t.latitude),lt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ri(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Dn(t));default:return null}}convertTimestamp(t){const e=he(t);return new ht(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=tt.fromString(t);J(Bl(r));const s=new kn(r.get(1),r.get(3)),o=new L(r.popFirst(5));return s.isEqual(e)||Xt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class yu extends pu{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Er(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(gu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Er extends yu{data(t={}){return super.data(t)}}class Eu{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Tn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Er(this._firestore,this._userDataWriter,r.key,r,new Tn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new Er(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Tn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Er(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Tn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:Fm(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Fm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(n){n=Ft(n,bt);const t=Ft(n.firestore,Re);return vm(Kr(t),n._key).then(e=>Tu(t,n,e))}class Di extends xm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ke(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bt(this.firestore,null,e)}}function Bm(n){n=Ft(n,zn);const t=Ft(n.firestore,Re),e=Kr(t),r=new Di(t);return _u(n._query),Tm(e,n._query).then(s=>new Eu(t,r,n,s))}function $m(n,t,e){n=Ft(n,bt);const r=Ft(n.firestore,Re),s=Lm(n.converter,t);return vu(r,[Dm(hu(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,$t.none())])}function jm(n,t,e,...r){n=Ft(n,bt);const s=Ft(n.firestore,Re),o=hu(s);let a;return a=typeof(t=Wt(t))=="string"||t instanceof Gr?Nm(o,"updateDoc",n._key,t,e,r):km(o,"updateDoc",n._key,t),vu(s,[a.toMutation(n._key,$t.exists(!0))])}function qm(n,...t){var e,r,s;n=Wt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Sa(t[a])||(o=t[a],a++);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Sa(t[a])){const p=t[a];t[a]=(e=p.next)===null||e===void 0?void 0:e.bind(p),t[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),t[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let h,d,m;if(n instanceof bt)d=Ft(n.firestore,Re),m=Or(n._key.path),h={next:p=>{t[a]&&t[a](Tu(d,n,p))},error:t[a+1],complete:t[a+2]};else{const p=Ft(n,zn);d=Ft(p.firestore,Re),m=p._query;const E=new Di(d);h={next:R=>{t[a]&&t[a](new Eu(d,E,p,R))},error:t[a+1],complete:t[a+2]},_u(n._query)}return function(E,R,C,k){const V=new Ai(k),$=new Ii(R,V,C);return E.asyncQueue.enqueueAndForget(async()=>Ei(await Vr(E),$)),()=>{V.$a(),E.asyncQueue.enqueueAndForget(async()=>vi(await Vr(E),$))}}(Kr(d),m,u,h)}function vu(n,t){return function(r,s){const o=new Qt;return r.asyncQueue.enqueueAndForget(async()=>am(await Em(r),s,o)),o.promise}(Kr(n),t)}function Tu(n,t,e){const r=e.docs.get(t._key),s=new Di(n);return new yu(n,s,t._key,r,new Tn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){We=s})(Sh),Ir(new bn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Re(new Bh(r.getProvider("auth-internal")),new zh(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kn(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),xe(Ho,"4.6.3",t),xe(Ho,"4.6.3","esm2017")})();const xn=Ys("splash"),Ln=Ys([]),Iu=Ys(null);function zm(n){return n.filter(Boolean).join(" ")}function Ss(n){let t,e,r,s,o;const a=n[6].default,u=La(a,n,n[5],null);let h=[{class:e="button-base "+n[3]},{href:n[1]},{target:n[2]},{role:"button"},{tabindex:"0"},n[4]],d={};for(let m=0;m<h.length;m+=1)d=bs(d,h[m]);return{c(){t=it(n[1]?"a":"button"),u&&u.c(),this.h()},l(m){t=ot(m,((n[1]?"a":"button")||"null").toUpperCase(),{class:!0,href:!0,target:!0,role:!0,tabindex:!0});var p=pt(t);u&&u.l(p),p.forEach(W),this.h()},h(){Oo(n[1]?"a":"button")(t,d)},m(m,p){Ot(m,t,p),u&&u.m(t,null),n[8](t),r=!0,s||(o=ja(t,"click",n[7]),s=!0)},p(m,p){u&&u.p&&(!r||p&32)&&Fa(u,a,m,m[5],r?Ba(a,m[5],p,null):Ua(m[5]),null),Oo(m[1]?"a":"button")(t,d=lc(h,[(!r||p&8&&e!==(e="button-base "+m[3]))&&{class:e},(!r||p&2)&&{href:m[1]},(!r||p&4)&&{target:m[2]},{role:"button"},{tabindex:"0"},p&16&&m[4]]))},i(m){r||(nt(u,m),r=!0)},o(m){ut(u,m),r=!1},d(m){m&&W(t),u&&u.d(m),n[8](null),s=!1,o()}}}function Km(n){let t=n[1]?"a":"button",e,r,s=(n[1]?"a":"button")&&Ss(n);return{c(){s&&s.c(),e=Mo()},l(o){s&&s.l(o),e=Mo()},m(o,a){s&&s.m(o,a),Ot(o,e,a),r=!0},p(o,[a]){o[1],t?Pe(t,o[1]?"a":"button")?(s.d(1),s=Ss(o),t=o[1]?"a":"button",s.c(),s.m(e.parentNode,e)):s.p(o,a):(s=Ss(o),t=o[1]?"a":"button",s.c(),s.m(e.parentNode,e))},i(o){r||(nt(s,o),r=!0)},o(o){ut(s,o),r=!1},d(o){o&&W(e),s&&s.d(o)}}}function Gm(n,t,e){const r=["el","href","target","class"];let s=No(t,r),{$$slots:o={},$$scope:a}=t,{el:u=void 0}=t,{href:h=void 0}=t,{target:d=void 0}=t,{class:m=""}=t;function p(R){$a.call(this,n,R)}function E(R){oc[R?"unshift":"push"](()=>{u=R,e(0,u)})}return n.$$set=R=>{t=bs(bs({},t),ic(R)),e(4,s=No(t,r)),"el"in R&&e(0,u=R.el),"href"in R&&e(1,h=R.href),"target"in R&&e(2,d=R.target),"class"in R&&e(3,m=R.class),"$$scope"in R&&e(5,a=R.$$scope)},[u,h,d,m,s,a,o,p,E]}class Hm extends Ge{constructor(t){super(),He(this,t,Gm,Km,Pe,{el:0,href:1,target:2,class:3})}}function Qm(n){let t;const e=n[5].default,r=La(e,n,n[7],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,o){r&&r.m(s,o),t=!0},p(s,o){r&&r.p&&(!t||o&128)&&Fa(r,e,s,s[7],t?Ba(e,s[7],o,null):Ua(s[7]),null)},i(s){t||(nt(r,s),t=!0)},o(s){ut(r,s),t=!1},d(s){r&&r.d(s)}}}function Wm(n){let t,e;return t=new Hm({props:{class:"button-main px-5 rounded-md py-3 "+n[2],href:n[0],target:n[1],$$slots:{default:[Qm]},$$scope:{ctx:n}}}),t.$on("click",n[6]),{c(){oe(t.$$.fragment)},l(r){ae(t.$$.fragment,r)},m(r,s){le(t,r,s),e=!0},p(r,[s]){const o={};s&4&&(o.class="button-main px-5 rounded-md py-3 "+r[2]),s&1&&(o.href=r[0]),s&2&&(o.target=r[1]),s&128&&(o.$$scope={dirty:s,ctx:r}),t.$set(o)},i(r){e||(nt(t.$$.fragment,r),e=!0)},o(r){ut(t.$$.fragment,r),e=!1},d(r){ue(t,r)}}}function Xm(n,t,e){let r,{$$slots:s={},$$scope:o}=t,{theme:a="blue"}=t,{href:u=void 0}=t,{target:h=void 0}=t,{class:d=""}=t;function m(p){$a.call(this,n,p)}return n.$$set=p=>{"theme"in p&&e(3,a=p.theme),"href"in p&&e(0,u=p.href),"target"in p&&e(1,h=p.target),"class"in p&&e(4,d=p.class),"$$scope"in p&&e(7,o=p.$$scope)},n.$$.update=()=>{n.$$.dirty&24&&e(2,r=zm([a==="blue"&&"bg-blue-500 text-white",a==="red"&&"bg-red-500 text-white",d]))},[u,h,r,a,d,s,m,o]}class kr extends Ge{constructor(t){super(),He(this,t,Xm,Wm,Pe,{theme:3,href:0,target:1,class:4})}}function ba(n,t,e){const r=n.slice();return r[2]=t[e],r}function Ym(n){let t=n[2].id+"",e,r;return{c(){e=xt(t),r=Vt()},l(s){e=Lt(s,t),r=Dt(s)},m(s,o){Ot(s,e,o),Ot(s,r,o)},p(s,o){o&1&&t!==(t=s[2].id+"")&&Sn(e,t)},d(s){s&&(W(e),W(r))}}}function Ca(n){let t,e;function r(){return n[1](n[2])}return t=new kr({props:{$$slots:{default:[Ym]},$$scope:{ctx:n}}}),t.$on("click",r),{c(){oe(t.$$.fragment)},l(s){ae(t.$$.fragment,s)},m(s,o){le(t,s,o),e=!0},p(s,o){n=s;const a={};o&33&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(s){e||(nt(t.$$.fragment,s),e=!0)},o(s){ut(t.$$.fragment,s),e=!1},d(s){ue(t,s)}}}function Jm(n){let t,e,r="Kies je stakeholder",s,o,a,u=Fe(n[0]),h=[];for(let m=0;m<u.length;m+=1)h[m]=Ca(ba(n,u,m));const d=m=>ut(h[m],1,1,()=>{h[m]=null});return{c(){t=it("div"),e=it("div"),e.textContent=r,s=Vt(),o=it("div");for(let m=0;m<h.length;m+=1)h[m].c();this.h()},l(m){t=ot(m,"DIV",{class:!0});var p=pt(t);e=ot(p,"DIV",{class:!0,"data-svelte-h":!0}),Ws(e)!=="svelte-1uqwzll"&&(e.textContent=r),s=Dt(p),o=ot(p,"DIV",{class:!0});var E=pt(o);for(let R=0;R<h.length;R+=1)h[R].l(E);E.forEach(W),p.forEach(W),this.h()},h(){kt(e,"class","font-bold text-2xl mb-4"),kt(o,"class","flex gap-x-2"),kt(t,"class","p-10 bg-yellow-100 shadow-lg flex flex-col")},m(m,p){Ot(m,t,p),z(t,e),z(t,s),z(t,o);for(let E=0;E<h.length;E+=1)h[E]&&h[E].m(o,null);a=!0},p(m,[p]){if(p&1){u=Fe(m[0]);let E;for(E=0;E<u.length;E+=1){const R=ba(m,u,E);h[E]?(h[E].p(R,p),nt(h[E],1)):(h[E]=Ca(R),h[E].c(),nt(h[E],1),h[E].m(o,null))}for(fr(),E=u.length;E<h.length;E+=1)d(E);mr()}},i(m){if(!a){for(let p=0;p<u.length;p+=1)nt(h[p]);a=!0}},o(m){h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)ut(h[p]);a=!1},d(m){m&&W(t),Xs(h,m)}}}function Zm(n,t,e){let r;return Pn(n,Ln,o=>e(0,r=o)),[r,o=>{Iu.set(o),xn.set("selected")}]}class tp extends Ge{constructor(t){super(),He(this,t,Zm,Jm,Pe,{})}}var ep="firebase",np="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe(ep,np,"app");const rp={apiKey:"AIzaSyDrTR0lVaKeBrqIlhJiwst2-KsEwBtE538",authDomain:"bob-game-90e47.firebaseapp.com",projectId:"bob-game-90e47",storageBucket:"bob-game-90e47.appspot.com",messagingSenderId:"880391810715",appId:"1:880391810715:web:f537e6f4c16b7412e7a03e",measurementId:"G-FL5LYSNQ76"},sp=Xa(rp),wu=Sm(sp);function Va(n,t,e){const r=n.slice();return r[9]=t[e],r[11]=e,r}function Da(n){let t,e,r,s,o,a,u=n[9]*1e3+"",h,d,m,p,E=n[9]*50+"",R,C,k,V;function $(...O){return n[3](n[11],...O)}return{c(){t=it("tr"),e=it("td"),r=it("input"),o=Vt(),a=it("td"),h=xt(u),d=Vt(),m=it("td"),p=xt("€"),R=xt(E),C=Vt(),this.h()},l(O){t=ot(O,"TR",{});var N=pt(t);e=ot(N,"TD",{});var j=pt(e);r=ot(j,"INPUT",{type:!0,min:!0,max:!0,class:!0}),j.forEach(W),o=Dt(N),a=ot(N,"TD",{});var et=pt(a);h=Lt(et,u),et.forEach(W),d=Dt(N),m=ot(N,"TD",{});var X=pt(m);p=Lt(X,"€"),R=Lt(X,E),X.forEach(W),C=Dt(N),N.forEach(W),this.h()},h(){kt(r,"type","range"),r.value=s=n[9],kt(r,"min","0"),kt(r,"max","10"),kt(r,"class","slider accent-blue-500 align-middle appearance-none w-full cursor-pointer h-1 bg-red-500")},m(O,N){Ot(O,t,N),z(t,e),z(e,r),z(t,o),z(t,a),z(a,h),z(t,d),z(t,m),z(m,p),z(m,R),z(t,C),k||(V=ja(r,"input",$),k=!0)},p(O,N){n=O,N&1&&s!==(s=n[9])&&(r.value=s),N&1&&u!==(u=n[9]*1e3+"")&&Sn(h,u),N&1&&E!==(E=n[9]*50+"")&&Sn(R,E)},d(O){O&&W(t),k=!1,V()}}}function ip(n){let t;return{c(){t=xt("Terug")},l(e){t=Lt(e,"Terug")},m(e,r){Ot(e,t,r)},d(e){e&&W(t)}}}function op(n){let t;return{c(){t=xt("Klaar")},l(e){t=Lt(e,"Klaar")},m(e,r){Ot(e,t,r)},d(e){e&&W(t)}}}function ap(n){let t,e,r=n[0].id+"",s,o,a,u,h="<tr><th>Schaal</th> <th>Geholpen mensen</th> <th>Kosten</th></tr>",d,m,p,E,R,C,k,V,$=Fe(n[0].values),O=[];for(let N=0;N<$.length;N+=1)O[N]=Da(Va(n,$,N));return R=new kr({props:{theme:"red",$$slots:{default:[ip]},$$scope:{ctx:n}}}),R.$on("click",n[4]),k=new kr({props:{$$slots:{default:[op]},$$scope:{ctx:n}}}),k.$on("click",n[5]),{c(){t=it("div"),e=it("div"),s=xt(r),o=Vt(),a=it("table"),u=it("thead"),u.innerHTML=h,d=Vt(),m=it("tbody");for(let N=0;N<O.length;N+=1)O[N].c();p=Vt(),E=it("div"),oe(R.$$.fragment),C=Vt(),oe(k.$$.fragment),this.h()},l(N){t=ot(N,"DIV",{class:!0});var j=pt(t);e=ot(j,"DIV",{class:!0});var et=pt(e);s=Lt(et,r),et.forEach(W),o=Dt(j),a=ot(j,"TABLE",{class:!0});var X=pt(a);u=ot(X,"THEAD",{"data-svelte-h":!0}),Ws(u)!=="svelte-1ny7qzm"&&(u.innerHTML=h),d=Dt(X),m=ot(X,"TBODY",{});var v=pt(m);for(let y=0;y<O.length;y+=1)O[y].l(v);v.forEach(W),X.forEach(W),p=Dt(j),E=ot(j,"DIV",{class:!0});var g=pt(E);ae(R.$$.fragment,g),C=Dt(g),ae(k.$$.fragment,g),g.forEach(W),j.forEach(W),this.h()},h(){kt(e,"class","font-bold text-2xl mb-4"),kt(a,"class","text-left"),kt(E,"class","flex gap-x-2"),kt(t,"class","p-10 bg-yellow-100 shadow-lg flex flex-col")},m(N,j){Ot(N,t,j),z(t,e),z(e,s),z(t,o),z(t,a),z(a,u),z(a,d),z(a,m);for(let et=0;et<O.length;et+=1)O[et]&&O[et].m(m,null);z(t,p),z(t,E),le(R,E,null),z(E,C),le(k,E,null),V=!0},p(N,[j]){if((!V||j&1)&&r!==(r=N[0].id+"")&&Sn(s,r),j&3){$=Fe(N[0].values);let v;for(v=0;v<$.length;v+=1){const g=Va(N,$,v);O[v]?O[v].p(g,j):(O[v]=Da(g),O[v].c(),O[v].m(m,null))}for(;v<O.length;v+=1)O[v].d(1);O.length=$.length}const et={};j&4096&&(et.$$scope={dirty:j,ctx:N}),R.$set(et);const X={};j&4096&&(X.$$scope={dirty:j,ctx:N}),k.$set(X)},i(N){V||(nt(R.$$.fragment,N),nt(k.$$.fragment,N),V=!0)},o(N){ut(R.$$.fragment,N),ut(k.$$.fragment,N),V=!1},d(N){N&&W(t),Xs(O,N),ue(R),ue(k)}}}function lp(n,t,e){let r,s,o;Pn(n,Ln,E=>e(2,s=E)),Pn(n,Iu,E=>e(6,o=E));const a=s.indexOf(o),u=(E,R)=>{const C=E.target;e(0,r.values[R]=C.valueAsNumber,r),h()},h=async()=>{try{const E=r.id,R=Rm(wu,"stakeholders",E);(await Um(R)).exists()?await jm(R,{values:r.values}):await $m(R,{values:r.values}),console.log("Document successfully updated!")}catch(E){console.error("Error updating document: ",E)}},d=(E,R)=>u(R,E),m=()=>{xn.set("splash")},p=()=>{xn.set("result")};return n.$$.update=()=>{n.$$.dirty&4&&e(0,r=s[a])},[r,u,s,d,m,p]}class up extends Ge{constructor(t){super(),He(this,t,lp,ap,Pe,{})}}function ka(n,t,e){const r=n.slice();return r[4]=t[e],r[6]=e,r}function Na(n){let t,e,r,s=n[6]+1+"",o,a,u,h=n[4]+"",d;return{c(){t=it("div"),e=it("span"),r=xt("Maatregel "),o=xt(s),a=xt(" heeft een gemiddelde schaal van"),u=Vt(),d=xt(h)},l(m){t=ot(m,"DIV",{});var p=pt(t);e=ot(p,"SPAN",{});var E=pt(e);r=Lt(E,"Maatregel "),o=Lt(E,s),a=Lt(E," heeft een gemiddelde schaal van"),E.forEach(W),u=Dt(p),d=Lt(p,h),p.forEach(W)},m(m,p){Ot(m,t,p),z(t,e),z(e,r),z(e,o),z(e,a),z(t,u),z(t,d)},p(m,p){p&1&&h!==(h=m[4]+"")&&Sn(d,h)},d(m){m&&W(t)}}}function cp(n){let t;return{c(){t=xt("Terug")},l(e){t=Lt(e,"Terug")},m(e,r){Ot(e,t,r)},d(e){e&&W(t)}}}function hp(n){let t,e,r="Resultaat",s,o,a,u,h,d=Fe(n[0]),m=[];for(let p=0;p<d.length;p+=1)m[p]=Na(ka(n,d,p));return u=new kr({props:{theme:"red",$$slots:{default:[cp]},$$scope:{ctx:n}}}),u.$on("click",n[2]),{c(){t=it("div"),e=it("div"),e.textContent=r,s=Vt();for(let p=0;p<m.length;p+=1)m[p].c();o=Vt(),a=it("div"),oe(u.$$.fragment),this.h()},l(p){t=ot(p,"DIV",{class:!0});var E=pt(t);e=ot(E,"DIV",{class:!0,"data-svelte-h":!0}),Ws(e)!=="svelte-17bvcbp"&&(e.textContent=r),s=Dt(E);for(let C=0;C<m.length;C+=1)m[C].l(E);o=Dt(E),a=ot(E,"DIV",{});var R=pt(a);ae(u.$$.fragment,R),R.forEach(W),E.forEach(W),this.h()},h(){kt(e,"class","font-bold text-2xl mb-4"),kt(t,"class","p-10 bg-blue-100 shadow-lg flex flex-col")},m(p,E){Ot(p,t,E),z(t,e),z(t,s);for(let R=0;R<m.length;R+=1)m[R]&&m[R].m(t,null);z(t,o),z(t,a),le(u,a,null),h=!0},p(p,[E]){if(E&1){d=Fe(p[0]);let C;for(C=0;C<d.length;C+=1){const k=ka(p,d,C);m[C]?m[C].p(k,E):(m[C]=Na(k),m[C].c(),m[C].m(t,o))}for(;C<m.length;C+=1)m[C].d(1);m.length=d.length}const R={};E&128&&(R.$$scope={dirty:E,ctx:p}),u.$set(R)},i(p){h||(nt(u.$$.fragment,p),h=!0)},o(p){ut(u.$$.fragment,p),h=!1},d(p){p&&W(t),Xs(m,p),ue(u)}}}function dp(n,t,e){let r;Pn(n,Ln,u=>e(1,r=u));let s=[];const o=()=>{let u=[],h=r.length;r.forEach(d=>{d.values.forEach((m,p)=>{u[p]||(u[p]=0),u[p]+=m})}),e(0,s=u.map(d=>d/h))},a=()=>{xn.set("splash")};return n.$$.update=()=>{n.$$.dirty&2&&r&&o()},[s,r,a]}class fp extends Ge{constructor(t){super(),He(this,t,dp,hp,Pe,{})}}function Ma(n){let t,e;return t=new tp({}),{c(){oe(t.$$.fragment)},l(r){ae(t.$$.fragment,r)},m(r,s){le(t,r,s),e=!0},i(r){e||(nt(t.$$.fragment,r),e=!0)},o(r){ut(t.$$.fragment,r),e=!1},d(r){ue(t,r)}}}function Oa(n){let t,e;return t=new up({}),{c(){oe(t.$$.fragment)},l(r){ae(t.$$.fragment,r)},m(r,s){le(t,r,s),e=!0},i(r){e||(nt(t.$$.fragment,r),e=!0)},o(r){ut(t.$$.fragment,r),e=!1},d(r){ue(t,r)}}}function xa(n){let t,e;return t=new fp({}),{c(){oe(t.$$.fragment)},l(r){ae(t.$$.fragment,r)},m(r,s){le(t,r,s),e=!0},i(r){e||(nt(t.$$.fragment,r),e=!0)},o(r){ut(t.$$.fragment,r),e=!1},d(r){ue(t,r)}}}function mp(n){let t,e,r,s,o=n[0]==="splash"&&Ma(),a=n[0]==="selected"&&Oa(),u=n[0]==="result"&&xa();return{c(){t=it("div"),o&&o.c(),e=Vt(),a&&a.c(),r=Vt(),u&&u.c(),this.h()},l(h){t=ot(h,"DIV",{class:!0});var d=pt(t);o&&o.l(d),e=Dt(d),a&&a.l(d),r=Dt(d),u&&u.l(d),d.forEach(W),this.h()},h(){kt(t,"class","h-screen w-full flex justify-center items-center")},m(h,d){Ot(h,t,d),o&&o.m(t,null),z(t,e),a&&a.m(t,null),z(t,r),u&&u.m(t,null),s=!0},p(h,[d]){h[0]==="splash"?o?d&1&&nt(o,1):(o=Ma(),o.c(),nt(o,1),o.m(t,e)):o&&(fr(),ut(o,1,1,()=>{o=null}),mr()),h[0]==="selected"?a?d&1&&nt(a,1):(a=Oa(),a.c(),nt(a,1),a.m(t,r)):a&&(fr(),ut(a,1,1,()=>{a=null}),mr()),h[0]==="result"?u?d&1&&nt(u,1):(u=xa(),u.c(),nt(u,1),u.m(t,null)):u&&(fr(),ut(u,1,1,()=>{u=null}),mr())},i(h){s||(nt(o),nt(a),nt(u),s=!0)},o(h){ut(o),ut(a),ut(u),s=!1},d(h){h&&W(t),o&&o.d(),a&&a.d(),u&&u.d()}}}function pp(n,t,e){let r;Pn(n,xn,u=>e(0,r=u));const s=Am(wu,"stakeholders"),o=async()=>{try{const h=(await Bm(s)).docs.map(d=>({id:d.id,values:d.data().values}));Ln.set(h)}catch(u){console.error("Error fetching document: ",u)}},a=()=>qm(s,u=>{const h=u.docs.map(d=>({id:d.id,values:d.data().values}));Ln.set(h)},u=>{console.log(`Encountered error: ${u}`)});return ac(()=>{o(),a()}),[r]}class Ip extends Ge{constructor(t){super(),He(this,t,pp,mp,Pe,{})}}export{Ip as component};
