import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  backgroundColor: vars.color.white,
  border: 'none',
  borderRadius: sizes.padding.xs,
  color: vars.color.black,
  cursor: 'pointer',
  fontFamily: vars.font.playfair,
  height: '40px',
  padding: sizes.padding.m,
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
  padding: sizes.padding.m,
  borderRadius: sizes.padding.xs,
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
  padding: sizes.padding.m,
  borderRadius: sizes.padding.xs,
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
  padding: ` 0px 0px ${sizes.padding.m} 0px`,
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
  margin: `${sizes.margin.m} 0px`,
})

export const info = style({
  color: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
  padding: `0px ${sizes.padding.l} `,
  marginBottom: sizes.margin.s,
  maxWidth: '400px',
  textAlign: 'center',
})

export const formWrapper = style({
  alignItems: 'center',
  backgroundColor: vars.color.kleinBlue,
  display: 'flex',
  height: '75vh',
  justifyContent: 'center',
  width: '100vw',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      maxWidth: '1350px',
      maxHeight: '65vh',
    },
  },
})

export const responseMessage = style({
  color: vars.color.white,
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
})
