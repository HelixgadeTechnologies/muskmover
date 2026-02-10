import Header from "@/components/header"
import FilterSidebar from "@/components/filter-sidebar"
import EquipmentGrid from "@/components/equipment-grid"
import Footer from "@/components/footer"

export default function MarketplaceCategoryPage() {
  return (
    <main className="min-h-screen bg-slate-50/30">
      <Header />

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <FilterSidebar />
          <EquipmentGrid />
        </div>
      </div>

      <Footer />
    </main>
  )
}
