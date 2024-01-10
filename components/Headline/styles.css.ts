import { sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  alignItems: 'center',
  borderRadius: '2px',
  display: 'flex',
  height: '10vh',
  justifyContent: 'center',
  width: '100vw',
})

export const headLine = recipe({
  base: {
    fontFamily: vars.font.noto,
    fontSize: sizes.font.l,
    padding: '0px 10px',
  },
  variants: {
    textAlign: {
      fa: { textAlign: 'right' },
      sv: { textAlign: 'left', textTransform: 'lowercase' },
    },
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
    color: {
      orange: {
        color: vars.color.orange,
      },
      black: {
        color: vars.color.black,
      },
      blue: {
        color: vars.color.kleinBlue,
      },
      white: {
        color: vars.color.white,
      },
      gray: {
        color: vars.color.gray,
      },
    },
  },
})
