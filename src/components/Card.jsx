import React from 'react'

export default function Card({ title, img }) {
  return (
    <div className="overflow-hidden bg-white/10 backdrop-blur-md border-0 shadow-lg rounded-xl w-full">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  )
}
