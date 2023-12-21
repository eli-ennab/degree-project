import { media, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const image = style({
  '@media': {
    [`screen and (min-width: ${media.mobile})`]: {
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
    fontSize: '12px',
    fontFamily: vars.font.noto,
  },
  variants: {
    textAlign: {
      sv: { textAlign: 'left' },
      fa: { textAlign: 'right' },
    },
  },
})

export const title = style({
  fontSize: '16px',
  fontFamily: vars.font.noto,
})
