import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

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

export const text = style({
  color: vars.color.gray,
  fontFamily: vars.font.nanumMyengjo,
  fontSize: sizes.font.xs,
  padding: `0px ${sizes.padding.s} 0px 0px`,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: `${sizes.padding.s} 0px`,
    },
  },
})
