/**
 * Haptic feedback hook for mobile devices
 * Provides vibration feedback for user interactions
 */
export const useHapticFeedback = () => {
  const isSupported = typeof navigator !== 'undefined' && 'vibrate' in navigator

  const vibrate = (pattern: number | number[] = 50) => {
    if (isSupported) {
      navigator.vibrate(pattern)
    }
  }

  // Short tap feedback
  const tapFeedback = () => vibrate(30)

  // Pin placement feedback - distinctive pattern
  const pinPlacementFeedback = () => vibrate([50, 30, 50])

  // Success feedback
  const successFeedback = () => vibrate([30, 50, 80])

  // Error feedback
  const errorFeedback = () => vibrate([100, 50, 100])

  return {
    isSupported,
    vibrate,
    tapFeedback,
    pinPlacementFeedback,
    successFeedback,
    errorFeedback,
  }
}
