import { ExternalLink } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const certificates = [
    {
        title: 'Machine Learning Specialization by Stanford University (Coursera)',
        period: '2025',
        certificateUrl: 'https://coursera.org/share/88c8dbf7c887a74bbd71519df65cd53f',
        completed: [
            ['Supervised Machine Learning: Regression and Classification', 'https://coursera.org/share/428dfb9a91fae69b42695c2ee55f5057'],
            ['Advanced Learning Algorithms', 'https://coursera.org/share/c6623fadba3d4a5e76ef3a40b39ee35e'],
            ['Unsupervised Learning, Recommenders, Reinforcement Learning', 'https://coursera.org/share/33bd6d30afdc79c21d54355c1df18335'],
        ],
    },
    {
        title: 'DevOps Mastery Specialization on KodeCloud (Coursera)',
        period: '2026',
        status: 'Ongoing',
        completed: [
            ['DevOps Prerequisite Course', 'https://www.coursera.org/account/accomplishments/verify/057UA9O5G000'],
            ['Git Basics for DevOps', 'https://www.coursera.org/account/accomplishments/verify/RT3O5Q50GYQM'],
            ['Docker Basics for DevOps', 'https://coursera.org/share/90fa9a0c63c3526319f96242dd03796b'],
            ['Jenkins for Beginners', 'https://coursera.org/share/d0dfcda65c945823c807dfc799e35fc5'],
            ['Kubernetes Basics for DevOps', 'https://coursera.org/share/abe1fd00642d7f46d12b76a28cc73e25'],
        ],
    },
]

export default function CertificatesPage() {
    return (
        <section className="portfolio-panel mx-auto w-full max-w-305 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <SectionHeading
                eyebrow="Continuing education"
                title="Certificates"
                description="Professional certifications and completed courses from my learning journey."
            />

            <div className="divide-y divide-slate-200">
                {certificates.map((certificate) => (
                    <article key={certificate.title} className="min-w-0 py-6 first:pb-6 last:pb-1">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h3 className="break-words text-lg font-semibold text-slate-900">{certificate.title}</h3>
                                <p className="mt-1 text-sm font-medium text-slate-500">
                                    {certificate.period}
                                    {certificate.status && <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-[#66738a]">{certificate.status}</span>}
                                </p>
                            </div>
                            {certificate.certificateUrl && (
                                <a href={certificate.certificateUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#283654] hover:underline">
                                    View certificate <ExternalLink size={14} aria-hidden="true" />
                                </a>
                            )}
                        </div>

                        <div className="mt-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Completed</p>
                            <div className="mt-2 flex flex-col gap-2">
                                {certificate.completed.map(([course, url]) => (
                                    <a key={course} href={url} target="_blank" rel="noreferrer" className="flex items-start gap-2 text-sm leading-5 text-slate-600 hover:text-[#283654] hover:underline">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a9b4c4]" aria-hidden="true" />
                                        <span>{course}</span>
                                        <ExternalLink size={13} className="mt-1 shrink-0" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
