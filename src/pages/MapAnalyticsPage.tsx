import LocationOnIcon from '@mui/icons-material/LocationOn'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import {
  Box,
  Card,
  CardContent,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Avatar,
  CircularProgress,
  Alert,
} from '@mui/material'
import Grid from '@mui/material/GridLegacy'

import MainGrid from '@/components/MainGrid'
import { Map3D } from '@/components/Map3D'
import { LAYOUT_CONSTANTS } from '@/constants/layout'
import { useAuth } from '@/hooks/useAuth'
import { useLocationsStorage } from '@/hooks/useDataStorage'
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
  const { isAuthenticated } = useAuth()
  const { locations, loading, error } = useLocationsStorage()

  const totalVisitors = locations.reduce((sum, loc) => sum + loc.visitors, 0)
  const activeLocations = locations.filter(
    (loc) => loc.status === 'active'
  ).length

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
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ pointerEvents: 'auto' }}>
                <StatCard
                  title='総訪問者数'
                  value={totalVisitors.toLocaleString()}
                  change='+12.5%'
                  icon={<LocationOnIcon />}
                  color='primary.main'
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ pointerEvents: 'auto' }}>
                <StatCard
                  title='有効拠点数'
                  value={activeLocations.toString()}
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
                拠点別分析 (
                {isAuthenticated ? 'Firebase連携' : 'ローカルストレージ'})
              </Typography>
              {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                  <CircularProgress size={24} />
                </Box>
              )}
              {error && (
                <Alert severity='error' sx={{ mb: 2 }}>
                  エラー: {error.message}
                </Alert>
              )}
              {!loading && locations.length === 0 && (
                <Alert severity='info'>拠点データがありません</Alert>
              )}
              {!loading && locations.length > 0 && (
                <List sx={{ maxHeight: 300, overflow: 'auto' }}>
                  {locations.map((location, index) => (
                    <ListItem
                      key={location.id}
                      divider={index < locations.length - 1}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        px: 0,
                      }}>
                      <Box sx={{ flex: 1 }}>
                        <ListItemText
                          primary={location.name}
                          secondary={`訪問者: ${location.visitors.toLocaleString()} | ${location.region}`}
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
              )}
            </CardContent>
          </Card>
        </Box>

        {/* Additional Info Panel */}
        {!loading && locations.length > 0 && (
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
                {locations
                  .reduce(
                    (acc, loc) => {
                      const existing = acc.find(
                        (item) => item.region === loc.region
                      )
                      if (existing) {
                        existing.visitors += loc.visitors
                      } else {
                        acc.push({ region: loc.region, visitors: loc.visitors })
                      }
                      return acc
                    },
                    [] as Array<{ region: string; visitors: number }>
                  )
                  .sort((a, b) => b.visitors - a.visitors)
                  .map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 1,
                      }}>
                      <Typography variant='body2'>{item.region}</Typography>
                      <Typography variant='body2' fontWeight='bold'>
                        {item.visitors.toLocaleString()}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </Paper>
          </Box>
        )}
      </MainGrid>
    </div>
  )
}

export default MapAnalyticsPage
