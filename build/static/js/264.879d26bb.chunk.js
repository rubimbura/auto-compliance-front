"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[264],{644:function(e,a,l){l.d(a,{Al:function(){return c},Gq:function(){return t},TI:function(){return s},UG:function(){return u},YC:function(){return i},ZB:function(){return n},lw:function(){return r}});var t=[{label:"Regulation Reference",value:"reference"},{label:"Issuing Date",value:"createdTime"},{label:"Effective Date",value:"effectiveDate"},{label:"Issuing Authority",value:"issuingAuthority"},{label:"Type",value:"type"},{label:"Status",value:"status"},{label:"Actions",value:"actions"}],n=[{label:"Assigned people",value:"last_name"},{label:"Assigned Date",value:"input_date"},{label:"Compliance status",value:"status"},{label:"Gap",value:"email"},{label:"Action Plan",value:"phone_number"},{label:"Deadline",value:"branch"},{label:"Actions",value:"actions"}],i=[{label:"First Name",value:"first_name"},{label:"Last Name",value:"last_name"},{label:"Email",value:"email"},{label:"Phone Number",value:"phone_number"},{label:"Status",value:"status"},{label:"Role",value:"user_role"},{label:"Actions",value:"actions"}],s=[{label:"AVAILABLE PERMISSIONS",value:"name"}],r=[{label:"Name",value:"name"},{label:"Actions",value:"actions"}],u=[{label:"Name",value:"name"},{label:"Country",value:"country"}],c=[{label:"Name",value:"name"},{label:"Actions",value:"actions"}]},48355:function(e,a,l){l.d(a,{Z:function(){return d}});var t=l(62591),n=l(78983);l(72791);var i=l.p+"static/media/sort-up.fb5e1d92b6484295020e097753af964f.svg";var s=l.p+"static/media/sort-down.94843ef6e7f1c11fff89fc6a09eddf3c.svg",r=l(3579),u=l(41286),c=l(27247),o=l(80184),d=function(e){var a=e.headers,l=e.data,d=e.handleViewItem,v=e.isLoading,h=e.handleSortUp,f=e.handleSortDown,m=e.hasDeleteBtn,b=e.handleDeleteItem,x=e.handleUpdateItem,p=e.hasViewBtn,j=e.hasEditBtn,g=[];(null===a||void 0===a?void 0:a.length)>0&&(g=a.map((function(e){return(0,o.jsx)("th",{className:"table-headers-text",children:(0,o.jsxs)("div",{className:"d-flex",children:[(0,o.jsx)("div",{style:{marginLeft:"actions"===e.value?"auto":""},children:e.label||"-"}),(0,o.jsx)("div",{className:"table-sort-container ml-2",children:e.isSort&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:i,onClick:h}),(0,o.jsx)("img",{src:s,onClick:f})]})})]})})})));var _=[];return(null===l||void 0===l?void 0:l.length)>0&&(_=l.map((function(e,l){var t=Object.assign({},e);return t.actions=(0,o.jsxs)("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[p&&(0,o.jsx)("div",{onClick:function(){return d(e)},children:(0,o.jsx)(r.Z,{style:{width:16,height:16,cursor:"pointer"}})}),j&&(0,o.jsx)("div",{onClick:function(){return x(e)},children:(0,o.jsx)(u.Z,{style:{width:16,height:16,cursor:"pointer"}})}),m&&(0,o.jsx)("div",{onClick:function(){return b(e)},children:(0,o.jsx)(c.Z,{style:{width:16,height:16,cursor:"pointer",color:"#ff9494"}})})]}),(0,o.jsx)("tr",{className:"table-row-item",children:a.map((function(e){return(0,o.jsxs)("td",{className:"table-body-text ".concat(t[e.value]),children:[" ",t[e.value]||"-"]})}))})}))),(0,o.jsxs)(t.Z,{hover:!0,striped:!0,children:[(0,o.jsx)("thead",{children:(0,o.jsx)("tr",{children:g})}),(0,o.jsx)("br",{}),(0,o.jsx)("tbody",{children:v?(0,o.jsx)("td",{colSpan:7,children:(0,o.jsx)(n.LQ,{color:"warning",style:{margin:"auto",display:"flex"}})}):_})]})}},96264:function(e,a,l){l.r(a);var t=l(78983),n=l(48355),i=l(91343),s=l(95048),r=(l(59821),l(644)),u=l(57689),c=l(80184);a.default=function(){(0,s.I0)();var e,a=(0,u.s0)(),l=(0,i.Hg)("regulations"),o=l.data,d=l.isLoading;return(0,c.jsx)(t.b7,{xs:12,children:(0,c.jsx)(t.xH,{className:"mb-4",children:(0,c.jsx)(t.sl,{children:(0,c.jsx)(n.Z,{headers:r.Gq,data:null===o||void 0===o||null===(e=o.data[0])||void 0===e?void 0:e.regulations,handleViewItem:function(e){a("/user/regulations/assesment",{state:{details:e}})},isLoading:d})})})})}}}]);
//# sourceMappingURL=264.879d26bb.chunk.js.map