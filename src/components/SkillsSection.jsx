import {
    Code2,
    Lightbulb,
    Monitor,
    Puzzle,
    Trophy,
} from 'lucide-react'
import pythonLogo from '../../python-logo-only.png'
import djangoLogo from '../../django-logo-png_seeklogo-394570.png'
import postgresqlLogo from '../../PostgreSQL_logo.3colors.120x120.png'
import dockerLogo from '../../docker-mark-ocean-blue.png'
import pytorchLogo from '../../pytorch.png'
import reactLogo from '../assets/react.svg'

const statsCards = [
    {
        value: '10+',
        label: 'Technologies',
        icon: Code2,
        cardClass: 'border-sky-100 bg-sky-50',
        iconClass: 'bg-sky-100 text-sky-700',
        valueClass: 'text-sky-700',
        valueSize: 'text-2xl',
    },
    {
        value: '1500+',
        label: 'Problems Solved',
        icon: Puzzle,
        cardClass: 'border-emerald-100 bg-emerald-50',
        iconClass: 'bg-emerald-100 text-emerald-700',
        valueClass: 'text-emerald-700',
        valueSize: 'text-2xl',
    },
    {
        value: '5+',
        label: 'Major Domains',
        icon: Monitor,
        cardClass: 'border-violet-100 bg-violet-50',
        iconClass: 'bg-violet-100 text-violet-700',
        valueClass: 'text-violet-700',
        valueSize: 'text-2xl',
    },
    {
        value: 'Specialist',
        label: 'Codeforces Rating',
        icon: Trophy,
        cardClass: 'border-amber-100 bg-amber-50',
        iconClass: 'bg-amber-100 text-amber-700',
        valueClass: 'text-amber-700',
        valueSize: 'text-xl',
    },
]

const technicalSkills = [
    {
        title: 'Programming Languages',
        description: 'C/C++, Python, JavaScript, SQL',
        proficiency: 'Advanced',
        logo: pythonLogo,
        logoAlt: 'Python logo',
        cardClass: 'border-sky-100 bg-sky-50/70',
        iconClass: 'bg-sky-100 text-sky-700',
        badgeClass: 'bg-sky-100 text-sky-700',
        trackClass: 'bg-sky-100',
        fillClass: 'bg-sky-500',
        progressClass: 'w-11/12',
    },
    {
        title: 'Backend Development',
        description: 'Django, REST APIs, Authentication',
        proficiency: 'Intermediate',
        logo: djangoLogo,
        logoAlt: 'Django logo',
        cardClass: 'border-emerald-100 bg-emerald-50/70',
        iconClass: 'bg-emerald-100 text-emerald-700',
        badgeClass: 'bg-emerald-100 text-emerald-700',
        trackClass: 'bg-emerald-100',
        fillClass: 'bg-emerald-500',
        progressClass: 'w-9/12',
    },
    {
        title: 'Database',
        description: 'PostgreSQL, MySQL',
        proficiency: 'Intermediate',
        logo: postgresqlLogo,
        logoAlt: 'PostgreSQL logo',
        cardClass: 'border-violet-100 bg-violet-50/70',
        iconClass: 'bg-violet-100 text-violet-700',
        badgeClass: 'bg-violet-100 text-violet-700',
        trackClass: 'bg-violet-100',
        fillClass: 'bg-violet-500',
        progressClass: 'w-9/12',
    },
    {
        title: 'Frontend Development',
        description: 'React, Tailwind CSS, Bootstrap',
        proficiency: 'Intermediate',
        logo: reactLogo,
        logoAlt: 'React logo',
        cardClass: 'border-indigo-100 bg-indigo-50/70',
        iconClass: 'bg-indigo-100 text-indigo-700',
        badgeClass: 'bg-indigo-100 text-indigo-700',
        trackClass: 'bg-indigo-100',
        fillClass: 'bg-indigo-500',
        progressClass: 'w-9/12',
    },
    {
        title: 'DevOps & Tools',
        description: 'Docker, Linux, Git, GitHub Workflow',
        proficiency: 'Intermediate',
        logo: dockerLogo,
        logoAlt: 'Docker logo',
        cardClass: 'border-orange-100 bg-orange-50/70',
        iconClass: 'bg-orange-100 text-orange-700',
        badgeClass: 'bg-orange-100 text-orange-700',
        trackClass: 'bg-orange-100',
        fillClass: 'bg-orange-500',
        progressClass: 'w-8/12',
    },
    {
        title: 'Machine Learning & AI',
        description: 'PyTorch, Scikit-learn, OpenCV, NumPy, Pandas',
        proficiency: 'Intermediate',
        logo: pytorchLogo,
        logoAlt: 'PyTorch logo',
        cardClass: 'border-rose-100 bg-rose-50/70',
        iconClass: 'bg-rose-100 text-rose-700',
        badgeClass: 'bg-rose-100 text-rose-700',
        trackClass: 'bg-rose-100',
        fillClass: 'bg-rose-500',
        progressClass: 'w-7/12',
    },
]

const otherSkills = [
    'Problem Solving',
    'Data Structures & Algorithms',
    'REST API Design',
    'Linux Command Line',
    'Git & GitHub',
    'LaTeX',
    'Competitive Programming',
    'System Programming (C)',
    'Computer Vision',
    'Research & Experimentation',
    'Technical Writing',
]

export default function SkillsSection() {
    return (
        <section className="mx-auto w-full max-w-305">
            <article className="rounded-[28px] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_14px_36px_rgba(15,23,42,0.08)] sm:px-8 sm:py-7 lg:px-9 lg:py-8">
                <header>
                    <div className="flex items-start gap-3">
                        <div className="mt-1 h-14 w-1 rounded-full bg-sky-500" aria-hidden="true" />
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-2xl">Skills</h1>
                            <p className="mt-2.5 max-w-3xl text-[15px] leading-6 text-slate-500 sm:text-base">
                                My tech stack and core competencies that help me build and solve.
                            </p>
                        </div>
                    </div>
                </header>

                <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Skills statistics">
                    {statsCards.map((item) => {
                        const Icon = item.icon

                        return (
                            <article key={item.label} className={`rounded-2xl border px-4 py-4 ${item.cardClass}`}>
                                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconClass}`}>
                                    <Icon size={18} />
                                </div>
                                <p className={`mt-3 font-bold ${item.valueClass} ${item.valueSize}`}>{item.value}</p>
                                <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                            </article>
                        )
                    })}
                </section>

                <section className="mt-7" aria-label="Technical skills">
                    <h2 className="text-xl font-bold text-slate-900">Technical Skills</h2>
                    <p className="mt-1 text-sm text-slate-500">Core technologies I work with</p>

                    <div className="mt-4 grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {technicalSkills.map((skill) => {
                            const Icon = skill.icon

                            return (
                                <article key={skill.title} className={`rounded-2xl border px-4 py-4 ${skill.cardClass}`}>
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-start gap-3">
                                            <div
                                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${skill.iconClass}`}
                                            >
                                                {skill.logo ? (
                                                    <img
                                                        src={skill.logo}
                                                        alt={skill.logoAlt}
                                                        className="h-6 w-6 object-contain"
                                                    />
                                                ) : (
                                                    <Icon size={18} />
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="text-[15px] font-bold text-slate-900">{skill.title}</h3>
                                                <p className="mt-1 text-[13px] leading-5 text-slate-600">
                                                    {skill.description}
                                                </p>
                                            </div>
                                        </div>
                                        <span
                                            className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${skill.badgeClass}`}
                                        >
                                            {skill.proficiency}
                                        </span>
                                    </div>

                                    <div className={`mt-4 h-2 w-full rounded-full ${skill.trackClass}`}>
                                        <div
                                            className={`h-2 rounded-full ${skill.fillClass} ${skill.progressClass}`}
                                            aria-hidden="true"
                                        />
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </section>

                <section className="mt-7" aria-label="Other skills and proficiency">
                    <h2 className="text-xl font-bold text-slate-900">Other Skills & Proficiency</h2>

                    <div className="mt-3 flex flex-wrap gap-2.5">
                        {otherSkills.map((skill) => (
                            <span
                                key={skill}
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700"
                            >
                                <span className="h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3.5 sm:px-5 sm:py-4">
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                            <Lightbulb size={17} />
                        </div>
                        <p className="text-[14px] leading-6 text-slate-700 sm:text-[15px]">
                            I enjoy turning complex problems into simple, efficient solutions and constantly learning
                            new technologies to improve my skills.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
}
