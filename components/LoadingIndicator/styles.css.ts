import { style } from '@vanilla-extract/css'
import { vars } from '@/vanilla_extract/styles.css'

export const loader = style({
  position: 'fixed',
  top: '50%',
  left: '48%',
  fontFamily: vars.font.noto,
  transition: 'transform 1s ease-in-out',
  transform: 'scale(1.05)',
})
