import { ChevronDown, ExternalLink } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

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
        demoUrl: 'https://huggingface.co/spaces/NaimurRahmann/polyp_segmentation_m2b_model',
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
        name: 'sales-insight-agent',
        href: 'https://github.com/NaimurRahmannn/sales-insight-agent',
        description: 'An AI-powered sales intelligence platform combining interactive business dashboards, machine learning forecasting, and natural-language analytics. A LangGraph agent answers revenue, profitability, regional, product, and forecast questions through controlled tools backed by PostgreSQL data.',
        highlights: [
            'Built a data cleaning and feature-engineering pipeline for analysis-ready sales data.',
            'Developed an XGBoost monthly revenue forecast that outperformed the baseline model.',
            'Created deterministic LangGraph tools for sales, category, regional, forecast, and business-insight queries.',
            'Persisted multi-user chat sessions in PostgreSQL for reliable conversation history.',
            'Delivered the analytics experience through Streamlit and Power BI dashboards.',
        ],
        technologies: ['Python', 'LangGraph', 'LangChain', 'PostgreSQL', 'XGBoost', 'Streamlit', 'Power BI'],
    },
    {
        category: 'AI Engineering Projects',
        name: 'AI-Agent-Webpage-editor',
        href: 'https://github.com/NaimurRahmannn/AI-Agent-Webpage-editor',
        description: 'A conversational CLI editing agent built with CrewAI, Python, Pydantic, Groq, deterministic HTML/CSS syntax validation (html5lib & tinycss2), patch preview mode, safe undo, interactive clarification, and an embedded read-only Gemini CLI patch reviewer.',
        language: '',
        technologies: ['Python','CrewAI','Gemini CLI','Groq','Pydantic','html5lib','tinycss2'],
    },
    {
        category: 'Backend Projects',
        name: 'dhaka-tesla-pool-',
        href: 'https://github.com/NaimurRahmannn/dhaka-tesla-pool-',
        demoUrl: 'https://dhaka-tesla-pool-lemon-chi.vercel.app/',
        description: 'A ride-pooling MVP for passengers and drivers in Dhaka. Passengers can request and track rides while drivers manage vehicles and trips. A NestJS API calculates routing-based fares, manages ride and pool lifecycles, and allocates seats transactionally with PostgreSQL and Prisma.',
        highlights: [
            'Role-based passenger and driver accounts with JWT authentication.',
            'OSRM routing for distance-based fares and Leaflet maps for ride previews.',
            'Transactional pool membership and seat-capacity checks to prevent concurrent overbooking.',
        ],
        technologies: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'OSRM', 'Leaflet'],
    },
    {
        category: 'Backend Projects',
        name: 'Stalker-A-Unified-Competitive-Profile',
        href: 'https://github.com/NaimurRahmannn/Stalker-A-Unified-Competitive-Profile',
        description: "STALKER is a technical growth dashboard that unifies a developer's scattered activity — competitive programming, data science, cybersecurity, and hackathons — into one shareable profile. Users connect handles from platforms like Codeforces, AtCoder, Kaggle, CTFtime, and Devpost, and STALKER syncs and normalizes their progress over time: ratings, consistency, milestones, and growth. The current build covers a full Codeforces flow (register, connect, sync, view) plus AtCoder rating and submission ingestion, with more platforms planned. The goal: one developer identity that reflects an actual technical journey, not just a resume line.",
        language: '',
        technologies: ['Django REST Framework', 'djangorestframework-simplejwt', 'PostgreSQL', 'Next.js', 'Tailwind CSS'],
    },
    {
        category: 'Backend Projects',
        name: 'My-own-shell-for-Linux-OS-Mshx',
        href: 'https://github.com/NaimurRahmannn/My-own-shell-for-Linux-OS-Mshx',
        description: 'MshX is a Unix shell built from scratch in C — with a handwritten tokenizer, parser, AST, and executor rather than relying on existing libraries. It supports pipelines, logical operators, I/O redirection, glob/variable expansion, background jobs, and command history, plus extras like a dry-run preview mode and a millisecond-precision timeline profiler for tracing process events. Built with just GCC and GNU Make on POSIX APIs, it\'s both a working shell and a look under the hood at how shells work.',
        language: '',
        technologies: ['C','Linux','GNU Make'],
    },
    {
        category: 'Backend Projects',
        name: 'Ecommerce-sites-with-Django',
        href: 'https://github.com/NaimurRahmannn/Ecommerce-sites-with-Django',
        demoUrl: 'https://haatify.onrender.com/',
        description: 'Haatify is a Django fashion-commerce application featuring a PostgreSQL hybrid retrieval engine and an in-store AI shopping assistant. It combines a complete storefront and checkout flow with keyword search, vector search, structured query understanding, and retrieval-augmented Gemini responses.',
        highlights: [
            'PostgreSQL hybrid product search combining pgvector (cosine-distance HNSW index) and full-text search.',
            'AI shopping assistant with RAG (Retrieval-Augmented Generation) using Gemini for context-aware responses.',
            'Automatic ProductSearchDocument synchronization through Django signals.',
            'Structured query analysis for explicit filtering (price, category, brand, color, size).',
            'Integrated Stripe-hosted Checkout with signed webhooks for payment processing.',
        ],
        language: '',
        technologies: ['Django', 'PostgreSQL', 'pgvector', 'Google Gen AI SDK', 'Redis', 'Stripe', 'Pydantic 2', 'Bootstrap'],
    },
    {
        category: 'Backend Projects',
        name: 'Kash-An-Expense-Tracker',
        href: 'https://github.com/NaimurRahmannn/Kash-An-Expense-Tracker',
        demoUrl: 'https://kash-an-expense-tracker.vercel.app/',
        description: 'A personal expense tracker built for the internship assignment, with a Go + Beego backend, CSV-based local storage, optional Postgres production storage, and a Next.js frontend with dashboard, expense management, and voice input feature.',
        language: '',
        technologies: ['GO','Beego','Next.js','TypeScript','Postgres'],
    },
    {
        category: 'Backend Projects',
        name: 'TravelSphere',
        href: 'https://github.com/NaimurRahmannn/TravelSphere',
        description: "A destination discovery and trip-planning app built with the Beego framework (Go). You can browse countries, dig into a destination's details and nearby attractions, and keep a personal travel wishlist with planned/visited status.",
        language: '',
        technologies: ['Go', 'Beego'],
    },
    {
        category: 'Backend Projects',
        name: 'Property_Management_System',
        href: 'https://github.com/NaimurRahmannn/Property_Management_System',
        description: 'A vacation-rental platform blending classic location search with AI-powered semantic search — type "beach vacation" and get relevant results without exact keyword matches. Built with Django, GeoDjango/PostGIS, and pgvector (Sentence Transformers embeddings) for precise distance calculations, all Dockerized for one-command setup.',
        language: '',
        technologies: ['Django, Django REST Framework','GeoDjango + PostGIS','pgvector + Sentence Transformers','PostgreSQL'],
    },
    {
        category: 'Backend Projects',
        name: 'SEO-Audit-Tool-FastAPI',
        href: 'https://github.com/NaimurRahmannn/SEO-Audit-Tool-FastAPI',
        demoUrl: 'https://seo-audit-tool-rosy-two.vercel.app/',
        description: "The SEO Audit Tool lets you paste a URL and get a clear, graded report of its on-page SEO health. It's built for developers, marketers, and site owners who want a fast, no-signup snapshot of what a page does well and what to fix.",
        language: '',
        technologies: ['FastAPI','PostgreSQL','BeautifulSoup','Lighthouse','Next.js','TypeScript','Tailwind CSS'],
    },
    {
        category: 'Frontend Projects',
        name: 'ByteSpace-New',
        href: 'https://github.com/NaimurRahmannn/ByteSpace-New',
        demoUrl: 'https://byte-space-new-roan.vercel.app/',
        description: 'A responsive EdTech landing page with course discovery, learning paths, and creator features, plus dedicated sign-in and registration screens. Built from Figma designs with client-side routing and a cohesive visual system.',
        technologies: ['React', 'React Router', 'Vite', 'Tailwind CSS'],
    },
    {
        category: 'Frontend Projects',
        name: 'Kenakata-ecommerce-storefront-Next.js-',
        href: 'https://github.com/NaimurRahmannn/Kenakata-ecommerce-storefront-Next.js-',
        demoUrl: 'https://kenakata-ecommerce-storefront-next-js.onrender.com/',
        description: 'A production-style e-commerce storefront built with Next.js App Router, TypeScript, and Tailwind CSS, powered by the Platzi Fake Store API. Polished browse → details → cart → checkout flow with client-side auth, cart, and wishlist state — no custom backend.',
        language: '',
        technologies: ['Next.js','React','TypeScript','Tailwind CSS','Zustand'],
    },
    {
        category: 'Frontend Projects',
        name: 'Travels_Property',
        href: 'https://github.com/NaimurRahmannn/w3assignment-02-Internship-',
        demoUrl: 'https://w3assignment-02-internship.onrender.com/',
        description: 'A Node/Express property detail page (internship assignment) featuring an image gallery, expandable description, a check-in/check-out date picker with price calculation, Google Maps integration, and a nearby-properties list served via a simple /get-property API — built with plain HTML/CSS/JS and a responsive layout.',
        language: '',
        technologies: ['HTML','CSS','JS','Node','Express.js'],
    },
    {
        category: 'Frontend Projects',
        name: 'Amazon_Clone-HTML-CSS',
        href: 'https://github.com/NaimurRahmannn/Amazon_Clone-HTML-CSS',
        description: 'A front-end clone of the Amazon website built using HTML and CSS. This project is focused on replicating the design, layout, and responsive structure of the Amazon homepage for learning and practice purposes.',
        language: '',
        technologies: ['HTML','CSS'],
    },
    {
        category: 'Devops and Cloud',
        name: 'okcomputerstuff-aws-infrastructure',
        href: 'https://github.com/NaimurRahmannn/okcomputerstuff-aws-infrastructure',
        description: 'This repository contains the Jenkins platform and the okcomputerstuff application infrastructure built with Terraform. It provisions a complete Jenkins setup (load balancer, DNS, TLS) and the application infrastructure including a VPC, EC2 host, RDS database, IAM roles, and AWS Secrets Manager integration for secure credential management.',
        highlights: [
            'Provisions Jenkins platform with load balancing, DNS, and TLS certificates.',
            'Deploys application VPC, EC2 host, RDS database, and IAM roles.',
            'Manages application and database credentials securely via AWS Secrets Manager.',
            'Enforces production requirements like S3 state bucket security and least privilege IAM policies.',
            'Uses modular Terraform setups with strict isolation between Jenkins and Application infrastructure.',
        ],
        language: '',
        technologies: ['AWS', 'Terraform', 'Jenkins', 'DevOps'],
    },
    {
        category: 'Devops and Cloud',
        name: 'Devops-Practice-Lab',
        href: 'https://github.com/NaimurRahmannn/Devops-Practice-Lab',
        description: 'A practice workspace for building and improving a full DevOps pipeline. It acts as a monorepo for organizing application code, CI/CD configurations, Docker assets, Kubernetes manifests, monitoring setups, scripts, and infrastructure-as-code (Terraform) examples.',
        language: '',
        technologies: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    },
]

const projectPreviews = {
    'TravelAI-Agent-v2-LangGraph': {
        title: 'TravelAI Agent',
        summary: 'An AI travel planner with agent workflows, persistent traveler memory, external travel data, and structured itineraries.',
    },
    'OpenSteward-MCP-Server': {
        title: 'OpenSteward MCP Server',
        summary: 'A read-only service that explains pull request readiness, policy checks, related history, and review cost for maintainers.',
    },
    'Ecommerce-sites-with-Django': {
        title: 'Haatify',
        summary: 'A Django storefront with PostgreSQL hybrid product search, a RAG shopping assistant, and Stripe checkout.',
    },
    'My-own-shell-for-Linux-OS-Mshx': {
        title: 'MshX Unix Shell',
        summary: 'A shell written in C with a tokenizer, parser, AST, pipelines, redirection, background jobs, and command history.',
    },
}

const projectTitles = {
    'dhaka-tesla-pool-': 'Dhaka Tesla Pool',
    'ByteSpace-New': 'ByteSpace',
    'Archittecture-vs-Data-Harmonization-for-generalisable-Polyp-Segmentation': 'Polyp Segmentation Research',
    'Multi-Agent-Orchestrator': 'AgentOrchestra',
    'sales-insight-agent': 'Sales Insight Agent',
    'AI-Agent-Webpage-editor': 'AI Webpage Editor',
    'Stalker-A-Unified-Competitive-Profile': 'Stalker Competitive Profile',
    'Kash-An-Expense-Tracker': 'Kash Expense Tracker',
    'TravelSphere': 'TravelSphere',
    'Property_Management_System': 'Property Management System',
    'SEO-Audit-Tool-FastAPI': 'SEO Audit Tool',
    'Kenakata-ecommerce-storefront-Next.js-': 'Kenakata Storefront',
    'Travels_Property': 'Travel Property',
    'Amazon_Clone-HTML-CSS': 'Amazon UI Clone',
    'okcomputerstuff-aws-infrastructure': 'AWS Infrastructure',
    'Devops-Practice-Lab': 'DevOps Practice Lab',
}

const projectSections = [
    { category: 'AI Engineering Projects', title: 'AI Engineering', id: 'ai-engineering-projects' },
    { category: 'Backend Projects', title: 'Backend', id: 'backend-projects' },
    { category: 'Frontend Projects', title: 'Frontend', id: 'frontend-projects' },
    { category: 'Devops and Cloud', title: 'DevOps & Cloud', id: 'devops-cloud-projects' },
]

export default function ProjectsPage() {
    return (
        <section className="portfolio-panel mx-auto w-full max-w-305 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <SectionHeading
                eyebrow="Portfolio work"
                title="Projects"
                description="Engineering work across AI applications, backend systems, frontend development, and cloud infrastructure."
            />

            <p className="mt-6 text-sm text-[#758199]">{projects.length} projects across four areas</p>

            {projectSections.map((section) => {
                const sectionProjects = projects.filter((project) => project.category === section.category)

                return (
                    <section key={section.category} className="mt-10" aria-labelledby={section.id}>
                        <div className="flex items-baseline justify-between gap-4 border-b border-[#e4e7ec] pb-3">
                            <h3 id={section.id} className="font-serif text-2xl font-semibold text-[#18233b]">{section.title}</h3>
                            <span className="text-sm text-[#758199]">{sectionProjects.length} projects</span>
                        </div>

                        <div className="mt-5 grid gap-4 lg:grid-cols-2">
                            {sectionProjects.map((project) => {
                                const title = projectPreviews[project.name]?.title || projectTitles[project.name] || project.name
                                const preview = projectPreviews[project.name]?.summary || project.description?.split('\n\n')[0]
                                const hasDetails = Boolean(project.highlights?.length || (project.description?.length ?? 0) > 220)

                                return (
                                    <article key={project.name} className="flex h-full min-w-0 flex-col rounded-xl border border-[#e4e7ec] bg-[#fcfcfb] p-5 sm:p-6">
                                        <h4 className="font-serif text-xl font-semibold text-[#18233b] sm:text-2xl">{title}</h4>
                                        {preview && <p className={`mt-3 text-sm leading-6 text-[#5e6a7e] ${hasDetails ? 'line-clamp-3' : ''}`}>{preview}</p>}

                                        {(project.technologies || project.topics || []).length > 0 && (
                                            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
                                                {(project.technologies || project.topics).map((technology) => (
                                                    <li key={technology} className="rounded-md border border-[#e5e8ed] bg-white px-2.5 py-1 text-xs font-medium text-[#56647c]">{technology}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {hasDetails && (
                                            <details className="group mt-5 border-t border-[#e4e7ec] pt-3">
                                                <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-semibold text-[#283654] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18233b] [&::-webkit-details-marker]:hidden">
                                                    Project details <ChevronDown size={15} className="transition-transform group-open:rotate-180" aria-hidden="true" />
                                                </summary>
                                                <div className="mt-3 space-y-3 text-sm leading-6 text-[#5e6a7e]">
                                                    <p className="whitespace-pre-line">{project.description}</p>
                                                    {project.highlights?.length > 0 && (
                                                        <ul className="list-disc space-y-1 pl-5">
                                                            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                                                        </ul>
                                                    )}
                                                </div>
                                            </details>
                                        )}

                                        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm font-semibold text-[#283654]">
                                            <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">Repository <ExternalLink size={14} aria-hidden="true" /></a>
                                            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">Live demo <ExternalLink size={14} aria-hidden="true" /></a>}
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </section>
    )
}
