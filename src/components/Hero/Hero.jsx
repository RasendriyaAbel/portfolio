import { MessageCircle } from 'lucide-react'
import heroBg from '../../assets/img/landing/backgroundhero.png'

function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 relative bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Hapus tagline */}
              <h1 className="text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
                Rasendriya Abel
                <br />
                <span className="bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
                  IT Enthusiast
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Passionate in Software Development, UI/UX Design, and Project Management
              </p>
            </div>
            <button className="btn-secondary">
              <MessageCircle className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Right Content removed: using background image for hero */}
        </div>
      </div>
    </section>
  )
}

export default Hero

