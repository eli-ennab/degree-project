import { storyblokEditable } from '@storyblok/react/rsc'
import Image from 'next/image'
import { container, image, text } from './styles.css'

const ImageText = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} className={container}>
      <Image
        src={blok.image.filename}
        height={100}
        width={500}
        alt={'something'}
        className={image}
      />
      <h2 className={text({})}>{blok.text.content[0].content[0].text}</h2>
    </div>
  )
}

export default ImageText
