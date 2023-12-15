import { recipe } from '@vanilla-extract/recipes'

export const headLine = recipe({
  base: {},
  variants: {
    textAlign: {
      sv: { textAlign: 'left' },
      fa: { textAlign: 'right' },
    },
  },
})
