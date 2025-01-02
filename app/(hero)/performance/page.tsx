import Image from 'next/image'
import React from 'react'
import Mpg from '../../components/main'

export const metadata = {
  title: 'Performance',
  description: 'performance page description',
}

export default function page() {
  return (
    <Mpg imgUrl='/9.jpg' altTxt="performance" content="performance page ..." />
  )
}
