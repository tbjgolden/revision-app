import"./modulepreload-polyfill-ec808ebb.js";import{S as He,i as Ee,s as Le,b as m,r as T,h as O,c as h,a as A,k as o,l as I,u as R,n as ee,d as N,z as me,A as Fe,f as te,q as Z,m as le,p as Pe,g as ye,B as Re,v as Ye,w as Je,x as We,y as Ge}from"./index-73213fef.js";/* empty css               */function Te(e,l,t){const s=e.slice();return s[21]=l[t],s[23]=t,s}function Se(e,l,t){const s=e.slice();return s[21]=l[t],s[23]=t,s}function Ke(e){let l,t=new Array(12).fill(0),s=[];for(let i=0;i<t.length;i+=1)s[i]=Me(Te(e,t,i));return{c(){l=m("div");for(let i=0;i<s.length;i+=1)s[i].c();h(l,"class","picker minutes svelte-lx9nhs")},m(i,d){A(i,l,d);for(let n=0;n<s.length;n+=1)s[n].m(l,null)},p(i,d){if(d&80){t=new Array(12).fill(0);let n;for(n=0;n<t.length;n+=1){const c=Te(i,t,n);s[n]?s[n].p(c,d):(s[n]=Me(c),s[n].c(),s[n].m(l,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=t.length}},d(i){i&&N(l),te(s,i)}}}function Qe(e){let l,t=new Array(24).fill(0),s=[];for(let i=0;i<t.length;i+=1)s[i]=Oe(Se(e,t,i));return{c(){l=m("div");for(let i=0;i<s.length;i+=1)s[i].c();h(l,"class","picker svelte-lx9nhs")},m(i,d){A(i,l,d);for(let n=0;n<s.length;n+=1)s[n].m(l,null)},p(i,d){if(d&48){t=new Array(24).fill(0);let n;for(n=0;n<t.length;n+=1){const c=Se(i,t,n);s[n]?s[n].p(c,d):(s[n]=Oe(c),s[n].c(),s[n].m(l,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=t.length}},d(i){i&&N(l),te(s,i)}}}function Me(e){let l,t=e[4](e[23]*5)+"",s,i,d,n;return{c(){l=m("button"),s=T(t),i=O(),l.value=e[23],h(l,"class","svelte-lx9nhs")},m(c,f){A(c,l,f),o(l,s),o(l,i),d||(n=I(l,"click",e[6]),d=!0)},p:ee,d(c){c&&N(l),d=!1,n()}}}function Oe(e){let l,t=e[4](e[23])+"",s,i,d,n;return{c(){l=m("button"),s=T(t),i=O(),l.value=e[23],h(l,"class","svelte-lx9nhs")},m(c,f){A(c,l,f),o(l,s),o(l,i),d||(n=I(l,"click",e[5]),d=!0)},p:ee,d(c){c&&N(l),d=!1,n()}}}function Ue(e){let l,t,s,i=e[4](e[3])+"",d,n,c=e[4](e[2]*5)+"",f,a,w,_;function u(b,M){if(b[0]==="hours")return Qe;if(b[0]==="minutes")return Ke}let y=u(e),p=y&&y(e);return{c(){l=m("div"),t=m("div"),s=m("button"),d=T(i),n=m("button"),f=T(c),a=O(),p&&p.c(),h(s,"class","svelte-lx9nhs"),h(n,"class","r svelte-lx9nhs"),h(t,"class","time-picker-inner svelte-lx9nhs"),h(l,"class","time-picker svelte-lx9nhs")},m(b,M){A(b,l,M),o(l,t),o(t,s),o(s,d),o(t,n),o(n,f),o(l,a),p&&p.m(l,null),w||(_=[I(s,"click",e[10]),I(s,"mouseenter",e[11]),I(s,"focus",e[12]),I(n,"click",e[13]),I(n,"mouseenter",e[14]),I(n,"focus",e[15]),I(l,"mouseleave",e[16]),I(l,"blur",e[17])],w=!0)},p(b,[M]){M&8&&i!==(i=b[4](b[3])+"")&&R(d,i),M&4&&c!==(c=b[4](b[2]*5)+"")&&R(f,c),y===(y=u(b))&&p?p.p(b,M):(p&&p.d(1),p=y&&y(b),p&&(p.c(),p.m(l,null)))},i:ee,o:ee,d(b){b&&N(l),p&&p.d(),w=!1,me(_)}}}function Ve(e,l,t){let s,i,d,n;const c=Fe(),f=q=>q.toString().padStart(2,"0");let{time:a=0}=l,{min:w=-1}=l,{max:_=288}=l,u="";const y=q=>{if(q.target instanceof HTMLButtonElement){const v=a;t(7,a=Math.min(i-1,Math.max(s+1,Number.parseInt(q.target.value)*12+d))),a!==v&&c("change",a)}},p=q=>{if(q.target instanceof HTMLButtonElement){const v=a;t(7,a=Math.min(i-1,Math.max(s+1,Number.parseInt(q.target.value)+a-d))),a!==v&&c("change",a)}};let b;const M=()=>{clearTimeout(b),t(0,u="hours")},P=()=>{clearTimeout(b),t(0,u="hours")},Y=()=>{clearTimeout(b),t(0,u="hours")},z=()=>{clearTimeout(b),t(0,u="minutes")},j=()=>{clearTimeout(b),t(0,u="minutes")},F=()=>{clearTimeout(b),t(0,u="minutes")},L=()=>{t(1,b=setTimeout(()=>{t(0,u="")},100))},B=()=>{t(1,b=setTimeout(()=>{t(0,u="")},100))};return e.$$set=q=>{"time"in q&&t(7,a=q.time),"min"in q&&t(8,w=q.min),"max"in q&&t(9,_=q.max)},e.$$.update=()=>{e.$$.dirty&256&&(s=w??-1),e.$$.dirty&512&&(i=_??288),e.$$.dirty&128&&t(2,d=a%12),e.$$.dirty&128&&t(3,n=Math.floor(a/12))},[u,b,d,n,f,y,p,a,w,_,M,P,Y,z,j,F,L,B]}class Xe extends He{constructor(l){super(),Ee(this,l,Ve,Ue,Le,{time:7,min:8,max:9})}}function qe(e,l,t){const s=e.slice();return s[22]=l[t][0],s[23]=l[t][1],s}function De(e,l,t){const s=e.slice();return s[26]=l[t],s[28]=t,s}function Ae(e,l,t){const s=e.slice();return s[29]=l[t],s}function Ie(e){let l,t,s,i,d,n,c=e[29]===1?"":"s",f,a,w,_;return{c(){l=m("label"),t=m("input"),s=O(),i=m("span"),d=T(e[29]),n=T(" time"),f=T(c),a=T("/day"),h(t,"type","radio"),t.value=e[29],h(t,"name","dayNumber"),h(i,"class","label svelte-dhx2wt"),h(l,"class","svelte-dhx2wt")},m(u,y){A(u,l,y),o(l,t),o(l,s),o(l,i),o(i,d),o(i,n),o(i,f),o(i,a),w||(_=I(t,"change",e[12]),w=!0)},p:ee,d(u){u&&N(l),w=!1,_()}}}function Ne(e){let l,t,s,i,d,n,c,f,a,w,_,u,y,p,b,M=e[6]===1?"":"s",P,Y,z,j,F,L,B,q,v,D,J,ae,se,pe,ue,ve,U,ce,V,ne,W,be,oe,we,ie,G,fe,K,de,he,Q,ge,re,C,_e,ke,X=new Array(e[0]).fill(0),S=[];for(let r=0;r<X.length;r+=1)S[r]=je(De(e,X,r));const ze=r=>le(S[r],1,1,()=>{S[r]=null});let x=Object.entries(e[4]),H=[];for(let r=0;r<x.length;r+=1)H[r]=Be(qe(e,x,r));let E=e[5]===e[9]&&Ce();return{c(){for(let r=0;r<S.length;r+=1)S[r].c();l=O(),t=m("div"),s=m("h4"),s.textContent="start date? (incl)",i=O(),d=m("div"),n=m("input"),c=O(),f=m("div"),a=m("h4"),a.textContent="end date? (incl)",w=O(),_=m("div"),u=m("input"),y=T(`
        (`),p=T(e[6]),b=T(" day"),P=T(M),Y=T(")"),z=O(),j=m("div"),F=m("h2"),F.textContent="create revision sessions!",L=O(),B=m("blockquote"),B.innerHTML=`<p class="svelte-dhx2wt">Add your revision sessions here - create your custom sessions with a name and a number of
          occurrences</p> 
        <p class="svelte-dhx2wt">This app will create the perfect revision schedule for you</p> 
        <p class="svelte-dhx2wt">Your schedule will be saved to your browser, so you can close and reopen the window
          without losing your schedule. There&#39;ll also be a button to copy a url for your schedule to
          a different device.</p> 
        <p class="svelte-dhx2wt">You can mix in some &quot;break&quot; sessions, or other productive sessions. Sit down at your desk
          ready to work, click the &quot;start&quot; button and you&#39;ll find out which session is next - can&#39;t
          get anxious if you don&#39;t know which is next - it might even be a break!</p> 
        <p class="svelte-dhx2wt">Bonus: if both you and your friends use this app and have an identical session time (e.g.
          both 08:00 on the same day), the randomiser will try to sync up your breaks so you have
          someone to hang out with!</p> 
        <p class="svelte-dhx2wt">Suggestion: aim for 1 non-revision sessions per 3 revision sessions</p>`,q=O(),v=m("p"),D=T("added "),J=m("span"),ae=T(e[9]),pe=T("/"),ue=T(e[5]),ve=O(),U=m("div");for(let r=0;r<H.length;r+=1)H[r].c();ce=O(),V=m("form"),ne=m("div"),W=m("button"),be=T("add"),we=O(),ie=m("div"),G=m("input"),fe=O(),K=m("div"),E&&E.c(),de=O(),he=m("p"),Q=m("button"),ge=T("go!"),h(s,"class","svelte-dhx2wt"),h(n,"type","date"),n.value=e[1],h(n,"class","svelte-dhx2wt"),h(t,"class","section svelte-dhx2wt"),h(a,"class","svelte-dhx2wt"),h(u,"type","date"),u.value=e[2],h(u,"min",e[1]),h(u,"class","svelte-dhx2wt"),h(f,"class","section svelte-dhx2wt"),h(B,"class","svelte-dhx2wt"),h(J,"style",se=`color:${e[9]<e[5]?"#f90":"#090"}`),h(v,"class","counter svelte-dhx2wt"),ye(W,"width","100%"),h(W,"type","submit"),W.disabled=oe=e[8].trim()==="",h(W,"class","svelte-dhx2wt"),h(ne,"class","col-left svelte-dhx2wt"),G.value=e[8],h(G,"placeholder","custom session name"),h(G,"class","svelte-dhx2wt"),h(ie,"class","col-right"),h(V,"class","row svelte-dhx2wt"),h(U,"class","table svelte-dhx2wt"),h(j,"class","section svelte-dhx2wt"),h(Q,"class","go svelte-dhx2wt"),Q.disabled=re=e[5]!==e[9],ye(Q,"font-size","2em"),h(K,"class","section svelte-dhx2wt")},m(r,k){for(let g=0;g<S.length;g+=1)S[g].m(r,k);A(r,l,k),A(r,t,k),o(t,s),o(t,i),o(t,d),o(d,n),A(r,c,k),A(r,f,k),o(f,a),o(f,w),o(f,_),o(_,u),o(_,y),o(_,p),o(_,b),o(_,P),o(_,Y),A(r,z,k),A(r,j,k),o(j,F),o(j,L),o(j,B),o(j,q),o(j,v),o(v,D),o(v,J),o(J,ae),o(v,pe),o(v,ue),o(j,ve),o(j,U);for(let g=0;g<H.length;g+=1)H[g].m(U,null);o(U,ce),o(U,V),o(V,ne),o(ne,W),o(W,be),o(V,we),o(V,ie),o(ie,G),A(r,fe,k),A(r,K,k),E&&E.m(K,null),o(K,de),o(K,he),o(he,Q),o(Q,ge),C=!0,_e||(ke=[I(n,"change",e[14]),I(u,"change",e[15]),I(G,"input",e[18]),I(V,"submit",Re(e[19])),I(Q,"click",e[20])],_e=!0)},p(r,k){if(k[0]&129){X=new Array(r[0]).fill(0);let g;for(g=0;g<X.length;g+=1){const $=De(r,X,g);S[g]?(S[g].p($,k),Z(S[g],1)):(S[g]=je($),S[g].c(),Z(S[g],1),S[g].m(l.parentNode,l))}for(Ye(),g=X.length;g<S.length;g+=1)ze(g);Pe()}if((!C||k[0]&2)&&(n.value=r[1]),(!C||k[0]&4)&&(u.value=r[2]),(!C||k[0]&2)&&h(u,"min",r[1]),(!C||k[0]&64)&&R(p,r[6]),(!C||k[0]&64)&&M!==(M=r[6]===1?"":"s")&&R(P,M),(!C||k[0]&512)&&R(ae,r[9]),(!C||k[0]&544&&se!==(se=`color:${r[9]<r[5]?"#f90":"#090"}`))&&h(J,"style",se),(!C||k[0]&32)&&R(ue,r[5]),k[0]&568){x=Object.entries(r[4]);let g;for(g=0;g<x.length;g+=1){const $=qe(r,x,g);H[g]?H[g].p($,k):(H[g]=Be($),H[g].c(),H[g].m(U,ce))}for(;g<H.length;g+=1)H[g].d(1);H.length=x.length}(!C||k[0]&256&&oe!==(oe=r[8].trim()===""))&&(W.disabled=oe),(!C||k[0]&256&&G.value!==r[8])&&(G.value=r[8]),r[5]===r[9]?E||(E=Ce(),E.c(),E.m(K,de)):E&&(E.d(1),E=null),(!C||k[0]&544&&re!==(re=r[5]!==r[9]))&&(Q.disabled=re)},i(r){if(!C){for(let k=0;k<X.length;k+=1)Z(S[k]);C=!0}},o(r){S=S.filter(Boolean);for(let k=0;k<S.length;k+=1)le(S[k]);C=!1},d(r){te(S,r),r&&N(l),r&&N(t),r&&N(c),r&&N(f),r&&N(z),r&&N(j),te(H,r),r&&N(fe),r&&N(K),E&&E.d(),_e=!1,me(ke)}}}function je(e){let l,t,s,i=e[28]+1+"",d,n,c,f,a,w;function _(...u){return e[13](e[28],...u)}return a=new Xe({props:{time:e[7][e[28]],min:e[28]>0?e[7][e[28]-1]:void 0,max:e[28]<e[0]-1?e[7][e[28]+1]:void 0}}),a.$on("change",_),{c(){l=m("div"),t=m("h4"),s=T("time "),d=T(i),n=T(" start time?"),c=O(),f=m("div"),Je(a.$$.fragment),h(t,"class","svelte-dhx2wt"),h(l,"class","section svelte-dhx2wt")},m(u,y){A(u,l,y),o(l,t),o(t,s),o(t,d),o(t,n),o(l,c),o(l,f),We(a,f,null),w=!0},p(u,y){e=u;const p={};y[0]&128&&(p.time=e[7][e[28]]),y[0]&128&&(p.min=e[28]>0?e[7][e[28]-1]:void 0),y[0]&129&&(p.max=e[28]<e[0]-1?e[7][e[28]+1]:void 0),a.$set(p)},i(u){w||(Z(a.$$.fragment,u),w=!0)},o(u){le(a.$$.fragment,u),w=!1},d(u){u&&N(l),Ge(a)}}}function Be(e){let l,t,s,i=e[23]===0&&e[22]!=="break 🏖"?"🗑":"➖",d,n,c,f=e[23]+"",a,w,_="➕",u,y,p,b,M=e[22]+"",P,Y,z;function j(){return e[16](e[23],e[22])}function F(){return e[17](e[22],e[23])}return{c(){l=m("div"),t=m("div"),s=m("button"),d=T(i),c=m("span"),a=T(f),w=m("button"),u=T(_),p=O(),b=m("div"),P=T(M),s.disabled=n=e[23]===0&&e[22]==="break 🏖",h(s,"class","svelte-dhx2wt"),h(c,"class","svelte-dhx2wt"),w.disabled=y=e[5]===e[9],h(w,"class","svelte-dhx2wt"),h(t,"class","col-left svelte-dhx2wt"),h(b,"class","col-right"),h(l,"class","row svelte-dhx2wt")},m(L,B){A(L,l,B),o(l,t),o(t,s),o(s,d),o(t,c),o(c,a),o(t,w),o(w,u),o(l,p),o(l,b),o(b,P),Y||(z=[I(s,"click",j),I(w,"click",F)],Y=!0)},p(L,B){e=L,B[0]&16&&i!==(i=e[23]===0&&e[22]!=="break 🏖"?"🗑":"➖")&&R(d,i),B[0]&16&&n!==(n=e[23]===0&&e[22]==="break 🏖")&&(s.disabled=n),B[0]&16&&f!==(f=e[23]+"")&&R(a,f),B[0]&544&&y!==(y=e[5]===e[9])&&(w.disabled=y),B[0]&16&&M!==(M=e[22]+"")&&R(P,M)},d(L){L&&N(l),Y=!1,me(z)}}}function Ce(e){let l;return{c(){l=m("blockquote"),l.innerHTML=`<p class="svelte-dhx2wt">Final warning: You cannot edit a schedule after it has been created. If you need to
            start from scratch and create a new schedule, navigate directly to this url.</p>`,h(l,"class","svelte-dhx2wt")},m(t,s){A(t,l,s)},d(t){t&&N(l)}}}function Ze(e){let l,t,s,i,d,n=[1,2,3,4],c=[];for(let a=0;a<4;a+=1)c[a]=Ie(Ae(e,n,a));let f=e[0]>0&&Ne(e);return{c(){l=m("div"),t=m("h1"),t.textContent="random revision app 🎲",s=O();for(let a=0;a<4;a+=1)c[a].c();i=O(),f&&f.c(),h(t,"class","svelte-dhx2wt"),h(l,"class","screen svelte-dhx2wt")},m(a,w){A(a,l,w),o(l,t),o(l,s);for(let _=0;_<4;_+=1)c[_].m(l,null);o(l,i),f&&f.m(l,null),d=!0},p(a,w){if(w[0]&1){n=[1,2,3,4];let _;for(_=0;_<4;_+=1){const u=Ae(a,n,_);c[_]?c[_].p(u,w):(c[_]=Ie(u),c[_].c(),c[_].m(l,i))}for(;_<4;_+=1)c[_].d(1)}a[0]>0?f?(f.p(a,w),w[0]&1&&Z(f,1)):(f=Ne(a),f.c(),Z(f,1),f.m(l,null)):f&&(Ye(),le(f,1,1,()=>{f=null}),Pe())},i(a){d||(Z(f),d=!0)},o(a){le(f),d=!1},d(a){a&&N(l),te(c,a),f&&f.d()}}}function xe(e,l,t){let s,i,d,n,c,f,a=0;const w=new Date(Date.now()+864e5).toISOString().slice(0,10);let _=[96,132,168,192],u=w,y=w,p={"break 🏖":0},b="";const M=v=>{t(0,a=Number.parseInt(v.currentTarget.value))},P=(v,D)=>{t(7,_[v]=D.detail,_),t(7,_)},Y=v=>{t(1,u=v.currentTarget.value),v.currentTarget.value>y&&t(2,y=v.currentTarget.value)},z=v=>{v.currentTarget.value<u?(t(2,y=u),v.currentTarget.value=u):t(2,y=v.currentTarget.value)},j=(v,D)=>{v===0&&D!=="break 🏖"?delete p[D]:t(3,p[D]=v-1,p),t(3,p)},F=(v,D)=>{t(3,p[v]=D+1,p),t(3,p)},L=v=>{t(8,b=v.currentTarget.value)},B=()=>{b.trim()&&(t(3,p[b.trim()]=0,p),t(3,p),t(8,b=""))},q=()=>{localStorage.setItem("data",JSON.stringify([u,d,_.slice(0,a),Object.entries(c).reduce((v,[D,J])=>(J&&(v[D]=J),v),{})])),window.location.href="/revision-app/"};return e.$$.update=()=>{e.$$.dirty[0]&2&&t(10,s=new Date(u).getTime()),e.$$.dirty[0]&4&&t(11,i=new Date(y).getTime()),e.$$.dirty[0]&3072&&t(6,d=Math.round(1+(i-s)/864e5)),e.$$.dirty[0]&65&&t(5,n=a*d),e.$$.dirty[0]&40&&t(4,c=Object.values(p).reduce((v,D)=>v+D,0)<=n?p:Object.keys(p).reduce((v,D)=>(v[D]=0,v),{})),e.$$.dirty[0]&16&&t(9,f=Object.values(c).reduce((v,D)=>v+D,0))},[a,u,y,p,c,n,d,_,b,f,s,i,M,P,Y,z,j,F,L,B,q]}class $e extends He{constructor(l){super(),Ee(this,l,xe,Ze,Le,{},null,[-1,-1])}}new $e({target:document.getElementById("app")});