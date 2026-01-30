import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import vectorImg from '../assets/img/landing/vector.png'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* About Section Preview */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase">
                  About Me
                </p>
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                  Are you looking for creative design? Let me help you!
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  I specialize in UI/UX Design, Project Management, and Software Development. 
                  With years of experience, I create digital solutions that combine beautiful 
                  design with functional development to bring your ideas to life.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary-300 rounded-full flex items-center justify-center">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Expert UI/UX Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary-300 rounded-full flex items-center justify-center">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Agile Project Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary-300 rounded-full flex items-center justify-center">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary-300 rounded-full flex items-center justify-center">
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
              <div className="relative">
                {/* Main Image replaced with vector.png */}
                <img
                  src={vectorImg}
                  alt="Experience Vector"
                  className="w-[620px] h-[620px] md:w-[600px] md:h-[600px] object-contain"
                  loading="eager"
                />
                

              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Work Together</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Get Started
            </button>
            <button className="btn-outline">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home

