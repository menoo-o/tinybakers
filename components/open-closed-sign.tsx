"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

interface OpenClosedSignProps {
  isInitialized: boolean
}

export default function OpenClosedSign({ isInitialized }: OpenClosedSignProps) {
  const signRef = useRef<HTMLDivElement>(null)
  const threadRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const signBoxRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    // Check if the bakery is open based on current time
    const checkOpenStatus = () => {
      const now = new Date()
      const hours = now.getHours()

      // Open from 7am to 5pm (7:00 to 17:00)
      const isShopOpen = hours >= 7 && hours < 17
      setIsOpen(isShopOpen)
    }

    // Check immediately and set up interval to check every minute
    checkOpenStatus()
    const intervalId = setInterval(checkOpenStatus, 60000)

    // Initial animation setup
    if (signRef.current && threadRef.current) {
      // Set initial position
      gsap.set(signRef.current, {
        y: -50,
        opacity: 0,
        transformOrigin: "top center",
      })

      gsap.set(threadRef.current, {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "top center",
      })
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  // Animate the sign when the main content is initialized
  useEffect(() => {
    if (isInitialized && signRef.current && threadRef.current) {
      // Animate thread dropping down
      gsap.to(threadRef.current, {
        scaleY: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })

      // Animate sign dropping and swinging
      gsap.to(signRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        delay: 0.3,
        onComplete: () => {
          // Add perpetual swinging animation
          gsap.to(signRef.current, {
            rotation: 2,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          })
        },
      })
    }
  }, [isInitialized])

  // When open status changes, animate the sign change
  useEffect(() => {
    if (isInitialized && textRef.current && signBoxRef.current) {
      // Create a timeline for the text change animation
      const tl = gsap.timeline()

      // Fade out current text
      tl.to(textRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          // Update text content
          if (textRef.current) {
            textRef.current.innerHTML = isOpen ? "Open" : "Sorry We're Closed"
            textRef.current.className = `font-medium text-lg ${
              isOpen ? "text-blue-100" : "text-red-300"
            } text-center px-2`
          }
        },
      })

      // Fade in new text
      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })

      // Add glowing effect if open
      if (isOpen) {
        // Reset any previous animations
        gsap.killTweensOf(signBoxRef.current)

        // Add box shadow glow animation
        tl.to(
          signBoxRef.current,
          {
            boxShadow: "0 0 15px 5px rgba(240, 248, 255, 0.6)", // Alice blue glow
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut",
          },
          "-=0.2",
        )

        // Add text glow animation
        tl.to(
          textRef.current,
          {
            textShadow: "0 0 8px rgba(240, 248, 255, 0.8)", // Alice blue text shadow
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut",
          },
          "-=1.5",
        )
      } else {
        // Remove glow effects
        gsap.to(signBoxRef.current, {
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          duration: 0.5,
        })

        gsap.to(textRef.current, {
          textShadow: "none",
          duration: 0.5,
        })
      }
    }
  }, [isOpen, isInitialized])

  return (
    <div className="relative h-32 flex items-center justify-center">
      {/* Single Thread */}
      <div ref={threadRef} className="w-0.5 h-12 bg-gray-400 absolute top-0"></div>

      {/* Sign */}
      <div ref={signRef} className="absolute top-12 transform-gpu" style={{ transformStyle: "preserve-3d" }}>
        <div
          ref={signBoxRef}
          className="bg-navy-800 border border-blue-300 rounded-md shadow-md py-3 px-6 transition-shadow duration-300"
        >
          <div
            ref={textRef}
            className={`font-medium text-lg ${isOpen ? "text-blue-100" : "text-red-300"} text-center px-2`}
          >
            {isOpen ? "Open" : "Sorry We're Closed"}
          </div>
        </div>
      </div>
    </div>
  )
}
