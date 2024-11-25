// src/pages/MapPage.tsx
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone'
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone'

import CustomTextField from '@/components/Form/CustomTextField'

import MainGrid from '@/components/MainGrid'
import { Map3D } from '@/components/Map3D'
import { SettingDrawer } from '@/components/SettingDrawer'
import { LAYOUT_CONSTANTS } from '@/constants/layout'
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material'

import { CustomSelect } from '@/components/Form/CustomSelect'
import type { PageProps } from '@/types/type'

const MapPage = ({
  sideNavWidth = 0,
  settingDrawerWidth = LAYOUT_CONSTANTS.SETTING_DRAWER.WIDTH,
  isSettingDrawerOpen = false,
  toggleSettingDrawer,
  totalDrawerWidth = sideNavWidth + settingDrawerWidth,
}: PageProps) => {
  const theme = useTheme()

  const iconStyle = {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    borderRadius: '50%',
    width: '40px',
    height: '40px',
  }

  return (
    <div>
      {/* SettingDrawer */}
      <SettingDrawer
        drawerOpen={isSettingDrawerOpen}
        width={settingDrawerWidth}
        left={sideNavWidth}
        top={LAYOUT_CONSTANTS.HEADER.HEIGHT}
        isOverlay={true}>
        {/* Contents */}
        <Box>
          <Typography variant='h2'>Map Page Settings</Typography>

          <Typography>This is the setting drawer for the map page.</Typography>

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

          <Typography variant='h3'>Table</Typography>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table
              sx={{ minWidth: 300 }}
              size='small'
              aria-label='a dense table'>
              <TableHead>
                <TableRow>
                  <TableCell>Dessert</TableCell>
                  <TableCell>Calories</TableCell>
                  <TableCell>Fat&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Setting 1</TableCell>
                  <TableCell>Value 1</TableCell>
                  <TableCell>Value 1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Setting 2</TableCell>
                  <TableCell>Value 2</TableCell>
                  <TableCell>Value 2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </SettingDrawer>
      <Box
        onClick={toggleSettingDrawer}
        sx={{
          position: 'fixed',
          top: LAYOUT_CONSTANTS.HEADER.HEIGHT + 8,
          left: totalDrawerWidth - 16,
          zIndex: theme.zIndex.drawer + 200,
        }}>
        {isSettingDrawerOpen ? (
          <ArrowCircleLeftTwoToneIcon sx={iconStyle} />
        ) : (
          <ArrowCircleRightTwoToneIcon sx={iconStyle} />
        )}
      </Box>
      <MainGrid overview=''>
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
