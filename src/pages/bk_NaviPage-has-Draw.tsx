// NaviPage.tsx

import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone'
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone'

import MainGrid from '@/components/MainGrid'
import { SettingDrawer } from '@/components/SettingDrawer'
// import { SettingDrawerWithTrigger } from '@/components/SettingDrawerWithTrigger'
// import { useTotalDrawerWidth } from '@/components/SettingDrawerWithTrigger'
// import { theme } from '@/theme/theme'
import { LAYOUT_CONSTANTS } from '@/constants/layout'
import type { PageProps } from '@/types/PageProps'
import { Box, useTheme } from '@mui/material'

const NaviPage = ({
  sideNavWidth = 0,
  settingDrawerWidth = LAYOUT_CONSTANTS.SETTING_DRAWER.WIDTH,
  isSettingDrawerOpen = false,
  toggleSettingDrawer,
  totalDrawerWidth = sideNavWidth + settingDrawerWidth,
}: PageProps) => {
  const theme = useTheme()

  return (
    <div>
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
          <ArrowCircleLeftTwoToneIcon />
        ) : (
          <ArrowCircleRightTwoToneIcon />
        )}
      </Box>

      {/* メインコンテンツ */}
      <MainGrid overview='Navi'>
        <Box>
          <h1>This is Navi Page</h1>
        </Box>
      </MainGrid>
    </div>
  )
}

export default NaviPage
