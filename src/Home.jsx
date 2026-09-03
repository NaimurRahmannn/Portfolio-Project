import PortfolioSidebar from './components/PortfolioSidebar'
import PortfolioNavbar from './components/PortfolioNavbar'
import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[#f3f6fb] lg:grid lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
            <PortfolioSidebar />

            <main className="min-w-0 px-4 pb-10 pt-5 sm:px-6 sm:pt-7 lg:px-8 lg:pt-8">
                <PortfolioNavbar />

                <div className="mt-5">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}