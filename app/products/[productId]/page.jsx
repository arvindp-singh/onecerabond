/**
 * Product Detail Page Component
 *
 * Displays detailed information about a specific product
 * Shows product image, description, features, and applications
 */
import Link from "next/link";
import Image from "next/image";
import { products } from "@/content/products";
import { ChevronLeft } from "lucide-react";

// This function tells Next.js which paths to pre-render for static export
export function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default async function ProductDetailPage({ params }) {
  const { productId } = await params;
  // Find the product in our data
  const product = products.find((p) => p.id === productId);

  // Handle case when product is not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Link
          href="/products"
          className="inline-flex items-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          {/* Back to products link */}
          <Link
            href="/products"
            className="inline-flex items-center text-orange-600 font-medium mb-8"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-96 bg-gray-100 relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            {/* Product details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="bg-gray-100 px-4 py-2 rounded-md inline-block mb-6">
                <span className="text-sm font-medium text-gray-700">
                  Category:{" "}
                  {product.category
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </span>
              </div>

              {/* Product description */}
              <div className="prose max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <div className="whitespace-pre-line text-gray-700">
                  {product.description}
                </div>
              </div>

              {/* Product features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Product applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {product.applications.map((application, index) => (
                      <li key={index}>{application}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact button */}
              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Contact for Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
