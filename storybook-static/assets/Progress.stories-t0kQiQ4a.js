import{j as r}from"./iframe-Bwy0Guc_.js";import{C as n}from"./CircularProgress-BVpnR2O5.js";import{S as t}from"./Stack-GFdCtcqn.js";import{B as e}from"./Box-BxJ1AlIS.js";import{T as o}from"./Typography-Bve4GY16.js";import{L as s}from"./LinearProgress-D-BVACu3.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-BZXdVNOf.js";import"./useThemeProps-DzMZ7FFj.js";const f={title:"Material-UI/Progress",component:n,parameters:{layout:"centered",docs:{description:{component:"Material-UI Progress components for showing loading states and progress indicators."}}},argTypes:{size:{control:{type:"number"}},thickness:{control:{type:"number"}},color:{control:{type:"select"},options:["primary","secondary","error","info","success","warning"]}},tags:["autodocs"]},a={args:{}},i={render:()=>r.jsxs(t,{spacing:3,alignItems:"center",children:[r.jsx(n,{size:20}),r.jsx(n,{size:40}),r.jsx(n,{size:60}),r.jsx(n,{size:80})]})},c={render:()=>r.jsxs(t,{spacing:3,alignItems:"center",children:[r.jsx(n,{color:"primary"}),r.jsx(n,{color:"secondary"}),r.jsx(n,{color:"error"}),r.jsx(n,{color:"warning"}),r.jsx(n,{color:"info"}),r.jsx(n,{color:"success"})]})},l={render:()=>r.jsxs(t,{spacing:3,alignItems:"center",children:[r.jsxs(e,{sx:{position:"relative",display:"inline-flex"},children:[r.jsx(n,{variant:"determinate",value:25}),r.jsx(e,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(o,{variant:"caption",component:"div",color:"text.secondary",children:"25%"})})]}),r.jsxs(e,{sx:{position:"relative",display:"inline-flex"},children:[r.jsx(n,{variant:"determinate",value:50}),r.jsx(e,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(o,{variant:"caption",component:"div",color:"text.secondary",children:"50%"})})]}),r.jsxs(e,{sx:{position:"relative",display:"inline-flex"},children:[r.jsx(n,{variant:"determinate",value:75}),r.jsx(e,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(o,{variant:"caption",component:"div",color:"text.secondary",children:"75%"})})]})]})},p={render:()=>r.jsxs(t,{spacing:3,sx:{width:300},children:[r.jsxs(e,{children:[r.jsx(o,{variant:"body2",gutterBottom:!0,children:"Indeterminate"}),r.jsx(s,{})]}),r.jsxs(e,{children:[r.jsx(o,{variant:"body2",gutterBottom:!0,children:"Determinate (25%)"}),r.jsx(s,{variant:"determinate",value:25})]}),r.jsxs(e,{children:[r.jsx(o,{variant:"body2",gutterBottom:!0,children:"Determinate (50%)"}),r.jsx(s,{variant:"determinate",value:50})]}),r.jsxs(e,{children:[r.jsx(o,{variant:"body2",gutterBottom:!0,children:"Determinate (75%)"}),r.jsx(s,{variant:"determinate",value:75})]})]})},d={render:()=>r.jsxs(t,{spacing:3,sx:{width:300},children:[r.jsx(s,{color:"primary"}),r.jsx(s,{color:"secondary"}),r.jsx(s,{color:"error"}),r.jsx(s,{color:"warning"}),r.jsx(s,{color:"info"}),r.jsx(s,{color:"success"})]})},g={render:()=>r.jsxs(t,{spacing:4,sx:{width:400},children:[r.jsxs(e,{children:[r.jsx(o,{variant:"h6",gutterBottom:!0,children:"Page Loading"}),r.jsx(e,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:100,border:1,borderColor:"divider",borderRadius:1},children:r.jsx(n,{})})]}),r.jsxs(e,{children:[r.jsx(o,{variant:"h6",gutterBottom:!0,children:"File Upload Progress"}),r.jsxs(e,{sx:{display:"flex",alignItems:"center",gap:2},children:[r.jsx(e,{sx:{width:"100%"},children:r.jsx(s,{variant:"determinate",value:60})}),r.jsx(o,{variant:"body2",color:"text.secondary",children:"60%"})]})]}),r.jsxs(e,{children:[r.jsx(o,{variant:"h6",gutterBottom:!0,children:"Processing Data"}),r.jsxs(e,{sx:{display:"flex",alignItems:"center",gap:2},children:[r.jsx(n,{size:24}),r.jsx(o,{variant:"body2",children:"Processing your request..."})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} alignItems='center'>
      <CircularProgress size={20} />
      <CircularProgress size={40} />
      <CircularProgress size={60} />
      <CircularProgress size={80} />
    </Stack>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} alignItems='center'>
      <CircularProgress color='primary' />
      <CircularProgress color='secondary' />
      <CircularProgress color='error' />
      <CircularProgress color='warning' />
      <CircularProgress color='info' />
      <CircularProgress color='success' />
    </Stack>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} alignItems='center'>
      <Box sx={{
      position: 'relative',
      display: 'inline-flex'
    }}>
        <CircularProgress variant='determinate' value={25} />
        <Box sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <Typography variant='caption' component='div' color='text.secondary'>
            25%
          </Typography>
        </Box>
      </Box>
      <Box sx={{
      position: 'relative',
      display: 'inline-flex'
    }}>
        <CircularProgress variant='determinate' value={50} />
        <Box sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <Typography variant='caption' component='div' color='text.secondary'>
            50%
          </Typography>
        </Box>
      </Box>
      <Box sx={{
      position: 'relative',
      display: 'inline-flex'
    }}>
        <CircularProgress variant='determinate' value={75} />
        <Box sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <Typography variant='caption' component='div' color='text.secondary'>
            75%
          </Typography>
        </Box>
      </Box>
    </Stack>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 300
  }}>
      <Box>
        <Typography variant='body2' gutterBottom>
          Indeterminate
        </Typography>
        <LinearProgress />
      </Box>
      <Box>
        <Typography variant='body2' gutterBottom>
          Determinate (25%)
        </Typography>
        <LinearProgress variant='determinate' value={25} />
      </Box>
      <Box>
        <Typography variant='body2' gutterBottom>
          Determinate (50%)
        </Typography>
        <LinearProgress variant='determinate' value={50} />
      </Box>
      <Box>
        <Typography variant='body2' gutterBottom>
          Determinate (75%)
        </Typography>
        <LinearProgress variant='determinate' value={75} />
      </Box>
    </Stack>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 300
  }}>
      <LinearProgress color='primary' />
      <LinearProgress color='secondary' />
      <LinearProgress color='error' />
      <LinearProgress color='warning' />
      <LinearProgress color='info' />
      <LinearProgress color='success' />
    </Stack>
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={4} sx={{
    width: 400
  }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          Page Loading
        </Typography>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        border: 1,
        borderColor: 'divider',
        borderRadius: 1
      }}>
          <CircularProgress />
        </Box>
      </Box>
      <Box>
        <Typography variant='h6' gutterBottom>
          File Upload Progress
        </Typography>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
          <Box sx={{
          width: '100%'
        }}>
            <LinearProgress variant='determinate' value={60} />
          </Box>
          <Typography variant='body2' color='text.secondary'>
            60%
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant='h6' gutterBottom>
          Processing Data
        </Typography>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
          <CircularProgress size={24} />
          <Typography variant='body2'>Processing your request...</Typography>
        </Box>
      </Box>
    </Stack>
}`,...g.parameters?.docs?.source}}};const C=["Default","CircularProgressSizes","CircularProgressColors","CircularProgressWithValue","LinearProgressDemo","LinearProgressColors","LoadingStates"];export{c as CircularProgressColors,i as CircularProgressSizes,l as CircularProgressWithValue,a as Default,d as LinearProgressColors,p as LinearProgressDemo,g as LoadingStates,C as __namedExportsOrder,f as default};
