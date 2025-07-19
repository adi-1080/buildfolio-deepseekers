import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400 font-mono">{"<"}</span>
            <span className="text-white">Contact</span>
            <span className="text-cyan-400 font-mono">{" />"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Let's connect and build something amazing together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-black/50 border-cyan-400/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-cyan-400 font-mono">GET_IN_TOUCH.exe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 border border-green-400/30 rounded-lg bg-green-400/5">
                  <Mail className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-green-400 font-mono text-sm">EMAIL</p>
                    <p className="text-white">adityagupta5277@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 border border-purple-400/30 rounded-lg bg-purple-400/5">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-purple-400 font-mono text-sm">PHONE</p>
                    <p className="text-white">+91 7021153275</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 border border-yellow-400/30 rounded-lg bg-yellow-400/5">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <div>
                    <p className="text-yellow-400 font-mono text-sm">LOCATION</p>
                    <p className="text-white">Mumbai, Maharashtra</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-cyan-400/30">
                <p className="text-cyan-400 font-mono text-sm mb-4">SOCIAL_LINKS.json</p>
                <div className="flex space-x-4">
                  <Button
                    size="sm"
                    className="bg-gray-800 border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                    asChild
                  >
                    <a href="https://github.com/adi-1080" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gray-800 border border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400"
                    asChild
                  >
                    <a href="https://x.com/adi_1080" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gray-800 border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/adi1080/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-purple-400/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-400 font-mono">SEND_MESSAGE.form</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-mono text-cyan-400 mb-2">NAME</label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-cyan-400 mb-2">EMAIL</label>
                  <input
                    type="email"
                    className="w-full bg-black/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Enter your email..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-cyan-400 mb-2">MESSAGE</label>
                  <textarea
                    rows={5}
                    className="w-full bg-black/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-mono uppercase tracking-wider py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
