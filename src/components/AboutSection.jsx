import { Download, Mail } from 'lucide-react'
import SectionHeading from './SectionHeading'

const areasOfFocus = [
    { title: 'Backend', details: 'Python · Go · Django · FastAPI · Beego' },
    { title: 'AI engineering', details: 'LangGraph · LangChain · CrewAI · RAG · MCP' },
    { title: 'Frontend', details: 'React · Next.js · Tailwind CSS · Bootstrap' },
    { title: 'Cloud, infrastructure & testing', details: 'AWS · Docker · Linux · Pytest · Postman · Playwright' },
    { title: 'Problem solving & research', details: 'Codeforces Specialist · 1500+ problems · AI/ML research' },
]

const milestones = [
    { value: '1500+', label: 'Problems solved' },
    { value: '200+', label: 'Online contests' },
    { value: '20', label: 'Portfolio projects' },
    { value: 'First author', label: 'AI / ML research' },
]

export default function AboutSection() {
    return (
        <section className="mx-auto w-full max-w-305">
            <article className="portfolio-panel px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
                <SectionHeading
                    eyebrow="Profile"
                    title="About"
                    description="A concise view of my engineering experience, focus areas, and technical foundation."
                />

                <div className="grid gap-10 pt-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.85fr)] lg:gap-12">
                    <section aria-labelledby="about-profile-heading">
                        <h3 id="about-profile-heading" className="text-lg font-semibold text-slate-900">Professional profile</h3>
                        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                            <p>
                                I build scalable APIs, AI agent workflows, RAG systems, and intelligent software solutions using Python, FastAPI, Django, Go, PostgreSQL, and modern AI frameworks.
                            </p>
                            <p>
                                During my Software Engineering Internship at W3 Engineers, I worked on backend development, automation, and AI agent workflows through engineering training, team mentorship, and iterative project development.
                            </p>
                            <p>
                                My software engineering foundation includes algorithmic problem solving, with more than 1,500 competitive programming problems solved and a Codeforces Specialist rating. I focus on clear architecture, structured workflows, and maintainable systems.
                            </p>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <a
                                href="/NaimurRahmanLamCV.pdf"
                                download="NaimurRahmanLamCV.pdf"
                                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#18233b] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#2b3a58] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18233b]"
                            >
                                <Download size={16} aria-hidden="true" />
                                Download CV
                            </a>
                            <a
                                href="mailto:naimurrahmanlamm@gmail.com"
                                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 px-5 text-sm font-semibold text-[#18233b] transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18233b]"
                            >
                                <Mail size={16} aria-hidden="true" />
                                Contact me
                            </a>
                        </div>
                    </section>

                    <aside aria-labelledby="about-focus-heading">
                        <h3 id="about-focus-heading" className="text-lg font-semibold text-slate-900">Areas of focus</h3>
                        <ul className="mt-4 border-t border-slate-200">
                            {areasOfFocus.map((area) => (
                                <li key={area.title} className="border-b border-slate-200 py-3.5">
                                    <h4 className="text-sm font-semibold text-[#18233b]">{area.title}</h4>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">{area.details}</p>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>

                <section className="mt-10 border-t border-slate-200 pt-7" aria-labelledby="about-milestones-heading">
                    <h3 id="about-milestones-heading" className="text-lg font-semibold text-slate-900">At a glance</h3>
                    <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                        {milestones.map((item) => (
                            <div key={item.label} className="border-l-2 border-[#a9b4c4] pl-4">
                                <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">{item.label}</dt>
                                <dd className="mt-2 font-serif text-xl font-semibold text-[#18233b] sm:text-2xl">{item.value}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </article>
        </section>
    )
}
