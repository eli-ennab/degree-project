import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '80vh',
})

export const headLine = recipe({
  base: {
    fontSize: '36px',
  },
  variants: {
    textAlign: {
      sv: { textAlign: 'left', textTransform: 'lowercase' },
      fa: { textAlign: 'right' },
    },
  },
})
