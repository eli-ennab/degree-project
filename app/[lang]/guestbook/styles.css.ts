import { style } from '@vanilla-extract/css'
import { ZIndex, media, sizes, vars } from '../../../vanilla_extract/styles.css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100vw',
})

export const divider = style({
  border: `1px solid ${vars.color.white}`,
  width: '50%',
  margin: '30px 0px',
})

export const link = style({
  position: 'absolute',
  fontSize: sizes.font.s,
  textDecoration: 'none',
  fontFamily: vars.font.noto,
  color: vars.color.black,
  paddingTop: '20px',
  right: '90px',
  bottom: '30px',
  zIndex: ZIndex.high,
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.color.white,
  fontSize: sizes.font.xl,
})

export const itemName = style({
  fontFamily: vars.font.syne,
  fontSize: sizes.font.m,
  textTransform: 'uppercase',
  color: vars.color.white,
})

export const itemMessage = style({
  fontFamily: vars.font.nanumMyengjo,
  textTransform: 'lowercase',
  fontSize: sizes.font.m,
  overflow: 'hidden',
})
