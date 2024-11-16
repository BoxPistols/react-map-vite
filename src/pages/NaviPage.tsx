// NaviPage.tsx
import MainGrid from '@/components/MainGrid'
import { CustomTableExample } from '@/components/Table/mock/Example'
import type { PageProps } from '@/types/type'
import { Box } from '@mui/material'

const NaviPage = (_props: PageProps) => {
  return (
    <div>
      <MainGrid overview='Navi'>
        <Box>
          <h1>This is Navi Page</h1>
        </Box>
        <CustomTableExample />
      </MainGrid>
    </div>
  )
}

export default NaviPage
