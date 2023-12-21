import { vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  backgroundColor: vars.color.white,
  width: '100vw',
  height: '20px',
  position: 'fixed',
  bottom: '0px',
  padding: '10px',
})

export const link = style({
  position: 'fixed',
  left: '10px',
  zIndex: 99,
  fontFamily: vars.font.noto,
  color: vars.color.kleinBlue,
  padding: '2px',
  fontSize: '12px',
  textDecoration: 'none',
})

export const arrow = style({
  position: 'fixed',
  right: '10px',
  zIndex: 99,
  cursor: 'pointer',
  color: vars.color.kleinBlue,
  fontSize: '12px',
  padding: '2px',
})
