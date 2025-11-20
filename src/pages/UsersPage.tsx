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
} from '@mui/material'

import MainGrid from '@/components/MainGrid'
import type { PageProps } from '@/types/type'

type User = {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
  avatar?: string
}

const UsersPage = (_props: PageProps) => {
  const users: User[] = [
    {
      id: 1,
      name: '山田太郎',
      email: 'yamada@example.com',
      role: 'Admin',
      status: 'active',
    },
    {
      id: 2,
      name: '佐藤花子',
      email: 'sato@example.com',
      role: 'Editor',
      status: 'active',
    },
    {
      id: 3,
      name: '鈴木一郎',
      email: 'suzuki@example.com',
      role: 'Viewer',
      status: 'active',
    },
    {
      id: 4,
      name: '田中美咲',
      email: 'tanaka@example.com',
      role: 'Editor',
      status: 'inactive',
    },
    {
      id: 5,
      name: '高橋健',
      email: 'takahashi@example.com',
      role: 'Viewer',
      status: 'active',
    },
  ]

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
                システムユーザーの管理と権限設定
              </Typography>
            </Box>
            <Button variant='contained' startIcon={<AddIcon />} size='large'>
              新規ユーザー追加
            </Button>
          </Box>

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
                          <IconButton size='small' color='error'>
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
