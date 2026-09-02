
import './App.css'
import Home from './Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import AwardsAchievementsPage from './pages/AwardsAchievementsPage'
import ProjectsPage from './pages/ProjectsPage'
import TrainingWorkExperiencePage from './pages/TrainingWorkExperiencePage'
import CertificatesPage from './pages/CertificatesPage'
import ResearchExperiencePage from './pages/ResearchExperiencePage'
import AIMLPage from './pages/AIMLPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Navigate to="/about" replace />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="awards-achievements" element={<AwardsAchievementsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="training-work-experience" element={<TrainingWorkExperiencePage />} />
        <Route path="certificates" element={<CertificatesPage />} />
        <Route path="research-experience" element={<ResearchExperiencePage />} />
        <Route path="ai-and-ml" element={<AIMLPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/about" replace />} />
    </Routes>
  )
}

export default App
