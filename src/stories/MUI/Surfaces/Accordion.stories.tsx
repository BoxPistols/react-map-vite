/** @jsxImportSource react */
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Accordion> = {
  title: 'MUI/Surfaces/Accordion',
  component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Playground: Story = {
  args: {
    defaultExpanded: false,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>アコーディオン</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          これはアコーディオンのコンテンツです。
        </Typography>
      </AccordionDetails>
    </Accordion>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>アコーディオン 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>アコーディオン 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>無効なアコーディオン</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            このアコーディオンは無効です。
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
      }

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          制御されたアコーディオン
        </Typography>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              一般設定
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              基本的な設定
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              アプリケーションの一般的な設定を管理できます。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>ユーザー</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              ユーザー管理
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              ユーザーアカウントとプロフィールを管理できます。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              詳細設定
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              高度な設定
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              高度な設定オプションにアクセスできます。
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    )
  },
}

export const WithActions: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        アクション付き
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>アコーディオン</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            アクションボタンを含むアコーディオンです。
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button size="small">キャンセル</Button>
          <Button size="small">保存</Button>
        </AccordionActions>
      </Accordion>
    </Box>
  ),
}

export const DefaultExpanded: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        デフォルトで展開
      </Typography>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>デフォルトで展開</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            このアコーディオンはデフォルトで展開されています。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>デフォルトで閉じている</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            このアコーディオンはデフォルトで閉じています。
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  ),
}

export const CustomStyle: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        カスタムスタイル
      </Typography>
      <Accordion
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ bgcolor: 'action.hover' }}
        >
          <Typography>カスタムスタイルのアコーディオン</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            カスタムスタイルが適用されたアコーディオンです。
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  ),
}
