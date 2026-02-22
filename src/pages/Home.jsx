import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import { Check, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ilustrasiImg from '../assets/img/landing/ilustrasi.png'

function Home() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* About Section Preview */}
      <section id="about" className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase">
                  About Me
                </p>
                <div className="border-l-8 border-primary-500 pl-4">
                  <h2 className="text-4xl font-black text-gray-900 leading-tight uppercase tracking-wide">
                    Are you looking for creative design?
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mt-3">
                    I specialize in UI/UX Design, Project Management, and Software Development.
                    I create digital solutions that combine beautiful design with functional development.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary-300 flex items-center justify-center">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Expert UI/UX Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary-300 flex items-center justify-center">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Agile Project Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary-300 flex items-center justify-center">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary-300 flex items-center justify-center">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Modern Tech Solutions</span>
                </div>
              </div>

              <Link to="/about" className="btn-outline inline-flex items-center gap-2">
                <span>More About</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Content */}
            <div className="relative flex justify-center">
              <div className="relative border-4 border-gray-300 p-2">
                <img
                  src={ilustrasiImg}
                  alt="Ilustrasi"
                  className="w-[520px] h-[520px] md:w-[500px] md:h-[500px] object-contain"
                  loading="eager"
                />
                

              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white swiss-grid-bg">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-8 border-primary-500 pl-4 mb-6">
            <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tight">Let's Work Together</h2>
            <p className="text-gray-700 text-lg mt-3 max-w-2xl">
              Ready to bring your ideas to life? Let’s discuss and create something impactful together.
            </p>
          </div>
          
          <div className="border-t-4 border-gray-300 pt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.instagram.com/rasendriyaabel_/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-none"
            >
              Get Started
            </a>
            <Link to="/projects" className="btn-outline rounded-none">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home

