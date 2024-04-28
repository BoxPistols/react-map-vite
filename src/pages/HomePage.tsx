import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-700">
      <Header />
      <header className="relative">
        {/* ヘッダー画像とテキストのコードをここに追加 */}
      </header>
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16" id="about">
          {/* 企業情報セクションのコードをここに追加 */}
        </section>
        <section className="mb-16" id="services">
          {/* サービスセクションのコードをここに追加 */}
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;