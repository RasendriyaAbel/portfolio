import { useState } from 'react'
import { Palette, Monitor, ClipboardList, ExternalLink, Calendar } from 'lucide-react'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects', icon: Monitor },
    { id: 'uiux', name: 'UI/UX Design', icon: Palette },
    { id: 'development', name: 'Software Development', icon: Monitor },
    { id: 'management', name: 'Project Management', icon: ClipboardList }
  ]

  const allProjects = [
    {
      id: 1,
      title: 'FixYou - Mental Health Platform',
      category: 'development',
      period: 'November 2025',
      description: 'Platform web kesehatan mental dan konseling online dengan integrasi AI/ML untuk analisis mood dan chatbot konseling. Full Stack Developer yang mengembangkan platform dengan Laravel 12, React 19, dan integrasi Google Gemini API.',
      technologies: ['Laravel 12', 'React 19', 'Inertia.js', 'Tailwind CSS', 'Python Flask', 'Google Gemini API', 'MySQL', 'WebSocket'],
      link: 'https://github.com',
      image: 'bg-gradient-to-br from-primary-500 to-secondary-300',
      achievement: 'Top 5 Finalist Intelecta Cup'
    },
    {
      id: 2,
      title: 'KAI Redesign Apps',
      category: 'development',
      period: 'October 2025',
      description: 'Platform web pemesanan tiket kereta api KAI dengan integrasi AI chatbot berbasis voice command untuk aksesibilitas dan pengalaman pengguna yang lebih baik.',
      technologies: ['Laravel 12', 'React 18', 'Inertia.js', 'Tailwind CSS 4', 'Ollama AI', 'Voice Recognition API', 'MySQL'],
      link: 'https://github.com',
      image: 'bg-gradient-to-br from-primary-500 to-secondary-300',
      achievement: 'Top 15 Hacksphere Hackathon'
    },
    {
      id: 3,
      title: 'HarvestHub',
      category: 'development',
      period: 'Dec 2023 - Jan 2024',
      description: 'Platform untuk meningkatkan efektivitas distribusi makanan, pertanian, dan pertanian. Hackfest Participant dengan Digital Mind Studio.',
      technologies: ['Figma', 'React.js', 'Java', 'Firebase'],
      link: 'https://github.com',
      image: 'bg-gradient-to-br from-primary-500 to-secondary-300'
    },
    {
      id: 4,
      title: 'TAK Mobile Prototype',
      category: 'uiux',
      period: 'Feb 2024 - Jun 2024',
      description: 'Mobile app prototype untuk Student Activity Transcript (TAK) Telkom University untuk meningkatkan aksesibilitas dan user experience khususnya untuk mahasiswa.',
      technologies: ['Figma', 'CorelDraw X7'],
      link: 'https://github.com',
      image: 'bg-gradient-to-br from-primary-500 to-secondary-300'
    },
    {
      id: 5,
      title: 'Musikan Music Player Prototype',
      category: 'uiux',
      period: 'Jul 2024 - Oct 2024',
      description: 'UI/UX Research dan prototype untuk aplikasi music player. Melakukan user research, developing user personas, user flows, prototyping, wireframing, dan usability testing.',
      technologies: ['Figma', 'FigmaJam', 'Google Forms', 'System Usability Scale (SUS)'],
      link: 'https://github.com',
      image: 'bg-gradient-to-br from-primary-500 to-secondary-300'
    },
    {
      id: 6,
      title: 'SyariPay E-Commerce Prototype',
      category: 'uiux',
      period: 'Mar 2025 - Jun 2025',
      description: 'E-commerce platform dengan prinsip syariah untuk resolusi dispute bisnis online. Designed intuitive user interface aligned with Islamic principles.',
      technologies: ['Figma', 'User Flow', 'Wireframing'],
      link: 'https://github.com',
      image: 'bg-gradient-to-br from-primary-500 to-secondary-300'
    },
    {
      id: 7,
      title: 'NomoKit Educational Platform Prototype',
      category: 'uiux',
      period: 'Feb 2025 - Mar 2025',
      description: 'Website edukasi showcase proyek siswa SMP dengan tema teknologi seperti games, AI, Machine Learning, dan Coding.',
      technologies: ['Figma', 'CorelDraw X7'],
      link: 'https://github.com',
      image: 'bg-gradient-to-br from-primary-500 to-secondary-300'
    },
    {
      id: 8,
      title: 'Production Control System',
      category: 'management',
      period: 'Jul 2025 - Aug 2025',
      description: 'Web-based Planning Control System yang mengotomasi daily manufacturing production scheduling berdasarkan input parameters seperti production time, stock levels, customer demand, dan working hours.',
      technologies: ['Web Development', 'Planning System', 'Automation'],
      link: '#',
      image: 'bg-gradient-to-br from-primary-500 to-secondary-300',
      company: 'PT Berlindo Mitra Utama'
    },
    {
      id: 9,
      title: 'RollerCoaster 2024 Event',
      category: 'management',
      period: 'Oct 2023 - Mar 2024',
      description: 'Co Leader untuk annual roadshow event Cah Solo Telkom Community yang ditujukan untuk siswa SMA di Solo. Berhasil meningkatkan jumlah sekolah yang dikunjungi menjadi 33 sekolah dan mencapai top 5 ranking.',
      technologies: ['Event Management', 'Leadership', 'Coordination'],
      link: '#',
      image: 'bg-gradient-to-br from-primary-500 to-secondary-300',
      organization: 'Cah Solo Telkom Community'
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory)

  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return allProjects.length
    return allProjects.filter(p => p.category === categoryId).length
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my work across UI/UX Design, Software Development, and Project Management
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            const count = getCategoryCount(category.id)
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-300 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card p-6 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Image/Icon */}
                <div className={`w-full h-48 ${project.image} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-300/20"></div>
                  {project.achievement && (
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600">
                      {project.achievement}
                    </div>
                  )}
                  {project.category === 'uiux' && (
                    <Palette className="text-white w-16 h-16 opacity-50" />
                  )}
                  {project.category === 'development' && (
                    <Monitor className="text-white w-16 h-16 opacity-50" />
                  )}
                  {project.category === 'management' && (
                    <ClipboardList className="text-white w-16 h-16 opacity-50" />
                  )}
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                      {project.company && (
                        <p className="text-sm text-primary-600 font-semibold">{project.company}</p>
                      )}
                      {project.organization && (
                        <p className="text-sm text-primary-600 font-semibold">{project.organization}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Project Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group/link"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-primary-500 mb-2">
              {allProjects.filter(p => p.category === 'uiux').length}
            </div>
            <div className="text-sm text-gray-600">UI/UX Projects</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-primary-500 mb-2">
              {allProjects.filter(p => p.category === 'development').length}
            </div>
            <div className="text-sm text-gray-600">Development Projects</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-primary-500 mb-2">
              {allProjects.filter(p => p.category === 'management').length}
            </div>
            <div className="text-sm text-gray-600">Management Projects</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-primary-500 mb-2">
              {allProjects.length}
            </div>
            <div className="text-sm text-gray-600">Total Projects</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

