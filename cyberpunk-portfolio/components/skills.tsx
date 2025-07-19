import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "text-green-400",
      borderColor: "border-green-400/30",
      bgColor: "bg-green-400/5",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 70 },
      ],
    },
    {
      title: "Backend",
      color: "text-purple-400",
      borderColor: "border-purple-400/30",
      bgColor: "bg-purple-400/5",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "DevOps",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
      bgColor: "bg-cyan-400/5",
      skills: [
        { name: "Docker", level: 58 },
        { name: "AWS", level: 60 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 52 },
      ],
    },
    {
      title: "AI/ML",
      color: "text-pink-400",
      borderColor: "border-pink-400/30",
      bgColor: "bg-pink-400/5",
      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Deep Learning", level: 85 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 83 },
      ],
    },
    {
      title: "Security",
      color: "text-red-400",
      borderColor: "border-red-400/30",
      bgColor: "bg-red-400/5",
      skills: [
        { name: "Penetration Testing", level: 2 },
        { name: "Cryptography", level: 2 },
        { name: "Network Security", level: 2 },
        { name: "OWASP", level: 2 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400 font-mono">{"<"}</span>
            <span className="text-white">Skills</span>
            <span className="text-cyan-400 font-mono">{" />"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">My technical arsenal and expertise levels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-black/50 ${category.borderColor} ${category.bgColor} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
            >
              <CardHeader>
                <CardTitle className={`text-xl font-bold ${category.color} font-mono text-center`}>
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-gray-300">{skill.name}</span>
                      <span className={`text-xs font-mono ${category.color}`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color.includes("green")
                          ? "from-green-400 to-green-600"
                          : category.color.includes("purple")
                            ? "from-purple-400 to-purple-600"
                            : category.color.includes("cyan")
                              ? "from-cyan-400 to-cyan-600"
                              : category.color.includes("pink")
                                ? "from-pink-400 to-pink-600"
                                : "from-red-400 to-red-600"
                          } transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-black/50 border-yellow-400/30 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 font-mono">ADDITIONAL_SKILLS.array</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Machine Learning",
                  "Blockchain",
                  "GraphQL",
                  "Redis",
                  "Kubernetes",
                  "Terraform",
                  "Jest",
                  "Cypress",
                  "Figma",
                  "Photoshop",
                  "Linux",
                  "Bash Scripting",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-lg text-center hover:border-yellow-400/50 transition-colors duration-300"
                  >
                    <span className="text-sm font-mono text-yellow-400">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
