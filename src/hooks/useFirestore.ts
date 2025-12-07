import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  DocumentData,
  QueryConstraint,
  Timestamp,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { db } from '@/lib/firebase'

export interface FirestoreHookResult<T> {
  data: T[]
  loading: boolean
  error: Error | null
  refresh: () => void
}

/**
 * Custom hook for real-time Firestore data fetching
 */
export function useFirestoreCollection<T extends DocumentData>(
  collectionName: string,
  constraints: QueryConstraint[] = []
): FirestoreHookResult<T> {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const collectionRef = collection(db, collectionName)
    const q =
      constraints.length > 0
        ? query(collectionRef, ...constraints)
        : collectionRef

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => {
          const docData = doc.data()
          // Convert Firestore Timestamps to Date objects
          const convertedData: Record<string, unknown> = { id: doc.id }

          Object.entries(docData).forEach(([key, value]) => {
            if (value instanceof Timestamp) {
              convertedData[key] = value.toDate()
            } else {
              convertedData[key] = value
            }
          })

          return convertedData as T
        })
        setData(items)
        setLoading(false)
      },
      (err) => {
        console.error(`Error fetching ${collectionName}:`, err)
        setError(err as Error)
        setLoading(false)
      }
    )

    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionName, refreshKey])

  const refresh = () => setRefreshKey((prev) => prev + 1)

  return { data, loading, error, refresh }
}

/**
 * Custom hook for fetching a single Firestore document
 */
export function useFirestoreDoc<T extends DocumentData>(
  collectionName: string,
  docId: string | null
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!docId) {
      setLoading(false)
      return
    }

    const fetchDoc = async () => {
      try {
        setLoading(true)
        const docRef = doc(db, collectionName, docId)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const docData = docSnap.data()
          const convertedData: Record<string, unknown> = { id: docSnap.id }

          Object.entries(docData).forEach(([key, value]) => {
            if (value instanceof Timestamp) {
              convertedData[key] = value.toDate()
            } else {
              convertedData[key] = value
            }
          })

          setData(convertedData as T)
        } else {
          setData(null)
        }
        setLoading(false)
      } catch (err) {
        console.error(`Error fetching document ${docId}:`, err)
        setError(err as Error)
        setLoading(false)
      }
    }

    fetchDoc()
  }, [collectionName, docId])

  return { data, loading, error }
}

/**
 * Firestore CRUD operations
 */
export const firestoreOperations = {
  // Create
  async create<T extends DocumentData>(
    collectionName: string,
    data: Omit<T, 'id'>
  ) {
    try {
      const collectionRef = collection(db, collectionName)
      const docRef = await addDoc(collectionRef, {
        ...data,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      })
      return { success: true, id: docRef.id }
    } catch (error) {
      console.error(`Error creating document in ${collectionName}:`, error)
      return { success: false, error: error as Error }
    }
  },

  // Read
  async read<T extends DocumentData>(collectionName: string, docId: string) {
    try {
      const docRef = doc(db, collectionName, docId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const docData = docSnap.data()
        const convertedData: Record<string, unknown> = { id: docSnap.id }

        Object.entries(docData).forEach(([key, value]) => {
          if (value instanceof Timestamp) {
            convertedData[key] = value.toDate()
          } else {
            convertedData[key] = value
          }
        })

        return { success: true, data: convertedData as T }
      } else {
        return { success: false, error: new Error('Document not found') }
      }
    } catch (error) {
      console.error(`Error reading document ${docId}:`, error)
      return { success: false, error: error as Error }
    }
  },

  // Update
  async update<T extends DocumentData>(
    collectionName: string,
    docId: string,
    data: Partial<T>
  ) {
    try {
      const docRef = doc(db, collectionName, docId)
      await updateDoc(docRef, {
        ...data,
        updatedAt: Timestamp.now(),
      })
      return { success: true }
    } catch (error) {
      console.error(`Error updating document ${docId}:`, error)
      return { success: false, error: error as Error }
    }
  },

  // Delete
  async delete(collectionName: string, docId: string) {
    try {
      const docRef = doc(db, collectionName, docId)
      await deleteDoc(docRef)
      return { success: true }
    } catch (error) {
      console.error(`Error deleting document ${docId}:`, error)
      return { success: false, error: error as Error }
    }
  },

  // Query
  async query<T extends DocumentData>(
    collectionName: string,
    constraints: QueryConstraint[] = []
  ) {
    try {
      const collectionRef = collection(db, collectionName)
      const q =
        constraints.length > 0
          ? query(collectionRef, ...constraints)
          : collectionRef
      const snapshot = await getDocs(q)

      const items = snapshot.docs.map((doc) => {
        const docData = doc.data()
        const convertedData: Record<string, unknown> = { id: doc.id }

        Object.entries(docData).forEach(([key, value]) => {
          if (value instanceof Timestamp) {
            convertedData[key] = value.toDate()
          } else {
            convertedData[key] = value
          }
        })

        return convertedData as T
      })

      return { success: true, data: items }
    } catch (error) {
      console.error(`Error querying ${collectionName}:`, error)
      return { success: false, error: error as Error }
    }
  },
}

export { query, where, orderBy, limit }
