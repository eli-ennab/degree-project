import { style } from '@vanilla-extract/css'
import { vars } from '@/vanilla_extract/styles.css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  margin: '30px 0px',
})

export const divider = recipe({
  base: {
    width: '50vw',
    height: '1px',
    border: 'none',
  },
  variants: {
    backgroundColor: {
      orange: {
        backgroundColor: vars.color.orange,
      },
      black: {
        backgroundColor: vars.color.black,
      },
      blue: {
        backgroundColor: vars.color.kleinBlue,
      },
      white: {
        backgroundColor: vars.color.white,
      },
      gray: {
        backgroundColor: vars.color.gray,
      },
    },
  },
})
