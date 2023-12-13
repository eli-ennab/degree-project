import React from 'react'
import { ContentData } from './types'
import { container, span } from './styles.css'

interface ContentProps extends ContentData {
  lang: 'sv' | 'fa-ir'
}

const Content = ({ data, lang }: ContentProps) => {
  return (
    <div className={container}>
      <span
        className={span(lang === 'sv' ? { text: 'left' } : { text: 'right' })}
      >
        {data.text}
      </span>
    </div>
  )
}

export default Content
