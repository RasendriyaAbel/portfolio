import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Calendar, Filter, TrendingDown, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '../components/Footer/Footer'
import ProjectHero from '../components/ProjectHero/ProjectHero'
import fixYouImage1 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0001.jpg'
import fixYouImage2 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0002.jpg'
import fixYouImage3 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0003.jpg'
import fixYouImage4 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0004.jpg'
import fixYouImage5 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0005.jpg'
import fixYouImage6 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0006.jpg'
import fixYouImage7 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0007.jpg'
import fixYouImage8 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0008.jpg'
import fixYouImage9 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0009.jpg'
import fixYouImage10 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0010.jpg'
import fixYouImage11 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0011.jpg'
import fixYouImage12 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0012.jpg'
import fixYouImage13 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0013.jpg'
import fixYouImage14 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0014.jpg'
import fixYouImage15 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0015.jpg'
import fixYouImage16 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0016.jpg'
import fixYouImage17 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0017.jpg'
import fixYouImage18 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0018.jpg'
import fixYouImage19 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0019.jpg'
import fixYouImage20 from '../assets/img/fixyou/Purple Black Modern Marketing Plan Presentation_page-0020.jpg'
import fixyouCover from '../assets/img/fixyou/cover_fixyou.png'

function ProjectDetailFixYou() {
      const caseStudySlides = [
        { id: 1, image: fixYouImage1 },
        { id: 2, image: fixYouImage2 },
        { id: 3, image: fixYouImage3 },
        { id: 4, image: fixYouImage4 },
        { id: 5, image: fixYouImage5 },
        { id: 6, image: fixYouImage6 },
        { id: 7, image: fixYouImage7 },
        { id: 8, image: fixYouImage8 },
        { id: 9, image: fixYouImage9 },
        { id: 10, image: fixYouImage10 },
        { id: 11, image: fixYouImage11 },
        { id: 12, image: fixYouImage12 },
        { id: 13, image: fixYouImage13 },
        { id: 14, image: fixYouImage14 },
        { id: 15, image: fixYouImage15 },
        { id: 16, image: fixYouImage16 },
        { id: 17, image: fixYouImage17 },
        { id: 18, image: fixYouImage18 },
        { id: 19, image: fixYouImage19 },
        { id: 20, image: fixYouImage20 }
      ]
      
   
  return (
      <div className="min-h-screen bg-white">
        <ProjectHero
          title="FixYou - Mental Health Platform"
          subtitle="Platform kesehatan mental dengan integrasi AI/ML untuk analisis mood"
          coverSrc={fixyouCover}
          backPath="/projects"
          backLabel="Kembali ke Projects"
          repoUrl="https://github.com"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header diganti oleh ProjectHero di atas */}
          {/* Case Study Slides - 3 per slide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Product Overview</h2>
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
                'React.js',
                'Inertia.js',
                'Vite',
                'Tailwind CSS',
                'Chart.js',
                'Framer Motion',
                'GSAP',
                'Python Flask',
                'Google Gemini API',
                'MySQL',
                'WebSocket',
                'Laravel 12',
                'MySQL',
                'WebSocket',
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

export default ProjectDetailFixYou