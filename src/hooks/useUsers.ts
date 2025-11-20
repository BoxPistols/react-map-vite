import { orderBy } from 'firebase/firestore'

import type { UserData } from '@/types/firebase'

import { firestoreOperations, useFirestoreCollection } from './useFirestore'

const COLLECTION_NAME = 'users'

export function useUsers() {
  const { data, loading, error, refresh } = useFirestoreCollection<UserData>(
    COLLECTION_NAME,
    [orderBy('createdAt', 'desc')]
  )

  const createUser = async (userData: Omit<UserData, 'id' | 'createdAt' | 'updatedAt'>) => {
    const result = await firestoreOperations.create<UserData>(COLLECTION_NAME, userData as Omit<UserData, 'id'>)
    if (result.success) {
      refresh()
    }
    return result
  }

  const updateUser = async (userId: string, userData: Partial<UserData>) => {
    const result = await firestoreOperations.update<UserData>(
      COLLECTION_NAME,
      userId,
      userData
    )
    if (result.success) {
      refresh()
    }
    return result
  }

  const deleteUser = async (userId: string) => {
    const result = await firestoreOperations.delete(COLLECTION_NAME, userId)
    if (result.success) {
      refresh()
    }
    return result
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
