import{j as t}from"./iframe-Bwy0Guc_.js";import{C as m,F as d}from"./Footer-BM886-sy.js";import{H as l}from"./Header-qIUkvd6z.js";import{B as i}from"./Box-BxJ1AlIS.js";import{T as r}from"./Typography-Bve4GY16.js";import{P as s}from"./Paper-D_5aThdt.js";import{B as u}from"./chunk-OIYGIGL5-DYbfhj_d.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-BZXdVNOf.js";import"./useThemeProps-DzMZ7FFj.js";import"./Button-Db6xXzMq.js";import"./ButtonBase-CyXCqF96.js";import"./useTimeout-CYADUiHM.js";import"./CircularProgress-BVpnR2O5.js";import"./IconButton-Cqgezs0w.js";import"./createSvgIcon-Bnjs_O6j.js";function o({children:e}){return t.jsxs(i,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[t.jsx(l,{}),t.jsx(i,{component:"main",sx:{flexGrow:1,py:4},children:t.jsx(m,{maxWidth:"lg",children:e})}),t.jsx(d,{})]})}try{o.displayName="Layout",o.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}const D={title:"Components/Layout",component:o,parameters:{layout:"fullscreen",docs:{description:{component:"Main application layout with header, main content area, and footer."}}},decorators:[e=>t.jsx(u,{children:t.jsx(e,{})})],tags:["autodocs"]},a={render:()=>t.jsxs(o,{children:[t.jsx(r,{variant:"h4",gutterBottom:!0,children:"Welcome to the Layout Demo"}),t.jsx(r,{variant:"body1",paragraph:!0,children:"This demonstrates the main application layout with header, content area, and footer."}),t.jsxs(i,{display:"flex",gap:2,flexWrap:"wrap",children:[t.jsxs(s,{sx:{p:2,flex:1,minWidth:200},children:[t.jsx(r,{variant:"h6",gutterBottom:!0,children:"Card 1"}),t.jsx(r,{variant:"body2",children:"This is a sample card to demonstrate the layout structure."})]}),t.jsxs(s,{sx:{p:2,flex:1,minWidth:200},children:[t.jsx(r,{variant:"h6",gutterBottom:!0,children:"Card 2"}),t.jsx(r,{variant:"body2",children:"Another sample card showing the responsive grid layout."})]})]})]})},n={render:()=>t.jsxs(o,{children:[t.jsx(r,{variant:"h4",gutterBottom:!0,children:"Long Content Demo"}),Array.from({length:10},(e,p)=>t.jsxs(s,{sx:{p:2,mb:2},children:[t.jsxs(r,{variant:"h6",gutterBottom:!0,children:["Section ",p+1]}),t.jsx(r,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]},p))]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Layout>
      <Typography variant='h4' gutterBottom>
        Welcome to the Layout Demo
      </Typography>
      <Typography variant='body1' paragraph>
        This demonstrates the main application layout with header, content area,
        and footer.
      </Typography>
      <Box display='flex' gap={2} flexWrap='wrap'>
        <Paper sx={{
        p: 2,
        flex: 1,
        minWidth: 200
      }}>
          <Typography variant='h6' gutterBottom>
            Card 1
          </Typography>
          <Typography variant='body2'>
            This is a sample card to demonstrate the layout structure.
          </Typography>
        </Paper>
        <Paper sx={{
        p: 2,
        flex: 1,
        minWidth: 200
      }}>
          <Typography variant='h6' gutterBottom>
            Card 2
          </Typography>
          <Typography variant='body2'>
            Another sample card showing the responsive grid layout.
          </Typography>
        </Paper>
      </Box>
    </Layout>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Layout>
      <Typography variant='h4' gutterBottom>
        Long Content Demo
      </Typography>
      {Array.from({
      length: 10
    }, (_, i) => <Paper key={i} sx={{
      p: 2,
      mb: 2
    }}>
          <Typography variant='h6' gutterBottom>
            Section {i + 1}
          </Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Paper>)}
    </Layout>
}`,...n.parameters?.docs?.source}}};const q=["Default","WithLongContent"];export{a as Default,n as WithLongContent,q as __namedExportsOrder,D as default};
