import { vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

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
  fontSize: '12px',
  border: 'none',
  padding: '10px',
  display: 'flex',
})
