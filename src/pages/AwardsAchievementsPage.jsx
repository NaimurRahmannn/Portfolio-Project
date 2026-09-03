const competitiveProgramming = [
    {
        title: 'Codeforces',
        href: 'https://codeforces.com/profile/ok_computer?mobile=true',
        achievement: 'Specialist',
        detail: 'Maximum rating: 1517',
    },
    {
        title: 'LeetCode',
        href: 'https://leetcode.com/u/Niamur_Rahmann/',
        achievement: 'Top 5.3%',
        detail: 'Maximum rating: 1867',
    },
    {
        title: 'CodeChef',
        href: 'https://www.codechef.com/users/naimurrahmannn/',
        achievement: 'Competitive Programmer',
        detail: 'Maximum rating: 1715',
    },
    {
        title: 'Meta Hacker Cup',
        href: 'https://www.facebook.com/codingcompetitions/hacker-cup/2025/certificate/1142646591151040',
        achievement: 'Qualified for Round 2',
        detail: 'Advanced to the second round of Meta’s global programming competition',
    },
    {
        title: 'Breaking Code 2.0, MBSTU',
        href: 'https://toph.co/c/mbstu-cse-idpc-2026/standings',
        achievement: 'Rank 10th',
        detail: 'Team: Fat Old Sun',
    },
]

const hackathons = [
    {
        title: 'LU Inter University National Hackathon',
        achievement: 'Honourable Mention',
        detail: 'Team: Ryuk and the Apple',
    },
    {
        title: 'SUST Codex Community Hackathon',
        achievement: 'Participant',
        detail: 'Preliminary Contest',
    },
]

const datathons = [
    {
        title: 'HerWILL: AI for Digital Safety Datathon 2026',
        achievement: 'Rank 75th',
        detail: 'Participant: Naimur Rahman',
    },
]

function AchievementSection({ title, description, items }) {
    return (
        <section className="mt-9" aria-labelledby={`${title.toLowerCase().replaceAll(' ', '-')}-title`}>
            <div className="flex items-end gap-4">
                <h2
                    id={`${title.toLowerCase().replaceAll(' ', '-')}-title`}
                    className="shrink-0 text-lg font-semibold uppercase tracking-[0.08em] text-slate-900"
                >
                    {title}
                </h2>
                <div className="mb-1.5 h-px flex-1 bg-slate-400" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-sm text-slate-500">{description}</p>

            <div className="mt-3">
                {items.map((item) => (
                    <article
                        key={item.title}
                        className="grid min-w-0 gap-x-6 gap-y-1 border-b border-slate-100 py-3 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,12rem)]"
                    >
                        <div>
                            {item.href ? (
                                <h3 className="text-[15px] font-bold leading-5">
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sky-700 transition-colors hover:text-sky-900"
                                    >
                                        {item.title}
                                    </a>
                                </h3>
                            ) : (
                                <h3 className="text-[15px] font-bold leading-5 text-slate-900">{item.title}</h3>
                            )}
                            <p className="mt-1 text-sm leading-5 text-slate-600">{item.detail}</p>
                        </div>
                        <p className="wrap-break-word text-sm font-semibold text-sky-700 sm:text-right">{item.achievement}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default function AwardsAchievementsPage() {
    return (
        <section className="mx-auto w-full max-w-305 bg-white px-6 py-7 shadow-[0_10px_30px_rgba(15,23,42,0.07)] sm:px-9 lg:px-11 lg:py-9">
            <header>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Awards & Achievements</h1>
                <p className="mt-2 max-w-3xl text-[15px] leading-6 text-slate-600">
                    Recognition earned through competitive programming, hackathons, and data-focused competitions.
                </p>
                <div className="mt-4 h-px bg-slate-900" aria-hidden="true" />
            </header>

            <AchievementSection
                title="Competitive Programming"
                description="Ratings, qualifications, and onsite and online contest rankings."
                items={competitiveProgramming}
            />

            <p className="mt-4 border-l-3 border-sky-600 pl-4 text-sm font-medium leading-6 text-slate-700">
                Solved 1500+ problems and participated in 200+ online contests across Codeforces, CodeChef, UVA,
                Vjudge, and SPOJ.
            </p>

            <AchievementSection
                title="Hackathon"
                description="Recognition from team-based product and innovation events."
                items={hackathons}
            />

            <AchievementSection
                title="Datathon"
                description="Recognition from data and AI-focused competitions."
                items={datathons}
            />
        </section>
    )
}
