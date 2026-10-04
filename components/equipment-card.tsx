"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface EquipmentCardProps {
  id?: number
  title: string
  image: string
  tags: string[]
  specs: { icon: any; label: string; value: string }[]
  isNew?: boolean
}

export default function EquipmentCard({ id, title, image, tags, specs, isNew }: EquipmentCardProps) {
  return (
    <Link href={`/marketplace/${id || 1}`} className="block h-full">
      <div className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 h-full flex flex-col">
        {/* Enlarged, prominent image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Tags overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {tags.map((tag, idx) => (
              <span key={idx} className="bg-orange-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                {tag}
              </span>
            ))}
            {isNew && (
              <span className="bg-green-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                NEW
              </span>
            )}
          </div>
        </div>

        {/* Compact content section */}
        <div className="p-4 md:p-5 flex-1 flex flex-col">
          <h3 
            className="text-sm md:text-base font-bold text-slate-900 mb-1.5 line-clamp-2 group-hover:text-orange-600 transition-colors"
            title={title}
          >
            {title}
          </h3>
          
          {/* Specs as description */}
          <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-1">
            {specs.map(s => `${s.label}: ${s.value}`).join(" · ")}
          </p>

          <div className="mt-auto pt-3 border-t border-slate-100">
            <span className="inline-flex items-center gap-1.5 text-orange-600 font-bold text-xs uppercase tracking-wider group-hover:gap-2.5 transition-all">
              View Details <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
