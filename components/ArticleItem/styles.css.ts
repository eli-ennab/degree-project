import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  color: vars.color.black,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      display: 'flex',
      margin: `${sizes.margin.l} 0px`,
    },
  },
})

export const image = style({
  objectFit: 'cover',
})

export const imageContainer = style({
  display: 'flex',
  justifyContent: 'center',
  margin: sizes.margin.l,
  transition: 'opacity 3s ease-in-out',
  cursor: 'pointer',
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

export const textContainer = style({
  fontFamily: vars.font.nanumMyengjo,
  fontSize: sizes.font.m,
  padding: `${sizes.padding.s} 0px`,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: `${sizes.padding.s} ${sizes.padding.m}`,
      width: '60%',
    },
  },
})

export const title = style({
  fontFamily: vars.font.libreBaskerville,
  fontSize: sizes.font.l,
})
