import CustomSelect from '@/components/Form/CustomSelect'
import CustomTextField from '@/components/Form/CustomTextField'
import MainGrid from '@/components/MainGrid'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'

const DashboardPage = () => {
  return (
    <>
      <MainGrid overview='Dashboard'>
        <Typography>This is Dashboard Page</Typography>

        <Box
          display={{ xs: 'block', sm: 'flex' }}
          flexDirection={'column'}
          my={4}
          gap={2}>
          <form>
            <Box
              display={{ xs: 'block', sm: 'flex' }}
              flexDirection={'column'}
              gap={4}>
              <CustomTextField label='Name' />
              <CustomSelect
                label='Select'
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                ]}
              />
              <Box
                display={{ xs: 'block', sm: 'flex' }}
                flexDirection={'row'}
                my={4}
                gap={4}>
                <Button variant='contained' color='secondary'>
                  Click me
                </Button>
                <Button>Click me</Button>
              </Box>
            </Box>
          </form>
        </Box>
      </MainGrid>
    </>
  )
}

export default DashboardPage
