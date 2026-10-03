export default function SectionHeading({ eyebrow, title, description }) {
    return (
        <header className="border-b border-[#e4e7ec] pb-6 sm:pb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#758199]">{eyebrow}</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#18233b] sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5e6a7e] sm:text-[15px]">{description}</p>
        </header>
    )
}
