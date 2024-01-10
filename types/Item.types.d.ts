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
    link: TLink
    linkText: string
    imageFront: TImage
    imageBack: TImage
  }
}

export type TItemList = TItem[]

export type TImage = {
  id: number
  filename: string
  alt: string
}

export type TLink = {
  id: number
  url: string
  linktype: string
}
