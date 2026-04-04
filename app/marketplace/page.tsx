"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import FilterSidebar from "@/components/filter-sidebar"
import EquipmentGrid from "@/components/equipment-grid"
import Footer from "@/components/footer"

function CategoryContent() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search') || ""

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <FilterSidebar 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <EquipmentGrid 
        selectedCategory={selectedCategory} 
        searchQuery={searchQuery} 
      />
    </div>
  )
}

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-slate-50/30">
      <Header />

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16">
        <Suspense fallback={
          <div className="flex justify-center items-center py-20 min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
          </div>
        }>
          <CategoryContent />
        </Suspense>
      </div>

      <Footer />
    </main>
  )
}

