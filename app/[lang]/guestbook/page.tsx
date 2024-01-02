'use client'
import React from 'react'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '@/services/firebase'
import { useSlider } from '@/hooks/useSlider'
import { TGuestbookList } from '@/types/Guestbook.types'
import 'keen-slider/keen-slider.min.css'
import {
  container,
  divider,
  guestbookItem,
  guestbookWrapper,
  itemName,
  itemMessage,
  link,
} from './styles.css'

export default function Guestbook() {
  const [data, setData] = useState<TGuestbookList | null>(null)
  const slider = useSlider(data)

  useEffect(() => {
    const q = query(collection(db, 'messages'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr: TGuestbookList = []

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id })
      })
      setData(itemsArr)

      return () => unsubscribe()
    })
  }, [])

  return (
    <div className={container}>
      <div ref={slider} className={`${guestbookWrapper} keen-slider`}>
        {data &&
          data?.map(
            (item) =>
              item.approved && (
                <div
                  key={item.id}
                  className={`${guestbookItem} keen-slider__slide`}
                >
                  <q className={itemMessage}>{item.message}</q>
                  <div className={divider} />
                  <span className={itemName}>{item.name}</span>
                </div>
              )
          )}
      </div>
      <a href={'guestbook/create'} className={link}>
        skapa ett inlägg
      </a>
    </div>
  )
}
