import { ZIndex, media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  bottom: '0px',
  height: sizes.padding.l,
  padding: sizes.padding.mobileFooter,
  position: 'fixed',
  zIndex: ZIndex.max,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: sizes.padding.desktopFooter,
    },
  },
})

export const loginIcon = style({
  color: vars.color.gray,
  fontSize: sizes.font.l,
})

export const logoutButton = style({
  cursor: 'pointer',
  padding: 0,
  margin: 0,
  backgroundColor: 'transparent',
  border: 'none',
})

export const logoutIcon = style({
  color: vars.color.gray,
  fontSize: sizes.font.l,
  transform: 'scaleX(-1)',
})
