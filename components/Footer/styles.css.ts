import { ZIndex, media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100vw',
  height: sizes.padding.l,
  position: 'fixed',
  bottom: '0px',
  padding: sizes.padding.mobileFooter,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: sizes.padding.desktopFooter,
    },
  },
})

export const link = style({
  backgroundColor: vars.color.white,
  position: 'fixed',
  left: sizes.padding.l,
  zIndex: ZIndex.high,
  fontFamily: vars.font.noto,
  color: vars.color.black,
  fontSize: sizes.font.s,
  textDecoration: 'none',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      left: sizes.padding.xxl,
    },
  },
})

export const arrow = style({
  backgroundColor: vars.color.white,
  position: 'fixed',
  right: '10px',
  zIndex: ZIndex.high,
  cursor: 'pointer',
  color: vars.color.black,
  fontSize: sizes.font.m,
  padding: sizes.padding.s,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      right: sizes.padding.xxl,
    },
  },
})
