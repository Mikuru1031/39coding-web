'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSectionAnimation } from "@/hooks/use-section-animation"

export function PriceSection() {
  const { ref, isVisible } = useSectionAnimation()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const targetElement = document.getElementById("contact")

    if (targetElement) {
      // Scroll to the element with smooth behavior
      targetElement.scrollIntoView({ behavior: "smooth" })

      // Update URL without causing a page reload
      window.history.pushState({}, "", "#contact")
    }
  }

  return (
    <div
      ref={ref}
      className={`container px-4 py-12 md:py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="price"
    >
      <div className="inline-block">
        <h2 className="text-5xl font-serif mb-2">PRICE</h2>
        <div className="h-px bg-black mb-12"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Web Design Card */}
        <div
          className={`bg-white border border-slate-200  rounded-lg p-8 flex flex-col items-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-medium mb-4">Webサイト制作</h3>
          <p className="text-5xl font-bold mb-8">20,000円</p>

          <ul className="space-y-4 mb-8 w-full">
            {[
              "Next.js や Astro などのモダンな技術でWebサイトを高速化",
              "MicroCMSで簡単なWebサイト管理",
              "お客様の希望に沿ったデザイン",
              "SEO対策で集客を促進",
            ].map((feature, index) => (
              <li
                key={index}
                className={`flex items-start transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <span className="mr-2">•</span>
                <span className="text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>

          <div
            className={`mt-auto transition-all duration-500 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button asChild className="bg-[#C7D9DD] hover:bg-[#b6c9ce] text-black font-medium">
              <Link href="#contact" onClick={handleScroll}>お問い合わせ</Link>
            </Button>
          </div>
        </div>

        {/* Poster Design Card */}
        <div
          className={`bg-white border border-slate-200 rounded-lg p-8 flex flex-col items-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-medium mb-4">ポスター制作</h3>
          <p className="text-5xl font-bold mb-8">20,000円</p>

          <ul className="space-y-4 mb-8 w-full">
            {["Adobe Photoshop", "Adobe Illustrator", "Figma", "お客様の希望に沿ったデザイン"].map((feature, index) => (
              <li
                key={index}
                className={`flex items-start transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <span className="mr-2">•</span>
                <span className="text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>

          <div
            className={`mt-auto transition-all duration-500 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button asChild className="bg-[#C7D9DD] hover:bg-[#b6c9ce] text-black font-medium">
              <Link href="#contact" onClick={handleScroll}>お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

