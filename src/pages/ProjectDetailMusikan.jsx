import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '../components/Footer/Footer'
import ProjectHero from '../components/ProjectHero/ProjectHero'

import coverMusikan from '../assets/img/musikan/cover_musikan.png'
import m1 from '../assets/img/musikan/1.png'
import m2 from '../assets/img/musikan/2.png'
import m3 from '../assets/img/musikan/3.png'
import m4 from '../assets/img/musikan/4.png'
import m5 from '../assets/img/musikan/5.png'
import m6 from '../assets/img/musikan/6.png'
import m7 from '../assets/img/musikan/7.png'
import m8 from '../assets/img/musikan/8.png'
import m9 from '../assets/img/musikan/9.png'
import m10 from '../assets/img/musikan/10.png'
import m11 from '../assets/img/musikan/11.png'
import m12 from '../assets/img/musikan/12.png'
import m13 from '../assets/img/musikan/13.png'
import m14 from '../assets/img/musikan/14.png'
import m15 from '../assets/img/musikan/15.png'
import m16 from '../assets/img/musikan/16.png'
import m17 from '../assets/img/musikan/17.png'

function ProjectDetailMusikan() {
  const overviewImages = [
    m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ProjectHero
        title="Musikan - Music Player Prototype"
        subtitle="UI/UX Research & Prototype aplikasi pemutar musik"
        coverSrc={coverMusikan}
        backPath="/projects"
        backLabel="Kembali ke Projects"
        repoUrl="#"
      />

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ringkasan Proyek</h2>
          <p className="text-gray-600 max-w-3xl">
            Studi dan eksplorasi pengalaman pengguna untuk aplikasi pemutar musik: melakukan user research, menyusun persona, 
            user flow, wireframe, dan prototyping. Fokus pada kemudahan navigasi, pencarian, dan kontrol playback.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Project Overview</h2>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="rounded-xl"
          >
            {overviewImages.map((imgSrc, idx) => (
              <SwiperSlide key={idx}>
                <div className="card overflow-hidden">
                  <img src={imgSrc} alt={`Musikan Overview ${idx + 1}`} className="w-full h-72 object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Details */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Tujuan</h3>
            <p className="text-gray-600">Merancang pengalaman pemutar musik yang intuitif dengan fokus pada kemudahan pencarian lagu, playlist, dan kontrol playback.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Metode</h3>
            <p className="text-gray-600">User research, penyusunan persona, user flow, wireframing, prototyping, dan usability testing.</p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default ProjectDetailMusikan