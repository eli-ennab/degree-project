import { style } from '@vanilla-extract/css'
import { ZIndex, media, sizes, vars } from '@/vanilla_extract/styles.css'
import { recipe } from '@vanilla-extract/recipes'

export const button = style({
  background: 'none',
  border: 'none',
  padding: sizes.padding.m,
  zIndex: ZIndex.top,
})

export const container = style({
  alignItems: 'flex-end',
  display: 'flex',
  justifyContent: 'space-between',
  padding: sizes.padding.mobile,
  minHeight: '80px',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: sizes.padding.desktop,
      minHeight: '110px',
    },
  },
})

export const link = style({
  cursor: 'pointer',
  color: vars.color.black,
  textDecoration: 'none',
  transition: 'transform 1s ease-out',
  ':hover': {
    color: vars.color.orange,
  },
  ':active': {
    transform: 'scale(0.8)',
  },
})

export const links = style({
  display: 'flex',
  fontFamily: vars.font.alegreya,
  flexDirection: 'column',
  textAlign: 'right',
  textDecoration: 'none',
  margin: 0,
  fontSize: sizes.font.l,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      fontSize: sizes.font.m,
    },
  },
})

export const menuIcon = style({
  color: vars.color.black,
  fontSize: sizes.font.l,
})

export const navigation = recipe({
  base: {},
  variants: {
    screen: {
      mobile: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: ZIndex.max,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      desktop: {},
    },
    state: {
      open: {},
      closed: {},
    },
  },
})

export const logo = recipe({
  base: {
    cursor: 'pointer',
    fontFamily: vars.font.alegreya,
    color: vars.color.kleinBlue,
    fontSize: sizes.font.m,
    margin: 0,
    padding: sizes.padding.m,
  },
  variants: {
    fontSize: {
      fa: {
        fontSize: sizes.font.l,
        '@media': {
          [`screen and (min-width: ${media.tablet})`]: {
            fontSize: sizes.font.xl,
          },
        },
      },
      sv: {
        fontSize: sizes.font.m,
        '@media': {
          [`screen and (min-width: ${media.tablet})`]: {
            fontSize: sizes.font.xl,
          },
        },
      },
    },
  },
})
