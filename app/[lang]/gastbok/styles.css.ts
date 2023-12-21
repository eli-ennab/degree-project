import { style } from '@vanilla-extract/css'
import { vars } from '../../../vanilla_extract/styles.css'

export const field = style({
  fontFamily: vars.font.noto,
  fontSize: '12px',
  textTransform: 'lowercase',
  padding: '5px',
  border: '1px solid lightgrey',
})

export const formLabel = style({
  fontFamily: vars.font.noto,
  color: vars.color.black,
})

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '200px',
  color: vars.color.white,
  padding: '10px',
  gap: '10px',
})

export const guestbookItem = style({
  backgroundColor: vars.color.white,
  border: '1px solid lightGrey',
  color: vars.color.black,
  listStyleType: 'none',
  padding: '10px',
})

export const guestbookItems = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '10px',
})
