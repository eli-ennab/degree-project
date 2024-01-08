import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const blokWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1350px',
    margin: '10px',
    padding: '20px',
  },
  variants: {
    backgroundColor: {
      orange: {
        backgroundColor: vars.color.orange,
      },
      black: {
        backgroundColor: vars.color.black,
      },
      blue: {
        backgroundColor: vars.color.kleinBlue,
      },
      white: {
        backgroundColor: vars.color.white,
      },
    },
    color: {
      orange: {
        color: vars.color.orange,
      },
      black: {
        color: vars.color.black,
      },
      blue: {
        color: vars.color.kleinBlue,
      },
      white: {
        color: vars.color.white,
      },
    },
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

export const text = recipe({
  base: {
    fontFamily: vars.font.noto,
    fontSize: sizes.font.m,
  },
  variants: {
    textAlign: {
      sv: { textAlign: 'left' },
      fa: { textAlign: 'right' },
    },
  },
})
