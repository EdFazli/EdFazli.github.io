import { Mail, MapPin, Clock, Send } from 'lucide-react'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Ed Fazli for collaborations, questions, or just to say hello.',
}

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'd love to hear from you! Whether you have a question, want to collaborate, 
          or just want to say hello, feel free to reach out.
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-vertical"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">ed@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <Clock className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Response Time</h3>
                  <p className="text-gray-600 dark:text-gray-300">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">What I Can Help With</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Technical consulting and architecture advice</li>
              <li>• Code reviews and best practices</li>
              <li>• Speaking opportunities and workshops</li>
              <li>• Open source collaborations</li>
              <li>• Career guidance and mentoring</li>
              <li>• Writing and content partnerships</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Preferred Topics</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'React & Next.js',
                'TypeScript',
                'Node.js',
                'Cloud Architecture',
                'DevOps',
                'Performance',
                'Testing',
                'Career Development'
              ].map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="card">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">How quickly do you respond to emails?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I typically respond within 24 hours during weekdays. For urgent matters, 
              please mention it in the subject line.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Do you offer consulting services?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, I offer technical consulting for web development projects, 
              architecture reviews, and team mentoring. Please reach out to discuss your needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Are you available for speaking engagements?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm always interested in speaking at conferences, meetups, and workshops. 
              Please include details about your event and timeline.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
