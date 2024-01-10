import { style } from '@vanilla-extract/css'
import { media, sizes, vars } from '../../vanilla_extract/styles.css'

export const container = style({
  alignItems: 'flex-end',
  display: 'flex',
  justifyContent: 'space-between',
  padding: sizes.padding.mobile,
  minHeight: '110px',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: sizes.padding.desktop,
      minHeight: '110px',
    },
  },
})

export const icon = style({
  color: vars.color.gray,
  fontSize: sizes.font.s,
  padding: '0px 0px 8px 0px',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      fontSize: sizes.font.m,
      padding: '0px 60px 20px 0px',
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
  display: 'flex',
  fontFamily: vars.font.noto,
  flexDirection: 'column',
  fontSize: sizes.font.s,
  textAlign: 'right',
  textDecoration: 'none',
  textTransform: 'lowercase',
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
