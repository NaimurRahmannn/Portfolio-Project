import { useEffect } from 'react'
import PortfolioHeader from './components/PortfolioHeader'
import PortfolioNavbar from './components/PortfolioNavbar'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import AwardsAchievementsPage from './pages/AwardsAchievementsPage'
import ProjectsPage from './pages/ProjectsPage'
import TrainingWorkExperiencePage from './pages/TrainingWorkExperiencePage'
import CertificatesPage from './pages/CertificatesPage'
import ResearchExperiencePage from './pages/ResearchExperiencePage'

const sections = [
    { id: 'about', Component: AboutSection },
    { id: 'skills', Component: SkillsSection },
    { id: 'awards-achievements', Component: AwardsAchievementsPage },
    { id: 'education-work-experience', Component: TrainingWorkExperiencePage },
    { id: 'projects', Component: ProjectsPage },
    { id: 'research-experience', Component: ResearchExperiencePage },
    { id: 'certificates', Component: CertificatesPage },
]

export default function Home() {
    useEffect(() => {
        if (!window.location.hash) return undefined

        const frame = window.requestAnimationFrame(() => {
            document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView()
        })

        return () => window.cancelAnimationFrame(frame)
    }, [])

    return (
        <div className="min-h-screen bg-[#f8f8f6]">
            <PortfolioNavbar />
            <PortfolioHeader />

            <main className="mx-auto w-full max-w-305 space-y-10 px-4 pb-20 pt-6 sm:space-y-14 sm:px-8 sm:pt-8 2xl:px-0">
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className="min-w-0 scroll-mt-28">
                        <section.Component />
                    </section>
                ))}
            </main>

            <footer className="border-t border-[#e4e7ec] bg-white">
                <div className="mx-auto flex w-full max-w-305 flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-[#657188] sm:px-8 2xl:px-0">
                    <p><span className="font-semibold text-[#18233b]">Naimur Rahman Lam</span> · Software Engineer</p>
                    <div className="flex flex-wrap gap-5">
                        <a href="mailto:naimurrahmanlamm@gmail.com" className="hover:text-[#18233b] hover:underline">Get in touch</a>
                        <a href="#top" className="hover:text-[#18233b] hover:underline">Back to top ↑</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
