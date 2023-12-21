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
import {
  grid,
  guestbookList,
  guestbookListItem,
  guestbookListItemContainer,
} from './styles.css'
import { TGuestbook, TGuestbookList } from '@/types/Guestbook'

const AdminDashboard = () => {
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
    <div>
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
                        <button onClick={() => approveMessage(item)}>
                          {item.approved ? 'set to pending' : 'publish'}
                        </button>
                        <button onClick={() => deleteMessage(item.id)}>
                          Delete
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

export default AdminDashboard
