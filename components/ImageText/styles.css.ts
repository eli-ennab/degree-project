import { media, vars } from '@/vanilla_extract/styles.css'
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
    fontSize: '16px',
  },
  variants: {
    textAlign: {
      sv: { textAlign: 'left' },
      fa: { textAlign: 'right' },
    },
  },
})
