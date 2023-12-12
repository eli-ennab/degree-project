import { style, globalStyle } from '@vanilla-extract/css'

export const container = style({
  backgroundColor: 'black',
  color: 'white',
  '@media': {
    'screen and (min-width: 768px)': {
      backgroundColor: 'white',
      color: 'black',
    },
  },
})

globalStyle('body', {
  margin: '0',
})
