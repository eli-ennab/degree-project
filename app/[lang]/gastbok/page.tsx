'use client'
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '@/services/firebase'
import { TGuestbookList } from '@/types/Guestbook'
import {
  field,
  formLabel,
  formWrapper,
  guestbookItem,
  guestbookItems,
} from './styles.css'

export default function Guestbook() {
  const [newMessage, setNewMessage] = useState({ name: '', message: '' })
  const [guestbookData, setGuestbookData] = useState<TGuestbookList | null>(
    null
  )

  const addMessage = async (e: any) => {
    e.preventDefault()
    if (newMessage.name !== '' && newMessage.message !== '') {
      await addDoc(collection(db, 'messages'), {
        name: newMessage.name.trim(),
        message: newMessage.message.trim(),
        approved: false,
      })
      setNewMessage({ name: '', message: '' })
    }
  }

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
      <form onSubmit={addMessage} className={formWrapper}>
        <label className={formLabel}>Lämna ett meddelande</label>
        <input
          type="text"
          placeholder="name"
          value={newMessage.name}
          onChange={(e) =>
            setNewMessage({ ...newMessage, name: e.target.value })
          }
          className={field}
        />
        <input
          type="text"
          placeholder="message"
          value={newMessage.message}
          onChange={(e) =>
            setNewMessage({ ...newMessage, message: e.target.value })
          }
          className={field}
        />
        <button type="submit">skicka meddelande</button>
      </form>

      {guestbookData && (
        <ul className={guestbookItems}>
          {guestbookData.map(
            (item) =>
              item.approved && (
                <li key={item.id} className={guestbookItem}>
                  {item.name} says: <br></br>
                  {item.message}
                </li>
              )
          )}
        </ul>
      )}
    </>
  )
}
