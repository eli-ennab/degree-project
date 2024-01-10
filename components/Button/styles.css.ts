import { style } from '@vanilla-extract/css'
import { vars } from '../../vanilla_extract/styles.css'

export const button = style({
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.black}`,
  borderRadius: '2px',
  cursor: 'pointer',
  fontFamily: vars.font.noto,
  height: '40px',
  padding: '10px',
  textTransform: 'lowercase',
})
