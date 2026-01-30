import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '../components/Footer/Footer'
import ProjectHero from '../components/ProjectHero/ProjectHero'

import coverHarvestHub from '../assets/img/harvesthub/cover_harvesthub.png'
import hh1 from '../assets/img/harvesthub/1.png'
import hh2 from '../assets/img/harvesthub/2.png'
import hh3 from '../assets/img/harvesthub/3.png'
import hh4 from '../assets/img/harvesthub/4.png'
import hh5 from '../assets/img/harvesthub/5.png'
import hh6 from '../assets/img/harvesthub/6.png'

function ProjectDetailHarvestHub() {
  const overviewSlides = [hh1, hh2, hh3, hh4, hh5, hh6]

  return (
    <div className="min-h-screen bg-white">
      <ProjectHero
        title="HarvestHub"
        subtitle="Platform untuk meningkatkan efektivitas distribusi hasil pertanian"
        coverSrc={coverHarvestHub}
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

export default ProjectDetailHarvestHub