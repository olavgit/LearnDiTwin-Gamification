import{s as R,n as P,r as q,b as A}from"../chunks/scheduler.CIES8I8f.js";import{S as D,i as M,e as b,s as j,c as v,a as L,b as k,g as O,d as x,f as p,h as U,j as m,l as V,t as N,k as G,m as H}from"../chunks/index.DEua1KE5.js";import{g as J,c as K,d as B,w as Q,a as W}from"../chunks/firebase.C5p3m4I-.js";function z(f){let t,r="Geselecteerd Bestand:",o,s,c=f[0].name+"",u;return{c(){t=b("p"),t.textContent=r,o=j(),s=b("pre"),u=N(c),this.h()},l(l){t=v(l,"P",{class:!0,"data-svelte-h":!0}),O(t)!=="svelte-25tshz"&&(t.textContent=r),o=k(l),s=v(l,"PRE",{});var a=L(s);u=G(a,c),a.forEach(x),this.h()},h(){p(t,"class","font-bold")},m(l,a){U(l,t,a),U(l,o,a),U(l,s,a),m(s,u)},p(l,a){a&1&&c!==(c=l[0].name+"")&&H(u,c)},d(l){l&&(x(t),x(o),x(s))}}}function X(f){let t,r,o,s,c="Selecteer een bestand",u,l,a,E="Upload",_,S,e=f[0]&&z(f);return{c(){t=b("div"),r=b("input"),o=j(),s=b("label"),s.textContent=c,u=j(),e&&e.c(),l=j(),a=b("button"),a.textContent=E,this.h()},l(i){t=v(i,"DIV",{class:!0});var n=L(t);r=v(n,"INPUT",{id:!0,class:!0,type:!0,accept:!0}),o=k(n),s=v(n,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),O(s)!=="svelte-16yxxv2"&&(s.textContent=c),u=k(n),e&&e.l(n),l=k(n),a=v(n,"BUTTON",{class:!0,"data-svelte-h":!0}),O(a)!=="svelte-5mz9wp"&&(a.textContent=E),n.forEach(x),this.h()},h(){p(r,"id","file-upload"),p(r,"class","hidden"),p(r,"type","file"),p(r,"accept","text/csv"),p(s,"for","file-upload"),p(s,"class","px-4 py-2 m-2 shadow-lg text-white bg-red-600 cursor-pointer"),p(a,"class","px-4 py-2 m-2 shadow-lg text-white bg-red-600 cursor-pointer"),p(t,"class","flex flex-col items-center justify-center h-screen drop-shadow-xl")},m(i,n){U(i,t,n),m(t,r),f[4](r),m(t,o),m(t,s),m(t,u),e&&e.m(t,null),m(t,l),m(t,a),_||(S=[V(r,"change",f[2]),V(a,"click",f[3])],_=!0)},p(i,[n]){i[0]?e?e.p(i,n):(e=z(i),e.c(),e.m(t,l)):e&&(e.d(1),e=null)},i:P,o:P,d(i){i&&x(t),f[4](null),e&&e.d(),_=!1,q(S)}}}function Y(f,t,r){let o=null,s,c=[],u=null;function l(e){var g,C;const i=e.target,n=(g=i.files)==null?void 0:g[0];if(!n)return;const d=(C=n.name.split(".").pop())==null?void 0:C.toLowerCase(),h=n.type;if(!["text/csv","application/vnd.ms-excel"].includes(h)||d!=="csv"){alert("Ongeldig of niet-ondersteund bestandstype. Upload een CSV-bestand."),i.value="";return}r(0,o=n)}function a(){if(!o){alert("Selecteer een bestand.");return}E(),alert("Upload successvol."),r(1,s.value="",s),r(0,o=null)}function E(){const e=new FileReader;e.onload=function(i){var n;try{const h=((n=i.target)==null?void 0:n.result).split("\r").filter(w=>w.trim()!=="");if(h.length<2){alert("CSV bevat geen data.");return}const y=h[0].split(";"),g=y.indexOf("naam"),C=y.indexOf("maximaal");if(g===-1||C===-1){alert("CSV-bestand bevat niet de vereiste headers.");return}c=[],u=null;for(let w=1;w<h.length;w++){const F=h[w].split(";").map(I=>I.trim().replace("/r",""));if(F[g])if(F[g].includes("budget"))u={maximaal:F[C]};else{const I={};for(let T=0;T<y.length;T++)I[y[T]]=F[T];c.push(I)}}}catch(d){alert("Er is een fout opgetreden tijdens het verwerken van het bestand."),console.error(d)}},e.onerror=function(){alert("Er is een fout opgetreden tijdens het lezen van het bestand.")},e.onloadend=function(){_()},o&&e.readAsText(o)}const _=async()=>{try{const e=c.map(d=>d.id),i=await J(K(B,"maatregelen")),n=Q(B);i.docs.forEach(d=>{e.includes(d.id)||n.delete(d.ref)}),c.forEach(d=>{const h=W(B,"maatregelen",d.id);n.set(h,d,{merge:!0})}),await n.commit(),console.log("Firestore updated successfully.")}catch(e){alert("Er is een fout opgetreden bij het opslaan van het bestand in Firestore."),console.error(e)}};function S(e){A[e?"unshift":"push"](()=>{s=e,r(1,s)})}return[o,s,l,a,S]}class te extends D{constructor(t){super(),M(this,t,Y,X,R,{})}}export{te as component};
