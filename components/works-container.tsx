import { getWorks } from "@/lib/microcms"
import { WorksSection } from "./works-section"

export async function WorksContainer() {
  const works = await getWorks(10)

  return <WorksSection works={works} />
}

