"use client"

import { useEffect, useState } from "react"
import gsap from "gsap"
import OpenClosedSign from "@/components/open-closed-sign"
import './hero.css'
import PopBlock from "../popup/Popupblock"

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
      {/* <div className="signboard">
        <OpenClosedSign isInitialized={isInitialized} />
      </div> */}
      <PopBlock />
  {/* other hero content */}
</div>

  )
}
