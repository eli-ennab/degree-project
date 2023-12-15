import { style } from '@vanilla-extract/css'
import { vars } from '../../vanilla_extract/styles.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: vars.color.kleinBlue,
})

export const guestbookForm = style({
  display: 'flex',
  flexDirection: 'column',
})

export const guestbookInput = style({
  margin: '10px',
  padding: '10px',
  border: `1px solid ${vars.color.white}`,
})

export const guestbookList = style({
  display: 'flex',
  flexDirection: 'row',
})

export const guestbookListItem = style({
  color: vars.color.white,
  listStyleType: 'none',
  width: '300px',
  padding: '10px',
})

export const guestbookListItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${vars.color.white}`,
  padding: '10px',
})
