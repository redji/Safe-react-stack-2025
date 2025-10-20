import{j as n}from"./iframe-Bwy0Guc_.js";import{G as e}from"./Grid--9pmmI6_.js";import{P as r}from"./Paper-D_5aThdt.js";import{T as i}from"./Typography-Bve4GY16.js";import{B as x}from"./Box-BxJ1AlIS.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-DzMZ7FFj.js";import"./createSimplePaletteValueFilter-BZXdVNOf.js";import"./isMuiElement-D3zEw82o.js";const b={title:"Material-UI/Grid",component:e,parameters:{layout:"centered",docs:{description:{component:"Material-UI Grid v2 component for responsive layouts."}}},tags:["autodocs"]},s={render:()=>n.jsxs(e,{container:!0,spacing:2,sx:{width:400},children:[n.jsx(e,{size:6,children:n.jsx(r,{sx:{p:2,textAlign:"center"},children:"Item 1"})}),n.jsx(e,{size:6,children:n.jsx(r,{sx:{p:2,textAlign:"center"},children:"Item 2"})})]})},o={render:()=>n.jsxs(e,{container:!0,spacing:2,sx:{width:600},children:[n.jsx(e,{size:{xs:12,sm:6,md:4},children:n.jsx(r,{sx:{p:2,textAlign:"center",bgcolor:"primary.light",color:"primary.contrastText"},children:"xs=12, sm=6, md=4"})}),n.jsx(e,{size:{xs:12,sm:6,md:4},children:n.jsx(r,{sx:{p:2,textAlign:"center",bgcolor:"secondary.light",color:"secondary.contrastText"},children:"xs=12, sm=6, md=4"})}),n.jsx(e,{size:{xs:12,sm:6,md:4},children:n.jsx(r,{sx:{p:2,textAlign:"center",bgcolor:"success.light",color:"success.contrastText"},children:"xs=12, sm=6, md=4"})})]})},a={render:()=>n.jsxs(e,{container:!0,spacing:2,sx:{width:500},children:[n.jsx(e,{size:"auto",children:n.jsx(r,{sx:{p:2,textAlign:"center",bgcolor:"info.light"},children:"Auto"})}),n.jsx(e,{size:6,children:n.jsx(r,{sx:{p:2,textAlign:"center",bgcolor:"warning.light"},children:"Fixed 6"})}),n.jsx(e,{size:"auto",children:n.jsx(r,{sx:{p:2,textAlign:"center",bgcolor:"error.light"},children:"Auto"})})]})},c={render:()=>n.jsxs(e,{container:!0,spacing:2,sx:{width:600},children:[n.jsx(e,{size:8,children:n.jsxs(r,{sx:{p:2,bgcolor:"grey.100"},children:[n.jsx(i,{variant:"h6",gutterBottom:!0,children:"Main Content"}),n.jsxs(e,{container:!0,spacing:1,children:[n.jsx(e,{size:6,children:n.jsx(x,{sx:{p:1,bgcolor:"primary.light",textAlign:"center"},children:"Nested 1"})}),n.jsx(e,{size:6,children:n.jsx(x,{sx:{p:1,bgcolor:"secondary.light",textAlign:"center"},children:"Nested 2"})})]})]})}),n.jsx(e,{size:4,children:n.jsxs(r,{sx:{p:2,bgcolor:"grey.200"},children:[n.jsx(i,{variant:"h6",gutterBottom:!0,children:"Sidebar"}),n.jsx(i,{variant:"body2",children:"This is a sidebar with some content."})]})})]})},d={render:()=>n.jsxs(x,{children:[n.jsx(i,{variant:"h6",gutterBottom:!0,children:"Spacing 1"}),n.jsx(e,{container:!0,spacing:1,sx:{width:400,mb:3},children:[1,2,3,4].map(t=>n.jsx(e,{size:3,children:n.jsxs(r,{sx:{p:2,textAlign:"center"},children:["Item ",t]})},t))}),n.jsx(i,{variant:"h6",gutterBottom:!0,children:"Spacing 3"}),n.jsx(e,{container:!0,spacing:3,sx:{width:400,mb:3},children:[1,2,3,4].map(t=>n.jsx(e,{size:3,children:n.jsxs(r,{sx:{p:2,textAlign:"center"},children:["Item ",t]})},t))}),n.jsx(i,{variant:"h6",gutterBottom:!0,children:"Spacing 5"}),n.jsx(e,{container:!0,spacing:5,sx:{width:400},children:[1,2,3,4].map(t=>n.jsx(e,{size:3,children:n.jsxs(r,{sx:{p:2,textAlign:"center"},children:["Item ",t]})},t))})]})},p={render:()=>n.jsx(e,{container:!0,spacing:3,sx:{width:800},children:[{title:"Card 1",content:"This is the first card with some content."},{title:"Card 2",content:"This is the second card with different content."},{title:"Card 3",content:"This is the third card with more content here."},{title:"Card 4",content:"This is the fourth card with additional content."}].map((t,l)=>n.jsx(e,{size:{xs:12,sm:6,md:3},children:n.jsxs(r,{elevation:2,sx:{p:2,height:"100%",display:"flex",flexDirection:"column","&:hover":{elevation:4}},children:[n.jsx(i,{variant:"h6",gutterBottom:!0,children:t.title}),n.jsx(i,{variant:"body2",color:"text.secondary",sx:{flexGrow:1},children:t.content})]})},l))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2} sx={{
    width: 400
  }}>
      <Grid size={6}>
        <Paper sx={{
        p: 2,
        textAlign: 'center'
      }}>Item 1</Paper>
      </Grid>
      <Grid size={6}>
        <Paper sx={{
        p: 2,
        textAlign: 'center'
      }}>Item 2</Paper>
      </Grid>
    </Grid>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2} sx={{
    width: 600
  }}>
      <Grid size={{
      xs: 12,
      sm: 6,
      md: 4
    }}>
        <Paper sx={{
        p: 2,
        textAlign: 'center',
        bgcolor: 'primary.light',
        color: 'primary.contrastText'
      }}>
          xs=12, sm=6, md=4
        </Paper>
      </Grid>
      <Grid size={{
      xs: 12,
      sm: 6,
      md: 4
    }}>
        <Paper sx={{
        p: 2,
        textAlign: 'center',
        bgcolor: 'secondary.light',
        color: 'secondary.contrastText'
      }}>
          xs=12, sm=6, md=4
        </Paper>
      </Grid>
      <Grid size={{
      xs: 12,
      sm: 6,
      md: 4
    }}>
        <Paper sx={{
        p: 2,
        textAlign: 'center',
        bgcolor: 'success.light',
        color: 'success.contrastText'
      }}>
          xs=12, sm=6, md=4
        </Paper>
      </Grid>
    </Grid>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2} sx={{
    width: 500
  }}>
      <Grid size='auto'>
        <Paper sx={{
        p: 2,
        textAlign: 'center',
        bgcolor: 'info.light'
      }}>
          Auto
        </Paper>
      </Grid>
      <Grid size={6}>
        <Paper sx={{
        p: 2,
        textAlign: 'center',
        bgcolor: 'warning.light'
      }}>
          Fixed 6
        </Paper>
      </Grid>
      <Grid size='auto'>
        <Paper sx={{
        p: 2,
        textAlign: 'center',
        bgcolor: 'error.light'
      }}>
          Auto
        </Paper>
      </Grid>
    </Grid>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2} sx={{
    width: 600
  }}>
      <Grid size={8}>
        <Paper sx={{
        p: 2,
        bgcolor: 'grey.100'
      }}>
          <Typography variant='h6' gutterBottom>
            Main Content
          </Typography>
          <Grid container spacing={1}>
            <Grid size={6}>
              <Box sx={{
              p: 1,
              bgcolor: 'primary.light',
              textAlign: 'center'
            }}>
                Nested 1
              </Box>
            </Grid>
            <Grid size={6}>
              <Box sx={{
              p: 1,
              bgcolor: 'secondary.light',
              textAlign: 'center'
            }}>
                Nested 2
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid size={4}>
        <Paper sx={{
        p: 2,
        bgcolor: 'grey.200'
      }}>
          <Typography variant='h6' gutterBottom>
            Sidebar
          </Typography>
          <Typography variant='body2'>
            This is a sidebar with some content.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box>
      <Typography variant='h6' gutterBottom>
        Spacing 1
      </Typography>
      <Grid container spacing={1} sx={{
      width: 400,
      mb: 3
    }}>
        {[1, 2, 3, 4].map(item => <Grid key={item} size={3}>
            <Paper sx={{
          p: 2,
          textAlign: 'center'
        }}>Item {item}</Paper>
          </Grid>)}
      </Grid>

      <Typography variant='h6' gutterBottom>
        Spacing 3
      </Typography>
      <Grid container spacing={3} sx={{
      width: 400,
      mb: 3
    }}>
        {[1, 2, 3, 4].map(item => <Grid key={item} size={3}>
            <Paper sx={{
          p: 2,
          textAlign: 'center'
        }}>Item {item}</Paper>
          </Grid>)}
      </Grid>

      <Typography variant='h6' gutterBottom>
        Spacing 5
      </Typography>
      <Grid container spacing={5} sx={{
      width: 400
    }}>
        {[1, 2, 3, 4].map(item => <Grid key={item} size={3}>
            <Paper sx={{
          p: 2,
          textAlign: 'center'
        }}>Item {item}</Paper>
          </Grid>)}
      </Grid>
    </Box>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={3} sx={{
    width: 800
  }}>
      {[{
      title: 'Card 1',
      content: 'This is the first card with some content.'
    }, {
      title: 'Card 2',
      content: 'This is the second card with different content.'
    }, {
      title: 'Card 3',
      content: 'This is the third card with more content here.'
    }, {
      title: 'Card 4',
      content: 'This is the fourth card with additional content.'
    }].map((card, index) => <Grid key={index} size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
          <Paper elevation={2} sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          elevation: 4
        }
      }}>
            <Typography variant='h6' gutterBottom>
              {card.title}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{
          flexGrow: 1
        }}>
              {card.content}
            </Typography>
          </Paper>
        </Grid>)}
    </Grid>
}`,...p.parameters?.docs?.source}}};const A=["Default","ResponsiveGrid","AutoSizing","NestedGrid","DifferentSpacing","CardLayout"];export{a as AutoSizing,p as CardLayout,s as Default,d as DifferentSpacing,c as NestedGrid,o as ResponsiveGrid,A as __namedExportsOrder,b as default};
