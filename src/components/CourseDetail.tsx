import React from "react";
import { useParams, Link } from "react-router-dom";
import CoursesDB from "../DB/CoursesDB";
import { GOOGLE_FORM } from "./Constants";
import { FaArrowLeft, FaClock, FaDollarSign, FaUserGraduate, FaLaptop, FaCode, FaChartBar, FaBrain, FaInfoCircle, FaCalendarAlt, FaBook, FaLightbulb, FaComments, FaTrophy, FaCreditCard, FaQuestionCircle, FaCheck, FaPlay, FaUsers, FaDiscord} from "react-icons/fa";

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = CoursesDB.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-blue-600 hover:underline">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const getSubjectIcon = (subject: string) => {
    switch (subject) {
      case "Machine Learning & AI":
        return <FaBrain className="w-8 h-8 text-blue-600" />;
      case "Python Programming":
        return <FaCode className="w-8 h-8 text-blue-600" />;
      case "Data Science":
        return <FaChartBar className="w-8 h-8 text-blue-600" />;
      default:
        return <FaLaptop className="w-8 h-8 text-blue-600" />;
    }
  };

  // Render ML/AI course with comprehensive content
  if (course.id === "intro-ml-ai") {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <Link to="/courses" className="inline-flex items-center text-blue-100 hover:text-white mb-8">
              <FaArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Link>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <FaBrain className="w-16 h-16 text-blue-200" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Intro to Machine Learning & AI
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                From Zero to Neural Nets
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Your first step from Python beginner to AI builder — no experience required.
                Build real machine learning models and graduate with a resume-worthy project and a LinkedIn endorsement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={GOOGLE_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
                >
                  <FaPlay className="mr-2" />
                  Enroll Now
                </a>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Join the Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* About the Course */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FaInfoCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">About the Course</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Who is this for?</h3>
                <p className="text-gray-700 mb-6">
                  Grade 11 and 12 students curious about AI, coding, and the future of technology. 
                  Whether you're aiming for college applications, internships, or just love learning — 
                  this course is your launchpad.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">What makes it different?</h3>
                <p className="text-gray-700">
                  This 12-week bootcamp takes you from no coding experience to building and presenting 
                  your own AI model. It's beginner-friendly, career-relevant, and outcome-driven.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">You'll walk away with:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Python & ML skills you can apply anywhere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">A complete AI project for your portfolio or resume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">A LinkedIn endorsement from our instructors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Support to pursue your first tech internship or research opportunity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Course Overview */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FaCalendarAlt className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Course Overview</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <FaClock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Course Length</h4>
                <p className="text-gray-600">12 Weeks</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <FaUsers className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Sessions</h4>
                <p className="text-gray-600">3 x 1-hour live online classes per week</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <FaDiscord className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Support</h4>
                <p className="text-gray-600">Community Discord for help between classes</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <FaCode className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Tools Used</h4>
                <p className="text-gray-600">Python, Jupyter/Colab, scikit-learn, TensorFlow/Keras</p>
              </div>
            </div>
          </div>

          {/* Curriculum Structure */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FaBook className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Curriculum Structure</h2>
            </div>
            
            {/* Phase 1 */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-2xl font-bold text-gray-900">Phase 1: Python & Programming Fundamentals (Weeks 1–3)</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Week 1: Getting Started with Python</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• What is coding? What is AI?</li>
                    <li>• Variables, data types, input/output</li>
                    <li>• Writing your first Python program</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Week 2: Logic, Loops, and Functions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• If/else logic, loops</li>
                    <li>• Writing reusable functions</li>
                    <li>• Mini-project: calculator or quiz</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Week 3: Lists, Dictionaries & Libraries</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Lists, dictionaries</li>
                    <li>• NumPy basics</li>
                    <li>• Intro to data visualization with matplotlib</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-2xl font-bold text-gray-900">Phase 2: Intro to AI & ML Foundations (Weeks 4–6)</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Week 4: What is Machine Learning?</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI vs ML, real-world examples</li>
                    <li>• Supervised learning & features/labels</li>
                    <li>• First model: linear regression</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Week 5: Working with Data</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• DataFrames & Pandas</li>
                    <li>• Train/test split, validation</li>
                    <li>• Accuracy, confusion matrix</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Week 6: Classification Models</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Spam detection, disease prediction</li>
                    <li>• KNN & decision trees</li>
                    <li>• Evaluation metrics: precision, recall, F1</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-2xl font-bold text-gray-900">Phase 3: Deep Learning & Neural Networks (Weeks 7–10)</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Week 7: Neural Networks – The Basics</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Neurons, layers, weights</li>
                    <li>• Conceptual forward/backward pass</li>
                    <li>• Overfitting, dropout, regularization</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Week 8: Build an ANN with TensorFlow/Keras</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Activation & loss functions</li>
                    <li>• Model training and predictions</li>
                    <li>• Build a digit classifier (MNIST)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Week 9: Improve Your Model</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hyperparameter tuning</li>
                    <li>• Visualizing training results</li>
                    <li>• Model performance tweaking</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Week 10: Real-World AI + Ethics</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Applications: ChatGPT, vision, autonomous cars</li>
                    <li>• Bias, misinformation, deepfakes</li>
                    <li>• Class discussion or debate</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-2xl font-bold text-gray-900">Phase 4: Final Project & Showcase (Weeks 11–12)</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Week 11: Project Build Week</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Choose a dataset & problem</li>
                    <li>• Get guided support from instructors</li>
                    <li>• Example projects: flower classifier, genre predictor</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Week 12: Present & Reflect</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Present your project live or recorded</li>
                    <li>• Get peer and mentor feedback</li>
                    <li>• Explore ML careers & next steps</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bonus Sessions */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-900">Bonus Sessions (Optional)</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Intro to Git & GitHub</h4>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-2">How to publish a Colab notebook</h4>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Guest Q&A with an AI professional</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FaComments className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">What Our Students & Parents Say</h2>
            </div>
            <p className="text-gray-600 mb-6 italic">(Add after first cohort)</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4 italic">
                  "I had zero experience with coding. Now I've built my own AI model — and I added it to my resume for college apps!"
                </p>
                <p className="font-semibold text-gray-900">— Student Name, Grade 12</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4 italic">
                  "The Discord support and project feedback helped me actually understand what I was building — not just follow instructions."
                </p>
                <p className="font-semibold text-gray-900">— Student Name, Grade 11</p>
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FaTrophy className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Outcomes That Matter</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "A real ML project to showcase",
                "A strong foundation in Python & AI",
                "Instructor-backed LinkedIn endorsement",
                "Confidence to pursue tech internships",
                "Certificate of completion"
              ].map((outcome, index) => (
                <div key={index} className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                  <FaCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FaCreditCard className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Pricing</h2>
            </div>
            
            <p className="text-gray-700 mb-6 text-lg">
              We keep it simple. One price. One powerful experience.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎓 Full Bootcamp Package — $650 CAD</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {[
                      "12 weeks of live instruction (36+ hours total)",
                      "Lifetime access to all session recordings and materials",
                      "Dedicated Discord community for support",
                      "Certificate of completion",
                      "Final project mentorship + LinkedIn endorsement",
                      "Personalized project feedback from instructors"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Flexible Billing Options</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900">One-Time Payment</h5>
                      <p className="text-2xl font-bold text-blue-600">$650 CAD</p>
                      <p className="text-sm text-gray-600">Pay upfront and save.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900">Monthly Plan</h5>
                      <p className="text-2xl font-bold text-blue-600">$225 CAD/month</p>
                      <p className="text-sm text-gray-600">Split your payment over 3 months.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FaQuestionCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Got Questions?</h2>
            </div>
            
            <p className="text-gray-700 mb-6 text-lg">
              Curious if this course is the right fit? We're happy to walk you through the curriculum, 
              outcomes, and next steps.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">✅ Schedule a 15-minute free Zoom call</h4>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Book a Call Now
                </button>
                <p className="text-sm text-gray-600 mt-2">(link to Calendly or scheduling tool)</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Or email us</h4>
                <p className="text-blue-600 font-semibold mb-2">learn@yourdomain.com</p>
                <p className="text-sm text-gray-600">You'll get a response within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaQuestionCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  q: "Do I need to know how to code?",
                  a: "Nope. We start from scratch and teach you everything you need."
                },
                {
                  q: "How are classes delivered?",
                  a: "All sessions are live and virtual (via Zoom or Meet). Recordings are also available."
                },
                {
                  q: "What tools will I use?",
                  a: "Python, Google Colab, scikit-learn, and TensorFlow/Keras — all free and beginner-friendly."
                },
                {
                  q: "What if I miss a class?",
                  a: "Recordings and written recaps will be shared."
                },
                {
                  q: "Is there a final exam?",
                  a: "No exam — just your project presentation and feedback session."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default course detail layout for other courses
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link to="/courses" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
          <div className="flex items-center gap-4">
            {getSubjectIcon(course.subject)}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
              <p className="text-gray-600">{course.subject}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Image */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <img
                src={course.coverImage}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Course Description */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{course.description}</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                {course.subject === "Python Programming" && (
                  <>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Python syntax, data structures, and control flow</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Problem-solving strategies and algorithmic thinking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Building practical applications and projects</span>
                    </li>
                  </>
                )}
                {course.subject === "Data Science" && (
                  <>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Data analysis and statistical methods</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Data visualization and storytelling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Extracting insights and making data-driven decisions</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Course Details</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <FaClock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{course.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaUserGraduate className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{course.level} Level</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaDollarSign className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">${course.price}</span>
                </div>
              </div>

              {course.badge && (
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${
                    course.badge === "New" ? "bg-green-500" : "bg-red-500"
                  }`}>
                    {course.badge}
                  </span>
                </div>
              )}

              <a
                href={GOOGLE_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white text-center py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg"
              >
                Enroll Now - ${course.price}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail; 