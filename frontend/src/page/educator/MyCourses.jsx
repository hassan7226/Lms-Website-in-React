import { useState } from 'react'
import { assets } from '../../assets/assets'

const initialCourses = [
  {
    id: 'react-development',
    title: 'Complete React Development',
    thumbnail: assets.course_1_thumbnail,
    earnings: '$4,820',
    students: 215,
    status: true,
  },
  {
    id: 'ui-ux-fundamentals',
    title: 'UI/UX Design Fundamentals',
    thumbnail: assets.course_2_thumbnail,
    earnings: '$3,150',
    students: 142,
    status: true,
  },
  {
    id: 'data-analytics-python',
    title: 'Data Analytics With Python',
    thumbnail: assets.course_3_thumbnail,
    earnings: '$5,240',
    students: 188,
    status: false,
  },
  {
    id: 'advanced-node-apis',
    title: 'Advanced Node.js APIs',
    thumbnail: assets.course_4_thumbnail,
    earnings: '$2,980',
    students: 96,
    status: true,
  },
]

const MyCourses = () => {
  const [courses, setCourses] = useState(initialCourses)

  const toggleStatus = (courseId) => {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.id === courseId ? { ...course, status: !course.status } : course
      )
    )
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold uppercase tracking-[0.25em] text-primaryBlue">My Courses</h1>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[720px] divide-y divide-gray-100 md:min-w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-sm font-semibold text-mediumGray">
                <th className="px-4 py-4 md:px-6">All Courses</th>
                <th className="px-4 py-4 md:px-6">Earnings</th>
                <th className="px-4 py-4 md:px-6">Total Students</th>
                <th className="px-4 py-4 md:px-6">Course Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {courses.map((course) => (
                <tr key={course.id} className="align-middle transition-colors duration-300 hover:bg-mediumCyan/20">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <span className="font-semibold text-darkBlack">{course.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-darkGray md:px-6">{course.earnings}</td>
                  <td className="px-4 py-4 text-darkGray md:px-6">{course.students}</td>
                  <td className="px-4 py-4 md:px-6">
                    <button
                      type="button"
                      onClick={() => toggleStatus(course.id)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        course.status
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-red-100 text-red-700 hover:bg-red-200'
                      }`}
                    >
                      {course.status ? 'Active' : 'Inactive'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default MyCourses
