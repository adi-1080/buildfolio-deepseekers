"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isMounted && isScrolled ? "bg-black/90 backdrop-blur-md border-b border-cyan-400/30" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-cyan-400 font-mono">{"<ADITYA />"}</div>

          <div className="hidden md:flex space-x-8">
            {["home", "about", "experience", "academics", "projects", "skills", "terminal", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-green-400 hover:text-cyan-400 transition-colors duration-300 font-mono uppercase tracking-wider text-sm border border-transparent hover:border-cyan-400/50 px-3 py-1 rounded"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-green-400 text-sm font-mono">ONLINE</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
