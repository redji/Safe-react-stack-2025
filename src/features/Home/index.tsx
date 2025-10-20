import {
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Box,
  Alert,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'

import { fetchPosts } from '@/utils/api'

export function Home() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isLoading) {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='200px'
      >
        <CircularProgress aria-label='Loading posts' />
      </Box>
    )
  }

  if (error) {
    return (
      <Box py={4}>
        <Alert severity='error'>Error loading posts</Alert>
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant='h3' component='h1' gutterBottom>
        Welcome to Modern React Stack
      </Typography>

      <Grid container spacing={3}>
        {posts?.map(post => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={post.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: 4,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='h6' component='h2' gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {post.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
