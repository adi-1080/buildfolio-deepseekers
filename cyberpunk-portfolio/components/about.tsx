import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400 font-mono">{"<"}</span>
            <span className="text-white">About Me</span>
            <span className="text-cyan-400 font-mono">{" />"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-black/50 border-cyan-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-4 font-mono">PERSONAL_DATA.json</h3>
                <div className="space-y-3 font-mono text-sm">
                  <p>
                    <span className="text-cyan-400">name:</span> <span className="text-green-400">"Aditya Gupta"</span>
                  </p>
                  <p>
                    <span className="text-cyan-400">role:</span>{" "}
                    <span className="text-green-400">"Full-Stack Developer"</span>
                  </p>
                  <p>
                    <span className="text-cyan-400">location:</span>{" "}
                    <span className="text-green-400">"Mumbai, Maharashtra"</span>
                  </p>
                  <p>
                    <span className="text-cyan-400">experience:</span>{" "}
                    <span className="text-green-400">"2+ years"</span>
                  </p>
                  <p>
                    <span className="text-cyan-400">status:</span>{" "}
                    <span className="text-green-400 animate-pulse">"available_for_hire"</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">INTERESTS.array</h3>
                <div className="flex flex-wrap gap-2">
                  {["Cybersecurity", "AI/ML", "Blockchain", "IoT", "Cloud Computing", "Open Source"].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-sm font-mono text-cyan-400"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="text-lg text-gray-300 leading-relaxed space-y-4">
              <p>
                I'm a passionate full-stack developer with a deep fascination for cybersecurity and emerging
                technologies. My journey began with curiosity about how things work under the hood, leading me to
                explore everything from web development to ethical hacking.
              </p>
              <p>
                With over 2 years of experience, I've worked on diverse projects ranging from scalable web applications
                to security audits. I believe in writing clean, efficient code and staying updated with the latest
                industry trends and best practices.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, participating in hackathons,
                or exploring the latest cybersecurity challenges. I'm always eager to learn new technologies and
                collaborate on innovative projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 border border-green-400/30 rounded-lg bg-green-400/5">
                <div className="text-3xl font-bold text-green-400 font-mono">50+</div>
                <div className="text-sm text-gray-400">Code Repositories</div>
              </div>
              <div className="text-center p-4 border border-purple-400/30 rounded-lg bg-purple-400/5">
                <div className="text-3xl font-bold text-purple-400 font-mono">400+</div>
                <div className="text-sm text-gray-400">Contributions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
