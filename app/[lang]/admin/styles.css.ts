import { style } from '@vanilla-extract/css'
import { media, vars } from '../../../vanilla_extract/styles.css'

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100vw',
})

export const field = style({
  fontFamily: vars.font.noto,
  fontSize: '12px',
  textTransform: 'lowercase',
  padding: '5px',
  border: '1px solid lightgrey',
})

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '50vw',
  height: '200px',
  color: vars.color.white,
  padding: '10px',
  gap: '10px',
})
