function k(){}function x(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function M(){return Object.create(null)}function j(t){t.forEach(w)}function S(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function B(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function D(t,n,e){t.$$.on_destroy.push(E(n,e))}function F(t,n,e,o){if(t){const c=y(t,n,e,o);return t[0](c)}}function y(t,n,e,o){return t[1]&&o?x(e.ctx.slice(),t[1](o(n))):e.ctx}function P(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const a=[],f=Math.max(n.dirty.length,c.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|c[u];return a}return n.dirty|c}return n.dirty}function U(t,n,e,o,c,a){if(c){const f=y(n,e,o,a);t.p(f,c)}}function C(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function G(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function H(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}let i;function _(t){i=t}function p(){if(!i)throw new Error("Function called outside component initialization");return i}function I(t){p().$$.on_mount.push(t)}function J(t){p().$$.after_update.push(t)}function K(t){p().$$.on_destroy.push(t)}function L(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const l=[],b=[];let s=[];const g=[],m=Promise.resolve();let d=!1;function v(){d||(d=!0,m.then(q))}function N(){return v(),m}function O(t){s.push(t)}const h=new Set;let r=0;function q(){if(r!==0)return;const t=i;do{try{for(;r<l.length;){const n=l[r];r++,_(n),z(n.$$)}}catch(n){throw l.length=0,r=0,n}for(_(null),l.length=0,r=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(l.length);for(;g.length;)g.pop()();d=!1,h.clear(),_(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Q(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{G as A,L as B,F as a,P as b,D as c,J as d,b as e,M as f,C as g,q as h,S as i,B as j,O as k,Q as l,i as m,k as n,I as o,_ as p,w as q,j as r,A as s,N as t,U as u,l as v,v as w,K as x,H as y,x as z};
