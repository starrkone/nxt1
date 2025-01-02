import Image from 'next/image'
import React from 'react'
import Mpg from '../components/main'

export const metadata = {
  title: 'Home',
  description: 'home page description',
}

export default function page() {
  return (
    <Mpg imgUrl='/8.jpg' altTxt="home" content="Welcome to Next.js. 欢迎！" />
  )
}
