import { createContext, useContext, useState, ReactNode } from 'react'

interface CommonContextType {
  html: string
  setHtml: React.Dispatch<React.SetStateAction<string>>
}

const CommonContext = createContext<CommonContextType | undefined>(undefined)

interface CommonProviderProps {
  children: ReactNode
}

export const CommonProvider = ({ children }: CommonProviderProps) => {
  const [html, setHtml] = useState('')

  return (
    <CommonContext.Provider value={{ html, setHtml }}>
      {children}
    </CommonContext.Provider>
  )
}

export const useCommonContext = () => {
  const context = useContext(CommonContext)
  if (!context) {
    throw new Error('useCommonContext must be used within a CommonProvider')
  }
  return context
}
