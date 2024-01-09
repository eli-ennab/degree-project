import { ZIndex, media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  backgroundColor: vars.color.white,
  border: 'none',
  color: vars.color.black,
  cursor: 'pointer',
  fontFamily: vars.font.noto,
  fontSize: sizes.font.s,
})

export const container = style({
  bottom: '0px',
  height: sizes.padding.l,
  padding: sizes.padding.mobileFooter,
  position: 'fixed',
  zIndex: ZIndex.max,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: sizes.padding.desktopFooter,
    },
  },
})

export const link = style({
  border: 'none',
  color: vars.color.black,
  fontFamily: vars.font.noto,
  fontSize: sizes.font.s,
  textDecoration: 'none',
})
