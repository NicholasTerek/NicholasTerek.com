"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, Menu, Twitter, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => {
      observerRef.current?.observe(section)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f0e8] overflow-hidden">
      {/* Background patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[200px] h-[200px] rounded-full bg-[#e63946] opacity-5 blur-3xl"></div>
        <div className="absolute top-[70%] right-[10%] w-[300px] h-[300px] rounded-full bg-[#e63946] opacity-5 blur-3xl"></div>
        <div className="fixed top-0 left-0 w-1 h-full bg-[#e63946] opacity-40"></div>
        <div className="fixed top-0 right-0 w-1 h-full bg-[#e63946] opacity-40"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#f5f0e8]/90 backdrop-blur supports-[backdrop-filter]:bg-[#f5f0e8]/60">
        <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-tight relative">
            <span className="inline-block relative">
              <span className="relative z-10 text-[#1d3557]">Nicholas</span>
              <div className="absolute -bottom-1 left-0 h-[6px] w-full bg-[#e63946] opacity-60"></div>
            </span>
            <span className="ml-2 text-[#e63946]">Terek</span>
          </Link>

          <nav className="hidden md:flex gap-8 items-center">
            {["about", "projects", "teaching", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`text-sm uppercase tracking-wider transition-all duration-300 ease-in-out relative ${activeSection === section ? "text-[#e63946]" : "text-[#1d3557]/80 hover:text-[#1d3557]"
                  }`}
              >
                <span className="relative">
                  {section}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#e63946]"></span>
                  )}
                </span>
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#1d3557]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-[#f5f0e8] pt-16 px-4">
            <nav className="flex flex-col gap-6 py-8">
              {["about", "projects", "teaching", "contact"].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className={`text-lg uppercase tracking-wider font-medium transition-all px-2 py-2 border-l-4 ${activeSection === section
                      ? "text-[#e63946] border-[#e63946]"
                      : "text-[#1d3557]/80 border-transparent"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {section}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 relative z-10">
        {/* Hero section */}
        <section id="home" className="min-h-screen w-full flex items-center relative">
          <div className="absolute top-[30%] right-[10%] w-[150px] h-[600px] bg-[#e63946]/5 -rotate-45"></div>
          <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-[#1d3557]/5"></div>

          <div className="container mx-auto px-4 md:px-6 py-24">
            <div className="grid gap-12 lg:grid-cols-5 items-center">
              <div className="lg:col-span-3 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center bg-[#1d3557]/5 px-4 py-2 text-sm tracking-wider uppercase text-[#1d3557]">
                    Software Engineer & Researcher
                  </div>
                  <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1d3557] leading-[1.1]">
                    Nicholas
                    <span className="text-[#e63946] relative ml-5 inline-block">
                      Terek
                      <svg
                        className="absolute -bottom-4 left-0 w-full"
                        height="12"
                        viewBox="0 0 100 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 11C20.3333 3.66667 62.6 -5.8 99 6.2" stroke="#e63946" strokeWidth="2" />
                      </svg>
                    </span>
                  </h1>
                </div>

                {/* Achievement highlights - more elegant version */}
                <div className="my-6 max-w-2xl">
                  <p className="text-[#1d3557]/80 text-xl md:text-2xl font-light tracking-wide leading-relaxed">
                    Exploring the intersections of machine learning, database management systems, and distributed systems.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[#1d3557]">
                    <div className="flex items-center gap-2 group">
                      <span className="text-[#e63946] font-bold text-2xl group-hover:translate-y-[-2px] transition-transform">
                        3
                      </span>
                      <span className="border-b border-[#e63946]/30 group-hover:border-[#e63946] transition-colors">
                        SWE Internships
                      </span>
                    </div>
                    <div className="flex items-center gap-2 group">
                      <span className="text-[#e63946] font-bold text-2xl group-hover:translate-y-[-2px] transition-transform">
                        2
                      </span>
                      <span className="border-b border-[#e63946]/30 group-hover:border-[#e63946] transition-colors">
                        Research Positions
                      </span>
                    </div>
                    <div className="flex items-center gap-2 group">
                      <span className="text-[#e63946] font-bold text-2xl group-hover:translate-y-[-2px] transition-transform">
                        5+
                      </span>
                      <span className="border-b border-[#e63946]/30 group-hover:border-[#e63946] transition-colors">
                        GitHub Projects
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 relative pl-4 before:absolute before:content-[''] before:w-[2px] before:h-full before:bg-[#e63946] before:left-0 before:top-0">
                    <p className="text-[#1d3557] leading-relaxed">
                      I build AI systems that understand natural language, automate document processing, and solve
                      complex mathematical problems. My research has been featured at{" "}
                      <span className="text-[#e63946] font-medium"> conferences</span> and I&apos;ve developed tools
                      used by <span className="text-[#e63946] font-medium">1000+ students</span> across campus.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button
                    className="bg-[#e63946] hover:bg-[#1d3557] text-white px-8 py-6 rounded-none tracking-wider text-base"
                    asChild
                  >
                    <Link href="#contact">GET IN TOUCH</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#1d3557] hover:bg-[#1d3557] hover:text-white rounded-none px-8 py-6 tracking-wider text-base"
                    asChild
                  >
                    <Link href="#projects">VIEW PROJECTS</Link>
                  </Button>
                </div>

                <div className="flex items-center gap-4 text-[#1d3557]/70 pt-4">
                  <div className="h-[1px] w-12 bg-[#1d3557]/30"></div>
                  <span className="text-sm uppercase tracking-widest">Building the future</span>
                </div>
              </div>






              <div className="lg:col-span-2 relative">
                <div className="absolute -top-8 -left-8 bottom-20 right-8 border-2 border-[#e63946]"></div>
                <Image
                  src="/1.png?height=600&width=600"
                  width={600}
                  height={600}
                  alt="Nicholas Terek"
                />

                  <div className="container mx-auto p-4">
                    <div className="flex items-start gap-4 mt-8">
                      {/* Box 1 */}
                      <div className="relative border border-[#1d3557] overflow-hidden w-[180px] h-[130px]">
                        <div className="w-full h-full">
                          <Image 
                            src="/IMG_3615.jpg" 
                            alt="Event 1" 
                            width={180} 
                            height={130} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-[#1d3557] px-2 py-2">
                          <p className="text-xs uppercase tracking-widest text-white text-center font-medium">
                            <b>S:\HA&lt;KS</b>
                          </p>
                        </div>
                      </div>

                      {/* Box 2 */}
                      <div className="relative border border-[#1d3557] overflow-hidden w-[180px] h-[130px]">
                        <div className="w-full h-full">
                          <Image 
                            src="/Wilfrid_Laurier_University_-_Lazaridis_Hall.jpg" 
                            alt="Event 2" 
                            width={180} 
                            height={130} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-[#1d3557] px-2 py-2">
                          <p className="text-xs uppercase tracking-widest text-white text-center font-medium">
                            <b>UoftHacks</b>
                          </p>
                        </div>
                      </div>

                      {/* Box 3 */}
                      <div className="relative border border-[#1d3557] overflow-hidden w-[180px] h-[130px]">
                        <div className="w-full h-full">
                          <Image 
                            src="/Wilfrid_Laurier_University_-_Lazaridis_Hall.jpg" 
                            alt="Event 3" 
                            width={180} 
                            height={130} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-[#1d3557] px-2 py-2">
                          <p className="text-xs uppercase tracking-widest text-white text-center font-medium">EVENT 1</p>
                        </div>
                      </div>
                    </div>
</div>



              </div>











            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-24 md:py-32 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#1d3557]/10"></div>
          <div className="absolute top-[20%] left-[5%] w-[200px] h-[200px] rounded-full bg-[#e63946]/5"></div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 space-y-4">
                <div className="inline-flex items-center bg-[#1d3557]/5 px-4 py-2 text-sm tracking-wider uppercase text-[#1d3557]">
                  About
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1d3557] leading-tight">
                  Academic <span className="text-[#e63946]">Journey</span>
                </h2>
                <div className="h-[3px] w-20 bg-[#e63946]"></div>
                <div className="pt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#e63946] mt-2"></div>
                    <p className="text-[#1d3557]/80">
                      Undergraduate student in Computer Science with a focus on machine learning and AI
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#e63946] mt-2"></div>
                    <p className="text-[#1d3557]/80">Minor in Mathematics with honors</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#e63946] mt-2"></div>
                    <p className="text-[#1d3557]/80">Active in multiple research labs on campus</p>
                  </div>
                </div>
                <div className="pt-8">
                  <Image
                    src="/Wilfrid_Laurier_University_-_Lazaridis_Hall.jpg?height=600&width=400"
                    width={600}
                    height={400}
                    alt="Nicholas at work"
                  />
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 relative group hover:shadow-xl transition-all">
                    <div className="absolute left-0 top-0 h-full w-[6px] bg-[#1d3557] group-hover:bg-[#e63946] transition-colors"></div>
                    <h3 className="font-serif text-2xl font-bold mb-4 text-[#1d3557]">Background</h3>
                    <p className="text-[#1d3557]/80 leading-relaxed">
                      Nicholas Terek is an undergraduate student passionate about machine learning, natural language
                      processing, and mathematical applications. With a strong foundation in both theoretical concepts
                      and practical implementation, Nicholas is developing expertise at the intersection of these
                      fields.
                    </p>
                  </div>

                  <div className="bg-white p-8 relative group hover:shadow-xl transition-all">
                    <div className="absolute left-0 top-0 h-full w-[6px] bg-[#1d3557] group-hover:bg-[#e63946] transition-colors"></div>
                    <h3 className="font-serif text-2xl font-bold mb-4 text-[#1d3557]">Experience</h3>
                    <p className="text-[#1d3557]/80 leading-relaxed">
                      Nicholas has worked as a research assistant in multiple labs, contributing to projects in AI and
                      machine learning. He also serves as a teaching assistant for two computer science courses, helping
                      fellow students master complex concepts.
                    </p>
                  </div>

                  <div className="md:col-span-2 bg-[#1d3557] p-8 text-white">
                    <h3 className="font-serif text-2xl font-bold mb-6 text-white flex items-center">
                      <span className="h-[2px] w-8 bg-[#e63946] mr-4"></span>
                      Research Interests
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                      <div className="space-y-4">
                        <div className="relative pl-6">
                          <div className="absolute left-0 top-2 h-2 w-2 bg-[#e63946]"></div>
                          <p className="text-white/90">Conversational AI & Natural Language Processing</p>
                        </div>
                        <div className="relative pl-6">
                          <div className="absolute left-0 top-2 h-2 w-2 bg-[#e63946]"></div>
                          <p className="text-white/90">Machine Learning Applications</p>
                        </div>
                        <div className="relative pl-6">
                          <div className="absolute left-0 top-2 h-2 w-2 bg-[#e63946]"></div>
                          <p className="text-white/90">Automated Systems & Form Filling</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="relative pl-6">
                          <div className="absolute left-0 top-2 h-2 w-2 bg-[#e63946]"></div>
                          <p className="text-white/90">Mathematical Conjectures & Proofs</p>
                        </div>
                        <div className="relative pl-6">
                          <div className="absolute left-0 top-2 h-2 w-2 bg-[#e63946]"></div>
                          <p className="text-white/90">Algorithmic Trading Strategies</p>
                        </div>
                        <div className="relative pl-6">
                          <div className="absolute left-0 top-2 h-2 w-2 bg-[#e63946]"></div>
                          <p className="text-white/90">Ethical AI Development</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-[#e63946]/5 relative">
                  <div className="absolute -top-6 left-8 bg-[#e63946] text-white px-6 py-3 text-sm uppercase tracking-widest">
                    Core Skills
                  </div>
                  <div className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#1d3557] to-[#e63946] opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                      <div className="relative bg-white p-4 flex flex-col items-center text-center">
                        <div className="text-[#1d3557] font-bold text-lg mb-2">Machine Learning</div>
                        <div className="text-sm text-[#1d3557]/70">Neural Networks, Deep Learning, Model Training</div>
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#1d3557] to-[#e63946] opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                      <div className="relative bg-white p-4 flex flex-col items-center text-center">
                        <div className="text-[#1d3557] font-bold text-lg mb-2">NLP</div>
                        <div className="text-sm text-[#1d3557]/70">Text Analysis, Language Models, Chatbots</div>
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#1d3557] to-[#e63946] opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                      <div className="relative bg-white p-4 flex flex-col items-center text-center">
                        <div className="text-[#1d3557] font-bold text-lg mb-2">Programming</div>
                        <div className="text-sm text-[#1d3557]/70">Python, JavaScript, TensorFlow, PyTorch</div>
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#1d3557] to-[#e63946] opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                      <div className="relative bg-white p-4 flex flex-col items-center text-center">
                        <div className="text-[#1d3557] font-bold text-lg mb-2">Mathematics</div>
                        <div className="text-sm text-[#1d3557]/70">Statistics, Linear Algebra, Calculus</div>
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#1d3557] to-[#e63946] opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                      <div className="relative bg-white p-4 flex flex-col items-center text-center">
                        <div className="text-[#1d3557] font-bold text-lg mb-2">Web Development</div>
                        <div className="text-sm text-[#1d3557]/70">React, Next.js, Node.js, Databases</div>
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#1d3557] to-[#e63946] opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                      <div className="relative bg-white p-4 flex flex-col items-center text-center">
                        <div className="text-[#1d3557] font-bold text-lg mb-2">Research Methods</div>
                        <div className="text-sm text-[#1d3557]/70">Data Analysis, Experimental Design</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section - Featured prominently */}
        <section id="projects" className="py-24 md:py-32 bg-[#1d3557] text-white relative">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#e63946]/10 -rotate-45"></div>
          <div className="absolute bottom-[10%] left-[5%] w-[100px] h-[100px] rounded-full bg-[#e63946]/10"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center bg-white/10 px-4 py-2 text-sm tracking-wider uppercase text-white">
                Projects
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
                Bringing <span className="text-[#e63946]">Ideas</span> to Life
              </h2>
              <div className="h-[3px] w-20 bg-[#e63946] mx-auto mt-6"></div>
              <p className="text-white/80 max-w-2xl mx-auto mt-6">
                A showcase of my technical projects, from AI applications to web development and research
                implementations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group h-[420px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1d3557] opacity-80 z-10"></div>
                <Image
                  src="/placeholder.svg?height=420&width=320"
                  alt="AI Assistant"
                  width={320}
                  height={420}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">AI Assistant</h3>
                  <p className="text-white/80 mb-4">
                    A conversational AI assistant that helps with scheduling, information retrieval, and task management
                    using natural language processing.
                  </p>
                  <div className="flex items-center">
                    <div className="h-[2px] w-12 bg-[#e63946] mr-4"></div>
                    <span className="text-[#e63946] text-sm uppercase tracking-wider">Python • TensorFlow</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-l-[80px] border-t-[#e63946] border-l-transparent z-20 -rotate-90"></div>
              </div>

              <div className="relative group h-[420px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1d3557] opacity-80 z-10"></div>
                <Image
                  src="/placeholder.svg?height=420&width=320"
                  alt="Document Parser"
                  width={320}
                  height={420}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">Document Parser</h3>
                  <p className="text-white/80 mb-4">
                    An application that leverages machine learning to automatically extract, categorize, and process
                    information from various document types.
                  </p>
                  <div className="flex items-center">
                    <div className="h-[2px] w-12 bg-[#e63946] mr-4"></div>
                    <span className="text-[#e63946] text-sm uppercase tracking-wider">Python • OpenCV</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-l-[80px] border-t-[#e63946] border-l-transparent z-20 -rotate-90"></div>
              </div>

              <div className="relative group h-[420px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1d3557] opacity-80 z-10"></div>
                <Image
                  src="/placeholder.svg?height=420&width=320"
                  alt="Trading Algorithm"
                  width={320}
                  height={420}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">Trading Algorithm</h3>
                  <p className="text-white/80 mb-4">
                    Development of algorithmic trading strategies using statistical methods and machine learning for
                    market prediction and portfolio optimization.
                  </p>
                  <div className="flex items-center">
                    <div className="h-[2px] w-12 bg-[#e63946] mr-4"></div>
                    <span className="text-[#e63946] text-sm uppercase tracking-wider">Python • Pandas</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-l-[80px] border-t-[#e63946] border-l-transparent z-20 -rotate-90"></div>
              </div>

              <div className="relative group h-[420px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1d3557] opacity-80 z-10"></div>
                <Image
                  src="/placeholder.svg?height=420&width=320"
                  alt="Math Visualization Tool"
                  width={320}
                  height={420}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">Math Visualization Tool</h3>
                  <p className="text-white/80 mb-4">
                    A web-based platform for visualizing and interacting with complex mathematical concepts, making
                    abstract ideas more accessible to students.
                  </p>
                  <div className="flex items-center">
                    <div className="h-[2px] w-12 bg-[#e63946] mr-4"></div>
                    <span className="text-[#e63946] text-sm uppercase tracking-wider">JavaScript • D3.js</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-l-[80px] border-t-[#e63946] border-l-transparent z-20 -rotate-90"></div>
              </div>

              <div className="relative group h-[420px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1d3557] opacity-80 z-10"></div>
                <Image
                  src="/placeholder.svg?height=420&width=320"
                  alt="NLP Toolkit"
                  width={320}
                  height={420}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">NLP Toolkit</h3>
                  <p className="text-white/80 mb-4">
                    A comprehensive library of natural language processing tools, implementing cutting-edge algorithms
                    for text analysis and generation.
                  </p>
                  <div className="flex items-center">
                    <div className="h-[2px] w-12 bg-[#e63946] mr-4"></div>
                    <span className="text-[#e63946] text-sm uppercase tracking-wider">Python • NLTK • spaCy</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-l-[80px] border-t-[#e63946] border-l-transparent z-20 -rotate-90"></div>
              </div>

              <div className="relative group h-[420px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1d3557] opacity-80 z-10"></div>
                <Image
                  src="/placeholder.svg?height=420&width=320"
                  alt="Personal Website"
                  width={320}
                  height={420}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">Personal Website</h3>
                  <p className="text-white/80 mb-4">
                    A creative web application showcasing my portfolio, projects, and research interests with a unique
                    design inspired by Asian architecture.
                  </p>
                  <div className="flex items-center">
                    <div className="h-[2px] w-12 bg-[#e63946] mr-4"></div>
                    <span className="text-[#e63946] text-sm uppercase tracking-wider">Next.js • Tailwind CSS</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-l-[80px] border-t-[#e63946] border-l-transparent z-20 -rotate-90"></div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button className="bg-[#e63946] hover:bg-white hover:text-[#1d3557] text-white rounded-none px-8 py-6 tracking-wider text-base">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Teaching & Research section - Combined */}
        <section id="teaching" className="py-24 md:py-32 bg-[#f5f0e8] text-[#1d3557] relative">
          <div className="absolute top-[5%] left-[5%] w-[150px] h-[150px] bg-[#e63946]/10 rounded-full"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[200px] h-[200px] bg-[#e63946]/5 -rotate-12"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center bg-[#1d3557]/5 px-4 py-2 text-sm tracking-wider uppercase text-[#1d3557]">
                Teaching & Research
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-[#1d3557]">
                Academic <span className="text-[#e63946]">Contributions</span>
              </h2>
              <div className="h-[3px] w-20 bg-[#e63946] mx-auto mt-6"></div>
              <p className="text-[#1d3557]/80 max-w-2xl mx-auto mt-6">
                My work as a teaching assistant and contributions to research labs as an undergraduate student.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Teaching Section */}
              <div>
                <div className="bg-white p-8 shadow-md relative group h-full">
                  <div className="h-1 w-full bg-[#e63946]/50 absolute top-0 left-0"></div>
                  <h3 className="font-serif text-2xl font-bold mb-4 text-[#1d3557] flex items-center">
                    <span className="h-[2px] w-8 bg-[#e63946] mr-4"></span>
                    Teaching Experience
                  </h3>

                  <div className="space-y-8 mt-6">
                    <div className="bg-[#1d3557]/5 p-6">
                      <h4 className="font-serif text-xl font-bold mb-2 text-[#1d3557]">
                        Introduction to Object-Oriented Programming
                      </h4>
                      <p className="text-[#1d3557]/60 text-sm mb-4">Teaching Assistant</p>
                      <p className="text-[#1d3557]/80 text-sm">
                        Assisting students with understanding machine learning concepts, algorithms, and applications.
                        Leading lab sessions, grading assignments, and holding office hours.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-[#e63946]/20 px-3 py-1 text-sm text-[#1d3557]">Lab Instructor</span>
                        <span className="bg-[#e63946]/20 px-3 py-1 text-sm text-[#1d3557]">45+ Students</span>
                      </div>
                    </div>

                    <div className="bg-[#1d3557]/5 p-6">
                      <h4 className="font-serif text-xl font-bold mb-2 text-[#1d3557]">
                        Data Structures and Algorithms
                      </h4>
                      <p className="text-[#1d3557]/60 text-sm mb-4">Teaching Assistant</p>
                      <p className="text-[#1d3557]/80 text-sm">
                        Supporting students in mastering fundamental algorithms and data structures. Conducting review
                        sessions, providing feedback on coding assignments, and mentoring students.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-[#e63946]/20 px-3 py-1 text-sm text-[#1d3557]">Lab Instructor</span>
                        <span className="bg-[#e63946]/20 px-3 py-1 text-sm text-[#1d3557]">60+ Students</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#1d3557]/10">
                    <h4 className="font-medium text-lg mb-4 text-[#1d3557]">Teaching Philosophy</h4>
                    <div className="space-y-3">
                      <div className="relative pl-6">
                        <div className="absolute left-0 top-2 h-2 w-2 bg-[#e63946]"></div>
                        <p className="text-[#1d3557]/90">Emphasizing practical applications of theoretical concepts</p>
                      </div>
                      <div className="relative pl-6">
                        <div className="absolute left-0 top-2 h-2 w-2 bg-[#e63946]"></div>
                        <p className="text-[#1d3557]/90">Creating an inclusive and supportive learning environment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Section */}
              <div>
                <div className="bg-white p-8 shadow-md relative group h-full">
                  <div className="h-1 w-full bg-[#e63946]/50 absolute top-0 left-0"></div>
                  <h3 className="font-serif text-2xl font-bold mb-4 text-[#1d3557] flex items-center">
                    <span className="h-[2px] w-8 bg-[#e63946] mr-4"></span>
                    Lab Contributions
                  </h3>

                  <div className="space-y-8 mt-6">
                    <div className="bg-[#1d3557]/5 p-6">
                      <h4 className="font-serif text-xl font-bold mb-2 text-[#1d3557]">AI Research Lab</h4>
                      <p className="text-[#1d3557]/60 text-sm mb-4">Research Assistant</p>
                      <p className="text-[#1d3557]/80 text-sm">
                        Contributing to research on improving conversational agents through better context understanding
                        and memory mechanisms. Assisting with data collection, model training, and evaluation.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-[#e63946]/20 px-3 py-1 text-sm text-[#1d3557]">NLP</span>
                        <span className="bg-[#e63946]/20 px-3 py-1 text-sm text-[#1d3557]">Dialogue Systems</span>
                      </div>
                    </div>

                    <div className="bg-[#1d3557]/5 p-6">
                      <h4 className="font-serif text-xl font-bold mb-2 text-[#1d3557]">CARGO LAB</h4>
                      <p className="text-[#1d3557]/60 text-sm mb-4">Undergraduate Researcher</p>
                      <p className="text-[#1d3557]/80 text-sm">
                        Working on machine learning approaches to automate the extraction and understanding of
                        information in complex forms and documents. Developing algorithms for document classification.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-[#e63946]/20 px-3 py-1 text-sm text-[#1d3557]">Computer Vision</span>
                        <span className="bg-[#e63946]/20 px-3 py-1 text-sm text-[#1d3557]">Information Extraction</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#1d3557]/10">
                    <h4 className="font-medium text-lg mb-4 text-[#1d3557]">Research Contributions</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 group">
                        <div className="w-16 shrink-0 bg-[#e63946]/20 text-center py-1">
                          <div className="text-[#e63946] font-bold">2023</div>
                        </div>
                        <p className="text-[#1d3557]/90 group-hover:text-[#e63946] transition-colors">
                          Improving Context Retention in Conversational Agents
                        </p>
                      </div>
                      <div className="flex items-center gap-3 group">
                        <div className="w-16 shrink-0 bg-[#e63946]/20 text-center py-1">
                          <div className="text-[#e63946] font-bold">2022</div>
                        </div>
                        <p className="text-[#1d3557]/90 group-hover:text-[#e63946] transition-colors">
                          Automated Form Understanding: A Neural Approach
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-24 md:py-32 bg-[#1d3557] text-white relative">
          <div className="absolute top-[10%] right-[10%] w-[150px] h-[150px] bg-[#e63946]/10 -rotate-45"></div>
          <div className="absolute bottom-[10%] left-[5%] w-[100px] h-[100px] rounded-full bg-[#e63946]/10"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="inline-flex items-center bg-white/10 px-4 py-2 text-sm tracking-wider uppercase text-white">
                  Contact
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
                  Get in <span className="text-[#e63946]">Touch</span>
                </h2>
                <div className="h-[3px] w-20 bg-[#e63946] mt-6"></div>

                <p className="text-white/80 pt-6 text-lg">
                  Interested in collaboration, research opportunities, or just want to connect? I&apos;m always open to new
                  conversations and connections.
                </p>

                <div className="mt-12 space-y-8">
                  <div className="flex items-start gap-6">
                    <Mail className="h-6 w-6 text-[#e63946] mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="text-white/70 mt-1">nicholas.terek@example.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <Linkedin className="h-6 w-6 text-[#e63946] mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-white">LinkedIn</h3>
                      <Link
                        href="https://linkedin.com"
                        className="text-white/70 hover:text-[#e63946] transition-colors mt-1 block"
                      >
                        linkedin.com/in/nicholas-terek
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <Github className="h-6 w-6 text-[#e63946] mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-white">GitHub</h3>
                      <Link
                        href="https://github.com"
                        className="text-white/70 hover:text-[#e63946] transition-colors mt-1 block"
                      >
                        github.com/nicholas-terek
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <Twitter className="h-6 w-6 text-[#e63946] mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-white">Twitter/X</h3>
                      <Link
                        href="https://twitter.com"
                        className="text-white/70 hover:text-[#e63946] transition-colors mt-1 block"
                      >
                        twitter.com/nicholas_terek
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-16 space-y-6">
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-6 inline-flex items-center text-white">
                      <span className="h-[2px] w-8 bg-[#e63946] mr-4"></span>
                      Follow My Work
                    </h3>
                    <div className="flex gap-6 items-center">
                      <Link href="#" className="bg-white/10 hover:bg-[#e63946] transition-all p-3 text-white">
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="bg-white/10 hover:bg-[#e63946] transition-all p-3 text-white">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="bg-white/10 hover:bg-[#e63946] transition-all p-3 text-white">
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="bg-white/10 hover:bg-[#e63946] transition-all p-3 text-white">
                        <Mail className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm pt-4">
                    © {new Date().getFullYear()} Nicholas Terek. All rights reserved.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-white/5 p-8 backdrop-blur-sm">
                  <h3 className="font-serif text-2xl font-bold mb-6 text-white">Send a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                        Your Name
                      </label>
                      <input
                        id="name"
                        className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#e63946]"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#e63946]"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#e63946]"
                        placeholder="Enter subject"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#e63946]"
                        placeholder="Your message"
                      />
                    </div>

                    <Button className="w-full bg-[#e63946] hover:bg-white hover:text-[#1d3557] text-white rounded-none py-6 text-base uppercase tracking-wider">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

