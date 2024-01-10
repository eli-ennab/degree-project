import { sizes } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const grid = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '80vh',
  padding: sizes.padding.l,
})
