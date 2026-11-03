import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth'
import { useEffect, useState } from 'react'

import { auth } from '@/lib/firebase'

export interface AuthState {
  user: User | null
  loading: boolean
  error: Error | null
  isAuthenticated: boolean
}

/**
 * Firebase Authentication hook
 */
export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
    isAuthenticated: false,
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setAuthState({
          user,
          loading: false,
          error: null,
          isAuthenticated: !!user,
        })
      },
      (error) => {
        setAuthState({
          user: null,
          loading: false,
          error: error as Error,
          isAuthenticated: false,
        })
      }
    )

    return () => unsubscribe()
  }, [])

  const signUp = async (email: string, password: string) => {
    try {
      setAuthState((prev) => ({ ...prev, loading: true, error: null }))
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      return { success: true, user: userCredential.user }
    } catch (error) {
      const err = error as Error
      setAuthState((prev) => ({ ...prev, error: err, loading: false }))
      return { success: false, error: err }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      setAuthState((prev) => ({ ...prev, loading: true, error: null }))
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      return { success: true, user: userCredential.user }
    } catch (error) {
      const err = error as Error
      setAuthState((prev) => ({ ...prev, error: err, loading: false }))
      return { success: false, error: err }
    }
  }

  const signOut = async () => {
    try {
      await firebaseSignOut(auth)
      return { success: true }
    } catch (error) {
      const err = error as Error
      setAuthState((prev) => ({ ...prev, error: err }))
      return { success: false, error: err }
    }
  }

  return {
    ...authState,
    signUp,
    signIn,
    signOut,
  }
}
