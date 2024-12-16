import React from 'react'
import Nav from '../nav'
import MainLayout from '@/components/layouts/MainLayout'

interface IProps {
  bg?: boolean
  children: React.ReactNode
}

const SidebarLayout = ({ bg = true, children }: IProps) => {
  return (
    <MainLayout bg={bg} className="h-screen">
      <Nav />
      {children}
    </MainLayout>
  )
}
export default SidebarLayout
