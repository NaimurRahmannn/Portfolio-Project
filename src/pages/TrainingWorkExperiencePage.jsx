import internshipCertificate from '../../internship_cirtificate.jpg'
import trainingCertificate from '../../training_cirtificate.jpg'

const experienceItems = [
    {
        type: 'Work Experience',
        title: 'Software Engineering Intern',
        organization: 'W3 Engineers Ltd.',
        location: 'Dhaka, Bangladesh',
        period: 'May 2026 - August 2026',
        certificate: internshipCertificate,
        certificateAlt: 'W3 Engineers Ltd. internship certificate',
        details: [
            'Built backend systems, full-stack applications, automated test suites, and web scrapers across Python, Django, Go, Beego, React, and Next.js through a project-based engineering rotation covering the full production stack.',
            'Developed LLM-powered applications and AI agents, including prompt engineering and AI-assisted development workflows, applying software engineering best practices with Docker, version control, and testing.',
            'Worked with the Presto team on agent orchestration frameworks and AI agent infrastructure in an Agile development environment.',
        ],
    },
    {
        type: 'Training',
        title: '(Django) Web Development Training',
        organization: 'Bangladesh Computer Council (EDGE)',
        location: 'Bangladesh',
        period: 'March 2025 - Sep 2025',
        certificate: trainingCertificate,
        certificateAlt: 'Bangladesh Computer Council web development training certificate',
        details: [
            'Completed a 3-month, 80-hour hands-on training in Django, backend development, REST APIs, and database integration.',
        ],
    },
    {
        type: 'Education',
        title: 'B.Sc. in Computer Science and Engineering',
        organization: 'Mawlana Bhashani Science and Technology University',
        location: 'Tangail, Bangladesh',
        period: 'March 2022 - 2026',
        details: ['GPA: 3.29/4.00'],
    },
]

export default function TrainingWorkExperiencePage() {
    return (
        <section className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)] sm:p-6">
            <div className="border-b border-slate-200 pb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Career timeline</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Education & Work Experience</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    A record of engineering experience, focused training, and academic foundations.
                </p>
            </div>

            <div className="divide-y divide-slate-200">
                {experienceItems.map((item) => (
                    <article key={`${item.type}-${item.title}`} className="grid gap-4 py-6 first:pt-6 last:pb-1 md:grid-cols-[10rem_1fr] md:gap-8">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.type}</p>
                            <p className="mt-2 text-sm font-medium text-slate-700">{item.period}</p>
                        </div>
                        <div className={item.certificate ? 'grid gap-5 md:grid-cols-[minmax(0,1fr)_7rem] md:items-start' : ''}>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                                <div className="mt-1 flex flex-wrap gap-x-2 text-sm text-slate-600">
                                    <span>{item.organization}</span>
                                    <span aria-hidden="true">&middot;</span>
                                    <span>{item.location}</span>
                                </div>
                                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                                    {item.details.map((detail) => (
                                        <li key={detail} className="flex gap-2">
                                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {item.certificate && (
                                <a
                                    href={item.certificate}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block w-fit rounded-lg border border-slate-200 bg-slate-50 p-2 transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                                    aria-label={`Open ${item.certificateAlt}`}
                                >
                                    <img
                                        src={item.certificate}
                                        alt={item.certificateAlt}
                                        className="h-32 w-24 object-contain"
                                    />
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
