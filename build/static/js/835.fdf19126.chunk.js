"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[835],{82463:function(e,a,n){n(72791);a.Z=n.p+"static/media/close-icon.ef9648a920682e5d9d0fa22a43f9b578.svg"},644:function(e,a,n){n.d(a,{Al:function(){return o},Gq:function(){return l},TI:function(){return i},UG:function(){return c},YC:function(){return s},ZB:function(){return t},lw:function(){return r}});var l=[{label:"Regulation Reference",value:"reference"},{label:"Issuing Date",value:"createdTime"},{label:"Effective Date",value:"effectiveDate"},{label:"Issuing Authority",value:"issuingAuthority"},{label:"Type",value:"type"},{label:"Status",value:"status"},{label:"Actions",value:"actions"}],t=[{label:"Assigned people",value:"last_name"},{label:"Assigned Date",value:"input_date"},{label:"Compliance status",value:"status"},{label:"Gap",value:"email"},{label:"Action Plan",value:"phone_number"},{label:"Deadline",value:"branch"},{label:"Actions",value:"actions"}],s=[{label:"First Name",value:"first_name"},{label:"Last Name",value:"last_name"},{label:"Email",value:"email"},{label:"Phone Number",value:"phone_number"},{label:"Status",value:"status"},{label:"Role",value:"user_role"},{label:"Actions",value:"actions"}],i=[{label:"AVAILABLE PERMISSIONS",value:"name"}],r=[{label:"Name",value:"name"},{label:"Actions",value:"actions"}],c=[{label:"Name",value:"name"},{label:"Country",value:"country"}],o=[{label:"Name",value:"name"},{label:"Actions",value:"actions"}]},48355:function(e,a,n){n.d(a,{Z:function(){return u}});var l=n(62591),t=n(78983);n(72791);var s=n.p+"static/media/sort-up.fb5e1d92b6484295020e097753af964f.svg";var i=n.p+"static/media/sort-down.94843ef6e7f1c11fff89fc6a09eddf3c.svg",r=n(3579),c=n(41286),o=n(27247),d=n(80184),u=function(e){var a=e.headers,n=e.data,u=e.handleViewItem,v=e.isLoading,h=e.handleSortUp,m=e.handleSortDown,f=e.hasDeleteBtn,x=e.handleDeleteItem,b=e.handleUpdateItem,p=e.hasViewBtn,j=e.hasEditBtn,g=[];(null===a||void 0===a?void 0:a.length)>0&&(g=a.map((function(e){return(0,d.jsx)("th",{className:"table-headers-text",children:(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("div",{style:{marginLeft:"actions"===e.value?"auto":""},children:e.label||"-"}),(0,d.jsx)("div",{className:"table-sort-container ml-2",children:e.isSort&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{src:s,onClick:h}),(0,d.jsx)("img",{src:i,onClick:m})]})})]})})})));var y=[];return(null===n||void 0===n?void 0:n.length)>0&&(y=n.map((function(e,n){var l=Object.assign({},e);return l.actions=(0,d.jsxs)("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[p&&(0,d.jsx)("div",{onClick:function(){return u(e)},children:(0,d.jsx)(r.Z,{style:{width:16,height:16,cursor:"pointer"}})}),j&&(0,d.jsx)("div",{onClick:function(){return b(e)},children:(0,d.jsx)(c.Z,{style:{width:16,height:16,cursor:"pointer"}})}),f&&(0,d.jsx)("div",{onClick:function(){return x(e)},children:(0,d.jsx)(o.Z,{style:{width:16,height:16,cursor:"pointer",color:"#ff9494"}})})]}),(0,d.jsx)("tr",{className:"table-row-item",children:a.map((function(e){return(0,d.jsxs)("td",{className:"table-body-text ".concat(l[e.value]),children:[" ",l[e.value]||"-"]})}))})}))),(0,d.jsxs)(l.Z,{hover:!0,striped:!0,children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:g})}),(0,d.jsx)("br",{}),(0,d.jsx)("tbody",{children:v?(0,d.jsx)("td",{colSpan:7,children:(0,d.jsx)(t.LQ,{color:"warning",style:{margin:"auto",display:"flex"}})}):y})]})}},6530:function(e,a,n){n.d(a,{Z:function(){return s}});var l=n(78983),t=n(80184),s=function(e){var a=e.hasDasborad,n=e.handleAddButton,s=e.buttonTitle;return(0,t.jsxs)("div",{className:"page-header-container",children:[a?(0,t.jsxs)("div",{className:"statistics-container",children:[(0,t.jsxs)("div",{className:"card-container total",children:[(0,t.jsx)("span",{className:"title",children:"Total Regulations:"}),(0,t.jsx)("span",{className:"value",children:"30"})]}),(0,t.jsxs)("div",{className:"card-container success",children:[(0,t.jsx)("span",{className:"title ",children:"Complied:"}),(0,t.jsx)("span",{className:"value",children:"5"})]}),(0,t.jsxs)("div",{className:"card-container pending",children:[(0,t.jsx)("span",{className:"title",children:"Pending:"}),(0,t.jsx)("span",{className:"value",children:"10"})]}),(0,t.jsxs)("div",{className:"card-container failed",children:[(0,t.jsx)("span",{className:"title",children:"Non Complied:"}),(0,t.jsx)("span",{className:"value",children:"15"})]})]}):(0,t.jsx)("div",{}),(0,t.jsx)(l.u5,{style:{},onClick:n,className:"add-button-container",children:s})]})}},94815:function(e,a,n){var l=n(1413),t=n(78983),s=n(80184);a.Z=function(e){return(0,s.jsxs)(t.YR,{className:"mb-4 ".concat(e.className),style:(0,l.Z)({display:"flex",flexDirection:"column"},e.style),children:[(0,s.jsx)(t.jO,{"aria-label":"Username",style:{width:"100%",borderRadius:"8px",color:"#838AA2",fontSize:"16px"},size:"lg",label:e.label,type:e.type,disabled:e.disabled,value:e.value,onChange:e.onChange,className:"form-input-textfield ".concat(e.error?"is-invalid":""),placeholder:e.placeholder}),e.error&&(0,s.jsx)("div",{className:"invalid-feedback",children:e.errorText})]})}},37835:function(e,a,n){n.r(a),n.d(a,{default:function(){return f}});var l=n(29439),t=n(78983),s=n(49327),i=n(48355),r=n(644),c=n(6530),o=n(72791),d=n(1413),u=n(82463),v=n(94815),h=n(80184),m=function(e){var a=e.close,n=e.visible,i=e.details,r=(0,o.useState)({}),c=(0,l.Z)(r,2),m=c[0],f=c[1],x=(0,o.useState)({}),b=(0,l.Z)(x,2),p=b[0],j=b[1],g=(0,o.useState)({}),y=(0,l.Z)(g,2),N=y[0],Z=y[1],C=(0,s.TW)(),A=(0,l.Z)(C,2),_=A[0],S=A[1],k=S.isLoading,w=S.error,D=S.isError,I=S.isSuccess;(0,o.useEffect)((function(){var e,n,l;(I&&(a(),f({}),Z({}),j({})),D)&&Z((0,d.Z)((0,d.Z)({},N),{},{response:(null===(e=w.data)||void 0===e?void 0:e.data)&&(null===(n=w.data)||void 0===n||null===(l=n.data[0])||void 0===l?void 0:l.uiMessage)}))}),[I,D]),(0,o.useEffect)((function(){i&&f(i)}),[i]);var T=function(e){if(e.preventDefault(),!m.name)return j((0,d.Z)((0,d.Z)({},p),{},{name:!0})),void Z((0,d.Z)((0,d.Z)({},N),{},{name:"Name is required"}));var a=[{name:m.name,country:m.country}];_({subsidiaries:a})};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(t.Tk,{backdrop:!0,visible:n,size:"lg",onClose:function(){return a()},children:(0,h.jsxs)("form",{onSubmit:T,children:[(0,h.jsxs)("div",{className:"modal-header-container",children:[(0,h.jsx)(t.fl,{style:{color:"white"},children:i?"Update a governance body":"Create a new governance body"}),(0,h.jsx)("img",{src:u.Z,onClick:a,style:{cursor:"pointer"}})]}),(0,h.jsxs)(t.sD,{children:[(0,h.jsx)("div",{style:{padding:"20px 0px"},children:(0,h.jsx)("span",{style:{color:"red"},children:N.response})}),(0,h.jsx)(v.Z,{label:"Name",type:"text",value:m.name,onChange:function(e){f((0,d.Z)((0,d.Z)({},m),{},{name:e.target.value}))},error:p.name,errorText:N.name}),(0,h.jsx)(v.Z,{label:"Country",type:"text",value:m.country,onChange:function(e){f((0,d.Z)((0,d.Z)({},m),{},{country:e.target.value}))},error:p.name,errorText:N.name})]}),(0,h.jsx)(t.Ym,{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,h.jsx)(t.u5,{style:{backgroundColor:"#ECAA00",outline:"none",border:"none",color:"black",fontWeight:"bold",padding:"10px 40px"},onClick:T,disabled:k,children:"Submit"})})]})})})},f=function(){var e,a=(0,s.s)(),n=a.data,d=a.isLoading,u=(0,o.useState)(!1),v=(0,l.Z)(u,2),f=v[0],x=v[1],b=(0,o.useState)(),p=(0,l.Z)(b,2),j=p[0],g=p[1];return(0,h.jsxs)(t.b7,{xs:12,children:[(0,h.jsx)(c.Z,{hasDasborad:!1,buttonTitle:"Add a new subsidiary",handleAddButton:function(){x((function(e){return!e})),g("")}}),(0,h.jsx)(t.xH,{className:"mb-4",children:(0,h.jsx)(t.sl,{children:(0,h.jsx)(i.Z,{headers:r.UG,data:(null===n||void 0===n?void 0:n.data)&&(null===n||void 0===n||null===(e=n.data[0])||void 0===e?void 0:e.subsidiaries),hasEditBtn:!0,handleUpdateItem:function(e){g(e),x((function(e){return!e}))},isLoading:d})})}),(0,h.jsx)(m,{close:function(){return x(!1)},visible:f,details:j})]})}}}]);
//# sourceMappingURL=835.fdf19126.chunk.js.map