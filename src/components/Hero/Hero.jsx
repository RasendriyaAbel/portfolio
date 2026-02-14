import { MessageCircle } from 'lucide-react'

function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-24 swiss-grid-bg">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary-500" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.95] uppercase">
                Rasendriya
                <br />
                Abel
              </h1>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-secondary-300" aria-hidden="true" />
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-lg">
                  Passionate in Software Development, UI/UX Design, and Project Management
                </p>
              </div>
              <div className="border-l-8 border-primary-500 pl-4">
                <p className="text-2xl sm:text-3xl font-extrabold tracking-wider uppercase text-gray-900">
                  IT Enthusiast
                </p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/rasendriyaabel_/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-4 h-40 bg-primary-500" aria-hidden="true" />
              <div className="col-span-2 h-24 bg-secondary-300" aria-hidden="true" />
              <div className="col-span-3 border-t-4 border-gray-300 mt-8 pt-4">
                <p className="text-gray-900 font-bold uppercase tracking-widest">Design + Code</p>
              </div>
              <div className="col-span-3 border-t-4 border-gray-300 mt-8 pt-4 text-right">
                <p className="text-gray-500 uppercase tracking-widest">Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

