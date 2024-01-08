import { storyblokEditable } from '@storyblok/react/rsc'
import { useParams } from 'next/navigation'
import { blokWrapper, container, text } from './styles.css'

export default function InfoBlok({ blok }: any) {
  const params = useParams()

  return (
    <div className={blokWrapper({ alignment: blok.alignment })}>
      <div
        {...storyblokEditable(blok)}
        className={container({
          backgroundColor: blok.backgroundColor,
          color: blok.textColor,
          width: blok.width,
        })}
      >
        <h2
          className={text(
            params.lang === 'sv' ? { textAlign: 'sv' } : { textAlign: 'fa' }
          )}
        >
          {blok?.text.content[0].content[0].text}
        </h2>
      </div>
    </div>
  )
}
