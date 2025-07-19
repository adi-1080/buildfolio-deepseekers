"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full-Stack Developer & Cybersecurity Enthusiast"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <pre className="text-cyan-400 text-xs md:text-sm font-mono leading-tight mb-8">
            {``}
          </pre>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Hello, I'm </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Aditya Gupta
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-green-400 font-mono mb-8 h-8">
          {text}
          <span className="animate-pulse">|</span>
        </div>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Welcome to my digital realm. I craft innovative web applications and explore the depths of cybersecurity. Dive
          into my projects, skills, and experience through this interactive cyberpunk journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-mono uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection("terminal")}
            variant="outline"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 rounded-lg font-mono uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
          >
            Access Terminal
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full mx-auto">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
