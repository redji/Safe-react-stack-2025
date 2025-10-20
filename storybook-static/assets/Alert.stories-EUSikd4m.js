import{r as g,u as v,j as e,c as T}from"./iframe-Bwy0Guc_.js";import{A as r}from"./Alert-DO7KbcQC.js";import{S as n}from"./Stack-GFdCtcqn.js";import{a as x,g as w,s as S,c as j,m as k}from"./createSimplePaletteValueFilter-BZXdVNOf.js";import{T as b}from"./Typography-Bve4GY16.js";import"./preload-helper-PPVm8Dsz.js";import"./useSlot-C-FCyWAp.js";import"./useTimeout-CYADUiHM.js";import"./createSvgIcon-Bnjs_O6j.js";import"./IconButton-Cqgezs0w.js";import"./ButtonBase-CyXCqF96.js";import"./CircularProgress-BVpnR2O5.js";import"./Paper-D_5aThdt.js";import"./useThemeProps-DzMZ7FFj.js";function C(s){return x("MuiAlertTitle",s)}w("MuiAlertTitle",["root"]);const M=s=>{const{classes:m}=s;return j({root:["root"]},C,m)},W=S(b,{name:"MuiAlertTitle",slot:"Root"})(k(({theme:s})=>({fontWeight:s.typography.fontWeightMedium,marginTop:-2}))),t=g.forwardRef(function(m,u){const p=v({props:m,name:"MuiAlertTitle"}),{className:y,...A}=p,h=p,f=M(h);return e.jsx(W,{gutterBottom:!0,component:"div",ownerState:h,ref:u,className:T(f.root,y),...A})}),_={title:"Material-UI/Alert",component:r,parameters:{layout:"centered",docs:{description:{component:"Material-UI Alert component for displaying important messages to users."}}},argTypes:{severity:{control:{type:"select"},options:["error","warning","info","success"]},variant:{control:{type:"select"},options:["filled","outlined","standard"]}},tags:["autodocs"]},i={args:{children:"This is an alert message."}},a={render:()=>e.jsxs(n,{spacing:2,sx:{width:400},children:[e.jsx(r,{severity:"error",children:"This is an error alert!"}),e.jsx(r,{severity:"warning",children:"This is a warning alert!"}),e.jsx(r,{severity:"info",children:"This is an info alert!"}),e.jsx(r,{severity:"success",children:"This is a success alert!"})]})},o={render:()=>e.jsxs(n,{spacing:2,sx:{width:400},children:[e.jsxs(r,{severity:"error",children:[e.jsx(t,{children:"Error"}),"This is an error alert with a title!"]}),e.jsxs(r,{severity:"warning",children:[e.jsx(t,{children:"Warning"}),"This is a warning alert with a title!"]}),e.jsxs(r,{severity:"info",children:[e.jsx(t,{children:"Info"}),"This is an info alert with a title!"]}),e.jsxs(r,{severity:"success",children:[e.jsx(t,{children:"Success"}),"This is a success alert with a title!"]})]})},l={render:()=>e.jsxs(n,{spacing:2,sx:{width:400},children:[e.jsx(r,{severity:"info",variant:"standard",children:"Standard variant alert"}),e.jsx(r,{severity:"info",variant:"outlined",children:"Outlined variant alert"}),e.jsx(r,{severity:"info",variant:"filled",children:"Filled variant alert"})]})},c={render:()=>e.jsxs(n,{spacing:2,sx:{width:400},children:[e.jsx(r,{severity:"info",onClose:()=>{},children:"This alert can be dismissed"}),e.jsxs(r,{severity:"warning",onClose:()=>{},children:[e.jsx(t,{children:"Warning"}),"This warning alert can also be dismissed"]})]})},d={render:()=>e.jsxs(n,{spacing:2,sx:{width:500},children:[e.jsxs(r,{severity:"info",children:[e.jsx(t,{children:"System Maintenance"}),"We will be performing scheduled maintenance on our servers from 2:00 AM to 4:00 AM EST on Sunday, January 15th. During this time, some features may be temporarily unavailable. We apologize for any inconvenience."]}),e.jsxs(r,{severity:"success",children:[e.jsx(t,{children:"Account Created Successfully"}),"Your account has been created and you can now access all features of our platform. Please check your email for a verification link to complete the setup process."]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is an alert message.'
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} sx={{
    width: 400
  }}>
      <Alert severity='error'>This is an error alert!</Alert>
      <Alert severity='warning'>This is a warning alert!</Alert>
      <Alert severity='info'>This is an info alert!</Alert>
      <Alert severity='success'>This is a success alert!</Alert>
    </Stack>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} sx={{
    width: 400
  }}>
      <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        This is an error alert with a title!
      </Alert>
      <Alert severity='warning'>
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert with a title!
      </Alert>
      <Alert severity='info'>
        <AlertTitle>Info</AlertTitle>
        This is an info alert with a title!
      </Alert>
      <Alert severity='success'>
        <AlertTitle>Success</AlertTitle>
        This is a success alert with a title!
      </Alert>
    </Stack>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} sx={{
    width: 400
  }}>
      <Alert severity='info' variant='standard'>
        Standard variant alert
      </Alert>
      <Alert severity='info' variant='outlined'>
        Outlined variant alert
      </Alert>
      <Alert severity='info' variant='filled'>
        Filled variant alert
      </Alert>
    </Stack>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} sx={{
    width: 400
  }}>
      <Alert severity='info' onClose={() => {}}>
        This alert can be dismissed
      </Alert>
      <Alert severity='warning' onClose={() => {}}>
        <AlertTitle>Warning</AlertTitle>
        This warning alert can also be dismissed
      </Alert>
    </Stack>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} sx={{
    width: 500
  }}>
      <Alert severity='info'>
        <AlertTitle>System Maintenance</AlertTitle>
        We will be performing scheduled maintenance on our servers from 2:00 AM
        to 4:00 AM EST on Sunday, January 15th. During this time, some features
        may be temporarily unavailable. We apologize for any inconvenience.
      </Alert>
      <Alert severity='success'>
        <AlertTitle>Account Created Successfully</AlertTitle>
        Your account has been created and you can now access all features of our
        platform. Please check your email for a verification link to complete
        the setup process.
      </Alert>
    </Stack>
}`,...d.parameters?.docs?.source}}};const B=["Default","Severities","WithTitles","Variants","Dismissible","LongContent"];export{i as Default,c as Dismissible,d as LongContent,a as Severities,l as Variants,o as WithTitles,B as __namedExportsOrder,_ as default};
