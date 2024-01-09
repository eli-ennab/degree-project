'use client'
import {
  collection,
  deleteDoc,
  doc,
  query,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '@/services/firebase'
import { TGuestbook, TGuestbookList } from '@/types/Guestbook.types'
import Button from '../Button/Button'
import ConfirmationBox from '../ConfirmationBox/ConfirmationBox'
import {
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
  const [confirmId, setConfirmId] = useState<string | null>(null)
  const [action, setAction] = useState<string | null>(null)

  const toggleConfirmModal = (id: string, action: string) => {
    setAction(action)
    setConfirmId((prev) => (prev === id ? null : id))
  }

  const toggleMessageStatus = async (item: TGuestbook) => {
    const messageRef = doc(db, 'messages', item.id)
    await updateDoc(messageRef, { approved: !item.approved })
    setConfirmId(null)
  }

  const deleteMessage = async (id: string) => {
    await deleteDoc(doc(db, 'messages', id))
    setConfirmId(null)
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
                        <Button
                          onClick={() => toggleConfirmModal(item.id, 'toggle')}
                        >
                          {item.approved ? 'set to pending' : 'set to approved'}
                        </Button>
                        <Button
                          onClick={() => toggleConfirmModal(item.id, 'delete')}
                        >
                          delete
                        </Button>

                        {confirmId === item.id && (
                          <ConfirmationBox
                            action={action}
                            show={true}
                            onCancel={() => setConfirmId(null)}
                            onConfirmDelete={() => deleteMessage(item.id)}
                            onConfirmToggle={() => toggleMessageStatus(item)}
                          >
                            Are you sure?
                          </ConfirmationBox>
                        )}
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
