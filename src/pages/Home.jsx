import { useState } from "react"
import { ModeToggle } from "../components/ModeToggle"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { Card, CardContent } from "../components/ui/Card"
import { useTheme } from "../components/ThemeProvider"
import { Github,  Linkedin, Mail, ExternalLink, Code, BookOpen, Award, User, Menu, Briefcase } from "lucide-react"

import Dash from "../assets/Dash.png"
import Toast from "../assets/Toast.png"
import MERN from "../assets/MERN.png"
import ML from "../assets/ML.png"
import Pytorch from "../assets/PyTorch.png"
import Whale from "../assets/whale.png"


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const { theme, setTheme } = useTheme()
  console.log("Current theme in Home:", theme)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 dark:bg-gray-950/95 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="font-semibold text-gray-900 dark:text-white">Han Nguyen</div>
          <nav className="hidden md:flex items-center gap-8">
            
            <a
              href="#about"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-800 dark:hover:text-blue-400"
            >
              About
            </a>
            <a
              href="#education"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-800 dark:hover:text-blue-400"
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-800 dark:hover:text-blue-400"
            >
              Skills
            </a>
            <a
              href="#certification"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-800 dark:hover:text-blue-300"
            >
              Certifications
            </a>
            <a
              href="#Experience"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-800 dark:hover:text-blue-400"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-800 dark:hover:text-blue-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-800 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="home" className="py-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center px-6">
            <div className="space-y-4">
              <div className="flex flex-row gap-2">
                <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-300 px-3 py-1 text-sm">
                Computer Science
                </div>
                <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-300 px-3 py-1 text-sm">
                Full-Stack Developer
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
                My name is <span className="text-blue-900 dark:text-blue-400">Han Nguyen</span>
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                Passionate about Full-stack Development, Machine Learning and Whales.
              </p>
              <div className="flex gap-4">
              <a href="https://github.com/XuanGiaHanNguyen" target="_blank" rel="noopener noreferrer">
                <Button>
                  View Projects
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline">
                  Contact Me
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </a>
              </div>
              <div className="flex gap-4 pt-1">
              <a href="https://github.com/XuanGiaHanNguyen" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/xuangiahannguyen/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="mailto:xuangiahannguyen@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
              </div>
            </div>
            <div className="flex justify-center hidden md:flex">
              <div className="relative aspect-square w-[300px] h-[300px] md:w-[390px] md:h-[390px] rounded-full bg-blue-50 dark:bg-gray-700 p-1">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img src={Whale}/>
                </div>    
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Hello everyone, "Whalecome" to my little corner of the internet! I am currently a student at University of South Florida and incoming SWE at FPT Software.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Please feel free to explore around and I would be more than happy to connect with everyone.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Computer Science</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Full-stack Development</Badge>
                </div>
              </div>
              <Card className="flex">
                <CardContent className="p-6 flex justify-center items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mt-4">
                      <Award className="h-5 w-5 text-blue-800 dark:text-blue-400" />
                      <h3 className="text-xl font-semibold text-blue-900 dark:text-white">Achievements</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-0.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-blue-900 dark:bg-blue-400" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white">GPA: 4.0</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-0.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-blue-900 dark:bg-blue-400" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white">
                            Selected for the Dean’s List - Fall 2024
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-0.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-blue-900 dark:bg-blue-400" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white">
                            University of South Florida Green & Gold Director Award
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col pt-4 md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">University of South Florida</h3>
                    <p className="text-gray-500 dark:text-gray-400">Bachelor of Science in Computer Science</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge>GPA: 4.0</Badge>
                      <Badge>Dean's List</Badge>
                      <Badge>Director Award</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">2024 - Present</p>
                    <p className="text-gray-500 dark:text-gray-400">Tampa, Florida</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 dark:text-gray-300">Relevant Coursework:</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">Data Structures</Badge>
                    <Badge variant="secondary">Algorithms</Badge>
                    <Badge variant="secondary">Computer Systems</Badge>
                    <Badge variant="secondary">Software Engineering</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col pt-4 md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Nguyen Huu Huan High School</h3>
                    <p className="text-gray-500 dark:text-gray-400">High School Diploma</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge>GPA: 3.9</Badge>
                      <Badge>Dean's List</Badge>
                      <Badge>HCMC English Olympiad</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">2021 - 2024</p>
                    <p className="text-gray-500 dark:text-gray-400">HCMC, Vietnam</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 dark:text-gray-300">Extracurriculars:</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">Tech Chair @ NHH IT Club</Badge>
                    <Badge variant="secondary">First Prize @ NHH Flashmob 2024</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="overflow-hidden">
                <div className="h-2 bg-blue-900" />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white pt-3">Frontend</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-2 bg-blue-900" />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white pt-3">Backend</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>SQL</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-2 bg-blue-900" />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white pt-3">Tools</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>GitHub</li>
                    <li>VS Code</li>
                    <li>Docker</li>
                    <li>PyCharm</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-2 bg-blue-900" />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white pt-3">Other</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>Problem Solving</li>
                    <li>Team Collaboration</li>
                    <li>Project Management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* certification Section */}
        <section id="certification" className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Project 1 */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                   <img src={ML} alt="" className="object-cover w-full h-full"/>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mt-4 font-semibold text-gray-900 dark:text-white">Artificial Intelligence Foundations: Machine Learning</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="achievement">Machine Learning</Badge>
                    <Badge variant="achievement">Artificial Intelligence</Badge>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Basics of Machine Learning and AI.
                  </p>
                </CardContent>
              </Card>

              {/* Project 1 */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                   <img src={MERN} alt="" className="object-cover w-full h-full"/>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mt-4 font-semibold text-gray-900 dark:text-white">
                  App Development with the MERN Stack</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="achievement">ExpressJS</Badge>
                    <Badge variant="achievement">Full-stack Development</Badge>
                    <Badge variant="achievement">MongoDB</Badge>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Introductionary course to Full-stack development.
                  </p> 
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                   <img src={Pytorch} alt="" className="object-cover w-full h-full"/>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mt-4 font-semibold text-gray-900 dark:text-white">PyTorch Essential Training: Deep
                  Learning</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="achievement">PyTorch</Badge>
                    <Badge variant="achievement">Deep Learning</Badge>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Fundamentals of PyTorch and Deep Learning.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="Experience" className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col pt-4 md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Committee Chair</h3>
                    <p className="text-gray-500 dark:text-gray-400">USF Engineering Expo</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge>ReactJS</Badge>
                      <Badge>TailwindCSS</Badge>
                      <Badge>NodeJS</Badge>
                      <Badge>Group Work</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">2025 - Present</p>
                    <p className="text-gray-500 dark:text-gray-400">Tampa, Florida</p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="mt-2 flex flex-wrap gap-2">
                    <p className="text-gray-700 dark:text-gray-300">• Collaborated with a team to develop projects that inspire children to develop a passion for engineering.</p>
                    <p className="text-gray-700 dark:text-gray-300">• Designed and built a typing test with personalized feedback to enhance typing skills, featuring an engaging and visually appealing UI to captivate young learners.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col pt-4 md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Research Assistant</h3>
                    <p className="text-gray-500 dark:text-gray-400">HCMC University of Technology and Education</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge>Deep Learning</Badge>
                      <Badge>Data Science</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">2024 - Present</p>
                    <p className="text-gray-500 dark:text-gray-400">Hybrid</p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="mt-2 flex flex-wrap gap-2">
                  <p className="text-gray-700 dark:text-gray-300">• Helped develop an advanced method to classify malware families using deep learning techniques.</p>
                  <p className="text-gray-700 dark:text-gray-300">• Collected and processed data for cybersecurity analysis.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col pt-4 md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Teaching Assistant</h3>
                    <p className="text-gray-500 dark:text-gray-400">HCMC University of Technology and Education</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge>Discrete Math</Badge>
                      <Badge>Programming Basics</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">2023 - 2024</p>
                    <p className="text-gray-500 dark:text-gray-400">HCMC, Vietnam</p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="mt-2 flex flex-wrap gap-2">
                  <p className="text-gray-700 dark:text-gray-300">• Graded assignments and exams across multiple courses, ensuring consistent and fair evaluation standards.</p>
                  <p className="text-gray-700 dark:text-gray-300">• Managed administrative tasks, maintaining accurate student records and preparing grade reports.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                   <img src={Toast} alt="" className="object-cover w-full h-full"/>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mt-4 font-semibold text-gray-900 dark:text-white">ToastTutor</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="achievement">React</Badge>
                    <Badge variant="achievement">Stripe</Badge>
                    <Badge variant="achievement">Redis</Badge>
                    <Badge variant="achievement">Django</Badge>
                    <Badge variant="achievement">SupaBase</Badge>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Web platform to connect K-12 students with qualified tutors based on skill level, time availability.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={Dash} alt="" className="object-cover w-full h-full"/>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mt-4 font-semibold text-gray-900 dark:text-white">DashConnect</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="achievement">NodeJS</Badge>
                    <Badge variant="achievement">ExpressJS</Badge>
                    <Badge variant="achievement">MongoDB</Badge>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Web platform where users can share blogs, create accounts and more.
                  </p>
                  
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
            <a href="https://github.com/XuanGiaHanNguyen" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="flex justify-center items-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Get In Touch</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Feel free to reach out if you have any questions or want to work together!
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Code className="h-4 w-4" />
                      </Button>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Website</p>
                        <p className="font-medium text-gray-900 dark:text-white">xuangiahannguyen.github.io/PortfolioPage/</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <p className="font-medium text-gray-900 dark:text-white">xuangiahannguyen@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                        <p className="font-medium text-gray-900 dark:text-white">linkedin.com/in/xuangiahannguyen</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Github className="h-4 w-4" />
                      </Button>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                        <p className="font-medium text-gray-900 dark:text-white">github.com/XuanGiaHanNguyen</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="py-4">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-white">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-white">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 "
                        placeholder="Your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-900 dark:text-white">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 min-h-[120px]"
                        placeholder="Your message"
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
            © {new Date().getFullYear()} Han Nguyen. All rights reserved.
          </p>
          <div className="flex gap-4">
            
            <a href="https://github.com/XuanGiaHanNguyen" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/xuangiahannguyen/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="mailto:xuangiahannguyen@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

