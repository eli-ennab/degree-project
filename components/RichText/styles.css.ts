import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { recipe } from '@vanilla-extract/recipes'

export const wrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: vars.font.playfair,
    fontSize: sizes.font.m,
  },
  variants: {
    alignment: {
      left: {
        '@media': {
          [`screen and (min-width: ${media.tablet})`]: {
            alignItems: 'flex-start',
            paddingLeft: '10vw',
          },
        },
      },
      center: {
        '@media': {
          [`screen and (min-width: ${media.tablet})`]: {
            alignItems: 'center',
          },
        },
      },
      right: {
        '@media': {
          [`screen and (min-width: ${media.tablet})`]: {
            alignItems: 'flex-end',
            paddingRight: '10vw',
          },
        },
      },
    },
  },
})

export const container = recipe({
  base: {
    alignItems: 'center',
    borderRadius: sizes.padding.xs,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: sizes.margin.s,
    maxWidth: '1350px',
    padding: sizes.padding.l,
  },
  variants: {
    width: {
      narrow: {
        '@media': {
          [`screen and (min-width: ${media.tablet})`]: {
            width: '300px',
          },
        },
      },
      regular: {
        '@media': {
          [`screen and (min-width: ${media.tablet})`]: {
            width: '500px',
          },
        },
      },
      extended: {
        '@media': {
          [`screen and (min-width: ${media.tablet})`]: {
            width: '700px',
          },
        },
      },
      wide: {
        '@media': {
          [`screen and (min-width: ${media.tablet})`]: {
            width: '900px',
          },
        },
      },
      full: {
        '@media': {
          [`screen and (min-width: ${media.tablet})`]: {
            width: '1350px',
          },
        },
      },
    },
  },
})
