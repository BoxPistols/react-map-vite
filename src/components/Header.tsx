import React from 'react'

const Header: React.FC = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-3">
      <h1 className="text-lg font-bold">ドローンサービス</h1>
      <div className="flex items-center space-x-4">
        <a className="hover:text-gray-900" href="#">
          企業情報
        </a>
        <a className="hover:text-gray-900" href="#">
          サービス
        </a>
        <a className="hover:text-gray-900" href="#">
          お問い合わせ
        </a>
      </div>
    </nav>
  )
}

export default Header
