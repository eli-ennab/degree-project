import { style } from '@vanilla-extract/css'
import { media, sizes, vars } from '../../vanilla_extract/styles.css'

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  padding: sizes.padding.mobile,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: sizes.padding.desktop,
    },
  },
})

export const link = style({
  cursor: 'pointer',
  color: vars.color.black,
  textDecoration: 'none',
  transition: 'transform 1s ease-out',
  ':hover': {
    color: vars.color.orange,
  },
  ':active': {
    transform: 'scale(0.8)',
  },
})

export const links = style({
  fontFamily: vars.font.noto,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'right',
  textDecoration: 'none',
  textTransform: 'lowercase',
  fontSize: sizes.font.s,
  margin: 0,
  '@media': {
    [`screen and (min-width: ${media.mobile})`]: {
      fontSize: sizes.font.m,
    },
  },
})

export const title = style({
  cursor: 'pointer',
  transition: 'transform 1s ease-out',
  ':hover': {
    transform: 'scale(1.05)',
  },
  ':active': {
    transform: 'scale(0.8)',
  },
})
