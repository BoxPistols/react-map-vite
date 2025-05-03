import { Typography } from '@mui/material'

import MainGrid from '@/components/MainGrid'

type InboxPageProps = object

const InboxPage: React.FC<InboxPageProps> = () => {
  return (
    <MainGrid overview='Inbox'>
      <Typography>This is Inbox Page</Typography>
    </MainGrid>
  )
}

export default InboxPage
