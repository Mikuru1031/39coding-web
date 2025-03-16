"use client"

import { useState } from "react"
import Image from "next/image"
import { useSectionAnimation } from "@/hooks/use-section-animation"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const { ref, isVisible } = useSectionAnimation()

  return (
    <div
      ref={ref}
      className={`relative w-full h-screen overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Blurred background version (covers entire container) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.png"
          alt="Background"
          fill
          className="object-cover scale-110 blur-md"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main image with contain */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/hero.png"
          alt="Night sky with moon and flowers"
          fill
          className="object-contain"
          priority
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  )
}

