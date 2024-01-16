import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const image = style({
  objectFit: 'cover',
  maxWidth: '100vw',
})

export const imageWrapper = style({
  alignItems: 'flex-end',
  display: 'flex',
  flexDirection: 'column',
})

export const text = style({
  color: vars.color.gray,
  fontFamily: vars.font.nanumMyengjo,
  fontSize: sizes.font.xs,
  padding: `0px ${sizes.padding.s} 0px 0px`,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {
      padding: `${sizes.padding.s} 0px`,
    },
  },
})
