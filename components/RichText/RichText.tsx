import { storyblokEditable } from '@storyblok/react/rsc'
import { render } from 'storyblok-rich-text-react-renderer'
import { container, wrapper } from './styles.css'

export default function RichText({ blok }: any) {
  return (
    <div className={wrapper({ alignment: blok.alignment })}>
      <div
        {...storyblokEditable(blok)}
        className={container({
          width: blok.width,
        })}
        style={{
          backgroundColor: blok.backgroundColor,
          color: blok.textColor,
        }}
      >
        {render(blok.richText)}
      </div>
    </div>
  )
}
