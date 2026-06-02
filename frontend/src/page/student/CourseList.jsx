import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { CourseCard } from '../../components/CoursesSection'
import { useCourses } from '../../context/usecontext'

const CourseList = () => {
  const { courses } = useCourses()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [filteredCourses, setFilteredCourses] = useState(courses)

  useEffect(() => {
    const searchQuery = searchParams.get('search')
    if (searchQuery) {
      setQuery(searchQuery)
      filterCourses(searchQuery)
    }
  }, [searchParams])

  const handleSearch = (e) => {
    e.preventDefault()
    const q = query.trim().toLowerCase()
    if (!q) {
      setFilteredCourses(courses)
      return
    }
    filterCourses(q)
  }

  const filterCourses = (q) => {
    const queryLower = q.trim().toLowerCase()
    if (!queryLower) {
      setFilteredCourses(courses)
      return
    }

    const results = courses.filter((c) => {
      return (
        c.title.toLowerCase().includes(queryLower) ||
        c.instructor.toLowerCase().includes(queryLower) ||
        c.tags.some((tag) => tag.toLowerCase().includes(queryLower))
      )
    })

    setFilteredCourses(results)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="px-4 py-10 md:px-8">
        <section className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-8 rounded-3xl bg-white px-5 py-5 shadow-sm md:flex-row md:items-center md:justify-between md:px-10">
          <div className="">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primaryBlue">
                Course Library
              </p>
              <h1 className="mt-3 text-2xl font-bold text-darkBlack sm:text-3xl">
                Explore all available courses
              </h1>
              <p className="mt-4 text-base leading-7 text-darkGray">
                Browse the full collection of courses and choose the path that
                fits your learning goals.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-mediumGray">
              <span>{courses.length} courses available</span>
              <span className="hidden sm:block">•</span>
              <span>Updated regularly</span>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <form onSubmit={handleSearch} className="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-0">
              <input
                type="text"
                placeholder="Search courses..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  filterCourses(e.target.value)
                }}
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50 md:w-80"
              />
              <button type="submit" className="rounded bg-primaryBlue px-6 py-3 text-white hover:bg-blue-600 md:-ml-24">
                Search
              </button>
            </form>

            {filteredCourses.length === 0 && (
              <p className="mt-4 text-sm text-red-600">No courses found for "{query}"</p>
            )}
          </div>
          </div>

          <div className="mt-10 grid justify-items-center gap-6 md:flex md:flex-wrap md:justify-center">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id || index} course={course} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default CourseList
