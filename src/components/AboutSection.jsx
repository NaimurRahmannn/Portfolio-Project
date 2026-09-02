import {
    Brain,
    Code2,
    Download,
    FolderOpen,
    Mail,
    Medal,
    Monitor,
    Trophy,
    Wrench,
} from 'lucide-react'

const highlightCards = [
    {
        title: 'Backend',
        description: 'Python • Django • REST API • PostgreSQL',
        icon: Code2,
        cardClass: 'bg-sky-50 border-sky-100',
        iconClass: 'bg-sky-100 text-sky-700',
    },
    {
        title: 'Frontend',
        description: 'React • Tailwind CSS • Bootstrap',
        icon: Monitor,
        cardClass: 'bg-emerald-50 border-emerald-100',
        iconClass: 'bg-emerald-100 text-emerald-700',
    },
    {
        title: 'Tools & DevOps',
        description: 'Docker • Git • Linux',
        icon: Wrench,
        cardClass: 'bg-violet-50 border-violet-100',
        iconClass: 'bg-violet-100 text-violet-700',
    },
    {
        title: 'Problem Solving',
        description: '1500+ Problems Solved • Codeforces Specialist',
        icon: Trophy,
        cardClass: 'bg-amber-50 border-amber-100',
        iconClass: 'bg-amber-100 text-amber-700',
    },
    {
        title: 'Research',
        description: 'AI / Computer Vision • Model Building & Experimentation',
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
        value: 'Codeforces',
        label: 'Specialist',
        icon: Medal,
        cardClass: 'bg-emerald-50 border-emerald-100',
        iconClass: 'bg-emerald-100 text-emerald-700',
    },
    {
        value: '2+',
        label: 'Major Projects',
        icon: FolderOpen,
        cardClass: 'bg-violet-50 border-violet-100',
        iconClass: 'bg-violet-100 text-violet-700',
    },
    {
        value: 'Research',
        label: 'in AI / ML',
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
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-2xl">About</h1>
                    <p className="mt-2.5 max-w-3xl text-[15px] leading-6 text-slate-500 sm:text-base">
                        Backend-focused software engineer passionate about building scalable applications and solving
                        real-world problems.
                    </p>
                    <div className="mt-4 h-px w-full bg-slate-200" />
                </header>

                <div className="mt-6 grid gap-5 lg:grid-cols-[57fr_43fr] lg:gap-6">
                    <div>
                        <div className="space-y-4 text-[15px] leading-6 text-slate-700 sm:text-base">
                            <p>
                                I am a Computer Science and Engineering student and backend-focused software engineer
                                with a strong interest in building scalable web applications and solving real-world
                                problems. My primary stack includes <span className="font-semibold text-sky-700">Python</span>,{' '}
                                <span className="font-semibold text-sky-700">Django</span>,{' '}
                                <span className="font-semibold text-sky-700">PostgreSQL</span>,{' '}
                                <span className="font-semibold text-sky-700">React</span>, and{' '}
                                <span className="font-semibold text-sky-700">Docker</span>.
                            </p>
                            <p>
                                I enjoy developing practical software, improving backend architecture, and solving
                                algorithmic challenges. My competitive programming journey, with{' '}
                                <span className="font-semibold text-sky-700">1500+ solved problems</span> and{' '}
                                <span className="font-semibold text-sky-700">Codeforces Specialist</span>, has
                                strengthened my analytical thinking and problem-solving ability.
                            </p>
                            <p>
                                I have also worked on research in AI and computer vision, which expanded my skills in
                                experimentation, model building, and technical problem solving. I am currently looking
                                for opportunities to grow as a software engineer and contribute to impactful products.
                            </p>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-3">
                            <button
                                type="button"
                                className="inline-flex h-10.5 items-center gap-2 rounded-xl bg-[#162b46] px-5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(22,43,70,0.22)] transition-colors duration-200 hover:bg-[#1d3656]"
                            >
                                <Download size={17} />
                                <span>Download CV</span>
                            </button>

                            <button
                                type="button"
                                className="inline-flex h-10.5 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50"
                            >
                                <Mail size={17} />
                                <span>Contact Me</span>
                            </button>
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
