import { globalStyle } from '@vanilla-extract/css'
import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#fcfffb',
    black: '#222222',
    kleinBlue: '#002FA7',
    lightKleinBlue: '#0f46d1',
    orange: '#ef6513',
    grey: '#979795',
  },
  font: {
    nanumMyengjo: 'var(--font-nanum-myengjo)',
    noto: 'var(--font-noto-serif-display)',
    notoArabic: 'var(--font-noto-kufi-arabic)',
    oldStandard: 'var(--font-old-standard-tt)',
    syne: 'var(--font-syne)',
  },
})

export const media = {
  mobile: '768px',
  tablet: '992px',
  desktop: '1920px',
}

export const sizes = {
  font: {
    xs: '8px',
    s: '12px',
    m: '16px',
    l: '24px',
    xl: '36px',
    xxl: '48px',
  },
  padding: {
    xs: '2px',
    s: '5px',
    m: '10px',
    l: '18px',
    xl: '50px',
    xxl: '90px',
    desktop: '30px 45px',
    mobile: '20px',
    mobileFooter: '20px',
    desktopFooter: '30px 90px',
  },
  margin: {
    xs: '5px',
    s: '10px',
    m: '15px',
    l: '20px',
  },
  gap: {
    xs: '5px',
    s: '10px',
    m: '20px',
    l: '30px',
  },
}

export const ZIndex = {
  low: 0,
  mid: 49,
  high: 99,
  max: 999,
}

globalStyle('body', {
  overflowX: 'hidden',
  margin: `0px 0px ${sizes.margin.l} 0px`,
  padding: 0,
  lineHeight: 1.8,
})

globalStyle('h1', {
  fontFamily: vars.font.syne,
  textTransform: 'uppercase',
  color: vars.color.kleinBlue,
  fontSize: sizes.font.s,
  '@media': {
    [`screen and (min-width: ${media.mobile})`]: {
      fontSize: sizes.font.xl,
      margin: 0,
    },
  },
})

globalStyle('h2', {})

globalStyle('li', {
  listStyleType: 'none',
})

globalStyle('button', {})
