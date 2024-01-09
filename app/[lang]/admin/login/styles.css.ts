import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  cursor: 'pointer',
  width: '100px',
  padding: '10px',
  borderRadius: '2px',
  border: `1px solid ${vars.color.black}`,
  backgroundColor: vars.color.white,
  fontFamily: vars.font.noto,
  textTransform: 'lowercase',
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '50vh',
})

export const field = style({
  width: '300px',
  padding: '10px',
  borderRadius: '2px',
  border: `1px solid ${vars.color.black}`,
  backgroundColor: vars.color.white,
  marginBottom: '10px',
  fontSize: sizes.font.s,
  textTransform: 'lowercase',
  fontFamily: vars.font.noto,
})

export const formLabel = style({
  fontFamily: vars.font.syne,
  textTransform: 'uppercase',
  color: vars.color.black,
  fontSize: sizes.font.m,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      fontSize: sizes.font.l,
    },
  },
})

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '50vw',
  height: '200px',
  color: vars.color.white,
  padding: sizes.padding.m,
  gap: sizes.gap.m,
})

export const link = style({
  fontFamily: vars.font.noto,
  color: vars.color.black,
  textDecoration: 'none',
  fontSize: sizes.font.s,
  border: 'none',
})
