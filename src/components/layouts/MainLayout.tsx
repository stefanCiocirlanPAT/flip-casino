import localFont from 'next/font/local'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
  className?: string
  bg?: boolean
  children: React.ReactNode
}

const soraFont = localFont({
  src: '../../pages/fonts/Sora-VariableFont_wght.ttf',
  variable: '--font-sora',
  weight: '100 900',
})

const MainLayout = ({ className, bg = true, children }: IProps) => {
  return (
    <main
      className={twMerge(
        `${soraFont.variable} font-[family-name:var(--font-sora)] min-h-screen flex bg-center bg-cover text-white`,
        !bg && 'bg-[linear-gradient(112deg,_#3803CE_14.07%,_#1C0268_100.53%)]',
        bg && 'bg-purple bg-[url("/assests/img/bg.png")]',
        className
      )}
    >
      {children}
    </main>
  )
}
export default MainLayout
