// src/stories/Tokens/Typography/index.tsx
import { styled, useTheme } from '@mui/material/styles'
import { Divider, Typography, Box, Container, Button } from '@mui/material'
import { indigo } from '@mui/material/colors'
const display = indigo[200]
const noteText = indigo[600]
const displayTitle = indigo[900]

const sampleText = '日本語ひらがなカタカナ123abcABC@*^¥'

const TextStyledDisplay = styled(Typography)`
  font-weight: bold;
  color: ${display};
  font-size: 24px;
  margin-bottom: 16px;
`

const TextStyledVariant = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  color: ${displayTitle};
`

const TextStyledSmall = styled(Typography)`
  font-size: 12px;
  font-weight: bold;
  color: ${noteText};
  margin: 2px 4px 2px 10px;
`

const TextStyledSample = styled(Typography)`
  margin-bottom: 2px;
  border-left: 2px solid ${display};
  padding: 2px 8px;
  margin: 4px 4px 4px 10px;
`

const TextStyledNote = styled(Typography)`
  font-size: 14px;
  color: ${noteText};
  margin-bottom: 16px;
  margin: 8px 4px 4px 10px;
`

const Typographies = () => {
  const theme = useTheme()

  const typographyVariantsHeading = [
    {
      variant: 'h1',
      note: '現状はマークアップ用途のためロゴ画像に利用し、現在はそれ以外は利用していません',
    },
    {
      variant: 'h2',
      note: 'xlと同じ。大見出し用途。コンテンツ内の最も大きなテキストとなります。用途に意味合いを持たせない場合はxlでもかまいません',
    },
    {
      variant: 'h3',
      note: 'lgと同じ。中見出し用途。用途に意味合いを持たせない場合はlgでもかまいません',
    },
    {
      variant: 'h4',
      note: 'h3に次ぐ中見出し用途。ml + boldと同じです',
    },
    {
      variant: 'h5',
      note: '小見出し用途。md + boldと同じです',
    },
    {
      variant: 'h6',
      note: '小見出し用途。sm + boldと同じです',
    },
  ]

  const typographyVariants = [
    {
      variant: 'body1',
      note: 'デフォルトのスタイルを踏襲。主に本文用。variantに何も指定しない場合もbody1になります。これで少し大きく感じる場合はbody2を使います',
    },
    {
      variant: 'body2',
      note: 'body1より1回りに小さい本文用',
    },
    {
      variant: 'subtitle1',
      note: '主に大見出しに付随したサブタイトル用です',
    },
    {
      variant: 'subtitle2',
      note: '主に中見出しに付随したサブタイトル用です',
    },
    {
      variant: 'caption',
      note: '注意や注釈表示など、補足文用途、推奨として最小のフォントサイズとしても考えられます',
    },
    {
      variant: 'overline',
      note: '用途は確定していませんが、captionより少し小さいサイズとしています',
    },
    {
      variant: 'button',
      note: 'Buttonコンポーネントのデフォルトフォントサイズです',
    },
    {
      variant: 'inherit',
      note: 'inheritなので、親要素のフォントサイズを継承します。親要素のフォントサイズを変更する場合は、このvariantを指定します',
    },
  ]

  // 拡張variant
  const typographyVariantsExtended = [
    {
      variant: 'xxl',
      note: 'h1相当',
    },
    {
      variant: 'xl',
      note: 'h2相当',
    },
    {
      variant: 'lg',
      note: 'h3相当',
    },
    {
      variant: 'ml',
      note: 'h4相当の大きさで、normalの太さ。ブラウザ本来のサイズです',
    },
    {
      variant: 'md',
      note: 'デフォルトサイズで、body1相当',
    },
    {
      variant: 'sm',
      note: 'body2相当',
    },
    {
      variant: 'xs',
      note: '推奨の最低サイズで、汎用的な小さなテキストに使います',
    },
    {
      variant: 'xxs',
      note: '非推奨ですが、ブラウザ対応はしています。画数の多い漢字などでなければ一応読めるサイズです',
    },
    {
      variant: 'xxxs',
      note: '非推奨ですが、ブラウザ対応の最小サイズです。*もしユーザーがブラウザの最小フォントサイズを変更している場合は、ユーザー指定の最小フォントサイズ（12pxなど）になります',
    },
  ]

  type TypographyVariant = keyof typeof theme.typography

  // フォントサイズとline-heightを取得するためのヘルパー関数
  const getTypographyStyle = (variant: TypographyVariant) => {
    // @ts-ignore
    const style = theme.typography[variant] as any
    const fontSizeRem = style.fontSize
    const lineHeight = style.lineHeight
    // Parse float value from rem string and convert to px
    const fontSizeRemValue = parseFloat(fontSizeRem)
    const fontSizePx = (fontSizeRemValue * theme.typography.htmlFontSize).toFixed(0)
    const fontSize = `${fontSizeRem} (${fontSizePx}px相当)`
    return `font-size: ${fontSize}, line-height: ${lineHeight}`
  }

  //ページ内リンク用
  function handleClick(id: string) {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <Container sx={{ p: 1, m: 1 }} id="top">
        <Typography variant="h1">Typography variants</Typography>
        <Typography variant="subtitle1" mb={1}>
          現在のhtml基準フォントサイズ:
          <b style={{ color: 'tomato' }}>{theme.typography.fontSize}px</b>
        </Typography>
        {/* // 各TextStyledDisplayにパージ内リンクを設定 */}
        <Button variant="outlined" size="small" onClick={handleClick('heading')}>
          Heading
        </Button>
        <Button variant="outlined" size="small" sx={{ m: 1 }} onClick={handleClick('util')}>
          body + util
        </Button>
        <Button variant="outlined" size="small" onClick={handleClick('extended')}>
          Extended
        </Button>

        <>
          <TextStyledDisplay id="heading" mt={2}>
            Heading
          </TextStyledDisplay>
          <Typography variant="body2" mb={2}>
            Mui 見出し / h1以外は <code>{"variant='h(x)'"}</code>
            で見出しデザインを持った<code>div</code>
            となるため、マークアップ構造自体は気にしなくて良い仕組みです。
            <br />
            見出しは全て<b>太字</b>になります。
          </Typography>
          {typographyVariantsHeading.map(({ variant, note }) => (
            <Box key={variant} sx={{ marginBottom: 2 }}>
              <TextStyledVariant>{variant}</TextStyledVariant>
              <TextStyledSmall>{getTypographyStyle(variant as never)}</TextStyledSmall>
              <TextStyledSample variant={variant as never}>SampleText: {sampleText}</TextStyledSample>
              <TextStyledNote>{note}</TextStyledNote>
            </Box>
          ))}
        </>
        <Button variant="outlined" size="small" onClick={handleClick('top')}>
          To Top
        </Button>
        <Divider sx={{ my: 3 }} />
        {/* 本文 */}
        <>
          <TextStyledDisplay id="util">body + util</TextStyledDisplay>
          <Typography variant="body2">
            Mui 本文 / 見出しの下に使うサブタイトル / ユーティリティテキスト
            <br />
            <code>{"variant='body1'"}</code>はデフォルトとなり、何も指定しない
            <code>{'<Typography>テキスト</Typography>'}</code>
            と同じ結果になります。
            <br />
            そして現在はcss基準のbody要素よりも上のhtml要素に対して
            <span>{theme.typography.fontSize}px</span>
            を指定しているため、これが基準（1rem）となります。
          </Typography>
          <Typography variant="body2" mb={2}>
            要素対応リスト:
            <code>
              {`body1: 'p', body2: 'p', subtitle1: 'p', subtitle2: 'p', overline:'span', caption: 'span', button: 'p',`}
            </code>
          </Typography>
          {typographyVariants.map(({ variant, note }) => (
            <Box key={variant} sx={{ marginBottom: 2 }}>
              <TextStyledVariant>{variant}</TextStyledVariant>
              <TextStyledSmall>{getTypographyStyle(variant as never)}</TextStyledSmall>
              <TextStyledSample variant={variant as never}>SampleText: {sampleText}</TextStyledSample>
              <TextStyledNote>{note}</TextStyledNote>
            </Box>
          ))}
        </>
        <Button variant="outlined" size="small" onClick={handleClick('top')}>
          To Top
        </Button>
        <Divider sx={{ my: 3 }} />
        {/* 拡張variant */}
        <>
          <TextStyledDisplay id="extended">Extended variant</TextStyledDisplay>
          <Typography variant="body2">
            これはMuiから拡張した独自variantです。
            <br />
            抽象化されたvariantを使うことで、マークアップ構造を気にせずに汎用的なテキストを作成できます。
          </Typography>
          <Typography variant="body2" mb={2}>
            要素対応リスト:
            <code>{`xxl: 'div', xl: 'div', lg: 'div', ml: 'p', md: 'p', sm: 'p', xs: 'p', xxs: 'span', xxxs: 'span'`}</code>
          </Typography>

          {typographyVariantsExtended.map(({ variant, note }) => (
            <Box key={variant} sx={{ marginBottom: 2 }}>
              <TextStyledVariant>{variant}</TextStyledVariant>
              <TextStyledSmall>{getTypographyStyle(variant as never)}</TextStyledSmall>
              <TextStyledSample variant={variant as never}>SampleText: {sampleText}</TextStyledSample>
              <TextStyledNote>{note}</TextStyledNote>
            </Box>
          ))}
        </>
        <Button variant="outlined" size="small" onClick={handleClick('top')}>
          To Top
        </Button>
        <Divider sx={{ my: 3 }} />
      </Container>
    </>
  )
}

export default Typographies
