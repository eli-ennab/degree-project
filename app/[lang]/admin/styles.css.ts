import { style } from '@vanilla-extract/css'
import { vars } from '../../../vanilla_extract/styles.css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  marginTop: '50px',
})

export const formWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50vw',
  height: '300px',
  backgroundColor: vars.color.kleinBlue,
  color: vars.color.white,
  padding: '10px',
})
