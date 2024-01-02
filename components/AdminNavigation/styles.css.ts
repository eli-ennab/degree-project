import { sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  cursor: 'pointer',
  padding: '10px',
  height: '40px',
  borderRadius: '2px',
  border: '1px solid black',
  backgroundColor: vars.color.white,
  fontFamily: vars.font.noto,
})

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '10vh',
  width: '100vw',
})

export const link = style({
  fontFamily: vars.font.noto,
  color: vars.color.kleinBlue,
  textDecoration: 'none',
  fontSize: sizes.font.s,
  border: 'none',
  padding: sizes.padding.m,
  display: 'flex',
})
