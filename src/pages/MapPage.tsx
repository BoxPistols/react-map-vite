import MainGrid from '@/components/MainGrid'
import { Map3D } from '@/components/Map3D'
import { Box } from '@mui/material'
// import CustomTextField from '@/components/Form/CustomTextField'
// import { Button, TextField, Typography } from '@mui/material'

const MapPage = () => {
  // ドロワーに表示するフォームコンテンツ

  // const formContent = (
  //   <Box
  //     sx={{
  //       display: 'flex',
  //       flexDirection: 'column',
  //       gap: 2,
  //       padding: 2,
  //       pb: 20,
  //     }}>
  //     <Typography variant='xl'>Add New Item</Typography>
  //     <Typography variant='sm'>Please fill out the form below</Typography>

  //     <Typography variant='xl'>
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
  //       tempore deserunt esse mollitia eos ipsam, temporibus quia illum nesciunt
  //       excepturi quis suscipit autem quae voluptates dolorum, odio eaque.
  //       Consequuntur placeat cum eius nostrum eligendi vitae perspiciatis odit
  //       tempora. Cumque qui tenetur dicta dolore quis? Aliquam eveniet earum id
  //     </Typography>

  //     <Typography variant='sm'>
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
  //       tempore deserunt esse mollitia eos ipsam, temporibus quia illum nesciunt
  //       excepturi quis suscipit autem quae voluptates dolorum, odio eaque.
  //       quibusdam facilis sed veritatis molestiae laboriosam aut, illo sit!
  //       Laudantium, voluptates impedit voluptatem amet ipsam ab cum tempora
  //       nulla quis? Odit error dolorum totam? A eveniet modi soluta ea sunt.
  //     </Typography>

  //     <CustomTextField
  //       label='ユーザー名'
  //       placeholder='ユーザー名を入力してください'
  //     />
  //     <TextField
  //       label='Description...'
  //       fullWidth
  //       multiline
  //       rows={4}
  //       sx={{
  //         mb: 4,
  //       }}
  //     />

  //     <CustomTextField
  //       label='ユーザー名'
  //       placeholder='ユーザー名を入力してください'
  //     />
  //     <TextField label='Description...' fullWidth multiline rows={4} />
  //     <Button variant='contained' color='primary'>
  //       Submit
  //     </Button>
  //   </Box>
  // )

  return (
    // <MainGrid overview='Map' drawerContent={formContent}>
    <MainGrid overview='Map' drawerContent={true}>
      <Box
        sx={{
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          bottom: 0,
          height: '100vh',
          width: '100vw',
        }}>
        <Map3D
          latitude={35.6809591}
          longitude={139.7673068}
          zoom={9}
          pitch={60}
          bearing={-20}
        />
      </Box>
    </MainGrid>
  )
}

export default MapPage
