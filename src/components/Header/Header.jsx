import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Download, Menu, X } from 'lucide-react'
import logoImg from '../../assets/img/header/logo.png'
import cvPdf from '../../assets/img/landing/CV_ATS_RasendriyaAbel_New.pdf'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-self-start">
            <img src={logoImg} alt="Logo" className="w-16 h-16 sm:w-22 sm:h-12 rounded-lg" />
          </Link>

          {/* Navigation Links - Desktop (center) */}
          <div className="hidden md:flex items-center justify-center space-x-8">
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

          {/* Right actions - Desktop */}
          <div className="hidden md:flex justify-self-end">
            <a href={cvPdf} download className="btn-primary ml-2">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Hamburger - Mobile */}
          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="md:hidden justify-self-end inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen (solid background) */}
      <nav
        className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img src={logoImg} alt="Logo" className="w-12 h-12 rounded-lg" />
          </Link>
          <button
            aria-label="Close menu"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <Link to="/" className="block text-gray-800 font-semibold hover:text-primary-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block text-gray-800 font-semibold hover:text-primary-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="block text-gray-800 font-semibold hover:text-primary-600" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/#contact" className="block text-gray-800 font-semibold hover:text-primary-600" onClick={() => setIsOpen(false)}>Contact</Link>
          <div className="pt-4">
            <a href={cvPdf} download className="btn-primary w-full" onClick={() => setIsOpen(false)}>
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

