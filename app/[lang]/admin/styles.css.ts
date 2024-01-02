import { style } from '@vanilla-extract/css'
import { media, sizes, vars } from '../../../vanilla_extract/styles.css'

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100vw',
  padding: '60px 90px',
})

export const field = style({
  fontFamily: vars.font.noto,
  fontSize: sizes.font.s,
  textTransform: 'lowercase',
  padding: sizes.padding.s,
  border: '1px solid lightgrey',
})

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '50vw',
  height: '200px',
  color: vars.color.white,
  padding: sizes.padding.m,
  gap: sizes.gap.m,
})
