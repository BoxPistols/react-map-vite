/** @jsxImportSource react */
import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Switch> = {
  title: 'MUI/Inputs/Switch',
  component: Switch,
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Switch>

export const Playground: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    disabled: false,
  },
  render: (args) => <Switch {...args} defaultChecked />,
}

export const Basic: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Switch defaultChecked />
      <Switch />
      <Switch disabled />
      <Switch disabled checked />
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        サイズ
      </Typography>
      <Switch size="small" defaultChecked />
      <Switch size="medium" defaultChecked />
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="h6" gutterBottom>
        カラー
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Switch defaultChecked />
        <Switch defaultChecked color="primary" />
        <Switch defaultChecked color="secondary" />
        <Switch defaultChecked color="success" />
        <Switch defaultChecked color="error" />
        <Switch defaultChecked color="warning" />
      </Box>
    </Box>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="h6" gutterBottom>
        ラベル付き
      </Typography>
      <FormControlLabel control={<Switch defaultChecked />} label="有効" />
      <FormControlLabel control={<Switch />} label="通知を受け取る" />
      <FormControlLabel disabled control={<Switch />} label="無効な項目" />
    </Box>
  ),
}

export const LabelPlacement: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        ラベル位置
      </Typography>
      <FormControlLabel
        value="top"
        control={<Switch />}
        label="上"
        labelPlacement="top"
      />
      <FormControlLabel
        value="start"
        control={<Switch />}
        label="左"
        labelPlacement="start"
      />
      <FormControlLabel
        value="bottom"
        control={<Switch />}
        label="下"
        labelPlacement="bottom"
      />
      <FormControlLabel
        value="end"
        control={<Switch />}
        label="右（デフォルト）"
        labelPlacement="end"
      />
    </Box>
  ),
}

const GroupExample = () => {
  const [state, setState] = useState({
    notification: true,
    email: false,
    sms: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">通知設定</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.notification}
              onChange={handleChange}
              name="notification"
            />
          }
          label="通知を有効にする"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.email}
              onChange={handleChange}
              name="email"
              disabled={!state.notification}
            />
          }
          label="メール通知"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.sms}
              onChange={handleChange}
              name="sms"
              disabled={!state.notification}
            />
          }
          label="SMS通知"
        />
      </FormGroup>
      <FormHelperText>通知の設定を変更できます</FormHelperText>
    </FormControl>
  )
}

export const Group: Story = {
  render: () => <GroupExample />,
}

const ControlledExample = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        制御されたSwitch
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
        label={checked ? 'オン' : 'オフ'}
      />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        現在の状態: {checked ? 'オン' : 'オフ'}
      </Typography>
    </Box>
  )
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
}
