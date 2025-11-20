import type { SettingsData } from '@/types/firebase'

import { firestoreOperations, useFirestoreDoc } from './useFirestore'

const COLLECTION_NAME = 'settings'

export function useSettings(userId: string | null) {
  const { data, loading, error } = useFirestoreDoc<SettingsData>(
    COLLECTION_NAME,
    userId
  )

  const updateSettings = async (settingsData: Partial<SettingsData>) => {
    if (!userId) {
      return { success: false, error: new Error('User ID is required') }
    }

    const result = await firestoreOperations.update<SettingsData>(
      COLLECTION_NAME,
      userId,
      settingsData
    )
    return result
  }

  const createSettings = async (
    settingsData: Omit<SettingsData, 'id' | 'updatedAt'>
  ) => {
    const result = await firestoreOperations.create<SettingsData>(
      COLLECTION_NAME,
      settingsData
    )
    return result
  }

  return {
    settings: data,
    loading,
    error,
    updateSettings,
    createSettings,
  }
}
