import BarChartIcon from '@mui/icons-material/BarChart'
import PeopleIcon from '@mui/icons-material/People'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import {
  Box,
  Card,
  CardContent,
  Container,
  Paper,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/GridLegacy'

import MainGrid from '@/components/MainGrid'
import type { PageProps } from '@/types/type'

const DashboardPage = (_props: PageProps) => {
  return (
    <MainGrid overview='Dashboard'>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth='lg'>
          <Typography variant='h4' gutterBottom>
            ダッシュボード
          </Typography>
          <Typography color='text.secondary' paragraph>
            プロジェクト概要とクイック分析
          </Typography>

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Box>
                    <Typography color='text.secondary' variant='body2'>
                      訪問者数
                    </Typography>
                    <Typography variant='h4'>12,345</Typography>
                    <Typography variant='body2' color='success.main'>
                      +5.2% ↑
                    </Typography>
                  </Box>
                  <BarChartIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Box>
                    <Typography color='text.secondary' variant='body2'>
                      新規ユーザー
                    </Typography>
                    <Typography variant='h4'>1,234</Typography>
                    <Typography variant='body2' color='success.main'>
                      +8.3% ↑
                    </Typography>
                  </Box>
                  <PeopleIcon sx={{ fontSize: 48, color: 'success.main' }} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Box>
                    <Typography color='text.secondary' variant='body2'>
                      売上
                    </Typography>
                    <Typography variant='h4'>¥890K</Typography>
                    <Typography variant='body2' color='success.main'>
                      +15.3% ↑
                    </Typography>
                  </Box>
                  <TrendingUpIcon sx={{ fontSize: 48, color: 'warning.main' }} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Box>
                    <Typography color='text.secondary' variant='body2'>
                      注文数
                    </Typography>
                    <Typography variant='h4'>567</Typography>
                    <Typography variant='body2' color='error.main'>
                      -2.1% ↓
                    </Typography>
                  </Box>
                  <ShoppingCartIcon sx={{ fontSize: 48, color: 'info.main' }} />
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography variant='h6' gutterBottom>
                    アクティビティ概要
                  </Typography>
                  <Box
                    sx={{
                      height: 300,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'background.default',
                      borderRadius: 1,
                    }}>
                    <Typography color='text.secondary'>
                      ここにアクティビティチャートを配置
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant='h6' gutterBottom>
                    クイックアクション
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Paper
                      sx={{
                        p: 2,
                        mb: 2,
                        cursor: 'pointer',
                        '&:hover': { bgcolor: 'action.hover' },
                      }}>
                      <Typography variant='subtitle2'>
                        新規プロジェクト作成
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        プロジェクトを開始
                      </Typography>
                    </Paper>
                    <Paper
                      sx={{
                        p: 2,
                        mb: 2,
                        cursor: 'pointer',
                        '&:hover': { bgcolor: 'action.hover' },
                      }}>
                      <Typography variant='subtitle2'>レポート生成</Typography>
                      <Typography variant='body2' color='text.secondary'>
                        分析レポート作成
                      </Typography>
                    </Paper>
                    <Paper
                      sx={{
                        p: 2,
                        cursor: 'pointer',
                        '&:hover': { bgcolor: 'action.hover' },
                      }}>
                      <Typography variant='subtitle2'>
                        ユーザー管理
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        メンバーを管理
                      </Typography>
                    </Paper>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 0 }}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant='h6' gutterBottom>
                    最近のアクティビティ
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {[
                      {
                        time: '2時間前',
                        action: '新しいプロジェクトが作成されました',
                      },
                      {
                        time: '5時間前',
                        action: 'レポートが生成されました',
                      },
                      {
                        time: '1日前',
                        action: '新しいユーザーが追加されました',
                      },
                      { time: '2日前', action: '設定が更新されました' },
                    ].map((activity, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          py: 1.5,
                          borderBottom:
                            index < 3 ? '1px solid' : 'none',
                          borderColor: 'divider',
                        }}>
                        <Typography variant='body2'>
                          {activity.action}
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                          {activity.time}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MainGrid>
  )
}

export default DashboardPage
