import SectionHeading from './SectionHeading'

const technicalSkills = [
  { title: "Programming languages", details: "C/C++, Python, Go, JavaScript, SQL" },
  { title: "Backend development", details: "Django, Django REST Framework, FastAPI, Beego" },
  { title: "AI engineering", details: "PyTorch, LangChain, LangGraph, CrewAI, RAG, MCP, Mem0, LangSmith" },
  { title: "Frontend development", details: "React, Next.js, Tailwind CSS, Bootstrap" },
  { title: "Databases & vector stores", details: "MySQL, PostgreSQL, Redis, Qdrant" },
  { title: "Cloud & infrastructure", details: "AWS, Docker, Linux" },
  { title: "Testing", details: "Pytest, Postman, JMeter, Playwright" },
  { title: "Tools", details: "Git, GitHub Workflow, Notion, LaTeX" },
];

const workingPractices = [
  "Problem solving",
  "Data structures & algorithms",
  "AI agents",
  "Agent orchestration",
  "Prompt engineering",
  "RAG workflows",
  "REST API design",
  "SSE streaming",
  "Web scraping",
  "Automated testing",
  "Competitive programming",
  "POSIX system programming",
  "Research & experimentation",
  "Agile development",
];

export default function SkillsSection() {
  return (
    <section className="mx-auto w-full max-w-305">
      <article className="portfolio-panel px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills"
          description="Technologies and engineering practices I use to build reliable backend, AI, and full-stack systems."
        />

        <section className="pt-8" aria-labelledby="technical-skills-heading">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h3 id="technical-skills-heading" className="text-lg font-semibold text-slate-900">Technical expertise</h3>
            <span className="text-xs uppercase tracking-[0.14em] text-slate-400">Tools & technologies</span>
          </div>

          <ul className="border-t border-slate-200">
            {technicalSkills.map((skill, index) => (
              <li
                key={skill.title}
                className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[2rem_minmax(10rem,0.8fr)_minmax(0,1.4fr)] sm:items-baseline sm:gap-4 sm:py-5"
              >
                <span className="hidden text-xs tabular-nums text-slate-400 sm:block" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="text-sm font-semibold text-[#18233b] sm:text-[15px]">{skill.title}</h4>
                <p className="text-sm leading-6 text-slate-600 sm:text-[15px]">{skill.details}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-10" aria-labelledby="working-practices-heading">
          <h3 id="working-practices-heading" className="text-lg font-semibold text-slate-900">Working practices</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">Methods and problem areas I work with across projects.</p>
          <ul className="mt-5 grid gap-x-8 border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {workingPractices.map((practice) => (
              <li
                key={practice}
                className="flex items-baseline gap-3 border-b border-slate-200 py-3 text-sm leading-6 text-slate-700"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#71849b]" aria-hidden="true" />
                {practice}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-9 border-l-2 border-[#a9b4c4] pl-4 text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-900">Competitive programming</span>
          <span className="mx-2 text-slate-300" aria-hidden="true">/</span>
          Codeforces Specialist · 200+ online contests
        </div>
      </article>
    </section>
  );
}
