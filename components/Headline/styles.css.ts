import { sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const headLine = recipe({
  base: {
    alignItems: 'center',
    borderRadius: sizes.padding.xs,
    display: 'flex',
    height: '10vh',
    justifyContent: 'center',
    width: '100vw',
    padding: `${sizes.padding.l} 0px`,
    fontFamily: vars.font.libreBaskerville,
    fontSize: sizes.font.l,
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
      lightGray: {
        backgroundColor: vars.color.lightGray,
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
      lightGray: {
        backgroundColor: vars.color.lightGray,
      },
    },
  },
})
