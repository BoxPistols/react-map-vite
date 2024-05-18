import { styled, useTheme } from '@mui/material/styles'
import { Grid, Box, Typography, Container } from '@mui/material'
import { Palette, PaletteColor, CommonColors } from '@mui/material/styles'

const TextStyled = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
`

const BoxStyled = styled(Box)`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
`

const Color = () => {
  const theme = useTheme()

  // colorGroups は文字列の配列です
  const colorGroups = Object.keys(theme.palette).filter(
    key =>
      // オブジェクトとしてパレットに含まれている色のみをフィルタリングします
      // ..."object" && key !== "grey" グレーは除外するケース
      typeof theme.palette[key as keyof Palette] === 'object' && key,
  )

  // 文字の色は背景色に応じて黒または白になります。
  const getContrastTextColor = (color: PaletteColor | string): string => {
    // パレットの色はオブジェクトまたはmainプロパティを持つ文字列です
    // if (typeof color === "object" && "main" in color) {
    if (typeof color === 'object') {
      return theme.palette.getContrastText(color.main)
    } else if (typeof color === 'string') {
      return theme.palette.getContrastText(color)
    } else {
      return theme.palette.text.primary
    }
  }

  return (
    <>
      <Container maxWidth="lg">
        {colorGroups.map(colorGroup => (
          <Box key={colorGroup}>
            <Typography
              mt={2}
              mb={0.5}
              fontSize={14}
              fontWeight={700}
              color={theme.palette.grey[700]}
            >
              {colorGroup !== 'action' && colorGroup !== 'background'
                ? colorGroup
                : null}
            </Typography>
            <Grid container spacing={2} gap={2}>
              {Object.keys(
                theme.palette[colorGroup as keyof Palette] as
                  | PaletteColor
                  | CommonColors,
              ).map((shade: string) => {
                const color =
                  theme.palette[colorGroup as keyof Palette]?.[
                    shade as keyof (PaletteColor | CommonColors)
                  ]

                return (
                  <Grid item key={shade}>
                    {colorGroup !== 'action' &&
                    shade !== 'paper' &&
                    shade !== 'default' &&
                    color ? (
                      <Box
                        style={{
                          backgroundColor: color,
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '10px',
                          borderRadius: '5px',
                          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.25)',
                        }}
                      >
                        <Typography
                          fontSize={14}
                          fontWeight={500}
                          style={{
                            color: getContrastTextColor(color),
                          }}
                        >
                          {shade} : {color}
                        </Typography>
                      </Box>
                    ) : null}
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        ))}
        {/* Add */}
        <Typography
          mt={3}
          mb={1}
          fontSize={14}
          fontWeight={700}
          color={theme.palette.grey[700]}
        >
          palette others
        </Typography>
        <Box display="flex" gap={2}>
          <BoxStyled
            style={{
              backgroundColor: theme.palette.divider,
            }}
          >
            <TextStyled>divider {theme.palette.divider}</TextStyled>
          </BoxStyled>
          <BoxStyled
            style={{
              backgroundColor: theme.palette.background.default,
            }}
          >
            <TextStyled>
              background.default {theme.palette.background.default}
            </TextStyled>
          </BoxStyled>
          <BoxStyled
            style={{
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <TextStyled>
              background.paper {theme.palette.background.paper}
            </TextStyled>
          </BoxStyled>
        </Box>
        {/* Add Custom */}
        <Typography
          mt={4}
          mb={1}
          fontSize={14}
          fontWeight={700}
          color={theme.palette.grey[700]}
        >
          palette surfaceBackground
        </Typography>
        <Box display="flex" gap={2}>
          <BoxStyled
            style={{
              backgroundColor: theme.palette.surfaceBackground,
            }}
          >
            <TextStyled>
              surfaceBackground {theme.palette.surfaceBackground}
            </TextStyled>
          </BoxStyled>
          <BoxStyled
            style={{
              backgroundColor: theme.palette.surfaceBackgroundDark,
            }}
          >
            <TextStyled
              style={{
                color: 'white',
              }}
            >
              surfaceBackgroundDark {theme.palette.surfaceBackgroundDark}
            </TextStyled>
          </BoxStyled>
          <BoxStyled
            style={{
              backgroundColor: theme.palette.surfaceBackgroundDisabled,
            }}
          >
            <TextStyled>
              surfaceBackgroundDisabled{' '}
              {theme.palette.surfaceBackgroundDisabled}
            </TextStyled>
          </BoxStyled>
        </Box>
        <Typography
          mt={4}
          mb={1}
          fontSize={14}
          fontWeight={700}
          color={theme.palette.grey[700]}
        >
          icon palette
        </Typography>
        <Box display="flex" gap={2}>
          {/* //  iconLight: colorData.icon.light, iconDark: colorData.icon.dark,
          iconAction: colorData.icon.action, iconDisabled: colorData.icon.disabled, */}
          <BoxStyled
            style={{
              backgroundColor: theme.palette.iconWhite,
            }}
          >
            <TextStyled>iconWhite {theme.palette.iconWhite}</TextStyled>
          </BoxStyled>
          <BoxStyled
            style={{
              backgroundColor: theme.palette.iconLight,
            }}
          >
            <TextStyled
              style={{
                color: 'white',
              }}
            >
              iconLight {theme.palette.iconLight}
            </TextStyled>
          </BoxStyled>
          <BoxStyled
            style={{
              backgroundColor: theme.palette.iconDark,
            }}
          >
            <TextStyled
              style={{
                color: 'white',
              }}
            >
              iconDark {theme.palette.iconDark}
            </TextStyled>
          </BoxStyled>
          <BoxStyled
            style={{
              backgroundColor: theme.palette.iconAction,
            }}
          >
            <TextStyled>iconAction {theme.palette.iconAction}</TextStyled>
          </BoxStyled>
          <BoxStyled
            style={{
              backgroundColor: theme.palette.iconDisabled,
            }}
          >
            <TextStyled>iconDisabled {theme.palette.iconDisabled}</TextStyled>
          </BoxStyled>
        </Box>
      </Container>
    </>
  )
}

export default Color
