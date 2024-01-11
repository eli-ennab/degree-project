'use client'
import React from 'react'
import { useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '@/services/firebase'
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
  responseMessage,
  textField,
} from './styles.css'

export default function CreateGuestbookMessage() {
  const [newMessage, setNewMessage] = useState({ name: '', message: '' })
  const [response, setResponse] = useState('')
  const [showSmooth, setShowSmooth] = useState(false)
  const inputMaxLength = 40
  const textareaMaxLength = 460

  const addMessage = async (e: any) => {
    e.preventDefault()

    try {
      if (newMessage.name !== '' && newMessage.message !== '') {
        await addDoc(collection(db, 'messages'), {
          name: newMessage.name.trim(),
          message: newMessage.message.trim(),
          approved: false,
        })
        setNewMessage({ name: '', message: '' })
      }

      setResponse('Your message was sent successfully!')
    } catch (error) {
      console.error('Error adding document: ', error)
      setResponse('Something went wrong, please try again.')
    }

    setTimeout(() => {
      setResponse('')
    }, 5000)
  }

  useEffect(() => {
    setShowSmooth(true)
  }, [])

  return (
    <>
      <Navigation />
      <div
        className={container}
        style={{
          opacity: showSmooth ? 1 : 0,
          transform: showSmooth ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
        }}
      >
        <div className={formWrapper}>
          <form onSubmit={addMessage} className={form}>
            <label className={formLabel}>Leave a message</label>
            <span className={info}>
              Welcome to leave a message for Nioosha&apos;s guestbook. All
              entries will be reviewed for approval before appearing on the
              guestbook page. Only approved messages will be published.
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
            <span className={inputInfo}>max {inputMaxLength} characters</span>
            <textarea
              placeholder="message"
              value={newMessage.message}
              onChange={(e) =>
                setNewMessage({ ...newMessage, message: e.target.value })
              }
              className={textField}
              maxLength={textareaMaxLength}
            />
            <span className={inputInfo}>
              max {textareaMaxLength} characters
            </span>
            <button type="submit" className={button}>
              Send
            </button>
            <p className={responseMessage}>{response}</p>
          </form>
        </div>
      </div>
    </>
  )
}
