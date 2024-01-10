import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  backgroundColor: vars.color.white,
  border: 'none',
  borderRadius: '2px',
  cursor: 'pointer',
  fontFamily: vars.font.playfair,
  height: '40px',
  padding: '10px',
  textTransform: 'lowercase',
})

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100vw',
})

export const nameField = style({
  width: '300px',
  padding: '10px',
  borderRadius: '2px',
  border: 'none',
  backgroundColor: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
})

export const textField = style({
  width: '300px',
  height: '100px',
  padding: '10px',
  borderRadius: '2px',
  border: 'none',
  backgroundColor: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
  resize: 'none',
})

export const inputInfo = style({
  color: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
  marginBottom: '20px',
})

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const formLabel = style({
  color: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.l,
  marginBottom: '10px',
})

export const info = style({
  color: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
  marginBottom: '40px',
})

export const formWrapper = style({
  alignItems: 'center',
  backgroundColor: vars.color.orange,
  display: 'flex',
  height: '450px',
  justifyContent: 'center',
  width: '100vw',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      width: '1350px',
    },
  },
})
