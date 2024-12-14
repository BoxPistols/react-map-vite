import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  useTheme,
} from '@mui/material'
import type { SelectProps } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material'
import styled from '@mui/material/styles/styled'
import { useState } from 'react'

type CustomSelectProps = Omit<
  SelectProps,
  'label' | 'multiple' | 'value' | 'onChange'
> & {
  label: string
  tooltip?: string
  helperText?: string
  options: Array<{ value: string | number; label: string }>
  placeholder?: string
  multiple?: boolean
  value?: string | string[] | number | number[]
  onChange?: (
    event: SelectChangeEvent<unknown>,
    value: string | string[] | number | number[]
  ) => void
  required?: boolean
  error?: boolean
  size?: 'small' | 'medium'
  fullWidth?: boolean
  id?: string
  name?: string
  inputProps?: SelectProps['inputProps']
}

const StyledFormControl = styled(FormControl)({
  width: '100%',
})

const StyledInputLabel = styled(InputLabel, {
  shouldForwardProp: (prop) => prop !== 'error',
})<{ error?: boolean; size?: 'small' | 'medium' }>(
  ({ theme, error, size }) => ({
    position: 'static',
    transform: 'none',
    transition: 'none',
    pointerEvents: 'auto',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'start',
    fontWeight: 'bold',
    fontSize: size === 'small' ? '0.75rem' : '0.875rem',
    marginBottom: '4px',
    color: error ? theme.palette.error.main : 'inherit',
  })
)

const RequiredMark = styled('span')(({ theme }) => ({
  color: theme.palette.error.main,
  marginRight: theme.spacing(1),
  marginLeft: 0,
  fontSize: '1.2em',
  lineHeight: '1.25',
  verticalAlign: 'middle',
}))

const TooltipIcon = styled(HelpOutlineOutlinedIcon)<{
  size?: 'small' | 'medium'
}>(({ size }) => ({
  fontSize: size === 'small' ? '0.875rem' : '1rem',
  marginLeft: '4px',
  color: 'inherit',
  verticalAlign: 'middle',
}))

export const CustomSelect = ({
  label,
  tooltip,
  helperText,
  options,
  required,
  error,
  size = 'medium',
  fullWidth = false,
  id,
  name,
  inputProps,
  multiple = false,
  placeholder = multiple ? '複数の選択が可能です' : '選択してください',
  value: propValue = multiple ? [] : '',
  onChange, // 外部のonChangeを受け取る
  ...props
}: CustomSelectProps) => {
  const theme = useTheme()
  const inputId =
    id || `custom-select-${label.replace(/\s+/g, '-').toLowerCase()}`
  const inputName = name || inputId

  // valueの初期化。undefinedではなく明示的な空文字やnullで初期化する
  const [value, setValue] = useState<string | string[] | number | number[]>(
    propValue || (multiple ? [] : '')
  )

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string | number) // 状態を更新
    if (onChange) {
      onChange(event, event.target.value as string | number) // 親コンポーネントのonChangeを呼び出す
    }
  }

  return (
    <StyledFormControl fullWidth={fullWidth} error={error} size={size}>
      <StyledInputLabel
        shrink
        htmlFor={inputId}
        error={error}
        size={size as 'small' | undefined}
        sx={{
          lineHeight: size === 'small' ? '1.5' : '1.75',
          color: theme.palette.text.primary,
          marginBottom: 0,
        }}>
        {required && (
          <RequiredMark
            aria-hidden='true'
            sx={{
              fontSize: size === 'small' ? '1.3em' : '1.5em',
              mr: 1,
              ml: 0,
              lineHeight: '1.25',
              color: theme.palette.error.main,
            }}>
            *
          </RequiredMark>
        )}
        {label}
        {tooltip && (
          <Tooltip
            title={tooltip}
            arrow
            sx={{
              fontSize: size === 'small' ? '1.3em' : '1.5em',
            }}>
            <TooltipIcon aria-label={`${label}についてのヘルプ`} size={size} />
          </Tooltip>
        )}
      </StyledInputLabel>
      <Select
        variant='outlined'
        {...props}
        multiple={multiple}
        id={inputId}
        name={inputName}
        label=''
        required={required}
        error={error}
        size={size}
        value={value} // stateからのvalueを使う
        onChange={handleChange} // 自作のhandleChangeを使う
        displayEmpty
        aria-required={required ? 'true' : 'false'}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={
          tooltip ? `${inputId}-tooltip` : `${inputId}-helper-text`
        }
        renderValue={(selected) => {
          if (multiple) {
            if (
              !selected ||
              (Array.isArray(selected) && selected.length === 0)
            ) {
              return <em>{placeholder}</em>
            }
            return (Array.isArray(selected) ? selected : [selected])
              .map(
                (value) =>
                  options.find((option) => option.value === value)?.label
              )
              .join(', ')
          }
          // 単一選択の場合の処理
          if (!selected) {
            return <em>{placeholder}</em>
          }
          return options.find((option) => option.value === selected)?.label
        }}
        inputProps={{
          ...inputProps,
          'aria-label': `${label}${required ? '（必須）' : ''}`,
        }}
        sx={{
          '& .MuiSelect-icon': {
            color: theme.palette.text.secondary,
          },
          '& .MuiSelect-select': {
            paddingTop: size === 'small' ? '8px' : '10px',
            paddingBottom: size === 'small' ? '6px' : '8px',
            height: 'auto',
          },
          '& .MuiSelect-select.MuiSelect-select': {
            color:
              value && (Array.isArray(value) ? value.length > 0 : value)
                ? theme.palette.text.primary
                : theme.palette.text.secondary,
          },
        }}>
        {placeholder && !multiple && (
          <MenuItem value='' disabled>
            <em>{placeholder}</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && (
        <FormHelperText id={`${inputId}-helper-text`}>
          {helperText}
        </FormHelperText>
      )}
      {tooltip && (
        <span id={`${inputId}-tooltip`} style={{ display: 'none' }}>
          {tooltip}
        </span>
      )}
    </StyledFormControl>
  )
}

export default CustomSelect
