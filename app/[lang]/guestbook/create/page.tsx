'use client'
import React from 'react'
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '@/services/firebase'
import 'keen-slider/keen-slider.min.css'
import {
  button,
  container,
  field,
  form,
  formLabel,
  formWrapper,
  info,
} from './styles.css'

export default function CreateGuestbookMessage() {
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

  return (
    <div className={container}>
      <div className={formWrapper}>
        <form onSubmit={addMessage} className={form}>
          <label className={formLabel}>Lämna ett meddelande</label>
          <span className={info}>
            Här kan du lämna ett meddelande till Niooshas gästbok. Har du tur så
            dyker ditt meddelande upp i gästboken inom kort!
          </span>
          <input
            type="text"
            placeholder="name"
            value={newMessage.name}
            onChange={(e) =>
              setNewMessage({ ...newMessage, name: e.target.value })
            }
            className={field}
          />
          <textarea
            placeholder="message"
            value={newMessage.message}
            onChange={(e) =>
              setNewMessage({ ...newMessage, message: e.target.value })
            }
            className={field}
          />
          <button type="submit" className={button}>
            skicka in meddelande
          </button>
        </form>
      </div>
    </div>
  )
}
