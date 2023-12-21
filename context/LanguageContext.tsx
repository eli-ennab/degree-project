'use client'
import { useParams } from 'next/navigation'
import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext<any>(undefined)

export function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const params = useParams()
  let [language, setLanguage] = useState(params.lang)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  return useContext(LanguageContext)
}
