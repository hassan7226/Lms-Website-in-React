import { useState } from 'react'
import { assets } from '../assets/assets'
import { useCourses } from '../context/usecontext'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showResults, setShowResults] = useState(false)
  const { courses } = useCourses()
  const navigate = useNavigate()

  const filteredCourses = searchQuery.trim()
    ? courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : []

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
      setShowResults(false)
    }
  }

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`)
    setSearchQuery('')
    setShowResults(false)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form className="flex w-full flex-row gap-0" onSubmit={handleSearch}>
        <div className="relative w-full flex-1">
          <img
            src={assets.search_icon}
            alt="search"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search courses"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setShowResults(e.target.value.trim() !== '')
            }}
            className="w-full rounded-2xl border pl-12 pr-5 py-4 text-base outline-none"
          />
        </div>
        <button
          type="submit"
          className="z-10 -ml-28 rounded-2xl px-8 sm:px-12 py-4 bg-primaryBlue text-white text-base font-semibold transition hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {showResults && filteredCourses.length > 0 && (
        <div className="absolute z-50 mt-2 w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-gray-200">
          <div className="max-h-96 overflow-y-auto">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => handleCourseClick(course.id)}
                className="flex items-center gap-4 p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer transition"
              >
                <img src={course.image} alt={course.title} className="w-16 h-16 rounded object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.instructor}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-600">{course.rating} ({course.reviews} reviews)</span>
                    <span className="text-sm font-semibold text-primaryBlue">{course.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showResults && searchQuery.trim() && filteredCourses.length === 0 && (
        <div className="absolute z-50 mt-2 w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-gray-200 p-4 text-center text-gray-600">
          No courses found for "{searchQuery}"
        </div>
      )}
    </div>
  )
}

export default SearchBar
