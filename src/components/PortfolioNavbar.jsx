import portfolioNavItems from './portfolioNavItems'
import { NavLink } from 'react-router-dom'

export default function PortfolioNavbar({ items = portfolioNavItems }) {
    return (
        <div className="sticky top-3 z-20 rounded-2xl border border-slate-200/90 bg-white/90 p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur sm:p-3">
            <nav className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4.5" aria-label="Portfolio section navigation">
                {items.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.to}
                        className={({ isActive }) =>
                            `rounded-full border px-2.5 py-1.5 text-center text-xs font-medium transition-colors duration-200 sm:px-3 sm:text-sm ${
                                isActive
                                    ? 'border-slate-900 bg-slate-900 text-white'
                                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-900 hover:text-white'
                            }`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}