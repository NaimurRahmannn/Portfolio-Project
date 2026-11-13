import { ExternalLink } from 'lucide-react'
import internshipCertificate from '../../internship_cirtificate.jpg'
import trainingCertificate from '../../training_cirtificate.jpg'
import SectionHeading from '../components/SectionHeading'

const experienceItems = [
    {
        type: 'Work Experience',
        title: 'Software Engineer I',
        organization: 'Wempro',
        team: 'Backend Engineering',
        location: 'Dhaka, Bangladesh',
        period: 'Nov 2026 – Present',
        details: [
            'Building backend microservices for ElementSearch, a distributed search platform, using FastAPI, RabbitMQ for async messaging, PostgreSQL with SQLAlchemy ORM, and Flyway for version-controlled database migrations.',
            'Integrating HashiCorp Vault for centralized secrets management across microservices, ensuring secure credential rotation and environment isolation.',
        ],
    },
    {
        type: 'Work Experience',
        title: 'Software Engineering Intern',
        organization: 'W3 Engineers Ltd.',
        team: 'Presto Agent Orchestration Team',
        location: 'Dhaka, Bangladesh',
        period: 'May 2026 – Aug 2026',
        certificate: internshipCertificate,
        certificateAlt: 'W3 Engineers Ltd. internship certificate',
        details: [
            'Built a trip-planning agent with LangGraph, FastAPI, and Next.js that turns chat conversations into day-by-day itineraries with clarification prompts, streaming, and human approval; prototyped to complement Sonder Concierge’s itinerary-to-stay matching.',
            'Developed a multi-agent webpage editor that routes natural-language changes to HTML, CSS, and SEO specialists, validates browser-rendered output, and applies only QA-approved changes.',
            'Completed an engineering rotation building backend and full-stack projects in Python, Go, Django, FastAPI, React, and Next.js, with code reviews from senior engineers.',
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
            'Completed a 6-month hands-on training in Django, backend development, REST APIs, and database integration.',
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
        <section className="portfolio-panel mx-auto w-full max-w-305 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <SectionHeading
                eyebrow="Career timeline"
                title="Education & Work Experience"
                description="Engineering experience, focused training, and academic foundations."
            />

            <div className="divide-y divide-slate-200">
                {experienceItems.map((item) => (
                    <article key={`${item.type}-${item.organization}-${item.title}`} className="grid gap-4 py-6 first:pt-6 last:pb-1 md:grid-cols-[10rem_1fr] md:gap-8">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.type}</p>
                            <p className="mt-2 text-sm font-medium text-slate-700">{item.period}</p>
                        </div>
                        <div className={item.certificate ? 'grid min-w-0 gap-5 md:grid-cols-[minmax(0,1fr)_7rem] md:items-start' : 'min-w-0'}>
                            <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2.5">
                                    <h3 className="break-words text-lg font-semibold text-[#18233b]">{item.title}</h3>
                                    {item.certificate && (
                                        <a
                                            href={item.certificate}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#18233b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18233b]"
                                            aria-label={`Open ${item.certificateAlt}`}
                                        >
                                            Certificate
                                            <ExternalLink size={12} aria-hidden="true" />
                                        </a>
                                    )}
                                </div>
                                <div className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-slate-600">
                                    <span className="font-medium text-slate-800">{item.organization}</span>
                                    {item.team && (
                                        <>
                                            <span aria-hidden="true">&middot;</span>
                                            <span>{item.team}</span>
                                        </>
                                    )}
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
                                    className="block w-fit rounded-lg border border-slate-200 bg-slate-50 p-2 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18233b]"
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
