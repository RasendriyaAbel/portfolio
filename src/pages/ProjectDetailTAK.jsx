import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '../components/Footer/Footer'
import ProjectHero from '../components/ProjectHero/ProjectHero'

import coverTAK from '../assets/img/imk/cover_tak.png'

function ProjectDetailTAK() {
  // Ambil semua PNG dari folder imk, lalu filter selain cover dan urutkan 1-49
  const allPng = import.meta.glob('../assets/img/imk/*.png', { eager: true, import: 'default' })
  const overviewSlides = Object.entries(allPng)
    .filter(([path]) => /\/imk\/(?!cover_tak\.png)\d+\.png$/.test(path))
    .sort((a, b) => {
      const na = parseInt(a[0].match(/(\d+)\.png$/)[1], 10)
      const nb = parseInt(b[0].match(/(\d+)\.png$/)[1], 10)
      return na - nb
    })
    .map(([, src]) => src)

  return (
    <div className="min-h-screen bg-white">
      <ProjectHero
        title="TAK Mobile Prototype"
        subtitle="Prototype aplikasi Student Activity Transcript (TAK) Telkom University"
        coverSrc={coverTAK}
        backPath="/projects"
        backLabel="Kembali ke Projects"
        repoUrl="#"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Project Overview</h2>
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
      </div>

      <Footer />
    </div>
  )
}

export default ProjectDetailTAK