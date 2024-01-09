import { style } from '@vanilla-extract/css'
import { media, sizes, vars } from '../../vanilla_extract/styles.css'

export const button = style({
  backgroundColor: vars.color.white,
  border: '1px solid black',
  borderRadius: '2px',
  cursor: 'pointer',
  fontFamily: vars.font.noto,
  height: '40px',
  padding: '10px',
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
  margin: sizes.margin.s,
  padding: sizes.padding.m,
  width: '300px',
})

export const guestbookListItemContainer = style({
  border: `1px solid ${vars.color.white}`,
  display: 'flex',
  flexDirection: 'column',
  gap: sizes.gap.xs,
  padding: sizes.padding.m,
})
