import { style } from '@vanilla-extract/css'
import { media, sizes, vars } from '../../../vanilla_extract/styles.css'

export const container = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100vw',
})

export const divider = style({
  border: `${sizes.padding.xxs} solid ${vars.color.white}`,
  margin: sizes.margin.l,
  width: '50%',
})

export const guestbookWrapper = style({
  backgroundColor: vars.color.kleinBlue,
  height: '70vh',
  maxWidth: '1350px',
  cursor: 'grab',
  ':active': {
    cursor: 'grabbing',
  },
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      maxHeight: '65vh',
    },
  },
})

export const guestbookItem = style({
  alignItems: 'center',
  color: vars.color.white,
  display: 'flex',
  flexDirection: 'column',
  fontSize: sizes.font.xl,
  justifyContent: 'center',
})

export const itemName = style({
  color: vars.color.white,
  fontFamily: vars.font.libreBaskerville,
  fontSize: sizes.font.s,
  padding: sizes.padding.l,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      fontSize: sizes.font.l,
      padding: '60px',
    },
  },
})

export const itemMessage = style({
  fontFamily: vars.font.libreBaskerville,
  fontSize: sizes.font.s,
  overflow: 'hidden',
  padding: sizes.padding.l,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      fontSize: sizes.font.m,
      padding: '60px',
    },
  },
})
