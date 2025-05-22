"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

import BakeryLogo from "@/components/bakery-logo"
import OpenClosedSign from "@/components/open-closed-sign"


export default function BakeryHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Set initial states
    gsap.set(titleRef.current, { opacity: 0, y: 30 })
    gsap.set(subtitleRef.current, { opacity: 0 })
   
    // Create main timeline
    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: () => setIsInitialized(true),
    })

    // Animate title with a smooth reveal
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    })

    // Fade in subtitle
    tl.to(
      subtitleRef.current,
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.7",
    )

   

    // Clean up animations when component unmounts
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen px-4 py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-navy-800 opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-navy-800 opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-navy-800 opacity-30"></div>
      </div>

      {/* Logo and Open/Closed Sign */}
      <div className="relative mb-16 flex flex-col items-center">
        <BakeryLogo />
        <OpenClosedSign isInitialized={isInitialized} />
      </div>

      {/* Hero content */}
      <div ref={contentRef} className="max-w-4xl mx-auto text-center z-10 mb-12">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Freshly Baked Happiness
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl text-blue-100 mb-8">
          Handcrafted with love every morning, using only the finest ingredients
        </p>
        
      </div>

  
    </div>
  )
}
