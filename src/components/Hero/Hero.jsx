import { MessageCircle } from 'lucide-react'

function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase">
                WE CREATE PORTFOLIO FOR YOU
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
                UI UX<br />
                <span className="bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
                  DESIGNER
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                I specialize in creating beautiful, functional, and user-centered digital experiences 
                that help businesses grow and succeed in the digital world.
              </p>
            </div>
            <button className="btn-secondary">
              <MessageCircle className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Main Image Container */}
              <div className="w-80 h-96 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-t-full rounded-b-3xl relative overflow-hidden shadow-2xl">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-300/20"></div>
              </div>
              
              {/* Rating Badge */}
              <div className="absolute -top-4 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-500">4.5</div>
                  <div className="text-xs text-gray-600 mb-2">89k+ Total Review</div>
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-secondary-300 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-primary-300 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-gradient-to-br from-secondary-300 to-primary-400 rounded-full border-2 border-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

