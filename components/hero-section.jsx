/**
 * Hero Section Component
 *
 * Main banner section displayed at the top of the homepage
 * Includes heading, description, and call-to-action buttons
 */
import Link from "next/link"
import { content } from "@/content/content"

export default function HeroSection() {
  const { hero } = content

  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90" />

      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-3xl">
          {/* Hero heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">{hero.title}</span>
            <span className="block text-orange-500">{hero.subtitle}</span>
          </h1>

          {/* Hero description */}
          <p className="mt-6 max-w-xl text-lg text-gray-300">{hero.description}</p>

          {/* Call-to-action buttons */}
          <div className="mt-8 flex gap-4">
            {hero.buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`rounded-md ${
                  button.primary
                    ? "bg-orange-600 text-white hover:bg-orange-500 focus-visible:outline-orange-600"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                } px-5 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
