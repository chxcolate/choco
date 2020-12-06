import React from 'react'

export default function DateText({ children }) {
  return (
    <span className="text-lg text-purple-700 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      {children}
    </span>
  )
}
