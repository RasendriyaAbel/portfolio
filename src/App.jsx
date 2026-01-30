import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetail from './pages/ProjectDetail'
import ProjectDetailTrello from './pages/ProjectDetailTrello'
import ProjectDetailFixYou from './pages/ProjectDetailFixYou'
import ProjectDetailProductionControl from './pages/ProjectDetailProductionControl'
import ProjectDetailMusikan from './pages/ProjectDetailMusikan'
import ProjectDetailHarvestHub from './pages/ProjectDetailHarvestHub'
import ProjectDetailTAK from './pages/ProjectDetailTAK'

function App() {
  return (
    <Router basename="/portfolio">
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/kai-redesign" element={<ProjectDetail />} />
          <Route path="/projects/trello-management" element={<ProjectDetailTrello />} />
          <Route path="/projects/fixyou" element={<ProjectDetailFixYou />} />
          <Route path="/projects/production-control-system" element={<ProjectDetailProductionControl />} />
          <Route path="/projects/musikan" element={<ProjectDetailMusikan />} />
          <Route path="/projects/harvesthub" element={<ProjectDetailHarvestHub />} />
          <Route path="/projects/tak-mobile-prototype" element={<ProjectDetailTAK />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
