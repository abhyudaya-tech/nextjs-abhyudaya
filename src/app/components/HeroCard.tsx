'use client'
import { useState } from 'react'

export default function HeroCard() {
  const [style, setStyle] = useState({})

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (x - centerX) / -20

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    })
  }

  const handleMouseLeave = () => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  }

  return (
    <div className="mt-10 flex justify-center">
      <div
        className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] bg-white rounded-xl shadow-lg transition-transform duration-300 ease-out [transform-style:preserve-3d]"
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-full flex items-center justify-center">
          <img src="/brand/logo_af_without_bg.png" alt="Hero Logo" className="w-2/3 h-2/3 object-contain" />
        </div>
      </div>
    </div>
  )
}
