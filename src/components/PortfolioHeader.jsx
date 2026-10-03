import { ArrowDownRight, Download, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaMedium, FaYoutube } from 'react-icons/fa'

export default function PortfolioHeader({
    profileImage = '/profile.jpg',
    email = 'naimurrahmanlamm@gmail.com',
    location = 'Dhaka, Bangladesh',
    linkedinUrl = 'https://www.linkedin.com/in/niamur-rahman--/',
    githubUrl = 'https://github.com/NaimurRahmannn',
    mediumUrl = 'https://medium.com/@naimurrahmanlamm',
    youtubeUrl = '#',
}) {
    const socialLinks = [
        { label: 'GitHub', href: githubUrl, icon: FaGithub },
        { label: 'LinkedIn', href: linkedinUrl, icon: FaLinkedinIn },
        { label: 'Medium', href: mediumUrl, icon: FaMedium },
        { label: 'YouTube', href: youtubeUrl, icon: FaYoutube },
    ].filter((item) => item.href && item.href !== '#')

    return (
        <header id="top" className="relative isolate overflow-hidden bg-[#f8f8f6] text-[#18233b]">
            <div className="pointer-events-none absolute -right-36 top-8 -z-10 h-120 w-120 rounded-full bg-[#eef0ef] blur-3xl" aria-hidden="true" />
            <div className="mx-auto grid w-full max-w-340 items-center gap-12 px-5 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20 lg:min-h-150 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)] lg:gap-14 lg:px-10 lg:pb-14 lg:pt-24">
                <div className="min-w-0">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#66738a]">
                        <MapPin size={14} aria-hidden="true" />
                        Software Engineer · {location}
                    </p>
                    <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-[#131d36] sm:text-6xl lg:text-[4.65rem] xl:text-[5.25rem]">
                        Hi, I&apos;m Naimur Rahman Lam
                    </h1>
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-[#586780] sm:text-xl sm:leading-9">
                        I build <strong className="font-semibold text-[#283654]">reliable backend systems</strong>, <strong className="font-semibold text-[#283654]">AI agent workflows</strong>, and practical applications that turn complex ideas into useful software.
                    </p>

                    <div className="mt-7 h-px w-20 bg-[#cdd3dc]" aria-hidden="true" />
                    <p className="mt-6 max-w-2xl text-sm leading-7 text-[#586780] sm:text-base">
                        Software Engineering Intern at <strong className="font-semibold text-[#283654]">W3 Engineers</strong> · <strong className="font-semibold text-[#283654]">Codeforces Specialist</strong> · First-author AI/ML research
                    </p>

                    <div id="contact" className="mt-8 flex flex-wrap items-center gap-2.5">
                        {socialLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={item.label}
                                title={item.label}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e8ebef] bg-white text-[#43516d] shadow-[0_8px_24px_rgba(24,35,59,0.06)] transition-colors hover:border-[#cbd3df] hover:text-[#18233b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18233b]"
                            >
                                <item.icon size={19} aria-hidden="true" />
                            </a>
                        ))}
                        <a
                            href={`mailto:${email}`}
                            aria-label="Send email"
                            title="Send email"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e8ebef] bg-white text-[#43516d] shadow-[0_8px_24px_rgba(24,35,59,0.06)] transition-colors hover:border-[#cbd3df] hover:text-[#18233b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18233b]"
                        >
                            <Mail size={19} aria-hidden="true" />
                        </a>
                        <a
                            href="/NaimurRahmanLamCV.pdf"
                            download="NaimurRahmanLamCV.pdf"
                            className="ml-1 inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#cdd3dc] px-4 text-sm font-semibold text-[#283654] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18233b]"
                        >
                            <Download size={16} aria-hidden="true" />
                            Download CV
                        </a>
                    </div>

                    <a href="#about" className="mt-9 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4b5d78] transition-colors hover:text-[#18233b] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18233b]">
                        Explore portfolio <ArrowDownRight size={16} aria-hidden="true" />
                    </a>
                </div>

                <div className="relative mx-auto w-full max-w-76 justify-self-center sm:max-w-88 lg:max-w-96 lg:justify-self-end">
                    <div className="pointer-events-none absolute -inset-4 rounded-full border border-[#d8dde5] sm:-inset-5" aria-hidden="true" />
                    <img
                        src={profileImage}
                        alt="Portrait of Naimur Rahman Lam"
                        className="relative aspect-square w-full rounded-full object-cover shadow-[0_22px_70px_rgba(24,35,59,0.15)]"
                    />
                </div>
            </div>
        </header>
    )
}
