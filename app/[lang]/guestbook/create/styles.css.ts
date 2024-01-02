import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  cursor: 'pointer',
  padding: '10px',
  width: '300px',
  height: '40px',
  borderRadius: '2px',
  border: 'none',
  backgroundColor: vars.color.white,
  fontFamily: vars.font.noto,
})

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100vw',
})

export const field = style({
  width: '300px',
  padding: '10px',
  borderRadius: '2px',
  border: 'none',
  backgroundColor: vars.color.white,
  marginBottom: '20px',
  fontFamily: vars.font.noto,
  fontSize: sizes.font.s,
})

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const formLabel = style({
  fontFamily: vars.font.noto,
  fontSize: sizes.font.l,
  color: vars.color.white,
  marginBottom: '20px',
})

export const info = style({
  fontFamily: vars.font.noto,
  fontSize: sizes.font.s,
  color: vars.color.white,
  marginBottom: '40px',
})

export const formWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.color.orange,
  height: '450px',
  width: '100vw',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      width: '1350px',
    },
  },
})
