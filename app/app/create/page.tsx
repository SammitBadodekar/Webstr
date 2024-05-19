import React from 'react'
import Tiptap from './tiptap'
import { SideMenu } from './sidebar'

const Page = () => {
  return (
    <div className='flex'>
      <SideMenu />
      <Tiptap />
    </div>
  )
}

export default Page