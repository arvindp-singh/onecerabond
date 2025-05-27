/**
 * Quick Info Component
 *
 * Displays key information cards below the hero section
 * Shows business hours, location, and contact information
 */
import { Clock, MapPin, Phone } from "lucide-react"
import { content } from "@/content/content"

export default function QuickInfo() {
  const { quickInfo } = content

  // Map icon names to Lucide React components
  const iconComponents = {
    Clock,
    MapPin,
    Phone,
  }

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickInfo.map((item, index) => {
            const IconComponent = iconComponents[item.icon]

            return (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <IconComponent className="h-8 w-8 text-orange-600" />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
