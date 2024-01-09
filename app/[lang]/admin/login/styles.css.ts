import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '50vh',
})

export const field = style({
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.black}`,
  borderRadius: '2px',
  fontFamily: vars.font.noto,
  fontSize: sizes.font.s,
  marginBottom: '10px',
  padding: '10px',
  textTransform: 'lowercase',
  width: '300px',
})

export const formLabel = style({
  color: vars.color.black,
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
  color: vars.color.black,
  border: 'none',
  fontFamily: vars.font.noto,
  fontSize: sizes.font.s,
  textDecoration: 'none',
})
