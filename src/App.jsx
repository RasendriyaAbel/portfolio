import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetail from './pages/ProjectDetail'
import ProjectDetailTrello from './pages/ProjectDetailTrello'
import ProjectDetailFixYou from './pages/ProjectDetailFixYou'
import ProjectDetailProductionControl from './pages/ProjectDetailProductionControl'

function App() {
  return (
    <Router>
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
        </Routes>
      </div>
    </Router>
  )
}

export default App
