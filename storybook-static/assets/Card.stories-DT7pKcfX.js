import{r as F,u as L,j as e,c as re}from"./iframe-Bwy0Guc_.js";import{C as c,a as v}from"./CardContent-_h6wPoO-.js";import{T as t,t as $}from"./Typography-Bve4GY16.js";import{C as H,A as oe,F as ne,S as se,B as ie}from"./Share-C3fPW3bO.js";import{B as C}from"./Button-Db6xXzMq.js";import{g as U,a as O,s as b,c as D}from"./createSimplePaletteValueFilter-BZXdVNOf.js";import{u as y}from"./useSlot-C-FCyWAp.js";import{I as T}from"./IconButton-Cqgezs0w.js";import{c as de}from"./createSvgIcon-Bnjs_O6j.js";import{B as I}from"./Box-BxJ1AlIS.js";import{C as B}from"./Chip-CtcGZb7r.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-D_5aThdt.js";import"./ButtonBase-CyXCqF96.js";import"./useTimeout-CYADUiHM.js";import"./CircularProgress-BVpnR2O5.js";function le(a){return O("MuiCardHeader",a)}const P=U("MuiCardHeader",["root","avatar","action","content","title","subheader"]),ce=a=>{const{classes:r}=a;return D({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},le,r)},pe=b("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,r)=>[{[`& .${P.title}`]:r.title},{[`& .${P.subheader}`]:r.subheader},r.root]})({display:"flex",alignItems:"center",padding:16}),me=b("div",{name:"MuiCardHeader",slot:"Avatar"})({display:"flex",flex:"0 0 auto",marginRight:16}),he=b("div",{name:"MuiCardHeader",slot:"Action"})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),ue=b("div",{name:"MuiCardHeader",slot:"Content"})({flex:"1 1 auto",[`.${$.root}:where(& .${P.title})`]:{display:"block"},[`.${$.root}:where(& .${P.subheader})`]:{display:"block"}}),ye=F.forwardRef(function(r,n){const o=L({props:r,name:"MuiCardHeader"}),{action:i,avatar:p,component:d="div",disableTypography:s=!1,subheader:W,subheaderTypographyProps:f,title:N,titleTypographyProps:m,slots:R={},slotProps:j={},...E}=o,l={...o,component:d,disableTypography:s},h=ce(l),u={slots:R,slotProps:{title:m,subheader:f,...j}};let x=N;const[_,G]=y("title",{className:h.title,elementType:t,externalForwardedProps:u,ownerState:l,additionalProps:{variant:p?"body2":"h5",component:"span"}});x!=null&&x.type!==t&&!s&&(x=e.jsx(_,{...G,children:x}));let g=W;const[q,J]=y("subheader",{className:h.subheader,elementType:t,externalForwardedProps:u,ownerState:l,additionalProps:{variant:p?"body2":"body1",color:"textSecondary",component:"span"}});g!=null&&g.type!==t&&!s&&(g=e.jsx(q,{...J,children:g}));const[K,Q]=y("root",{ref:n,className:h.root,elementType:pe,externalForwardedProps:{...u,...E,component:d},ownerState:l}),[X,Y]=y("avatar",{className:h.avatar,elementType:me,externalForwardedProps:u,ownerState:l}),[Z,ee]=y("content",{className:h.content,elementType:ue,externalForwardedProps:u,ownerState:l}),[ae,te]=y("action",{className:h.action,elementType:he,externalForwardedProps:u,ownerState:l});return e.jsxs(K,{...Q,children:[p&&e.jsx(X,{...Y,children:p}),e.jsxs(Z,{...ee,children:[x,g]}),i&&e.jsx(ae,{...te,children:i})]})});function xe(a){return O("MuiCardMedia",a)}U("MuiCardMedia",["root","media","img"]);const ge=a=>{const{classes:r,isMediaComponent:n,isImageComponent:o}=a;return D({root:["root",n&&"media",o&&"img"]},xe,r)},Ce=b("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:n}=a,{isMediaComponent:o,isImageComponent:i}=n;return[r.root,o&&r.media,i&&r.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),ve=["video","audio","picture","iframe","img"],be=["picture","img"],V=F.forwardRef(function(r,n){const o=L({props:r,name:"MuiCardMedia"}),{children:i,className:p,component:d="div",image:s,src:W,style:f,...N}=o,m=ve.includes(d),R=!m&&s?{backgroundImage:`url("${s}")`,...f}:f,j={...o,component:d,isMediaComponent:m,isImageComponent:be.includes(d)},E=ge(j);return e.jsx(Ce,{className:re(E.root,p),as:d,role:!m&&s?"img":void 0,ref:n,style:R,ownerState:j,src:m?s||W:void 0,...N,children:i})}),fe=de(e.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"})),$e={title:"Material-UI/Card",component:c,parameters:{layout:"centered",docs:{description:{component:"Material-UI Card component for displaying content in a contained format."}}},tags:["autodocs"]},M={render:()=>e.jsx(c,{sx:{maxWidth:345},children:e.jsxs(v,{children:[e.jsx(t,{gutterBottom:!0,variant:"h5",component:"div",children:"Card Title"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"This is a simple card with basic content. It demonstrates the default card styling and layout."})]})})},S={render:()=>e.jsxs(c,{sx:{maxWidth:345},children:[e.jsxs(v,{children:[e.jsx(t,{gutterBottom:!0,variant:"h5",component:"div",children:"Card with Actions"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"This card includes action buttons at the bottom."})]}),e.jsxs(H,{children:[e.jsx(C,{size:"small",children:"Share"}),e.jsx(C,{size:"small",children:"Learn More"})]})]})},w={render:()=>e.jsxs(c,{sx:{maxWidth:345},children:[e.jsx(ye,{avatar:e.jsx(oe,{sx:{bgcolor:"primary.main"},children:"R"}),action:e.jsx(T,{"aria-label":"settings",children:e.jsx(fe,{})}),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),e.jsx(v,{children:e.jsx(t,{variant:"body2",color:"text.secondary",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),e.jsxs(H,{disableSpacing:!0,children:[e.jsx(T,{"aria-label":"add to favorites",children:e.jsx(ne,{})}),e.jsx(T,{"aria-label":"share",children:e.jsx(se,{})}),e.jsx(T,{"aria-label":"bookmark",children:e.jsx(ie,{})})]})]})},A={render:()=>e.jsxs(c,{sx:{maxWidth:345},children:[e.jsx(V,{component:"img",height:"140",image:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=200&fit=crop",alt:"Green iguana"}),e.jsxs(v,{children:[e.jsx(t,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."})]}),e.jsxs(H,{children:[e.jsx(C,{size:"small",children:"Share"}),e.jsx(C,{size:"small",children:"Learn More"})]})]})},k={render:()=>e.jsxs(c,{sx:{maxWidth:400},children:[e.jsx(V,{component:"img",height:"200",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",alt:"Mountain landscape"}),e.jsxs(v,{children:[e.jsxs(I,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",mb:2,children:[e.jsx(t,{variant:"h6",component:"h2",children:"Mountain Adventure"}),e.jsx(B,{label:"Featured",color:"primary",size:"small"})]}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Experience the breathtaking beauty of mountain landscapes. Perfect for hiking, photography, and outdoor adventures."}),e.jsxs(I,{display:"flex",gap:1,flexWrap:"wrap",children:[e.jsx(B,{label:"Hiking",size:"small",variant:"outlined"}),e.jsx(B,{label:"Nature",size:"small",variant:"outlined"}),e.jsx(B,{label:"Adventure",size:"small",variant:"outlined"})]})]}),e.jsxs(H,{sx:{justifyContent:"space-between",px:2,pb:2},children:[e.jsxs(I,{children:[e.jsx(t,{variant:"h6",color:"primary",children:"$299"}),e.jsx(t,{variant:"caption",color:"text.secondary",children:"per person"})]}),e.jsx(C,{variant:"contained",size:"small",children:"Book Now"})]})]})},z={render:()=>e.jsx(I,{display:"flex",gap:3,flexWrap:"wrap",children:[0,1,2,4,8,16,24].map(a=>e.jsxs(c,{elevation:a,sx:{width:200,p:2},children:[e.jsxs(t,{variant:"h6",gutterBottom:!0,children:["Elevation ",a]}),e.jsxs(t,{variant:"body2",color:"text.secondary",children:["This card has elevation level ",a,"."]})]},a))})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 345
  }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Card Title
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          This is a simple card with basic content. It demonstrates the default
          card styling and layout.
        </Typography>
      </CardContent>
    </Card>
}`,...M.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 345
  }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Card with Actions
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          This card includes action buttons at the bottom.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 345
  }}>
      <CardHeader avatar={<Avatar sx={{
      bgcolor: 'primary.main'
    }}>R</Avatar>} action={<IconButton aria-label='settings'>
            <MoreVert />
          </IconButton>} title='Shrimp and Chorizo Paella' subheader='September 14, 2016' />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Favorite />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
        <IconButton aria-label='bookmark'>
          <Bookmark />
        </IconButton>
      </CardActions>
    </Card>
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 345
  }}>
      <CardMedia component='img' height='140' image='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=200&fit=crop' alt='Green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Lizard
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
}`,...A.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 400
  }}>
      <CardMedia component='img' height='200' image='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop' alt='Mountain landscape' />
      <CardContent>
        <Box display='flex' justifyContent='space-between' alignItems='flex-start' mb={2}>
          <Typography variant='h6' component='h2'>
            Mountain Adventure
          </Typography>
          <Chip label='Featured' color='primary' size='small' />
        </Box>
        <Typography variant='body2' color='text.secondary' paragraph>
          Experience the breathtaking beauty of mountain landscapes. Perfect for
          hiking, photography, and outdoor adventures.
        </Typography>
        <Box display='flex' gap={1} flexWrap='wrap'>
          <Chip label='Hiking' size='small' variant='outlined' />
          <Chip label='Nature' size='small' variant='outlined' />
          <Chip label='Adventure' size='small' variant='outlined' />
        </Box>
      </CardContent>
      <CardActions sx={{
      justifyContent: 'space-between',
      px: 2,
      pb: 2
    }}>
        <Box>
          <Typography variant='h6' color='primary'>
            $299
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            per person
          </Typography>
        </Box>
        <Button variant='contained' size='small'>
          Book Now
        </Button>
      </CardActions>
    </Card>
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Box display='flex' gap={3} flexWrap='wrap'>
      {[0, 1, 2, 4, 8, 16, 24].map(elevation => <Card key={elevation} elevation={elevation} sx={{
      width: 200,
      p: 2
    }}>
          <Typography variant='h6' gutterBottom>
            Elevation {elevation}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            This card has elevation level {elevation}.
          </Typography>
        </Card>)}
    </Box>
}`,...z.parameters?.docs?.source}}};const Fe=["Default","WithActions","WithHeader","WithMedia","ComplexCard","ElevationVariants"];export{k as ComplexCard,M as Default,z as ElevationVariants,S as WithActions,w as WithHeader,A as WithMedia,Fe as __namedExportsOrder,$e as default};
