"use client"

import { useEffect, useState } from "react"
import gsap from "gsap"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Coffee, Cake } from "lucide-react"

import OpenClosedSign from "@/components/open-closed-sign"
import './hero.css'


export default function BakeryHero() {

  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {

    // Create main timeline
    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: () => setIsInitialized(true),
    })

    // Clean up animations when component unmounts
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="hero">
      <div className="signboard">
        <OpenClosedSign isInitialized={isInitialized} />
      </div>
  {/* other hero content */}

 <section className="relative min-h-screen flex items-center hero-content">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/croisaants.jpg"
          alt="Artisan red velvet croissants with cream filling"
          fill
          className="object-cover brightness-85"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Coffee className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-gray-800">Freshly Baked Daily</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Tiny
              <span className="block text-amber-300">Bakery</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Artisan bread, pastries, cakes, and coffee—all crafted in-house with love and the finest ingredients.
              Experience the warmth of traditional baking in every bite.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Cake className="h-5 w-5 text-amber-300" />
                <span className="text-white font-medium">Made In-House</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <MapPin className="h-5 w-5 text-amber-300" />
                <span className="text-white font-medium">In-Store Pickup</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-semibold">
                Visit Our Bakery
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold bg-white/10 backdrop-blur-sm"
              >
                View Our Menu
              </Button>
            </div>

            {/* Hours */}
            <div className="mt-8 flex items-center gap-2 text-white/80">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Open Daily 7AM - 6PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-[1]" />
    </section>


   

</div>

  )
}
