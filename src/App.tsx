import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

function App() {
  const projects = [
    {
      title: "Teekeks Final",
      description: "A modern web application built with React and TypeScript",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/Redietttt/teekeksfinal.git"
    },
    {
      title: "Kidus Ephrem",
      description: "Full-stack application with real-time features",
      tech: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/Redietttt/KidusEphrem.git"
    },
    {
      title: "Student Management",
      description: "Student management system with modern UI/UX",
      tech: ["Next.js", "shadcn/ui", "Prisma"],
      link: "https://github.com/amertie/student-management.git"
    }
  ]

  const skills = [
    "React", "TypeScript", "JavaScript", "Node.js", "Tailwind CSS",
    "Next.js", "Git", "REST APIs", "MongoDB", "PostgreSQL"
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Rediet Tekeste</h1>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Redietttt/" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:rediet.tekeste@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold mb-4">Hi, I'm Rediet Tekeste</h2>
          <p className="text-xl text-muted-foreground mb-8">
            A passionate full-stack developer creating beautiful and functional web experiences.
            I specialize in building modern web applications with React, TypeScript, and Node.js.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="mailto:rediet.tekeste@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href={project.link}>
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8">Skills & Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            © 2024 Rediet Tekeste. Built with React, Vite, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
