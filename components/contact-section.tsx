"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useSectionAnimation } from "@/hooks/use-section-animation"
import { sendEmail } from "@/app/actions/send-email"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const { ref, isVisible } = useSectionAnimation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      // Send the email using the server action
      const result = await sendEmail(formData)
      setSubmitResult(result)

      // If successful, reset the form
      if (result.success) {
        setFormData({ name: "", email: "", message: "" })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitResult({
        success: false,
        message: "予期せぬエラーが発生しました。後でもう一度お試しください。",
      })
    } finally {
      setIsSubmitting(false)

      // Hide the message after 5 seconds
      if (submitResult?.success) {
        setTimeout(() => {
          setSubmitResult(null)
        }, 5000)
      }
    }
  }

  return (
    <div
      ref={ref}
      className={`container px-4 py-12 md:py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="contact"
    >
      <div className="inline-block">
        <h2 className="text-5xl font-serif mb-2">CONTACT</h2>
        <div className="h-px bg-black mb-12"></div>
      </div>

      <div className="w-full">
        <div
          className={`bg-white border border-slate-200 rounded-lg p-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6 md:px-16 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`space-y-2 transition-all duration-500 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Label htmlFor="name">お名前</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-slate-200 bg-white"
                />
              </div>

              <div
                className={`space-y-2 transition-all duration-500 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-slate-200 bg-white"
                />
              </div>
            </div>

            <div
              className={`space-y-2 transition-all duration-500 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Label htmlFor="message">メッセージ</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[150px] border-slate-200 bg-white"
              />
            </div>

            <div
              className={`flex justify-center mt-8 transition-all duration-500 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 bg-[#C7D9DD] hover:bg-[#b6c9ce] text-black font-medium"
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </Button>
            </div>

            {submitResult && (
              <div
                className={`text-center font-medium mt-4 animate-fade-in ${
                  submitResult.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {submitResult.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
