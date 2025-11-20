import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import { useState } from 'react'

import MainGrid from '@/components/MainGrid'
import type { PageProps } from '@/types/type'

const SettingsPage = (_props: PageProps) => {
  const [age, setAge] = useState(30)
  const [notifications, setNotifications] = useState(true)

  return (
    <MainGrid overview='Settings'>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth='md'>
          <Typography variant='h4' gutterBottom>
            設定
          </Typography>
          <Typography color='text.secondary' paragraph>
            システムとアカウントの設定
          </Typography>

          <Box component='form' sx={{ mt: 3 }}>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  基本情報
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label='姓'
                      defaultValue='山田'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label='名'
                      defaultValue='太郎'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label='メールアドレス'
                      type='email'
                      defaultValue='yamada@example.com'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='電話番号'
                      defaultValue='090-1234-5678'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>年齢</InputLabel>
                      <Select
                        value={age}
                        label='年齢'
                        onChange={(e) => setAge(Number(e.target.value))}>
                        <MenuItem value={20}>20代</MenuItem>
                        <MenuItem value={30}>30代</MenuItem>
                        <MenuItem value={40}>40代</MenuItem>
                        <MenuItem value={50}>50代以上</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  住所
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label='郵便番号'
                      placeholder='123-4567'
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <FormControl fullWidth>
                      <InputLabel>都道府県</InputLabel>
                      <Select defaultValue=''>
                        <MenuItem value='tokyo'>東京都</MenuItem>
                        <MenuItem value='osaka'>大阪府</MenuItem>
                        <MenuItem value='kanagawa'>神奈川県</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label='市区町村' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label='番地・建物名' />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  通知設定
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notifications}
                        onChange={(e) => setNotifications(e.target.checked)}
                      />
                    }
                    label='メール通知を受け取る'
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label='プッシュ通知を受け取る'
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label='ニュースレターを購読する'
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label='マーケティングメールを受け取る'
                  />
                </FormGroup>
              </CardContent>
            </Card>

            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  表示設定
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>言語</InputLabel>
                      <Select defaultValue='ja'>
                        <MenuItem value='ja'>日本語</MenuItem>
                        <MenuItem value='en'>English</MenuItem>
                        <MenuItem value='zh'>中文</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>タイムゾーン</InputLabel>
                      <Select defaultValue='asia-tokyo'>
                        <MenuItem value='asia-tokyo'>
                          Asia/Tokyo (JST)
                        </MenuItem>
                        <MenuItem value='america-new-york'>
                          America/New York (EST)
                        </MenuItem>
                        <MenuItem value='europe-london'>
                          Europe/London (GMT)
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>日付形式</InputLabel>
                      <Select defaultValue='yyyy-mm-dd'>
                        <MenuItem value='yyyy-mm-dd'>YYYY/MM/DD</MenuItem>
                        <MenuItem value='dd-mm-yyyy'>DD/MM/YYYY</MenuItem>
                        <MenuItem value='mm-dd-yyyy'>MM/DD/YYYY</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant='h6' gutterBottom color='error'>
                  セキュリティ
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label='現在のパスワード'
                      type='password'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label='新しいパスワード'
                      type='password'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label='パスワード（確認）'
                      type='password'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch />}
                      label='2段階認証を有効にする'
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button variant='outlined' size='large'>
                キャンセル
              </Button>
              <Button variant='contained' size='large'>
                変更を保存
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </MainGrid>
  )
}

export default SettingsPage
