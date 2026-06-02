import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const dummyEnrollments = [
  {
    id: 'c1',
    title: 'React for Beginners',
    instructor: 'Jane Doe',
    progress: 72,
    lessonsCompleted: 18,
    totalLessons: 25,
  },
  {
    id: 'c2',
    title: 'Advanced JavaScript',
    instructor: 'John Smith',
    progress: 42,
    lessonsCompleted: 10,
    totalLessons: 24,
  },
  {
    id: 'c3',
    title: 'CSS Layouts and Responsive Design',
    instructor: 'Aisha Khan',
    progress: 95,
    lessonsCompleted: 19,
    totalLessons: 20,
  },
]

const ProgressBar = ({ value = 0 }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className="h-3 bg-primaryBlue"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  )
}

const MyEnrollments = () => {
  const [enrollments] = useState(dummyEnrollments)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h1 className="text-2xl font-semibold mb-4">My Enrollments</h1>
          <p className="text-sm text-mediumGray mb-6">Courses you're currently enrolled in and your progress.</p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {enrollments.map((c) => (
              <div key={c.id} className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-medium">{c.title}</h2>
                    <p className="text-sm text-mediumGray">By {c.instructor}</p>
                  </div>
                  <div className="text-sm text-right">
                    <div className="text-xl font-semibold">{c.progress}%</div>
                    <div className="text-xs text-mediumGray">{c.lessonsCompleted}/{c.totalLessons} lessons</div>
                  </div>
                </div>

                <div className="mt-4">
                  <ProgressBar value={c.progress} />
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <Link to={`/courses/${c.id}`} className="text-sm text-primaryBlue hover:underline">
                    Continue course
                  </Link>
                  <button className="rounded-full bg-gray-100 px-3 py-1 text-sm">View details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MyEnrollments
