"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[299],{22548:function(A,e,n){n.r(e),n.d(e,{default:function(){return X}});var t=n(72791),s=n(1413),i=n(57689),a=n(95048),r=t.lazy((function(){return n.e(915).then(n.bind(n,61915))})),o=t.lazy((function(){return Promise.all([n.e(228),n.e(574),n.e(356)]).then(n.bind(n,93031))})),c=t.lazy((function(){return n.e(218).then(n.bind(n,63218))})),l=t.lazy((function(){return Promise.all([n.e(228),n.e(214),n.e(109)]).then(n.bind(n,40109))})),m=t.lazy((function(){return Promise.all([n.e(228),n.e(574),n.e(636)]).then(n.bind(n,33636))})),u=t.lazy((function(){return Promise.all([n.e(228),n.e(574),n.e(676),n.e(237)]).then(n.bind(n,51237))})),d=[{path:"/dashboard",name:"Dashboard",element:r},{path:"/regulations",name:"Regulations",element:o},{path:"/regulations/new-regulation",name:"Add new regulation form",element:c},{path:"/regulations/view-regulation",name:"Regulation Form",element:l},{path:"/regulations/view-regulation/article",name:"Article",element:m},{path:"/user/regulations",name:"Regulation",element:t.lazy((function(){return Promise.all([n.e(228),n.e(574),n.e(264)]).then(n.bind(n,96264))}))},{path:"/user/regulations/assesment",name:"Regulation",element:t.lazy((function(){return n.e(571).then(n.bind(n,45571))}))},{path:"/users",name:"Users",element:u}],g=n(78983),f=n(80184),h=function(){var A=(0,i.TH)().pathname,e=(0,i.s0)(),n=(0,a.v9)((function(A){return A.regulation.value})),r=function(A){var e=[];return A.split("/").reduce((function(A,n,t,s){var i="".concat(A,"/").concat(n),a=function(A,e){var n=e.find((function(e){return e.path===A}));return!!n&&n.name}(i,d);return a&&e.push({pathname:i,name:a,active:t+1===s.length}),i})),e}(A);return(0,f.jsx)(g.fj,{className:"m-0 ms-2",children:r.map((function(A,i){return(0,t.createElement)(g.Sd,(0,s.Z)((0,s.Z)({},A.active?{active:!0}:{href:"#"}),{},{key:i,onClick:function(t){return s=t,i=A.pathname,s.preventDefault(),void e("".concat(i),{state:{details:n}});var s,i}}),A.name)}))})},j=t.memo(h),p=function(){return(0,f.jsx)(g.KB,{lg:!0,children:(0,f.jsx)(t.Suspense,{fallback:(0,f.jsx)(g.LQ,{color:"primary"}),children:(0,f.jsxs)(i.Z5,{children:[d.map((function(A,e){return A.element&&(0,f.jsx)(i.AW,{path:A.path,exact:A.exact,name:A.name,element:(0,f.jsx)(A.element,{})},e)})),(0,f.jsx)(i.AW,{path:"/",element:(0,f.jsx)(i.Fg,{to:"dashboard",replace:!0})})]})})})},v=t.memo(p),w=function(){return(0,f.jsxs)(g.pG,{children:[(0,f.jsx)("div",{children:(0,f.jsx)("span",{className:"ms-1",children:"\xa9 2022"})}),(0,f.jsx)("div",{className:"ms-auto",children:(0,f.jsx)("span",{className:"me-1",children:"Powered by Inc ltd"})})]})},x=t.memo(w),b=n(24846),B=n(31389),N=n(65487),D=n(63232),C=function(){var A=(0,i.s0)();return(0,f.jsxs)(g.w5,{variant:"nav-item",children:[(0,f.jsx)(g.SQ,{placement:"bottom-end",className:"py-0",caret:!1,children:(0,f.jsx)(g.cU,{src:"data:image/png;base64,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",size:"md"})}),(0,f.jsxs)(g.$H,{className:"pt-0",placement:"bottom-end",children:[(0,f.jsx)(g.nR,{className:"bg-light fw-semibold py-2",children:"Account"}),(0,f.jsxs)(g.$f,{onClick:function(){return A("/my-account")},style:{cursor:"pointer"},children:[(0,f.jsx)(b.Z,{icon:N.M,className:"me-2"}),"My Account"]}),(0,f.jsx)(g.lK,{}),(0,f.jsxs)(g.$f,{style:{cursor:"pointer"},onClick:function(){sessionStorage.clear(),A("/")},children:[(0,f.jsx)(b.Z,{icon:D.U,className:"me-2"}),"Logout"]})]})]})},F=function(){var A=(0,a.I0)(),e=(0,a.v9)((function(A){return A.sidebarShow}));return(0,f.jsxs)(g.PO,{position:"sticky",className:"mb-4",children:[(0,f.jsxs)(g.KB,{fluid:!0,children:[(0,f.jsx)(g.X4,{className:"ps-1",onClick:function(){return A({type:"set",sidebarShow:!e})},children:(0,f.jsx)(b.Z,{icon:B.N,size:"lg"})}),(0,f.jsx)(g.g3,{className:"ms-3",children:(0,f.jsx)(C,{})})]}),(0,f.jsx)(g.rc,{}),(0,f.jsx)(g.KB,{fluid:!0,children:(0,f.jsx)(j,{})})]})},H=n(45987),Q=n(11087),K=["component","name","badge","icon"],U=["component","name","icon","to"],P=function(A){var e=A.items,n=(0,i.TH)(),a=function(A,e,n){return(0,f.jsxs)(f.Fragment,{children:[e&&e,A&&A,n&&(0,f.jsx)(g.C_,{color:n.color,className:"ms-auto",children:n.text})]})},r=function(A,e){var n=A.component,i=A.name,r=A.badge,o=A.icon,c=(0,H.Z)(A,K),l=n;return(0,t.createElement)(l,(0,s.Z)((0,s.Z)({},c.to&&!c.items&&{component:Q.OL}),{},{key:e},c),a(i,o,r))},o=function A(e,t){var i,o=e.component,c=e.name,l=e.icon,m=e.to,u=(0,H.Z)(e,U),d=o;return(0,f.jsx)(d,(0,s.Z)((0,s.Z)({idx:String(t),toggler:a(c,l),visible:n.pathname.startsWith(m)},u),{},{children:null===(i=e.items)||void 0===i?void 0:i.map((function(e,n){return e.items?A(e,n):r(e,n)}))}),t)};return(0,f.jsx)(t.Fragment,{children:e&&e.map((function(A,e){return A.items?o(A,e):r(A,e)}))})},k=n(34358),I=(n(82454),n(34708)),R=n(69486),E=(g.fd,g.U6,b.Z,I.h,g.fd,g.U6,b.Z,R.M,g.U6,b.Z,R.M,[{component:g.fd,name:""},{component:g.U6,name:"Dashboard",to:"/dashboard",icon:(0,f.jsx)(b.Z,{icon:I.h,customClassName:"nav-icon"})},{component:g.fd,name:""},{component:g.U6,name:"Regulation",to:"/user/regulations",icon:(0,f.jsx)(b.Z,{icon:R.M,customClassName:"nav-icon"})}]),q=function(){var A=(0,a.I0)(),e=(0,a.v9)((function(A){return A.sidebarUnfoldable})),n=(0,a.v9)((function(A){return A.sidebarShow}));sessionStorage.getItem("token");return(0,f.jsxs)(g.z3,{position:"fixed",unfoldable:e,visible:n,onVisibleChange:function(e){A({type:"set",sidebarShow:e})},children:[(0,f.jsx)(g.Xk,{children:(0,f.jsx)(k.Z,{children:(0,f.jsx)(P,{items:E})})}),(0,f.jsx)(g.iv,{className:"d-none d-lg-flex",onClick:function(){return A({type:"set",sidebarUnfoldable:!e})}})]})},y=t.memo(q),X=function(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(y,{}),(0,f.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,f.jsx)(F,{}),(0,f.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,f.jsx)(v,{})}),(0,f.jsx)(x,{})]})]})}}}]);
//# sourceMappingURL=299.7a2a1144.chunk.js.map