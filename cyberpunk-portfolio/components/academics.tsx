import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen, Calendar, Star, Trophy } from "lucide-react"

export function Academics() {
  const academicData = {
    degree: "B.Tech Computer Engineering",
    college: "Dwarkadas J. Sanghvi College Of Engineering",
    duration: "2023 - 2027",
    cgpa: "9.55",
    maxCgpa: "10.0",
    status: "Pursuing",
    specialization: "Honours in Data Science",
  }

  const courses = [
    { name: "Data Structures", grade: "A+", credits: 4 },
    { name: "Computer Networks & IOT Fundamentals", grade: "A", credits: 3 },
    { name: "Database Management Systems", grade: "A+", credits: 4 },
    { name: "Analysis Of Algorithms", grade: "A+", credits: 4 },
    { name: "Operating Systems", grade: "A+", credits: 4 },
    { name: "Digital Electronics", grade: "A+", credits: 2 },
    { name: "Advanced Operations Research", grade: "O", credits: 3 },
    { name: "Product Lifecycle Management", grade: "O", credits: 3 },
    { name: "Economics & Financial Management", grade: "O", credits: 2 },
  ]

  const achievements = [
    {
      title: "HackXplore | TechTopia",
      description: "Being among the top 10 teams at this hackathon organized by Sardar Patel Institute of Technology",
      years: "2025",
      icon: <Star className="w-5 h-5" />,
    },
    {
      title: "GirlScript Summer of Code",
      description: "Selected participant for open source contribution",
      years: "2025",
      icon: <Award className="w-5 h-5" />,
    },  
  ]

  const certifications = [
    { name: "Machine Learning", year: "2024", status: "ACTIVE" },
    { name: "Version Control", year: "2024", status: "ACTIVE" },
    { name: "JavaScript (Basic)", year: "2024", status: "ACTIVE" },
    { name: "Kali Linux", year: "2025", status: "ACTIVE" },
    { name: "Deep Learning", year: "2024", status: "IN PROGRESS" },
  ]



  const getGradeColor = (grade: string) => {
    if (grade.includes("O")) return "text-fuchsia-400"
    if (grade.includes("A+")) return "text-green-400"
    if (grade.includes("A")) return "text-cyan-400"
    if (grade.includes("B")) return "text-yellow-400"
    return "text-gray-400"
  }

  return (
    <section id="academics" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400 font-mono">{"<"}</span>
            <span className="text-white">Academics</span>
            <span className="text-cyan-400 font-mono">{" />"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Educational journey and academic achievements</p>
        </div>

        {/* Main Academic Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-black/50 border-cyan-400/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-cyan-400 font-mono flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                EDUCATION_DATA.json
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 font-mono text-sm">
                <p>
                  <span className="text-purple-400">degree:</span>{" "}
                  <span className="text-green-400">"{academicData.degree}"</span>
                </p>
                <p>
                  <span className="text-purple-400">college:</span>{" "}
                  <span className="text-green-400">"{academicData.college}"</span>
                </p>
                <p>
                  <span className="text-purple-400">duration:</span>{" "}
                  <span className="text-green-400">"{academicData.duration}"</span>
                </p>
                <p>
                  <span className="text-purple-400">specialization:</span>{" "}
                  <span className="text-green-400">"{academicData.specialization}"</span>
                </p>
                <p>
                  <span className="text-purple-400">status:</span>{" "}
                  <span className="text-green-400 animate-pulse">"{academicData.status}"</span>
                </p>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/30 rounded-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 font-mono mb-2">
                    {academicData.cgpa}/{academicData.maxCgpa}
                  </div>
                  <div className="text-sm text-gray-400">Cumulative GPA</div>
                  <div className="mt-2 w-full bg-gray-800 rounded-full h-3">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000 ease-out"
                      style={{
                        width: `${(Number.parseFloat(academicData.cgpa) / Number.parseFloat(academicData.maxCgpa)) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-purple-400/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-400 font-mono flex items-center gap-2">
                <Award className="w-6 h-6" />
                CERTIFICATIONS.array
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-purple-400/30 rounded-lg bg-purple-400/5"
                >
                  <div>
                    <h4 className="font-bold text-purple-400 text-sm">{cert.name}</h4>
                    <p className="text-xs text-gray-400">Issued: {cert.year}</p>
                  </div>
                  <Badge
                    className={`font-mono text-xs ${cert.status === "ACTIVE"
                      ? "bg-green-400/20 text-green-400 border-green-400/30"
                      : "bg-yellow-400/20 text-yellow-400 border-yellow-400/30"
                      }`}
                  >
                    {cert.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="bg-black/50 border-yellow-400/30 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-yellow-400 font-mono flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              ACHIEVEMENTS.db
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 border border-yellow-400/30 rounded-lg bg-yellow-400/5 hover:bg-yellow-400/10 transition-colors duration-300"
                >
                  <div className="text-yellow-400 mt-1">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-yellow-400 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-300 mb-2">{achievement.description}</p>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-gray-500" />
                      <span className="text-xs text-gray-500 font-mono">{achievement.years}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>


        {/* Course Details */}
        <Card className="bg-black/50 border-green-400/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-400 font-mono flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              RELEVANT_COURSEWORK.table
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full font-mono text-sm">
                <thead>
                  <tr className="border-b border-green-400/30">
                    <th className="text-left py-3 px-2 text-green-400">Course Name</th>
                    <th className="text-center py-3 px-2 text-green-400">Grade</th>
                    <th className="text-center py-3 px-2 text-green-400">Credits</th>
                    <th className="text-center py-3 px-2 text-green-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-800 hover:bg-green-400/5 transition-colors duration-200"
                    >
                      <td className="py-3 px-2 text-gray-300">{course.name}</td>
                      <td className={`py-3 px-2 text-center font-bold ${getGradeColor(course.grade)}`}>
                        {course.grade}
                      </td>
                      <td className="py-3 px-2 text-center text-gray-400">{course.credits}</td>
                      <td className="py-3 px-2 text-center">
                        <Badge className="bg-green-400/20 text-green-400 border-green-400/30 font-mono text-xs">
                          COMPLETED
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-green-400/30 rounded-lg bg-green-400/5">
                <div className="text-2xl font-bold text-green-400 font-mono">
                  {courses.reduce((sum, course) => sum + course.credits, 0)}
                </div>
                <div className="text-sm text-gray-400">Total Credits</div>
              </div>
              <div className="text-center p-4 border border-cyan-400/30 rounded-lg bg-cyan-400/5">
                <div className="text-2xl font-bold text-cyan-400 font-mono">
                  {courses.filter((course) => ["O", "A+", "A"].includes(course.grade)).length}
                </div>
                <div className="text-sm text-gray-400">Excellent Grades</div>
              </div>
              <div className="text-center p-4 border border-purple-400/30 rounded-lg bg-purple-400/5">
                <div className="text-2xl font-bold text-purple-400 font-mono">
                  {((courses.filter((course) => ["O", "A+", "A"].includes(course.grade)).length / courses.length) * 100).toFixed(0)}%
                </div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
