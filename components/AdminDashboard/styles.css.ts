import { style } from '@vanilla-extract/css'
import { media, sizes, vars } from '../../vanilla_extract/styles.css'

export const button = style({
  cursor: 'pointer',
  padding: '10px',
  height: '40px',
  borderRadius: '2px',
  border: '1px solid black',
  backgroundColor: vars.color.white,
  fontFamily: vars.font.noto,
})

export const container = style({
  fontFamily: vars.font.noto,
  fontSize: sizes.font.s,
  padding: '10px 90px 10px 90px',
  '@media': {
    [`screen and (min-width: ${media.mobile})`]: {},
  },
})

export const grid = style({
  display: 'grid',
  gap: sizes.gap.m,
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
  border: '1px solid black',
  color: vars.color.black,
  width: '300px',
  padding: sizes.padding.m,
  margin: sizes.margin.s,
})

export const guestbookListItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${vars.color.white}`,
  padding: sizes.padding.m,
  gap: sizes.gap.xs,
})
