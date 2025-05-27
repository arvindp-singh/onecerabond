/**
 * Footer Component
 *
 * Displays website footer with company information, quick links,
 * office locations, contact details, and social media links
 */
import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import { content } from "@/content/content"

export default function Footer() {
  const { company, footer } = content
  const currentYear = new Date().getFullYear()

  // Map icon names to Lucide React components
  const socialIcons = {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Youtube,
  }

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info and social media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{company.name}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {company.tagline} {company.description}
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              {company.socialMedia.map((social, index) => {
                const SocialIcon = socialIcons[social.icon]
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                    aria-label={social.name}
                  >
                    <SocialIcon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="font-medium text-white">India</p>
                <p>{company.address.india}</p>
                <p>Hours: {company.businessHours.weekdays}</p>
              </div>
              <div>
                <p className="font-medium text-white">USA</p>
                <p>{company.address.usa}</p>
                <p>Phone: {company.usaPhone}</p>
                <p>Hours: {company.businessHours.usa}</p>
              </div>
            </div>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-400 space-y-2">
              <div>
                <p className="font-medium text-white">India</p>
                <p>Phone: {company.phone}</p>
                <p>Email: {company.email}</p>
              </div>
              <div className="mt-3">
                <p className="font-medium text-white">USA</p>
                <p>Phone: {company.usaPhone}</p>
                <p>Email: {company.usaEmail}</p>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright and powered by */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>{footer.copyright.replace("{year}", currentYear)}</p>
          <p className="mt-2">
            Powered by{" "}
            <a
              href="https://aatreon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              Aatreon
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
