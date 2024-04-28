import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="mb-16" id="contact">
      {/* お問い合わせフォームのコードをここに追加 */}
      <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
      <form className="space-y-4">
        <div>
          <label className="block" htmlFor="name">
            お名前
          </label>
          <input
            className="w-full border border-gray-300 rounded px-4 py-2"
            id="name"
            type="text"
            placeholder="山田 太郎"
          />
        </div>
        <div>
          <label className="block" htmlFor="email">
            メールアドレス
          </label>
          <input
            className="w-full border border-gray-300 rounded px-4 py-2"
            id="email"
            type="email"
            placeholder="input here"
          />
        </div>
        <div>
          <label className="block" htmlFor="message">
            お問い合わせ内容
          </label>
          <textarea className="w-full border border-gray-300 rounded px-4 py-2" id="message" placeholder="input here" />
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" type="submit">
          送信
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
