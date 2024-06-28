import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import { SideNav } from './layouts/SideNav'
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import InboxPage from './pages/InboxPage'
import NaviPage from './pages/NaviPage'
import WifiPage from './pages/WifiPage'

const App: React.FC = () => {
  const [open, setOpen] = React.useState(true)

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  return (
    <Router>
      <Header toggleDrawer={toggleDrawer} />
      <SideNav open={open} />
      <main
        className={`content ${open ? 'ml-60' : 'ml-24'} transition-all duration-300`}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/navi' element={<NaviPage />} />
          <Route path='/wifi' element={<WifiPage />} />
          <Route path='/inbox' element={<InboxPage />} />
        </Routes>
      </main>
      <footer
        className={`fixed bottom-0 bg-gray-800 text-white text-center text-xs py-1 transition-all duration-100 ${
          open ? 'w-full' : 'w-full ml-12'
        }`}>
        Copy right 2024 by Map App
      </footer>
    </Router>
  )
}

export default App
