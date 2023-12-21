import { style } from '@vanilla-extract/css'
import { vars } from '../../vanilla_extract/styles.css'

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  padding: '0px 10px',
})

export const link = style({
  cursor: 'pointer',
  color: vars.color.kleinBlue,
  textDecoration: 'none',
  transition: 'transform 0.3s ease-out',
  ':hover': {
    transform: 'scale(1.01)',
  },
  ':active': {
    transform: 'scale(0.99)',
  },
  ':visited': {
    color: vars.color.lightKleinBlue,
  },
})

export const links = style({
  fontFamily: vars.font.noto,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'right',
  listStyleType: 'none',
  textDecoration: 'none',
  textTransform: 'lowercase',
})

export const title = style({
  cursor: 'pointer',
  transition: 'transform 0.5s ease-in-out',
  ':hover': {
    transform: 'scale(1.02)',
  },
  ':active': {
    transform: 'scale(0.95)',
  },
})
