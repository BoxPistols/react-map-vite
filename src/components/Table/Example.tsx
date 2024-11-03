import type { User } from '@/types/type'
import { CustomTable } from '.'
import { dummyData } from './dummyData'

export const CustomTableExample = () => {
  // カラム定義
  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' },
    { header: 'Status', accessor: 'status' },
  ]

  // サンプルデータ
  const data: User[] = dummyData

  // CRUD handlers
  const handleView = (row: Record<string, string | number | boolean>) => {
    console.log('Viewing:', row)
    // 詳細表示のロジック
  }

  const handleEdit = (row: Record<string, string | number | boolean>) => {
    console.log('Editing:', row)
    // 編集モーダルを開くなどの編集ロジック
  }

  const handleDelete = (row: Record<string, string | number | boolean>) => {
    console.log('Deleting:', row)
    // 削除確認モーダルを表示するなどの削除ロジック
  }

  return (
    <div className='p-5'>
      <h3 className='text-xl font-bold mt-3 mb-1'>Users Table</h3>
      <CustomTable
        columns={columns}
        data={data}
        showCRUD={true}
        searchable={true}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}
