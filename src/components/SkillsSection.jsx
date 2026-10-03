import SectionHeading from './SectionHeading'

const technicalSkills = [
  { title: 'Programming languages', details: 'C/C++, Python, Go, JavaScript, SQL' },
  { title: 'Backend development', details: 'Django, Django REST Framework, FastAPI, Beego' },
  { title: 'AI engineering', details: 'PyTorch, LangChain, LangGraph, CrewAI, RAG, MCP, Mem0, LangSmith' },
  { title: 'Frontend development', details: 'React, Next.js, Tailwind CSS, Bootstrap' },
  { title: 'Databases & vector stores', details: 'MySQL, PostgreSQL, Redis, Qdrant' },
  { title: 'Cloud & devops', details: 'AWS, Docker, Linux, Git, Github Workflow, jenkins' },
  { title: 'Testing', details: 'Pytest, Postman, JMeter, Playwright' },
]

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
            {technicalSkills.map((skill) => (
              <li
                key={skill.title}
                className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[minmax(10rem,0.8fr)_minmax(0,1.4fr)] sm:items-baseline sm:gap-6 sm:py-5"
              >
                <h4 className="text-sm font-semibold text-[#18233b] sm:text-[15px]">{skill.title}</h4>
                <p className="text-sm leading-6 text-slate-600 sm:text-[15px]">{skill.details}</p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  )
}
