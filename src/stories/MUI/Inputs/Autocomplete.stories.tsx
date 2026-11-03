/** @jsxImportSource react */
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import {
  Autocomplete,
  Box,
  Checkbox,
  Chip,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Autocomplete> = {
  title: 'MUI/Inputs/Autocomplete',
  component: Autocomplete,
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'select' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    freeSolo: {
      control: { type: 'boolean' },
    },
    disableClearable: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Autocomplete>

const top100Films = [
  '君の名は。',
  '千と千尋の神隠し',
  'もののけ姫',
  '天気の子',
  'すずめの戸締まり',
  'ハウルの動く城',
  '崖の上のポニョ',
  '風の谷のナウシカ',
  '天空の城ラピュタ',
  '魔女の宅急便',
]

export const Playground: Story = {
  args: {
    options: top100Films,
    size: 'medium',
    multiple: false,
    freeSolo: false,
    disableClearable: false,
  },
  render: (args) => (
    <Autocomplete
      {...args}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label='映画' />}
    />
  ),
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        基本
      </Typography>
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='映画' />}
      />
    </Box>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        複数選択
      </Typography>
      <Autocomplete
        multiple
        options={top100Films}
        defaultValue={[top100Films[0], top100Films[1]]}
        sx={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label='複数の映画' placeholder='映画を選択' />
        )}
      />
    </Box>
  ),
}

const fixedOptions = [top100Films[0]]

const FixedOptionsExample = () => {
  const [value, setValue] = useState([...fixedOptions, top100Films[1]])

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        固定オプション
      </Typography>
      <Autocomplete
        multiple
        value={value}
        onChange={(event, newValue) => {
          setValue([
            ...fixedOptions,
            ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
          ])
        }}
        options={top100Films}
        getOptionDisabled={(option) => fixedOptions.indexOf(option) !== -1}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              key={option}
              label={option}
              {...getTagProps({ index })}
              disabled={fixedOptions.indexOf(option) !== -1}
            />
          ))
        }
        sx={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label='固定オプション'
            placeholder='映画を選択'
          />
        )}
      />
    </Box>
  )
}

export const FixedOptions: Story = {
  render: () => <FixedOptionsExample />,
}

export const Checkboxes: Story = {
  render: () => {
    const icon = <CheckBoxOutlineBlankIcon fontSize='small' />
    const checkedIcon = <CheckBoxIcon fontSize='small' />

    return (
      <Box>
        <Typography variant='h6' gutterBottom>
          チェックボックス
        </Typography>
        <Autocomplete
          multiple
          options={top100Films}
          disableCloseOnSelect
          getOptionLabel={(option) => option}
          renderOption={(props, option, { selected }) => {
            const { key, ...rest } = props
            return (
              <li key={key} {...rest}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option}
              </li>
            )
          }}
          sx={{ width: 500 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label='チェックボックス'
              placeholder='映画を選択'
            />
          )}
        />
      </Box>
    )
  },
}

export const FreeSolo: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        自由入力
      </Typography>
      <Autocomplete
        freeSolo
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='自由入力可能' />}
      />
    </Box>
  ),
}

interface FilmOptionType {
  title: string
  year: number
}

const filmsByYear: FilmOptionType[] = [
  { title: '君の名は。', year: 2016 },
  { title: '千と千尋の神隠し', year: 2001 },
  { title: 'もののけ姫', year: 1997 },
  { title: '天気の子', year: 2019 },
  { title: 'すずめの戸締まり', year: 2022 },
  { title: 'ハウルの動く城', year: 2004 },
  { title: '崖の上のポニョ', year: 2008 },
  { title: '風の谷のナウシカ', year: 1984 },
  { title: '天空の城ラピュタ', year: 1986 },
  { title: '魔女の宅急便', year: 1989 },
]

const getDecade = (year: number) => {
  return `${Math.floor(year / 10) * 10}年代`
}

const sortedFilmsByYear = [...filmsByYear].sort(
  (a, b) => -getDecade(b.year).localeCompare(getDecade(a.year))
)

export const Grouped: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        グループ化
      </Typography>
      <Autocomplete
        options={sortedFilmsByYear}
        groupBy={(option) => getDecade(option.year)}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='年代別' />}
      />
    </Box>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          無効状態
        </Typography>
        <Autocomplete
          disabled
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label='無効' />}
        />
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          一部のオプションを無効
        </Typography>
        <Autocomplete
          options={top100Films}
          getOptionDisabled={(option) =>
            option === top100Films[0] || option === top100Films[1]
          }
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label='一部無効' />}
        />
      </Box>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          Small
        </Typography>
        <Autocomplete
          size='small'
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label='Small' />}
        />
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          Medium
        </Typography>
        <Autocomplete
          size='medium'
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label='Medium' />}
        />
      </Box>
    </Box>
  ),
}

export const LimitTags: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        表示タグ数の制限
      </Typography>
      <Autocomplete
        multiple
        limitTags={2}
        options={top100Films}
        defaultValue={[
          top100Films[0],
          top100Films[1],
          top100Films[2],
          top100Films[3],
        ]}
        sx={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label='最大2タグ表示'
            placeholder='映画を選択'
          />
        )}
      />
    </Box>
  ),
}
