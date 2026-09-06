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
        title: 'Backend',
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
        value: '16',
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
                    <div className="mt-4 h-px w-full bg-slate-200" />
                </header>

                <div className="mt-6 grid gap-5 lg:grid-cols-[57fr_43fr] lg:gap-6">
                    <div>
                        <div className="space-y-4 text-[15px] leading-6 text-slate-700 sm:text-base">
                            <p>
                                AI Backend Engineer focused on building reliable backend systems and LLM-powered applications. Experienced in developing scalable APIs, AI agent workflows, RAG systems, and intelligent software solutions using Python, FastAPI, Django, Go, PostgreSQL, and modern AI frameworks.
                            </p>
                            <p>
                                Completed a Software Engineering Internship at W3 Engineers, gaining hands-on experience in backend development, automation, and AI agent workflows through structured engineering training, team mentorship, and iterative project development.
                            </p>
                            <p>
                                Strong foundation in software engineering and algorithmic problem solving, with 1500+ competitive programming problems solved and Codeforces Specialist rating. Focused on building practical AI systems with reliable architecture, structured workflows, and maintainable engineering practices.
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
