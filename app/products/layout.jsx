/**
 * Products Layout Component
 *
 * Provides consistent layout for all product pages
 * Includes header and footer for product pages
 */
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProductsLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
