import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { recipe } from '@vanilla-extract/recipes'

export const wrapper = recipe({
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
      gray: {
        backgroundColor: vars.color.gray,
      },
      lightGray: {
        backgroundColor: vars.color.lightGray,
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
      gray: {
        color: vars.color.gray,
      },
      lightGray: {
        backgroundColor: vars.color.lightGray,
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
    fontFamily: vars.font.playfair,
    fontSize: sizes.font.m,
  },
  variants: {
    textAlign: {
      fa: { textAlign: 'right' },
      sv: { textAlign: 'left' },
    },
  },
})
