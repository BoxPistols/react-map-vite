import { Typography } from '@mui/material'
import { Box, Grid, minHeight } from '@mui/system'
import type { ReactNode } from 'react'

interface MainGridProps {
  children?: ReactNode
  overview?: string
}

export default function MainGrid({ children, overview }: MainGridProps) {
  return (
    <Box
      sx={{
        width: '100%',
        paddingTop: 24,
        paddingLeft: 4,
        maxWidth: { sm: '100%', md: '1700px' },
        minHeight: 'calc(100vh)',
        overflow: 'hidden',
      }}>
      <Typography variant='h2' sx={{ mb: 2 }}>
        {overview}
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>{children}</Grid>
      </Grid>
    </Box>
  )
}
