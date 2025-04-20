import { useState, useEffect, useRef } from "react"
import { ModeToggle } from "../components/ModeToggle"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { motion , useAnimation} from "framer-motion"
import { Card, CardContent } from "../components/ui/Card"
import { useTheme } from "../components/ThemeProvider"
import ExperienceCard from "../components/experience-card"
import { Github,  Linkedin, Mail, ExternalLink, Code, BookOpen, Award, User, Menu, Briefcase } from "lucide-react"
import BCICard from "../components/club"
import USF from "../components/USF"

import { WindowIcon } from "../assets/icon"

import Dash from "../assets/Dash.png"
import Toast from "../assets/Toast.png"
import MERN from "../assets/MERN.png"
import ML from "../assets/ML.png"
import Pytorch from "../assets/PyTorch.png"
import Whale from "../assets/whale.png"
import Cart from "../assets/Cart.jpg"
import SkinIntel from "../assets/SkinIntel.png"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

// Custom hook for scroll animations
function useScrollAnimation() {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  return { ref, controls }
}

export default function Home() {

  const [status, setStatus] = useState('idle'); 
  const [errorMessage, setErrorMessage] = useState('');

  const { theme, setTheme } = useTheme()
  console.log("Current theme in Home:", theme)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    
    try {
      const response = await fetch("https://formspree.io/f/mqapgrge", { // Replace YOUR_FORM_ID with your Formspree form ID
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.text();
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Create animation controls for each section
  const aboutAnimation = useScrollAnimation()
  const educationAnimation = useScrollAnimation()
  const skillsAnimation = useScrollAnimation()
  const certificationAnimation = useScrollAnimation()
  const experienceAnimation = useScrollAnimation()
  const projectsAnimation = useScrollAnimation()
  const contactAnimation = useScrollAnimation()

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
          <div className="border-1 p-2 border-gray-500  rounded-md">
            {WindowIcon}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Keeping existing animations */}
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
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white"
              >
                My name is <span className="text-blue-900 dark:text-blue-400">Han Nguyen</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-500 dark:text-gray-400"
              >
                Passionate about Full-stack Development, Machine Learning and Whales.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4"
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4 pt-1"
              >
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
              </motion.div>
            </div>
            <div className="flex justify-center hidden md:flex">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isLoaded ? 1 : 0,
                  scale: isLoaded ? 1 : 0.9,
                  y: [0, -15, 0],
                }}
                transition={{
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8 },
                  y: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
                className="relative aspect-square w-[300px] h-[300px] md:w-[390px] md:h-[390px] rounded-full bg-blue-50 dark:bg-sky-100 p-1"
              >
                <motion.div
                  className="absolute inset-0 rounded-full overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    rotate: 10,
                    transition: { duration: 0.5 },
                  }}
                >
                  <img src={Whale || "/placeholder.svg"} alt="Whale illustration" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section - With Animation */}
        <motion.section
          id="about"
          ref={aboutAnimation.ref}
          className="py-12 px-6 border-t border-gray-200 dark:border-gray-800"
          variants={containerVariants}
          initial="hidden"
          animate={aboutAnimation.controls}
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Hello everyone, "Whalecome" to my little corner of the internet! I am currently a student at
                  University of South Florida and incoming SWE intern at FPT Software.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Please feel free to explore around and I would be more than happy to connect with everyone.
                </p>
                <motion.div variants={containerVariants} className="flex flex-wrap gap-2 pt-2">
                  {["Computer Science", "Machine Learning", "Full-stack Development"].map((badge, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: 0.3 + index * 0.1,
                            duration: 0.4,
                          },
                        },
                      }}
                    >
                      <Badge variant="secondary">{badge}</Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div variants={cardVariants}>
                <Card className="flex">
                  <CardContent className="p-6 flex justify-center items-center">
                    <motion.div variants={containerVariants} className="space-y-4">
                      <motion.div variants={itemVariants} className="flex items-center gap-2 mt-4">
                        <Award className="h-5 w-5 text-blue-800 dark:text-blue-400" />
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-white">Achievements</h3>
                      </motion.div>
                      <motion.ul variants={containerVariants} className="space-y-3">
                        {[
                          "GPA: 4.0",
                          "Selected for the Dean's List - Fall 2024",
                          "University of South Florida Green & Gold Director Award",
                        ].map((achievement, index) => (
                          <motion.li
                            key={index}
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                  delay: 0.2 + index * 0.15,
                                  duration: 0.4,
                                },
                              },
                            }}
                            className="flex items-start gap-2"
                          >
                            <div className="h-5 w-5 flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-0.5">
                              <span className="h-2.5 w-2.5 rounded-full bg-blue-900 dark:bg-blue-400" />
                            </div>
                            <div>
                              <span className="font-medium text-gray-900 dark:text-white">{achievement}</span>
                            </div>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Education Section - With Animation */}
        <motion.section
          id="education"
          ref={educationAnimation.ref}
          className="py-12 px-6 border-t border-gray-200 dark:border-gray-800"
          variants={containerVariants}
          initial="hidden"
          animate={educationAnimation.controls}
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col pt-4 md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        University of South Florida
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">Bachelor of Science in Computer Science</p>
                      <motion.div variants={containerVariants} className="mt-2 flex flex-wrap gap-2">
                        {["GPA: 4.0", "Dean's List", "Director Award"].map((badge, index) => (
                          <motion.div
                            key={index}
                            variants={{
                              hidden: { opacity: 0, scale: 0.8 },
                              visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { delay: 0.2 + index * 0.1, duration: 0.3 },
                              },
                            }}
                          >
                            <Badge>{badge}</Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900 dark:text-white">2024 - Present</p>
                      <p className="text-gray-500 dark:text-gray-400">Tampa, Florida</p>
                    </div>
                  </div>
                  <motion.div variants={itemVariants} className="mt-4">
                    <p className="text-gray-700 dark:text-gray-300">Relevant Coursework:</p>
                    <motion.div variants={containerVariants} className="mt-2 flex flex-wrap gap-2">
                      {["Data Structures", "Algorithms", "Computer Systems", "Software Engineering"].map(
                        (course, index) => (
                          <motion.div
                            key={index}
                            variants={{
                              hidden: { opacity: 0, y: 10 },
                              visible: {
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.3 + index * 0.1, duration: 0.3 },
                              },
                            }}
                          >
                            <Badge variant="secondary">{course}</Badge>
                          </motion.div>
                        ),
                      )}
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants} transition={{ delay: 0.2 }}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col pt-4 md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Nguyen Huu Huan High School
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">High School Diploma</p>
                      <motion.div variants={containerVariants} className="mt-2 flex flex-wrap gap-2">
                        {["GPA: 3.9", "Dean's List", "HCMC English Olympiad"].map((badge, index) => (
                          <motion.div
                            key={index}
                            variants={{
                              hidden: { opacity: 0, scale: 0.8 },
                              visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { delay: 0.2 + index * 0.1, duration: 0.3 },
                              },
                            }}
                          >
                            <Badge>{badge}</Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900 dark:text-white">2021 - 2024</p>
                      <p className="text-gray-500 dark:text-gray-400">HCMC, Vietnam</p>
                    </div>
                  </div>
                  <motion.div variants={itemVariants} className="mt-4">
                    <p className="text-gray-700 dark:text-gray-300">Extracurriculars:</p>
                    <motion.div variants={containerVariants} className="mt-2 flex flex-wrap gap-2">
                      {["Tech Chair @ NHH IT Club", "First Prize @ NHH Flashmob 2024"].map((activity, index) => (
                        <motion.div
                          key={index}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { delay: 0.3 + index * 0.1, duration: 0.3 },
                            },
                          }}
                        >
                          <Badge variant="secondary">{activity}</Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section - With Animation */}
        <motion.section
          id="skills"
          ref={skillsAnimation.ref}
          className="py-12 px-6 border-t border-gray-200 dark:border-gray-800"
          variants={containerVariants}
          initial="hidden"
          animate={skillsAnimation.controls}
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Frontend", items: ["HTML/CSS", "JavaScript", "React", "Next.js"] },
                { title: "Backend", items: ["Python", "JavaScript", "Node.js", "SQL"] },
                { title: "Tools", items: ["GitHub", "VS Code", "Docker", "PyCharm"] },
                { title: "Other", items: ["Blender", "MatLab", "PyTorch", "TensorFlow"] },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.1 * index,
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <Card className="overflow-hidden">
                    <div className="h-2 bg-blue-900" />
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white pt-3">{skill.title}</h3>
                      <motion.ul
                        className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300"
                        variants={containerVariants}
                      >
                        {skill.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            variants={{
                              hidden: { opacity: 0, x: -5 },
                              visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                  delay: 0.3 + itemIndex * 0.1,
                                  duration: 0.3,
                                },
                              },
                            }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Certification Section - With Animation */}
        <motion.section
          id="certification"
          ref={certificationAnimation.ref}
          className="py-12 px-6 border-t border-gray-200 dark:border-gray-800"
          variants={containerVariants}
          initial="hidden"
          animate={certificationAnimation.controls}
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Artificial Intelligence Foundations: Machine Learning",
                  image: ML,
                  badges: ["Machine Learning", "Artificial Intelligence"],
                  description: "Basics of Machine Learning and AI.",
                },
                {
                  title: "App Development with the MERN Stack",
                  image: MERN,
                  badges: ["ExpressJS", "Full-stack Development", "MongoDB"],
                  description: "Introductionary course to Full-stack development.",
                },
                {
                  title: "PyTorch Essential Training: Deep Learning",
                  image: Pytorch,
                  badges: ["PyTorch", "Deep Learning"],
                  description: "Fundamentals of PyTorch and Deep Learning.",
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2 * index,
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <Card className="overflow-hidden h-full">
                    <motion.div
                      className="aspect-video bg-gray-100 dark:bg-gray-800 relative"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img src={cert.image || "/placeholder.svg"} alt="" className="object-cover w-full h-full" />
                      </div>
                    </motion.div>
                    <CardContent className="p-6">
                      <h3 className="text-xl mt-4 font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                      <motion.div variants={containerVariants} className="mt-2 flex flex-wrap gap-2">
                        {cert.badges.map((badge, badgeIndex) => (
                          <motion.div
                            key={badgeIndex}
                            variants={{
                              hidden: { opacity: 0, scale: 0.8 },
                              visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { delay: 0.4 + badgeIndex * 0.1, duration: 0.3 },
                              },
                            }}
                          >
                            <Badge variant="achievement">{badge}</Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                      <motion.p variants={itemVariants} className="text-gray-500 dark:text-gray-400 mt-2">
                        {cert.description}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="Experience"
          ref={experienceAnimation.ref}
          className="py-12 px-6 border-t border-gray-200 dark:border-gray-800"
          variants={containerVariants}
          initial="hidden"
          animate={experienceAnimation.controls}
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <Briefcase className="h-8 w-5 text-blue-800 dark:text-blue-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
              </div>
              
              <motion.div variants={cardVariants} className="space-y-4">
                <motion.div variants={itemVariants}>
                  <ExperienceCard />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <BCICard />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <USF />
                </motion.div>
              </motion.div>
            </motion.div>  
          </div>
        </motion.section>

        {/* Projects Section - With Animation */}
        <motion.section
          id="projects"
          ref={projectsAnimation.ref}
          className="py-12 px-6 border-t border-gray-200 dark:border-gray-800"
          variants={containerVariants}
          initial="hidden"
          animate={projectsAnimation.controls}
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "ToastTutor",
                  image: Toast,
                  badges: ["React", "Stripe", "Redis", "Django", "SupaBase"],
                  description:
                    "Web platform to connect K-12 students with qualified tutors based on skill level, time availability.",
                },
                {
                  title: "DashConnect",
                  image: Dash,
                  badges: ["NodeJS", "ExpressJS", "MongoDB"],
                  description: "Web platform where users can share blogs, create accounts and more.",
                },
                {
                  title: "GreenCart",
                  image: Cart,
                  badges: ["NextJS", "NodeJS", "MongoDB", "Python"],
                  description: "A web extension and web app to check the eco-friendliness of a product.",
                },
                {
                  title: "SkinIntel",
                  image: SkinIntel,
                  badges: ["NodeJS", "ExpressJS", "MongoDB"],
                  description: "AI-Powered Skin Cancer Detection Platform that uses the ABCDE method.",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2 * index,
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <Card className="overflow-hidden h-full">
                    <motion.div
                      className="aspect-video bg-gray-100 dark:bg-gray-800 relative"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img src={project.image || "/placeholder.svg"} alt="" className="object-cover w-full h-full" />
                      </div>
                    </motion.div>
                    <CardContent className="p-6">
                      <h3 className="text-xl mt-4 font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                      <motion.div variants={containerVariants} className="mt-2 flex flex-wrap gap-2">
                        {project.badges.map((badge, badgeIndex) => (
                          <motion.div
                            key={badgeIndex}
                            variants={{
                              hidden: { opacity: 0, scale: 0.8 },
                              visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { delay: 0.4 + badgeIndex * 0.1, duration: 0.3 },
                              },
                            }}
                          >
                            <Badge variant="achievement">{badge}</Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                      <motion.p variants={itemVariants} className="text-gray-500 dark:text-gray-400 mt-2">
                        {project.description}
                      </motion.p>
                      <motion.div variants={itemVariants} className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        <Button size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="flex justify-center mt-8">
              <a href="https://github.com/XuanGiaHanNguyen" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  View All Projects
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section - With Animation */}
        <motion.section
          id="contact"
          ref={contactAnimation.ref}
          className="py-12 px-6 border-t border-gray-200 dark:border-gray-800"
          variants={containerVariants}
          initial="hidden"
          animate={contactAnimation.controls}
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={cardVariants}>
                <Card className="flex justify-center items-center h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Get In Touch</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      Feel free to reach out if you have any questions or want to work together!
                    </p>
                    <motion.div variants={containerVariants} className="mt-6 space-y-4">
                      {[
                        { icon: Code, label: "Website", value: "xuangiahannguyen.github.io/PortfolioPage/" },
                        { icon: Mail, label: "Email", value: "xuangiahannguyen@gmail.com" },
                        { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/xuangiahannguyen" },
                        { icon: Github, label: "GitHub", value: "github.com/XuanGiaHanNguyen" },
                      ].map((contact, index) => (
                        <motion.div
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: { delay: 0.3 + index * 0.1, duration: 0.4 },
                            },
                          }}
                          className="flex items-center gap-3"
                        >
                          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                            <contact.icon className="h-4 w-4" />
                          </Button>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</p>
                            <p className="font-medium text-gray-900 dark:text-white">{contact.value}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardVariants} transition={{ delay: 0.2 }}>
                <Card className="py-4">
                  <CardContent className="p-6">
                  <motion.form 
                      variants={containerVariants} 
                      className="space-y-4"
                      onSubmit={handleSubmit} // Add this line to connect the form to your submit handler
                    >
                      {[
                        { id: "name", name: "name", label: "Name", type: "text", placeholder: "Your name"},
                        { id: "email", name: "email", label: "Email", type: "email", placeholder: "Your email"},
                        { id: "message", name: "message", label: "Message", type: "textarea", placeholder: "Your message" },
                      ].map((field, index) => (
                        <motion.div
                          key={index}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { delay: 0.2 + index * 0.1, duration: 0.4 },
                            },
                          }}
                          className="space-y-2"
                        >
                          <label htmlFor={field.id} className="text-sm font-medium text-gray-900 dark:text-white">
                            {field.label}
                          </label>
                          {field.type === "textarea" ? (
                            <textarea
                              id={field.id}
                              name={field.name} // Add this line
                              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 min-h-[120px]"
                              placeholder={field.placeholder}
                              value={formData[field.name]}
                              onChange={handleChange}
                            />
                          ) : (
                            <input
                              id={field.id}
                              name={field.name} // Add this line
                              type={field.type}
                              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                              placeholder={field.placeholder}
                              value={formData[field.name]}
                              onChange={handleChange}
                            />
                          )}
                        </motion.div>
                      ))}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.5, duration: 0.4 },
                          },
                        }}
                      >
                        <Button type="submit" className="w-full">
                          {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </Button>
                        
                        {status === 'success' && (
                          <p className="text-blue-500 mt-2 text-sm">Message sent successfully!</p>
                        )}
                        
                        {status === 'error' && (
                          <p className="text-gray-500 mt-2 text-sm">{errorMessage}</p>
                        )}
                      </motion.div>
                    </motion.form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>
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

