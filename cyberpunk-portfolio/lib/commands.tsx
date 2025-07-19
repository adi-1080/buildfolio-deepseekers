import { MatrixRain } from "@/components/matrix-rain"
import { SnakeGame } from "@/components/snake-game"

export const commands = {
  welcome: () => (
    <div className="space-y-4">
      <div className="text-cyan-400 border border-cyan-400/30 p-4 rounded">
        <h2 className="text-xl font-bold mb-2 text-purple-400">WELCOME TO THE CYBER REALM</h2>
        <p className="mb-2">Initializing neural interface...</p>
        <p className="mb-2 text-green-400">Connection established ✓</p>
        <p className="mb-4">You've entered Aditya's digital domain.</p>
        <p className="text-yellow-400">Type 'help' to explore available commands.</p>
      </div>
    </div>
  ),

  help: () => (
    <div className="space-y-2">
      <h3 className="text-cyan-400 font-bold text-lg">AVAILABLE COMMANDS:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
        <div className="space-y-1">
          <p>
            <span className="text-purple-400">about</span> - Personal information
          </p>
          <p>
            <span className="text-purple-400">academics</span> - Educational background
          </p>
          <p>
            <span className="text-purple-400">projects</span> - View my projects
          </p>
          <p>
            <span className="text-purple-400">skills</span> - Technical skills
          </p>
          <p>
            <span className="text-purple-400">experience</span> - Work experience
          </p>
          <p>
            <span className="text-purple-400">contact</span> - Get in touch
          </p>
        </div>
        <div className="space-y-1">
          <p>
            <span className="text-purple-400">matrix</span> - Digital rain effect
          </p>
          <p>
            <span className="text-purple-400">snake</span> - Play snake game
          </p>
          <p>
            <span className="text-purple-400">quote</span> - Random inspiration
          </p>
          <p>
            <span className="text-purple-400">music</span> - My coding playlist
          </p>
          <p>
            <span className="text-purple-400">clear</span> - Clear terminal
          </p>
        </div>
      </div>
    </div>
  ),

  about: () => (
    <div className="space-y-3 border border-green-400/30 p-4 rounded">
      <h3 className="text-cyan-400 font-bold text-lg">PERSONAL_DATA.exe</h3>
      <div className="space-y-2">
        <p>
          <span className="text-purple-400">Name:</span> Aditya Gupta
        </p>
        <p>
          <span className="text-purple-400">Role:</span> Full-Stack Developer & Cybersecurity Enthusiast
        </p>
        <p>
          <span className="text-purple-400">Location:</span> Mumbai, Maharashtra
        </p>
        <p>
          <span className="text-purple-400">Status:</span> <span className="text-green-400 animate-pulse">ONLINE</span>
        </p>
      </div>
      <div className="mt-4">
        <p className="text-yellow-400">Bio:</p>
        <p className="text-sm mt-1">
          Passionate developer with 2+ years of experience building scalable web applications. I love creating
          innovative solutions and exploring the intersection of technology and creativity.
        </p>
      </div>
    </div>
  ),

  projects: () => (
    <div className="space-y-4">
      <h3 className="text-cyan-400 font-bold text-lg">PROJECT_ARCHIVE.db</h3>
      <div className="space-y-3">
        <div className="border border-purple-400/30 p-3 rounded">
          <h4 className="text-purple-400 font-bold">🚀 CyberChat - Real-time Chat App</h4>
          <p className="text-sm mt-1">Next.js, Socket.io, MongoDB</p>
          <p className="text-green-400 text-xs mt-1">Status: DEPLOYED</p>
        </div>
        <div className="border border-purple-400/30 p-3 rounded">
          <h4 className="text-purple-400 font-bold">🛡️ SecureVault - Password Manager</h4>
          <p className="text-sm mt-1">React, Node.js, PostgreSQL</p>
          <p className="text-yellow-400 text-xs mt-1">Status: IN DEVELOPMENT</p>
        </div>
        <div className="border border-purple-400/30 p-3 rounded">
          <h4 className="text-purple-400 font-bold">🎮 NeonRunner - Cyberpunk Game</h4>
          <p className="text-sm mt-1">Unity, C#, Blender</p>
          <p className="text-green-400 text-xs mt-1">Status: COMPLETED</p>
        </div>
      </div>
    </div>
  ),

  skills: () => (
    <div className="space-y-4">
      <h3 className="text-cyan-400 font-bold text-lg">SKILL_MATRIX.json</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-green-400/30 p-3 rounded">
          <h4 className="text-green-400 font-bold mb-2">Frontend</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>React/Next.js</span>
              <span className="text-cyan-400">████████░░ 90%</span>
            </div>
            <div className="flex justify-between">
              <span>TypeScript</span>
              <span className="text-cyan-400">████████░░ 85%</span>
            </div>
          </div>
        </div>
        <div className="border border-purple-400/30 p-3 rounded">
          <h4 className="text-purple-400 font-bold mb-2">Backend</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Node.js</span>
              <span className="text-cyan-400">████████░░ 88%</span>
            </div>
            <div className="flex justify-between">
              <span>Python</span>
              <span className="text-cyan-400">████████░░ 82%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  experience: () => (
    <div className="space-y-4">
      <h3 className="text-cyan-400 font-bold text-lg">WORK_EXPERIENCE.log</h3>
      <div className="space-y-3">
        <div className="border border-green-400/30 p-3 rounded">
          <h4 className="text-green-400 font-bold">💼 Software Engineer Intern</h4>
          <p className="text-sm mt-1">TechCorp Inc. | Summer 2023</p>
          <p className="text-xs mt-1">• Developed microservices using Node.js and Docker</p>
        </div>
        <div className="border border-purple-400/30 p-3 rounded">
          <h4 className="text-purple-400 font-bold">🔒 Cybersecurity Research Assistant</h4>
          <p className="text-sm mt-1">UC Berkeley | 2022 - 2024</p>
          <p className="text-xs mt-1">• Researched IoT security vulnerabilities</p>
        </div>
      </div>
    </div>
  ),

  contact: () => (
    <div className="space-y-4">
      <h3 className="text-cyan-400 font-bold text-lg">CONTACT_PROTOCOLS.init</h3>
      <div className="border border-cyan-400/30 p-4 rounded space-y-2">
        <p>
          <span className="text-purple-400">📧 Email:</span> adityagupta5277@gmail.com
        </p>
        <p>
          <span className="text-purple-400">📱 Phone:</span> +91 7021153275
        </p>
        <p>
          <span className="text-purple-400">🐙 GitHub:</span> https://github.com/adi-1080
        </p>
        <p>
          <span className="text-purple-400">💼 LinkedIn:</span> https://www.linkedin.com/in/adi1080/
        </p>
      </div>
    </div>
  ),

  matrix: () => <MatrixRain />,
  snake: () => <SnakeGame />,

  quote: () => {
    const quotes = [
      "The best way to predict the future is to invent it. - Alan Kay",
      "Code is like humor. When you have to explain it, it's bad. - Cory House",
      "First, solve the problem. Then, write the code. - John Johnson",
    ]
    // Use a deterministic approach to avoid hydration issues
    const randomQuote = quotes[0] // Always show the first quote to avoid hydration mismatch
    return (
      <div className="border border-yellow-400/30 p-4 rounded text-center">
        <p className="text-yellow-400 text-lg italic">"{randomQuote}"</p>
      </div>
    )
  },

  music: () => (
    <div className="space-y-4">
      <h3 className="text-cyan-400 font-bold text-lg">🎵 CYBER_PLAYLIST.m3u</h3>
      <div className="border border-purple-400/30 p-4 rounded">
        <div className="space-y-1 text-sm">
          <p>🎶 Daft Punk - Derezzed</p>
          <p>🎶 Perturbator - Future Club</p>
          <p>🎶 Carpenter Brut - Turbo Killer</p>
          <p>🎶 The Midnight - Endless Summer</p>
        </div>
      </div>
    </div>
  ),

  academics: () => (
    <div className="space-y-4">
      <h3 className="text-cyan-400 font-bold text-lg">ACADEMIC_RECORDS.db</h3>

      <div className="border border-cyan-400/30 p-4 rounded">
        <h4 className="text-purple-400 font-bold mb-2">🎓 Education</h4>
        <div className="space-y-1 text-sm font-mono">
          <p>
            <span className="text-cyan-400">Degree:</span> B.Tech Computer Engineering
          </p>
          <p>
            <span className="text-cyan-400">College:</span> Dwarkadas J. Sanghvi College Of Engineering
          </p>
          <p>
            <span className="text-cyan-400">Duration:</span> 2023 - 2027
          </p>
          <p>
            <span className="text-cyan-400">CGPA:</span> <span className="text-green-400 font-bold">9.55/10</span>
          </p>
          <p>
            <span className="text-cyan-400">Specialization:</span> Cybersecurity & Software Engineering
          </p>
        </div>
      </div>

      <div className="border border-green-400/30 p-4 rounded">
        <h4 className="text-green-400 font-bold mb-2">🏆 Key Achievements</h4>
        <ul className="text-sm space-y-1">
          <li>• Dean's List (2022, 2023)</li>
          <li>• 1st Place - UC Berkeley Hackathon 2023</li>
          <li>• GirlScript Summer of Code Contributor (2025)</li>
          <li>• Cybersecurity Club President (2023-2024)</li>
        </ul>
      </div>

      <div className="border border-purple-400/30 p-4 rounded">
        <h4 className="text-purple-400 font-bold mb-2">📜 Certifications</h4>
        <ul className="text-sm space-y-1">
          <li>• AWS Certified Developer Associate (2023)</li>
          <li>• CompTIA Security+ (2023)</li>
          <li>• Google Cloud Professional Developer (2024)</li>
          <li>• Certified Ethical Hacker - In Progress</li>
        </ul>
      </div>

      <div className="border border-yellow-400/30 p-4 rounded">
        <h4 className="text-yellow-400 font-bold mb-2">📊 Academic Stats</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-cyan-400">Total Credits:</span> 29
          </div>
          <div>
            <span className="text-cyan-400">A Grades:</span> 9.55/10.0
          </div>
          <div>
            <span className="text-cyan-400">Success Rate:</span> 100%
          </div>
          <div>
            <span className="text-cyan-400">Status:</span> <span className="text-green-400">Pursuing</span>
          </div>
        </div>
      </div>
    </div>
  ),
}
