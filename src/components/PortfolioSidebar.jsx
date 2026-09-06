import {
    Mail,
    MapPin,
} from 'lucide-react'

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
        { label: 'LinkedIn', href: linkedinUrl, logo: '/linkedin-logo.png', logoClass: 'h-6 w-6' },
        { label: 'GitHub', href: githubUrl, logo: '/github-logo.png', logoClass: 'h-7 w-7 invert' },
        { label: 'Medium', href: mediumUrl, logo: '/medium-logo.png', logoClass: 'h-5 w-6 invert' },
        { label: 'YouTube', href: youtubeUrl, logo: '/youtube-logo.png', logoClass: 'h-7 w-8' },
    ]

    return (
        <aside className="w-full max-w-none border-b border-white/10 bg-[#15263f] px-4 py-4 text-slate-100 shadow-[0_10px_30px_rgba(2,8,23,0.22)] sm:px-8 sm:py-6 lg:sticky lg:top-0 lg:max-w-85 lg:border-b-0 lg:border-r lg:px-7 lg:py-10 lg:shadow-[18px_0_40px_rgba(2,8,23,0.3)] lg:min-h-screen lg:self-stretch lg:overflow-y-auto">
            <div className="flex min-h-0 flex-col pt-0 sm:pt-2 lg:min-h-[calc(100vh-5rem)] lg:pt-10">
                <div className="flex flex-wrap items-center gap-3 text-left lg:flex-col lg:items-center lg:text-center">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-slate-200/80 p-1 shadow-[0_10px_30px_rgba(2,8,23,0.35)] lg:h-28 lg:w-28">
                    <img
                        src={profileImage}
                        alt="Naimur Rahman Lam"
                        className="h-full w-full rounded-full object-cover"
                    />
                </div>

                    <div className="min-w-0 lg:w-full">
                    <h2 className="text-lg font-semibold tracking-wide sm:text-xl lg:mt-4 lg:text-2xl">Naimur Rahman Lam</h2>
                    <p className="mt-0.5 text-xs text-slate-300 sm:text-sm lg:mt-1">Backend & AI Software Engineer</p>
                    </div>

                    <div className="ml-auto grid w-40 max-w-full grid-cols-4 gap-1 lg:mt-5 lg:ml-0 lg:w-full lg:max-w-52">
                        {socialLinks.map((item) => {
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="group relative inline-flex h-10 w-10 items-center justify-center rounded-md transition-transform duration-200 hover:-translate-y-0.5"
                                    aria-label={item.label}
                                    title={item.label}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                                        {item.label}
                                    </span>
                                    <img
                                        src={item.logo}
                                        alt={item.label}
                                        className={`object-contain transition-opacity duration-200 group-hover:opacity-90 ${item.logoClass ?? ''}`}
                                    />
                                </a>
                            )
                        })}
                    </div>
                </div>

                <div id="contact" className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/15 pt-3 text-xs text-slate-300 sm:text-sm lg:mt-8 lg:block lg:space-y-3 lg:pt-6">
                    <div className="flex items-center gap-3">
                        <Mail size={16} className="text-slate-400" />
                        <a href={`mailto:${email}`} className="truncate transition-colors hover:text-white">
                            {email}
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <MapPin size={16} className="text-slate-400" />
                        <span className="truncate">{location}</span>
                    </div>
                </div>

            </div>
        </aside>
    )
}
