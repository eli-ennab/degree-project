'use client'
import { db } from '@/services/firebase'
import { TGuestbookList } from '@/types/Guestbook'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export default function Guestbook() {
  const [guestbookData, setGuestbookData] = useState<TGuestbookList | null>(
    null
  )

  useEffect(() => {
    const q = query(collection(db, 'messages'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr: TGuestbookList = []

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id })
      })
      setGuestbookData(itemsArr)

      return () => unsubscribe()
    })
  }, [])

  return (
    <>
      <h2>Nioosha&apos;s gästbok</h2>
      {guestbookData && (
        <ul>
          {guestbookData.map(
            (item) =>
              item.approved && (
                <li key={item.id}>
                  {item.name} says: <br></br>
                  {item.message}
                </li>
              )
          )}
        </ul>
      )}

      <h3>Vill du skicka ett eget meddelande?</h3>
    </>
  )
}
