"use server"

import { Resend } from "resend"

// Initialize Resend with the API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Define the form data type
type FormData = {
  name: string
  email: string
  message: string
}

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: "全ての項目を入力してください。",
      }
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // You can customize this
      to: process.env.EMAIL_USER || "recipient@example.com", // Use the EMAIL_USER as recipient
      subject: `39Design Contact Form: ${formData.name}`,
      text: `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `,
      // You can also use HTML for a nicer email
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>39Design Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <h3>Message:</h3>
          <p>${formData.message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return {
        success: false,
        message: "メール送信中にエラーが発生しました。後でもう一度お試しください。",
      }
    }

    return {
      success: true,
      message: "メッセージをお送りいただきありがとうございます。近日中にご連絡いたします。",
    }
  } catch (error) {
    console.error("Unexpected error:", error)
    return {
      success: false,
      message: "予期せぬエラーが発生しました。後でもう一度お試しください。",
    }
  }
}

