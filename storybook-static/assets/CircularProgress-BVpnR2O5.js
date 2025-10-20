import{r as R,u as w,j as c,c as N,b as l,h as b,k as $}from"./iframe-Bwy0Guc_.js";import{a as T,g as U,s as p,c as E,m as h,b as F}from"./createSimplePaletteValueFilter-BZXdVNOf.js";function I(r){return T("MuiCircularProgress",r)}U("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","track","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const s=44,g=$`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,y=$`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,z=typeof g!="string"?b`
        animation: ${g} 1.4s linear infinite;
      `:null,A=typeof y!="string"?b`
        animation: ${y} 1.4s ease-in-out infinite;
      `:null,K=r=>{const{classes:e,variant:t,color:o,disableShrink:u}=r,m={root:["root",t,`color${l(o)}`],svg:["svg"],track:["track"],circle:["circle",`circle${l(t)}`,u&&"circleDisableShrink"]};return E(m,I,e)},O=p("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${l(t.color)}`]]}})(h(({theme:r})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:z||{animation:`${g} 1.4s linear infinite`}},...Object.entries(r.palette).filter(F()).map(([e])=>({props:{color:e},style:{color:(r.vars||r).palette[e].main}}))]}))),V=p("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),W=p("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${l(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})(h(({theme:r})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:A||{animation:`${y} 1.4s ease-in-out infinite`}}]}))),B=p("circle",{name:"MuiCircularProgress",slot:"Track"})(h(({theme:r})=>({stroke:"currentColor",opacity:(r.vars||r).palette.action.activatedOpacity}))),q=R.forwardRef(function(e,t){const o=w({props:e,name:"MuiCircularProgress"}),{className:u,color:m="primary",disableShrink:D=!1,enableTrackSlot:v=!1,size:d=40,style:M,thickness:a=3.6,value:f=0,variant:x="indeterminate",...j}=o,i={...o,color:m,disableShrink:D,size:d,thickness:a,value:f,variant:x,enableTrackSlot:v},n=K(i),k={},C={},P={};if(x==="determinate"){const S=2*Math.PI*((s-a)/2);k.strokeDasharray=S.toFixed(3),P["aria-valuenow"]=Math.round(f),k.strokeDashoffset=`${((100-f)/100*S).toFixed(3)}px`,C.transform="rotate(-90deg)"}return c.jsx(O,{className:N(n.root,u),style:{width:d,height:d,...C,...M},ownerState:i,ref:t,role:"progressbar",...P,...j,children:c.jsxs(V,{className:n.svg,ownerState:i,viewBox:`${s/2} ${s/2} ${s} ${s}`,children:[v?c.jsx(B,{className:n.track,ownerState:i,cx:s,cy:s,r:(s-a)/2,fill:"none",strokeWidth:a,"aria-hidden":"true"}):null,c.jsx(W,{className:n.circle,style:k,ownerState:i,cx:s,cy:s,r:(s-a)/2,fill:"none",strokeWidth:a})]})})});export{q as C};
