"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { CroissantSVG } from "./croissant-svg"

export default function Textanimate() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const croissantRef1 = useRef<HTMLDivElement>(null)
  const croissantRef2 = useRef<HTMLDivElement>(null)
  const croissantRef3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split heading into individual characters
      const headingText = headingRef.current?.textContent || ""
      if (headingRef.current) {
        headingRef.current.innerHTML = headingText
          .split("")
          .map((char,) =>
            char === " "
              ? `<span class="char" style="display: inline-block;">&nbsp;</span>`
              : `<span class="char" style="display: inline-block;">${char}</span>`,
          )
          .join("")
      }

      // Split subtext into words
      const subtextText = subtextRef.current?.textContent || ""
      if (subtextRef.current) {
        subtextRef.current.innerHTML = subtextText
          .split(" ")
          .map((word) => `<span class="word" style="display: inline-block; margin-right: 0.25em;">${word}</span>`)
          .join("")
      }

const chars = headingRef.current?.querySelectorAll(".char") as NodeListOf<HTMLElement>;
const words = subtextRef.current?.querySelectorAll(".word") as NodeListOf<HTMLElement>;
      // Set initial states
      gsap.set(chars, {
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformOrigin: "50% 50% -50px",
      })

      gsap.set(words, {
        opacity: 0,
        y: 50,
        x: -30,
        scale: 0.8,
      })

      gsap.set(decorRef.current, {
        opacity: 0,
        scale: 0,
        rotation: -180,
      })

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 30,
      })

      // Set initial states for croissants
      gsap.set([croissantRef1.current, croissantRef2.current, croissantRef3.current], {
        opacity: 0,
        scale: 0.8,
        rotation: -10,
      })

      // Create master timeline
      const masterTL = gsap.timeline()

      // Animate croissants first with staggered timing
      masterTL.to(
        [croissantRef1.current, croissantRef2.current, croissantRef3.current],
        {
          opacity: 0.85,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
        },
        0,
      )

      // Animate decorative element
      masterTL.to(
        decorRef.current,
        {
          opacity: 0,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        0.3,
      )

      // Animate heading characters with stagger
      masterTL.to(
        chars,
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            amount: 1.2,
            from: "start",
          },
        },
        0.8,
      )

      // Animate subtext words
      masterTL.to(
        words,
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: {
            amount: 0.8,
            from: "center",
          },
        },
        1.6,
      )

      // Animate CTA buttons
      masterTL.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        2,
      )

      // Add floating animation for decorative element
      gsap.to(decorRef.current, {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      })

      // Add subtle floating animations for croissants
      gsap.to(croissantRef1.current, {
        y: "-=15",
        rotation: "+=3",
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      })

      gsap.to(croissantRef2.current, {
        y: "-=10",
        rotation: "-=2",
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.5,
      })

      gsap.to(croissantRef3.current, {
        y: "-=12",
        rotation: "+=4",
        duration: 7,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      })

      // Add subtle hover effect for heading
      const hoverTL = gsap.timeline({ paused: true })
      hoverTL.to(chars, {
        color: "#09CAF4",
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        stagger: {
          amount: 0.2,
          from: "random",
        },
      })

      headingRef.current?.addEventListener("mouseenter", () => hoverTL.play())
      headingRef.current?.addEventListener("mouseleave", () => hoverTL.reverse())
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Croissant background elements */}
      <div
        ref={croissantRef1}
        className="absolute top-[15%] left-[10%] w-[300px] h-[180px] text-amber-800/10 transform rotate-[-15deg]"
      >
        <CroissantSVG className="w-full h-full" />
      </div>
      <div
        ref={croissantRef2}
        className="absolute bottom-[20%] right-[15%] w-[250px] h-[150px] text-amber-700/10 transform rotate-[10deg]"
      >
        <CroissantSVG className="w-full h-full" />
      </div>
      <div
        ref={croissantRef3}
        className="absolute top-[60%] left-[60%] w-[200px] h-[120px] text-orange-600/10 transform rotate-[25deg]"
      >
        <CroissantSVG className="w-full h-full" />
      </div>

   

      {/* Additional decorative elements */}
      <div className="absolute top-40 left-10 w-4 h-4 bg-amber-300 rounded-full opacity-30" />
      <div className="absolute bottom-40 right-40 w-6 h-6 bg-orange-400 rounded-full opacity-25" />
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-red-300 rounded-full opacity-20" />

      <div className="text-center max-w-8xl mx-auto relative z-10">
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-blue-900 mb-10 leading-tight cursor-pointer"
        >
          Artisan Bakes. Beautiful Design
        </h1>

        <p
          ref={subtextRef}
          className="text-xl md:text-2xl text-blue-800 font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
         Ready to build a handcrafted site for your handcrafted creations?
        </p>

      
      </div>
    </section>
  )
}
