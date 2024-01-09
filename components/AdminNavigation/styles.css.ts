import { ZIndex, media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  cursor: 'pointer',
  backgroundColor: vars.color.white,
  border: 'none',
  fontFamily: vars.font.noto,
  color: vars.color.black,
  fontSize: sizes.font.s,
})

export const container = style({
  height: sizes.padding.l,
  position: 'fixed',
  bottom: '0px',
  padding: sizes.padding.mobileFooter,
  zIndex: ZIndex.max,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: sizes.padding.desktopFooter,
    },
  },
})

export const link = style({
  fontFamily: vars.font.noto,
  color: vars.color.black,
  textDecoration: 'none',
  fontSize: sizes.font.s,
  border: 'none',
})
