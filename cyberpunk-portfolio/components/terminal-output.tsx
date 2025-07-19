import type React from "react"

interface TerminalOutputProps {
  command: string
  output: React.ReactNode
  timestamp: Date
}

export function TerminalOutput({ command, output, timestamp }: TerminalOutputProps) {
  return (
    <div className="space-y-1">
      {command && (
        <div className="flex items-center space-x-2 text-cyan-400">
          <span className="font-bold font-mono">cyber@portfolio:~$</span>
          <span className="font-mono">{command}</span>
          <span className="text-xs text-gray-500 ml-auto font-mono">{timestamp.toLocaleTimeString()}</span>
        </div>
      )}
      <div className="ml-4 text-green-400">{output}</div>
    </div>
  )
}
