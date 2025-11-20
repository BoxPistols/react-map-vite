import { orderBy } from 'firebase/firestore'

import type { LocationData } from '@/types/firebase'

import { firestoreOperations, useFirestoreCollection } from './useFirestore'

const COLLECTION_NAME = 'locations'

export function useLocations() {
  const { data, loading, error, refresh } = useFirestoreCollection<LocationData>(
    COLLECTION_NAME,
    [orderBy('visitors', 'desc')]
  )

  const createLocation = async (
    locationData: Omit<LocationData, 'id'>
  ) => {
    const result = await firestoreOperations.create<LocationData>(
      COLLECTION_NAME,
      locationData
    )
    if (result.success) {
      refresh()
    }
    return result
  }

  const updateLocation = async (
    locationId: string,
    locationData: Partial<LocationData>
  ) => {
    const result = await firestoreOperations.update<LocationData>(
      COLLECTION_NAME,
      locationId,
      locationData
    )
    if (result.success) {
      refresh()
    }
    return result
  }

  const deleteLocation = async (locationId: string) => {
    const result = await firestoreOperations.delete(COLLECTION_NAME, locationId)
    if (result.success) {
      refresh()
    }
    return result
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
