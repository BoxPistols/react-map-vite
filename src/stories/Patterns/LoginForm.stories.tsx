import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
  Divider,
  IconButton,
  InputAdornment,
  Alert,
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import GitHubIcon from '@mui/icons-material/GitHub'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'

const meta = {
  title: 'Patterns/Login Form',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SimpleLogin: Story = {
  render: () => (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="ログイン状態を保持"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            ログイン
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href="#" variant="body2">
              パスワードをお忘れですか？
            </Link>
            <Link href="#" variant="body2">
              アカウント作成
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  ),
}

export const WithSocialLogin: Story = {
  render: () => (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            ログイン
          </Typography>

          <Box sx={{ mt: 3, mb: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ mb: 1 }}>
              Googleでログイン
            </Button>
            <Button fullWidth variant="outlined" startIcon={<GitHubIcon />}>
              GitHubでログイン
            </Button>
          </Box>

          <Divider sx={{ my: 2 }}>または</Divider>

          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="メールアドレス"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="パスワード"
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="ログイン状態を保持"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              ログイン
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link href="#" variant="body2">
                パスワードをお忘れですか？
              </Link>
            </Box>
          </Box>
        </Paper>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" align="center">
            アカウントをお持ちでないですか？{' '}
            <Link href="#" variant="body2">
              登録する
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  ),
}

const WithPasswordToggleExample = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            ログイン
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="メールアドレス"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="パスワード"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              ログイン
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}

export const WithPasswordToggle: Story = {
  render: () => <WithPasswordToggleExample />,
}

export const WithError: Story = {
  render: () => (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            ログイン
          </Typography>

          <Alert severity="error" sx={{ mt: 2 }}>
            メールアドレスまたはパスワードが正しくありません
          </Alert>

          <Box component="form" sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              error
              label="メールアドレス"
              defaultValue="user@example.com"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              error
              label="パスワード"
              type="password"
              helperText="パスワードが正しくありません"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              ログイン
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  ),
}

export const CenteredCard: Story = {
  render: () => (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}>
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 2,
          }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography component="h1" variant="h4" fontWeight="bold">
              Welcome Back
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              アカウントにログインしてください
            </Typography>
          </Box>

          <Box component="form">
            <TextField
              margin="normal"
              required
              fullWidth
              label="メールアドレス"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="パスワード"
              type="password"
              autoComplete="current-password"
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 1,
              }}>
              <FormControlLabel
                control={<Checkbox color="primary" size="small" />}
                label={
                  <Typography variant="body2">ログイン状態を保持</Typography>
                }
              />
              <Link href="#" variant="body2">
                パスワードを忘れた
              </Link>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2, py: 1.5 }}>
              ログイン
            </Button>

            <Divider sx={{ my: 2 }}>または</Divider>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ mb: 1 }}>
              Googleでログイン
            </Button>

            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Typography variant="body2">
                アカウントをお持ちでないですか？{' '}
                <Link href="#" fontWeight="bold">
                  今すぐ登録
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  ),
}
