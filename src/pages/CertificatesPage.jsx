import { Award, ExternalLink } from 'lucide-react'

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
        <section className="mx-auto w-full max-w-305 rounded-[28px] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_14px_36px_rgba(15,23,42,0.08)] sm:px-8 sm:py-7 lg:px-9 lg:py-8">
            <header className="border-b border-slate-200 pb-5">
                <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                        <Award size={21} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Certificates</h1>
                        <p className="mt-1.5 text-sm leading-6 text-slate-600">Professional certifications and completed courses from my learning journey.</p>
                    </div>
                </div>
            </header>

            <div className="divide-y divide-slate-200">
                {certificates.map((certificate) => (
                    <article key={certificate.title} className="min-w-0 py-6 first:pb-6 last:pb-1">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h2 className="break-words text-lg font-semibold text-slate-900">{certificate.title}</h2>
                                <p className="mt-1 text-sm font-medium text-slate-500">
                                    {certificate.period}
                                    {certificate.status && <span className="ml-2 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">{certificate.status}</span>}
                                </p>
                            </div>
                            <a href={certificate.certificateUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-sky-700 hover:underline">
                                Certificate <ExternalLink size={14} />
                            </a>
                        </div>

                        <div className="mt-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Completed</p>
                            <div className="mt-2 flex flex-col gap-2">
                                {certificate.completed.map(([course, url]) => (
                                    <a key={course} href={url} target="_blank" rel="noreferrer" className="flex items-start gap-2 text-sm leading-5 text-slate-600 hover:text-sky-700 hover:underline">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
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
