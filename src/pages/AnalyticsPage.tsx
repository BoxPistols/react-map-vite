import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import InventoryIcon from '@mui/icons-material/Inventory'
import PeopleIcon from '@mui/icons-material/People'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
  LinearProgress,
} from '@mui/material'

import MainGrid from '@/components/MainGrid'
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
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography color='text.secondary' variant='body2'>
          {title}
        </Typography>
        <Avatar sx={{ bgcolor: color, width: 48, height: 48 }}>{icon}</Avatar>
      </Box>
      <Typography variant='h4' component='div' gutterBottom>
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
        <Typography variant='body2' color='text.secondary'>
          前月比
        </Typography>
      </Box>
    </CardContent>
  </Card>
)

const AnalyticsPage = (_props: PageProps) => {
  return (
    <MainGrid overview='Analytics'>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth='lg'>
          <Typography variant='h4' gutterBottom>
            分析ダッシュボード
          </Typography>
          <Typography color='text.secondary' paragraph>
            ビジネス概要と詳細分析
          </Typography>

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid xs={12} sm={6} md={3}>
              <StatCard
                title='総売上'
                value='¥2,456,789'
                change='+12.5%'
                icon={<AttachMoneyIcon />}
                color='primary.main'
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <StatCard
                title='新規顧客'
                value='1,234'
                change='+8.3%'
                icon={<PeopleIcon />}
                color='success.main'
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <StatCard
                title='注文数'
                value='456'
                change='-3.2%'
                icon={<ShoppingCartIcon />}
                color='warning.main'
              />
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <StatCard
                title='在庫商品'
                value='892'
                change='+5.1%'
                icon={<InventoryIcon />}
                color='info.main'
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography variant='h6' gutterBottom>
                    売上推移
                  </Typography>
                  <Box
                    sx={{
                      height: 300,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'background.default',
                    }}>
                    <Typography color='text.secondary'>
                      ここにチャートを配置（Chart.js / Recharts 等）
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant='h6' gutterBottom>
                    カテゴリ別売上
                  </Typography>
                  <Box
                    sx={{
                      height: 300,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'background.default',
                    }}>
                    <Typography color='text.secondary'>
                      ここに円グラフを配置
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 0 }}>
            <Grid xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant='h6' gutterBottom>
                    最近の注文
                  </Typography>
                  <List>
                    {[
                      {
                        name: '山田太郎',
                        product: 'ノートPC',
                        amount: '¥148,000',
                        status: '配送中',
                      },
                      {
                        name: '佐藤花子',
                        product: 'マウス',
                        amount: '¥3,500',
                        status: '完了',
                      },
                      {
                        name: '鈴木一郎',
                        product: 'キーボード',
                        amount: '¥12,800',
                        status: '処理中',
                      },
                      {
                        name: '田中美咲',
                        product: 'モニター',
                        amount: '¥45,000',
                        status: '配送中',
                      },
                    ].map((order, index) => (
                      <ListItem key={index} divider={index < 3}>
                        <ListItemAvatar>
                          <Avatar>{order.name[0]}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={order.name}
                          secondary={`${order.product} - ${order.amount}`}
                        />
                        <Chip
                          label={order.status}
                          size='small'
                          color={
                            order.status === '完了'
                              ? 'success'
                              : order.status === '配送中'
                                ? 'primary'
                                : 'default'
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant='h6' gutterBottom>
                    在庫状況
                  </Typography>
                  <List>
                    {[
                      { product: 'ノートPC', stock: 45, total: 100 },
                      { product: 'マウス', stock: 87, total: 100 },
                      { product: 'キーボード', stock: 23, total: 100 },
                      { product: 'モニター', stock: 56, total: 100 },
                    ].map((item, index) => (
                      <ListItem key={index} divider={index < 3}>
                        <ListItemText
                          primary={item.product}
                          secondary={`在庫: ${item.stock}/${item.total}`}
                        />
                        <Box sx={{ width: '40%', ml: 2 }}>
                          <LinearProgress
                            variant='determinate'
                            value={(item.stock / item.total) * 100}
                            color={
                              item.stock < 30
                                ? 'error'
                                : item.stock < 50
                                  ? 'warning'
                                  : 'success'
                            }
                          />
                        </Box>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MainGrid>
  )
}

export default AnalyticsPage
