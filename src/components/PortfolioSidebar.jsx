import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

export default function PortfolioSidebar({
    profileImage = '/profile.jpg',
    email = 'naimurrahmanlamm@gmail.com',
    location = 'Dhaka, Bangladesh',
    linkedinUrl = 'https://www.linkedin.com/in/niamur-rahman--/',
    githubUrl = 'https://github.com/NaimurRahmannn',
    mediumUrl = 'https://medium.com/@naimurrahmanlamm',
    youtubeUrl = '#',
}) {
    const socialLinks = [
        { label: 'LinkedIn', href: linkedinUrl },
        { label: 'GitHub', href: githubUrl },
        { label: 'Medium', href: mediumUrl },
        { label: 'YouTube', href: youtubeUrl },
    ].filter((item) => item.href && item.href !== '#')

    return (
        <aside className="w-full bg-[#162b46] px-5 py-6 text-slate-100 sm:px-8 lg:sticky lg:top-0 lg:h-screen lg:self-start lg:overflow-y-auto lg:px-9 lg:py-11">
            <div className="mx-auto flex w-full max-w-2xl flex-col lg:min-h-full">
                <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Portfolio</p>

                    <div className="mt-5 flex items-center gap-4 lg:block">
                        <img
                            src={profileImage}
                            alt="Naimur Rahman Lam"
                            className="h-20 w-20 shrink-0 rounded-md border border-white/20 object-cover sm:h-24 sm:w-24 lg:h-36 lg:w-36"
                        />
                        <div className="min-w-0 lg:mt-6">
                            <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                                Naimur Rahman Lam
                            </h2>
                            <p className="mt-2 text-sm font-medium tracking-wide text-slate-300">Software Engineer</p>
                        </div>
                    </div>

                    <p className="mt-7 hidden max-w-60 border-l-2 border-slate-400/70 pl-4 text-sm leading-6 text-slate-300 lg:block">
                        Building reliable backend systems and practical AI applications.
                    </p>
                </div>

                <div className="mt-7 grid gap-6 border-t border-white/20 pt-6 sm:grid-cols-2 lg:mt-auto lg:block lg:space-y-8 lg:pt-8">
                    <section id="contact" aria-labelledby="sidebar-contact-heading">
                        <h3 id="sidebar-contact-heading" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                            Contact
                        </h3>
                        <div className="mt-3 space-y-3 text-sm">
                            <a
                                href={`mailto:${email}`}
                                className="flex items-start gap-3 break-all text-slate-100 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <Mail size={16} className="mt-0.5 shrink-0 text-slate-300" aria-hidden="true" />
                                {email}
                            </a>
                            <p className="flex items-start gap-3 text-slate-300">
                                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                                {location}
                            </p>
                        </div>
                    </section>

                    {socialLinks.length > 0 && (
                        <nav aria-label="Social profiles">
                            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">Elsewhere</h3>
                            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 lg:block lg:border-t lg:border-white/15">
                                {socialLinks.map((item) => (
                                    <li key={item.label} className="lg:border-b lg:border-white/15">
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1.5 py-1 text-sm font-medium text-slate-100 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:flex lg:justify-between lg:py-2.5"
                                        >
                                            {item.label}
                                            <ArrowUpRight size={15} className="text-slate-300" aria-hidden="true" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </aside>
    )
}
