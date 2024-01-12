/**
 * Item
 */
export type TItemGrid = {
  blok: {
    _editable: string
    _uid: string
    columns: TItemList
    component: string
  }
}

export type TItem = {
  blok: {
    _editable: string
    _uid: string
    title: string
    component: string
    description: string
    link: TItemLink
    linkText: string
    imageFront: TImage
    imageBack: TImage
  }
}

export type TItemLink = {
  id: number
  url: string
  linktype: string
}

export type TItemList = TItem[]

/**
 * Image
 */
export type TImage = {
  id: number
  filename: string
  alt: string
}

/**
 * Divider
 */
export type TDivider = {
  blok: {
    _uid: string
    _editable: string
    color: TColors
    divider: boolean
    component: string
  }
}

/**
 * Headline
 */
export type THeadline = {
  blok: {
    _uid: string
    _editable: string
    backgroundColor: TColors
    color: TColors
    component: string
    headline: string
  }
}

/**
 * Richtext
 */
export type TRichText = {
  type: string
  content: TRichTextList
}

export type TRichTextItems = {
  content: TRichTextItem[]
}

export type TRichTextItem = {
  text: string
  type: string
}

export type TRichTextList = TRichTextItems[]

/**
 * Infoblok
 */
export type TInfoBlok = {
  blok: {
    _uid: string
    _editable: string
    alignment: TAlignment
    backgroundColor: TColors
    component: string
    text: TRichText
    textColor: TColors
    width: TWidth
  }
}

/**
 * Imageblok
 */
export type TImageBlok = {
  blok: {
    _uid: string
    _editable: string
    component: string
    text: string
    image: TImage
  }
}

/**
 * Hero
 */
export type THero = {
  blok: {
    _uid: string
    _editable: string
    headline: string
    component: string
    image: TImage
    width: string
    height: string
  }
}

/**
 * Link
 */
export type TLink = {
  name: string
  href: string
}

/**
 * Colors
 */
export type TColors =
  | 'black'
  | 'orange'
  | 'blue'
  | 'white'
  | 'gray'
  | 'lightGray'
  | undefined

/**
 * Alignment
 */
export const TAlignment = 'left' | 'right' | 'center' | undefined

/**
 * Width
 */
export const TWidth =
  'narrow' | 'regular' | 'extended' | 'wide' | 'full' | undefined
