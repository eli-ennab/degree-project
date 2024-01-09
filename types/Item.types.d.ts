export type TItemGrid = {
  blok: {
    columns: TItemList
    component: string
    _editable: string
    _uid: string
  }
}

export type TItem = {
  blok: {
    _uid: string
    _editable: string
    title: string
    component: string
    description: string
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
