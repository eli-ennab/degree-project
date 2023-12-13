import { createGlobalTheme } from '@vanilla-extract/css'
import { globalStyle } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#ffffff',
    black: '#1d1d1d',
  },
})

globalStyle('body', {
  width: '100vw',
  height: '100vh',
  boxSizing: 'border-box',
  margin: '0',
})

globalStyle('h1', {
  margin: 0,
  color: vars.color.white,
})
