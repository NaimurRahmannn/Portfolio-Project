import { FlaskConical } from 'lucide-react'

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
        <section className="mx-auto w-full max-w-305 rounded-[28px] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_14px_36px_rgba(15,23,42,0.08)] sm:px-8 sm:py-7 lg:px-9 lg:py-8">
            <header className="border-b border-slate-200 pb-5">
                <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                        <FlaskConical size={21} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Research Experience</h1>
                        <p className="mt-1.5 text-sm leading-6 text-slate-600">Research contributions in machine learning and robust computer vision.</p>
                    </div>
                </div>
            </header>

            <div className="divide-y divide-slate-200">
                {researchItems.map((item) => (
                    <article key={item.title} className="py-6 last:pb-1">
                        <p className="text-sm font-medium text-slate-500">{item.period}</p>
                        <h2 className="mt-2 text-lg font-semibold leading-7 text-slate-900">{item.title}</h2>
                        <p className="mt-1 text-sm italic text-slate-600">{item.context}</p>
                        <p className="mt-4 text-sm leading-6 text-slate-600">{item.summary}</p>
                        <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Research Contributions & Findings</h3>
                        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                            {item.contributions.map((contribution) => (
                                <li key={contribution} className="flex gap-2">
                                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" aria-hidden="true" />
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
