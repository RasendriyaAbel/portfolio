import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'

function ProjectHero({
  title,
  subtitle,
  coverSrc,
  backPath = '/projects',
  backLabel = 'Kembali ke Projects',
  repoUrl,
  repoLabel = 'View Repository',
  heightClass = 'h-[280px] sm:h-[360px] lg:h-[420px]'
}) {
  return (
    <section className={`relative ${heightClass} overflow-hidden`}>
      <img
        src={coverSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-6">
        <div className="text-white">
          <h1 className="text-2xl sm:text-4xl font-extrabold">{title}</h1>
          {subtitle && (
            <p className="text-white/90 mt-2 text-sm sm:text-base">{subtitle}</p>
          )}
          <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link to={backPath} className="inline-flex items-center gap-2 text-white hover:text-white/90">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm sm:text-base">{backLabel}</span>
            </Link>
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm sm:text-base">{repoLabel}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero