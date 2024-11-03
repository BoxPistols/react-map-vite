// src/types/PageProps.ts
export type PageProps = {
  sideNavWidth: number
  settingDrawerWidth?: number
  isSettingDrawerOpen?: boolean
  toggleSettingDrawer?: () => void
  totalDrawerWidth?: number
  sideNavOpen?: boolean
}

export interface User extends Record<string, string | number | boolean> {
  id: number
  name: string
  email: string
  role: string
  status: boolean
}
