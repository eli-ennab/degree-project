import { storyblokEditable } from '@storyblok/react/rsc'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { container, image, text } from './styles.css'

export default function ImageText({ blok }: any) {
  const params = useParams()

  return (
    <div {...storyblokEditable(blok)} className={container}>
      {/* <Image
        src={blok?.image?.filename}
        height={100}
        width={500}
        alt={'something'}
        className={image}
      /> */}
      <h2
        className={text(
          params.lang === 'sv' ? { textAlign: 'sv' } : { textAlign: 'fa' }
        )}
      >
        {blok?.text.content[0].content[0].text}
      </h2>
    </div>
  )
}