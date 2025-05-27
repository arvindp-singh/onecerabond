/**
 * Testimonials Section Component
 *
 * Displays customer testimonials and reviews
 * Shows customer image, name, role, and quote
 */
import Image from "next/image"
import { content } from "@/content/content"

export default function TestimonialsSection() {
  const { testimonials } = content

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{testimonials.title}</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{testimonials.description}</p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              {/* Customer info with image */}
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden relative">
                  <Image
                    src={testimonial.image.src || "/placeholder.svg"}
                    alt={testimonial.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Testimonial quote */}
              <p className="text-gray-600">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
