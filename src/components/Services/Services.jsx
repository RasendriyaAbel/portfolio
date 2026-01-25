import { Palette, ClipboardList, Monitor } from 'lucide-react'

function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* UI/UX Design */}
          <div className="card service-card p-8 text-center group">
            <div className="service-icon w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Palette className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">UI/UX Design</h3>
            <p className="text-gray-600 leading-relaxed">
              Creating intuitive and beautiful user interfaces with focus on user experience 
              and modern design principles.
            </p>
          </div>

          {/* Project Management */}
          <div className="card service-card p-8 text-center group">
            <div className="service-icon w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ClipboardList className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Project Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Leading projects from conception to completion using Agile methodologies 
              and ensuring timely delivery.
            </p>
          </div>

          {/* Software Development */}
          <div className="card service-card p-8 text-center group">
            <div className="service-icon w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Software Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Building robust web applications using modern technologies and best practices 
              for scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

