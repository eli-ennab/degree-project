import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 0px',
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

export const headLine = recipe({
  base: {
    textAlign: 'center',
    display: 'flex',
    color: vars.color.white,
    fontSize: sizes.font.xxl,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  variants: {
    textAlign: {
      fa: { textAlign: 'right' },
      sv: {
        fontFamily: vars.font.playfair,
        textAlign: 'left',
        textTransform: 'lowercase',
      },
    },
  },
})

export const image = style({
  maxHeight: '80vh',
  maxWidth: '100vw',
  objectFit: 'cover',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      maxHeight: '70vh',
      maxWidth: '100vw',
    },
  },
})
