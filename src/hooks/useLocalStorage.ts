import { useEffect, useState } from 'react'

import type {
  AnalyticsData,
  InventoryData,
  LocationData,
  OrderData,
  SettingsData,
  UserData,
} from '@/types/firebase'

const STORAGE_KEYS = {
  USERS: 'app_users',
  LOCATIONS: 'app_locations',
  ANALYTICS: 'app_analytics',
  ORDERS: 'app_orders',
  INVENTORY: 'app_inventory',
  SETTINGS: 'app_settings',
} as const

/**
 * Generic localStorage hook
 */
function useLocalStorageState<T>(key: string, initialValue: T[]) {
  const [data, setData] = useState<T[]>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error)
      return initialValue
    }
  })

  const loading = false
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error)
      setError(error as Error)
    }
  }, [key, data])

  const refresh = () => {
    try {
      const item = window.localStorage.getItem(key)
      setData(item ? JSON.parse(item) : initialValue)
    } catch (error) {
      console.error(`Error refreshing ${key}:`, error)
      setError(error as Error)
    }
  }

  return { data, setData, loading, error, refresh }
}

/**
 * Users local storage hook
 */
export function useLocalUsers() {
  const { data, setData, loading, error, refresh } = useLocalStorageState<UserData>(
    STORAGE_KEYS.USERS,
    []
  )

  const createUser = async (userData: Omit<UserData, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newUser: UserData = {
        ...userData,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      setData([...data, newUser])
      return { success: true, id: newUser.id }
    } catch (error) {
      return { success: false, error: error as Error }
    }
  }

  const updateUser = async (userId: string, userData: Partial<UserData>) => {
    try {
      const updatedData = data.map((user) =>
        user.id === userId ? { ...user, ...userData, updatedAt: new Date() } : user
      )
      setData(updatedData)
      return { success: true }
    } catch (error) {
      return { success: false, error: error as Error }
    }
  }

  const deleteUser = async (userId: string) => {
    try {
      const filteredData = data.filter((user) => user.id !== userId)
      setData(filteredData)
      return { success: true }
    } catch (error) {
      return { success: false, error: error as Error }
    }
  }

  return {
    users: data,
    loading,
    error,
    createUser,
    updateUser,
    deleteUser,
    refresh,
  }
}

/**
 * Locations local storage hook
 */
export function useLocalLocations() {
  const { data, setData, loading, error, refresh } = useLocalStorageState<LocationData>(
    STORAGE_KEYS.LOCATIONS,
    []
  )

  const createLocation = async (locationData: Omit<LocationData, 'id'>) => {
    try {
      const newLocation: LocationData = {
        ...locationData,
        id: Date.now().toString(),
      }
      setData([...data, newLocation])
      return { success: true, id: newLocation.id }
    } catch (error) {
      return { success: false, error: error as Error }
    }
  }

  const updateLocation = async (
    locationId: string,
    locationData: Partial<LocationData>
  ) => {
    try {
      const updatedData = data.map((location) =>
        location.id === locationId ? { ...location, ...locationData } : location
      )
      setData(updatedData)
      return { success: true }
    } catch (error) {
      return { success: false, error: error as Error }
    }
  }

  const deleteLocation = async (locationId: string) => {
    try {
      const filteredData = data.filter((location) => location.id !== locationId)
      setData(filteredData)
      return { success: true }
    } catch (error) {
      return { success: false, error: error as Error }
    }
  }

  return {
    locations: data,
    loading,
    error,
    createLocation,
    updateLocation,
    deleteLocation,
    refresh,
  }
}

/**
 * Analytics local storage hook
 */
export function useLocalAnalytics() {
  const { data: analyticsData, loading: analyticsLoading, error: analyticsError } =
    useLocalStorageState<AnalyticsData>(STORAGE_KEYS.ANALYTICS, [])

  const { data: orders, loading: ordersLoading, error: ordersError } =
    useLocalStorageState<OrderData>(STORAGE_KEYS.ORDERS, [])

  const { data: inventory, loading: inventoryLoading, error: inventoryError } =
    useLocalStorageState<InventoryData>(STORAGE_KEYS.INVENTORY, [])

  const currentAnalytics = analyticsData.length > 0 ? analyticsData[0] : null

  return {
    analytics: currentAnalytics,
    orders,
    inventory,
    loading: analyticsLoading || ordersLoading || inventoryLoading,
    error: analyticsError || ordersError || inventoryError,
    refresh: () => {},
  }
}

/**
 * Settings local storage hook
 */
export function useLocalSettings(userId: string | null) {
  const { data, setData, loading, error } = useLocalStorageState<SettingsData>(
    STORAGE_KEYS.SETTINGS,
    []
  )

  const settings = userId ? data.find((s) => s.userId === userId) || null : null

  const updateSettings = async (settingsData: Partial<SettingsData>) => {
    if (!userId) {
      return { success: false, error: new Error('User ID is required') }
    }

    try {
      const existingIndex = data.findIndex((s) => s.userId === userId)
      if (existingIndex >= 0) {
        const updatedData = [...data]
        updatedData[existingIndex] = {
          ...updatedData[existingIndex],
          ...settingsData,
          updatedAt: new Date(),
        }
        setData(updatedData)
      } else {
        const newSettings: SettingsData = {
          id: Date.now().toString(),
          userId,
          ...settingsData,
          updatedAt: new Date(),
        } as SettingsData
        setData([...data, newSettings])
      }
      return { success: true }
    } catch (error) {
      return { success: false, error: error as Error }
    }
  }

  return {
    settings,
    loading,
    error,
    updateSettings,
  }
}

/**
 * Initialize demo data in localStorage
 */
export function initializeDemoData() {
  const demoUsers: UserData[] = [
    {
      id: '1',
      name: '山田太郎',
      email: 'yamada@example.com',
      role: 'Admin',
      status: 'active',
      createdAt: new Date('2025-01-01'),
      updatedAt: new Date('2025-01-01'),
    },
    {
      id: '2',
      name: '佐藤花子',
      email: 'sato@example.com',
      role: 'Editor',
      status: 'active',
      createdAt: new Date('2025-01-02'),
      updatedAt: new Date('2025-01-02'),
    },
    {
      id: '3',
      name: '鈴木一郎',
      email: 'suzuki@example.com',
      role: 'Viewer',
      status: 'active',
      createdAt: new Date('2025-01-03'),
      updatedAt: new Date('2025-01-03'),
    },
  ]

  const demoLocations: LocationData[] = [
    {
      id: '1',
      name: '東京オフィス',
      visitors: 1234,
      status: 'active',
      latitude: 35.6809591,
      longitude: 139.7673068,
      region: '関東エリア',
    },
    {
      id: '2',
      name: '大阪支店',
      visitors: 856,
      status: 'active',
      latitude: 34.6937,
      longitude: 135.5023,
      region: '関西エリア',
    },
    {
      id: '3',
      name: '名古屋支店',
      visitors: 567,
      status: 'active',
      latitude: 35.1815,
      longitude: 136.9066,
      region: '中部エリア',
    },
  ]

  if (!window.localStorage.getItem(STORAGE_KEYS.USERS)) {
    window.localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(demoUsers))
  }

  if (!window.localStorage.getItem(STORAGE_KEYS.LOCATIONS)) {
    window.localStorage.setItem(STORAGE_KEYS.LOCATIONS, JSON.stringify(demoLocations))
  }
}
