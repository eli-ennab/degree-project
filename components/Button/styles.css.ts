import { style } from '@vanilla-extract/css'
import { sizes, vars } from '../../vanilla_extract/styles.css'

export const button = style({
  backgroundColor: vars.color.white,
  border: `${sizes.padding.xxs} solid ${vars.color.black}`,
  borderRadius: sizes.padding.xs,
  cursor: 'pointer',
  fontFamily: vars.font.playfair,
  height: '40px',
  padding: sizes.padding.m,
  textTransform: 'lowercase',
})
