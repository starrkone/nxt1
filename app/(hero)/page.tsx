
import React from 'react'
import Mpg from '../components/main'

export const metadata = {
  title: 'Home',
  description: 'home page description',
}

export default function Page() {
  return (
    <Mpg imgUrl='/8.jpg' altTxt="home" content="Welcome to Next.js. 欢迎！- 20250102" />
  )
}
