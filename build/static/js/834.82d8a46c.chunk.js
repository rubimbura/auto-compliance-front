"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[834],{82463:function(e,n,r){r(72791);n.Z=r.p+"static/media/close-icon.ef9648a920682e5d9d0fa22a43f9b578.svg"},644:function(e,n,r){r.d(n,{Gq:function(){return t},TI:function(){return l},YC:function(){return i},ZB:function(){return a},lw:function(){return o}});var t=[{label:"Regulation Reference",value:"reference"},{label:"Issuing Date",value:"createdTime"},{label:"Effective Date",value:"effectiveDate"},{label:"Issuing Authority",value:"issuingAuthority"},{label:"Type",value:"type"},{label:"Status",value:"status"},{label:"Actions",value:"actions"}],a=[{label:"Assigned people",value:"last_name"},{label:"Assigned Date",value:"input_date"},{label:"Compliance status",value:"status"},{label:"Gap",value:"email"},{label:"Action Plan",value:"phone_number"},{label:"Deadline",value:"branch"},{label:"Actions",value:"actions"}],i=[{label:"First Name",value:"first_name"},{label:"Last Name",value:"last_name"},{label:"Email",value:"email"},{label:"Phone Number",value:"phone_number"},{label:"Status",value:"status"},{label:"Role",value:"user_role"},{label:"Actions",value:"actions"}],l=[{label:"AVAILABLE PERMISSIONS",value:"name"}],o=[{label:"Name",value:"name"},{label:"Actions",value:"actions"}]},48355:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(62591),a=r(78983);r(72791);var i=r.p+"static/media/sort-up.fb5e1d92b6484295020e097753af964f.svg";var l=r.p+"static/media/sort-down.94843ef6e7f1c11fff89fc6a09eddf3c.svg",o=r(3579),s=r(41286),c=r(27247),d=r(80184),u=function(e){var n=e.headers,r=e.data,u=e.handleViewItem,h=e.isLoading,m=e.handleSortUp,v=e.handleSortDown,p=e.hasDeleteBtn,f=e.handleDeleteItem,x=e.handleUpdateItem,b=e.hasViewBtn,g=e.hasEditBtn,Z=[];(null===n||void 0===n?void 0:n.length)>0&&(Z=n.map((function(e){return(0,d.jsx)("th",{className:"table-headers-text",children:(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("div",{style:{marginLeft:"actions"===e.value?"auto":""},children:e.label||"-"}),(0,d.jsx)("div",{className:"table-sort-container ml-2",children:e.isSort&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{src:i,onClick:m}),(0,d.jsx)("img",{src:l,onClick:v})]})})]})})})));var j=[];return(null===r||void 0===r?void 0:r.length)>0&&(j=r.map((function(e,r){var t=Object.assign({},e);return t.actions=(0,d.jsxs)("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[b&&(0,d.jsx)("div",{onClick:function(){return u(e)},children:(0,d.jsx)(o.Z,{style:{width:16,height:16,cursor:"pointer"}})}),g&&(0,d.jsx)("div",{onClick:function(){return x(e)},children:(0,d.jsx)(s.Z,{style:{width:16,height:16,cursor:"pointer"}})}),p&&(0,d.jsx)("div",{onClick:function(){return f(e)},children:(0,d.jsx)(c.Z,{style:{width:16,height:16,cursor:"pointer",color:"#ff9494"}})})]}),(0,d.jsx)("tr",{className:"table-row-item",children:n.map((function(e){return(0,d.jsxs)("td",{className:"table-body-text ".concat(t[e.value]),children:[" ",t[e.value]||"-"]})}))})}))),(0,d.jsxs)(t.Z,{hover:!0,striped:!0,children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:Z})}),(0,d.jsx)("br",{}),(0,d.jsx)("tbody",{children:h?(0,d.jsx)("td",{colSpan:7,children:(0,d.jsx)(a.LQ,{color:"warning",style:{margin:"auto",display:"flex"}})}):j})]})}},6530:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(78983),a=r(80184),i=function(e){var n=e.hasDasborad,r=e.handleAddButton,i=e.buttonTitle;return(0,a.jsxs)("div",{className:"page-header-container",children:[n?(0,a.jsxs)("div",{className:"statistics-container",children:[(0,a.jsxs)("div",{className:"card-container total",children:[(0,a.jsx)("span",{className:"title",children:"Total Regulations:"}),(0,a.jsx)("span",{className:"value",children:"30"})]}),(0,a.jsxs)("div",{className:"card-container success",children:[(0,a.jsx)("span",{className:"title ",children:"Complied:"}),(0,a.jsx)("span",{className:"value",children:"5"})]}),(0,a.jsxs)("div",{className:"card-container pending",children:[(0,a.jsx)("span",{className:"title",children:"Pending:"}),(0,a.jsx)("span",{className:"value",children:"10"})]}),(0,a.jsxs)("div",{className:"card-container failed",children:[(0,a.jsx)("span",{className:"title",children:"Non Complied:"}),(0,a.jsx)("span",{className:"value",children:"15"})]})]}):(0,a.jsx)("div",{}),(0,a.jsx)(t.u5,{style:{},onClick:r,className:"add-button-container",children:i})]})}},2063:function(e,n,r){var t=r(78983),a=r(80184);n.Z=function(e){return(0,a.jsxs)(t.YR,{className:"mb-4 ".concat(e.className),children:[(0,a.jsx)(t.PB,{id:"exampleFormControlTextarea1",rows:"3",size:"lg",style:{width:"100%",borderRadius:"8px",color:"#838AA2",fontSize:"16px"},label:e.label,onChange:e.onChange,value:e.value,className:"".concat(e.error?"is-invalid":"")}),e.error&&(0,a.jsx)("div",{className:"invalid-feedback",children:e.errorText})]})}},94815:function(e,n,r){var t=r(1413),a=r(78983),i=r(80184);n.Z=function(e){return(0,i.jsxs)(a.YR,{className:"mb-4 ".concat(e.className),style:(0,t.Z)({display:"flex",flexDirection:"column"},e.style),children:[(0,i.jsx)(a.jO,{"aria-label":"Username",style:{width:"100%",borderRadius:"8px",color:"#838AA2",fontSize:"16px"},size:"lg",label:e.label,type:e.type,disabled:e.disabled,value:e.value,onChange:e.onChange,className:"form-input-textfield ".concat(e.error?"is-invalid":""),placeholder:e.placeholder}),e.error&&(0,i.jsx)("div",{className:"invalid-feedback",children:e.errorText})]})}},67834:function(e,n,r){r.r(n),r.d(n,{default:function(){return oe}});var t=r(29439),a=r(78983),i=r(6530),l=r(48355),o=r(644),s=r(93433),c=r(1413),d=r(82463),u=r(94815),h=r(72791),m=r(42419),v=r(35585),p=r(2063),f=r(64157),x=r(4942),b=r(63366),g=r(87462),Z=r(28182),j=r(94419),y=r(92860),N=r(82466),k=r(21217),C=(0,r(55551).ZP)(),w=r(54955),S=r(87416),P=["sx"],A=function(e){var n,r,t={systemProps:{},otherProps:{}},a=null!=(n=null==e||null==(r=e.theme)?void 0:r.unstable_sxConfig)?n:S.Z;return Object.keys(e).forEach((function(n){a[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t};function R(e){var n,r=e.sx,t=(0,b.Z)(e,P),a=A(t),i=a.systemProps,l=a.otherProps;return n=Array.isArray(r)?[i].concat((0,s.Z)(r)):"function"===typeof r?function(){var e=r.apply(void 0,arguments);return(0,N.P)(e)?(0,g.Z)({},i,e):i}:(0,g.Z)({},i,r),(0,g.Z)({},l,{sx:n})}var B=r(85080),T=r(51184),M=r(45682),_=r(80184),D=["component","direction","spacing","divider","children","className","useFlexGap"],L=(0,B.Z)(),E=C("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function F(e){return(0,w.Z)({props:e,name:"MuiStack",defaultTheme:L})}function I(e,n){var r=h.Children.toArray(e).filter(Boolean);return r.reduce((function(e,t,a){return e.push(t),a<r.length-1&&e.push(h.cloneElement(n,{key:"separator-".concat(a)})),e}),[])}var W=function(e){var n=e.ownerState,r=e.theme,t=(0,g.Z)({display:"flex",flexDirection:"column"},(0,T.k9)({theme:r},(0,T.P$)({values:n.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var a=(0,M.hB)(r),i=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof n.spacing&&null!=n.spacing[r]||"object"===typeof n.direction&&null!=n.direction[r])&&(e[r]=!0),e}),{}),l=(0,T.P$)({values:n.direction,base:i}),o=(0,T.P$)({values:n.spacing,base:i});"object"===typeof l&&Object.keys(l).forEach((function(e,n,r){if(!l[e]){var t=n>0?l[r[n-1]]:"column";l[e]=t}}));t=(0,N.Z)(t,(0,T.k9)({theme:r},o,(function(e,r){return n.useFlexGap?{gap:(0,M.NA)(a,e)}:{"& > :not(style) ~ :not(style)":(0,x.Z)({margin:0},"margin".concat((t=r?l[r]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[t])),(0,M.NA)(a,e))};var t})))}return t=(0,T.dt)(r.breakpoints,t)};var q=r(66934),z=r(31402),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,r=void 0===n?E:n,t=e.useThemeProps,a=void 0===t?F:t,i=e.componentName,l=void 0===i?"MuiStack":i,o=r(W),s=h.forwardRef((function(e,n){var r=R(a(e)),t=r.component,i=void 0===t?"div":t,s=r.direction,c=void 0===s?"column":s,d=r.spacing,u=void 0===d?0:d,h=r.divider,m=r.children,v=r.className,p=r.useFlexGap,f=void 0!==p&&p,x=(0,b.Z)(r,D),y={direction:c,spacing:u,useFlexGap:f},N=(0,j.Z)({root:["root"]},(function(e){return(0,k.Z)(l,e)}),{});return(0,_.jsx)(o,(0,g.Z)({as:i,ownerState:y,ref:n,className:(0,Z.Z)(N.root,v)},x,{children:h?I(m,h):m}))}));return s}({createStyledComponent:(0,q.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,z.Z)({props:e,name:"MuiStack"})}}),O=G,Y=r(14036),V=r(75878);function H(e){return(0,k.Z)("MuiTypography",e)}(0,V.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var J=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],U=(0,q.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,r.variant&&n[r.variant],"inherit"!==r.align&&n["align".concat((0,Y.Z)(r.align))],r.noWrap&&n.noWrap,r.gutterBottom&&n.gutterBottom,r.paragraph&&n.paragraph]}})((function(e){var n=e.theme,r=e.ownerState;return(0,g.Z)({margin:0},r.variant&&n.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),$={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Q={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},K=h.forwardRef((function(e,n){var r=(0,z.Z)({props:e,name:"MuiTypography"}),t=function(e){return Q[e]||e}(r.color),a=R((0,g.Z)({},r,{color:t})),i=a.align,l=void 0===i?"inherit":i,o=a.className,s=a.component,c=a.gutterBottom,d=void 0!==c&&c,u=a.noWrap,h=void 0!==u&&u,m=a.paragraph,v=void 0!==m&&m,p=a.variant,f=void 0===p?"body1":p,x=a.variantMapping,y=void 0===x?$:x,N=(0,b.Z)(a,J),k=(0,g.Z)({},a,{align:l,color:t,className:o,component:s,gutterBottom:d,noWrap:h,paragraph:v,variant:f,variantMapping:y}),C=s||(v?"p":y[f]||$[f])||"span",w=function(e){var n=e.align,r=e.gutterBottom,t=e.noWrap,a=e.paragraph,i=e.variant,l=e.classes,o={root:["root",i,"inherit"!==e.align&&"align".concat((0,Y.Z)(n)),r&&"gutterBottom",t&&"noWrap",a&&"paragraph"]};return(0,j.Z)(o,H,l)}(k);return(0,_.jsx)(U,(0,g.Z)({as:C,ref:n,ownerState:k,className:(0,Z.Z)(w.root,o)},N))}));function X(e){return(0,k.Z)("MuiFormControlLabel",e)}var ee=(0,V.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var ne=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],re=(0,q.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[(0,x.Z)({},"& .".concat(ee.label),n.label),n.root,n["labelPlacement".concat((0,Y.Z)(r.labelPlacement))]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,g.Z)((0,x.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(ee.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,x.Z)({},"& .".concat(ee.label),(0,x.Z)({},"&.".concat(ee.disabled),{color:(n.vars||n).palette.text.disabled})))})),te=(0,q.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,n){return n.asterisk}})((function(e){var n=e.theme;return(0,x.Z)({},"&.".concat(ee.error),{color:(n.vars||n).palette.error.main})})),ae=h.forwardRef((function(e,n){var r,t,a=(0,z.Z)({props:e,name:"MuiFormControlLabel"}),i=a.className,l=a.componentsProps,o=void 0===l?{}:l,s=a.control,c=a.disabled,d=a.disableTypography,u=a.label,m=a.labelPlacement,v=void 0===m?"end":m,p=a.required,f=a.slotProps,x=void 0===f?{}:f,N=(0,b.Z)(a,ne),k=(0,y.Z)(),C=null!=(r=null!=c?c:s.props.disabled)?r:null==k?void 0:k.disabled,w=null!=p?p:s.props.required,S={disabled:C,required:w};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof s.props[e]&&"undefined"!==typeof a[e]&&(S[e]=a[e])}));var P=function(e){var n=e.props,r=e.states,t=e.muiFormControl;return r.reduce((function(e,r){return e[r]=n[r],t&&"undefined"===typeof n[r]&&(e[r]=t[r]),e}),{})}({props:a,muiFormControl:k,states:["error"]}),A=(0,g.Z)({},a,{disabled:C,labelPlacement:v,required:w,error:P.error}),R=function(e){var n=e.classes,r=e.disabled,t=e.labelPlacement,a=e.error,i=e.required,l={root:["root",r&&"disabled","labelPlacement".concat((0,Y.Z)(t)),a&&"error",i&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",a&&"error"]};return(0,j.Z)(l,X,n)}(A),B=null!=(t=x.typography)?t:o.typography,T=u;return null==T||T.type===K||d||(T=(0,_.jsx)(K,(0,g.Z)({component:"span"},B,{className:(0,Z.Z)(R.label,null==B?void 0:B.className),children:T}))),(0,_.jsxs)(re,(0,g.Z)({className:(0,Z.Z)(R.root,i),ownerState:A,ref:n},N,{children:[h.cloneElement(s,S),w?(0,_.jsxs)(O,{direction:"row",alignItems:"center",children:[T,(0,_.jsxs)(te,{ownerState:A,"aria-hidden":!0,className:R.asterisk,children:["\u2009","*"]})]}):T]}))})),ie=r(12170),le=function(e){var n=e.close,r=e.visible,i=(0,f.G3)().data,l=(0,f.qC)().data,o=(0,f.Lh)(),x=(0,t.Z)(o,2),b=x[0],g=x[1],Z=g.isLoading,j=g.error,y=g.isError,N=g.isSuccess,k=(0,h.useState)({}),C=(0,t.Z)(k,2),w=C[0],S=C[1],P=(0,h.useState)(),A=(0,t.Z)(P,2),R=A[0],B=A[1],T=(0,h.useState)([]),M=(0,t.Z)(T,2),D=M[0],L=M[1],E=(0,h.useState)({}),F=(0,t.Z)(E,2),I=F[0],W=F[1],q=(0,h.useState)({}),z=(0,t.Z)(q,2),G=z[0],O=z[1],Y=(0,h.useState)([]),V=(0,t.Z)(Y,2),H=(V[0],V[1],(0,h.useState)([])),J=(0,t.Z)(H,2),U=J[0],$=J[1],Q=(0,h.useState)([]),K=(0,t.Z)(Q,2),X=K[0],ee=K[1];(0,h.useEffect)((function(){var e,r;(N&&(n(),S({}),O({}),W({})),y)&&O((0,c.Z)((0,c.Z)({},G),{},{response:null===(e=j.data)||void 0===e||null===(r=e.data[0])||void 0===r?void 0:r.uiMessage}))}),[N,y]),(0,h.useEffect)((function(){var e;i&&B(null===i||void 0===i||null===(e=i.data[0])||void 0===e?void 0:e.permissions)}),[i]),(0,h.useEffect)((function(){if(l){var e=l.menu.map((function(e){return(0,c.Z)((0,c.Z)({},e),{},{children:e.children.map((function(e){return(0,c.Z)((0,c.Z)({},e),{},{isChecked:!1})}))})}));ee(e)}}),[l]);var ne=(null===R||void 0===R?void 0:R.length)>0&&R.map((function(e,n){return(0,_.jsxs)("div",{className:"select-item-container",onClick:function(){return function(e){var n=R.filter((function(n){return n.id!==e.id}));B(n),L([].concat((0,s.Z)(D),[e]))}(e)},children:[(0,_.jsx)("span",{children:e.name}),(0,_.jsx)(m.Z,{style:{color:"black",fontWeight:"bold"}})]},n)})),re=D.map((function(e,n){return(0,_.jsxs)("div",{className:"select-item-container-active",onClick:function(){return n=e,L((function(){return D.filter((function(e){return e.id!==n.id}))})),void B([].concat((0,s.Z)(R),[n]));var n},children:[(0,_.jsx)("span",{children:e.name}),(0,_.jsx)(v.Z,{style:{color:"white",fontWeight:"bold"}})]},n)})),te=(null===X||void 0===X?void 0:X.length)>0&&X.map((function(e,n){var r;return(0,_.jsxs)("div",{className:"diplay-menu-item-container",children:[(0,_.jsxs)("div",{onClick:function(){return function(e){var n=X.filter((function(n){return n.id!==e.id}));ee(n),$([].concat((0,s.Z)(U),[e]))}(e)},children:[(0,_.jsx)("span",{children:e.label}),(0,_.jsx)(m.Z,{style:{color:"black",fontWeight:"bold"}})]}),(null===(r=e.children)||void 0===r?void 0:r.length)>0&&e.children.map((function(e,r){return(0,_.jsx)(ae,{control:(0,_.jsx)(ie.Z,{checked:e.isChecked,onChange:function(){return function(e,n){var r=(0,s.Z)(X),t=r[e],a=t.children[n];if(a.isChecked=!a.isChecked,ee(r),t.children.every((function(e){return e.isChecked}))){var i=X.filter((function(n,r){return r!==e}));ee(i)}var l=U.findIndex((function(e){return e.id===t.id}));if(-1!==l){var o=(0,s.Z)(U),d=o[l];d.children=t.children.filter((function(e){return e.isChecked})),o[l]=d,$(o)}else{var u=t.children.filter((function(e){return e.isChecked})),h=(0,c.Z)((0,c.Z)({},t),{},{children:u});$([].concat((0,s.Z)(U),[h]))}}(n,r)}}),label:e.label})}))]},n)})),le=U.map((function(e,n){var r;return(0,_.jsxs)("div",{className:"diplay-menu-item-container-active",children:[(0,_.jsxs)("div",{onClick:function(){return n=e,$((function(){return U.filter((function(e){return e.id!==n.id}))})),void ee([].concat((0,s.Z)(X),[n]));var n},children:[(0,_.jsx)("span",{children:e.label}),(0,_.jsx)(v.Z,{style:{color:"white",fontWeight:"bold"}})]}),(null===(r=e.children)||void 0===r?void 0:r.length)>0&&e.children.map((function(e,r){return(0,_.jsx)(ae,{control:(0,_.jsx)(ie.Z,{style:{color:"white"},checked:e.isChecked,onChange:function(){return function(e,n){var r=(0,s.Z)(U),t=r[e],a=t.children[n];if(a.isChecked=!a.isChecked,$(r),t.children.every((function(e){return!e.isChecked}))){var i=U.filter((function(n,r){return r!==e}));$(i),ee([].concat((0,s.Z)(X),[t]))}}(n,r)}}),label:e.label})}))]},n)})),oe=function(e){if(e.preventDefault(),!w.name)return W((0,c.Z)((0,c.Z)({},I),{},{name:!0})),void O((0,c.Z)((0,c.Z)({},G),{},{name:"Name is required"}));O({}),W({});var n=D.map((function(e){return{permission_id:e.id}})),r=U.map((function(e){var n;return(0,c.Z)((0,c.Z)({},e),{},{children:(null===(n=e.children)||void 0===n?void 0:n.filter((function(e){return e.isChecked})))||[]})})),t=[{name:w.name,description:w.description,permissions:n,menu:r}];b({roles:t})};return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(a.Tk,{backdrop:!0,visible:r,size:"xl",onClose:function(){return n()},children:(0,_.jsxs)("form",{onSubmit:oe,children:[(0,_.jsxs)("div",{className:"modal-header-container",children:[(0,_.jsx)(a.fl,{style:{color:"white"},children:"Create a new role"}),(0,_.jsx)("img",{src:d.Z,onClick:n,style:{cursor:"pointer"}})]}),(0,_.jsxs)(a.sD,{style:{padding:"0px 30px"},children:[(0,_.jsx)("div",{style:{padding:"20px 0px"},children:(0,_.jsx)("span",{style:{color:"red"},children:G.response})}),(0,_.jsx)(u.Z,{label:"Name",type:"text",value:w.name,onChange:function(e){S((0,c.Z)((0,c.Z)({},w),{},{name:e.target.value}))},error:I.name,errorText:G.name}),(0,_.jsx)(p.Z,{label:"Description",value:w.description,onChange:function(e){S((0,c.Z)((0,c.Z)({},w),{},{description:e.target.value}))}}),(0,_.jsx)("div",{className:"assign-permission-container",children:(0,_.jsx)(a.YR,{children:(0,_.jsx)(a.Jh,{className:"assign-text",children:"Assign permissions"})})}),(0,_.jsxs)("div",{className:"create-role-permision-container",children:[(0,_.jsx)("div",{className:"first-row item-container",children:ne}),(0,_.jsx)("div",{className:"second-row item-container",children:re})]}),(0,_.jsx)("div",{className:"assign-permission-container",children:(0,_.jsx)(a.YR,{children:(0,_.jsx)(a.Jh,{className:"assign-text",children:"Available menu"})})}),(0,_.jsxs)("div",{className:"create-role-permision-container",children:[(0,_.jsx)("div",{className:"first-row item-container",children:te}),(0,_.jsx)("div",{className:"second-row item-container",children:le})]})]}),(0,_.jsx)(a.Ym,{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,_.jsx)(a.u5,{style:{backgroundColor:"#ECAA00",outline:"none",border:"none",color:"black",fontWeight:"bold",padding:"10px 40px"},onClick:oe,disabled:Z,children:"Submit"})})]})})})},oe=function(){var e=(0,h.useState)(!1),n=(0,t.Z)(e,2),r=n[0],s=n[1];return(0,_.jsxs)(a.b7,{sx:12,children:[(0,_.jsx)(i.Z,{buttonTitle:"Add a role",handleAddButton:function(){s((function(e){return!e}))}}),(0,_.jsx)(a.xH,{className:"mb-4",children:(0,_.jsx)(a.sl,{children:(0,_.jsx)(l.Z,{headers:o.YC,handleViewItem:function(e){},handleDeleteItem:function(){}})})}),(0,_.jsx)(le,{visible:r,close:function(){return s(!1)}})]})}},42419:function(e,n,r){var t=r(64836);n.Z=void 0;var a=t(r(45649)),i=r(80184),l=(0,a.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=l},35585:function(e,n,r){var t=r(64836);n.Z=void 0;var a=t(r(45649)),i=r(80184),l=(0,a.default)((0,i.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");n.Z=l}}]);
//# sourceMappingURL=834.82d8a46c.chunk.js.map