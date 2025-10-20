import{j as r}from"./iframe-Bwy0Guc_.js";import{T as e}from"./Typography-Bve4GY16.js";import{S as a}from"./Stack-GFdCtcqn.js";import{B as l}from"./Box-BxJ1AlIS.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-BZXdVNOf.js";import"./useThemeProps-DzMZ7FFj.js";const S={title:"Material-UI/Typography",component:e,parameters:{layout:"centered",docs:{description:{component:"Material-UI Typography component for displaying text with consistent styling."}}},argTypes:{variant:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline","button","inherit"]},color:{control:{type:"select"},options:["initial","inherit","primary","secondary","text.primary","text.secondary","error"]},align:{control:{type:"select"},options:["inherit","left","center","right","justify"]}},tags:["autodocs"]},n={args:{children:"Typography Text"}},t={render:()=>r.jsxs(a,{spacing:2,children:[r.jsx(e,{variant:"h1",component:"h1",children:"Heading 1"}),r.jsx(e,{variant:"h2",component:"h2",children:"Heading 2"}),r.jsx(e,{variant:"h3",component:"h3",children:"Heading 3"}),r.jsx(e,{variant:"h4",component:"h4",children:"Heading 4"}),r.jsx(e,{variant:"h5",component:"h5",children:"Heading 5"}),r.jsx(e,{variant:"h6",component:"h6",children:"Heading 6"})]})},o={render:()=>r.jsxs(a,{spacing:2,children:[r.jsx(e,{variant:"subtitle1",children:"Subtitle 1 - Lorem ipsum dolor sit amet"}),r.jsx(e,{variant:"subtitle2",children:"Subtitle 2 - Lorem ipsum dolor sit amet"})]})},i={render:()=>r.jsxs(a,{spacing:2,children:[r.jsx(e,{variant:"body1",children:"Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),r.jsx(e,{variant:"body2",children:"Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."})]})},s={render:()=>r.jsxs(a,{spacing:2,children:[r.jsx(e,{color:"primary",children:"Primary Color"}),r.jsx(e,{color:"secondary",children:"Secondary Color"}),r.jsx(e,{color:"text.primary",children:"Text Primary"}),r.jsx(e,{color:"text.secondary",children:"Text Secondary"}),r.jsx(e,{color:"error",children:"Error Color"})]})},p={render:()=>r.jsxs(a,{spacing:2,sx:{width:300},children:[r.jsx(e,{align:"left",children:"Left aligned text"}),r.jsx(e,{align:"center",children:"Center aligned text"}),r.jsx(e,{align:"right",children:"Right aligned text"}),r.jsx(e,{align:"justify",children:"Justified text that spreads across the full width of the container. This demonstrates how text can be justified to create even margins."})]})},c={render:()=>r.jsxs(a,{spacing:2,children:[r.jsx(e,{variant:"caption",children:"Caption text - Small text for captions"}),r.jsx(e,{variant:"overline",children:"Overline text - Small uppercase text"})]})},d={render:()=>r.jsxs(l,{children:[r.jsx(e,{variant:"h3",sx:{fontSize:{xs:"1.5rem",sm:"2rem",md:"2.5rem",lg:"3rem"}},children:"Responsive Heading"}),r.jsx(e,{variant:"body1",sx:{fontSize:{xs:"0.875rem",sm:"1rem",md:"1.125rem"}},children:"This text adjusts its size based on the screen size. It's smaller on mobile devices and larger on desktop screens."})]})},m={render:()=>r.jsxs(a,{spacing:2,children:[r.jsx(e,{variant:"h4",gutterBottom:!0,children:"Heading with Bottom Gutter"}),r.jsx(e,{variant:"body1",paragraph:!0,children:"This paragraph has bottom margin (paragraph prop)."}),r.jsx(e,{variant:"body1",children:"This paragraph has no bottom margin."})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Typography Text'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Typography variant='h1' component='h1'>
        Heading 1
      </Typography>
      <Typography variant='h2' component='h2'>
        Heading 2
      </Typography>
      <Typography variant='h3' component='h3'>
        Heading 3
      </Typography>
      <Typography variant='h4' component='h4'>
        Heading 4
      </Typography>
      <Typography variant='h5' component='h5'>
        Heading 5
      </Typography>
      <Typography variant='h6' component='h6'>
        Heading 6
      </Typography>
    </Stack>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Typography variant='subtitle1'>
        Subtitle 1 - Lorem ipsum dolor sit amet
      </Typography>
      <Typography variant='subtitle2'>
        Subtitle 2 - Lorem ipsum dolor sit amet
      </Typography>
    </Stack>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Typography variant='body1'>
        Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris.
      </Typography>
      <Typography variant='body2'>
        Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris.
      </Typography>
    </Stack>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Typography color='primary'>Primary Color</Typography>
      <Typography color='secondary'>Secondary Color</Typography>
      <Typography color='text.primary'>Text Primary</Typography>
      <Typography color='text.secondary'>Text Secondary</Typography>
      <Typography color='error'>Error Color</Typography>
    </Stack>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} sx={{
    width: 300
  }}>
      <Typography align='left'>Left aligned text</Typography>
      <Typography align='center'>Center aligned text</Typography>
      <Typography align='right'>Right aligned text</Typography>
      <Typography align='justify'>
        Justified text that spreads across the full width of the container. This
        demonstrates how text can be justified to create even margins.
      </Typography>
    </Stack>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Typography variant='caption'>
        Caption text - Small text for captions
      </Typography>
      <Typography variant='overline'>
        Overline text - Small uppercase text
      </Typography>
    </Stack>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box>
      <Typography variant='h3' sx={{
      fontSize: {
        xs: '1.5rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem'
      }
    }}>
        Responsive Heading
      </Typography>
      <Typography variant='body1' sx={{
      fontSize: {
        xs: '0.875rem',
        sm: '1rem',
        md: '1.125rem'
      }
    }}>
        This text adjusts its size based on the screen size. It&apos;s smaller
        on mobile devices and larger on desktop screens.
      </Typography>
    </Box>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Typography variant='h4' gutterBottom>
        Heading with Bottom Gutter
      </Typography>
      <Typography variant='body1' paragraph>
        This paragraph has bottom margin (paragraph prop).
      </Typography>
      <Typography variant='body1'>
        This paragraph has no bottom margin.
      </Typography>
    </Stack>
}`,...m.parameters?.docs?.source}}};const b=["Default","Headings","Subtitles","BodyText","Colors","Alignment","CaptionAndOverline","ResponsiveTypography","TextWithGutter"];export{p as Alignment,i as BodyText,c as CaptionAndOverline,s as Colors,n as Default,t as Headings,d as ResponsiveTypography,o as Subtitles,m as TextWithGutter,b as __namedExportsOrder,S as default};
