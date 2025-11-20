import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  CircularProgress,
  Alert,
} from '@mui/material'

import MainGrid from '@/components/MainGrid'
import { useAuth } from '@/hooks/useAuth'
import { useUsersStorage } from '@/hooks/useDataStorage'
import type { PageProps } from '@/types/type'

const UsersPage = (_props: PageProps) => {
  const { isAuthenticated } = useAuth()
  const { users, loading, error, deleteUser } = useUsersStorage()

  const handleDelete = async (userId: string, userName: string) => {
    if (confirm(`${userName} を削除してもよろしいですか?`)) {
      const result = await deleteUser(userId)
      if (!result.success) {
        alert('削除に失敗しました')
      }
    }
  }

  return (
    <MainGrid overview='Users'>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3,
            }}>
            <Box>
              <Typography variant='h4' gutterBottom>
                ユーザー管理
              </Typography>
              <Typography color='text.secondary'>
                システムユーザーの管理と権限設定 ({isAuthenticated ? 'Firebase連携' : 'ローカルストレージ'})
              </Typography>
            </Box>
            <Button variant='contained' startIcon={<AddIcon />} size='large'>
              新規ユーザー追加
            </Button>
          </Box>

          {error && (
            <Alert severity='error' sx={{ mb: 3 }}>
              エラーが発生しました: {error.message}
            </Alert>
          )}

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <CircularProgress />
            </Box>
          )}

          {!loading && users.length === 0 && (
            <Alert severity='info' sx={{ mb: 3 }}>
              ユーザーデータがありません。{isAuthenticated ? 'Firebaseにデータを追加してください。' : 'デモデータを初期化するか、ログインしてください。'}
            </Alert>
          )}

          {!loading && users.length > 0 && (
            <Card>
              <CardContent>
                <TableContainer component={Paper} elevation={0}>
                  <Table sx={{ minWidth: 650 }} aria-label='users table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>ユーザー</TableCell>
                        <TableCell>メールアドレス</TableCell>
                        <TableCell>役割</TableCell>
                        <TableCell>ステータス</TableCell>
                        <TableCell align='right'>アクション</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow
                          key={user.id}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                            '&:hover': { bgcolor: 'action.hover' },
                          }}>
                          <TableCell component='th' scope='row'>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Avatar sx={{ mr: 2 }}>{user.name[0]}</Avatar>
                              <Typography variant='body2' fontWeight='medium'>
                                {user.name}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Typography variant='body2' color='text.secondary'>
                              {user.email}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={user.role}
                              size='small'
                              color={
                                user.role === 'Admin'
                                  ? 'error'
                                  : user.role === 'Editor'
                                    ? 'primary'
                                    : 'default'
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={user.status === 'active' ? '有効' : '無効'}
                              size='small'
                              color={
                                user.status === 'active' ? 'success' : 'default'
                              }
                              variant={
                                user.status === 'active' ? 'filled' : 'outlined'
                              }
                            />
                          </TableCell>
                          <TableCell align='right'>
                            <IconButton size='small' color='primary'>
                              <EditIcon fontSize='small' />
                            </IconButton>
                            <IconButton
                              size='small'
                              color='error'
                              onClick={() => handleDelete(user.id, user.name)}>
                              <DeleteIcon fontSize='small' />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          )}

          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  ユーザー統計
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}>
                    <Typography variant='body2' color='text.secondary'>
                      総ユーザー数
                    </Typography>
                    <Typography variant='h6'>{users.length}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}>
                    <Typography variant='body2' color='text.secondary'>
                      有効ユーザー
                    </Typography>
                    <Typography variant='h6' color='success.main'>
                      {users.filter((u) => u.status === 'active').length}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='body2' color='text.secondary'>
                      管理者
                    </Typography>
                    <Typography variant='h6' color='error.main'>
                      {users.filter((u) => u.role === 'Admin').length}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  役割別分布
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}>
                    <Typography variant='body2'>Admin</Typography>
                    <Chip
                      label={users.filter((u) => u.role === 'Admin').length}
                      size='small'
                      color='error'
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}>
                    <Typography variant='body2'>Editor</Typography>
                    <Chip
                      label={users.filter((u) => u.role === 'Editor').length}
                      size='small'
                      color='primary'
                    />
                  </Box>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='body2'>Viewer</Typography>
                    <Chip
                      label={users.filter((u) => u.role === 'Viewer').length}
                      size='small'
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </MainGrid>
  )
}

export default UsersPage
