import { style } from '@vanilla-extract/css'
import { vars } from '../../vanilla_extract/styles.css'

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: vars.color.white,
  color: vars.color.black,
  padding: '10px',
})

export const languageSwitch = style({
  cursor: 'pointer',
})

export const links = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'right',
  width: '200px',
  listStyleType: 'none',
})
