import portfolioNavItems from './portfolioNavItems'
import { NavLink } from 'react-router-dom'

export default function PortfolioNavbar({ items = portfolioNavItems }) {
    return (
        <div className="sticky top-3 z-20 rounded-2xl border border-slate-200/90 bg-white/90 p-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur">
            <nav className="flex flex-wrap justify-center gap-4.5" aria-label="Portfolio section navigation">
                {items.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.to}
                        className={({ isActive }) =>
                            `rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
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