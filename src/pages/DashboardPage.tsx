import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { CustomSelect } from '@/components/Form/CustomSelect'
import { CustomTextField } from '@/components/Form/CustomTextField'
import MainGrid from '@/components/MainGrid'
import type { PageProps } from '@/types/type'

const DashboardPage = (_props: PageProps) => {
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
              <CustomSelect
                label='Multiple Select'
                multiple
                // required
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ]}
              />
              <Box
                display={{ xs: 'block', sm: 'flex' }}
                flexDirection={'row'}
                my={4}
                gap={4}>
                <Button color='secondary'>Click me</Button>
                <Button>Click me</Button>
              </Box>
              {/* Button UI Test */}
              <Box
                display={{ xs: 'block', sm: 'flex' }}
                flexDirection={'row'}
                my={4}
                gap={4}>
                <Button size='small'>Small</Button>
                <Button size='medium'>Medium</Button>
                <Button size='large'>Large</Button>

                <Button variant='outlined'>Outlined</Button>
                <Button variant='text'>Text</Button>
                <Button disabled>Disabled</Button>
              </Box>
            </Box>
          </form>
        </Box>
      </MainGrid>
    </>
  )
}

export default DashboardPage
