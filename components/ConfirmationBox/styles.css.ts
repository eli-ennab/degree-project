import { sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const cancelButton = style({
  backgroundColor: 'red',
  border: 'none',
  color: vars.color.white,
  cursor: 'pointer',
  fontFamily: vars.font.playfair,
  margin: sizes.margin.s,
  padding: sizes.padding.m,
  textTransform: 'lowercase',
})

export const close = style({
  cursor: 'pointer',
  fontSize: sizes.font.l,
  position: 'fixed',
  top: '30px',
  right: '30px',
  ':hover': {
    color: vars.color.black,
  },
})

export const confirmButton = style({
  backgroundColor: vars.color.black,
  border: 'none',
  color: vars.color.white,
  cursor: 'pointer',
  fontFamily: vars.font.playfair,
  margin: sizes.margin.s,
  padding: sizes.padding.m,
  textTransform: 'lowercase',
})

export const wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'rgba(151, 151, 149, 0.8)',
  width: '100vw',
  height: '100%',
  position: 'fixed',
  top: '0px',
  left: '0px',
})
