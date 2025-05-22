"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"

export default function BakeryLogo() {
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate logo on load
    gsap.from(logoRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)",
    })
  }, [])

  return (
    <div ref={logoRef} className="relative mb-4">
      <Image
        src="/logo.png"
        alt="Bakery Logo"
        width={200}
        height={200}
        className="w-48 h-auto" />
    </div>
  )
}
