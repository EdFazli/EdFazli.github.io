import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react'

export const metadata = {
  title: 'About',
  description: 'Learn more about Ed Fazli - Software Engineer, Technical Writer, and Technology Enthusiast.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="Ed Fazli"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Software engineer passionate about building scalable solutions and sharing knowledge 
          through technical writing and open source contributions.
        </p>
      </section>

      {/* Bio Section */}
      <section className="card">
        <h2 className="text-2xl font-bold mb-6">My Story</h2>
        <div className="prose-custom">
          <p>
            Hi! I'm Ed Fazli, a software engineer with over 5 years of experience building 
            scalable web applications and distributed systems. I'm passionate about clean code, 
            system architecture, and helping other developers grow in their careers.
          </p>
          <p>
            My journey in tech started with a curiosity about how things work under the hood. 
            This led me to dive deep into various technologies, from frontend frameworks to 
            cloud infrastructure, always with a focus on building solutions that make a real impact.
          </p>
          <p>
            When I'm not coding, you'll find me writing technical articles, contributing to 
            open source projects, or exploring the latest developments in cloud computing and AI.
          </p>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="card">
        <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools & Others</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'Linux', 'GraphQL', 'REST APIs', 'Microservices'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="card">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-primary-200 dark:border-primary-800 pl-6 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={16} className="text-primary-600 dark:text-primary-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">2022 - Present</span>
            </div>
            <h3 className="text-lg font-semibold">Senior Software Engineer</h3>
            <p className="text-primary-600 dark:text-primary-400 mb-2">Tech Company Inc.</p>
            <p className="text-gray-600 dark:text-gray-300">
              Leading development of scalable web applications serving millions of users. 
              Architecting microservices and implementing CI/CD pipelines.
            </p>
          </div>
          
          <div className="border-l-2 border-primary-200 dark:border-primary-800 pl-6 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={16} className="text-primary-600 dark:text-primary-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">2020 - 2022</span>
            </div>
            <h3 className="text-lg font-semibold">Software Engineer</h3>
            <p className="text-primary-600 dark:text-primary-400 mb-2">Startup Solutions</p>
            <p className="text-gray-600 dark:text-gray-300">
              Built full-stack applications using React and Node.js. Implemented real-time 
              features and optimized database performance.
            </p>
          </div>
          
          <div className="border-l-2 border-primary-200 dark:border-primary-800 pl-6">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={16} className="text-primary-600 dark:text-primary-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">2019 - 2020</span>
            </div>
            <h3 className="text-lg font-semibold">Junior Developer</h3>
            <p className="text-primary-600 dark:text-primary-400 mb-2">Web Agency</p>
            <p className="text-gray-600 dark:text-gray-300">
              Developed responsive websites and web applications. Collaborated with designers 
              and project managers to deliver client projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Social */}
      <section className="card text-center">
        <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          I'm always interested in discussing new opportunities, collaborating on projects, 
          or just having a chat about technology.
        </p>
        
        <div className="flex justify-center items-center gap-2 mb-6">
          <MapPin size={16} className="text-gray-500" />
          <span className="text-gray-600 dark:text-gray-300">San Francisco, CA</span>
        </div>
        
        <div className="flex justify-center gap-4">
          <a
            href="mailto:ed@example.com"
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href="https://github.com/edfazli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/edfazli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}
