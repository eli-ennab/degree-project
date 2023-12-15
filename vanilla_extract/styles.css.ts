import { globalStyle } from '@vanilla-extract/css'
import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#ffffff',
    black: '#1d1d1d',
    kleinBlue: '#002FA7',
  },
  font: {
    syne: 'var(--font-syne)',
    noto: 'var(--font-noto)',
  },
})

globalStyle('body', {
  backgroundImage: 'url("/background_1.png")',
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  width: '100vw',
  minHeight: '100%',
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
})

globalStyle('h1', {
  margin: 0,
  color: vars.color.kleinBlue,
  fontFamily: vars.font.syne,
  textTransform: 'uppercase',
  fontSize: '24px',
})

globalStyle('li', {
  color: vars.color.kleinBlue,
  fontFamily: vars.font.noto,
  fontSize: '16px',
})

globalStyle('button', {
  backgroundColor: vars.color.kleinBlue,
  color: vars.color.white,
  fontFamily: vars.font.syne,
  textTransform: 'uppercase',
  fontSize: '12px',
  border: 'none',
  padding: '10px',
})

globalStyle('a', {
  backgroundColor: vars.color.kleinBlue,
  color: vars.color.white,
  fontFamily: vars.font.syne,
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontSize: '12px',
  border: 'none',
  padding: '10px',
})
