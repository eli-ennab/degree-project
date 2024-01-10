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
  border: `1px solid ${vars.color.white}`,
  margin: '20px',
  width: '50%',
})

export const guestbookWrapper = style({
  backgroundColor: vars.color.kleinBlue,
  height: '450px',
  maxWidth: '1350px',
  cursor: 'grab',
  ':active': {
    cursor: 'grabbing',
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
  fontFamily: vars.font.syne,
  fontSize: sizes.font.m,
  textTransform: 'uppercase',
  padding: '20px',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      fontSize: sizes.font.l,
      padding: '60px',
    },
  },
})

export const itemMessage = style({
  fontFamily: vars.font.nanumMyengjo,
  fontSize: sizes.font.s,
  textTransform: 'lowercase',
  overflow: 'hidden',
  padding: '20px',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      fontSize: sizes.font.l,
      padding: '60px',
    },
  },
})
