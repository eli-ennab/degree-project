import { ZIndex, media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  bottom: '0px',
  height: sizes.padding.l,
  padding: sizes.padding.mobileFooter,
  position: 'fixed',
  width: '100vw',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: sizes.padding.desktopFooter,
    },
  },
})

export const key = style({
  color: vars.color.gray,
  fontSize: sizes.font.l,
})

export const link = style({
  backgroundColor: vars.color.white,
  color: vars.color.black,
  fontFamily: vars.font.noto,
  fontSize: sizes.font.s,
  left: sizes.padding.l,
  position: 'fixed',
  textDecoration: 'none',
  zIndex: ZIndex.high,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      left: sizes.padding.xxl,
    },
  },
})

export const arrow = style({
  bottom: '10px',
  color: vars.color.black,
  cursor: 'pointer',
  fontSize: sizes.font.l,
  padding: sizes.padding.l,
  position: 'fixed',
  right: '10px',
  zIndex: ZIndex.high,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      right: sizes.padding.xl,
    },
  },
})
