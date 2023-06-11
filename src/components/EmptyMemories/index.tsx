import Link from 'next/link'
import React from 'react'

export const EmptyMemories = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[300px] text-center leading-relaxed">
        You still not registered any memories, start{' '}
        <Link
          href="/memories/new"
          className="underline transition-colors hover:text-gray-50"
        >
          creating now
        </Link>
        !
      </p>
    </div>
  )
}
