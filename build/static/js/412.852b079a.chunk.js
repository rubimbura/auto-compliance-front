"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[412],{82463:function(e,n,a){a(72791);n.Z=a.p+"static/media/close-icon.ef9648a920682e5d9d0fa22a43f9b578.svg"},644:function(e,n,a){a.d(n,{Gq:function(){return s},TI:function(){return t},YC:function(){return l},ZB:function(){return i}});var s=[{label:"REGULATION REFERENCE",value:"regulation_ref"},{label:"ISSUING DATE",value:"created_date"},{label:"EFFECTIVE DATE",value:"effective_date"},{label:"ISSUING AUTHORITY",value:"issuing_authority"},{label:"TYPE",value:"type"},{label:"STATUS",value:"status"},{label:"ACTIONS",value:"actions"}],i=[{label:"Assigned people",value:"last_name"},{label:"Assigned Date",value:"input_date"},{label:"Compliance status",value:"status"},{label:"Gap",value:"email"},{label:"Action Plan",value:"phone_number"},{label:"Deadline",value:"branch"},{label:"Actions",value:"actions"}],l=[{label:"First Name",value:"first_name"},{label:"Last Name",value:"last_name"},{label:"Email",value:"email"},{label:"Phone Number",value:"phone_number"},{label:"Status",value:"status"},{label:"Role",value:"user_role"},{label:"Actions",value:"actions"}],t=[{label:"AVAILABLE PERMISSIONS",value:"name"}]},48355:function(e,n,a){a.d(n,{Z:function(){return u}});var s=a(62591),i=a(78983);a(72791);var l=a.p+"static/media/sort-up.fb5e1d92b6484295020e097753af964f.svg";var t=a.p+"static/media/sort-down.94843ef6e7f1c11fff89fc6a09eddf3c.svg",r=a(3579),c=a(41286),o=a(27247),d=a(80184),u=function(e){var n=e.headers,a=e.data,u=e.handleViewItem,h=e.isLoading,v=e.handleSortUp,m=e.handleSortDown,x=(e.hasDeleteBtn,e.handleDeleteItem),f=[];(null===n||void 0===n?void 0:n.length)>0&&(f=n.map((function(e){return(0,d.jsx)("th",{children:(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("div",{children:e.label||"-"}),(0,d.jsx)("div",{className:"table-sort-container ml-2",children:e.isSort&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{src:l,onClick:v}),(0,d.jsx)("img",{src:t,onClick:m})]})})]})})})));var j=[];return(null===a||void 0===a?void 0:a.length)>0&&(j=a.map((function(e,a){var s=Object.assign({},e);return s.actions=(0,d.jsxs)("div",{style:{display:"flex",gap:10},children:[(0,d.jsx)("div",{onClick:function(){return u(e)},children:(0,d.jsx)(r.Z,{style:{width:16,height:16,cursor:"pointer"}})}),(0,d.jsx)("div",{onClick:function(){return handleUpdateItem(e)},children:(0,d.jsx)(c.Z,{style:{width:16,height:16,cursor:"pointer"}})}),(0,d.jsx)("div",{onClick:function(){return x(e)},children:(0,d.jsx)(o.Z,{style:{width:16,height:16,cursor:"pointer",color:"#ff9494"}})})]}),(0,d.jsx)("tr",{children:n.map((function(e){return(0,d.jsxs)("td",{className:s[e.value],children:[" ",s[e.value]||"-"]})}))})}))),(0,d.jsxs)(s.Z,{hover:!0,children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:f})}),(0,d.jsx)("br",{}),(0,d.jsx)("tbody",{children:h?(0,d.jsx)("td",{colSpan:7,children:(0,d.jsx)(i.LQ,{color:"warning",style:{margin:"auto",display:"flex"}})}):j})]})}},6530:function(e,n,a){a.d(n,{Z:function(){return l}});var s=a(78983),i=a(80184),l=function(e){var n=e.hasDasborad,a=e.handleAddButton,l=e.buttonTitle;return(0,i.jsxs)("div",{className:"page-header-container",children:[n&&(0,i.jsxs)("div",{className:"statistics-container",children:[(0,i.jsxs)("div",{className:"card-container total",children:[(0,i.jsx)("span",{className:"title",children:"Total Regulations:"}),(0,i.jsx)("span",{className:"value",children:"30"})]}),(0,i.jsxs)("div",{className:"card-container success",children:[(0,i.jsx)("span",{className:"title ",children:"Complied:"}),(0,i.jsx)("span",{className:"value",children:"5"})]}),(0,i.jsxs)("div",{className:"card-container pending",children:[(0,i.jsx)("span",{className:"title",children:"Pending:"}),(0,i.jsx)("span",{className:"value",children:"10"})]}),(0,i.jsxs)("div",{className:"card-container failed",children:[(0,i.jsx)("span",{className:"title",children:"Non Complied:"}),(0,i.jsx)("span",{className:"value",children:"15"})]})]}),(0,i.jsx)(s.u5,{style:{backgroundColor:"#ECAA00",outline:"none",border:"none",color:"black",fontWeight:"bold",marginLeft:"auto"},onClick:a,children:l})]})}},2063:function(e,n,a){var s=a(78983),i=a(80184);n.Z=function(e){return(0,i.jsxs)(s.YR,{className:"mb-4 ".concat(e.className),children:[(0,i.jsx)(s.PB,{id:"exampleFormControlTextarea1",rows:"3",size:"lg",style:{width:"100%",borderRadius:"8px",color:"#838AA2",fontSize:"16px"},label:e.label,onChange:e.onChange,value:e.value,className:"".concat(e.error?"is-invalid":"")}),e.error&&(0,i.jsx)("div",{className:"invalid-feedback",children:e.errorText})]})}},94815:function(e,n,a){var s=a(1413),i=a(78983),l=a(80184);n.Z=function(e){return(0,l.jsxs)(i.YR,{className:"mb-4 ".concat(e.className),style:(0,s.Z)({display:"flex",flexDirection:"column"},e.style),children:[(0,l.jsx)(i.jO,{"aria-label":"Username",style:{width:"100%",borderRadius:"8px",color:"#838AA2",fontSize:"16px"},size:"lg",label:e.label,type:e.type,disabled:e.disabled,value:e.value,onChange:e.onChange,className:"form-input-textfield ".concat(e.error?"is-invalid":""),placeholder:e.placeholder}),e.error&&(0,l.jsx)("div",{className:"invalid-feedback",children:e.errorText})]})}},71412:function(e,n,a){a.r(n),a.d(n,{default:function(){return b}});var s=a(29439),i=a(78983),l=a(6530),t=a(48355),r=a(644),c=a(93433),o=a(1413),d=a(82463),u=a(94815),h=a(72791),v=a(42419),m=a(35585),x=a(2063),f=a(41703),j=a(80184),p=function(e){var n=e.close,a=e.visible,l=(0,f.G3)().data,t=(0,f.Lh)(),r=(0,s.Z)(t,2),p=r[0],b=r[1],g=b.isLoading,N=b.error,Z=b.isError,C=b.isSuccess,y=(0,h.useState)({}),A=(0,s.Z)(y,2),S=A[0],_=A[1],k=(0,h.useState)(),w=(0,s.Z)(k,2),E=w[0],T=w[1],I=(0,h.useState)([]),R=(0,s.Z)(I,2),D=R[0],L=R[1],Y=(0,h.useState)({}),U=(0,s.Z)(Y,2),z=U[0],F=U[1],B=(0,h.useState)({}),G=(0,s.Z)(B,2),O=G[0],P=G[1];(0,h.useEffect)((function(){var e,a;(C&&(n(),_({}),P({}),F({})),Z)&&P((0,o.Z)((0,o.Z)({},O),{},{response:null===(e=N.data)||void 0===e||null===(a=e.data[0])||void 0===a?void 0:a.uiMessage}))}),[C,Z]),(0,h.useEffect)((function(){var e;l&&T(null===l||void 0===l||null===(e=l.data[0])||void 0===e?void 0:e.permissions)}),[l]);var W=(null===E||void 0===E?void 0:E.length)>0&&E.map((function(e,n){return(0,j.jsxs)("div",{className:"select-item-container",onClick:function(){return function(e){var n=E.filter((function(n){return n.id!==e.id}));T(n),L([].concat((0,c.Z)(D),[e]))}(e)},children:[(0,j.jsx)("span",{children:e.name}),(0,j.jsx)(v.Z,{style:{color:"black",fontWeight:"bold"}})]},n)})),V=D.map((function(e,n){return(0,j.jsxs)("div",{className:"select-item-container-active",onClick:function(){return n=e,L((function(){return D.filter((function(e){return e.id!==n.id}))})),void T([].concat((0,c.Z)(E),[n]));var n},children:[(0,j.jsx)("span",{children:e.name}),(0,j.jsx)(m.Z,{style:{color:"white",fontWeight:"bold"}})]},n)})),H=function(e){if(e.preventDefault(),!S.name)return F((0,o.Z)((0,o.Z)({},z),{},{name:!0})),void P((0,o.Z)((0,o.Z)({},O),{},{name:"Name is required"}));P({}),F({});var n=D.map((function(e){return{permission_id:e.id}})),a=[{name:S.name,permissions:n}];p({roles:a})};return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(i.Tk,{backdrop:!0,visible:a,size:"xl",onClose:function(){return n()},children:(0,j.jsxs)("form",{onSubmit:H,children:[(0,j.jsxs)("div",{className:"modal-header-container",children:[(0,j.jsx)(i.fl,{style:{color:"white"},children:"Create a new role"}),(0,j.jsx)("img",{src:d.Z,onClick:n,style:{cursor:"pointer"}})]}),(0,j.jsxs)(i.sD,{style:{padding:"0px 30px"},children:[(0,j.jsx)("div",{style:{padding:"20px 0px"},children:(0,j.jsx)("span",{style:{color:"red"},children:O.response})}),(0,j.jsx)(u.Z,{label:"Name",type:"text",value:S.name,onChange:function(e){_((0,o.Z)((0,o.Z)({},S),{},{name:e.target.value}))},error:z.name,errorText:O.name}),(0,j.jsx)(x.Z,{label:"Description",value:S.description,onChange:function(e){_((0,o.Z)((0,o.Z)({},S),{},{description:e.target.value}))}}),(0,j.jsx)("div",{className:"assign-permission-container",children:(0,j.jsx)(i.YR,{children:(0,j.jsx)(i.Jh,{className:"assign-text",children:"Assign permissions"})})}),(0,j.jsxs)("div",{className:"create-role-permision-container",children:[(0,j.jsx)("div",{className:"first-row item-container",children:W}),(0,j.jsx)("div",{className:"second-row item-container",children:V})]}),(0,j.jsx)("div",{className:"assign-permission-container",children:(0,j.jsx)(i.YR,{children:(0,j.jsx)(i.Jh,{className:"assign-text",children:"Assign menu"})})}),(0,j.jsxs)("div",{className:"create-role-permision-container",children:[(0,j.jsx)("div",{className:"first-row item-container",children:W}),(0,j.jsxs)("div",{className:"second-row item-container",children:[(0,j.jsxs)("div",{className:"select-item-container-active",children:[(0,j.jsx)("span",{children:"create staff"}),(0,j.jsx)(m.Z,{style:{color:"white",fontWeight:"bold"}})]}),(0,j.jsxs)("div",{className:"select-item-container-active",children:[(0,j.jsx)("span",{children:"create staff"}),(0,j.jsx)(m.Z,{style:{color:"white",fontWeight:"bold"}})]})]})]})]}),(0,j.jsx)(i.Ym,{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,j.jsx)(i.u5,{style:{backgroundColor:"#ECAA00",outline:"none",border:"none",color:"black",fontWeight:"bold",padding:"10px 40px"},onClick:H,disabled:g,children:"Submit"})})]})})})},b=function(){var e=(0,h.useState)(!1),n=(0,s.Z)(e,2),a=n[0],c=n[1];return(0,j.jsxs)(i.b7,{sx:12,children:[(0,j.jsx)(l.Z,{buttonTitle:"Add a role",handleAddButton:function(){c((function(e){return!e}))}}),(0,j.jsx)(i.xH,{className:"mb-4",children:(0,j.jsx)(i.sl,{children:(0,j.jsx)(t.Z,{headers:r.YC,handleViewItem:function(e){},handleDeleteItem:function(){}})})}),(0,j.jsx)(p,{visible:a,close:function(){return c(!1)}})]})}},42419:function(e,n,a){var s=a(64836);n.Z=void 0;var i=s(a(45649)),l=a(80184),t=(0,i.default)((0,l.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=t},35585:function(e,n,a){var s=a(64836);n.Z=void 0;var i=s(a(45649)),l=a(80184),t=(0,i.default)((0,l.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");n.Z=t}}]);
//# sourceMappingURL=412.852b079a.chunk.js.map