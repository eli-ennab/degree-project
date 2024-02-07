import { storyblokEditable } from '@storyblok/react/rsc'
import type { TDivider } from '@/types/Storyblok.types'
import { container, divider } from './styles.css'

export default function Divider({ blok }: TDivider) {
  return (
    <>
      {blok?.divider && (
        <div className={container}>
          <div
            {...storyblokEditable(blok)}
            className={divider({ backgroundColor: blok.color })}
          ></div>
        </div>
      )}
    </>
  )
}
