import { style } from '@vanilla-extract/css'
import { sizes, vars } from '@/vanilla_extract/styles.css'

export const loader = style({
  alignItems: 'center',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  position: 'fixed',
  width: '100vw',
})

export const text = style({
  color: vars.color.black,
  fontFamily: vars.font.noto,
  fontSize: sizes.font.s,
})
