'use client'
import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext<any>(undefined)

export function LanguageWrapper({ children }: { children: React.ReactNode }) {
  let [language, setLanguage] = useState('sv')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  return useContext(LanguageContext)
}
