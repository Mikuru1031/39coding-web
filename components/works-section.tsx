"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSectionAnimation } from "@/hooks/use-section-animation"
import type { Work } from "@/lib/microcms"

type WorksSectionProps = {
  works: Work[]
}

export function WorksSection({ works }: WorksSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { ref, isVisible } = useSectionAnimation()

  // Set initial active index to middle item if available
  useEffect(() => {
    if (works.length > 0) {
      setActiveIndex(Math.min(Math.floor(works.length / 2), works.length - 1))
    }
  }, [works.length])

  const handlePrev = () => {
    if (isAnimating || works.length === 0) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1))

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const handleNext = () => {
    if (isAnimating || works.length === 0) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1))

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex || works.length === 0) return
    setIsAnimating(true)
    setActiveIndex(index)

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`container px-4 py-12 md:py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="works"
    >
      <div className="inline-block">
        <h2 className="text-5xl font-serif mb-2">WORKS</h2>
        <div className="h-px bg-black mb-12"></div>
      </div>

      <div
        className={`relative mt-8 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Carousel */}
        <div className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {works.length === 0 ? (
              <div className="text-center text-gray-500">作品がありません。MicroCMSで作品を追加してください。</div>
            ) : (
              works.map((work, index) => {
                // Calculate position relative to active index
                const position = index - activeIndex

                // Determine z-index and visibility
                const zIndex = position === 0 ? 30 : 20 - Math.abs(position)
                const opacity = Math.abs(position) > 2 ? 0 : 1

                // Calculate transform values
                let translateX = position * 60
                if (position === 0) translateX = 0
                else if (position < 0) translateX = position * 300 - 100
                else translateX = position * 300 + 100

                // Calculate scale based on position
                const scale = position === 0 ? 1 : 0.8 - Math.abs(position) * 0.1

                return (
                  <Link
                    key={work.id}
                    href={work.url || ``}
                    className="absolute transition-all duration-500 ease-in-out rounded-3xl overflow-hidden"
                    style={{
                      zIndex,
                      opacity,
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      width: position === 0 ? "800px" : "600px",
                      height: position === 0 ? "400px" : "300px",
                    }}
                  >
                    <div className="relative w-full h-full bg-[#C7D9DD]">
                      <Image
                        src={work.image.url || "/placeholder.svg?height=600&width=800"}
                        alt="サムネイル"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                )
              })
            )}
          </div>
        </div>

        {/* Navigation Arrows - Only show if there are works */}
        {works.length > 0 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-[#C7D9DD]/80 rounded-full p-2 hover:bg-[#C7D9DD] transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-[#C7D9DD]/80 rounded-full p-2 hover:bg-[#C7D9DD] transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots - Only show if there are works */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {works.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-[#C7D9DD]" : "bg-gray-200"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

