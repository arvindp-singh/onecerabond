/**
 * Technology Section Component
 *
 * Highlights the USA-based technology used in products
 * Displays key technology features in cards
 */
import { content } from "@/content/content"

export default function TechnologySection() {
  const { technology } = content

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{technology.title}</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{technology.description}</p>
        </div>

        {/* Technology feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technology.features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
