import Link from "next/link"
import { Instagram, Github } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-white">
      <div className="flex justify-center">
        <div className="container flex items-center justify-between py-6 px-4">
          <div className="flex-1"></div>
          <div className="text-center text-sm text-gray-600">&copy; {new Date().getFullYear()} 39Coding</div>
          <div className="flex-1 flex justify-end space-x-4">
            <Link
              href="https://www.instagram.com/fl0rally__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://github.com/Mikuru1031"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

