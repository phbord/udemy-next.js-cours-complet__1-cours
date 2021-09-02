import React from 'react'
import Image from 'next/image'
import img1 from '/public/assets/images/img1.jpeg'
import img2 from '/public/assets/images/img2.jpeg'
import img3 from '/public/assets/images/img3.jpeg'

export default function galery() {
  return (
    <div>
      <Image src={img1} alt="" width="3352" height="3304" layout="responsive" placeholder="blur"/>
      <Image src={img2} alt="" width="4000" height="6000"/>
      <Image src={img3} alt="" width="3024" height="4032"/>
    </div>
  )
}
