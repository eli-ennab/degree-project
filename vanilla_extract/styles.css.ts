import { globalStyle } from '@vanilla-extract/css'
import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#ffffff',
    black: '#1d1d1d',
    kleinBlue: '#002FA7',
    lightKleinBlue: '#0f46d1',
  },
  font: {
    syne: 'var(--font-syne)',
    noto: 'var(--font-noto)',
  },
})

export const media = {
  mobile: '768px',
  tablet: '992px',
  desktop: '1920px',
}

globalStyle('body', {
  backgroundImage: 'url("/background_3.png")',
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  overflowX: 'hidden',
  margin: 0,
  padding: 0,
})

globalStyle('h1', {
  fontFamily: vars.font.syne,
  textTransform: 'uppercase',
  color: vars.color.kleinBlue,
  fontSize: '12px',
  '@media': {
    [`screen and (min-width: ${media.mobile})`]: {
      fontSize: '24px',
    },
  },
})

globalStyle('h2', {
  fontFamily: vars.font.noto,
  fontSize: '16px',
  color: vars.color.kleinBlue,
})

globalStyle('li', {
  fontFamily: vars.font.noto,
  fontSize: '16px',
  color: vars.color.kleinBlue,
})

globalStyle('button', {
  fontFamily: vars.font.noto,
  textTransform: 'lowercase',
  fontSize: '12px',
  color: vars.color.black,
  cursor: 'pointer',
  border: 'none',
  padding: '5px 30px',
})
