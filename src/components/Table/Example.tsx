import { CustomTable } from '.'

// インターフェース定義
interface User extends Record<string, string | number | boolean> {
  id: number
  name: string
  email: string
  role: string
  status: boolean
}

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
  const data: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: false,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Editor',
      status: true,
    },
  ]

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
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Users Table</h1>
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
