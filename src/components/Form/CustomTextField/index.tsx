// CustomTextField.tsx
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'

import {
  TextField,
  type TextFieldProps,
  Tooltip,
  useTheme,
} from '@mui/material'
import { FormControl, InputLabel } from '@mui/material'
import type { CSSProperties } from '@mui/material/styles/createTypography'
import styled from '@mui/material/styles/styled'

type CustomTextFieldProps = TextFieldProps & {
  label: string
  tooltip?: string
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

const RequiredMark = styled('span')({
  color: 'red',
  marginLeft: '4px',
  fontSize: '1.2em',
})

const TooltipIcon = styled(HelpOutlineOutlinedIcon)<{
  size?: 'small' | 'medium'
}>(({ size }) => ({
  fontSize: size === 'small' ? '0.875rem' : '1rem',
  marginLeft: '4px',
  color: 'rgba(0, 0, 0, 0.54)',
}))

const CustomTextField = ({
  label,
  InputProps,
  inputProps,
  required,
  tooltip,
  error,
  size = 'medium',
  fullWidth = false,
  ...props
}: CustomTextFieldProps) => {
  const theme = useTheme()
  const inputId =
    props.id || `custom-textfield-${label.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <StyledFormControl>
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
              color: theme.palette.text.secondary,
            }}>
            <TooltipIcon aria-label={`${label}についてのヘルプ`} size={size} />
          </Tooltip>
        )}
      </StyledInputLabel>
      <TextField
        {...props}
        fullWidth={fullWidth}
        id={inputId}
        error={error}
        required={required}
        size={size}
        aria-required={required ? 'true' : 'false'}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={tooltip ? `${inputId}-tooltip` : undefined}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          ...InputProps,
          style: {
            ...(InputProps?.style as CSSProperties),
            marginTop: 0,
          },
        }}
        inputProps={{
          ...inputProps,
          'aria-label': `${label}${required ? '（必須）' : ''}`,
          style: {
            ...(inputProps?.style as CSSProperties),
            paddingTop: size === 'small' ? '8px' : '10px',
            paddingBottom: size === 'small' ? '6px' : '8px',
            height: 'auto',
          },
        }}
      />
      {tooltip && (
        <span id={`${inputId}-tooltip`} style={{ display: 'none' }}>
          {tooltip}
        </span>
      )}
    </StyledFormControl>
  )
}

export default CustomTextField
