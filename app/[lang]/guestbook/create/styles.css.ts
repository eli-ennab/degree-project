import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  backgroundColor: vars.color.white,
  border: 'none',
  borderRadius: '2px',
  color: vars.color.black,
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
  padding: '10px',
  borderRadius: '2px',
  border: 'none',
  backgroundColor: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
  minWidth: '250px',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      width: '400px',
    },
  },
})

export const textField = style({
  height: '100px',
  padding: '10px',
  borderRadius: '2px',
  border: 'none',
  backgroundColor: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
  resize: 'none',
  minWidth: '250px',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      width: '400px',
    },
  },
})

export const inputInfo = style({
  display: 'flex',
  justifyContent: 'flex-end',
  color: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
  minWidth: '250px',
  padding: '10px',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      width: '400px',
    },
  },
})

export const form = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const formLabel = style({
  color: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.l,
  margin: '15px 0px',
})

export const info = style({
  color: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
  padding: '0px 20px',
  marginBottom: '10px',
  maxWidth: '400px',
  textAlign: 'center',
})

export const formWrapper = style({
  alignItems: 'center',
  backgroundColor: vars.color.gray,
  display: 'flex',
  maxHeight: '600px',
  justifyContent: 'center',
  width: '100vw',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      maxWidth: '1350px',
    },
  },
})

export const responseMessage = style({
  color: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
  height: '10px',
})
