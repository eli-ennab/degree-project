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
