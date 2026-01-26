import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Calendar, Filter, TrendingDown, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '../components/Footer/Footer'
import fixYouImage1 from '../assets/img/fixyou/1.png'
import fixYouImage2 from '../assets/img/fixyou/2.png'
import fixYouImage3 from '../assets/img/fixyou/3.png'
import fixYouImage4 from '../assets/img/fixyou/4.png'
import fixYouImage5 from '../assets/img/fixyou/5.png'
import fixYouImage6 from '../assets/img/fixyou/6.png'

function ProjectDetailFixYou() {
      const caseStudySlides = [
        { id: 1, image: fixYouImage1 },
        { id: 2, image: fixYouImage2 },
        { id: 3, image: fixYouImage3 },
        { id: 4, image: fixYouImage4 },
        { id: 5, image: fixYouImage5 },
        { id: 6, image: fixYouImage6 }
      ]
      
   
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
                UX Case Study
              </span>
              <span className="px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">
                Top 15 Hacksphere Hackathon
              </span>
            </div>
            <h1 className="text-5xl font-black text-gray-800 mb-4">
              KAI Redesign Apps
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl">
              Case study ini mengeksplorasi solusi untuk masalah aksesibilitas informasi harga tiket kereta api. 
              Masalahnya bukan di harga, tapi di kemudahan akses informasi. Solusi desain ini bukan soal menambah fitur, 
              tapi menempatkan keputusan di waktu yang tepat - dengan menjadikan kalender sebagai alat eksplorasi 
              yang memungkinkan user menentukan preferensi harga dan kelas langsung di halaman kalender melalui filter kontekstual.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">October 2025</span>
              <span className="text-gray-300">•</span>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                View Repository
              </a>
            </div>
          </div>
  
          {/* Case Study Slides - 3 per slide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Case Study Overview</h2>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="case-study-swiper"
            >
              {caseStudySlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="card p-0 h-full overflow-hidden">
                    {/* Case Study Image */}
                    <img 
                      src={slide.image} 
                      alt={`Case Study Image ${slide.id}`}
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
                'Figma',
                'Google Play Services',
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