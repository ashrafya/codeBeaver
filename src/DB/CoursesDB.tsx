import mlPreview from "../assets/notesPDFs/math1.webp";
import pythonPreview from "../assets/notesPDFs/math2.webp";
import dataSciencePreview from "../assets/notesPDFs/chem3.jpeg";
import { 
  BOOTCAMP_FULL_PRICE, 
  BOOTCAMP_DURATION_TEXT,
  COURSE_PYTHON_PRICE, 
  COURSE_DATA_SCIENCE_PRICE,
  COURSE_PYTHON_DURATION,
  COURSE_DATA_SCIENCE_DURATION
} from "../components/Constants";

const CoursesDB = [
  {
    id: "intro-ml-ai",
    title: "Complete AI Bootcamp: From Zero to Neural Nets",
    description: "Master the fundamentals of machine learning and artificial intelligence in this comprehensive 8-week bootcamp. Learn from basic concepts to building neural networks with hands-on projects.",
    subject: "Machine Learning & AI",
    level: "Beginner",
    previewPDF: mlPreview,
    price: BOOTCAMP_FULL_PRICE,
    duration: BOOTCAMP_DURATION_TEXT,
    badge: "Bootcamp",
    type: "bootcamp",
    coverImage: mlPreview,
  },
  {
    id: "intro-python",
    title: "Intro to Problem Solving with Python",
    description: "Learn Python programming fundamentals and problem-solving techniques. Build real-world applications and develop critical thinking skills.",
    subject: "Python Programming",
    level: "Beginner",
    previewPDF: pythonPreview,
    price: COURSE_PYTHON_PRICE,
    duration: COURSE_PYTHON_DURATION,
    badge: "Course",
    type: "course",
    coverImage: pythonPreview,
  },
  {
    id: "intro-data-science",
    title: "Intro to Data Science and Data Analysis",
    description: "Discover the world of data science. Learn to analyze data, create visualizations, and extract meaningful insights using modern tools and techniques.",
    subject: "Data Science",
    level: "Beginner",
    previewPDF: dataSciencePreview,
    price: COURSE_DATA_SCIENCE_PRICE,
    duration: COURSE_DATA_SCIENCE_DURATION,
    badge: "Course",
    type: "course",
    coverImage: dataSciencePreview,
  }
];

export default CoursesDB; 