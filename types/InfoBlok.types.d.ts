import { TImage } from './Item.types'
import { TRichText } from './RichText.types'

export type TInfoBlok = {
  blok: {
    _uid: string
    _editable: string
    alignment: 'left' | 'right' | 'center' | undefined
    backgroundColor:
      | 'black'
      | 'orange'
      | 'blue'
      | 'white'
      | 'gray'
      | 'lightGray'
      | undefined
    component: string
    text: TRichText
    textColor:
      | 'black'
      | 'orange'
      | 'blue'
      | 'white'
      | 'gray'
      | 'lightGray'
      | undefined
    width: 'narrow' | 'regular' | 'extended' | 'wide' | 'full' | undefined
  }
}
