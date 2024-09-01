import CustomTextField from '@/components/Form/CustomTextField'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import type { MouseEvent } from 'react'

const DashboardPage = () => {
  const SubmitTest = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log((e.target as HTMLInputElement).value)
  }

  return (
    <Container maxWidth='md'>
      <Box mb={8}>
        <Typography variant='h2'>Dashboard</Typography>
      </Box>

      <Stack spacing={4}>
        <form>
          <Box mb={2}>
            <CustomTextField
              label='form label ラベルテスト'
              id='foo'
              helperText='helper text ヘルパーテキスト'
              placeholder='placeholder プレースホルダー'
              required
              aria-label='foo'
              onChange={(e) => {
                console.log(e.target.value)
              }}
              size='small'
              fullWidth
            />
          </Box>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            onClick={(e) => {
              SubmitTest(e)
            }}>
            ボタン
          </Button>
        </form>
      </Stack>
    </Container>
  )
}

export default DashboardPage
