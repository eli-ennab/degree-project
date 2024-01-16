import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  color: vars.color.black,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      display: 'flex',
      flexDirection: 'row',
      height: '450px',
      margin: '20px 0px',
      top: '50px',
      width: '1350px',
    },
  },
})

export const image = style({
  display: 'flex',
  justifyContent: 'center',
  margin: '25px',
  objectFit: 'cover',
  transition: 'opacity 3s ease-in-out',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      cursor: 'pointer',
      transition: 'transform 0.5s ease-in-out',
      ':hover': {
        opacity: 0.95,
        transform: 'scale(1.02)',
      },
      ':active': {
        opacity: 0.95,
        transform: 'scale(0.95)',
      },
    },
  },
})

export const link = style({
  cursor: 'pointer',
  color: vars.color.gray,
  padding: `${sizes.padding.s} 0px`,
  transition: 'transform 1s ease-out',
  textDecoration: 'none',
  ':hover': {
    color: vars.color.orange,
  },
  ':active': {
    transform: 'scale(0.8)',
  },
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: `${sizes.padding.s} ${sizes.padding.m}`,
    },
  },
})

export const text = recipe({
  base: {
    fontFamily: vars.font.nanumMyengjo,
    fontSize: sizes.font.m,
    padding: `${sizes.padding.s} 0px`,
    '@media': {
      [`screen and (min-width: ${media.tablet})`]: {
        padding: `${sizes.padding.s} ${sizes.padding.m}`,
      },
    },
  },
  variants: {
    textAlign: {
      fa: { textAlign: 'right' },
      sv: { textAlign: 'left' },
    },
  },
})

export const title = style({
  textTransform: 'uppercase',
  fontFamily: vars.font.syne,
  fontSize: sizes.font.m,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: `${sizes.padding.s} ${sizes.padding.m}`,
    },
  },
})
