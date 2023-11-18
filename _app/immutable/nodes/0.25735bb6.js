import{S as z,i as K,s as O,C as N,D as T,m as d,h as u,n as l,b as L,E as m,F as M,k as v,a as H,y as S,l as x,c as C,z as D,A as I,G as X,g as w,d as b,B as y,H as Y,q as j,r as J,I as Z,J as ee,K as te}from"../chunks/index.022d591a.js";import{L as Q}from"../chunks/Link.78555902.js";import{B as se,g as re}from"../chunks/Button.f72e779a.js";import{r as W}from"../chunks/RoutingUtils.cb29abff.js";import{H as ae}from"../chunks/Head.5a47cbc7.js";function ne(n){let e,s;return{c(){e=N("svg"),s=N("path"),this.h()},l(t){e=T(t,"svg",{viewBox:!0,class:!0});var r=d(e);s=T(r,"path",{d:!0}),d(s).forEach(u),r.forEach(u),this.h()},h(){l(s,"d","M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"),l(e,"viewBox","0 0 24 24"),l(e,"class",n[0])},m(t,r){L(t,e,r),m(e,s)},p(t,[r]){r&1&&l(e,"class",t[0])},i:M,o:M,d(t){t&&u(e)}}}function le(n,e,s){let{class:t=""}=e;return n.$$set=r=>{"class"in r&&s(0,t=r.class)},[t]}class oe extends z{constructor(e){super(),K(this,e,le,ne,O,{class:0})}}function ce(n){let e,s;return e=new oe({props:{class:"h-6 w-6 fill-emerald-800"}}),{c(){S(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,r){I(e,t,r),s=!0},p:M,i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function fe(n){let e,s,t,r,o,_,h,A;return o=new se({props:{type:"submit",class:"rounded-l-none ",$$slots:{default:[ce]},$$scope:{ctx:n}}}),{c(){e=v("form"),s=v("div"),t=v("input"),r=H(),S(o.$$.fragment),this.h()},l(c){e=x(c,"FORM",{role:!0,class:!0,autocomplete:!0});var i=d(e);s=x(i,"DIV",{class:!0});var p=d(s);t=x(p,"INPUT",{type:!0,class:!0,name:!0,placeholder:!0}),r=C(p),D(o.$$.fragment,p),p.forEach(u),i.forEach(u),this.h()},h(){l(t,"type","search"),l(t,"class","flex-1 p-2 px-3 md:text-lg rounded-md rounded-r-none border border-r-0"),l(t,"name","username"),l(t,"placeholder","Type a username to search..."),l(s,"class","flex"),l(e,"role","search"),l(e,"class","max-w-2xl w-full mx-auto"),e.noValidate=!0,l(e,"autocomplete","off")},m(c,i){L(c,e,i),m(e,s),m(s,t),m(s,r),I(o,s,null),_=!0,h||(A=X(e,"submit",n[0]),h=!0)},p(c,[i]){const p={};i&2&&(p.$$scope={dirty:i,ctx:c}),o.$set(p)},i(c){_||(w(o.$$.fragment,c),_=!0)},o(c){b(o.$$.fragment,c),_=!1},d(c){c&&u(e),y(o),h=!1,A()}}}function ue(n){function e(s){s.preventDefault();const r=new FormData(s.currentTarget).get("username");re(W.home({username:r}))}return[e]}class ie extends z{constructor(e){super(),K(this,e,ue,fe,O,{})}}function me(n){let e,s;return{c(){e=N("svg"),s=N("path"),this.h()},l(t){e=T(t,"svg",{viewBox:!0,class:!0});var r=d(e);s=T(r,"path",{d:!0}),d(s).forEach(u),r.forEach(u),this.h()},h(){l(s,"d","M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"),l(e,"viewBox","0 0 24 24"),l(e,"class",n[0])},m(t,r){L(t,e,r),m(e,s)},p(t,[r]){r&1&&l(e,"class",t[0])},i:M,o:M,d(t){t&&u(e)}}}function $e(n,e,s){let{class:t=""}=e;return n.$$set=r=>{"class"in r&&s(0,t=r.class)},[t]}class he extends z{constructor(e){super(),K(this,e,$e,me,O,{class:0})}}function pe(n){let e;return{c(){e=j("svelte-github-explorer")},l(s){e=J(s,"svelte-github-explorer")},m(s,t){L(s,e,t)},d(s){s&&u(e)}}}function de(n){let e,s;return e=new he({}),{c(){S(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,r){I(e,t,r),s=!0},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){y(e,t)}}}function ge(n){let e,s,t,r,o,_,h,A,c,i,p,R,E,U,g,V,F;e=new ae({}),o=new Q({props:{href:W.home(),class:"text-white font-semibold text-xl md:text-2xl",$$slots:{default:[pe]},$$scope:{ctx:n}}}),h=new Q({props:{href:"https://github.com/onderonur/svelte-github-explorer",target:"_blank",rel:"noopener noreferrer",class:"h-7 w-7 md:h-8 md:w-8 fill-white",$$slots:{default:[de]},$$scope:{ctx:n}}}),i=new ie({});const q=n[0].default,$=Y(q,n,n[1],null);return{c(){S(e.$$.fragment),s=H(),t=v("div"),r=v("header"),S(o.$$.fragment),_=H(),S(h.$$.fragment),A=H(),c=v("main"),S(i.$$.fragment),p=H(),$&&$.c(),R=H(),E=v("footer"),U=j(`Built with
		`),g=v("a"),V=j("SvelteKit"),this.h()},l(a){D(e.$$.fragment,a),s=C(a),t=x(a,"DIV",{class:!0});var f=d(t);r=x(f,"HEADER",{class:!0});var k=d(r);D(o.$$.fragment,k),_=C(k),D(h.$$.fragment,k),k.forEach(u),A=C(f),c=x(f,"MAIN",{class:!0});var B=d(c);D(i.$$.fragment,B),p=C(B),$&&$.l(B),B.forEach(u),R=C(f),E=x(f,"FOOTER",{class:!0});var G=d(E);U=J(G,`Built with
		`),g=x(G,"A",{href:!0,target:!0,rel:!0,class:!0});var P=d(g);V=J(P,"SvelteKit"),P.forEach(u),G.forEach(u),f.forEach(u),this.h()},h(){l(r,"class","h-12 md:h-14 bg-slate-700 flex items-center justify-between gap-4 p-4"),l(c,"class","max-w-screen-xl mx-auto p-2 md:p-3 w-full flex flex-col gap-2 md:gap-3"),l(g,"href","https://kit.svelte.dev/"),l(g,"target","_blank"),l(g,"rel","noopener noreferrer"),l(g,"class","underline ml-1"),l(E,"class","h-14 md:h-16 mt-8 bg-slate-200 flex items-center p-4 text-slate-600 text-sm md:text-base"),l(t,"class","min-h-screen grid grid-rows-[auto_1fr_auto]")},m(a,f){I(e,a,f),L(a,s,f),L(a,t,f),m(t,r),I(o,r,null),m(r,_),I(h,r,null),m(t,A),m(t,c),I(i,c,null),m(c,p),$&&$.m(c,null),m(t,R),m(t,E),m(E,U),m(E,g),m(g,V),F=!0},p(a,[f]){const k={};f&2&&(k.$$scope={dirty:f,ctx:a}),o.$set(k);const B={};f&2&&(B.$$scope={dirty:f,ctx:a}),h.$set(B),$&&$.p&&(!F||f&2)&&Z($,q,a,a[1],F?te(q,a[1],f,null):ee(a[1]),null)},i(a){F||(w(e.$$.fragment,a),w(o.$$.fragment,a),w(h.$$.fragment,a),w(i.$$.fragment,a),w($,a),F=!0)},o(a){b(e.$$.fragment,a),b(o.$$.fragment,a),b(h.$$.fragment,a),b(i.$$.fragment,a),b($,a),F=!1},d(a){y(e,a),a&&u(s),a&&u(t),y(o),y(h),y(i),$&&$.d(a)}}}function _e(n,e,s){let{$$slots:t={},$$scope:r}=e;return n.$$set=o=>{"$$scope"in o&&s(1,r=o.$$scope)},[t,r]}class ke extends z{constructor(e){super(),K(this,e,_e,ge,O,{})}}export{ke as component};
