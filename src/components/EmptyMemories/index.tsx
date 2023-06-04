import React from 'react'

export const EmptyMemories = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[300px] text-center leading-relaxed">
        You still not registered any memories, start{' '}
        <a href="#" className="underline transition-colors hover:text-gray-50">
          creating now
        </a>
        !
      </p>
    </div>
  )
}
