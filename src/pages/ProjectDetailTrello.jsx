import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from '../components/Footer/Footer'
import ProjectHero from '../components/ProjectHero/ProjectHero'
import trelloCover from '../assets/img/manpro_trello/sampul_trello.png'
import trelloInfographic from '../assets/img/manpro_trello/infografis_manpro.png'
import projectCharterDoc from '../assets/img/manpro_trello/project_charter.pdf'
import gantChartPdf from '../assets/img/manpro_trello/gant_chart.pdf'
import pmpDocPdf from '../assets/img/manpro_trello/PMP_Document_Kelompok_7.pdf'
import mt1 from '../assets/img/manpro_trello/1.png'
import mt2 from '../assets/img/manpro_trello/2.png'
import mt3 from '../assets/img/manpro_trello/3.png'
import mt4 from '../assets/img/manpro_trello/4.png'
import mt5 from '../assets/img/manpro_trello/5.png'
import mt6 from '../assets/img/manpro_trello/6.png'
import mt7 from '../assets/img/manpro_trello/7.png'
import mt8 from '../assets/img/manpro_trello/8.png'
import mt9 from '../assets/img/manpro_trello/9.png'
import mt10 from '../assets/img/manpro_trello/10.png'
import mt11 from '../assets/img/manpro_trello/11.png'
import mt12 from '../assets/img/manpro_trello/12.png'
import mt13 from '../assets/img/manpro_trello/13.png'
import mt14 from '../assets/img/manpro_trello/14.png'
import mt15 from '../assets/img/manpro_trello/15.png'
import mt16 from '../assets/img/manpro_trello/16.png'
import mt17 from '../assets/img/manpro_trello/17.png'
import mt18 from '../assets/img/manpro_trello/18.png'
import mt19 from '../assets/img/manpro_trello/19.png'
import mt20 from '../assets/img/manpro_trello/20.png'

function ProjectDetailTrello() {
  const overviewSlides = [mt1, mt2, mt3, mt4, mt5, mt6, mt7, mt8, mt9, mt10, mt11, mt12, mt13, mt14, mt15, mt16, mt17, mt18, mt19, mt20]
  const documentationSlides = [trelloInfographic, mt1, mt2, mt3, mt4, mt5, mt6, mt7, mt8, mt9, mt10, mt11, mt12, mt13, mt14, mt15, mt16, mt17, mt18, mt19, mt20]

  return (
    <div className="min-h-screen bg-white">
      <ProjectHero
        title="Implementasi Manajemen Proyek menggunakan Trello"
        subtitle="Agile & Kanban untuk manajemen dan monitoring proyek"
        coverSrc={trelloCover}
        backPath="/projects"
        backLabel="Kembali ke Projects"
        repoUrl="#"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header lama digantikan oleh ProjectHero untuk konsistensi layout */}


        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Technologies & Methods</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Trello',
              'Kanban Board',
              'Agile Methodology',
              'Sprint Planning',
              'Backlog Management',
              'Gantt Chart',
              'Project Charter',
              'Progress Tracking',
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

        {/* Documents Preview */}
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


        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Documents & Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gantt Chart (PDF) */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Gantt Chart (PDF)</h3>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Preview</span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  src={gantChartPdf}
                  title="Gantt Chart PDF Preview"
                  className="w-full h-[420px]"
                />
              </div>
              <div className="mt-4 flex gap-3">
                <a href={gantChartPdf} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
                  <span>Open in New Tab</span>
                </a>
                <a href={gantChartPdf} download className="btn-primary inline-flex items-center gap-2">
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Project Charter (PDF) */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Project Charter (PDF)</h3>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Preview</span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  src={projectCharterDoc}
                  title="Project Charter PDF Preview"
                  className="w-full h-[420px]"
                />
              </div>
              <div className="mt-4 flex gap-3">
                <a href={projectCharterDoc} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
                  <span>Open in New Tab</span>
                </a>
                <a href={projectCharterDoc} download className="btn-primary inline-flex items-center gap-2">
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* PMP Document Kelompok 7 (PDF) */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">PMP Document Kelompok 7 (PDF)</h3>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Preview</span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  src={pmpDocPdf}
                  title="PMP Document Kelompok 7 PDF Preview"
                  className="w-full h-[420px]"
                />
              </div>
              <div className="mt-4 flex gap-3">
                <a href={pmpDocPdf} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
                  <span>Open in New Tab</span>
                </a>
                <a href={pmpDocPdf} download className="btn-primary inline-flex items-center gap-2">
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Infografis Manpro (PNG) */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Infografis Manpro (PNG)</h3>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Preview</span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <img
                  src={trelloInfographic}
                  alt="Infografis Manpro Preview"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex gap-3">
                <a href={trelloInfographic} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
                  <span>Open in New Tab</span>
                </a>
                <a href={trelloInfographic} download className="btn-primary inline-flex items-center gap-2">
                  <span>Download Image</span>
                </a>
              </div>
            </div>

            {/* Sampul Trello (PNG) */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Sampul Trello (PNG)</h3>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Preview</span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <img
                  src={trelloCover}
                  alt="Sampul Trello Preview"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex gap-3">
                <a href={trelloCover} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
                  <span>Open in New Tab</span>
                </a>
                <a href={trelloCover} download className="btn-primary inline-flex items-center gap-2">
                  <span>Download Image</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default ProjectDetailTrello