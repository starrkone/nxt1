
import React from 'react'
import Mpg from '../../components/main'

export const metadata = {
  title: 'Scale Page',
  description: 'Scale page description',
}

export default function Page() {
  return (
    <Mpg imgUrl='/10.jpg' altTxt="scale" content="scale page ..." />
  )
}
