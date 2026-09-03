import {
    Bot,
    Brain,
    Code2,
    Download,
    FolderOpen,
    Mail,
    Medal,
    Monitor,
    Wrench,
} from 'lucide-react'

const highlightCards = [
    {
        title: 'Backend & APIs',
        description: 'Python · Go · Django · FastAPI · Beego',
        icon: Code2,
        cardClass: 'bg-sky-50 border-sky-100',
        iconClass: 'bg-sky-100 text-sky-700',
    },
    {
        title: 'AI Engineering',
        description: 'LangGraph · LangChain · CrewAI · RAG · MCP',
        icon: Bot,
        cardClass: 'bg-emerald-50 border-emerald-100',
        iconClass: 'bg-emerald-100 text-emerald-700',
    },
    {
        title: 'Frontend',
        description: 'React · Next.js · Tailwind CSS · Bootstrap',
        icon: Monitor,
        cardClass: 'bg-violet-50 border-violet-100',
        iconClass: 'bg-violet-100 text-violet-700',
    },
    {
        title: 'Infrastructure & Testing',
        description: 'Docker · Linux · Pytest · Postman · Playwright',
        icon: Wrench,
        cardClass: 'bg-amber-50 border-amber-100',
        iconClass: 'bg-amber-100 text-amber-700',
    },
    {
        title: 'Problem Solving & Research',
        description: 'Codeforces Specialist · 1500+ problems · AI/ML research',
        icon: Brain,
        cardClass: 'bg-purple-50 border-purple-100',
        iconClass: 'bg-purple-100 text-purple-700',
    },
]

const statsCards = [
    {
        value: '1500+',
        label: 'Problems Solved',
        icon: Code2,
        cardClass: 'bg-sky-50 border-sky-100',
        iconClass: 'bg-sky-100 text-sky-700',
    },
    {
        value: '200+',
        label: 'Online Contests',
        icon: Medal,
        cardClass: 'bg-emerald-50 border-emerald-100',
        iconClass: 'bg-emerald-100 text-emerald-700',
    },
    {
        value: '3',
        label: 'Featured Projects',
        icon: FolderOpen,
        cardClass: 'bg-violet-50 border-violet-100',
        iconClass: 'bg-violet-100 text-violet-700',
    },
    {
        value: 'First Author',
        label: 'AI / ML Research',
        icon: Brain,
        cardClass: 'bg-amber-50 border-amber-100',
        iconClass: 'bg-amber-100 text-amber-700',
    },
]

export default function AboutSection() {
    return (
        <section className="mx-auto w-full max-w-305">
            <article className="rounded-[28px] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_14px_36px_rgba(15,23,42,0.08)] sm:px-8 sm:py-7 lg:px-9 lg:py-8">
                <header>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">About</h1>
                    <p className="mt-2.5 max-w-3xl text-[15px] leading-6 text-slate-500 sm:text-base">
                        Software engineer specializing in backend and AI systems, with experience building scalable
                        applications, AI agents, and agent orchestration workflows.
                    </p>
                    <div className="mt-4 h-px w-full bg-slate-200" />
                </header>

                <div className="mt-6 grid gap-5 lg:grid-cols-[57fr_43fr] lg:gap-6">
                    <div>
                        <div className="space-y-4 text-[15px] leading-6 text-slate-700 sm:text-base">
                            <p>
                                I build scalable backend applications and AI-powered systems using{' '}
                                <span className="font-semibold text-sky-700">Python</span>,{' '}
                                <span className="font-semibold text-sky-700">Go</span>,{' '}
                                <span className="font-semibold text-sky-700">FastAPI</span>,{' '}
                                <span className="font-semibold text-sky-700">Django</span>,{' '}
                                <span className="font-semibold text-sky-700">LangGraph</span>, and{' '}
                                <span className="font-semibold text-sky-700">PostgreSQL</span>. My work focuses on REST APIs,
                                scalable backend systems, AI agents, and agent orchestration workflows.
                            </p>
                            <p>
                                I completed a <span className="font-semibold text-sky-700">Software Engineering Internship at W3 Engineers</span>,
                                where I worked across Python, Django, Go, Beego, React, and Next.js in a project-based
                                engineering rotation. As part of the Presto team, I focused on agent orchestration
                                frameworks and AI agent infrastructure in an Agile environment.
                            </p>
                            <p>
                                Competitive programming has sharpened my analytical thinking through{' '}
                                <span className="font-semibold text-sky-700">1500+ solved problems</span> and{' '}
                                <span className="font-semibold text-sky-700">200+ online contests</span>, earning the
                                Codeforces Specialist rank. I also conduct machine learning research and am first author
                                of a submitted study on robust, generalisable polyp segmentation.
                            </p>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href="/NaimurRahmanLamCV.pdf"
                                download="NaimurRahmanLamCV.pdf"
                                className="inline-flex h-10.5 items-center gap-2 rounded-xl bg-[#162b46] px-5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(22,43,70,0.22)] transition-colors duration-200 hover:bg-[#1d3656]"
                            >
                                <Download size={17} />
                                <span>Download CV</span>
                            </a>

                            <a
                                href="mailto:naimurrahmanlamm@gmail.com"
                                className="inline-flex h-10.5 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50"
                            >
                                <Mail size={17} />
                                <span>Contact Me</span>
                            </a>
                        </div>
                    </div>

                    <aside className="space-y-2.5">
                        {highlightCards.map((item) => {
                            const Icon = item.icon

                            return (
                                <article
                                    key={item.title}
                                    className={`flex items-start gap-3 rounded-2xl border px-4 py-2.5 ${item.cardClass}`}
                                >
                                    <div
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.iconClass}`}
                                    >
                                        <Icon size={17} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-900 sm:text-[15px]">{item.title}</h3>
                                        <p className="mt-0.5 text-[13px] leading-5 text-slate-600 sm:text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            )
                        })}
                    </aside>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {statsCards.map((item) => {
                            const Icon = item.icon

                            return (
                                <article
                                    key={item.value + item.label}
                                    className={`flex flex-col items-center rounded-2xl border px-4 py-4 text-center ${item.cardClass}`}
                                >
                                    <div
                                        className={`mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl ${item.iconClass}`}
                                    >
                                        <Icon size={17} />
                                    </div>
                                    <p className="text-xl font-bold text-slate-900">{item.value}</p>
                                    <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </article>
        </section>
    )
}
