import { style } from '@vanilla-extract/css'
import { media, sizes, vars } from '../../vanilla_extract/styles.css'

export const container = style({
  fontFamily: vars.font.playfair,
  fontSize: sizes.font.s,
  padding: '10px',
  margin: '10px',
  '@media': {
    [`screen and (min-width: ${media.mobile})`]: {
      margin: '40px',
    },
  },
})

export const grid = style({
  display: 'flex',
  flexDirection: 'column',
  gap: sizes.gap.m,
  '@media': {
    [`screen and (min-width: ${media.mobile})`]: {
      flexDirection: 'row',
    },
  },
})

export const guestbookList = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: 0,
  '@media': {
    [`screen and (min-width: ${media.mobile})`]: {
      width: '48vw',
    },
  },
})

export const guestbookListItem = style({
  border: '1px solid black',
  color: vars.color.black,
  margin: sizes.margin.xs,
  padding: sizes.padding.xs,
  width: '300px',
  '@media': {
    [`screen and (min-width: ${media.mobile})`]: {
      margin: sizes.margin.s,
      padding: sizes.padding.m,
    },
  },
})

export const guestbookListItemContainer = style({
  border: `1px solid ${vars.color.white}`,
  display: 'flex',
  flexDirection: 'column',
  gap: sizes.gap.xs,
  padding: sizes.padding.s,
  '@media': {
    [`screen and (min-width: ${media.mobile})`]: {
      padding: sizes.padding.m,
    },
  },
})
