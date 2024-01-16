import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  color: vars.color.black,
  margin: `${sizes.margin.l} 0px`,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      display: 'flex',
      flexDirection: 'row',
      height: '450px',
      top: sizes.padding.xl,
      width: '1350px',
    },
  },
})
