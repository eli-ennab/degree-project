export type TNavigation = {
  blok: {
    _editable: string
    _uid: string
    component: string
    links: TLinks[]
  }
}

export type TLinks = [
  {
    _editable: string
    _uid: string
    component: string
    links: TLink[]
  },
]

export type TLink = {
  _editable: string
  _uid: string
  component: string
  href: 'nioosha' | 'written' | 'guestbook'
  name: string
}
