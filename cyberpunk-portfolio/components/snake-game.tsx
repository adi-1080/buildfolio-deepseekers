"use client"

import { useState, useEffect, useCallback } from "react"

interface Position {
  x: number
  y: number
}

export function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }])
  const [food, setFood] = useState<Position>({ x: 15, y: 15 })
  const [direction, setDirection] = useState<Position>({ x: 0, y: -1 })
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)

  const gridSize = 20
  const canvasSize = 300

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    }
    setFood(newFood)
  }, [])

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }])
    setDirection({ x: 0, y: -1 })
    setGameOver(false)
    setScore(0)
    setGameStarted(true)
    generateFood()
  }

  const moveSnake = useCallback(() => {
    if (gameOver || !gameStarted) return

    setSnake((currentSnake) => {
      const newSnake = [...currentSnake]
      const head = { ...newSnake[0] }

      head.x += direction.x
      head.y += direction.y

      if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
        setGameOver(true)
        return currentSnake
      }

      if (newSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true)
        return currentSnake
      }

      newSnake.unshift(head)

      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 10)
        generateFood()
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }, [direction, food, gameOver, gameStarted, generateFood])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) return

      switch (e.key) {
        case "ArrowUp":
          if (direction.y !== 1) setDirection({ x: 0, y: -1 })
          break
        case "ArrowDown":
          if (direction.y !== -1) setDirection({ x: 0, y: 1 })
          break
        case "ArrowLeft":
          if (direction.x !== 1) setDirection({ x: -1, y: 0 })
          break
        case "ArrowRight":
          if (direction.x !== -1) setDirection({ x: 1, y: 0 })
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [direction, gameStarted])

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150)
    return () => clearInterval(gameInterval)
  }, [moveSnake])

  const cellSize = canvasSize / gridSize

  return (
    <div className="space-y-4">
      <h3 className="text-cyan-400 font-bold text-lg">🐍 CYBER_SNAKE.exe</h3>
      <div className="border border-green-400/30 p-4 rounded bg-black">
        <div className="flex justify-between items-center mb-4">
          <div className="text-purple-400">Score: {score}</div>
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-green-400/20 border border-green-400 text-green-400 rounded hover:bg-green-400/30 transition-colors"
          >
            {gameStarted ? "Restart" : "Start Game"}
          </button>
        </div>

        <div className="relative border border-cyan-400/30 mx-auto" style={{ width: canvasSize, height: canvasSize }}>
          {snake.map((segment, index) => (
            <div
              key={index}
              className={`absolute ${index === 0 ? "bg-green-400" : "bg-green-400/70"} border border-green-400`}
              style={{
                left: segment.x * cellSize,
                top: segment.y * cellSize,
                width: cellSize - 1,
                height: cellSize - 1,
              }}
            />
          ))}

          <div
            className="absolute bg-red-400 border border-red-400 animate-pulse"
            style={{
              left: food.x * cellSize,
              top: food.y * cellSize,
              width: cellSize - 1,
              height: cellSize - 1,
            }}
          />

          {gameOver && (
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
              <div className="text-center">
                <p className="text-red-400 text-xl font-bold mb-2">GAME OVER</p>
                <p className="text-cyan-400 mb-4">Final Score: {score}</p>
                <button
                  onClick={resetGame}
                  className="px-4 py-2 bg-green-400/20 border border-green-400 text-green-400 rounded hover:bg-green-400/30 transition-colors"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 text-center text-sm text-gray-400">
          {!gameStarted ? "Click Start Game to begin" : "Use arrow keys to control the snake"}
        </div>
      </div>
    </div>
  )
}
