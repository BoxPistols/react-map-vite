import CustomTextField from '@/components/Form/CustomTextField'
import { Box, Stack, Typography } from '@mui/material'

const DashboardPage = () => {
  return (
    <>
      <Box mb={8}>
        <Typography variant='h2'>Dashboard</Typography>
      </Box>

      <Stack spacing={4} display={'flex'} maxHeight={'100%'} maxWidth={320}>
        <CustomTextField label='form label ラベル' id='foo' />

        <CustomTextField
          label='form label ラベル'
          id='foo'
          placeholder='placeholder プレースホルダー'
        />

        <CustomTextField
          label='form label ラベル'
          id='foo'
          placeholder='placeholder プレースホルダー'
          helperText='helper text ヘルパーテキスト'
          required
        />

        <CustomTextField
          label='form label ラベル'
          id='foo'
          placeholder='placeholder プレースホルダー'
          helperText='helper text ヘルパーテキスト'
          tooltip='tooltip ツールチップ'
        />
      </Stack>
    </>
  )
}

export default DashboardPage
