import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const image = style({
  objectFit: 'cover',
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
