// src/pages/MapPage.tsx
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone'
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone'

import MainGrid from '@/components/MainGrid'
import { Map3D } from '@/components/Map3D'
import { SettingDrawer } from '@/components/SettingDrawer'
import { LAYOUT_CONSTANTS } from '@/constants/layout'
import { Box, useTheme } from '@mui/material'

import type { PageProps } from '@/types/PageProps'

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
        {' '}
        // MapPageで上から覆いかぶせる
        <Box>
          <h2>Map Page Settings</h2>
        </Box>
      </SettingDrawer>

      {/* トリガーボタン */}
      <Box
        onClick={toggleSettingDrawer}
        sx={{
          position: 'fixed',
          top: LAYOUT_CONSTANTS.HEADER.HEIGHT + 8,
          left: totalDrawerWidth - 16,
          zIndex: theme.zIndex.drawer + 1,
        }}>
        {isSettingDrawerOpen ? (
          <ArrowCircleLeftTwoToneIcon sx={iconStyle} />
        ) : (
          <ArrowCircleRightTwoToneIcon sx={iconStyle} />
        )}
      </Box>

      {/* メインコンテンツ */}
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
