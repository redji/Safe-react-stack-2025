import{j as n,r as h,u as E,c as A,b as T,a as vn}from"./iframe-Bwy0Guc_.js";import{B as w}from"./Box-BxJ1AlIS.js";import{T as a}from"./Typography-Bve4GY16.js";import{P as m}from"./Paper-D_5aThdt.js";import{S as y}from"./Stack-GFdCtcqn.js";import{B as l}from"./Button-Db6xXzMq.js";import{A as yn,E as fn,S as jn,D as bn}from"./Save-BzcYgbjh.js";import{G as f}from"./Grid--9pmmI6_.js";import{C as J,a as K}from"./CardContent-_h6wPoO-.js";import{C as Cn,A as Sn,F as Bn,S as wn,B as Tn}from"./Share-C3fPW3bO.js";import{m as In,b as cn,f as kn,c as Pn,u as Rn,T as Q,F as an,I as zn,S as Fn,d as Gn}from"./TextField-5ZoThxeG.js";import{a as dn,g as Mn,M as X,F as $,S as An}from"./Switch-BwrJAU7E.js";import{c as I}from"./createSvgIcon-Bnjs_O6j.js";import{g as N,a as V,s as k,c as L,r as rn,m as W,b as H}from"./createSimplePaletteValueFilter-BZXdVNOf.js";import{u as pn}from"./useSlot-C-FCyWAp.js";import{u as Ln}from"./useTimeout-CYADUiHM.js";import{A as U}from"./Alert-DO7KbcQC.js";import{C as Wn}from"./CircularProgress-BVpnR2O5.js";import{L as On}from"./LinearProgress-D-BVACu3.js";import{I as M}from"./IconButton-Cqgezs0w.js";import{C as F}from"./Chip-CtcGZb7r.js";import{B as $n}from"./chunk-OIYGIGL5-DYbfhj_d.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-DzMZ7FFj.js";import"./ButtonBase-CyXCqF96.js";import"./isMuiElement-D3zEw82o.js";import"./index-B31sDAK4.js";import"./index-Dzr52WMI.js";const Un=I(n.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),Dn=I(n.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),Hn=I(n.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}));function En(r){return V("MuiCheckbox",r)}const Y=N("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Nn=r=>{const{classes:t,indeterminate:o,color:e,size:i}=r,p={root:["root",o&&"indeterminate",`color${T(e)}`,`size${T(i)}`]},c=L(p,En,t);return{...t,...c}},Vn=k(dn,{shouldForwardProp:r=>rn(r)||r==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:o}=r;return[t.root,o.indeterminate&&t.indeterminate,t[`size${T(o.size)}`],o.color!=="default"&&t[`color${T(o.color)}`]]}})(W(({theme:r})=>({color:(r.vars||r).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:r.alpha((r.vars||r).palette.action.active,(r.vars||r).palette.action.hoverOpacity)}}},...Object.entries(r.palette).filter(H()).map(([t])=>({props:{color:t,disableRipple:!1},style:{"&:hover":{backgroundColor:r.alpha((r.vars||r).palette[t].main,(r.vars||r).palette.action.hoverOpacity)}}})),...Object.entries(r.palette).filter(H()).map(([t])=>({props:{color:t},style:{[`&.${Y.checked}, &.${Y.indeterminate}`]:{color:(r.vars||r).palette[t].main},[`&.${Y.disabled}`]:{color:(r.vars||r).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),qn=n.jsx(Dn,{}),_n=n.jsx(Un,{}),Zn=n.jsx(Hn,{}),Jn=h.forwardRef(function(t,o){const e=E({props:t,name:"MuiCheckbox"}),{checkedIcon:i=qn,color:p="primary",icon:c=_n,indeterminate:s=!1,indeterminateIcon:d=Zn,inputProps:v,size:x="medium",disableRipple:g=!1,className:P,slots:S={},slotProps:j={},...b}=e,C=s?d:c,G=s?d:i,u={...e,disableRipple:g,color:p,indeterminate:s,size:x},B=Nn(u),R=j.input??v,[O,z]=pn("root",{ref:o,elementType:Vn,className:A(B.root,P),shouldForwardComponentProp:!0,externalForwardedProps:{slots:S,slotProps:j,...b},ownerState:u,additionalProps:{type:"checkbox",icon:h.cloneElement(C,{fontSize:C.props.fontSize??x}),checkedIcon:h.cloneElement(G,{fontSize:G.props.fontSize??x}),disableRipple:g,slots:S,slotProps:{input:In(typeof R=="function"?R(u):R,{"data-indeterminate":s})}}});return n.jsx(O,{...z,classes:B})}),Kn=r=>{const{absolute:t,children:o,classes:e,flexItem:i,light:p,orientation:c,textAlign:s,variant:d}=r;return L({root:["root",t&&"absolute",d,p&&"light",c==="vertical"&&"vertical",i&&"flexItem",o&&"withChildren",o&&c==="vertical"&&"withChildrenVertical",s==="right"&&c!=="vertical"&&"textAlignRight",s==="left"&&c!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",c==="vertical"&&"wrapperVertical"]},Mn,e)},Qn=k("div",{name:"MuiDivider",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:o}=r;return[t.root,o.absolute&&t.absolute,t[o.variant],o.light&&t.light,o.orientation==="vertical"&&t.vertical,o.flexItem&&t.flexItem,o.children&&t.withChildren,o.children&&o.orientation==="vertical"&&t.withChildrenVertical,o.textAlign==="right"&&o.orientation!=="vertical"&&t.textAlignRight,o.textAlign==="left"&&o.orientation!=="vertical"&&t.textAlignLeft]}})(W(({theme:r})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(r.vars||r).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:r.alpha((r.vars||r).palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:r.spacing(2),marginRight:r.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:r.spacing(1),marginBottom:r.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:t})=>!!t.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:t})=>t.children&&t.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(r.vars||r).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:t})=>t.orientation==="vertical"&&t.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(r.vars||r).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:t})=>t.textAlign==="right"&&t.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:t})=>t.textAlign==="left"&&t.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),Xn=k("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(r,t)=>{const{ownerState:o}=r;return[t.wrapper,o.orientation==="vertical"&&t.wrapperVertical]}})(W(({theme:r})=>({display:"inline-block",paddingLeft:`calc(${r.spacing(1)} * 1.2)`,paddingRight:`calc(${r.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${r.spacing(1)} * 1.2)`,paddingBottom:`calc(${r.spacing(1)} * 1.2)`}}]}))),nn=h.forwardRef(function(t,o){const e=E({props:t,name:"MuiDivider"}),{absolute:i=!1,children:p,className:c,orientation:s="horizontal",component:d=p||s==="vertical"?"div":"hr",flexItem:v=!1,light:x=!1,role:g=d!=="hr"?"separator":void 0,textAlign:P="center",variant:S="fullWidth",...j}=e,b={...e,absolute:i,component:d,flexItem:v,light:x,orientation:s,role:g,textAlign:P,variant:S},C=Kn(b);return n.jsx(Qn,{as:d,className:A(C.root,c),role:g,ref:o,ownerState:b,"aria-orientation":g==="separator"&&(d!=="hr"||s==="vertical")?s:void 0,...j,children:p?n.jsx(Xn,{className:C.wrapper,ownerState:b,children:p}):null})});nn&&(nn.muiSkipListHighlight=!0);function Yn(r){return V("MuiFormGroup",r)}N("MuiFormGroup",["root","row","error"]);const nr=r=>{const{classes:t,row:o,error:e}=r;return L({root:["root",o&&"row",e&&"error"]},Yn,t)},rr=k("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:o}=r;return[t.root,o.row&&t.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),tr=h.forwardRef(function(t,o){const e=E({props:t,name:"MuiFormGroup"}),{className:i,row:p=!1,...c}=e,s=cn(),d=kn({props:e,muiFormControl:s,states:["error"]}),v={...e,row:p,error:d.error},x=nr(v);return n.jsx(rr,{className:A(x.root,i),ownerState:v,ref:o,...c})}),or=I(n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),er=I(n.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"})),ar=k("span",{name:"MuiRadioButtonIcon",shouldForwardProp:rn})({position:"relative",display:"flex"}),ir=k(or,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),sr=k(er,{name:"MuiRadioButtonIcon"})(W(({theme:r})=>({left:0,position:"absolute",transform:"scale(0)",transition:r.transitions.create("transform",{easing:r.transitions.easing.easeIn,duration:r.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:r.transitions.create("transform",{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.shortest})}}]})));function un(r){const{checked:t=!1,classes:o={},fontSize:e}=r,i={...r,checked:t};return n.jsxs(ar,{className:o.root,ownerState:i,children:[n.jsx(ir,{fontSize:e,className:o.background,ownerState:i}),n.jsx(sr,{fontSize:e,className:o.dot,ownerState:i})]})}const hn=h.createContext(void 0);function lr(){return h.useContext(hn)}function cr(r){return V("MuiRadio",r)}const sn=N("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),dr=r=>{const{classes:t,color:o,size:e}=r,i={root:["root",`color${T(o)}`,e!=="medium"&&`size${T(e)}`]};return{...t,...L(i,cr,t)}},pr=k(dn,{shouldForwardProp:r=>rn(r)||r==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:o}=r;return[t.root,o.size!=="medium"&&t[`size${T(o.size)}`],t[`color${T(o.color)}`]]}})(W(({theme:r})=>({color:(r.vars||r).palette.text.secondary,[`&.${sn.disabled}`]:{color:(r.vars||r).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:r.alpha((r.vars||r).palette.action.active,(r.vars||r).palette.action.hoverOpacity)}}},...Object.entries(r.palette).filter(H()).map(([t])=>({props:{color:t,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:r.alpha((r.vars||r).palette[t].main,(r.vars||r).palette.action.hoverOpacity)}}})),...Object.entries(r.palette).filter(H()).map(([t])=>({props:{color:t,disabled:!1},style:{[`&.${sn.checked}`]:{color:(r.vars||r).palette[t].main}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})));function ur(r,t){return typeof t=="object"&&t!==null?r===t:String(r)===String(t)}const hr=n.jsx(un,{checked:!0}),xr=n.jsx(un,{}),ln=h.forwardRef(function(t,o){const e=E({props:t,name:"MuiRadio"}),{checked:i,checkedIcon:p=hr,color:c="primary",icon:s=xr,name:d,onChange:v,size:x="medium",className:g,disabled:P,disableRipple:S=!1,slots:j={},slotProps:b={},inputProps:C,...G}=e,u=cn();let B=P;u&&typeof B>"u"&&(B=u.disabled),B??=!1;const R={...e,disabled:B,disableRipple:S,color:c,size:x},O=dr(R),z=lr();let q=i;const xn=Pn(v,z&&z.onChange);let _=d;z&&(typeof q>"u"&&(q=ur(z.value,e.value)),typeof _>"u"&&(_=z.name));const Z=b.input??C,[mn,gn]=pn("root",{ref:o,elementType:pr,className:A(O.root,g),shouldForwardComponentProp:!0,externalForwardedProps:{slots:j,slotProps:b,...G},getSlotProps:tn=>({...tn,onChange:(on,...en)=>{tn.onChange?.(on,...en),xn(on,...en)}}),ownerState:R,additionalProps:{type:"radio",icon:h.cloneElement(s,{fontSize:s.props.fontSize??x}),checkedIcon:h.cloneElement(p,{fontSize:p.props.fontSize??x}),disabled:B,name:_,checked:q,slots:j,slotProps:{input:typeof Z=="function"?Z(R):Z}}});return n.jsx(mn,{...gn,classes:O})});function mr(r){return V("MuiRadioGroup",r)}N("MuiRadioGroup",["root","row","error"]);const gr=r=>{const{classes:t,row:o,error:e}=r;return L({root:["root",o&&"row",e&&"error"]},mr,t)},vr=h.forwardRef(function(t,o){const{actions:e,children:i,className:p,defaultValue:c,name:s,onChange:d,value:v,...x}=t,g=h.useRef(null),P=gr(t),[S,j]=Rn({controlled:v,default:c,name:"RadioGroup"});h.useImperativeHandle(e,()=>({focus:()=>{let u=g.current.querySelector("input:not(:disabled):checked");u||(u=g.current.querySelector("input:not(:disabled)")),u&&u.focus()}}),[]);const b=Ln(o,g),C=vn(s),G=h.useMemo(()=>({name:C,onChange(u){j(u.target.value),d&&d(u,u.target.value)},value:S}),[C,d,j,S]);return n.jsx(hn.Provider,{value:G,children:n.jsx(tr,{role:"radiogroup",ref:b,className:A(P.root,p),...x,children:i})})}),yr=I(n.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})),fr=I(n.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"})),jr=I(n.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"})),Jr={title:"Pages/Component Showcase",parameters:{layout:"fullscreen",docs:{description:{component:"Comprehensive showcase of all Material-UI components used in the application."}}},decorators:[r=>n.jsx($n,{children:n.jsx(w,{sx:{p:3},children:n.jsx(r,{})})})],tags:["autodocs"]},D={render:()=>n.jsxs(w,{children:[n.jsx(a,{variant:"h3",gutterBottom:!0,children:"Material-UI Component Showcase"}),n.jsx(a,{variant:"body1",paragraph:!0,color:"text.secondary",children:"This page demonstrates all the Material-UI components integrated into the React Wieruch Stack."}),n.jsxs(m,{sx:{p:3,mb:3},children:[n.jsx(a,{variant:"h4",gutterBottom:!0,children:"Typography"}),n.jsxs(y,{spacing:1,children:[n.jsx(a,{variant:"h1",children:"Heading 1"}),n.jsx(a,{variant:"h2",children:"Heading 2"}),n.jsx(a,{variant:"h3",children:"Heading 3"}),n.jsx(a,{variant:"h4",children:"Heading 4"}),n.jsx(a,{variant:"h5",children:"Heading 5"}),n.jsx(a,{variant:"h6",children:"Heading 6"}),n.jsx(a,{variant:"subtitle1",children:"Subtitle 1"}),n.jsx(a,{variant:"subtitle2",children:"Subtitle 2"}),n.jsx(a,{variant:"body1",children:"Body 1 - Lorem ipsum dolor sit amet"}),n.jsx(a,{variant:"body2",children:"Body 2 - Lorem ipsum dolor sit amet"}),n.jsx(a,{variant:"caption",children:"Caption text"}),n.jsx(a,{variant:"overline",children:"Overline text"})]})]}),n.jsxs(m,{sx:{p:3,mb:3},children:[n.jsx(a,{variant:"h4",gutterBottom:!0,children:"Buttons"}),n.jsxs(y,{spacing:2,children:[n.jsxs(y,{direction:"row",spacing:2,flexWrap:"wrap",children:[n.jsx(l,{variant:"contained",children:"Contained"}),n.jsx(l,{variant:"outlined",children:"Outlined"}),n.jsx(l,{variant:"text",children:"Text"}),n.jsx(l,{variant:"contained",disabled:!0,children:"Disabled"})]}),n.jsxs(y,{direction:"row",spacing:2,flexWrap:"wrap",children:[n.jsx(l,{color:"primary",variant:"contained",children:"Primary"}),n.jsx(l,{color:"secondary",variant:"contained",children:"Secondary"}),n.jsx(l,{color:"error",variant:"contained",children:"Error"}),n.jsx(l,{color:"warning",variant:"contained",children:"Warning"}),n.jsx(l,{color:"info",variant:"contained",children:"Info"}),n.jsx(l,{color:"success",variant:"contained",children:"Success"})]}),n.jsxs(y,{direction:"row",spacing:2,flexWrap:"wrap",children:[n.jsx(l,{size:"small",variant:"contained",children:"Small"}),n.jsx(l,{size:"medium",variant:"contained",children:"Medium"}),n.jsx(l,{size:"large",variant:"contained",children:"Large"})]}),n.jsxs(y,{direction:"row",spacing:2,flexWrap:"wrap",children:[n.jsx(l,{variant:"contained",startIcon:n.jsx(yn,{}),children:"Add"}),n.jsx(l,{variant:"outlined",startIcon:n.jsx(fn,{}),children:"Edit"}),n.jsx(l,{variant:"text",startIcon:n.jsx(jn,{}),children:"Save"}),n.jsx(l,{variant:"contained",color:"error",endIcon:n.jsx(bn,{}),children:"Delete"})]})]})]}),n.jsxs(m,{sx:{p:3,mb:3},children:[n.jsx(a,{variant:"h4",gutterBottom:!0,children:"Cards"}),n.jsxs(f,{container:!0,spacing:3,children:[n.jsx(f,{size:{xs:12,sm:6,md:4},children:n.jsx(J,{children:n.jsxs(K,{children:[n.jsx(a,{gutterBottom:!0,variant:"h6",children:"Simple Card"}),n.jsx(a,{variant:"body2",color:"text.secondary",children:"This is a simple card with basic content."})]})})}),n.jsx(f,{size:{xs:12,sm:6,md:4},children:n.jsxs(J,{children:[n.jsxs(K,{children:[n.jsx(a,{gutterBottom:!0,variant:"h6",children:"Card with Actions"}),n.jsx(a,{variant:"body2",color:"text.secondary",children:"This card includes action buttons."})]}),n.jsxs(Cn,{children:[n.jsx(l,{size:"small",children:"Share"}),n.jsx(l,{size:"small",children:"Learn More"})]})]})}),n.jsx(f,{size:{xs:12,sm:6,md:4},children:n.jsx(J,{children:n.jsxs(K,{children:[n.jsxs(w,{display:"flex",alignItems:"center",mb:2,children:[n.jsx(Sn,{sx:{bgcolor:"primary.main",mr:2},children:"U"}),n.jsxs(w,{children:[n.jsx(a,{variant:"h6",children:"User Card"}),n.jsx(a,{variant:"body2",color:"text.secondary",children:"User information"})]})]}),n.jsx(a,{variant:"body2",children:"This card shows user information with an avatar."})]})})})]})]}),n.jsxs(m,{sx:{p:3,mb:3},children:[n.jsx(a,{variant:"h4",gutterBottom:!0,children:"Form Controls"}),n.jsxs(f,{container:!0,spacing:3,children:[n.jsx(f,{size:{xs:12,sm:6},children:n.jsxs(y,{spacing:2,children:[n.jsx(Q,{label:"Text Field",variant:"outlined",fullWidth:!0}),n.jsx(Q,{label:"Filled",variant:"filled",fullWidth:!0}),n.jsx(Q,{label:"Standard",variant:"standard",fullWidth:!0}),n.jsxs(an,{fullWidth:!0,children:[n.jsx(zn,{children:"Select"}),n.jsxs(Fn,{label:"Select",children:[n.jsx(X,{value:1,children:"Option 1"}),n.jsx(X,{value:2,children:"Option 2"}),n.jsx(X,{value:3,children:"Option 3"})]})]})]})}),n.jsx(f,{size:{xs:12,sm:6},children:n.jsxs(y,{spacing:2,children:[n.jsx($,{control:n.jsx(Jn,{}),label:"Checkbox"}),n.jsx($,{control:n.jsx(An,{}),label:"Switch"}),n.jsxs(an,{component:"fieldset",children:[n.jsx(Gn,{component:"legend",children:"Radio Group"}),n.jsxs(vr,{children:[n.jsx($,{value:"option1",control:n.jsx(ln,{}),label:"Option 1"}),n.jsx($,{value:"option2",control:n.jsx(ln,{}),label:"Option 2"})]})]})]})})]})]}),n.jsxs(m,{sx:{p:3,mb:3},children:[n.jsx(a,{variant:"h4",gutterBottom:!0,children:"Feedback Components"}),n.jsxs(y,{spacing:2,children:[n.jsx(U,{severity:"success",children:"This is a success alert!"}),n.jsx(U,{severity:"info",children:"This is an info alert!"}),n.jsx(U,{severity:"warning",children:"This is a warning alert!"}),n.jsx(U,{severity:"error",children:"This is an error alert!"}),n.jsxs(w,{children:[n.jsx(a,{variant:"body2",gutterBottom:!0,children:"Progress Indicators"}),n.jsx(Wn,{sx:{mr:2}}),n.jsx(On,{sx:{width:200}})]})]})]}),n.jsxs(m,{sx:{p:3,mb:3},children:[n.jsx(a,{variant:"h4",gutterBottom:!0,children:"Navigation & Icons"}),n.jsxs(y,{spacing:2,children:[n.jsxs(w,{display:"flex",gap:2,flexWrap:"wrap",children:[n.jsx(M,{color:"primary",children:n.jsx(yr,{})}),n.jsx(M,{color:"secondary",children:n.jsx(fr,{})}),n.jsx(M,{color:"error",children:n.jsx(Bn,{})}),n.jsx(M,{color:"info",children:n.jsx(wn,{})}),n.jsx(M,{color:"warning",children:n.jsx(Tn,{})}),n.jsx(M,{color:"success",children:n.jsx(jr,{})})]}),n.jsxs(w,{display:"flex",gap:2,flexWrap:"wrap",children:[n.jsx(F,{label:"Default"}),n.jsx(F,{label:"Primary",color:"primary"}),n.jsx(F,{label:"Secondary",color:"secondary"}),n.jsx(F,{label:"Success",color:"success"}),n.jsx(F,{label:"Error",color:"error"}),n.jsx(F,{label:"Info",color:"info"}),n.jsx(F,{label:"Warning",color:"warning"})]})]})]}),n.jsxs(m,{sx:{p:3,mb:3},children:[n.jsx(a,{variant:"h4",gutterBottom:!0,children:"Layout Components"}),n.jsxs(y,{spacing:2,children:[n.jsxs(w,{display:"flex",gap:2,alignItems:"center",children:[n.jsx(m,{sx:{p:2,flex:1},children:"Flex Item 1"}),n.jsx(m,{sx:{p:2,flex:1},children:"Flex Item 2"}),n.jsx(m,{sx:{p:2,flex:1},children:"Flex Item 3"})]}),n.jsx(nn,{}),n.jsxs(f,{container:!0,spacing:2,children:[n.jsx(f,{size:4,children:n.jsx(m,{sx:{p:2,textAlign:"center"},children:"Grid 4"})}),n.jsx(f,{size:4,children:n.jsx(m,{sx:{p:2,textAlign:"center"},children:"Grid 4"})}),n.jsx(f,{size:4,children:n.jsx(m,{sx:{p:2,textAlign:"center"},children:"Grid 4"})})]})]})]})]})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Box>
      <Typography variant='h3' gutterBottom>
        Material-UI Component Showcase
      </Typography>
      <Typography variant='body1' paragraph color='text.secondary'>
        This page demonstrates all the Material-UI components integrated into
        the React Wieruch Stack.
      </Typography>

      {/* Typography Section */}
      <Paper sx={{
      p: 3,
      mb: 3
    }}>
        <Typography variant='h4' gutterBottom>
          Typography
        </Typography>
        <Stack spacing={1}>
          <Typography variant='h1'>Heading 1</Typography>
          <Typography variant='h2'>Heading 2</Typography>
          <Typography variant='h3'>Heading 3</Typography>
          <Typography variant='h4'>Heading 4</Typography>
          <Typography variant='h5'>Heading 5</Typography>
          <Typography variant='h6'>Heading 6</Typography>
          <Typography variant='subtitle1'>Subtitle 1</Typography>
          <Typography variant='subtitle2'>Subtitle 2</Typography>
          <Typography variant='body1'>
            Body 1 - Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant='body2'>
            Body 2 - Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant='caption'>Caption text</Typography>
          <Typography variant='overline'>Overline text</Typography>
        </Stack>
      </Paper>

      {/* Buttons Section */}
      <Paper sx={{
      p: 3,
      mb: 3
    }}>
        <Typography variant='h4' gutterBottom>
          Buttons
        </Typography>
        <Stack spacing={2}>
          <Stack direction='row' spacing={2} flexWrap='wrap'>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
            <Button variant='text'>Text</Button>
            <Button variant='contained' disabled>
              Disabled
            </Button>
          </Stack>
          <Stack direction='row' spacing={2} flexWrap='wrap'>
            <Button color='primary' variant='contained'>
              Primary
            </Button>
            <Button color='secondary' variant='contained'>
              Secondary
            </Button>
            <Button color='error' variant='contained'>
              Error
            </Button>
            <Button color='warning' variant='contained'>
              Warning
            </Button>
            <Button color='info' variant='contained'>
              Info
            </Button>
            <Button color='success' variant='contained'>
              Success
            </Button>
          </Stack>
          <Stack direction='row' spacing={2} flexWrap='wrap'>
            <Button size='small' variant='contained'>
              Small
            </Button>
            <Button size='medium' variant='contained'>
              Medium
            </Button>
            <Button size='large' variant='contained'>
              Large
            </Button>
          </Stack>
          <Stack direction='row' spacing={2} flexWrap='wrap'>
            <Button variant='contained' startIcon={<Add />}>
              Add
            </Button>
            <Button variant='outlined' startIcon={<Edit />}>
              Edit
            </Button>
            <Button variant='text' startIcon={<Save />}>
              Save
            </Button>
            <Button variant='contained' color='error' endIcon={<Delete />}>
              Delete
            </Button>
          </Stack>
        </Stack>
      </Paper>

      {/* Cards Section */}
      <Paper sx={{
      p: 3,
      mb: 3
    }}>
        <Typography variant='h4' gutterBottom>
          Cards
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{
          xs: 12,
          sm: 6,
          md: 4
        }}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant='h6'>
                  Simple Card
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  This is a simple card with basic content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{
          xs: 12,
          sm: 6,
          md: 4
        }}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant='h6'>
                  Card with Actions
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  This card includes action buttons.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{
          xs: 12,
          sm: 6,
          md: 4
        }}>
            <Card>
              <CardContent>
                <Box display='flex' alignItems='center' mb={2}>
                  <Avatar sx={{
                  bgcolor: 'primary.main',
                  mr: 2
                }}>U</Avatar>
                  <Box>
                    <Typography variant='h6'>User Card</Typography>
                    <Typography variant='body2' color='text.secondary'>
                      User information
                    </Typography>
                  </Box>
                </Box>
                <Typography variant='body2'>
                  This card shows user information with an avatar.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Form Controls Section */}
      <Paper sx={{
      p: 3,
      mb: 3
    }}>
        <Typography variant='h4' gutterBottom>
          Form Controls
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{
          xs: 12,
          sm: 6
        }}>
            <Stack spacing={2}>
              <TextField label='Text Field' variant='outlined' fullWidth />
              <TextField label='Filled' variant='filled' fullWidth />
              <TextField label='Standard' variant='standard' fullWidth />
              <FormControl fullWidth>
                <InputLabel>Select</InputLabel>
                <Select label='Select'>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid size={{
          xs: 12,
          sm: 6
        }}>
            <Stack spacing={2}>
              <FormControlLabel control={<Checkbox />} label='Checkbox' />
              <FormControlLabel control={<Switch />} label='Switch' />
              <FormControl component='fieldset'>
                <FormLabel component='legend'>Radio Group</FormLabel>
                <RadioGroup>
                  <FormControlLabel value='option1' control={<Radio />} label='Option 1' />
                  <FormControlLabel value='option2' control={<Radio />} label='Option 2' />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Feedback Section */}
      <Paper sx={{
      p: 3,
      mb: 3
    }}>
        <Typography variant='h4' gutterBottom>
          Feedback Components
        </Typography>
        <Stack spacing={2}>
          <Alert severity='success'>This is a success alert!</Alert>
          <Alert severity='info'>This is an info alert!</Alert>
          <Alert severity='warning'>This is a warning alert!</Alert>
          <Alert severity='error'>This is an error alert!</Alert>
          <Box>
            <Typography variant='body2' gutterBottom>
              Progress Indicators
            </Typography>
            <CircularProgress sx={{
            mr: 2
          }} />
            <LinearProgress sx={{
            width: 200
          }} />
          </Box>
        </Stack>
      </Paper>

      {/* Navigation Section */}
      <Paper sx={{
      p: 3,
      mb: 3
    }}>
        <Typography variant='h4' gutterBottom>
          Navigation & Icons
        </Typography>
        <Stack spacing={2}>
          <Box display='flex' gap={2} flexWrap='wrap'>
            <IconButton color='primary'>
              <Home />
            </IconButton>
            <IconButton color='secondary'>
              <Person />
            </IconButton>
            <IconButton color='error'>
              <Favorite />
            </IconButton>
            <IconButton color='info'>
              <Share />
            </IconButton>
            <IconButton color='warning'>
              <Bookmark />
            </IconButton>
            <IconButton color='success'>
              <Settings />
            </IconButton>
          </Box>
          <Box display='flex' gap={2} flexWrap='wrap'>
            <Chip label='Default' />
            <Chip label='Primary' color='primary' />
            <Chip label='Secondary' color='secondary' />
            <Chip label='Success' color='success' />
            <Chip label='Error' color='error' />
            <Chip label='Info' color='info' />
            <Chip label='Warning' color='warning' />
          </Box>
        </Stack>
      </Paper>

      {/* Layout Section */}
      <Paper sx={{
      p: 3,
      mb: 3
    }}>
        <Typography variant='h4' gutterBottom>
          Layout Components
        </Typography>
        <Stack spacing={2}>
          <Box display='flex' gap={2} alignItems='center'>
            <Paper sx={{
            p: 2,
            flex: 1
          }}>Flex Item 1</Paper>
            <Paper sx={{
            p: 2,
            flex: 1
          }}>Flex Item 2</Paper>
            <Paper sx={{
            p: 2,
            flex: 1
          }}>Flex Item 3</Paper>
          </Box>
          <Divider />
          <Grid container spacing={2}>
            <Grid size={4}>
              <Paper sx={{
              p: 2,
              textAlign: 'center'
            }}>Grid 4</Paper>
            </Grid>
            <Grid size={4}>
              <Paper sx={{
              p: 2,
              textAlign: 'center'
            }}>Grid 4</Paper>
            </Grid>
            <Grid size={4}>
              <Paper sx={{
              p: 2,
              textAlign: 'center'
            }}>Grid 4</Paper>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </Box>
}`,...D.parameters?.docs?.source}}};const Kr=["AllComponents"];export{D as AllComponents,Kr as __namedExportsOrder,Jr as default};
