"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[834],{82463:function(e,n,r){r(72791);n.Z=r.p+"static/media/close-icon.ef9648a920682e5d9d0fa22a43f9b578.svg"},644:function(e,n,r){r.d(n,{Al:function(){return c},Gq:function(){return t},TI:function(){return l},UG:function(){return s},YC:function(){return i},ZB:function(){return a},lw:function(){return o}});var t=[{label:"Regulation Reference",value:"reference"},{label:"Issuing Date",value:"createdTime"},{label:"Effective Date",value:"effectiveDate"},{label:"Issuing Authority",value:"issuingAuthority"},{label:"Type",value:"type"},{label:"Status",value:"status"},{label:"Actions",value:"actions"}],a=[{label:"Assigned people",value:"last_name"},{label:"Assigned Date",value:"input_date"},{label:"Compliance status",value:"status"},{label:"Gap",value:"email"},{label:"Action Plan",value:"phone_number"},{label:"Deadline",value:"branch"},{label:"Actions",value:"actions"}],i=[{label:"First Name",value:"first_name"},{label:"Last Name",value:"last_name"},{label:"Email",value:"email"},{label:"Phone Number",value:"phone_number"},{label:"Status",value:"status"},{label:"Role",value:"user_role"},{label:"Actions",value:"actions"}],l=[{label:"AVAILABLE PERMISSIONS",value:"name"}],o=[{label:"Name",value:"name"},{label:"Actions",value:"actions"}],s=[{label:"Name",value:"name"},{label:"Country",value:"country"}],c=[{label:"Name",value:"name"},{label:"Actions",value:"actions"}]},48355:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(62591),a=r(78983);r(72791);var i=r.p+"static/media/sort-up.fb5e1d92b6484295020e097753af964f.svg";var l=r.p+"static/media/sort-down.94843ef6e7f1c11fff89fc6a09eddf3c.svg",o=r(3579),s=r(41286),c=r(27247),d=r(80184),u=function(e){var n=e.headers,r=e.data,u=e.handleViewItem,m=e.isLoading,h=e.handleSortUp,v=e.handleSortDown,f=e.hasDeleteBtn,p=e.handleDeleteItem,b=e.handleUpdateItem,x=e.hasViewBtn,g=e.hasEditBtn,Z=[];(null===n||void 0===n?void 0:n.length)>0&&(Z=n.map((function(e){return(0,d.jsx)("th",{className:"table-headers-text",children:(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("div",{style:{marginLeft:"actions"===e.value?"auto":""},children:e.label||"-"}),(0,d.jsx)("div",{className:"table-sort-container ml-2",children:e.isSort&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{src:i,onClick:h}),(0,d.jsx)("img",{src:l,onClick:v})]})})]})})})));var j=[];return(null===r||void 0===r?void 0:r.length)>0&&(j=r.map((function(e,r){var t=Object.assign({},e);return t.actions=(0,d.jsxs)("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[x&&(0,d.jsx)("div",{onClick:function(){return u(e)},children:(0,d.jsx)(o.Z,{style:{width:16,height:16,cursor:"pointer"}})}),g&&(0,d.jsx)("div",{onClick:function(){return b(e)},children:(0,d.jsx)(s.Z,{style:{width:16,height:16,cursor:"pointer"}})}),f&&(0,d.jsx)("div",{onClick:function(){return p(e)},children:(0,d.jsx)(c.Z,{style:{width:16,height:16,cursor:"pointer",color:"#ff9494"}})})]}),(0,d.jsx)("tr",{className:"table-row-item",children:n.map((function(e){return(0,d.jsxs)("td",{className:"table-body-text ".concat(t[e.value]),children:[" ",t[e.value]||"-"]})}))})}))),(0,d.jsxs)(t.Z,{hover:!0,striped:!0,children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:Z})}),(0,d.jsx)("br",{}),(0,d.jsx)("tbody",{children:m?(0,d.jsx)("td",{colSpan:7,children:(0,d.jsx)(a.LQ,{color:"warning",style:{margin:"auto",display:"flex"}})}):j})]})}},6530:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(78983),a=r(80184),i=function(e){var n=e.hasDasborad,r=e.handleAddButton,i=e.buttonTitle;return(0,a.jsxs)("div",{className:"page-header-container",children:[n?(0,a.jsxs)("div",{className:"statistics-container",children:[(0,a.jsxs)("div",{className:"card-container total",children:[(0,a.jsx)("span",{className:"title",children:"Total Regulations:"}),(0,a.jsx)("span",{className:"value",children:"30"})]}),(0,a.jsxs)("div",{className:"card-container success",children:[(0,a.jsx)("span",{className:"title ",children:"Complied:"}),(0,a.jsx)("span",{className:"value",children:"5"})]}),(0,a.jsxs)("div",{className:"card-container pending",children:[(0,a.jsx)("span",{className:"title",children:"Pending:"}),(0,a.jsx)("span",{className:"value",children:"10"})]}),(0,a.jsxs)("div",{className:"card-container failed",children:[(0,a.jsx)("span",{className:"title",children:"Non Complied:"}),(0,a.jsx)("span",{className:"value",children:"15"})]})]}):(0,a.jsx)("div",{}),(0,a.jsx)(t.u5,{style:{},onClick:r,className:"add-button-container",children:i})]})}},2063:function(e,n,r){var t=r(78983),a=r(80184);n.Z=function(e){return(0,a.jsxs)(t.YR,{className:"mb-4 ".concat(e.className),children:[(0,a.jsx)(t.PB,{id:"exampleFormControlTextarea1",rows:"3",size:"lg",style:{width:"100%",borderRadius:"8px",color:"#838AA2",fontSize:"16px"},label:e.label,onChange:e.onChange,value:e.value,className:"".concat(e.error?"is-invalid":"")}),e.error&&(0,a.jsx)("div",{className:"invalid-feedback",children:e.errorText})]})}},94815:function(e,n,r){var t=r(1413),a=r(78983),i=r(80184);n.Z=function(e){return(0,i.jsxs)(a.YR,{className:"mb-4 ".concat(e.className),style:(0,t.Z)({display:"flex",flexDirection:"column"},e.style),children:[(0,i.jsx)(a.jO,{"aria-label":"Username",style:{width:"100%",borderRadius:"8px",color:"#838AA2",fontSize:"16px"},size:"lg",label:e.label,type:e.type,disabled:e.disabled,value:e.value,onChange:e.onChange,className:"form-input-textfield ".concat(e.error?"is-invalid":""),placeholder:e.placeholder}),e.error&&(0,i.jsx)("div",{className:"invalid-feedback",children:e.errorText})]})}},67834:function(e,n,r){r.r(n),r.d(n,{default:function(){return oe}});var t=r(29439),a=r(78983),i=r(6530),l=r(48355),o=r(644),s=r(93433),c=r(1413),d=r(82463),u=r(94815),m=r(72791),h=r(42419),v=r(35585),f=r(2063),p=r(91343),b=r(4942),x=r(63366),g=r(87462),Z=r(28182),j=r(94419),y=r(92860),N=r(82466),k=r(21217),C=(0,r(55551).ZP)(),w=r(54955),S=r(87416),P=["sx"],A=function(e){var n,r,t={systemProps:{},otherProps:{}},a=null!=(n=null==e||null==(r=e.theme)?void 0:r.unstable_sxConfig)?n:S.Z;return Object.keys(e).forEach((function(n){a[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t};function R(e){var n,r=e.sx,t=(0,x.Z)(e,P),a=A(t),i=a.systemProps,l=a.otherProps;return n=Array.isArray(r)?[i].concat((0,s.Z)(r)):"function"===typeof r?function(){var e=r.apply(void 0,arguments);return(0,N.P)(e)?(0,g.Z)({},i,e):i}:(0,g.Z)({},i,r),(0,g.Z)({},l,{sx:n})}var B=r(85080),T=r(51184),L=r(45682),_=r(80184),M=["component","direction","spacing","divider","children","className","useFlexGap"],D=(0,B.Z)(),E=C("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function I(e){return(0,w.Z)({props:e,name:"MuiStack",defaultTheme:D})}function F(e,n){var r=m.Children.toArray(e).filter(Boolean);return r.reduce((function(e,t,a){return e.push(t),a<r.length-1&&e.push(m.cloneElement(n,{key:"separator-".concat(a)})),e}),[])}var W=function(e){var n=e.ownerState,r=e.theme,t=(0,g.Z)({display:"flex",flexDirection:"column"},(0,T.k9)({theme:r},(0,T.P$)({values:n.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var a=(0,L.hB)(r),i=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof n.spacing&&null!=n.spacing[r]||"object"===typeof n.direction&&null!=n.direction[r])&&(e[r]=!0),e}),{}),l=(0,T.P$)({values:n.direction,base:i}),o=(0,T.P$)({values:n.spacing,base:i});"object"===typeof l&&Object.keys(l).forEach((function(e,n,r){if(!l[e]){var t=n>0?l[r[n-1]]:"column";l[e]=t}}));t=(0,N.Z)(t,(0,T.k9)({theme:r},o,(function(e,r){return n.useFlexGap?{gap:(0,L.NA)(a,e)}:{"& > :not(style) ~ :not(style)":(0,b.Z)({margin:0},"margin".concat((t=r?l[r]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[t])),(0,L.NA)(a,e))};var t})))}return t=(0,T.dt)(r.breakpoints,t)};var q=r(66934),G=r(31402),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,r=void 0===n?E:n,t=e.useThemeProps,a=void 0===t?I:t,i=e.componentName,l=void 0===i?"MuiStack":i,o=r(W),s=m.forwardRef((function(e,n){var r=R(a(e)),t=r.component,i=void 0===t?"div":t,s=r.direction,c=void 0===s?"column":s,d=r.spacing,u=void 0===d?0:d,m=r.divider,h=r.children,v=r.className,f=r.useFlexGap,p=void 0!==f&&f,b=(0,x.Z)(r,M),y={direction:c,spacing:u,useFlexGap:p},N=(0,j.Z)({root:["root"]},(function(e){return(0,k.Z)(l,e)}),{});return(0,_.jsx)(o,(0,g.Z)({as:i,ownerState:y,ref:n,className:(0,Z.Z)(N.root,v)},b,{children:m?F(h,m):h}))}));return s}({createStyledComponent:(0,q.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,G.Z)({props:e,name:"MuiStack"})}}),O=z,V=r(14036),Y=r(75878);function U(e){return(0,k.Z)("MuiTypography",e)}(0,Y.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var H=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],J=(0,q.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,r.variant&&n[r.variant],"inherit"!==r.align&&n["align".concat((0,V.Z)(r.align))],r.noWrap&&n.noWrap,r.gutterBottom&&n.gutterBottom,r.paragraph&&n.paragraph]}})((function(e){var n=e.theme,r=e.ownerState;return(0,g.Z)({margin:0},r.variant&&n.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),$={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Q={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},K=m.forwardRef((function(e,n){var r=(0,G.Z)({props:e,name:"MuiTypography"}),t=function(e){return Q[e]||e}(r.color),a=R((0,g.Z)({},r,{color:t})),i=a.align,l=void 0===i?"inherit":i,o=a.className,s=a.component,c=a.gutterBottom,d=void 0!==c&&c,u=a.noWrap,m=void 0!==u&&u,h=a.paragraph,v=void 0!==h&&h,f=a.variant,p=void 0===f?"body1":f,b=a.variantMapping,y=void 0===b?$:b,N=(0,x.Z)(a,H),k=(0,g.Z)({},a,{align:l,color:t,className:o,component:s,gutterBottom:d,noWrap:m,paragraph:v,variant:p,variantMapping:y}),C=s||(v?"p":y[p]||$[p])||"span",w=function(e){var n=e.align,r=e.gutterBottom,t=e.noWrap,a=e.paragraph,i=e.variant,l=e.classes,o={root:["root",i,"inherit"!==e.align&&"align".concat((0,V.Z)(n)),r&&"gutterBottom",t&&"noWrap",a&&"paragraph"]};return(0,j.Z)(o,U,l)}(k);return(0,_.jsx)(J,(0,g.Z)({as:C,ref:n,ownerState:k,className:(0,Z.Z)(w.root,o)},N))}));function X(e){return(0,k.Z)("MuiFormControlLabel",e)}var ee=(0,Y.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var ne=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],re=(0,q.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[(0,b.Z)({},"& .".concat(ee.label),n.label),n.root,n["labelPlacement".concat((0,V.Z)(r.labelPlacement))]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,g.Z)((0,b.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(ee.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,b.Z)({},"& .".concat(ee.label),(0,b.Z)({},"&.".concat(ee.disabled),{color:(n.vars||n).palette.text.disabled})))})),te=(0,q.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,n){return n.asterisk}})((function(e){var n=e.theme;return(0,b.Z)({},"&.".concat(ee.error),{color:(n.vars||n).palette.error.main})})),ae=m.forwardRef((function(e,n){var r,t,a=(0,G.Z)({props:e,name:"MuiFormControlLabel"}),i=a.className,l=a.componentsProps,o=void 0===l?{}:l,s=a.control,c=a.disabled,d=a.disableTypography,u=a.label,h=a.labelPlacement,v=void 0===h?"end":h,f=a.required,p=a.slotProps,b=void 0===p?{}:p,N=(0,x.Z)(a,ne),k=(0,y.Z)(),C=null!=(r=null!=c?c:s.props.disabled)?r:null==k?void 0:k.disabled,w=null!=f?f:s.props.required,S={disabled:C,required:w};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof s.props[e]&&"undefined"!==typeof a[e]&&(S[e]=a[e])}));var P=function(e){var n=e.props,r=e.states,t=e.muiFormControl;return r.reduce((function(e,r){return e[r]=n[r],t&&"undefined"===typeof n[r]&&(e[r]=t[r]),e}),{})}({props:a,muiFormControl:k,states:["error"]}),A=(0,g.Z)({},a,{disabled:C,labelPlacement:v,required:w,error:P.error}),R=function(e){var n=e.classes,r=e.disabled,t=e.labelPlacement,a=e.error,i=e.required,l={root:["root",r&&"disabled","labelPlacement".concat((0,V.Z)(t)),a&&"error",i&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",a&&"error"]};return(0,j.Z)(l,X,n)}(A),B=null!=(t=b.typography)?t:o.typography,T=u;return null==T||T.type===K||d||(T=(0,_.jsx)(K,(0,g.Z)({component:"span"},B,{className:(0,Z.Z)(R.label,null==B?void 0:B.className),children:T}))),(0,_.jsxs)(re,(0,g.Z)({className:(0,Z.Z)(R.root,i),ownerState:A,ref:n},N,{children:[m.cloneElement(s,S),w?(0,_.jsxs)(O,{direction:"row",alignItems:"center",children:[T,(0,_.jsxs)(te,{ownerState:A,"aria-hidden":!0,className:R.asterisk,children:["\u2009","*"]})]}):T]}))})),ie=r(12170),le=function(e){var n=e.close,r=e.visible,i=e.details,l=(0,p.G3)().data,o=(0,p.qC)().data,b=(0,p.Lh)(),x=(0,t.Z)(b,2),g=(x[0],x[1]),Z=g.isLoading,j=g.error,y=g.isError,N=g.isSuccess,k=(0,p._i)(),C=(0,t.Z)(k,2),w=(C[0],C[1]),S=(w.data,w.isSuccess),P=w.isLoading,A=(0,p.ne)(null===i||void 0===i?void 0:i.id,{skip:!i}).data,R=(0,m.useState)({}),B=(0,t.Z)(R,2),T=B[0],L=B[1],M=(0,m.useState)([]),D=(0,t.Z)(M,2),E=D[0],I=D[1],F=(0,m.useState)([]),W=(0,t.Z)(F,2),q=W[0],G=W[1],z=(0,m.useState)({}),O=(0,t.Z)(z,2),V=O[0],Y=O[1],U=(0,m.useState)({}),H=(0,t.Z)(U,2),J=H[0],$=H[1],Q=(0,m.useState)([]),K=(0,t.Z)(Q,2),X=K[0],ee=K[1],ne=(0,m.useState)([]),re=(0,t.Z)(ne,2),te=re[0],le=re[1];(0,m.useEffect)((function(){if(i){var e;L(i);var n=(null===i||void 0===i||null===(e=i.menu)||void 0===e?void 0:e.length)>0&&i.menu.map((function(e){return(0,c.Z)((0,c.Z)({},e),{},{children:e.children.map((function(e){return(0,c.Z)((0,c.Z)({},e),{},{isChecked:!1})}))})}));n&&(ee(n),le((function(e){return e.filter((function(e){return!n.some((function(n){return n.id===e.id}))}))})))}r&&Y({})}),[i]),(0,m.useEffect)((function(){if(o){var e=o.menu.map((function(e){return(0,c.Z)((0,c.Z)({},e),{},{children:e.children.map((function(e){return(0,c.Z)((0,c.Z)({},e),{},{isChecked:!1})}))})}));le(e)}}),[o]),(0,m.useEffect)((function(){if(A){var e,n,r,t=null!==(e=null===(n=A.data)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.permissions)&&void 0!==e?e:[];G(t),I((function(e){return e.filter((function(e){return!t.some((function(n){return n.id===e.id}))}))}))}}),[A]),(0,m.useEffect)((function(){if(l){var e,n,r=null!==(e=null===l||void 0===l||null===(n=l.data[0])||void 0===n?void 0:n.permissions)&&void 0!==e?e:[];I((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(r.filter((function(n){return!e.some((function(e){return e.id===n.id}))}))))}))}}),[l]),(0,m.useEffect)((function(){var e;((N||S)&&(n(),L({}),$({}),Y({})),y)&&$((0,c.Z)((0,c.Z)({},J),{},{response:null===(e=j.data)||void 0===e?void 0:e.message}))}),[N,y,S]);var oe=(null===E||void 0===E?void 0:E.length)>0&&E.map((function(e,n){return(0,_.jsxs)("div",{className:"select-item-container",onClick:function(){return function(e){var n=E.filter((function(n){return n.id!==e.id}));I(n),G([].concat((0,s.Z)(q),[e]))}(e)},children:[(0,_.jsx)("span",{children:e.name}),(0,_.jsx)(h.Z,{style:{color:"black",fontWeight:"bold"}})]},n)})),se=q.map((function(e,n){return(0,_.jsxs)("div",{className:"select-item-container-active",onClick:function(){return n=e,G((function(){return q.filter((function(e){return e.id!==n.id}))})),void I([].concat((0,s.Z)(E),[n]));var n},children:[(0,_.jsx)("span",{children:e.name}),(0,_.jsx)(v.Z,{style:{color:"white",fontWeight:"bold"}})]},n)})),ce=(null===te||void 0===te?void 0:te.length)>0&&te.map((function(e,n){var r;return(0,_.jsxs)("div",{className:"diplay-menu-item-container",children:[(0,_.jsxs)("div",{onClick:function(){return function(e){var n=te.filter((function(n){return n.id!==e.id}));le(n),ee([].concat((0,s.Z)(X),[e]))}(e)},children:[(0,_.jsx)("span",{children:e.label}),(0,_.jsx)(h.Z,{style:{color:"black",fontWeight:"bold"}})]}),(null===(r=e.children)||void 0===r?void 0:r.length)>0&&e.children.map((function(e,r){return(0,_.jsx)(ae,{control:(0,_.jsx)(ie.Z,{checked:e.isChecked,onChange:function(){return function(e,n){var r=(0,s.Z)(te),t=r[e],a=t.children[n];if(a.isChecked=!a.isChecked,le(r),t.children.every((function(e){return e.isChecked}))){var i=te.filter((function(n,r){return r!==e}));le(i)}var l=X.findIndex((function(e){return e.id===t.id}));if(-1!==l){var o=(0,s.Z)(X),d=o[l];d.children=t.children.filter((function(e){return e.isChecked})),o[l]=d,ee(o)}else{var u=t.children.filter((function(e){return e.isChecked})),m=(0,c.Z)((0,c.Z)({},t),{},{children:u});ee([].concat((0,s.Z)(X),[m]))}}(n,r)}}),label:e.label})}))]},n)})),de=X.map((function(e,n){var r;return(0,_.jsxs)("div",{className:"diplay-menu-item-container-active",children:[(0,_.jsxs)("div",{onClick:function(){return n=e,ee((function(){return X.filter((function(e){return e.id!==n.id}))})),void le([].concat((0,s.Z)(te),[n]));var n},children:[(0,_.jsx)("span",{children:e.label}),(0,_.jsx)(v.Z,{style:{color:"white",fontWeight:"bold"}})]}),(null===(r=e.children)||void 0===r?void 0:r.length)>0&&e.children.map((function(e,r){return(0,_.jsx)(ae,{control:(0,_.jsx)(ie.Z,{style:{color:"white"},checked:e.isChecked,onChange:function(){return function(e,n){var r=(0,s.Z)(X),t=r[e],a=t.children[n];if(a.isChecked=!a.isChecked,ee(r),t.children.every((function(e){return!e.isChecked}))){var i=X.filter((function(n,r){return r!==e}));ee(i),le([].concat((0,s.Z)(te),[t]))}}(n,r)}}),label:e.label})}))]},n)})),ue=function(e){if(e.preventDefault(),!T.name)return Y((0,c.Z)((0,c.Z)({},V),{},{name:!0})),void $((0,c.Z)((0,c.Z)({},J),{},{name:"Name is required"}));$({}),Y({});var n=q.map((function(e){return{permission_id:e.id}})),r=X.map((function(e){var n;return(0,c.Z)((0,c.Z)({},e),{},{children:(null===(n=e.children)||void 0===n?void 0:n.filter((function(e){return e.isChecked})))||[]})}));if(i){var t=[{id:i.id,name:T.name,description:T.description,permissions:n,menu:r}];console.log("what we have",t)}else T.name,T.description};return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(a.Tk,{backdrop:!0,visible:r,size:"xl",onClose:function(){return n()},children:(0,_.jsxs)("form",{onSubmit:ue,children:[(0,_.jsxs)("div",{className:"modal-header-container",children:[(0,_.jsx)(a.fl,{style:{color:"white"},children:"Create a new role"}),(0,_.jsx)("img",{src:d.Z,onClick:n,style:{cursor:"pointer"}})]}),(0,_.jsxs)(a.sD,{style:{padding:"0px 30px"},children:[(0,_.jsx)("div",{style:{padding:"20px 0px"},children:(0,_.jsx)("span",{style:{color:"red"},children:J.response})}),(0,_.jsx)(u.Z,{label:"Name",type:"text",value:T.name,onChange:function(e){L((0,c.Z)((0,c.Z)({},T),{},{name:e.target.value}))},error:V.name,errorText:J.name}),(0,_.jsx)(f.Z,{label:"Description",value:T.description,onChange:function(e){L((0,c.Z)((0,c.Z)({},T),{},{description:e.target.value}))}}),(0,_.jsx)("div",{className:"assign-permission-container",children:(0,_.jsx)(a.YR,{children:(0,_.jsx)(a.Jh,{className:"assign-text",children:"Assign permissions"})})}),(0,_.jsxs)("div",{className:"create-role-permision-container",children:[(0,_.jsx)("div",{className:"first-row item-container",children:oe}),(0,_.jsx)("div",{className:"second-row item-container",children:se})]}),(0,_.jsx)("div",{className:"assign-permission-container",children:(0,_.jsx)(a.YR,{children:(0,_.jsx)(a.Jh,{className:"assign-text",children:"Available menu"})})}),(0,_.jsxs)("div",{className:"create-role-permision-container",children:[(0,_.jsx)("div",{className:"first-row item-container",children:ce}),(0,_.jsx)("div",{className:"second-row item-container",children:de})]})]}),(0,_.jsx)(a.Ym,{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,_.jsx)(a.u5,{style:{backgroundColor:"#ECAA00",outline:"none",border:"none",color:"black",fontWeight:"bold",padding:"10px 40px"},onClick:ue,disabled:Z||P,children:"Submit"})})]})})})},oe=function(){var e=(0,m.useState)(!1),n=(0,t.Z)(e,2),r=n[0],s=n[1],c=(0,p.eJ)(),d=c.data,u=c.isLoading,h=(0,m.useState)(),v=(0,t.Z)(h,2),f=v[0],b=v[1];return(0,_.jsxs)(a.b7,{sx:12,children:[(0,_.jsx)(i.Z,{buttonTitle:"Add a role",handleAddButton:function(){s((function(e){return!e}))}}),(0,_.jsx)(a.xH,{className:"mb-4",children:(0,_.jsx)(a.sl,{children:(0,_.jsx)(l.Z,{headers:o.Al,data:null===d||void 0===d?void 0:d.roles,handleViewItem:function(e){},isLoading:u,handleDeleteItem:function(){},hasViewBtn:!0,hasEditBtn:!0,handleUpdateItem:function(e){s((function(e){return!e})),b(e)}})})}),(0,_.jsx)(le,{visible:r,close:function(){s(!1),b("")},details:f})]})}},42419:function(e,n,r){var t=r(64836);n.Z=void 0;var a=t(r(45649)),i=r(80184),l=(0,a.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=l},35585:function(e,n,r){var t=r(64836);n.Z=void 0;var a=t(r(45649)),i=r(80184),l=(0,a.default)((0,i.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");n.Z=l}}]);
//# sourceMappingURL=834.15c72f52.chunk.js.map