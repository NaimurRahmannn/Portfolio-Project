import {
    Mail,
    MapPin,
} from 'lucide-react'

export default function PortfolioSidebar({
    profileImage = '/profile.jpg',
    email = 'naimurrahmanlamm@gmail.com',
    location = 'Tangail, Dhaka',
    linkedinUrl = '#',
    githubUrl = '#',
    mediumUrl = '#',
    youtubeUrl = '#',
}) {
    const socialLinks = [
        { label: 'LinkedIn', href: linkedinUrl, logo: '/linkedin-logo.png', logoClass: 'h-6 w-6' },
        { label: 'GitHub', href: githubUrl, logo: '/github-logo.png', logoClass: 'h-7 w-7 invert' },
        { label: 'Medium', href: mediumUrl, logo: '/medium-logo.png', logoClass: 'h-5 w-6 invert' },
        { label: 'YouTube', href: youtubeUrl, logo: '/youtube-logo.png', logoClass: 'h-7 w-8' },
    ]

    return (
        <aside className="w-full max-w-85 border-r border-white/10 bg-[#15263f] px-7 py-10 text-slate-100 shadow-[18px_0_40px_rgba(2,8,23,0.3)] sm:px-8 lg:sticky lg:top-0 lg:h-screen lg:self-start lg:overflow-y-auto">
            <div className="flex min-h-[calc(100vh-5rem)] flex-col pt-10 sm:pt-12">
                <div className="flex flex-col items-center text-center">
                    <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-slate-200/80 p-1 shadow-[0_10px_30px_rgba(2,8,23,0.35)]">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="h-full w-full rounded-full object-cover"
                    />
                </div>

                    <h2 className="mt-4 text-2xl font-semibold tracking-wide">Naimur Rahman Lam</h2>
                    <p className="mt-1 text-sm text-slate-300">Software Engineer</p>

                    <div className="mt-5 grid w-full max-w-52 grid-cols-4 gap-1">
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

                <div id="contact" className="mt-8 space-y-3 border-t border-white/15 pt-6 text-sm text-slate-300">
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
