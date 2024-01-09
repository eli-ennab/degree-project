import { sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '60vh',
})

export const lock = style({
  color: vars.color.gray,
  fontSize: sizes.font.l,
})
