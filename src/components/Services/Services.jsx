import { Palette, ClipboardList, Monitor } from 'lucide-react'

function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white swiss-grid-bg">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="border-l-8 border-primary-500 pl-4">
            <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tight mb-2">My Services</h2>
            <p className="text-gray-700 text-lg max-w-2xl">
              Comprehensive digital solutions with a strong typographic and grid-driven approach.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* UI/UX Design */}
          <div className="bg-white p-8 text-left group border-2 border-gray-200">
            <div className="w-16 h-16 bg-primary-500 flex items-center justify-center mb-6">
              <Palette className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-4">UI/UX Design</h3>
            <p className="text-gray-700 leading-relaxed">
              Intuitive interfaces focused on usability, clarity, and modern principles.
            </p>
            <div className="border-t-4 border-gray-300 mt-8 pt-4">
              <p className="text-gray-500 uppercase tracking-widest text-sm">Design + Research</p>
            </div>
          </div>

          {/* Project Management */}
          <div className="bg-white p-8 text-left group border-2 border-gray-200">
            <div className="w-16 h-16 bg-secondary-300 flex items-center justify-center mb-6">
              <ClipboardList className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-4">Project Management</h3>
            <p className="text-gray-700 leading-relaxed">
              Agile delivery with clear structure, sprint cadence, and measurable outcomes.
            </p>
            <div className="border-t-4 border-gray-300 mt-8 pt-4">
              <p className="text-gray-500 uppercase tracking-widest text-sm">Agile + Kanban</p>
            </div>
          </div>

          {/* Software Development */}
          <div className="bg-white p-8 text-left group border-2 border-gray-200">
            <div className="w-16 h-16 bg-primary-500 flex items-center justify-center mb-6">
              <Monitor className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-4">Software Development</h3>
            <p className="text-gray-700 leading-relaxed">
              Robust applications using modern stacks with a clean, modular architecture.
            </p>
            <div className="border-t-4 border-gray-300 mt-8 pt-4">
              <p className="text-gray-500 uppercase tracking-widest text-sm">Code + Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

