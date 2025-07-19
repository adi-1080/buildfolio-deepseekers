import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Deepfake Detection",
      description: "Built and deployed an ML model for deepfake detection for real-time social media apps.",
      tech: ["ResNet", "librosa", "streamlit", "transformers", "pytorch"],
      status: "DEPLOYED",
      statusColor: "text-green-400",
      image: "/projects/deepfake.png",
      githubUrl: "https://github.com/adi-1080/hackanova-4.0",
      demoUrl: "https://ml-mavericks-hackanova.streamlit.app",
    },
    {
      title: "EventIQ",
      description: "AI Driven Event Management system for college committees providing features like task automation, budget allocation and poster generation.",
      tech: ["React.js", "Node.js", "MongoDB", "Render", "FastAPI", "Gemini"],
      status: "COMPLETED",
      statusColor: "text-blue-400",
      image: "/projects/eventiq.png",
      githubUrl: "https://github.com/Samyak-Vishrani/EventIQ-SPIT_HackXplore",
      demoUrl: "https://www.youtube.com/watch?v=5agQ3xOQOg4&feature=youtu.be"
    },
    {
      title: "MediSync",
      description: "Clinic appointment booking system for local clinics focused to avoid long waiting queues.",
      tech: ["React.js", "Node.js", "MongoDB", "Render", "FastAPI", "Gemini"],
      status: "DEPLOYED",
      statusColor: "text-green-400",
      image: "/projects/medisync.png",
      githubUrl: "",
      demoUrl: "https://medi-sync-phi.vercel.app/"
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400 font-mono">{"<"}</span>
            <span className="text-white">Projects</span>
            <span className="text-cyan-400 font-mono">{" />"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Explore my digital creations and innovations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-black/50 border-cyan-400/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div
                  className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-mono ${project.statusColor} bg-black/50 border border-current`}
                >
                  {project.status}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-cyan-400 font-mono">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded text-xs font-mono text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    size="sm"
                    className="bg-green-500/20 border border-green-400 text-green-400 hover:bg-green-500/30 flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-cyan-500/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-500/30 flex-1"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
