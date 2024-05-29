import { InputLabel, styled } from '@mui/material'
import { SxProps } from '@mui/system'
import { ReactNode } from 'react'

// Types
type Props = {
  id?: string // TextFieldがIDを持つ場合、htmlFor同一のIDを設定する。アクセシビリティ的には推奨。UI的には必須ではない。
  size?: 'medium' | 'small'
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  variant?: 'filled' | 'outlined'
  sx?: SxProps
  mt?: number
  children: ReactNode
}

const Label = styled(InputLabel)(() => ({
  fontSize: '14px',
  position: 'initial',
  textAlign: 'left',
  transform: 'none',
  minHeight: '1.85em',

  '&.MuiFormLabel-root.MuiInputLabel-root': {
    fontSize: 14,
  },
}))

export const CustomLabel = ({ id, children, mt = 3 }: Props) => {
  return (
    <Label htmlFor={id} sx={{ mt }}>
      {children}
    </Label>
  )
}
