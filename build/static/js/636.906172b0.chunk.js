"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[636],{82463:function(e,s,a){a(72791);s.Z=a.p+"static/media/close-icon.ef9648a920682e5d9d0fa22a43f9b578.svg"},11654:function(e,s,a){var n=a(72791),l=a(78983),i=a(80184);s.Z=function(e){var s=e.message,a=e.type;return(0,n.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]),(0,i.jsxs)(l.Gc,{color:a,style:{textAlign:"center",height:"10px",display:"flex",alignItems:"center",justifyContent:"center"},children:[s," "]})}},644:function(e,s,a){a.d(s,{Gq:function(){return n},TI:function(){return t},YC:function(){return i},ZB:function(){return l}});var n=[{label:"REGULATION REFERENCE",value:"regulation_ref"},{label:"ISSUING DATE",value:"created_date"},{label:"EFFECTIVE DATE",value:"effective_date"},{label:"ISSUING AUTHORITY",value:"issuing_authority"},{label:"TYPE",value:"type"},{label:"STATUS",value:"status"},{label:"ACTIONS",value:"actions"}],l=[{label:"Assigned people",value:"last_name"},{label:"Assigned Date",value:"input_date"},{label:"Compliance status",value:"status"},{label:"Gap",value:"email"},{label:"Action Plan",value:"phone_number"},{label:"Deadline",value:"branch"},{label:"Actions",value:"actions"}],i=[{label:"First Name",value:"first_name"},{label:"Last Name",value:"last_name"},{label:"Email",value:"email"},{label:"Phone Number",value:"phone_number"},{label:"Status",value:"status"},{label:"Role",value:"user_role"},{label:"Actions",value:"actions"}],t=[{label:"AVAILABLE PERMISSIONS",value:"name"}]},48355:function(e,s,a){a.d(s,{Z:function(){return u}});var n=a(62591),l=a(78983);a(72791);var i=a.p+"static/media/sort-up.fb5e1d92b6484295020e097753af964f.svg";var t=a.p+"static/media/sort-down.94843ef6e7f1c11fff89fc6a09eddf3c.svg",r=a(3579),c=a(41286),o=a(27247),d=a(80184),u=function(e){var s=e.headers,a=e.data,u=e.handleViewItem,h=e.isLoading,m=e.handleSortUp,x=e.handleSortDown,p=(e.hasDeleteBtn,e.handleDeleteItem),f=[];(null===s||void 0===s?void 0:s.length)>0&&(f=s.map((function(e){return(0,d.jsx)("th",{children:(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("div",{children:e.label||"-"}),(0,d.jsx)("div",{className:"table-sort-container ml-2",children:e.isSort&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{src:i,onClick:m}),(0,d.jsx)("img",{src:t,onClick:x})]})})]})})})));var v=[];return(null===a||void 0===a?void 0:a.length)>0&&(v=a.map((function(e,a){var n=Object.assign({},e);return n.actions=(0,d.jsxs)("div",{style:{display:"flex",gap:10},children:[(0,d.jsx)("div",{onClick:function(){return u(e)},children:(0,d.jsx)(r.Z,{style:{width:16,height:16,cursor:"pointer"}})}),(0,d.jsx)("div",{onClick:function(){return handleUpdateItem(e)},children:(0,d.jsx)(c.Z,{style:{width:16,height:16,cursor:"pointer"}})}),(0,d.jsx)("div",{onClick:function(){return p(e)},children:(0,d.jsx)(o.Z,{style:{width:16,height:16,cursor:"pointer",color:"#ff9494"}})})]}),(0,d.jsx)("tr",{children:s.map((function(e){return(0,d.jsxs)("td",{className:n[e.value],children:[" ",n[e.value]||"-"]})}))})}))),(0,d.jsxs)(n.Z,{hover:!0,children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:f})}),(0,d.jsx)("br",{}),(0,d.jsx)("tbody",{children:h?(0,d.jsx)("td",{colSpan:7,children:(0,d.jsx)(l.LQ,{color:"warning",style:{margin:"auto",display:"flex"}})}):v})]})}},94815:function(e,s,a){var n=a(1413),l=a(78983),i=a(80184);s.Z=function(e){return(0,i.jsxs)(l.YR,{className:"mb-4 ".concat(e.className),style:(0,n.Z)({display:"flex",flexDirection:"column"},e.style),children:[(0,i.jsx)(l.jO,{"aria-label":"Username",style:{width:"100%",borderRadius:"8px",color:"#838AA2",fontSize:"16px"},size:"lg",label:e.label,type:e.type,disabled:e.disabled,value:e.value,onChange:e.onChange,className:"form-input-textfield ".concat(e.error?"is-invalid":""),placeholder:e.placeholder}),e.error&&(0,i.jsx)("div",{className:"invalid-feedback",children:e.errorText})]})}},33636:function(e,s,a){a.r(s),a.d(s,{default:function(){return g}});var n=a(29439),l=a(78983),i=a(48355),t=a(644),r=a(93433),c=a(82463),o=a(94815),d=a(72791),u=a(41703),h=a(29653),m=a(11654),x=a(80184),p=function(e){var s,a=e.close,i=e.visible,t=e.article,p=(0,d.useState)(""),f=(0,n.Z)(p,2),v=f[0],j=f[1],b=(0,d.useState)([]),g=(0,n.Z)(b,2),y=g[0],N=g[1],C=(0,d.useState)(!0),Z=(0,n.Z)(C,2),A=Z[0],_=(Z[1],(0,d.useState)("")),w=(0,n.Z)(_,2),k=w[0],S=w[1],E=(0,d.useState)({show:!1,message:"",type:""}),I=(0,n.Z)(E,2),D=I[0],T=I[1],P=(0,u.O5)(v,{skip:A}),L=(0,n.Z)(P,2),B=L[0],R=L[1].data,F=(0,u.Q6)(),U=(0,n.Z)(F,2),G=U[0],O=U[1],W=O.data,q=O.isLoading,z=O.isSuccess,Y=O.isError,V=O.error;(0,d.useEffect)((function(){i&&S(t)}),[i]),(0,d.useEffect)((function(){var e,s,a;z&&T({show:!0,message:null===W||void 0===W||null===(e=W.data[0])||void 0===e?void 0:e.uiMessage,type:"success"});Y&&T({show:!0,message:null===V||void 0===V||null===(s=V.data)||void 0===s||null===(a=s.data[0])||void 0===a?void 0:a.uiMessage,type:"danger"})}),[z,Y]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(l.Tk,{backdrop:!0,visible:i,size:"lg",onClose:function(){return a()},children:[(0,x.jsxs)("div",{className:"modal-header-container",children:[(0,x.jsx)(l.fl,{style:{color:"white"},children:"Assign People"}),(0,x.jsx)("img",{src:c.Z,onClick:a,style:{cursor:"pointer"}})]}),D.show&&(0,x.jsx)(m.Z,{type:D.type,message:D.message}),(0,x.jsx)(l.sD,{children:(0,x.jsxs)("div",{className:"add-article-asign-user-container",children:[(0,x.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,x.jsx)("div",{style:{width:"100%"},children:(0,x.jsx)(o.Z,{label:"Assign People",placeholder:"Search by username, firstname, lastname, email, or phonenumber",value:v,onChange:function(e){B(e.target.value),j(e.target.value)},isSearch:!0})})}),""!==v&&(0,x.jsx)("div",{className:"search-container",children:R&&R.data[0]&&(null===(s=R.data[0].users)||void 0===s?void 0:s.map((function(e,s){return(0,x.jsx)("div",{className:"item",children:(0,x.jsx)("span",{onClick:function(){return s=e,N([].concat((0,r.Z)(y),[s])),void j("");var s},children:e.username})},e.id)})))}),y.length>0&&(0,x.jsx)("div",{className:"searched-users-container",children:y.map((function(e){return(0,x.jsxs)("div",{className:"user-ctn",children:[(0,x.jsx)("span",{children:"".concat(e.first_name," ").concat(e.last_name)}),(0,x.jsx)("img",{src:h,onClick:function(){return function(e){var s=y.filter((function(s){return s.id!==e.id}));N(s)}(e)}})]},e.id)}))})]})}),(0,x.jsxs)(l.Ym,{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,x.jsx)(l.u5,{className:"close-model-btn",style:{boder:"1px solid #9C9C9C",backgroundColor:"white",color:"black",padding:"10px 40px"},onClick:function(){return a()},children:"Close"}),(0,x.jsx)(l.u5,{style:{backgroundColor:"#ECAA00",outline:"none",border:"none",color:"black",fontWeight:"bold",padding:"10px 40px"},onClick:function(){var e=y.map((function(e){return{user_id:e.id,article_id:k.id}})),s=(0,r.Z)(e);G({articleUsers:s})},disabled:q,children:"Submit"})]})]})})},f=a(89743),v=a(2677),j=a(57689),b=function(e){var s=e.close,a=e.visible,n=e.data;return(0,x.jsxs)(l.Tk,{backdrop:!0,visible:a,size:"lg",onClose:function(){return s()},children:[(0,x.jsxs)("div",{className:"modal-header-container",children:[(0,x.jsxs)(l.fl,{style:{color:"white"},children:[n.last_name," ",n.first_name]}),(0,x.jsx)("img",{src:c.Z,onClick:s,style:{cursor:"pointer"}})]}),(0,x.jsxs)(l.sD,{children:[(0,x.jsxs)("div",{style:{display:"flex",minWidth:"70%",padding:20,borderBottom:"1px dashed #CACCD4"},children:[(0,x.jsx)("span",{style:{color:"#838AA2"},children:"Lastname : "}),(0,x.jsx)("span",{style:{marginLeft:30},children:n.last_name})]}),(0,x.jsxs)("div",{style:{display:"flex",minWidth:"70%",padding:20,borderBottom:"1px dashed #CACCD4"},children:[(0,x.jsx)("span",{style:{color:"#838AA2"},children:"Firstname : "}),(0,x.jsx)("span",{style:{marginLeft:30},children:n.first_name})]}),(0,x.jsxs)("div",{style:{display:"flex",minWidth:"70%",padding:20,borderBottom:"1px dashed #CACCD4"},children:[(0,x.jsx)("span",{style:{color:"#838AA2"},children:"email : "}),(0,x.jsx)("span",{style:{marginLeft:30},children:n.email})]}),(0,x.jsxs)("div",{style:{display:"flex",minWidth:"70%",padding:20,borderBottom:"1px dashed #CACCD4"},children:[(0,x.jsx)("span",{style:{color:"#838AA2"},children:"Phone number : "}),(0,x.jsx)("span",{style:{marginLeft:30},children:n.phone_number})]}),(0,x.jsxs)("div",{style:{display:"flex",minWidth:"70%",padding:20,borderBottom:"1px dashed #CACCD4"},children:[(0,x.jsx)("span",{style:{color:"#838AA2"},children:"Branch : "}),(0,x.jsx)("span",{style:{marginLeft:30},children:n.branch})]})]})]})},g=function(){var e,s=(0,d.useState)(!1),a=(0,n.Z)(s,2),r=a[0],c=a[1],o=(0,j.TH)().state.article,h=(0,u.vQ)(o.id).data,m=(0,d.useState)(""),g=(0,n.Z)(m,2),y=g[0],N=g[1],C=(0,d.useState)(!1),Z=(0,n.Z)(C,2),A=Z[0],_=Z[1],w=(0,u.y5)(),k=(0,n.Z)(w,2),S=k[0];!function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(k[1]);return(0,x.jsxs)(l.b7,{xs:12,children:[(0,x.jsx)(l.xH,{className:"mb-4",children:(0,x.jsxs)(l.sl,{style:{padding:"20px 30px"},children:[(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(f.Z,{className:"view-item-row",children:[(0,x.jsxs)(v.Z,{className:"item-column",children:[(0,x.jsx)("span",{className:"title",children:"Article Number"}),(0,x.jsx)("span",{className:"value",children:o.article_no})]}),(0,x.jsxs)(v.Z,{className:"item-column",children:[(0,x.jsx)("span",{className:"title",children:"Article Description"}),(0,x.jsx)("span",{className:"value",children:o.description||"-"})]})]}),(0,x.jsxs)(f.Z,{className:"view-item-row",children:[(0,x.jsxs)(v.Z,{className:"item-column",children:[(0,x.jsx)("span",{className:"title",children:"Action required"}),(0,x.jsx)("span",{className:"value",children:o.action_required})]}),(0,x.jsxs)(v.Z,{className:"item-column",children:[(0,x.jsx)("span",{className:"title",children:"Impact"}),(0,x.jsx)("span",{className:"value",children:o.impact||"-"})]})]}),(0,x.jsxs)(f.Z,{className:"view-item-row",children:[(0,x.jsxs)(v.Z,{className:"item-column",children:[(0,x.jsx)("span",{className:"title",children:"Self Assessment Frequency"}),(0,x.jsx)("span",{className:"value",children:o.nu||"-"})]}),(0,x.jsxs)(v.Z,{className:"item-column",children:[(0,x.jsx)("span",{className:"title",children:"Action Frequency"}),(0,x.jsx)("span",{className:"value",children:o.action_frequency})]})]})]}),(0,x.jsxs)("div",{className:"add-articles-container",children:[(0,x.jsx)("div",{className:"articles-container",children:(0,x.jsx)("span",{children:" Assigned People "})}),(0,x.jsx)(l.u5,{style:{backgroundColor:"#ECAA00",outline:"none",border:"none",color:"black",fontWeight:"bold",padding:"10px 40px"},onClick:function(){c(!0)},children:"Assign People"})]}),(0,x.jsx)(i.Z,{hasDeleteBtn:!0,data:null===h||void 0===h||null===(e=h.data[0])||void 0===e?void 0:e.users,headers:t.ZB,handleViewItem:function(e){N(e),_(!0)},handleDeleteItem:function(e){var s={articleUsers:[{user_id:e.id,article_id:o.id}]};S(s)}})]})}),(0,x.jsx)(p,{visible:r,close:function(){return c(!1)},article:o}),(0,x.jsx)(b,{visible:A,close:function(){_(!1)},data:y})]})}},2677:function(e,s,a){var n=a(29439),l=a(1413),i=a(45987),t=a(81694),r=a.n(t),c=a(72791),o=a(10162),d=a(80184),u=["as","bsPrefix","className"],h=["className"];var m=c.forwardRef((function(e,s){var a=function(e){var s=e.as,a=e.bsPrefix,n=e.className,t=(0,i.Z)(e,u);a=(0,o.vE)(a,"col");var c=(0,o.pi)(),d=(0,o.zG)(),h=[],m=[];return c.forEach((function(e){var s,n,l,i=t[e];delete t[e],"object"===typeof i&&null!=i?(s=i.span,n=i.offset,l=i.order):s=i;var r=e!==d?"-".concat(e):"";s&&h.push(!0===s?"".concat(a).concat(r):"".concat(a).concat(r,"-").concat(s)),null!=l&&m.push("order".concat(r,"-").concat(l)),null!=n&&m.push("offset".concat(r,"-").concat(n))})),[(0,l.Z)((0,l.Z)({},t),{},{className:r().apply(void 0,[n].concat(h,m))}),{as:s,bsPrefix:a,spans:h}]}(e),t=(0,n.Z)(a,2),c=t[0],m=c.className,x=(0,i.Z)(c,h),p=t[1],f=p.as,v=void 0===f?"div":f,j=p.bsPrefix,b=p.spans;return(0,d.jsx)(v,(0,l.Z)((0,l.Z)({},x),{},{ref:s,className:r()(m,!b.length&&j)}))}));m.displayName="Col",s.Z=m},89743:function(e,s,a){var n=a(1413),l=a(45987),i=a(81694),t=a.n(i),r=a(72791),c=a(10162),o=a(80184),d=["bsPrefix","className","as"],u=r.forwardRef((function(e,s){var a=e.bsPrefix,i=e.className,r=e.as,u=void 0===r?"div":r,h=(0,l.Z)(e,d),m=(0,c.vE)(a,"row"),x=(0,c.pi)(),p=(0,c.zG)(),f="".concat(m,"-cols"),v=[];return x.forEach((function(e){var s,a=h[e];delete h[e],s=null!=a&&"object"===typeof a?a.cols:a;var n=e!==p?"-".concat(e):"";null!=s&&v.push("".concat(f).concat(n,"-").concat(s))})),(0,o.jsx)(u,(0,n.Z)((0,n.Z)({ref:s},h),{},{className:t().apply(void 0,[i,m].concat(v))}))}));u.displayName="Row",s.Z=u},29653:function(e,s,a){e.exports=a.p+"static/media/close-icon-black.ad1c211225dc27d3345c.jpeg"}}]);
//# sourceMappingURL=636.906172b0.chunk.js.map