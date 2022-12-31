import"./modulepreload-polyfill-ec808ebb.js";import{S as se,i as ie,s as oe,e as L,a as y,n as J,d as S,o as ae,b,c as k,t as F,f as re,g as v,h as O,j as q,k as p,l as Q,m as U,p as de,q as K,r as H,u as B,v as _e,w as he,x as we,y as ye}from"./index-73213fef.js";function Z(i,e,t){const n=i.slice();return n[18]=e[t],n}function x(i){let e,t={length:i[6]},n=[];for(let s=0;s<t.length;s+=1)n[s]=$(Z(i,t,s));return{c(){e=b("div");for(let s=0;s<n.length;s+=1)n[s].c();k(e,"class","confetti-holder svelte-io58ff"),F(e,"rounded",i[9]),F(e,"cone",i[10]),F(e,"no-gravity",i[11])},m(s,u){y(s,e,u);for(let r=0;r<n.length;r+=1)n[r].m(e,null)},p(s,u){if(u&20991){t={length:s[6]};let r;for(r=0;r<t.length;r+=1){const a=Z(s,t,r);n[r]?n[r].p(a,u):(n[r]=$(a),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=t.length}u&512&&F(e,"rounded",s[9]),u&1024&&F(e,"cone",s[10]),u&2048&&F(e,"no-gravity",s[11])},d(s){s&&S(e),re(n,s)}}}function $(i){let e;return{c(){e=b("div"),k(e,"class","confetti svelte-io58ff"),v(e,"--fall-distance",i[8]),v(e,"--size",i[0]+"px"),v(e,"--color",i[14]()),v(e,"--skew",T(-45,45)+"deg,"+T(-45,45)+"deg"),v(e,"--rotation-xyz",T(-10,10)+", "+T(-10,10)+", "+T(-10,10)),v(e,"--rotation-deg",T(0,360)+"deg"),v(e,"--translate-y-multiplier",T(i[2][0],i[2][1])),v(e,"--translate-x-multiplier",T(i[1][0],i[1][1])),v(e,"--scale",.1*T(2,10)),v(e,"--transition-duration",i[4]?`calc(${i[3]}ms * var(--scale))`:`${i[3]}ms`),v(e,"--transition-delay",T(i[5][0],i[5][1])+"ms"),v(e,"--transition-iteration-count",i[4]?"infinite":i[7]),v(e,"--x-spread",1-i[12])},m(t,n){y(t,e,n)},p(t,n){n&256&&v(e,"--fall-distance",t[8]),n&1&&v(e,"--size",t[0]+"px"),n&4&&v(e,"--translate-y-multiplier",T(t[2][0],t[2][1])),n&2&&v(e,"--translate-x-multiplier",T(t[1][0],t[1][1])),n&24&&v(e,"--transition-duration",t[4]?`calc(${t[3]}ms * var(--scale))`:`${t[3]}ms`),n&32&&v(e,"--transition-delay",T(t[5][0],t[5][1])+"ms"),n&144&&v(e,"--transition-iteration-count",t[4]?"infinite":t[7]),n&4096&&v(e,"--x-spread",1-t[12])},d(t){t&&S(e)}}}function Se(i){let e,t=!i[13]&&x(i);return{c(){t&&t.c(),e=L()},m(n,s){t&&t.m(n,s),y(n,e,s)},p(n,[s]){n[13]?t&&(t.d(1),t=null):t?t.p(n,s):(t=x(n),t.c(),t.m(e.parentNode,e))},i:J,o:J,d(n){t&&t.d(n),n&&S(e)}}}function T(i,e){return Math.random()*(e-i)+i}function ve(i,e,t){let{size:n=10}=e,{x:s=[-.5,.5]}=e,{y:u=[.25,1]}=e,{duration:r=2e3}=e,{infinite:a=!1}=e,{delay:l=[0,50]}=e,{colorRange:c=[0,360]}=e,{colorArray:o=[]}=e,{amount:f=50}=e,{iterationCount:h=1}=e,{fallDistance:_="100px"}=e,{rounded:D=!1}=e,{cone:w=!1}=e,{noGravity:d=!1}=e,{xSpread:g=.15}=e,{destroyOnComplete:M=!0}=e,j=!1;ae(()=>{!M||a||h=="infinite"||setTimeout(()=>t(13,j=!0),(r+l[1])*h)});function N(){return o.length?o[Math.round(Math.random()*(o.length-1))]:`hsl(${Math.round(T(c[0],c[1]))}, 75%, 50%`}return i.$$set=m=>{"size"in m&&t(0,n=m.size),"x"in m&&t(1,s=m.x),"y"in m&&t(2,u=m.y),"duration"in m&&t(3,r=m.duration),"infinite"in m&&t(4,a=m.infinite),"delay"in m&&t(5,l=m.delay),"colorRange"in m&&t(15,c=m.colorRange),"colorArray"in m&&t(16,o=m.colorArray),"amount"in m&&t(6,f=m.amount),"iterationCount"in m&&t(7,h=m.iterationCount),"fallDistance"in m&&t(8,_=m.fallDistance),"rounded"in m&&t(9,D=m.rounded),"cone"in m&&t(10,w=m.cone),"noGravity"in m&&t(11,d=m.noGravity),"xSpread"in m&&t(12,g=m.xSpread),"destroyOnComplete"in m&&t(17,M=m.destroyOnComplete)},[n,s,u,r,a,l,f,h,_,D,w,d,g,j,N,c,o,M]}class ge extends se{constructor(e){super(),ie(this,e,ve,Se,oe,{size:0,x:1,y:2,duration:3,infinite:4,delay:5,colorRange:15,colorArray:16,amount:6,iterationCount:7,fallDistance:8,rounded:9,cone:10,noGravity:11,xSpread:12,destroyOnComplete:17})}}function ee(i,e,t){const n=i.slice();return n[8]=e[t],n}function be(i){let e,t,n,s,u,r,a;return t=new ge({props:{x:[-5,5],y:[0,.1],delay:[500,2e3],infinite:!0,duration:"5000",amount:"200",fallDistance:"100vh"}}),{c(){e=b("div"),he(t.$$.fragment),n=O(),s=b("h1"),s.textContent="done",u=O(),r=b("h2"),r.textContent="🎉🎉🎉",k(e,"class","confetti svelte-11291wm"),k(s,"class","title svelte-11291wm"),k(r,"class","title svelte-11291wm")},m(l,c){y(l,e,c),we(t,e,null),y(l,n,c),y(l,s,c),y(l,u,c),y(l,r,c),a=!0},p:J,i(l){a||(K(t.$$.fragment,l),a=!0)},o(l){U(t.$$.fragment,l),a=!1},d(l){l&&S(e),ye(t),l&&S(n),l&&S(s),l&&S(u),l&&S(r)}}}function ke(i){let e,t,n,s=i[0].shownSession.name+"",u,r,a,l,c;return{c(){e=b("h2"),e.textContent="current session",t=O(),n=b("h1"),u=H(s),r=O(),a=b("button"),a.textContent="done",k(e,"class","subtitle svelte-11291wm"),k(n,"class","title svelte-11291wm")},m(o,f){y(o,e,f),y(o,t,f),y(o,n,f),p(n,u),y(o,r,f),y(o,a,f),l||(c=Q(a,"click",i[4]),l=!0)},p(o,f){f&1&&s!==(s=o[0].shownSession.name+"")&&B(u,s)},i:J,o:J,d(o){o&&S(e),o&&S(t),o&&S(n),o&&S(r),o&&S(a),l=!1,c()}}}function Te(i){let e,t,n,s=i[2](i[0].shownSession)+"",u,r,a,l=i[0].shownSessionType==="next*"&&te(i);return{c(){e=b("h1"),e.textContent="next session",t=O(),n=b("h2"),u=H(s),r=O(),l&&l.c(),a=L(),k(e,"class","title svelte-11291wm"),k(n,"class","subtitle svelte-11291wm")},m(c,o){y(c,e,o),y(c,t,o),y(c,n,o),p(n,u),y(c,r,o),l&&l.m(c,o),y(c,a,o)},p(c,o){o&1&&s!==(s=c[2](c[0].shownSession)+"")&&B(u,s),c[0].shownSessionType==="next*"?l?l.p(c,o):(l=te(c),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},i:J,o:J,d(c){c&&S(e),c&&S(t),c&&S(n),c&&S(r),l&&l.d(c),c&&S(a)}}}function te(i){let e,t,n;return{c(){e=b("button"),e.textContent="start"},m(s,u){y(s,e,u),t||(n=Q(e,"click",i[3]),t=!0)},p:J,d(s){s&&S(e),t=!1,n()}}}function ne(i){let e,t,n,s,u,r=i[0].history,a=[];for(let l=0;l<r.length;l+=1)a[l]=le(ee(i,r,l));return{c(){e=b("div"),t=b("div"),n=H("↓"),u=O();for(let l=0;l<a.length;l+=1)a[l].c();k(t,"class",s=q(`scroll ${i[0].shownSessionType==="done"?"done-scroll":""}`)+" svelte-11291wm"),k(e,"class","prev svelte-11291wm")},m(l,c){y(l,e,c),p(e,t),p(t,n),p(e,u);for(let o=0;o<a.length;o+=1)a[o].m(e,null)},p(l,c){if(c&1&&s!==(s=q(`scroll ${l[0].shownSessionType==="done"?"done-scroll":""}`)+" svelte-11291wm")&&k(t,"class",s),c&5){r=l[0].history;let o;for(o=0;o<r.length;o+=1){const f=ee(l,r,o);a[o]?a[o].p(f,c):(a[o]=le(f),a[o].c(),a[o].m(e,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=r.length}},d(l){l&&S(e),re(a,l)}}}function le(i){let e,t,n=i[8].name+"",s,u,r,a=i[2](i[8],!0)+"",l,c;return{c(){e=b("div"),t=b("div"),s=H(n),u=O(),r=b("div"),l=H(a),c=O(),k(t,"class","name svelte-11291wm"),k(r,"class","time svelte-11291wm"),k(e,"class","prev-session svelte-11291wm")},m(o,f){y(o,e,f),p(e,t),p(t,s),p(e,u),p(e,r),p(r,l),p(e,c)},p(o,f){f&1&&n!==(n=o[8].name+"")&&B(s,n),f&1&&a!==(a=o[2](o[8],!0)+"")&&B(l,a)},d(o){o&&S(e)}}}function De(i){let e,t,n,s,u,r,a,l,c,o,f;const h=[Te,ke,be],_=[];function D(d,g){return d[0].shownSessionType==="next"||d[0].shownSessionType==="next*"?0:d[0].shownSessionType==="curr"?1:2}t=D(i),n=_[t]=h[t](i);let w=i[0].history.length>0&&ne(i);return{c(){e=b("div"),n.c(),s=O(),u=b("button"),u.textContent="📋 🔗",a=O(),w&&w.c(),l=L(),k(u,"class","copy svelte-11291wm"),k(e,"class",r=q(`screen ${i[0].shownSessionType==="done"?"done-screen":""} ${i[0].shownSessionType==="curr"&&i[0].shownSession.name!=="break 🏖"?"black-screen":""}`)+" svelte-11291wm")},m(d,g){y(d,e,g),_[t].m(e,null),p(e,s),p(e,u),y(d,a,g),w&&w.m(d,g),y(d,l,g),c=!0,o||(f=Q(u,"click",i[5]),o=!0)},p(d,[g]){let M=t;t=D(d),t===M?_[t].p(d,g):(_e(),U(_[M],1,1,()=>{_[M]=null}),de(),n=_[t],n?n.p(d,g):(n=_[t]=h[t](d),n.c()),K(n,1),n.m(e,s)),(!c||g&1&&r!==(r=q(`screen ${d[0].shownSessionType==="done"?"done-screen":""} ${d[0].shownSessionType==="curr"&&d[0].shownSession.name!=="break 🏖"?"black-screen":""}`)+" svelte-11291wm"))&&k(e,"class",r),d[0].history.length>0?w?w.p(d,g):(w=ne(d),w.c(),w.m(l.parentNode,l)):w&&(w.d(1),w=null)},i(d){c||(K(n),c=!0)},o(d){U(n),c=!1},d(d){d&&S(e),_[t].d(),d&&S(a),w&&w.d(d),d&&S(l),o=!1,f()}}}function pe(i,e,t){const n=(f,h)=>{const D=Number.parseInt(f.split("-").join("")+h.toString().padStart(3,"0"))*15485863;return D*D*D%2038074743/2038074743},s=()=>{const[f,h,_,D,w]=JSON.parse(localStorage.getItem("data")),d=_.length*h,g=new Date().toISOString(),M=g.slice(0,10),[j,N]=g.slice(11,16).split(":").map(C=>Number.parseInt(C)),m=j*12+N/5,fe=new Date(f).getTime(),ce=new Date(M).getTime(),W=Math.round((ce-fe)/864e5);let X=_.length-1;for(const[C,R]of _.entries())if(m<=R){X=C-1;break}const G=Math.max(-1,W*_.length+X),ue=G===-1?-277:_[G%_.length],z=G+1,me=z===_.length?555:_[z%_.length];let I,A;W<0||m-ue>72?(I=z,A="next"):me-m<=6?z<w?(I=z+1,A="next"):z===w?(I=z,A="curr"):(I=z,A="next*"):G===w?(I=G,A="curr"):G<w?(I=z,A="next"):(I=G,A="next*"),I>=d&&(I=d,A="done");const Y=Object.entries(D).sort(([C],[R])=>C==="break 🏖"?1:R==="break 🏖"?-1:0).flatMap(([C,R])=>new Array(R).fill(C)),V=[];for(let C=0;C<h;C++){const R=new Date(new Date(f).getTime()+864e5*C+432e5).toISOString().slice(0,10);for(let P of _){let E=n(R,P);C===0&&P===_[0]&&(E=Math.min(E,.49)),V.push({i:V.length,startDate:R,startTime:P,name:Y.splice(Math.floor(E*Y.length),1)[0]})}}return{shownSession:V[I],shownSessionType:A,shouldShowSession:w<I,history:V.slice(0,I).reverse()}},u=f=>`${`${Math.floor(f/12)}`.padStart(2,"0")}:${`${5*(f%12)}`.padStart(2,"0")}`,r=(f,h=!1)=>{const _=new Date().toISOString(),[D,w]=_.slice(11,16).split(":").map(N=>Number.parseInt(N)),d=D*12+w/5,g=_.slice(0,10),M=new Date(Date.now()+864e5).toISOString().slice(0,10),j=new Date(Date.now()-864e5).toISOString().slice(0,10);if(f.startDate===g){const N=Math.round(5*(f.startTime-d));return N<=0?!h||N===0?"now":`earlier today at ${u(f.startTime)}`:`in ${N} mins (${u(f.startTime)})`}else return f.startDate===M?`tomorrow at ${u(f.startTime)}`:f.startDate===j?`yesterday at ${u(f.startTime)}`:`on ${f.startDate} at ${u(f.startTime)}`};let a=s();return ae(async()=>{for(;;)await new Promise(f=>{setTimeout(()=>{f()},61e3-Date.now()%6e4)}),t(0,a=s())}),[a,s,r,()=>{const f=JSON.parse(localStorage.getItem("data"));f[4]=a.shownSession.i,localStorage.setItem("data",JSON.stringify(f)),t(0,a=s())},()=>{const f=JSON.parse(localStorage.getItem("data"));f[4]=a.shownSession.i+.5,localStorage.setItem("data",JSON.stringify(f)),t(0,a=s())},f=>{const h=f.currentTarget;navigator.clipboard.writeText(window.location.origin+"/revision-app/load.html?x="+btoa(encodeURIComponent(localStorage.getItem("data")))).then(()=>{h.innerText="copied link",h.style.lineHeight="16px",h.style.fontSize="14px",h.style.padding="4px",h.style.color="#fff",setTimeout(()=>{h.innerText="📋 🔗",h.style.lineHeight="",h.style.fontSize="",h.style.color="",h.style.padding=""},1e3)}).catch(()=>{})}]}class Ie extends se{constructor(e){super(),ie(this,e,pe,De,oe,{})}}localStorage.getItem("data")||(window.location.href="/revision-app/setup.html");new Ie({target:document.getElementById("app")});
