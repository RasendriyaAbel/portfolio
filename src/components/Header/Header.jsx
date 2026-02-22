import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Download, Menu, X } from 'lucide-react'
import logoImg from '../../assets/img/header/logo.png'
import cvPdf from '../../assets/img/landing/CV_ATS_RasendriyaAbel_New.pdf'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-6 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white/90 backdrop-blur border-2 border-gray-200 shadow px-4 sm:px-6 grid grid-cols-3 items-center py-4">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary-500" aria-hidden="true" />
          {/* Logo */}
          <Link to="/" className="flex items-center justify-self-start">
            <img src={logoImg} alt="Logo" className="w-26 h-16" />
          </Link>

          {/* Navigation Links - Desktop (center) */}
          <div className="hidden md:flex items-center justify-center gap-8">
            <Link to="/" className="text-gray-900 uppercase font-black tracking-widest">
              Home
            </Link>
            <Link to="/about" className="text-gray-900 uppercase font-black tracking-widest">
              About
            </Link>
            <Link to="/#services" className="text-gray-900 uppercase font-black tracking-widest">
              Services
            </Link>
            <Link to="/projects" className="text-gray-900 uppercase font-black tracking-widest">
              Projects
            </Link>
            <Link to="/#contact" className="text-gray-900 uppercase font-black tracking-widest">
              Contact
            </Link>
          </div>

          {/* Right actions - Desktop */}
          <div className="hidden md:flex justify-self-end">
            <a href={cvPdf} download className="btn-primary ml-2 rounded-none">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Hamburger - Mobile */}
          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 border-2 border-gray-200 text-gray-900"
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
        <div className="px-6 py-4 flex items-center justify-between border-b-2 border-gray-200">
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img src={logoImg} alt="Logo" className="w-12 h-12" />
          </Link>
          <button
            aria-label="Close menu"
            className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <Link to="/" className="block text-gray-900 font-black uppercase tracking-widest" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block text-gray-900 font-black uppercase tracking-widest" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="block text-gray-900 font-black uppercase tracking-widest" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/#contact" className="block text-gray-900 font-black uppercase tracking-widest" onClick={() => setIsOpen(false)}>Contact</Link>
          <div className="pt-4">
            <a href={cvPdf} download className="btn-primary w-full rounded-none" onClick={() => setIsOpen(false)}>
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

