import type { Meta, StoryObj } from '@storybook/react'
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
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Slider,
  Switch,
  Divider,
  Alert,
} from '@mui/material'
import { useState } from 'react'

const meta = {
  title: 'Patterns/Forms',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SimpleContactForm: Story = {
  render: () => (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          お問い合わせフォーム
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6}>
              <TextField required fullWidth label="姓" />
            </Grid>
            <Grid xs={12} sm={6}>
              <TextField required fullWidth label="名" />
            </Grid>
            <Grid xs={12}>
              <TextField required fullWidth label="メールアドレス" type="email" />
            </Grid>
            <Grid xs={12}>
              <TextField fullWidth label="電話番号" />
            </Grid>
            <Grid xs={12}>
              <TextField
                required
                fullWidth
                label="メッセージ"
                multiline
                rows={4}
              />
            </Grid>
            <Grid xs={12}>
              <Button type="submit" variant="contained" fullWidth size="large">
                送信
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  ),
}

const UserProfileFormExample = () => {
  const [age, setAge] = useState(30)
  const [notifications, setNotifications] = useState(true)

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        プロフィール設定
      </Typography>
      <Box component="form" sx={{ mt: 3 }}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              基本情報
            </Typography>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}>
                <TextField required fullWidth label="姓" defaultValue="山田" />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField required fullWidth label="名" defaultValue="太郎" />
              </Grid>
              <Grid xs={12}>
                <TextField
                  required
                  fullWidth
                  label="メールアドレス"
                  type="email"
                  defaultValue="yamada@example.com"
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField fullWidth label="電話番号" defaultValue="090-1234-5678" />
              </Grid>
              <Grid xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>年齢</InputLabel>
                  <Select
                    value={age}
                    label="年齢"
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
            <Typography variant="h6" gutterBottom>
              住所
            </Typography>
            <Grid container spacing={2}>
              <Grid xs={12} sm={4}>
                <TextField fullWidth label="郵便番号" placeholder="123-4567" />
              </Grid>
              <Grid xs={12} sm={8}>
                <FormControl fullWidth>
                  <InputLabel>都道府県</InputLabel>
                  <Select defaultValue="">
                    <MenuItem value="tokyo">東京都</MenuItem>
                    <MenuItem value="osaka">大阪府</MenuItem>
                    <MenuItem value="kanagawa">神奈川県</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <TextField fullWidth label="市区町村" />
              </Grid>
              <Grid xs={12}>
                <TextField fullWidth label="番地・建物名" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              設定
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                  />
                }
                label="メール通知を受け取る"
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="プッシュ通知を受け取る"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="ニュースレターを購読する"
              />
            </FormGroup>
          </CardContent>
        </Card>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          <Button variant="outlined" size="large">
            キャンセル
          </Button>
          <Button variant="contained" size="large">
            保存
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export const UserProfileForm: Story = {
  render: () => <UserProfileFormExample />,
}

const SurveyFormExample = () => {
  const [satisfaction, setSatisfaction] = useState<number>(5)

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          満足度調査
        </Typography>
        <Typography color="text.secondary" paragraph>
          サービスの改善のため、ご協力をお願いいたします
        </Typography>

        <Box component="form" sx={{ mt: 4 }}>
          <FormControl component="fieldset" sx={{ mb: 4, width: '100%' }}>
            <FormLabel component="legend" sx={{ mb: 2 }}>
              1. サービスの利用頻度を教えてください
            </FormLabel>
            <RadioGroup>
              <FormControlLabel
                value="daily"
                control={<Radio />}
                label="毎日"
              />
              <FormControlLabel
                value="weekly"
                control={<Radio />}
                label="週に数回"
              />
              <FormControlLabel
                value="monthly"
                control={<Radio />}
                label="月に数回"
              />
              <FormControlLabel
                value="rarely"
                control={<Radio />}
                label="めったに使わない"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" sx={{ mb: 4, width: '100%' }}>
            <FormLabel component="legend" sx={{ mb: 2 }}>
              2. どの機能を主に使用していますか？（複数選択可）
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="ダッシュボード"
              />
              <FormControlLabel control={<Checkbox />} label="レポート機能" />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="データ分析"
              />
              <FormControlLabel control={<Checkbox />} label="チーム共有" />
            </FormGroup>
          </FormControl>

          <FormControl component="fieldset" sx={{ mb: 4, width: '100%' }}>
            <FormLabel component="legend" sx={{ mb: 2 }}>
              3. サービスの満足度を教えてください
            </FormLabel>
            <Box sx={{ px: 2 }}>
              <Slider
                value={satisfaction}
                onChange={(_e, value) => setSatisfaction(value as number)}
                min={0}
                max={10}
                marks
                valueLabelDisplay="on"
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="caption">不満</Typography>
                <Typography variant="caption">非常に満足</Typography>
              </Box>
            </Box>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 4 }}>
            <TextField
              label="4. ご意見・ご要望"
              multiline
              rows={4}
              placeholder="改善してほしい点や追加してほしい機能などをお聞かせください"
            />
          </FormControl>

          <Button type="submit" variant="contained" size="large" fullWidth>
            送信
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export const SurveyForm: Story = {
  render: () => <SurveyFormExample />,
}

const FormValidationExample = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const emailError = submitted && !email.includes('@')
  const passwordError = submitted && password.length < 8
  const confirmError = submitted && password !== confirmPassword

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          アカウント登録
        </Typography>

        {submitted && (emailError || passwordError || confirmError) && (
          <Alert severity="error" sx={{ mt: 2 }}>
            入力内容に誤りがあります。ご確認ください。
          </Alert>
        )}

        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="メールアドレス"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError && '有効なメールアドレスを入力してください'}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="パスワード"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            helperText={
              passwordError
                ? 'パスワードは8文字以上で入力してください'
                : 'パスワードは8文字以上で設定してください'
            }
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="パスワード（確認）"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmError}
            helperText={confirmError && 'パスワードが一致しません'}
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => setSubmitted(true)}>
            登録
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export const FormValidation: Story = {
  render: () => <FormValidationExample />,
}

const MultiStepFormExample = () => {
  const [activeStep, setActiveStep] = useState(0)
  const steps = ['個人情報', '住所', '確認']

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          会員登録
        </Typography>

        <Box sx={{ my: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            {steps.map((label, index) => (
              <Box
                key={label}
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  position: 'relative',
                }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 1,
                    bgcolor: index <= activeStep ? 'primary.main' : 'grey.300',
                    color: index <= activeStep ? 'white' : 'text.secondary',
                  }}>
                  {index + 1}
                </Box>
                <Typography variant="caption">{label}</Typography>
                {index < steps.length - 1 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 20,
                      left: '50%',
                      right: '-50%',
                      height: 2,
                      bgcolor: index < activeStep ? 'primary.main' : 'grey.300',
                      zIndex: -1,
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {activeStep === 0 && (
          <Grid container spacing={2}>
            <Grid xs={12} sm={6}>
              <TextField required fullWidth label="姓" />
            </Grid>
            <Grid xs={12} sm={6}>
              <TextField required fullWidth label="名" />
            </Grid>
            <Grid xs={12}>
              <TextField required fullWidth label="メールアドレス" type="email" />
            </Grid>
            <Grid xs={12}>
              <TextField required fullWidth label="電話番号" />
            </Grid>
          </Grid>
        )}

        {activeStep === 1 && (
          <Grid container spacing={2}>
            <Grid xs={12} sm={4}>
              <TextField fullWidth label="郵便番号" />
            </Grid>
            <Grid xs={12} sm={8}>
              <TextField fullWidth label="都道府県" />
            </Grid>
            <Grid xs={12}>
              <TextField fullWidth label="市区町村" />
            </Grid>
            <Grid xs={12}>
              <TextField fullWidth label="番地・建物名" />
            </Grid>
          </Grid>
        )}

        {activeStep === 2 && (
          <Box>
            <Alert severity="info" sx={{ mb: 3 }}>
              入力内容をご確認ください
            </Alert>
            <Typography variant="body1" gutterBottom>
              <strong>お名前:</strong> 山田 太郎
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>メールアドレス:</strong> yamada@example.com
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>住所:</strong> 〒123-4567 東京都渋谷区...
            </Typography>
          </Box>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            disabled={activeStep === 0}
            onClick={() => setActiveStep(activeStep - 1)}>
            戻る
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              if (activeStep < steps.length - 1) {
                setActiveStep(activeStep + 1)
              }
            }}>
            {activeStep === steps.length - 1 ? '送信' : '次へ'}
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export const MultiStepForm: Story = {
  render: () => <MultiStepFormExample />,
}
