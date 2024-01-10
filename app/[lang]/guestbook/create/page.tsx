'use client'
import React from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '@/services/firebase'
import Button from '@/components/Button/Button'
import Navigation from '@/components/Navigation/Navigation'
import 'keen-slider/keen-slider.min.css'
import {
  button,
  container,
  form,
  formLabel,
  formWrapper,
  info,
  inputInfo,
  nameField,
  textField,
} from './styles.css'

export default function CreateGuestbookMessage() {
  const [newMessage, setNewMessage] = useState({ name: '', message: '' })
  const inputMaxLength = 40
  const textareaMaxLength = 460

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
    <>
      <Navigation />
      <div className={container}>
        <div className={formWrapper}>
          <form onSubmit={addMessage} className={form}>
            <label className={formLabel}>Lämna ett meddelande</label>
            <span className={info}>
              Här kan du lämna ett meddelande till Niooshas gästbok. Har du tur
              så dyker ditt meddelande upp i gästboken inom kort!
            </span>

            <input
              type="text"
              placeholder="name"
              value={newMessage.name}
              onChange={(e) =>
                setNewMessage({ ...newMessage, name: e.target.value })
              }
              className={nameField}
              maxLength={inputMaxLength}
            />
            <span className={inputInfo}>max {inputMaxLength} tecken</span>
            <textarea
              placeholder="message"
              value={newMessage.message}
              onChange={(e) =>
                setNewMessage({ ...newMessage, message: e.target.value })
              }
              className={textField}
              maxLength={textareaMaxLength}
            />
            <span className={inputInfo}>max {textareaMaxLength} tecken</span>
            <Button type="submit" className={button}>
              Skicka in meddelande
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
