import { style } from '@vanilla-extract/css'
import { vars } from '@/vanilla_extract/styles.css'

export const loader = style({
  fontFamily: vars.font.noto,
  left: '48%',
  position: 'fixed',
  transition: 'transform 1s ease-in-out',
  transform: 'scale(1.05)',
  top: '50%',
})
