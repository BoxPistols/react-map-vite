// MapPage.tsx
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone'
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone'

import MainGrid from '@/components/MainGrid'
import { Map3D } from '@/components/Map3D'
import { SettingDrawer } from '@/components/SettingDrawer'
import { LAYOUT_CONSTANTS } from '@/constants/layout'
import { Box, useTheme } from '@mui/material'

import type { PageProps } from '@/types/PageProps'
import { useState } from 'react'

const MapPage = ({ sideNavWidth }: PageProps) => {
  const theme = useTheme()
  const [isSettingDrawerOpen, setIsSettingDrawerOpen] = useState(false)

  // SettingDrawer の横幅
  const settingDrawerWidth = LAYOUT_CONSTANTS.SETTING_DRAWER.WIDTH

  // サイドナビと SettingDrawer の横幅の合計
  const totalDrawerWidth =
    sideNavWidth + (isSettingDrawerOpen ? settingDrawerWidth : 0)

  // SettingDrawer の開閉を切り替える関数
  const toggleSettingDrawer = () => {
    setIsSettingDrawerOpen(!isSettingDrawerOpen)
  }

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
        top={LAYOUT_CONSTANTS.HEADER.HEIGHT}>
        {/* SettingDrawer の中身 */}
        <Box>
          <h2>Map Page Settings</h2>
          {/* その他の設定項目 */}
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
            // left: totalDrawerWidth,
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
