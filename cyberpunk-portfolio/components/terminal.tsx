"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TerminalOutput } from "./terminal-output"
import { commands } from "@/lib/commands"

interface HistoryItem {
  command: string
  output: React.ReactNode
  timestamp: Date
}

export function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isLoading, setIsLoading] = useState(false)
  const [isTerminalActive, setIsTerminalActive] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
    setCurrentTime(new Date().toLocaleString())
    
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString())
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isTerminalActive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isTerminalActive])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const initializeTerminal = () => {
    setIsTerminalActive(true)
    const welcomeOutput = commands.welcome()
    setHistory([
      {
        command: "",
        output: welcomeOutput,
        timestamp: new Date(),
      },
    ])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const command = input.trim().toLowerCase()
    setIsLoading(true)

    setCommandHistory((prev) => [...prev, input])
    setHistoryIndex(-1)

    let output: React.ReactNode
    const [cmd] = command.split(" ")

    if (cmd === "clear") {
      setHistory([])
      setInput("")
      setIsLoading(false)
      return
    }

    if (commands[cmd as keyof typeof commands]) {
      output = commands[cmd as keyof typeof commands]()
    } else {
      output = (
        <div className="text-red-400">
          <p>Command not found: {cmd}</p>
          <p>Type 'help' to see available commands.</p>
        </div>
      )
    }

    setHistory((prev) => [
      ...prev,
      {
        command: input,
        output,
        timestamp: new Date(),
      },
    ])

    setInput("")
    setIsLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput("")
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      const availableCommands = Object.keys(commands)
      const matches = availableCommands.filter((cmd) => cmd.startsWith(input.toLowerCase()))
      if (matches.length === 1) {
        setInput(matches[0])
      }
    }
  }

  return (
    <section id="terminal" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400 font-mono">{"<"}</span>
            <span className="text-white">Interactive Terminal</span>
            <span className="text-cyan-400 font-mono">{" />"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Experience my portfolio through a cyberpunk terminal interface</p>
        </div>

        <Card className="bg-black/80 border-green-400/30 backdrop-blur-sm max-w-6xl mx-auto">
          <CardHeader className="border-b border-cyan-400/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <CardTitle className="ml-4 text-cyan-400 font-mono">adi@adi:~$</CardTitle>
              </div>
              <div className="text-purple-400 text-sm font-mono">{isMounted ? currentTime : ""}</div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {!isTerminalActive ? (
              <div className="p-12 text-center">
                <div className="mb-8">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">TERMINAL ACCESS</h3>
                  <p className="text-gray-400 mb-8">
                    Click below to access the interactive terminal and explore my portfolio through command-line
                    interface. Use commands like 'help', 'about', 'projects', 'skills', and more!
                  </p>
                </div>
                <Button
                  onClick={initializeTerminal}
                  className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-mono uppercase tracking-wider px-8 py-3"
                >
                  Initialize Terminal
                </Button>
              </div>
            ) : (
              <div className="h-96 flex flex-col">
                <div
                  ref={terminalRef}
                  className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-cyan-400/50 scrollbar-track-transparent"
                >
                  {history.map((item, index) => (
                    <TerminalOutput
                      key={index}
                      command={item.command}
                      output={item.output}
                      timestamp={item.timestamp}
                    />
                  ))}

                  {isLoading && (
                    <div className="flex items-center space-x-2 text-yellow-400">
                      <div className="animate-spin w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full"></div>
                      <span>Processing...</span>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="p-4 border-t border-cyan-400/30">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-bold font-mono">adi@adi:~$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono caret-green-400"
                      placeholder="Type 'help' to get started..."
                      autoComplete="off"
                    />
                    <div className="w-2 h-5 bg-green-400 animate-pulse"></div>
                  </div>
                </form>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
