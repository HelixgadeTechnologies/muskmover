"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface EquipmentCardProps {
  title: string
  image: string
  tags: string[]
  specs: { icon: any; label: string; value: string }[]
  price: string
  priceLabel: string
  isNew?: boolean
}

export default function EquipmentCard({ title, image, tags, specs, price, priceLabel, isNew }: EquipmentCardProps) {
  return (
    <Link href="/marketplace/category/1" className="block h-full">
      <div className="group bg-slate-50 border border-slate-100 rounded-none overflow-hidden hover:shadow-2xl transition-all h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Tags overlay */}
          <div className="absolute top-4 left-4 flex gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="bg-orange-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider">
                {tag}
              </span>
            ))}
            {isNew && (
              <span className="bg-green-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider">
                NEW
              </span>
            )}
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
          
          {/* Specs as description */}
          <p className="text-slate-600 text-[15px] leading-relaxed mb-2 line-clamp-2">
            {specs.map(s => `${s.label}: ${s.value}`).join(" · ")}
          </p>

          {/* Price */}
          <p className="text-orange-600 font-black text-lg mb-6">
            {price} <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">{priceLabel}</span>
          </p>

          <div className="mt-auto">
            <span className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm hover:gap-3 transition-all">
              View Details <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
