import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '../components/Footer/Footer'
import coverImage from '../assets/img/bmu/image.png'
import ticketingImage from '../assets/img/bmu/ticketing.png'
import pcs1 from '../assets/img/bmu/1.png'
import pcs2 from '../assets/img/bmu/2.png'
import pcs3 from '../assets/img/bmu/3.png'
import pcs4 from '../assets/img/bmu/4.png'
import pcs5 from '../assets/img/bmu/5.png'
import pcs6 from '../assets/img/bmu/6.png'
import pcs7 from '../assets/img/bmu/7.png'
import pcs8 from '../assets/img/bmu/8.png'
import pcs9 from '../assets/img/bmu/9.png'
import pcs10 from '../assets/img/bmu/10.png'
import pcs11 from '../assets/img/bmu/11.png'
import pcs13 from '../assets/img/bmu/13.png'

function ProjectDetailProductionControl() {
  const overviewSlides = [
    pcs1, pcs2, pcs3, pcs4, pcs5, pcs6, pcs7, pcs8, pcs9, pcs10, pcs11, pcs13
  ]

  const documentationSlides = [coverImage, ticketingImage]

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Project Management
            </span>
            <span className="px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">
              PT Berlindo Mitra Utama
            </span>
          </div>
          <h1 className="text-5xl font-black text-gray-800 mb-4">Production Control System</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            Web-based Planning Control System yang mengotomasi daily manufacturing production scheduling berdasarkan input parameters seperti production time, stock levels, customer demand, dan working hours.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Jul 2025 - Aug 2025</span>
            <span className="text-gray-300">•</span>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <ExternalLink className="w-4 h-4" />
              View Repository
            </a>
          </div>
        </div>

        {/* Project Cover */}
        <section className="mb-12">
          <div className="card p-0 overflow-hidden">
            <img 
              src={coverImage} 
              alt="Production Control System Cover"
              className="w-full h-auto object-cover rounded-2xl"
              loading="eager"
            />
          </div>
        </section>

        {/* Product Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Product Overview</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="case-study-swiper"
          >
            {overviewSlides.map((imgSrc, idx) => (
              <SwiperSlide key={idx}>
                <div className="card p-0 h-full overflow-hidden">
                  <img 
                    src={imgSrc} 
                    alt={`Overview ${idx + 1}`}
                    className="w-full h-auto object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Documentation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Documentation</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="case-study-swiper"
          >
            {documentationSlides.map((imgSrc, idx) => (
              <SwiperSlide key={idx}>
                <div className="card p-0 h-full overflow-hidden">
                  <img 
                    src={imgSrc} 
                    alt={`Documentation ${idx + 1}`}
                    className="w-full h-auto object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Web Development',
              'Planning System',
              'Automation',
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default ProjectDetailProductionControl