import SectionHeading from '../components/SectionHeading'

const researchItems = [
    {
        title: 'Skip Fusion and Robust Checkpoint Selection for Generalisable Polyp Segmentation under Centre and Sequence Shift',
        context: 'First Author, Submitted to ICEFRONT (IEEE Conference)',
        period: 'March 2026',
        summary: 'This thesis investigates whether architectural changes or deployment-aligned checkpoint selection provides a stronger path to robust polyp segmentation under centre shift and sequence shift. Using the six-centre PolypGen dataset under an EndoCV-style protocol, it evaluates generalisation to unseen-centre single frames, non-C6 positive sequences, and unseen-centre sequences.',
        contributions: [
            'Compared a ConvNeXt-Tiny U-Net with standard concatenation skips, naive cross-attention skip fusion, and a gated cross-attention fusion method with a direct projected skip pathway.',
            'Introduced SeqVal, a sequence validation split, with a constrained selection variant that discourages pathological mask inflation through an area-ratio window.',
            'Found that naive cross-attention fusion was brittle, while the gated variant was stable but did not consistently outperform the strong concatenation baseline on Dice.',
            'Showed that M2b with SeqVal-constrained selection improved data4 F2 from 0.710 to 0.758 across three random seeds while maintaining comparable Dice and avoiding extreme mask inflation.',
            'Confirmed through cross-dataset evaluation on Kvasir-SEG without retraining that the preferred selection strategy depends on the deployment condition.',
        ],
    },
]

export default function ResearchExperiencePage() {
    return (
        <section className="portfolio-panel mx-auto w-full max-w-305 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <SectionHeading
                eyebrow="Research"
                title="Research Experience"
                description="Research contributions in machine learning and robust computer vision."
            />

            <div className="divide-y divide-slate-200">
                {researchItems.map((item) => (
                    <article key={item.title} className="py-6 last:pb-1">
                        <p className="text-sm font-medium text-slate-500">{item.period}</p>
                        <h3 className="mt-2 break-words text-lg font-semibold leading-7 text-slate-900">{item.title}</h3>
                        <p className="mt-1 text-sm italic text-slate-600">{item.context}</p>
                        <p className="mt-4 text-sm leading-6 text-slate-600">{item.summary}</p>
                        <h4 className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Research Contributions & Findings</h4>
                        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                            {item.contributions.map((contribution) => (
                                <li key={contribution} className="flex gap-2">
                                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a9b4c4]" aria-hidden="true" />
                                    <span>{contribution}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}
