/** @jsxImportSource react */
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Checkbox> = {
  title: 'MUI/Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
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
    indeterminate: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Playground: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    disabled: false,
    indeterminate: false,
  },
  render: (args) => <Checkbox {...args} />,
}

export const Basic: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Checkbox defaultChecked />
      <Checkbox />
      <Checkbox disabled />
      <Checkbox disabled checked />
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        サイズ
      </Typography>
      <Checkbox size="small" defaultChecked />
      <Checkbox size="medium" defaultChecked />
      <Checkbox size="large" defaultChecked />
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
        <Checkbox defaultChecked />
        <Checkbox defaultChecked color="primary" />
        <Checkbox defaultChecked color="secondary" />
        <Checkbox defaultChecked color="success" />
        <Checkbox defaultChecked color="error" />
        <Checkbox defaultChecked color="warning" />
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
      <FormControlLabel control={<Checkbox />} label="同意する" />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="ニュースレターを受け取る"
      />
      <FormControlLabel
        disabled
        control={<Checkbox />}
        label="無効な項目"
      />
    </Box>
  ),
}

const GroupExample = () => {
  const [state, setState] = useState({
    javascript: true,
    typescript: false,
    react: true,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">技術スタック</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.javascript}
              onChange={handleChange}
              name="javascript"
            />
          }
          label="JavaScript"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.typescript}
              onChange={handleChange}
              name="typescript"
            />
          }
          label="TypeScript"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.react}
              onChange={handleChange}
              name="react"
            />
          }
          label="React"
        />
      </FormGroup>
      <FormHelperText>技術スタックを選択してください</FormHelperText>
    </FormControl>
  )
}

export const Group: Story = {
  render: () => <GroupExample />,
}

const IndeterminateExample = () => {
  const [checked, setChecked] = useState([true, false])

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked])
  }

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]])
  }

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked])
  }

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="子アイテム 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="子アイテム 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  )

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        不確定状態
      </Typography>
      <FormControlLabel
        label="親アイテム"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </Box>
  )
}

export const Indeterminate: Story = {
  render: () => <IndeterminateExample />,
}

export const CustomIcon: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        カスタムアイコン
      </Typography>
      <Checkbox
        icon={<FavoriteBorderIcon />}
        checkedIcon={<FavoriteIcon />}
        defaultChecked
      />
    </Box>
  ),
}
