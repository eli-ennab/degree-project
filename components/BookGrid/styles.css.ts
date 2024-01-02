import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const grid = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '80vh',
  padding: sizes.padding.l,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {},
  },
})
