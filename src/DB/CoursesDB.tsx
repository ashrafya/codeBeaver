import mlPreview from "../assets/notesPDFs/math1.webp";
import pythonPreview from "../assets/notesPDFs/math2.webp";
import dataSciencePreview from "../assets/notesPDFs/chem3.jpeg";

const CoursesDB = [
  {
    id: "intro-ml-ai",
    title: "Intro to Machine Learning & AI: From Zero to Neural Nets",
    description: "Master the fundamentals of machine learning and artificial intelligence. Learn from basic concepts to building neural networks with hands-on projects.",
    subject: "Machine Learning & AI",
    level: "Beginner",
    previewPDF: mlPreview,
    price: 299,
    duration: "8 weeks",
    badge: "New",
    coverImage: mlPreview,
  },
  {
    id: "intro-python",
    title: "Intro to Problem Solving with Python",
    description: "Learn Python programming fundamentals and problem-solving techniques. Build real-world applications and develop critical thinking skills.",
    subject: "Python Programming",
    level: "Beginner",
    previewPDF: pythonPreview,
    price: 199,
    duration: "6 weeks",
    coverImage: pythonPreview,
  },
  {
    id: "intro-data-science",
    title: "Intro to Data Science and Data Analysis",
    description: "Discover the world of data science. Learn to analyze data, create visualizations, and extract meaningful insights using modern tools and techniques.",
    subject: "Data Science",
    level: "Beginner",
    previewPDF: dataSciencePreview,
    price: 249,
    duration: "7 weeks",
    badge: "Hot",
    coverImage: dataSciencePreview,
  }
];

export default CoursesDB; 