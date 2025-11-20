/**
 * Unified data storage hook that switches between localStorage and Firebase
 * based on authentication state
 */

import { useAnalytics } from './useAnalytics'
import { useAuth } from './useAuth'
import {
  useLocalAnalytics,
  useLocalLocations,
  useLocalSettings,
  useLocalUsers,
} from './useLocalStorage'
import { useLocations } from './useLocations'
import { useSettings } from './useSettings'
import { useUsers } from './useUsers'

/**
 * Hook for users data storage
 * Uses localStorage when not authenticated, Firebase when authenticated
 */
export function useUsersStorage() {
  const { isAuthenticated } = useAuth()
  const firebaseUsers = useUsers()
  const localUsers = useLocalUsers()

  return isAuthenticated ? firebaseUsers : localUsers
}

/**
 * Hook for locations data storage
 * Uses localStorage when not authenticated, Firebase when authenticated
 */
export function useLocationsStorage() {
  const { isAuthenticated } = useAuth()
  const firebaseLocations = useLocations()
  const localLocations = useLocalLocations()

  return isAuthenticated ? firebaseLocations : localLocations
}

/**
 * Hook for analytics data storage
 * Uses localStorage when not authenticated, Firebase when authenticated
 */
export function useAnalyticsStorage() {
  const { isAuthenticated } = useAuth()
  const firebaseAnalytics = useAnalytics()
  const localAnalytics = useLocalAnalytics()

  return isAuthenticated ? firebaseAnalytics : localAnalytics
}

/**
 * Hook for settings data storage
 * Uses localStorage when not authenticated, Firebase when authenticated
 */
export function useSettingsStorage(userId: string | null) {
  const { isAuthenticated } = useAuth()
  const firebaseSettings = useSettings(userId)
  const localSettings = useLocalSettings(userId)

  return isAuthenticated ? firebaseSettings : localSettings
}
