/**
 * Products Page Component
 *
 * Displays all product categories and products
 * Organized by category with filtering options
 */
import Link from "next/link"
import Image from "next/image"
import { productCategories, products } from "@/content/products"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Products hero section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Discover our comprehensive range of high-quality tile adhesives, grouts, and related products designed for
              professional results.
            </p>
          </div>
        </section>

        {/* Product categories section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productCategories.map((category) => (
                <div key={category.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link href={`#${category.id}`} className="text-orange-600 font-medium flex items-center">
                    View Products
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products by category sections */}
        {productCategories.map((category) => (
          <section key={category.id} id={category.id} className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter((product) => product.category === category.id)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="h-64 bg-gray-100 relative">
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
                        <Link
                          href={`/products/${product.id}`}
                          className="text-orange-600 font-medium flex items-center"
                        >
                          View Details
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
