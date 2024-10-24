// src/hooks/useSidebarDrawer.ts
import { LAYOUT_CONSTANTS } from '@/constants/layout'
import { useCallback, useEffect, useMemo, useState } from 'react'

// ローカルストレージのキー
const SIDEBAR_STATE_KEY = 'sidebarOpen'
const DRAWER_STATE_KEY = 'drawerOpen'

interface DrawerStyles {
  left: string
  width: string
  transition: string
  position: 'fixed'
  top: string
  height: string
}

interface ContentStyles {
  paddingLeft: string
  transition: string
  width: string
}

interface UseSidebarDrawerReturn {
  sidebarOpen: boolean
  drawerOpen: boolean
  toggleSidebar: () => void
  toggleDrawer: () => void
  setSidebarOpen: (value: boolean) => void
  setDrawerOpen: (value: boolean) => void
  drawerStyles: DrawerStyles
  contentStyles: ContentStyles
  mainContentStyles: ContentStyles
}

export const useSidebarDrawer = (
  initialSidebarState = true
): UseSidebarDrawerReturn => {
  // サイドバーの状態を初期化（ローカルストレージから復元）
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(() => {
    try {
      const savedState = localStorage.getItem(SIDEBAR_STATE_KEY)
      return savedState !== null ? JSON.parse(savedState) : initialSidebarState
    } catch {
      return initialSidebarState
    }
  })

  // ドロワーの状態を初期化（ローカルストレージから復元）
  const [drawerOpen, setDrawerOpen] = useState<boolean>(() => {
    try {
      const savedState = localStorage.getItem(DRAWER_STATE_KEY)
      return savedState !== null ? JSON.parse(savedState) : false
    } catch {
      return false
    }
  })

  // 状態の永続化
  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_STATE_KEY, JSON.stringify(sidebarOpen))
    } catch (error) {
      console.error('Failed to save sidebar state:', error)
    }
  }, [sidebarOpen])

  useEffect(() => {
    try {
      localStorage.setItem(DRAWER_STATE_KEY, JSON.stringify(drawerOpen))
    } catch (error) {
      console.error('Failed to save drawer state:', error)
    }
  }, [drawerOpen])

  // トグル関数をメモ化
  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev)
  }, [])

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev)
  }, [])

  // ドロワーのスタイルを計算
  const drawerStyles = useMemo(
    () => ({
      left: `${
        sidebarOpen
          ? LAYOUT_CONSTANTS.SIDEBAR.WIDTH_OPENED
          : LAYOUT_CONSTANTS.SIDEBAR.WIDTH_CLOSED
      }px`,
      width: `${LAYOUT_CONSTANTS.RIGHT_DRAWER.WIDTH}px`,
      transition: 'all 0.3s ease-in-out',
      position: 'fixed' as const,
      top: `${LAYOUT_CONSTANTS.HEADER.HEIGHT}px`,
      height: `calc(100vh - ${LAYOUT_CONSTANTS.HEADER.HEIGHT}px)`,
    }),
    [sidebarOpen]
  )

  // コンテンツエリアのスタイルを計算
  const contentStyles = useMemo(
    () => ({
      paddingLeft: `${
        drawerOpen
          ? LAYOUT_CONSTANTS.SIDEBAR.WIDTH_CLOSED
          : LAYOUT_CONSTANTS.SIDEBAR.WIDTH_CLOSED / 2
      }px`,
      transition: 'padding-left 0.3s ease-in-out',
      width: '100%',
    }),
    [drawerOpen]
  )

  // メインコンテンツエリアのスタイルを計算
  const mainContentStyles = useMemo(
    () => ({
      paddingLeft: `${
        sidebarOpen
          ? LAYOUT_CONSTANTS.SIDEBAR.WIDTH_OPENED
          : LAYOUT_CONSTANTS.SIDEBAR.WIDTH_CLOSED
      }px`,
      transition: 'padding-left 0.3s ease-in-out',
      width: '100%',
    }),
    [sidebarOpen]
  )

  // イベントリスナーの設定
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === SIDEBAR_STATE_KEY) {
        const newValue = e.newValue
          ? JSON.parse(e.newValue)
          : initialSidebarState
        setSidebarOpen(newValue)
      }
      if (e.key === DRAWER_STATE_KEY) {
        const newValue = e.newValue ? JSON.parse(e.newValue) : false
        setDrawerOpen(newValue)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [initialSidebarState])

  return {
    sidebarOpen,
    drawerOpen,
    toggleSidebar,
    toggleDrawer,
    setSidebarOpen,
    setDrawerOpen,
    drawerStyles,
    contentStyles,
    mainContentStyles,
  }
}
