import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import type { PaletteColor, Theme } from '@mui/material/styles'
import { useEffect, useState } from 'react'

// styled-components
const TextStyled = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 500,
}))

const BoxStyled = styled('div')(() => ({
  width: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem 1rem',
  borderRadius: 5,
  boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.25)',
}))

const TextColors = styled(Box)(() => ({
  width: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem 1rem',
  fontSize: 16,
  fontWeight: 700,
}))

// Types
interface ColorGroupProps {
  title: string
  colors: Record<string, string>
  contrastText?: string
}

//　色のグループを表示するコンポーネント
const ColorGroup = ({ title, colors }: ColorGroupProps) => {
  const theme = useTheme()

  return (
    <Box m={2}>
      <Typography
        mt={3}
        mb={0.5}
        fontSize={14}
        fontWeight={700}
        color={theme.palette.text.primary}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {Object.entries(colors).map(([shade, color]) => (
          <Grid item key={shade}>
            <BoxStyled style={{ backgroundColor: color }}>
              <TextStyled
                style={{
                  // mainのみ常に白い文字
                  color:
                    shade === 'main'
                      ? '#fff'
                      : theme.palette.getContrastText(color),
                }}>
                {shade}: {color}
              </TextStyled>
            </BoxStyled>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export const Color = () => {
  const theme = useTheme<Theme>()
  const [, forceUpdate] = useState({})

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // テーマが変更されたときに強制的に再レンダリングを行う
    forceUpdate({})
  }, [theme])

  const mainColors = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'error',
  ]

  const getColorGroup = (colorName: string) => {
    const color = theme.palette[
      colorName as keyof typeof theme.palette
    ] as PaletteColor
    return {
      main: color.main,
      lighter: color.lighter,
      dark: color.dark,
      light: color.light,
      contrastText: color.contrastText,
    }
  }

  const textColors = {
    'text.primary': theme.palette.text.primary,
    'text.secondary': theme.palette.text.secondary,
    'text.disabled': theme.palette.text.disabled,
  }

  const commonColors = {
    black: theme.palette.common.black,
    white: theme.palette.common.white,
  }

  const paperColors = {
    paper: theme.palette.background.paper,
  }

  // const otherColors = {
  //   divider: theme.palette.divider,
  //   'background.default': theme.palette.background.default,
  //   'background.paper': theme.palette.background.paper,
  // }

  // const surfaceColors = {
  //   surfaceBackground: theme.palette.surfaceBackground,
  //   surfaceBackgroundDark: theme.palette.surfaceBackgroundDark,
  //   surfaceBackgroundDisabled: theme.palette.surfaceBackgroundDisabled,
  // }

  // const iconColors = {
  //   iconWhite: theme.palette.iconWhite,
  //   iconLight: theme.palette.iconLight,
  //   iconDark: theme.palette.iconDark,
  //   iconAction: theme.palette.iconAction,
  //   iconDisabled: theme.palette.iconDisabled,
  // }

  const greyColors = {
    '50': theme.palette.grey[50],
    '100': theme.palette.grey[100],
    '200': theme.palette.grey[200],
    '300': theme.palette.grey[300],
    '400': theme.palette.grey[400],
    '500': theme.palette.grey[500],
    '600': theme.palette.grey[600],
    '700': theme.palette.grey[700],
    '800': theme.palette.grey[800],
    '900': theme.palette.grey[900],
    A100: theme.palette.grey.A100,
    A200: theme.palette.grey.A200,
    A400: theme.palette.grey.A400,
    A700: theme.palette.grey.A700,
  }

  return (
    <Container maxWidth='lg'>
      {mainColors.map((color) => {
        const colorGroup = getColorGroup(color)
        return (
          <ColorGroup
            key={color}
            title={color}
            colors={{
              main: colorGroup.main,
              lighter: colorGroup.lighter || '',
              dark: colorGroup.dark,
              light: colorGroup.light,
              contrastText: colorGroup.contrastText,
            }}
            contrastText={colorGroup.contrastText}
          />
        )
      })}
      <ColorGroup title='text' colors={textColors} />

      <Box sx={{ display: 'flex' }}>
        <TextColors color={theme.palette.text.primary}>text.primary</TextColors>
        <TextColors color={theme.palette.text.secondary}>
          text.secondary
        </TextColors>
        <TextColors color={theme.palette.text.disabled}>
          text.disabled
        </TextColors>
      </Box>

      <ColorGroup title='common' colors={commonColors} />
      <ColorGroup title='paper' colors={paperColors} />
      <ColorGroup title='grey' colors={greyColors} />
      {/* <ColorGroup title='palette others' colors={otherColors} />
      <ColorGroup title='palette surfaceBackground' colors={surfaceColors} />
      <ColorGroup title='icon palette' colors={iconColors} /> */}

      {/* <Box ml={2} mt={3} width={'fit-content'}>
        <Typography fontWeight={'bold'}>example</Typography>
        <Typography
          color={theme.palette.primary.contrastText}
          px={4}
          py={1.5}
          mt={1}
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
          }}>
          backgroundColor: primary.main <br />
          color: primary.contrastText
        </Typography>
      </Box> */}
    </Container>
  )
}
