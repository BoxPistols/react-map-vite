import MainGrid from '@/components/MainGrid'
import type { PageProps } from '@/types/type'
import { Typography } from '@mui/material'

const InboxPage = (_props: PageProps) => {
  return (
    <MainGrid overview='Inbox'>
      <Typography>This is Inbox Page</Typography>
    </MainGrid>
  )
}

export default InboxPage
