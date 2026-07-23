import { useMemo, useState } from 'react'
import { assets } from '../../assets/assets'

const enrolledStudents = [
  {
    id: 'student-1',
    name: 'Aarav Patel',
    image: assets.profile_img_1,
    courseTitle: 'Complete React Development',
    enrollmentDate: 'May 20, 2026',
    status: 'Active',
  },
  {
    id: 'student-2',
    name: 'Sara Ahmed',
    image: assets.profile_img_2,
    courseTitle: 'UI/UX Design Fundamentals',
    enrollmentDate: 'May 19, 2026',
    status: 'Active',
  },
  {
    id: 'student-3',
    name: 'Michael Brown',
    image: assets.profile_img_3,
    courseTitle: 'Data Analytics With Python',
    enrollmentDate: 'May 18, 2026',
    status: 'Pending',
  },
  {
    id: 'student-4',
    name: 'Neha Sharma',
    image: assets.profile_img_1,
    courseTitle: 'Advanced Node.js APIs',
    enrollmentDate: 'May 17, 2026',
    status: 'Active',
  },
  {
    id: 'student-5',
    name: 'Daniel Kim',
    image: assets.profile_img_2,
    courseTitle: 'Modern JavaScript Essentials',
    enrollmentDate: 'May 16, 2026',
    status: 'Pending',
  },
  {
    id: 'student-6',
    name: 'Isha Verma',
    image: assets.profile_img_3,
    courseTitle: 'React UI Systems',
    enrollmentDate: 'May 15, 2026',
    status: 'Active',
  },
  {
    id: 'student-7',
    name: 'Omar Hassan',
    image: assets.profile_img_1,
    courseTitle: 'Python Data Projects',
    enrollmentDate: 'May 14, 2026',
    status: 'Active',
  },
  {
    id: 'student-8',
    name: 'Priyanka Singh',
    image: assets.profile_img_2,
    courseTitle: 'Node.js Backend Masterclass',
    enrollmentDate: 'May 13, 2026',
    status: 'Pending',
  },
  {
    id: 'student-9',
    name: 'Rahul Mehta',
    image: assets.profile_img_3,
    courseTitle: 'Complete React Development',
    enrollmentDate: 'May 12, 2026',
    status: 'Active',
  },
  {
    id: 'student-10',
    name: 'Ayesha Khan',
    image: assets.profile_img_1,
    courseTitle: 'UI/UX Design Fundamentals',
    enrollmentDate: 'May 11, 2026',
    status: 'Active',
  },
  {
    id: 'student-11',
    name: 'John Carter',
    image: assets.profile_img_2,
    courseTitle: 'Data Analytics With Python',
    enrollmentDate: 'May 10, 2026',
    status: 'Pending',
  },
  {
    id: 'student-12',
    name: 'Fatima Noor',
    image: assets.profile_img_3,
    courseTitle: 'Advanced Node.js APIs',
    enrollmentDate: 'May 09, 2026',
    status: 'Active',
  },
  {
    id: 'student-13',
    name: 'Arjun Roy',
    image: assets.profile_img_1,
    courseTitle: 'Modern JavaScript Essentials',
    enrollmentDate: 'May 08, 2026',
    status: 'Active',
  },
  {
    id: 'student-14',
    name: 'Maya Das',
    image: assets.profile_img_2,
    courseTitle: 'React UI Systems',
    enrollmentDate: 'May 07, 2026',
    status: 'Pending',
  },
  {
    id: 'student-15',
    name: 'Hassan Ali',
    image: assets.profile_img_3,
    courseTitle: 'Python Data Projects',
    enrollmentDate: 'May 06, 2026',
    status: 'Active',
  },
  {
    id: 'student-16',
    name: 'Sofia Lopez',
    image: assets.profile_img_1,
    courseTitle: 'Node.js Backend Masterclass',
    enrollmentDate: 'May 05, 2026',
    status: 'Pending',
  },
  {
    id: 'student-17',
    name: 'Kabir Khan',
    image: assets.profile_img_2,
    courseTitle: 'Complete React Development',
    enrollmentDate: 'May 04, 2026',
    status: 'Active',
  },
  {
    id: 'student-18',
    name: 'Emily Stone',
    image: assets.profile_img_3,
    courseTitle: 'UI/UX Design Fundamentals',
    enrollmentDate: 'May 03, 2026',
    status: 'Active',
  },
  {
    id: 'student-19',
    name: 'Nikhil Jain',
    image: assets.profile_img_1,
    courseTitle: 'Data Analytics With Python',
    enrollmentDate: 'May 02, 2026',
    status: 'Pending',
  },
  {
    id: 'student-20',
    name: 'Zara Malik',
    image: assets.profile_img_2,
    courseTitle: 'Advanced Node.js APIs',
    enrollmentDate: 'May 01, 2026',
    status: 'Active',
  },
]

const StudentsEnrolled = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const totalPages = Math.ceil(enrolledStudents.length / itemsPerPage)

  const visibleStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return enrolledStudents.slice(startIndex, startIndex + itemsPerPage)
  }, [currentPage])

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages))
  }

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1))
  }

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primaryBlue">
          Students Enrolled
        </p>
        <h1 className="mt-2 text-2xl font-black text-darkBlack md:text-3xl">All Enrolled Students</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-darkGray">
          View the latest students who joined your courses and track their enrollment progress.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-[760px] divide-y divide-gray-100 md:min-w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-sm font-semibold text-mediumGray">
                <th className="px-4 py-4 md:px-6">Student</th>
                <th className="px-4 py-4 md:px-6">Course Title</th>
                <th className="px-4 py-4 md:px-6">Enrollment Date</th>
                <th className="px-4 py-4 md:px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {visibleStudents.map((student) => (
                <tr
                  key={student.id}
                  className="align-middle transition-colors duration-300 hover:bg-mediumCyan/20"
                >
                  <td className="px-4 py-4 md:px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="h-12 w-12 rounded-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <span className="font-semibold text-darkBlack transition-colors duration-300 hover:text-primaryBlue">
                        {student.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-darkGray md:px-6">{student.courseTitle}</td>
                  <td className="px-4 py-4 text-darkGray md:px-6">{student.enrollmentDate}</td>
                  <td className="px-4 py-4 md:px-6">
                    <span
                      className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                        student.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-mediumGray">
            Showing {Math.min((currentPage - 1) * itemsPerPage + 1, enrolledStudents.length)} to{' '}
            {Math.min(currentPage * itemsPerPage, enrolledStudents.length)} of {enrolledStudents.length} students
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-darkBlack transition hover:border-primaryBlue hover:text-primaryBlue disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            <span className="rounded-full bg-mediumCyan/40 px-4 py-2 text-sm font-semibold text-darkBlack">
              Page {currentPage} of {totalPages}
            </span>
            <button
              type="button"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="rounded-full bg-primaryBlue px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsEnrolled
