import Mapbox from '@/components/MapBox'
import type React from 'react'

const HomePage: React.FC = () => {
  return (
    <main style={{ marginTop: -20 }}>
      <Mapbox latitude={35.6809591} longitude={139.7673068} zoom={9} />
    </main>
  )
}

export default HomePage
