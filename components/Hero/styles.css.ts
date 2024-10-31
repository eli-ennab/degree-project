import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    },
  },
})

export const image = style({
  maxHeight: '70vh',
  maxWidth: '100vw',
  objectFit: 'cover',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      maxHeight: '70vh',
      maxWidth: '100vw',
      objectFit: 'contain',
    },
  },
})

export const imageWrapper = style({
  alignItems: 'flex-end',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '80vh',
})
