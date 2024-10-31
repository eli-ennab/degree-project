import { globalStyle } from '@vanilla-extract/css'
import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#fcfffb',
    black: '#222222',
    kleinBlue: '#022CA1',
    orange: '#ef6513',
    gray: '#979795',
    lightGray: '#dcdcdc',
  },
  font: {
    alegreya: 'var(--font-alegreya)',
    libreBaskerville: 'var(--font-libre-baskerville)',
    nanumMyengjo: 'var(--font-nanum-myengjo)',
    noto: 'var(--font-noto-serif-display)',
    playfair: 'var(--font-playfair-display)',
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
    xs: '10px',
    s: '12px',
    m: '16px',
    l: '24px',
    xl: '36px',
    xxl: '48px',
  },
  padding: {
    xxs: '1px',
    xs: '2px',
    s: '5px',
    m: '10px',
    l: '18px',
    xl: '50px',
    xxl: '90px',
    desktop: '30px 45px',
    mobile: '10px',
    mobileFooter: '20px',
    desktopFooter: '30px 90px',
  },
  margin: {
    xs: '5px',
    s: '10px',
    m: '15px',
    l: '20px',
    xl: '40px',
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
  top: 1000,
}

globalStyle('body', {
  overflowX: 'hidden',
  margin: `0px 0px ${sizes.margin.l} 0px`,
  padding: 0,
  lineHeight: 1.8,
  scrollBehavior: 'smooth',
})

globalStyle('li', {
  listStyleType: 'none',
})
