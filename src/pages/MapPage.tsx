// MapPage.tsx
import MainGrid from '@/components/MainGrid'
import { Map3D } from '@/components/Map3D'
import { LAYOUT_CONSTANTS } from '@/constants/layout'
import { Box } from '@mui/material'

import type { PageProps } from '@/types/PageProps'

const MapPage = (_props: PageProps) => {
  return (
    <div>
      <MainGrid overview='Map'>
        <Box
          sx={{
            position: 'fixed',
            top: LAYOUT_CONSTANTS.HEADER.HEIGHT,
            left: 0,
            right: 0,
            bottom: 0,
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
    </div>
  )
}

export default MapPage
