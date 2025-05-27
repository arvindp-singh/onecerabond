/**
 * Featured Products Component
 *
 * Displays featured products on the homepage
 * Shows first 3 products from the products list
 */
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { products } from "@/content/products"

export default function FeaturedProducts() {
  // Get first 3 products to display on homepage
  const featuredProducts = products.slice(0, 3)

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-performance tile adhesives and construction materials designed for professional
            results.
          </p>
        </div>

        {/* Featured product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gray-100 relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                <Link href={`/products/${product.id}`} className="text-orange-600 font-medium flex items-center">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all products button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
