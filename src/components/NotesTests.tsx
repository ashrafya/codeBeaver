import CoursesDB from "../DB/CoursesDB";

const badgeColors: Record<string, string> = {
  New: "bg-green-500",
  Hot: "bg-red-500",
};

const NotesTests: React.FC = () => (
  <section className="mx-auto py-12 px-2 bg-gray-50">
    <div className="text-center mb-8">
      <h4 className="text-blue-600 font-bold text-lg mb-1 tracking-wide">Featured Programming Courses</h4>
      <h1 className="text-4xl font-extrabold text-black mb-2">Learn Programming & AI</h1>
      <p className="text-gray-500 text-lg">
        Master the fundamentals of programming, machine learning, and data science with hands-on projects and real-world applications.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {CoursesDB.map((course, idx) => (
        <div
          key={course.id}
          className="bg-white rounded-2xl shadow border border-gray-200 flex flex-col overflow-hidden"
          style={{ maxWidth: 340, margin: "0 auto" }}
        >
          <div className="relative">
            <img
              src={course.coverImage}
              alt={course.title}
              className="w-full h-56 object-cover"
            />
            {course.badge && (
              <span className={`absolute text-xs top-4 left-4 px-1.5 py-1 font-semibold text-white rounded-md ${badgeColors[course.badge]}`}>
                {course.badge}
              </span>
            )}
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm font-medium">{course.duration}</span>
                <span className="text-gray-900 text-sm font-bold">${course.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default NotesTests;