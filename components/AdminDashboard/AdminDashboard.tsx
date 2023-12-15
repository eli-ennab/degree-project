'use client'
import { useEffect, useState } from 'react'
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore'
import { db } from '@/services/firebase'
import {
  container,
  guestbookForm,
  guestbookInput,
  guestbookList,
  guestbookListItem,
  guestbookListItemContainer,
} from './styles.css'
import { TGuestbook, TGuestbookList } from '@/types/Guestbook'

const AdminDashboard = () => {
  const [guestbookData, setGuestbookData] = useState<TGuestbookList | null>(
    null
  )
  const [newMessage, setNewMessage] = useState({ name: '', message: '' })

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

  const approveMessage = async (item: TGuestbook) => {
    const messageRef = doc(db, 'messages', item.id)
    await updateDoc(messageRef, { approved: !item.approved })
  }

  const deleteMessage = async (id: string) => {
    await deleteDoc(doc(db, 'messages', id))
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
    <div className={container}>
      <form className={guestbookForm} onSubmit={addMessage}>
        <input
          className={guestbookInput}
          type="text"
          placeholder="name"
          value={newMessage.name}
          onChange={(e) =>
            setNewMessage({ ...newMessage, name: e.target.value })
          }
        />
        <input
          className={guestbookInput}
          type="text"
          placeholder="message"
          value={newMessage.message}
          onChange={(e) =>
            setNewMessage({ ...newMessage, message: e.target.value })
          }
        />
        <button type="submit">skicka meddelande</button>
      </form>
      <ul className={guestbookList}>
        {guestbookData?.map((item, id) => (
          <li key={id} className={guestbookListItem}>
            <div className={guestbookListItemContainer}>
              <span>name: {item.name}</span>
              <span>message: {item.message}</span>
              <span>status: {item.approved ? 'approved' : 'pending'}</span>
              <button onClick={() => approveMessage(item)}>
                toggle approve
              </button>
              <button onClick={() => deleteMessage(item.id)}>delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdminDashboard
