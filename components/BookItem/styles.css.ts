import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  margin: '20px 0px',
  color: vars.color.black,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      top: '50px',
      height: '450px',
      width: '1350px',
      display: 'flex',
      flexDirection: 'row',
    },
  },
})

export const image = style({
  display: 'flex',
  justifyContent: 'center',
  margin: '25px',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      cursor: 'pointer',
      transition: 'transform 0.5s ease-in-out',
      ':hover': {
        transform: 'scale(1.02)',
        opacity: 0.95,
      },
      ':active': {
        transform: 'scale(0.95)',
        opacity: 0.95,
      },
    },
  },
})

export const text = recipe({
  base: {
    fontSize: sizes.font.m,
    fontFamily: vars.font.nanumMyengjo,
    padding: `${sizes.padding.m} ${sizes.padding.l}`,
    '@media': {
      [`screen and (min-width: ${media.tablet})`]: {},
    },
  },
  variants: {
    textAlign: {
      sv: { textAlign: 'left' },
      fa: { textAlign: 'right' },
    },
  },
})

export const title = style({
  padding: `${sizes.padding.m} ${sizes.padding.l}`,
  fontSize: sizes.font.l,
  fontFamily: vars.font.nanumMyengjo,
})
