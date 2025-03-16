import { createClient } from "microcms-js-sdk"

// MicroCMS client
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
})

// Types for MicroCMS content
export type Work = {
  id: string
  image: {
    url: string
    width: number
    height: number
  }
  url?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type WorksResponse = {
  contents: Work[]
  totalCount: number
  offset: number
  limit: number
}

// Function to fetch works
export async function getWorks(limit = 10) {
  try {
    const response = await client.get<WorksResponse>({
      endpoint: "works",
      queries: { limit },
    })

    return response.contents
  } catch (error) {
    console.error("Error fetching works from MicroCMS:", error)
    return []
  }
}

// Function to fetch a single work by ID
export async function getWorkById(id: string) {
  try {
    const work = await client.get<Work>({
      endpoint: "works",
      contentId: id,
    })

    return work
  } catch (error) {
    console.error(`Error fetching work with ID ${id} from MicroCMS:`, error)
    return null
  }
}

