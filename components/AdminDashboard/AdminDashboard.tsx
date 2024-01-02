'use client'
import {
  collection,
  deleteDoc,
  doc,
  query,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore'
import { db } from '@/services/firebase'
import { useEffect, useState } from 'react'
import { TGuestbook, TGuestbookList } from '@/types/Guestbook.types'
import {
  button,
  container,
  grid,
  guestbookList,
  guestbookListItem,
  guestbookListItemContainer,
} from './styles.css'

export default function AdminDashboard() {
  const [guestbookData, setGuestbookData] = useState<TGuestbookList | null>(
    null
  )

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
      <h2>admin dashboard</h2>

      <div className={grid}>
        {['approved', 'pending'].map((status) => (
          <div key={status}>
            <h3>{status}</h3>
            <ul className={guestbookList}>
              {guestbookData?.map((item, id) => {
                const isApproved = status === 'approved' && item.approved
                const isPending = status === 'pending' && !item.approved

                if (isApproved || isPending) {
                  return (
                    <li key={id} className={guestbookListItem}>
                      <div className={guestbookListItemContainer}>
                        <span>name: {item.name}</span>
                        <span>message: {item.message}</span>
                        <button
                          onClick={() => approveMessage(item)}
                          className={button}
                        >
                          {item.approved ? 'set to pending' : 'set to approved'}
                        </button>
                        <button
                          onClick={() => deleteMessage(item.id)}
                          className={button}
                        >
                          delete
                        </button>
                      </div>
                    </li>
                  )
                }

                return null
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
