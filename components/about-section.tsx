'use client'

import Image from "next/image"
import { useSectionAnimation } from "@/hooks/use-section-animation"

export function AboutSection() {
  const { ref, isVisible } = useSectionAnimation()

  return (
    <div
      ref={ref}
      className={`container px-4 py-12 md:py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="about"
    >
      <div className="inline-block">
        <h2 className="text-5xl font-serif mb-2">ABOUT</h2>
        <div className="h-px bg-black mb-12"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        {/* Logo container with vertical centering */}
        <div
          className={`flex items-center justify-center md:justify-start transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="relative w-[300px] h-[300px] mx-auto hidden md:block">
            <Image
              src="/39coding_logo2.png"
              alt="39Coding Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Profile container with vertical centering */}
        <div
          className={`flex flex-col justify-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <p className="text-lg mb-2">Web Designer</p>
          <h3 className="text-6xl font-serif mb-6">Mikuru</h3>

          <div className="flex items-center mb-8">
            <div className="relative w-[120px] h-[120px] flex-shrink-0">
              <Image
                src="/profile_icon.png"
                alt="Mikuru's cat"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-lg ml-4 font-serif">名古屋に住む男子高校生、Webデザイナー</p>
          </div>

          <p className="mb-2 font-serif">趣味はクリエイティブ、食べ歩き、音楽を聴くこと。</p>
          <p className="mb-2 font-serif">東京都内で、プログラミング学習サービスの学生スタッフ、クリエイティブコミュニティイベントDISTのスタッフを務めた経験があります。</p>
          <p className="mb-8 font-serif"></p>
        </div>
      </div>

      {/* Skills and Experience Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-4xl font-serif mb-8">Skills</h3>
          <div className="bg-gray-100 rounded-lg p-6">
            <ul className="space-y-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "Next.js",
                "Astro",
                "MicroCMS",
                "Figma",
                "Responsive Design",
              ].map((skill, index) => (
                <li
                  key={skill}
                  className={`flex items-center transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="h-6 w-6 mr-3 border-2 border-gray-800 rotate-45"></div>
                  <span className="text-lg">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-4xl font-serif mb-8">Experience</h3>
          <div className="bg-gray-100 rounded-lg p-6">
            <ul className="space-y-8">
              {[
                {
                  title: "Creative community event staff",
                  details: "DIST.46 • Dec/2024",
                },
                {
                  title: "Code learning website staff",
                  details: "Dotinstall • Aug/2024 - Dec/2024",
                },
                {
                  title: "Web designer",
                  details: "2021 - Present",
                },
              ].map((experience, index) => (
                <li
                  key={index}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex items-center mb-2">
                    <div className="h-6 w-6 mr-3 border-2 border-gray-800 rotate-45"></div>
                    <span className="text-lg font-medium">{experience.title}</span>
                  </div>
                  <p className="ml-9">{experience.details}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

