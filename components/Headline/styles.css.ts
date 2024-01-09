import { sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  alignItems: 'center',
  display: 'flex',
  height: '60vh',
  justifyContent: 'center',
  width: '100vw',
})

export const headLine = recipe({
  base: {
    color: vars.color.white,
    fontSize: sizes.font.xl,
  },
  variants: {
    textAlign: {
      fa: { textAlign: 'right' },
      sv: { textAlign: 'left', textTransform: 'lowercase' },
    },
  },
})
