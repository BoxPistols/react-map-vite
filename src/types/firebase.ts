// Firebase data models

export interface UserData {
  id: string
  name: string
  email: string
  role: 'Admin' | 'Editor' | 'Viewer'
  status: 'active' | 'inactive'
  createdAt: Date
  updatedAt: Date
}

export interface AnalyticsData {
  id: string
  date: Date
  totalRevenue: number
  newCustomers: number
  orders: number
  inventory: number
  revenueChange: number
  customersChange: number
  ordersChange: number
  inventoryChange: number
}

export interface OrderData {
  id: string
  customerName: string
  product: string
  amount: number
  status: 'pending' | 'processing' | 'shipped' | 'completed'
  createdAt: Date
}

export interface InventoryData {
  id: string
  product: string
  stock: number
  total: number
  updatedAt: Date
}

export interface SettingsData {
  id: string
  userId: string
  firstName: string
  lastName: string
  email: string
  phone: string
  age: number
  address: {
    zipCode: string
    prefecture: string
    city: string
    street: string
  }
  notifications: {
    email: boolean
    push: boolean
    newsletter: boolean
    marketing: boolean
  }
  display: {
    language: 'ja' | 'en' | 'zh'
    timezone: string
    dateFormat: string
  }
  updatedAt: Date
}

export interface LocationData {
  id: string
  name: string
  visitors: number
  status: 'active' | 'inactive'
  latitude: number
  longitude: number
  region: string
}
