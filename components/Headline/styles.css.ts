import { sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '60vh',
})

export const headLine = recipe({
  base: {
    fontSize: sizes.font.xl,
    color: vars.color.white,
  },
  variants: {
    textAlign: {
      sv: { textAlign: 'left', textTransform: 'lowercase' },
      fa: { textAlign: 'right' },
    },
  },
})
