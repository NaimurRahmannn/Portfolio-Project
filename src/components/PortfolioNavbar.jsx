import { useEffect, useState } from 'react'
import portfolioNavItems from './portfolioNavItems'

export default function PortfolioNavbar({ items = portfolioNavItems }) {
    const [activeId, setActiveId] = useState(items[0]?.id ?? '')

    useEffect(() => {
        const updateActiveSection = () => {
            let currentId = items[0]?.id ?? ''

            for (const item of items) {
                const section = document.getElementById(item.id)
                if (section && section.getBoundingClientRect().top <= 150) {
                    currentId = item.id
                }
            }

            setActiveId(currentId)
        }

        updateActiveSection()
        window.addEventListener('scroll', updateActiveSection, { passive: true })
        window.addEventListener('resize', updateActiveSection)

        return () => {
            window.removeEventListener('scroll', updateActiveSection)
            window.removeEventListener('resize', updateActiveSection)
        }
    }, [items])

    return (
        <div className="sticky top-0 z-30 bg-[#f8f8f6]/90 px-3 pb-2 pt-3 backdrop-blur-md sm:px-6">
            <nav className="mx-auto flex w-full max-w-360 items-center gap-5 rounded-[22px] border border-white bg-white px-4 py-3 shadow-[0_14px_42px_rgba(20,31,53,0.09)] sm:px-6" aria-label="Portfolio section navigation">
                <a href="#top" className="shrink-0 font-serif text-lg font-semibold italic tracking-tight text-[#18233b] transition-colors hover:text-[#4b5d78] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18233b] sm:text-xl">
                    <span className="sm:hidden">NRL</span>
                    <span className="hidden sm:inline">Naimur Rahman Lam</span>
                </a>
                <ul className="ml-auto flex min-w-0 items-center gap-1 overflow-x-auto sm:gap-2">
                    {items.map((item) => (
                        <li key={item.id} className="shrink-0">
                            <a
                                href={`#${item.id}`}
                                aria-current={activeId === item.id ? 'location' : undefined}
                                onClick={() => setActiveId(item.id)}
                                className={`inline-flex min-h-10 items-center gap-1.5 rounded-xl px-2.5 text-[13px] font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18233b] ${
                                    activeId === item.id
                                        ? 'bg-[#eef1f5] text-[#18233b]'
                                        : 'text-[#5d6980] hover:bg-[#f6f7f9] hover:text-[#18233b]'
                                }`}
                            >
                                <item.icon size={15} strokeWidth={2} aria-hidden="true" />
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
