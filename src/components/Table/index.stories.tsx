// src/components/Table/index.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { CustomTable } from './TableComponents/CustomTable'
import { dummyData } from './mock/dummyData'

const meta = {
  title: 'Components/Table/CustomTable',
  component: CustomTable,
  tags: ['autodocs'],
  parameters: {
    // layout: 'centered',
    showThemeSwitcher: false,
    // themeSwitcherPosition: 'top-right',
  },
} satisfies Meta<typeof CustomTable>

export default meta
type Story = StoryObj<typeof meta>

// デフォルトのカラム定義
const defaultColumns = [
  { header: 'ID', accessor: 'id', sortable: true },
  { header: 'Name', accessor: 'name', sortable: true },
  { header: 'Email', accessor: 'email', sortable: true },
  { header: 'Role', accessor: 'role', sortable: true },
  { header: 'Status', accessor: 'status', sortable: true },
]

// 基本的な使用例
export const Default: Story = {
  args: {
    columns: defaultColumns,
    data: dummyData,
    showCRUD: false,
    searchable: false,
  },
}

// 検索機能付き
export const WithSearch: Story = {
  args: {
    ...Default.args,
    searchable: true,
  },
}

// CRUD操作付き
export const WithCRUD: Story = {
  args: {
    ...Default.args,
    showCRUD: true,
    onView: (row) => console.log('View:', row),
    onEdit: (row) => console.log('Edit:', row),
    onDelete: (row) => console.log('Delete:', row),
  },
}

// すべての機能を有効化
export const FullFeatured: Story = {
  args: {
    ...Default.args,
    showCRUD: true,
    searchable: true,
    onView: (row) => console.log('View:', row),
    onEdit: (row) => console.log('Edit:', row),
    onDelete: (row) => console.log('Delete:', row),
  },
}

// カスタムページサイズ
export const CustomPagination: Story = {
  args: {
    ...FullFeatured.args,
    defaultPageSize: 5,
    pageSizeOptions: [5, 10, 15],
  },
}

// 最小構成
export const Minimal: Story = {
  args: {
    columns: [
      { header: 'Name', accessor: 'name' },
      { header: 'Email', accessor: 'email' },
    ],
    data: dummyData.slice(0, 3),
  },
}

// ローディング状態
export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
}

// データなし
export const NoData: Story = {
  args: {
    ...Default.args,
    data: [],
  },
}
