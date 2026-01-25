import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code, 
  Users, 
  Calendar,
  MapPin,
  Check,
  ExternalLink
} from 'lucide-react'

function About() {
  const education = [
    {
      icon: GraduationCap,
      title: "Undergraduate Students of Informatics Major",
      institution: "Telkom University",
      location: "Jl. Telekomunikasi No. 1, Kabupaten Bandung, Jawa Barat",
      period: "2022 - Present",
      detail: "GPA: 3.55/4"
    },
    {
      icon: GraduationCap,
      title: "Graduate of the Science and Technology program",
      institution: "SMA Negeri 1 Surakarta",
      location: "Jl. Walter Monginsidi No.40, Kota Surakarta, Jawa Tengah",
      period: "2019 - 2022",
      detail: "Final Score: 89/100"
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: "Top 5 Finalist Innovation System Intelecta Cup Telkom University",
      period: "November 2025",
      role: "Full Stack Developer",
      product: "FixYou - Mental Health Platform",
      repository: "https://github.com",
      presentation: "https://github.com",
      description: "Developed platform web kesehatan mental 'FixYou' dan konseling online dengan integrasi AI/ML untuk analisis mood dan chatbot konseling.",
      technologies: [
        "Backend: Laravel 12 (PHP 8.2), MySQL, Laravel Sanctum, WebSocket",
        "Frontend: React 19, Inertia.js, Tailwind CSS, Chart.js, Framer Motion, GSAP",
        "AI/ML: Python Flask API (83.3% accuracy), Google Gemini API"
      ]
    },
    {
      icon: Award,
      title: "Top 15 Team Hacksphere Presiden University's Hackathon supported by KAI Indonesia",
      period: "October 2025",
      role: "Full Stack Developer",
      product: "KAI Redesign Apps",
      repository: "https://github.com",
      description: "Developed platform web pemesanan tiket kereta api KAI dengan integrasi AI chatbot berbasis voice command untuk aksesibilitas.",
      technologies: [
        "Backend: Laravel 12 (PHP 8.2), MySQL, Ollama AI (Llama 3.2:3b), Laravel Sanctum",
        "Frontend: React 18, Inertia.js, Tailwind CSS 4, Voice Recognition API",
        "AI/ML: Chatbot dengan persistent mode, voice command recognition, auto-speak functionality"
      ]
    }
  ]

  const projects = [
    {
      icon: Code,
      title: "HarvestHub",
      period: "Dec 2023 - Jan 2024",
      link: "https://github.com",
      description: "Platform untuk meningkatkan efektivitas distribusi makanan, pertanian, dan pertanian.",
      technologies: ["Figma", "React.js", "Java", "Firebase"]
    },
    {
      icon: Code,
      title: "TAK Mobile Prototype",
      period: "Feb 2024 - Jun 2024",
      link: "https://github.com",
      description: "Mobile app prototype untuk Student Activity Transcript (TAK) Telkom University untuk meningkatkan aksesibilitas.",
      technologies: ["Figma", "CorelDraw X7"]
    },
    {
      icon: Code,
      title: "Musikan Music Player Prototype",
      period: "Jul 2024 - Oct 2024",
      link: "https://github.com",
      description: "UI/UX Research dan prototype untuk aplikasi music player dengan user research, personas, user flows, dan usability testing.",
      technologies: ["Figma", "FigmaJam", "Google Forms", "System Usability Scale (SUS)"]
    },
    {
      icon: Code,
      title: "SyariPay E-Commerce Prototype",
      period: "Mar 2025 - Jun 2025",
      link: "https://github.com",
      description: "E-commerce platform dengan prinsip syariah untuk resolusi dispute bisnis online.",
      technologies: ["Figma", "User Flow", "Wireframing"]
    },
    {
      icon: Code,
      title: "NomoKit Educational Platform Prototype",
      period: "Feb 2025 - Mar 2025",
      link: "https://github.com",
      description: "Website edukasi showcase proyek siswa SMP dengan tema teknologi (games, AI, Machine Learning, Coding).",
      technologies: ["Figma", "CorelDraw X7"]
    }
  ]

  const experiences = [
    {
      icon: Briefcase,
      title: "Production and Inventory Control Planning Internship",
      company: "PT Berlindo Mitra Utama",
      period: "Jul 2025 - Aug 2025",
      description: "Developed web-based Planning Control System yang mengotomasi daily manufacturing production scheduling berdasarkan input parameters seperti production time per unit, stock levels, customer demand, normal working hours, dan overtime.",
      achievements: [
        "Automatic cycle time calculation (1 hour, 7 hours, dan 3.5 hours)",
        "Daily production simulation berdasarkan shift dan time capacity",
        "Logical validation antara inputs untuk generate realistic schedules"
      ]
    },
    {
      icon: Users,
      title: "Co Leader of 'RollerCoaster 2024' Event",
      company: "Cah Solo Telkom Community",
      period: "Oct 2023 - Mar 2024",
      description: "Annual roadshow event untuk siswa SMA di Solo untuk memberikan informasi tentang pendaftaran mahasiswa baru Telkom University.",
      achievements: [
        "Successfully increasing jumlah sekolah yang dikunjungi menjadi 33 sekolah",
        "Achieving top 5 ranking sebagai komunitas dengan jumlah siswa SMA terbanyak yang mengisi kuesioner pendaftaran"
      ]
    },
    {
      icon: Briefcase,
      title: "Project Based Intern: UI UX Designer",
      company: "PT Nuri Gaya Citra x Rakamin Academy",
      period: "Mar 2024 - Apr 2024",
      location: "Online",
      description: "Learned how to become a UI/UX Designer di e-commerce company under Alibaba Group.",
      skills: ["User flow", "Wireframing", "Prototyping", "Figma", "Google Analytics"]
    },
    {
      icon: Briefcase,
      title: "Project Based Intern: Mobile Developer",
      company: "PT Bank Mandiri (Persero) Tbk. x Rakamin Academy",
      period: "Dec 2024 - Jan 2025",
      location: "Online",
      description: "Gained hands-on experience dan in-depth understanding tentang role Mobile Apps Developer di Bank Mandiri.",
      skills: ["Unit Testing", "Kotlin", "GitLab", "Android & iOS Development", "API Integration"]
    },
    {
      icon: Code,
      title: "Coding Camp 2025 Full Stack Developer Path",
      company: "Dicoding and DBS Foundation",
      period: "Feb 2025 - Jun 2025",
      location: "Online",
      description: "Intensive bootcamp program focused on full stack web development dengan hands-on experience building end-to-end applications.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "RESTful APIs", "Agile Methodologies"]
    }
  ]

  const organizations = [
    {
      icon: Users,
      title: "Vice Chairman HIMA IF Telkom University",
      period: "Jun 2024 - Jan 2025",
      achievements: [
        "Created Grand Design selama periode manajemen satu tahun",
        "Developed dan organized structural cabinet 'Kabinet Baskara'",
        "Formulated vision dan mission sebagai guidelines untuk work programs",
        "Created three flagship programs: FORTRAN, INTERFEST, dan Open Competition",
        "Coordinate dengan heads of associations dalam managing main tasks dan functions"
      ]
    },
    {
      icon: Users,
      title: "Head of Public Relations Cah Solo Telkom Community",
      period: "Jun 2024 - Feb 2025",
      achievements: [
        "Coordinate work tasks dari setiap division member",
        "Conduct benchmarking studies dengan communities/organizations/UKM",
        "Collect data tentang graduates dari Solo",
        "Implement partnerships dengan external media partners"
      ]
    },
    {
      icon: Users,
      title: "Vice Chairman Cah Solo Telkom Community",
      period: "Mar 2023 - Jun 2024",
      description: "Local community dari Telkom University yang berasal dari Solo, Central Java untuk memperkuat bonds of brotherhood dan enhance soft skills melalui annual work programs.",
      achievements: [
        "Formation of working cabinet 'Kabinet Estungkara'",
        "Continuity of work programs selama satu periode manajemen"
      ]
    },
    {
      icon: Code,
      title: "UI UX Designer Advanced Software Engineering Laboratory",
      period: "Oct 2024 - Jan 2025",
      achievements: [
        "Attending study groups di bidang UI/UX Design",
        "Working independently pada projects coordinated by Laboratory Coordinator",
        "Using Git Open Source untuk share ideas untuk UI development dan UX research"
      ]
    },
    {
      icon: Code,
      title: "UI UX Design Internship Advanced Software Engineering Laboratory",
      period: "Jul 2024 - Oct 2024",
      description: "UI/UX Researcher intern untuk membuat prototype 'Musikan' Music Player apps.",
      achievements: [
        "User Research: Developing User Personas",
        "UserFlow Creation: Designing User Flows",
        "Prototyping and Wireframing menggunakan Figma dan Figjam",
        "Usability Testing dengan System Usability Scale (SUS)"
      ]
    },
    {
      icon: Code,
      title: "Web Developer Department Member Central Computer Improvement Telkom University",
      period: "Mar 2025 - Now",
      achievements: [
        "Attending study groups di bidang Web Development",
        "Working independently pada projects menggunakan HTML, CSS, JavaScript, Next.js",
        "Share ideas untuk UI development dan UX research"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Undergraduate Informatics Student at Telkom University with expertise in UI/UX Design, 
            Project Management, and Software Development
          </p>
        </div>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary-500 w-8 h-8" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <edu.icon className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.title}</h3>
                    <p className="text-primary-600 font-semibold mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium">{edu.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <Award className="text-primary-500 w-8 h-8" />
            Achievements
          </h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {achievement.period}
                      </span>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-semibold text-xs">
                        {achievement.role}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{achievement.description}</p>
                    {achievement.repository && (
                      <div className="flex gap-4 mb-4">
                        <a href={achievement.repository} target="_blank" rel="noopener noreferrer" 
                           className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1">
                          <ExternalLink className="w-4 h-4" />
                          Repository
                        </a>
                        {achievement.presentation && (
                          <a href={achievement.presentation} target="_blank" rel="noopener noreferrer" 
                             className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1">
                            <ExternalLink className="w-4 h-4" />
                            Presentation
                          </a>
                        )}
                      </div>
                    )}
                    <div className="space-y-2">
                      {achievement.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-start gap-2">
                          <Check className="text-secondary-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <Code className="text-primary-500 w-8 h-8" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <project.icon className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{project.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" 
                       className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <Briefcase className="text-primary-500 w-8 h-8" />
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <exp.icon className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                    <p className="text-primary-600 font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-3">{exp.description}</p>
                    {exp.achievements && (
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-2">
                            <Check className="text-secondary-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {exp.skills && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Organizations Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <Users className="text-primary-500 w-8 h-8" />
            Organizations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {organizations.map((org, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <org.icon className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{org.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{org.period}</span>
                    </div>
                    {org.description && (
                      <p className="text-gray-700 mb-3">{org.description}</p>
                    )}
                    {org.achievements && (
                      <div className="space-y-2">
                        {org.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-2">
                            <Check className="text-secondary-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

