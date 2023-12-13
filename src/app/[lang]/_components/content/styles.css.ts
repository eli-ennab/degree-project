import { style } from '@vanilla-extract/css'
import { vars } from '../../vanilla_extract/styles.css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  display: 'flex',
  height: '90vh',
  justifyContent: 'center',
  alignItems: 'center',
})

export const span = recipe({
  base: {
    color: 'gray',
    width: '80%',
  },
  variants: {
    text: {
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },
  },
})
