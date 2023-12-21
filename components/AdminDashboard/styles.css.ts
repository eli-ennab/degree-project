import { style } from '@vanilla-extract/css'
import { media, vars } from '../../vanilla_extract/styles.css'

export const grid = style({
  display: 'grid',
  gap: '20px',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr 1fr',
  '@media': {
    [`screen and (min-width: ${media.mobile})`]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 1fr',
    },
  },
})

export const guestbookList = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
})

export const guestbookListItem = style({
  border: '1px solid lightgrey',
  color: vars.color.black,
  listStyleType: 'none',
  width: '300px',
  padding: '10px',
  margin: '10px',
})

export const guestbookListItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${vars.color.white}`,
  padding: '10px',
  gap: '5px',
})
