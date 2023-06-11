import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NewMemory = () => {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        back to timeline
      </Link>

      <form className="flex w-full flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer select-none items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Attach media
          </label>

          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
            />
            Make memory public
          </label>
        </div>

        <input type="file" id="media" className="invisible h-0 w-0" />

        <div className="mt-2 flex flex-1 flex-col gap-2">
          <label
            htmlFor="title"
            className="flex select-none flex-col gap-1 text-sm text-gray-200 transition-colors hover:text-gray-100"
          >
            Memory title
            <input
              type="text"
              id="title"
              name="title"
              className="h-8 w-full rounded border-0 bg-transparent p-0 text-lg text-gray-100 placeholder:text-gray-400 focus:ring-0"
              placeholder="Insert the title for your memory"
            />
          </label>

          <label
            htmlFor="content"
            className="flex select-none flex-col gap-1 text-sm text-gray-200 transition-colors hover:text-gray-100"
          >
            Memory content
            <textarea
              id="content"
              name="content"
              spellCheck={false}
              className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
              placeholder="Feel free to add photos, videos and reports about this experience that you want to remember forever"
            />
          </label>
        </div>
      </form>
    </div>
  )
}

export default NewMemory
