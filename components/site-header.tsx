"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Price", href: "#price" },
  { name: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)

    // Extract the ID from the href
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Scroll to the element with smooth behavior
      targetElement.scrollIntoView({ behavior: "smooth" })

      // Update URL without causing a page reload
      window.history.pushState({}, "", href)
    }
  }

  return (
    <header className="relative top-0 z-50 w-full bg-white">
      <div className="flex justify-center">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/39coding_logo1.png"
                alt="39Coding Logo"
                width={200}
                height={45}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center md:flex md:space-x-10">
            {navigation.slice(0, 3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={cn(
                  "font-mono text-base font-normal text-gray-900 hover:text-gray-600",
                  "transition-colors duration-200 cursor-pointer",
                )}
              >
                {item.name}
              </a>
            ))}
            <Button
              asChild
              variant="secondary"
              className="ml-2 bg-[#E6EEF3] font-mono text-base font-normal text-gray-900 hover:bg-[#d9e5ed]"
            >
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
                Contact
              </a>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetTitle>
                </SheetTitle>
                <nav className="flex flex-col space-y-6 pt-6 px-8">
                  {navigation.slice(0, 3).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="font-mono text-lg font-normal text-gray-900 hover:text-gray-600"
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full bg-[#E6EEF3] font-mono text-base font-normal text-gray-900 hover:bg-[#d9e5ed]"
                  >
                    <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
                      Contact
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

