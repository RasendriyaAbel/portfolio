import { Twitter, Linkedin, Mail, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200">
              <Phone className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-gray-600 text-center">
            &copy; 2026 Portfolio Designer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

