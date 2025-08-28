import { FaUserGraduate, FaChalkboardTeacher, FaCalendarAlt, FaDollarSign , FaLaptop } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import NotesButton from "./NotesButton";
import { BOOTCAMP_DURATION_TEXT } from "./Constants";

const features = [
  {
    title: `${BOOTCAMP_DURATION_TEXT} Structured Bootcamp`,
    description: "A focused, fast-paced roadmap that blends coding, math, and ML foundations—designed for ambitious high school students.",
    icon: <FaCalendarAlt className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Programming Foundations",
    description: "Master core coding concepts (Python, problem solving, algorithms) that set you apart in first-year university courses.",
    icon: <FaLaptop className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Math for Machine Learning",
    description: "Build intuition in linear algebra, functions, vectors, and probability—explained in a way that actually sticks.",
    icon: <FaChalkboardTeacher className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Intro to Machine Learning",
    description: "Learn how models learn: datasets, preprocessing, basic models, evaluation, ethics, and how math powers it all.",
    icon: <GiProgression className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Capstone Project",
    description: "Ship a real mini ML project that integrates code, math reasoning, and documentation—portfolio ready.",
    icon: <FaUserGraduate className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Mentorship & Progress Tracking",
    description: "Weekly feedback, clear milestones, and transparent progress reports for students and parents.",
    icon: <FaDollarSign className="w-8 h-8 text-blue-600" />, // reuse existing icon slot
  },
];

const blob = "M77.6,54.2Q68.7,68.4,54.2,75.7Q39.7,83,26.3,72.2Q12.9,61.4,18.2,44.7Q23.5,28,37.7,19.3Q51.9,10.6,65.2,22.1Q78.5,33.6,77.6,54.2Z";

const Features: React.FC = () => (
  <section className="bg-gray-50 py-20 px-4">
    <div className="mx-auto text-center max-w-screen-xl">
      <p className="text-blue-600 font-semibold text-lg mb-2">Bootcamp Highlights</p>
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Launch Your University Tech Journey</h2>
      <p className="text-xl text-gray-500 mb-14">
        A {BOOTCAMP_DURATION_TEXT} immersive pathway blending coding fundamentals, math intuition, and machine learning concepts—ending with a capstone that proves you’re ready.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center text-left gap-5"
          >
            <div className="relative flex-shrink-0 w-20 h-20">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full text-blue-100">
                <path d={blob} fill="currentColor" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center">
                {feature.icon}
              </span>
            </div>
            <div className="pl-3">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-base text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-12 flex justify-center">
      <NotesButton />
    </div>
  </section>
);

export default Features;