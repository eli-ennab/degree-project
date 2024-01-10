import { storyblokEditable } from '@storyblok/react/rsc'
import { container, divider } from './styles.css'

export default function Divider({ blok }: any) {
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
