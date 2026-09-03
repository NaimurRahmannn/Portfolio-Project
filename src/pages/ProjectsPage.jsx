import { BookMarked } from 'lucide-react'
import { useState } from 'react'

const projects = [
    {
        category: 'AI Engineering Projects',
        name: 'TravelAI-Agent-v2-LangGraph',
        href: 'https://github.com/NaimurRahmannn/TravelAI-Agent-v2-LangGraph',
        technologies: ['Python', 'LangChain', 'LangGraph', 'FastAPI', 'Mem0', 'Qdrant', 'LangSmith', 'TypeScript', 'Next.js'],
        demoUrl: 'https://travel-ai-agent-v2-lang-graph.vercel.app/',
        description: 'Built an autonomous AI travel planning workspace that transforms conversational travel requests into structured, personalized itineraries using LangGraph-based agent workflows. The system performs multi-step reasoning, gathers travel context from external providers, remembers traveler preferences, and generates complete day-by-day trip plans with budget insights, recommendations, maps, weather, and travel logistics.',
        highlights: [
            'Implemented structured trip extraction for destinations, dates, budget, travelers, and preferences.',
            'Built parallel research workflows for climate, currency, and visa information.',
            'Integrated Geoapify, OpenWeather, Pexels, Swoop, LiteAPI / Nuitee Connect, and Frankfurter API.',
            'Added persistent traveler memory using Mem0 with Qdrant-backed vector storage.',
            'Implemented LangGraph checkpoint-based conversation persistence using SQLite state storage.',
            'Developed human-in-the-loop approval flows for sensitive travel actions.',
            'Created structured itineraries with maps, activity cards, budgets, recommendations, and cost calculations.',
            'Built a full-stack application with FastAPI backend and Next.js frontend.',
        ],
    },
    {
        category: 'AI Engineering Projects',
        name: 'Archittecture-vs-Data-Harmonization-for-generalisable-Polyp-Segmentation',
        href: 'https://github.com/NaimurRahmannn/Archittecture-vs-Data-Harmonization-for-generalisable-Polyp-Segmentation',
        description: 'Codebase for a research-based project on robust polyp segmentation under centre shift and sequence shift.\n\nPrimary question: Does model architecture (especially cross-attention skip fusion) improve out-of-distribution generalisation more than data harmonization-oriented selection strategies such as SeqVal?',
        language: '',
        technologies: ['Python','PyTorch','Kvasir-SEG dataset', 'EndoCV dataset'],
    },
    {
        category: 'AI Engineering Projects',
        name: 'Multi-Agent-Orchestrator',
        href: 'https://github.com/NaimurRahmannn/Multi-Agent-Orchestrator',
        description: 'AgentOrchestra is a local multi-agent webpage editor for the committed static sample site. It routes natural-language requests to HTML, CSS, and SEO specialists, validates staged changes with a tool-free QA agent, and promotes only accepted work.',
        highlights: [
            'Manager routing with measurable assignments and acceptance criteria.',
            'HTML, CSS, and SEO ownership boundaries plus read-only SEO diagnosis.',
            'Workspace-bound reads and exact patches against an isolated staged copy.',
            'Applied/rejected patch evidence, deterministic diffs, and site-tree digests.',
            'Lighthouse SEO-only evidence for SEO work.',
            'Tool-free QA with criterion-level accept/reject evidence.',
            'CrewAI Flow transitions, transactional promotion, verified rollback, and reset.',
            'Playwright Before and proposed/accepted screenshots at one desktop viewport.',
            'Streamlit routing, timeline, evidence, metrics, and outcome views.',
        ],
        language: '',
        technologies: ['Python','CrewAI','Streamlite','Playwright','Lighthouse'],
    },
    {
        category: 'AI Engineering Projects',
        name: 'OpenSteward-MCP-Server',
        href: 'https://github.com/NaimurRahmannn/OpenSteward-MCP-Server',
        description: 'OpenSteward is a read-only MCP server that gives open-source maintainers explainable pull-request intelligence — combining PR readiness, policy checks, related historical work, and review-cost scoring into one structured brief, without issuing a merge/reject verdict. It authenticates as a GitHub App, is deterministic by default (no LLM required), and optionally uses local embeddings plus a Groq reranker for better historical-search relevance. Built on FastAPI/FastMCP over Streamable HTTP, it is designed to plug into MCP clients and agents like Google Antigravity or the OpenAI Agents SDK',
        language: '',
        technologies: ['Python','FastAPI','MCP SDK(mcp[cli])/FastMCP','fastembed','MCP Inspector'],
    },
    {
        category: 'AI Engineering Projects',
        name: 'foundry-AI-Agent-CrewAI-',
        href: 'https://github.com/NaimurRahmannn/foundry-AI-Agent-CrewAI-',
        description: 'A classic Python/YAML CrewAI project for generating product requirements, technical architecture, draft plans, quality reviews, and final product plans.',
        language: '',
        technologies: ['Python','CrewAI','Groq'],
    },
    {
        category: 'AI Engineering Projects',
        name: 'AI-Agent-Webpage-editor',
        href: 'https://github.com/NaimurRahmannn/AI-Agent-Webpage-editor',
        description: 'A conversational CLI editing agent built with CrewAI, Python, Pydantic, Groq, deterministic HTML/CSS syntax validation (html5lib & tinycss2), patch preview mode, safe undo, interactive clarification, and an embedded read-only Gemini CLI patch reviewer.',
        language: '',
        technologies: ['Python','CrewAI','Gemini CLI','Groq','Pydantic','html5lib','tinycss2'],
    },
]

const projectSections = ['AI Engineering Projects', 'Backend Projects', 'Frontend Projects']

export default function ProjectsPage() {
    const [expandedProject, setExpandedProject] = useState(null)

    return (
        <section className="mx-auto w-full max-w-305 overflow-hidden rounded-[20px] border border-slate-300 bg-white shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
            <header className="border-b border-slate-200 bg-slate-50/80 px-5 py-6 sm:px-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <BookMarked size={16} />
                            <span>naimurrahmanlam / repositories</span>
                        </div>
                        <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">Projects</h1>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                            Selected repositories and experiments across backend, AI engineering, and frontend development.
                        </p>
                </div>
                </div>
            </header>

            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 px-5 pt-4 sm:px-8">
                <button type="button" className="border-b-2 border-orange-500 px-2 pb-3 text-sm font-semibold text-slate-900">
                    Overview
                </button>
                <button type="button" className="px-2 pb-3 text-sm text-slate-500 transition-colors hover:text-slate-900">
                    Repositories <span className="ml-1 rounded-full bg-slate-100 px-1.5 py-0.5 text-xs">{projects.length}</span>
                </button>
            </div>

            <div className="px-5 py-5 sm:px-8">
                {projectSections.map((section) => {
                    const sectionProjects = projects.filter((project) => project.category === section)

                    if (sectionProjects.length === 0 && section !== 'Backend Projects') return null

                    return (
                        <section key={section} className="mt-6 first:mt-5" aria-labelledby={section}>
                            <div className="mb-3 flex items-center gap-3">
                                <h2 id={section} className="text-lg font-semibold text-slate-900">{section}</h2>
                                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{sectionProjects.length}</span>
                            </div>
                            <div className="grid gap-3 lg:grid-cols-2">
                                {sectionProjects.map((project) => (
                                    <article
                                        key={project.name}
                                        role="link"
                                        tabIndex={project.href ? 0 : undefined}
                                        onClick={() => project.href && window.open(project.href, '_blank', 'noopener,noreferrer')}
                                        onKeyDown={(event) => {
                                            if (project.href && (event.key === 'Enter' || event.key === ' ')) {
                                                event.preventDefault()
                                                window.open(project.href, '_blank', 'noopener,noreferrer')
                                            }
                                        }}
                                        className="block cursor-pointer rounded-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                                    >
                                        <div className="h-full rounded-md border border-slate-300 p-5 transition-colors hover:border-slate-500">
                                        <div className="flex items-start justify-between gap-3">
                                            <span className="break-all text-base font-semibold text-sky-700 group-hover:underline">{project.name}</span>
                                                {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="shrink-0 rounded-md bg-emerald-600 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-emerald-700">Live demo</a>}
                                        </div>
                                        {project.description && <p className="mt-2 min-h-12 whitespace-pre-line text-sm leading-5 text-slate-600">{project.description}</p>}
                                        {project.highlights && (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={(event) => {
                                                        event.stopPropagation()
                                                        setExpandedProject(expandedProject === project.name ? null : project.name)
                                                    }}
                                                    className="mt-3 text-sm font-semibold text-sky-700 hover:underline"
                                                >
                                                    {expandedProject === project.name ? 'Show less' : 'Show more'}
                                                </button>
                                                {expandedProject === project.name && (
                                                    <div className="mt-4 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-600">
                                                        <h3 className="mt-4 font-semibold text-slate-900">The Applications</h3>
                                                        <ul className="mt-2 list-disc space-y-1 pl-5">
                                                            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                                                        </ul>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                                            {project.language && <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-yellow-400" />{project.language}</span>}
                                        </div>
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {(project.technologies || project.topics || []).map((topic) => <span key={topic} className="rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-medium text-sky-700">{topic}</span>)}
                                        </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                            {sectionProjects.length === 0 && <p className="rounded-md border border-dashed border-slate-300 px-5 py-6 text-sm text-slate-500">Backend projects will appear here.</p>}
                        </section>
                    )
                })}

            </div>
        </section>
    )
}
