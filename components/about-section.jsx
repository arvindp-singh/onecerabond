/**
 * About Section Component
 *
 * Displays company information and background
 * Includes image and multi-paragraph description
 */
import Image from "next/image"
import { content } from "@/content/content"

export default function AboutSection() {
  const { about } = content

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* About text content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{about.title}</h2>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* About image */}
          <div className="md:w-1/2">
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <Image src={about.image.src || "/placeholder.svg"} alt={about.image.alt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
