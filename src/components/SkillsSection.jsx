import { Code2, Monitor, Puzzle, Trophy } from "lucide-react";
import pythonLogo from "../../python-logo-only.png";
import djangoLogo from "../../django-logo-png_seeklogo-394570.png";
import postgresqlLogo from "../../PostgreSQL_logo.3colors.120x120.png";
import dockerLogo from "../../docker-mark-ocean-blue.png";
import pytorchLogo from "../../pytorch.png";
import reactLogo from "../assets/react.svg";

const statsCards = [
  {
    value: "10+",
    label: "Technologies",
    icon: Code2,
    cardClass:
      "border-sky-200/70 bg-linear-to-br from-sky-50 via-white to-sky-100/70",
    iconClass: "bg-sky-500/10 text-sky-700 ring-1 ring-sky-200/80",
    valueClass: "text-sky-800",
    glowClass: "from-sky-300/50 to-sky-100/0",
  },
  {
    value: "1500+",
    label: "Problems Solved",
    icon: Puzzle,
    cardClass:
      "border-emerald-200/70 bg-linear-to-br from-emerald-50 via-white to-emerald-100/70",
    iconClass: "bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-200/80",
    valueClass: "text-emerald-800",
    glowClass: "from-emerald-300/50 to-emerald-100/0",
  },
  {
    value: "5+",
    label: "Major Domains",
    icon: Monitor,
    cardClass:
      "border-violet-200/70 bg-linear-to-br from-violet-50 via-white to-violet-100/70",
    iconClass: "bg-violet-500/10 text-violet-700 ring-1 ring-violet-200/80",
    valueClass: "text-violet-800",
    glowClass: "from-violet-300/50 to-violet-100/0",
  },
  {
    value: "Specialist",
    label: "Codeforces Rating",
    icon: Trophy,
    cardClass:
      "border-amber-200/70 bg-linear-to-br from-amber-50 via-white to-amber-100/70",
    iconClass: "bg-amber-500/10 text-amber-700 ring-1 ring-amber-200/80",
    valueClass: "text-amber-800",
    glowClass: "from-amber-300/50 to-amber-100/0",
  },
];

const technicalSkills = [
  {
    title: "Programming Languages",
    description: "C/C++, Python, JavaScript, SQL",
    proficiency: "Advanced",
    logo: pythonLogo,
    logoAlt: "Python logo",
    cardClass: "border-sky-100 bg-sky-50/70",
    iconClass: "bg-sky-100 text-sky-700",
    badgeClass: "bg-sky-100 text-sky-700",
    trackClass: "bg-sky-100",
    fillClass: "bg-sky-500",
    progressClass: "w-11/12",
  },
  {
    title: "Backend Development",
    description: "Django, REST APIs, Authentication",
    proficiency: "Intermediate",
    logo: djangoLogo,
    logoAlt: "Django logo",
    cardClass: "border-emerald-100 bg-emerald-50/70",
    iconClass: "bg-emerald-100 text-emerald-700",
    badgeClass: "bg-emerald-100 text-emerald-700",
    trackClass: "bg-emerald-100",
    fillClass: "bg-emerald-500",
    progressClass: "w-9/12",
  },
  {
    title: "Database",
    description: "PostgreSQL, MySQL",
    proficiency: "Intermediate",
    logo: postgresqlLogo,
    logoAlt: "PostgreSQL logo",
    cardClass: "border-violet-100 bg-violet-50/70",
    iconClass: "bg-violet-100 text-violet-700",
    badgeClass: "bg-violet-100 text-violet-700",
    trackClass: "bg-violet-100",
    fillClass: "bg-violet-500",
    progressClass: "w-9/12",
  },
  {
    title: "Frontend Development",
    description: "React, Tailwind CSS, Bootstrap",
    proficiency: "Intermediate",
    logo: reactLogo,
    logoAlt: "React logo",
    cardClass: "border-indigo-100 bg-indigo-50/70",
    iconClass: "bg-indigo-100 text-indigo-700",
    badgeClass: "bg-indigo-100 text-indigo-700",
    trackClass: "bg-indigo-100",
    fillClass: "bg-indigo-500",
    progressClass: "w-9/12",
  },
  {
    title: "DevOps & Tools",
    description: "Docker, Linux, Git, GitHub Workflow",
    proficiency: "Intermediate",
    logo: dockerLogo,
    logoAlt: "Docker logo",
    cardClass: "border-orange-100 bg-orange-50/70",
    iconClass: "bg-orange-100 text-orange-700",
    badgeClass: "bg-orange-100 text-orange-700",
    trackClass: "bg-orange-100",
    fillClass: "bg-orange-500",
    progressClass: "w-8/12",
  },
  {
    title: "Machine Learning & AI",
    description: "PyTorch, Scikit-learn, OpenCV, NumPy, Pandas",
    proficiency: "Intermediate",
    logo: pytorchLogo,
    logoAlt: "PyTorch logo",
    cardClass: "border-rose-100 bg-rose-50/70",
    iconClass: "bg-rose-100 text-rose-700",
    badgeClass: "bg-rose-100 text-rose-700",
    trackClass: "bg-rose-100",
    fillClass: "bg-rose-500",
    progressClass: "w-7/12",
  },
];

const otherSkills = [
  "Problem Solving",
  "Data Structures & Algorithms",
  "REST API Design",
  "Linux Command Line",
  "Git & GitHub",
  "LaTeX",
  "Competitive Programming",
  "System Programming (C)",
  "Computer Vision",
  "Research & Experimentation",
  "Technical Writing",
];

export default function SkillsSection() {
  return (
    <section className="mx-auto w-full max-w-305">
      <article className="rounded-[28px] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_14px_36px_rgba(15,23,42,0.08)] sm:px-8 sm:py-7 lg:px-9 lg:py-8">
        <header>
          <div className="flex items-start gap-3">
            <div
              className="mt-1 h-14 w-1 rounded-full bg-sky-500"
              aria-hidden="true"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Skills
              </h1>
              <p className="mt-2.5 max-w-3xl text-[15px] leading-6 text-slate-500 sm:text-base">
                My tech stack and core competencies that help me build and
                solve.
              </p>
            </div>
          </div>
        </header>

        <section
          className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Skills statistics"
        >
          {statsCards.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className={`group relative overflow-hidden rounded-xl border px-3.5 py-3 shadow-[0_8px_18px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_22px_rgba(15,23,42,0.09)] ${item.cardClass}`}
              >
                <div
                  className={`pointer-events-none absolute -right-5 -top-5 h-16 w-16 rounded-full bg-linear-to-br blur-xl ${item.glowClass}`}
                  aria-hidden="true"
                />

                <div className="relative flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.iconClass}`}
                  >
                    <Icon size={16} />
                  </div>

                  <div className="min-w-0">
                    <p
                      className={`text-xl font-bold leading-none ${item.valueClass}`}
                    >
                      {item.value}
                    </p>
                    <p className="mt-1 text-[12px] leading-4 text-slate-600">
                      {item.label}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-7" aria-label="Technical skills">
          <h2 className="text-xl font-bold text-slate-900">Technical Skills</h2>
          <p className="mt-1 text-sm text-slate-500">
            Core technologies I work with
          </p>

          <div className="mt-4 grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technicalSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article
                  key={skill.title}
                  className={`rounded-2xl border px-4 py-4 ${skill.cardClass}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${skill.iconClass}`}
                      >
                        {skill.logo ? (
                          <img
                            src={skill.logo}
                            alt={skill.logoAlt}
                            className="h-6 w-6 object-contain"
                          />
                        ) : (
                          <Icon size={18} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold text-slate-900">
                          {skill.title}
                        </h3>
                        <p className="mt-1 text-[13px] leading-5 text-slate-600">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${skill.badgeClass}`}
                    >
                      {skill.proficiency}
                    </span>
                  </div>

                  <div
                    className={`mt-4 h-2 w-full rounded-full ${skill.trackClass}`}
                  >
                    <div
                      className={`h-2 rounded-full ${skill.fillClass} ${skill.progressClass}`}
                      aria-hidden="true"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-7" aria-label="Other skills and proficiency">
          <h2 className="text-xl font-bold text-slate-900">
            Other Skills & Proficiency
          </h2>

          <div className="mt-3 flex flex-wrap gap-2.5">
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700"
              >
                <span
                  className="h-2 w-2 rounded-full bg-sky-500"
                  aria-hidden="true"
                />
                {skill}
              </span>
            ))}
          </div>
        </section>

      </article>
    </section>
  );
}
