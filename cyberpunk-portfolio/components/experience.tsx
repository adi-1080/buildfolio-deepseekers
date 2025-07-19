import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, ExternalLink, Code, Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "Quickyearning Private Limited",
      role: "Backend Developer Intern",
      duration: "December 2024 - March 2025",
      location: "Mumbai, Maharashtra",
      type: "Hybrid",
      status: "COMPLETED",
      statusColor: "text-green-400",
      description: "Developed and deployed scalable web applications using React.js and Node.js. Collaborated with senior developers on enterprise-level projects and implemented CI/CD pipelines.",
      achievements: [
        "Engineered a scalable Django backend for fetching realtime stock market data using yfinance package",
        "Reduced API response time by 40% through optimization",
        "Implemented web-scraping for miscellaneous data",
        "Lead the backend team at times with my teammates during the internship tenure"
      ],
      technologies: ["React.js", "Node.js", "Django", "PostgreSQL", "Docker", "AWS", "Git"],
      companyUrl: "https://quickyearning.com",
      certificateUrl: "https://drive.google.com/file/d/1PI2Ahk2OyJR41MdWo1YUf-svUNc3YHxI/view?usp=drive_link",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Remote": return "text-cyan-400 border-cyan-400/30 bg-cyan-400/10"
      case "Hybrid": return "text-purple-400 border-purple-400/30 bg-purple-400/10"
      case "On-site": return "text-green-400 border-green-400/30 bg-green-400/10"
      default: return "text-gray-400 border-gray-400/30 bg-gray-400/10"
    }
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400 font-mono">{"<"}</span>
            <span className="text-white">Experience</span>
            <span className="text-cyan-400 font-mono">{" />"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Professional journey and internship experiences</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-black/50 border-cyan-400/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-cyan-400 font-mono flex items-center gap-2 mb-2">
                      <Briefcase className="w-6 h-6" />
                      {exp.role}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 font-mono text-lg">{exp.company}</span>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <Badge className={`font-mono text-xs ${exp.statusColor} bg-black/50 border border-current`}>
                      {exp.status}
                    </Badge>
                    <Badge className={`font-mono text-xs ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="text-green-400 font-mono text-sm mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    KEY_ACHIEVEMENTS.array
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-green-400 font-mono mt-1"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-yellow-400 font-mono text-sm mb-3">TECH_STACK.json</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-yellow-500/20 border border-yellow-400/30 rounded text-xs font-mono text-yellow-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                  >
                    <ExternalLink className="w-4 h-4" />
                    VIEW_CERTIFICATE.pdf
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <Card className="bg-black/50 border-pink-400/30 backdrop-blur-sm mt-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-pink-400 font-mono text-center">
              EXPERIENCE_SUMMARY.stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 border border-green-400/30 rounded-lg bg-green-400/5">
                <div className="text-3xl font-bold text-green-400 font-mono mb-2">3</div>
                <div className="text-sm text-gray-400">Internships</div>
              </div>
              <div className="text-center p-4 border border-cyan-400/30 rounded-lg bg-cyan-400/5">
                <div className="text-3xl font-bold text-cyan-400 font-mono mb-2">12+</div>
                <div className="text-sm text-gray-400">Months Experience</div>
              </div>
              <div className="text-center p-4 border border-purple-400/30 rounded-lg bg-purple-400/5">
                <div className="text-3xl font-bold text-purple-400 font-mono mb-2">15+</div>
                <div className="text-sm text-gray-400">Technologies Used</div>
              </div>
              <div className="text-center p-4 border border-yellow-400/30 rounded-lg bg-yellow-400/5">
                <div className="text-3xl font-bold text-yellow-400 font-mono mb-2">8+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}