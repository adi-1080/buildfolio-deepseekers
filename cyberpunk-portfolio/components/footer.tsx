export function Footer() {
  return (
    <footer className="py-12 border-t border-cyan-400/30 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold text-cyan-400 font-mono">{"<ADITYA />"}</div>

          <p className="text-gray-400 font-mono text-sm">Crafted with 💚 using Next.js, TypeScript & Tailwind CSS</p>

          <div className="flex justify-center items-center space-x-4 text-sm font-mono">
            <span className="text-green-400">© 2025 Aditya Gupta</span>
            <span className="text-gray-600">|</span>
            <span className="text-purple-400">All rights reserved</span>
            <span className="text-gray-600">|</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400">ONLINE</span>
            </div>
          </div>

          <div className="pt-4 text-xs text-gray-500 font-mono">{"// Built for the cyberpunk future 🚀"}</div>
        </div>
      </div>
    </footer>
  )
}
