// src/components/Table/index.stories.tsx
import { dummyData } from './mock/dummyData'
import { CustomTable } from './TableComponents/CustomTable'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Table/CustomTable',
  component: CustomTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'CRUD操作ハンドラやキーワード検索機能を備えた基本的なテーブルコンポーネント<br>デフォルトでカラムの選択表示やソート機能も備えている',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: '基本的なテーブルコンポーネントの使用例',
      },
    },
  },
}

// 検索機能付き
export const WithSearch: Story = {
  args: {
    ...Default.args,
    searchable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'キーワード検索機能を有効化した使用例',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'CRUD操作ハンドラを有効化した使用例',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'CRUD操作ハンドラとキーワード検索機能を有効化した使用例',
      },
    },
  },
}

// カスタムページサイズ
export const CustomPagination: Story = {
  args: {
    ...FullFeatured.args,
    defaultPageSize: 5,
    pageSizeOptions: [5, 10, 15],
  },
  parameters: {
    docs: {
      description: {
        story: 'ページサイズをカスタマイズした使用例',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: '最小構成の使用例',
      },
    },
  },
}

// ローディング状態
export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'ローディング状態の使用例',
      },
    },
  },
}

// データなし
export const NoData: Story = {
  args: {
    ...Default.args,
    data: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'データがない場合の使用例',
      },
    },
  },
}
