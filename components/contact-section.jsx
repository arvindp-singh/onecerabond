/**
 * Contact Section Component
 *
 * Displays contact information and contact form
 * Includes map embed, address, phone, email, and hours
 */
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { content } from "@/content/content"

export default function ContactSection() {
  const { contact } = content

  // Map icon names to Lucide React components
  const iconComponents = {
    MapPin,
    Phone,
    Mail,
    Clock,
  }

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {/* Section header */}
            <h2 className="text-3xl font-bold mb-6">{contact.title}</h2>
            <p className="text-gray-300 mb-8">{contact.description}</p>

            {/* Contact information */}
            <div className="space-y-6">
              {contact.contactInfo.map((info, index) => {
                const IconComponent = iconComponents[info.icon]

                return (
                  <div key={index} className="flex items-start">
                    <IconComponent className="h-6 w-6 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                    {Array.isArray(info.content) ? (
                      <div className="space-y-2">
                        {info.content.map((line, i) => (
                          <p key={i} className="text-gray-300">
                            {line}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-300">{info.content}</p>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Contact form */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">{contact.form.title}</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contact.form.fields.slice(0, 2).map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-1">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>
                {contact.form.fields.slice(2).map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-1">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        rows={field.rows}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        placeholder={field.placeholder}
                      ></textarea>
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  {contact.form.submitText}
                </button>
              </form>
            </div>
          </div>

          {/* Map embed */}
          <div className="h-96 md:h-auto rounded-lg overflow-hidden">
            <iframe
              src={contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Onecerabond Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
