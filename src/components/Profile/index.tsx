import { getUser } from '@/lib/auth'
import Image from 'next/image'
import React from 'react'

export const Profile = () => {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[160px] text-sm leading-snug">
        {name}
        <a className="block cursor-pointer text-red-400 transition-colors hover:text-red-300">
          Logout
        </a>
      </p>
    </div>
  )
}
