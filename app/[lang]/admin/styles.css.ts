import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '90vh',
})

export const link = style({
  position: 'relative',
  top: sizes.padding.l,
  color: vars.color.gray,
  border: 'none',
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.m,
  textDecoration: 'none',
  padding: sizes.padding.mobileFooter,
  ':hover': {
    color: vars.color.black,
  },
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: sizes.padding.desktopFooter,
    },
  },
})

export const lock = style({
  color: vars.color.gray,
  fontSize: sizes.font.l,
})
