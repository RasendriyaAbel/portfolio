import { Twitter, Linkedin, Mail, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-white swiss-grid-bg">
      <div className="border-t-8 border-primary-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 bg-primary-500 flex items-center justify-center text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-primary-500 flex items-center justify-center text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-secondary-300 flex items-center justify-center text-white">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-secondary-300 flex items-center justify-center text-white">
              <Phone className="w-5 h-5" />
            </a>
          </div>
          <div className="border-t-4 border-gray-300 w-full max-w-3xl pt-4">
            <p className="text-gray-900 text-center uppercase font-black tracking-widest">
              © 2026 Portfolio Designer
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
