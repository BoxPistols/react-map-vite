import LocationOnIcon from '@mui/icons-material/LocationOn'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Avatar,
} from '@mui/material'

import MainGrid from '@/components/MainGrid'
import { Map3D } from '@/components/Map3D'
import { LAYOUT_CONSTANTS } from '@/constants/layout'
import type { PageProps } from '@/types/type'

const StatCard = ({
  title,
  value,
  change,
  icon,
  color,
}: {
  title: string
  value: string
  change: string
  icon: React.ReactNode
  color: string
}) => (
  <Card elevation={2}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography color='text.secondary' variant='body2'>
          {title}
        </Typography>
        <Avatar sx={{ bgcolor: color, width: 40, height: 40 }}>{icon}</Avatar>
      </Box>
      <Typography variant='h5' component='div' gutterBottom>
        {value}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {change.startsWith('+') ? (
          <TrendingUpIcon color='success' fontSize='small' />
        ) : (
          <TrendingDownIcon color='error' fontSize='small' />
        )}
        <Typography
          variant='body2'
          color={change.startsWith('+') ? 'success.main' : 'error.main'}>
          {change}
        </Typography>
      </Box>
    </CardContent>
  </Card>
)

const MapAnalyticsPage = (_props: PageProps) => {
  const locations = [
    { name: '東京オフィス', visitors: 1234, status: 'active' },
    { name: '大阪支店', visitors: 856, status: 'active' },
    { name: '名古屋支店', visitors: 567, status: 'active' },
    { name: '福岡支店', visitors: 432, status: 'inactive' },
  ]

  return (
    <div>
      <MainGrid overview=''>
        {/* Map Section */}
        <Box
          sx={{
            position: 'fixed',
            top: LAYOUT_CONSTANTS.HEADER.HEIGHT,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}>
          <Map3D
            latitude={35.6809591}
            longitude={139.7673068}
            zoom={9}
            pitch={60}
            bearing={-20}
          />
        </Box>

        {/* Analytics Overlay */}
        <Box
          sx={{
            position: 'fixed',
            top: LAYOUT_CONSTANTS.HEADER.HEIGHT + 16,
            left: 16,
            right: 16,
            zIndex: 10,
            pointerEvents: 'none',
          }}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={3}>
              <Box sx={{ pointerEvents: 'auto' }}>
                <StatCard
                  title='総訪問者数'
                  value='3,089'
                  change='+12.5%'
                  icon={<LocationOnIcon />}
                  color='primary.main'
                />
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Box sx={{ pointerEvents: 'auto' }}>
                <StatCard
                  title='有効拠点数'
                  value='3'
                  change='+0%'
                  icon={<LocationOnIcon />}
                  color='success.main'
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Location List Card */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            width: { xs: 'calc(100% - 32px)', md: 400 },
            maxHeight: 'calc(100vh - 200px)',
            zIndex: 10,
            pointerEvents: 'auto',
          }}>
          <Card elevation={4}>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                拠点別分析
              </Typography>
              <List sx={{ maxHeight: 300, overflow: 'auto' }}>
                {locations.map((location, index) => (
                  <ListItem
                    key={index}
                    divider={index < locations.length - 1}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      px: 0,
                    }}>
                    <Box sx={{ flex: 1 }}>
                      <ListItemText
                        primary={location.name}
                        secondary={`訪問者: ${location.visitors.toLocaleString()}`}
                      />
                    </Box>
                    <Chip
                      label={location.status === 'active' ? '有効' : '無効'}
                      size='small'
                      color={
                        location.status === 'active' ? 'success' : 'default'
                      }
                      variant={
                        location.status === 'active' ? 'filled' : 'outlined'
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>

        {/* Additional Info Panel */}
        <Box
          sx={{
            position: 'fixed',
            top: LAYOUT_CONSTANTS.HEADER.HEIGHT + 160,
            left: 16,
            width: { xs: 'calc(100% - 32px)', md: 350 },
            zIndex: 10,
            pointerEvents: 'auto',
          }}>
          <Paper elevation={4} sx={{ p: 2, bgcolor: 'background.paper' }}>
            <Typography variant='subtitle1' fontWeight='bold' gutterBottom>
              地域別サマリー
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 1,
                }}>
                <Typography variant='body2'>関東エリア</Typography>
                <Typography variant='body2' fontWeight='bold'>
                  1,234
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 1,
                }}>
                <Typography variant='body2'>関西エリア</Typography>
                <Typography variant='body2' fontWeight='bold'>
                  856
                </Typography>
              </Box>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='body2'>その他エリア</Typography>
                <Typography variant='body2' fontWeight='bold'>
                  999
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </MainGrid>
    </div>
  )
}

export default MapAnalyticsPage
