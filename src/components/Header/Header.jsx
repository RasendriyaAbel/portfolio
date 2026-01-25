import { Link } from 'react-router-dom'
import { Palette, Download } from 'lucide-react'

function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-300 rounded-lg flex items-center justify-center">
              <Palette className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-bold text-sm tracking-wide">PORTFOLIO</span>
              <span className="text-secondary-500 font-semibold text-xs">DESIGNER</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/#services" className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/#contact" className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Download CV Button */}
          <button className="btn-primary">
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

