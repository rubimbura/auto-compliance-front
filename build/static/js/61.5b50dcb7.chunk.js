"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[61],{11654:function(e,n,t){var s=t(72791),i=t(78983),r=t(80184);n.Z=function(e){var n=e.message,t=e.type;return(0,s.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]),(0,r.jsxs)(i.Gc,{color:t,style:{textAlign:"center",height:"10px",display:"flex",alignItems:"center",justifyContent:"center"},children:[n," "]})}},63061:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var s=t(1413),i=t(29439),r=t(72791),o=t(78983),a=t(24846),c=t(63232),l=t(95161),d=t(57689),u=t(11654),p=t(69598),m=t(81694),f=t.n(m),h=t(70004),x=function(e,n){var t=(0,r.useRef)((function(){}));(0,r.useEffect)((function(){t.current=e}),[e]),(0,r.useEffect)((function(){if(n){var e=setInterval((function(){return t.current()}),n);return function(){return clearInterval(e)}}}),[n])},j=t(80184),v=function(e){var n=e.show,t=e.onHide,s=e.isError,a=e.handleSubmit,c=e.isLoading,l=e.setOTP,d=e.OTP,u=(0,r.useState)(300),m=(0,i.Z)(u,2),v=m[0],y=m[1],g=(0,r.useState)("5 min and 00 sec"),b=(0,i.Z)(g,2),w=b[0],S=b[1];return x((function(){n&&y(0===v?0:v-1);var e=Math.floor(v/60),t=v-60*e;S("".concat(e," : ").concat(t<10?"0"+t:t))}),1e3),0===v&&n&&t(),(0,j.jsx)(p.Z,{show:n,onHide:function(){t(),y(300)},dialogClassName:"otp-modal",className:"general-otp-modal","aria-labelledby":"contained-modal-title-vcenter",children:(0,j.jsx)(p.Z.Body,{className:"otp-modal-body",children:(0,j.jsxs)("form",{action:"",onSubmit:a,children:[(0,j.jsx)("span",{className:"otp-title",children:"Verification code"}),(0,j.jsx)("span",{className:"span",children:"Enter the code that was sent to your phone number"}),(0,j.jsx)("div",{className:"otp-fake-field d-flex justify-content-between",children:(0,j.jsx)(h.Z,{onChange:function(e){l(e)},value:d,inputStyle:"otp-inputStyle",numInputs:6,separator:(0,j.jsx)("span",{}),style:{width:"100%"},hasErrored:!0})}),s?(0,j.jsx)("p",{className:f()(" text-center text-danger",{"d-block":!0}),children:" Invalid otp provided"}):(0,j.jsx)("p",{}),(0,j.jsx)("div",{className:"timer-container code-expire-ctn",children:(0,j.jsxs)("span",{className:"otp-text-with-link",style:{fontSize:"16px",color:"#838AA2",fontFamily:"sofia-medium"},children:["Code will expire in",(0,j.jsxs)("span",{style:{color:"#1F65B3"},children:[" "+w," Minutes"]})]})}),(0,j.jsx)(o.u5,{disabled:c||d.length<6,type:"submit",style:{width:"100%",backgroundColor:"#015EC6",outline:"none",padding:"15px 0px"},children:"Submit"})]})})})},y=t(49327),g=t(46756),b=function(){var e,n=(0,d.s0)(),t=(0,r.useState)(!1),p=(0,i.Z)(t,2),m=p[0],f=p[1],h=(0,y.hO)("nonce"),x=h.data,b=h.isLoadingNonce,w=h.refetch,S=(0,y.YA)(),N=(0,i.Z)(S,2),Z=N[0],C=N[1],k=C.data,E=C.isLoading,_=C.isError,I=C.error,O=C.isSuccess,L=(0,y.vp)(),A=(0,i.Z)(L,2),P=A[0],T=A[1],B=T.data,H=T.isLoading,q=T.isError,M=T.isSuccess,R=(0,r.useState)({username:"",password:""}),Y=(0,i.Z)(R,2),D=Y[0],F=Y[1],K=(0,r.useState)(!1),U=(0,i.Z)(K,2),V=U[0],X=U[1],z=(0,r.useState)(""),G=(0,i.Z)(z,2),J=G[0],Q=G[1];(0,r.useEffect)((function(){O&&X(!V),_&&w()}),[O,_]),(0,r.useEffect)((function(){M&&(X(!1),n("/dashboard"),sessionStorage.setItem("token",null===B||void 0===B?void 0:B.token),sessionStorage.setItem("userMenu",JSON.stringify(null===B||void 0===B?void 0:B.menu)))}),[M]);return(0,j.jsx)("div",{className:"min-vh-100 d-flex flex-row align-items-center login-container",children:(0,j.jsxs)(o.KB,{children:[(0,j.jsx)(o.rb,{className:"justify-content-center",style:{marginBottom:"60px"},children:(0,j.jsxs)(o.b7,{md:5,children:[_&&(0,j.jsx)(u.Z,{message:null===(e=I.data)||void 0===e?void 0:e.message,type:"danger"}),(0,j.jsx)(o.dL,{children:(0,j.jsx)(o.xH,{className:"p-4",children:(0,j.jsx)(o.sl,{children:(0,j.jsxs)(o.lx,{onSubmit:function(e){e.preventDefault();var n=new g.X;n.setPublicKey(null===x||void 0===x?void 0:x.data[0].nonce);var t=n.encrypt(D.username),s=n.encrypt(D.password),i={req:"".concat(t,"::::").concat(s,"::::").concat(null===x||void 0===x?void 0:x.data[0].nonce)};Z(i)},children:[(0,j.jsx)("h1",{style:{textAlign:"center"},children:"Compliance System"}),(0,j.jsx)("p",{className:"text-medium-emphasis",style:{textAlign:"center"},children:"Sign In to your account"}),(0,j.jsx)(o.YR,{className:"mb-3",children:(0,j.jsx)(o.jO,{placeholder:"Username",autoComplete:"username",onChange:function(e){return F((0,s.Z)((0,s.Z)({},D),{},{username:e.target.value}))},required:!0})}),(0,j.jsxs)(o.YR,{className:"mb-4",children:[(0,j.jsx)(o.jO,{type:m?"text":"password",placeholder:"Password",autoComplete:"current-password",onChange:function(e){return F((0,s.Z)((0,s.Z)({},D),{},{password:e.target.value}))},required:!0}),(0,j.jsx)(o.wV,{onClick:function(){return f(!m)},style:{cursor:"pointer"},children:(0,j.jsx)(a.Z,{icon:m?c.U:l.X})})]}),(0,j.jsx)("div",{style:{width:"100%"},children:(0,j.jsx)(o.u5,{disabled:b||E,type:"submit",style:{width:"100%",backgroundColor:"#015EC6",outline:"none"},children:"Login"})}),(0,j.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:(0,j.jsx)("span",{style:{cursor:"pointer"},color:"link",className:"forgot-password-link"})})]})})})})]})}),(0,j.jsx)(v,{show:V,onHide:function(){return X(!1)},handleSubmit:function(e){e.preventDefault(),k&&P({otpId:null===k||void 0===k?void 0:k.otpId,otp:J})},isError:q,isLoading:H,OTP:J,setOTP:Q})]})})}}}]);
//# sourceMappingURL=61.5b50dcb7.chunk.js.map