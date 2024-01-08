import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 0px',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
})

export const headLine = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    fontSize: sizes.font.xxl,
    color: vars.color.white,
  },
  variants: {
    textAlign: {
      sv: {
        textAlign: 'left',
        textTransform: 'lowercase',
        fontFamily: vars.font.noto,
      },
      fa: { textAlign: 'right', fontFamily: vars.font.noto },
    },
  },
})

export const image = style({
  maxWidth: '100vw',
  maxHeight: '80vh',
  objectFit: 'cover',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      maxWidth: '100vw',
      maxHeight: '70vh',
    },
  },
})
