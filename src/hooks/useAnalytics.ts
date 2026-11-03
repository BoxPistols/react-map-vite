import { limit, orderBy } from 'firebase/firestore'

import type { AnalyticsData, OrderData, InventoryData } from '@/types/firebase'

import { firestoreOperations, useFirestoreCollection } from './useFirestore'

export function useAnalytics() {
  const {
    data: analyticsData,
    loading: analyticsLoading,
    error: analyticsError,
    refresh: refreshAnalytics,
  } = useFirestoreCollection<AnalyticsData>('analytics', [
    orderBy('date', 'desc'),
    limit(1),
  ])

  const {
    data: orders,
    loading: ordersLoading,
    error: ordersError,
    refresh: refreshOrders,
  } = useFirestoreCollection<OrderData>('orders', [
    orderBy('createdAt', 'desc'),
    limit(10),
  ])

  const {
    data: inventory,
    loading: inventoryLoading,
    error: inventoryError,
    refresh: refreshInventory,
  } = useFirestoreCollection<InventoryData>('inventory', [
    orderBy('updatedAt', 'desc'),
  ])

  const currentAnalytics = analyticsData.length > 0 ? analyticsData[0] : null

  const createAnalytics = async (
    data: Omit<AnalyticsData, 'id' | 'createdAt' | 'updatedAt'>
  ) => {
    const result = await firestoreOperations.create<AnalyticsData>(
      'analytics',
      data
    )
    if (result.success) {
      refreshAnalytics()
    }
    return result
  }

  const updateInventory = async (id: string, data: Partial<InventoryData>) => {
    const result = await firestoreOperations.update<InventoryData>(
      'inventory',
      id,
      data
    )
    if (result.success) {
      refreshInventory()
    }
    return result
  }

  return {
    analytics: currentAnalytics,
    orders,
    inventory,
    loading: analyticsLoading || ordersLoading || inventoryLoading,
    error: analyticsError || ordersError || inventoryError,
    createAnalytics,
    updateInventory,
    refresh: () => {
      refreshAnalytics()
      refreshOrders()
      refreshInventory()
    },
  }
}
