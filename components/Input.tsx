import React from 'react'
import Image from 'next/image'
import user from '../public/user.png'


function Input() {
  return (
    <div>
        <Image
              src={user}
              alt="user"
              height="30px"
              width="30px"
        />
    </div>
  )
}

export default Input