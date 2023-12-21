import { storyblokEditable } from '@storyblok/react/rsc'
import { useParams } from 'next/navigation'
import { container, headLine } from './styles.css'

const Teaser = ({ blok }: any) => {
  const params = useParams()

  return (
    <div className={container}>
      <h2
        {...storyblokEditable(blok)}
        className={headLine(
          params.lang === 'sv' ? { textAlign: 'sv' } : { textAlign: 'fa' }
        )}
      >
        {blok.headline}
      </h2>
    </div>
  )
}

export default Teaser
