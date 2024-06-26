import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  backgroundColor: vars.color.white,
  border: `${sizes.padding.xxs} solid ${vars.color.black}`,
  borderRadius: sizes.padding.xs,
  color: vars.color.black,
  cursor: 'pointer',
  fontFamily: vars.font.playfair,
  height: '40px',
  padding: sizes.padding.m,
  textTransform: 'lowercase',
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '90vh',
})

export const error = style({
  color: 'red',
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
})

export const field = style({
  backgroundColor: vars.color.white,
  border: `${sizes.padding.xxs} solid ${vars.color.black}`,
  borderRadius: sizes.padding.xs,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
  marginBottom: sizes.margin.s,
  padding: sizes.padding.m,
  textTransform: 'lowercase',
  width: '300px',
})

export const formLabel = style({
  color: vars.color.gray,
  fontFamily: vars.font.syne,
  fontSize: sizes.font.m,
  textTransform: 'uppercase',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      fontSize: sizes.font.l,
    },
  },
})

export const formWrapper = style({
  alignItems: 'center',
  color: vars.color.white,
  display: 'flex',
  flexDirection: 'column',
  gap: sizes.gap.m,
  height: '200px',
  padding: sizes.padding.m,
  width: '50vw',
})

export const link = style({
  position: 'relative',
  top: sizes.margin.l,
  color: vars.color.gray,
  border: 'none',
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.m,
  textDecoration: 'none',
  padding: sizes.padding.mobileFooter,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: sizes.padding.desktopFooter,
    },
  },
})
