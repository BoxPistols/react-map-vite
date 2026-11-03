import { useCallback, useState } from 'react'

export interface PinLocation {
  id: string
  lng: number
  lat: number
  name?: string
  timestamp: number
}

/**
 * Pin placement mode hook
 * Manages the state of pin placement mode and placed pins
 */
export const usePinPlacementMode = () => {
  const [isPinMode, setIsPinMode] = useState(false)
  const [pins, setPins] = useState<PinLocation[]>([])
  const [lastPlacedPin, setLastPlacedPin] = useState<PinLocation | null>(null)

  const togglePinMode = useCallback(() => {
    setIsPinMode((prev) => !prev)
  }, [])

  const enablePinMode = useCallback(() => {
    setIsPinMode(true)
  }, [])

  const disablePinMode = useCallback(() => {
    setIsPinMode(false)
  }, [])

  const addPin = useCallback((lng: number, lat: number, name?: string) => {
    const newPin: PinLocation = {
      id: `pin-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      lng,
      lat,
      name,
      timestamp: Date.now(),
    }
    setPins((prev) => [...prev, newPin])
    setLastPlacedPin(newPin)
    return newPin
  }, [])

  const removePin = useCallback((id: string) => {
    setPins((prev) => prev.filter((pin) => pin.id !== id))
    setLastPlacedPin((prev) => (prev?.id === id ? null : prev))
  }, [])

  const updatePinName = useCallback((id: string, name: string) => {
    setPins((prev) =>
      prev.map((pin) => (pin.id === id ? { ...pin, name } : pin))
    )
    setLastPlacedPin((prev) => (prev?.id === id ? { ...prev, name } : prev))
  }, [])

  const clearPins = useCallback(() => {
    setPins([])
    setLastPlacedPin(null)
  }, [])

  const clearLastPlacedPin = useCallback(() => {
    setLastPlacedPin(null)
  }, [])

  return {
    isPinMode,
    pins,
    lastPlacedPin,
    togglePinMode,
    enablePinMode,
    disablePinMode,
    addPin,
    removePin,
    updatePinName,
    clearPins,
    clearLastPlacedPin,
  }
}
