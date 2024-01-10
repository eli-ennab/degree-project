import { media, sizes, vars } from '@/vanilla_extract/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {},
  },
})

export const image = style({
  objectFit: 'cover',
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {},
  },
})

export const text = style({
  color: vars.color.gray,
  fontFamily: vars.font.nanumMyengjo,
  fontSize: sizes.font.s,
  padding: sizes.padding.m,
  '@media': {
    [`screen and (min-width: ${media.tablet})`]: {},
  },
})
