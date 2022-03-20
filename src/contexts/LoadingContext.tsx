import { createContext, useState } from 'react'

type TLoadingContext = {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

type TLoadingContextProps = {
  children: React.ReactNode
}

export const LoadingContext = createContext<TLoadingContext>({
  loading: false,
  setLoading: () => {}
})

export default function LoadingProvider({ children }: TLoadingContextProps) {
  const [loading, setLoading] = useState(false)
  const value = { loading, setLoading }
  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
}
