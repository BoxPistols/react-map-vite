import React from 'react'

const ContactForm: React.FC = () => {
  return (
    <section className="mb-16" id="contact">
      {/* お問い合わせフォームのコードをここに追加 */}
      <h2 className="mb-4 text-2xl font-bold">お問い合わせ</h2>
      <form className="space-y-4">
        <div>
          <label className="block" htmlFor="name">
            お名前
          </label>
          <input
            className="w-full rounded border border-gray-300 px-4 py-2"
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
            className="w-full rounded border border-gray-300 px-4 py-2"
            id="email"
            type="email"
            placeholder="input here"
          />
        </div>
        <div>
          <label className="block" htmlFor="message">
            お問い合わせ内容
          </label>
          <textarea className="w-full rounded border border-gray-300 px-4 py-2" id="message" placeholder="input here" />
        </div>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white" type="submit">
          送信
        </button>
      </form>
    </section>
  )
}

export default ContactForm
