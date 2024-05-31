import type React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Header from '../components/Header'

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-700">
      <Header />
      <header className="relative">
        <img
          alt="Drone"
          className="h-auto w-full object-cover"
          height="768"
          src="https://picsum.photos/id/68/800/600"
          style={{ aspectRatio: '1344/768', objectFit: 'cover' }}
          width="1344"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <div className="absolute inset-x-0 bottom-0 p-8 text-white">
          <h2 className="text-4xl font-bold">産業用計測ドローン</h2>
          <p className="mt-2 text-xl">
            高精度な測定を実現する最先端のドローンテクノロジー
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16" id="about">
          <h2 className="mb-4 text-3xl font-bold">企業情報</h2>
          {/* 企業情報セクションのコードをここに追加 */}
        </section>
        <section className="mb-16" id="services">
          <h2 className="mb-4 text-3xl font-bold">サービス</h2>
          {/* サービスセクションのコードをここに追加 */}
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
