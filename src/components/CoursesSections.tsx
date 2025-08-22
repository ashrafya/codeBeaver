import React from "react";
import RegisterButton from "./RegisterButton";

interface Course {
  id: string;
  title: string;
  tagline: string;
  level: string;
  duration: string;
  focus: string;
  highlights: string[];
  featured?: boolean;
}

const courses: Course[] = [
  {
    id: "foundations",
    title: "Coding Foundations",
    tagline: "Start writing real code fast.",
    level: "Beginner",
    duration: "Weeks 1–2",
    focus: "Python, problem solving, core algorithms, clean habits.",
    highlights: [
      "Python essentials",
      "Logic & loops",
      "Functions & modularity",
      "Intro algorithms",
      "Debugging workflow",
    ],
  },
  {
    id: "math",
    title: "Math for ML",
    tagline: "Build real intuition.",
    level: "Core",
    duration: "Weeks 3–5",
    focus: "Linear algebra, vectors, functions, probability basics.",
    highlights: [
      "Vectors & matrices",
      "Dot products & projections",
      "Functions & gradients (conceptual)",
      "Probability & distributions",
      "Notation demystified",
    ],
    featured: true,
  },
  {
    id: "ml",
    title: "Intro to ML + Capstone",
    tagline: "Apply everything.",
    level: "Applied",
    duration: "Weeks 6–8",
    focus: "Data prep, baseline models, evaluation, capstone build.",
    highlights: [
      "Datasets & cleaning",
      "Train / test splits",
      "kNN / linear models",
      "Metrics & fairness",
      "Capstone project",
    ],
  },
];

const CoursesSections: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 px-6" id="courses">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-lg mb-2">Bootcamp Path</p>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Three Stages. One Outcome.</h2>
          <p className="text-xl text-gray-500 mb-14">
            A clear 8-week progression: code → math → applied machine learning.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div
              key={c.id}
              className={`relative flex flex-col rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-shadow px-7 pt-8 pb-8 ${
                c.featured
                  ? "border-blue-600 shadow-lg ring-1 ring-blue-600/20"
                  : "border-gray-200"
              }`}
            >
              {c.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold tracking-wide px-3 py-1 rounded-full shadow">
                  Core Focus
                </span>
              )}
              <div className="mb-5">
                <h3 className="text-2xl font-bold text-gray-900">{c.title}</h3>
                <p className="text-blue-600 font-medium mt-1">{c.tagline}</p>
              </div>
              <div className="mb-4 flex flex-wrap gap-2 text-xs font-medium">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{c.level}</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{c.duration}</span>
              </div>
              <p className="text-sm text-gray-500 mb-5">{c.focus}</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                {c.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <RegisterButton />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSections;
