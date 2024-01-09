import { sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '70vh',
})

export const field = style({
  fontFamily: vars.font.noto,
  fontSize: sizes.font.s,
  textTransform: 'lowercase',
  padding: sizes.padding.s,
  border: '1px solid lightgrey',
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
