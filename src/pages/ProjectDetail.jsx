import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Calendar, Filter, TrendingDown, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '../components/Footer/Footer'
import ProjectHero from '../components/ProjectHero/ProjectHero'
import kaiCover from '../assets/img/kai_redesign/sampul_redesign_kai.png'
import kaiImage1 from '../assets/img/kai_redesign/1.png'
import kaiImage2 from '../assets/img/kai_redesign/2.png'
import kaiImage3 from '../assets/img/kai_redesign/3.png'
import kaiImage4 from '../assets/img/kai_redesign/4.png'
import kaiImage5 from '../assets/img/kai_redesign/5.png'
import kaiImage6 from '../assets/img/kai_redesign/6.png'

function ProjectDetail() {

  // Case study slides data - 3 images per slide
  const caseStudySlides = [
    { id: 1, image: kaiImage1 },
    { id: 2, image: kaiImage2 },
    { id: 3, image: kaiImage3 },
    { id: 4, image: kaiImage4 },
    { id: 5, image: kaiImage5 },
    { id: 6, image: kaiImage6 }
  ]  

  return (
    <div className="min-h-screen bg-white">
      <ProjectHero
        title="KAI Redesign Apps"
        subtitle="UX Case Study: akses informasi harga tiket lebih mudah"
        coverSrc={kaiCover}
        backPath="/projects"
        backLabel="Kembali ke Projects"
        repoUrl="https://github.com"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header diganti oleh ProjectHero di atas */}

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

export default ProjectDetail

