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
})<{ error?: boolean }>(({ theme, error }) => ({
  position: 'static',
  transform: 'none',
  transition: 'none',
  pointerEvents: 'auto',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'start',
  fontWeight: 'bold',
  fontSize: '0.75rem',
  marginBottom: '4px',
  color: error ? theme.palette.error.main : 'inherit',
}))

const RequiredMark = styled('span')({
  color: 'red',
  marginLeft: '4px',
  fontSize: '1.2em',
})

const TooltipIcon = styled(HelpOutlineOutlinedIcon)({
  fontSize: '1rem',
  marginLeft: '4px',
  color: 'rgba(0, 0, 0, 0.54)',
})

const CustomTextField = ({
  label,
  InputProps,
  inputProps,
  required,
  tooltip,
  error,
  ...props
}: CustomTextFieldProps) => {
  const theme = useTheme()

  return (
    <StyledFormControl>
      <StyledInputLabel
        shrink
        htmlFor={props.id}
        error={error}
        sx={{
          lineHeight: '1.75',
          color: theme.palette.text.primary,
          fontSize: '1em',
          marginBottom: 0,
        }}>
        {required && (
          <RequiredMark
            sx={{
              fontSize: '1.5em',
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
              fontSize: '1.5em',
              color: theme.palette.text.secondary,
            }}>
            <TooltipIcon />
          </Tooltip>
        )}
      </StyledInputLabel>
      <TextField
        {...props}
        error={error}
        required={required}
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
          style: {
            ...(inputProps?.style as CSSProperties),
            paddingTop: '10px',
            paddingBottom: '8px',
            height: 'auto',
          },
        }}
      />
    </StyledFormControl>
  )
}

export default CustomTextField
