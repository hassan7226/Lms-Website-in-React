import { Link } from 'react-router-dom'
import { useCourses } from '../context/usecontext'
import { assets } from '../assets/assets'

export const CourseCard = ({ course }) => {
  const { id, image, title, instructor, rating, price, reviews } = course
  return (
    <Link to={`/courses/${id}`}>
      <section className='w-full max-w-sm rounded-lg border bg-white p-4 shadow-md md:w-72'>
        <div className=''>
          <img className='h-36 w-full overflow-hidden rounded-lg object-cover' src={image} alt={title} />
        </div>

        <div>
          <h3 className='mt-4 text-md text-black font-semibold'>{title}</h3>
          <p className='text-mediumGray'>{instructor}</p>
        </div>

        <div className='mt-3'>
          <div className='flex items-center gap-3'>
            <span className='text-sm font-semibold'>{rating.toFixed(1)}</span>

            <div className='flex items-center gap-1'>
              {Array.from({ length: 5 }).map((_, i) => (
                <img
                  key={i}
                  src={i < Math.round(rating) ? assets.star : assets.star_blank}
                  alt={i < Math.round(rating) ? 'star-filled' : 'star-empty'}
                  className='h-4 w-4'
                />
              ))}
            </div>

            <span className='text-sm text-mediumGray'>({reviews})</span>
          </div>

          <div className='mt-3'>
            <span className='text-lg font-bold'>{price}</span>
          </div>
        </div>
      </section>
    </Link>
  )
}



// Remove local dummyCourses - now using context
// The dummyCourses array is now in CourseContext.jsx

const CoursesSection = () => {
  const { courses } = useCourses()
  return (
    <section className='mb-8 bg-white px-4 py-8 md:px-8'>
      <div>
        <h2 className='mb-10 text-center text-3xl font-bold md:text-4xl'>Popular Courses</h2>
        <div className='grid justify-items-center gap-6 md:flex md:flex-wrap md:justify-center'>
          {courses.slice(0, 4).map((c, i) => (
            <CourseCard key={i} course={c} />
          ))}
        </div>
      </div>
      <div className='mx-auto mt-10 flex w-full max-w-max justify-center rounded-sm border px-5 py-2 shadow md:w-max'>
        <Link to="/student/courses">
          View All Courses
        </Link>
      </div>
    </section>
  )
}

export default CoursesSection
