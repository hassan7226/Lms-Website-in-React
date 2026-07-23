import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { assets } from '../../assets/assets'
import { useCourses } from '../../context/usecontext'

const CourseDetails = () => {
  const { courseId } = useParams()
  const { getCourseById } = useCourses()
  const course = getCourseById(courseId)

  if (!course) {
    return (
      <div className='min-h-screen'>
        <Navbar />
        <main className=''>
          <h1>Course not found</h1>
        </main>
        <Footer />
      </div>
    )
  }

  const shortDescription = course.shortDescription ||
    'Master practical skills with guided lessons, real projects, and step-by-step learning.'

  const longDescription = course.longDescription ||
    'This course helps you build job-ready skills through clear lessons and hands-on work. You will learn by building practical outputs and following a structured path from basics to advanced topics.'

  const demoVideo = course.demoVideo || 'https://www.youtube.com/embed/dQw4w9WgXcQ'

  return (
    <div className=''>
      <Navbar />

      <main className='min-h-screen bg-gray-50 px-4 py-10 md:px-24'>
        <section className='max-w-7xl mx-auto'>
          <div className='flex flex-col gap-8 lg:flex-row'>
            <div className='order-last lg:order-first w-full lg:w-2/3'>
              <div className='bg-transparent'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>{course.title}</h1>
                <p className='mt-4 text-lg text-gray-600'>{shortDescription}</p>

                <div className='flex flex-wrap gap-2 mt-4'>
                  {(course.tags || []).map((t) => (
                    <span key={t} className='text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100'>{t}</span>
                  ))}
                </div>

                <div className='flex flex-wrap gap-6 mt-6 text-sm text-gray-600'>
                  <div>Level: <span className='font-medium text-gray-800'>{course.level}</span></div>
                  <div>Language: <span className='font-medium text-gray-800'>{course.language}</span></div>
                  <div>Subtitles: <span className='font-medium text-gray-800'>{(course.subtitles || []).join(', ')}</span></div>
                </div>

                <div className='flex flex-col sm:flex-row sm:items-center gap-3 mt-6'>
                  <div className='flex items-center gap-3 w-full sm:w-auto'>
                    <div className='text-2xl font-semibold text-gray-900'>{course.rating.toFixed(1)}</div>
                    <div className='flex items-center space-x-1'>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <img
                          key={i}
                          className='w-4 h-4'
                          src={i < Math.round(course.rating) ? assets.star : assets.star_blank}
                          alt={i < Math.round(course.rating) ? 'star-filled' : 'star-empty'}
                        />
                      ))}
                      <span className='text-sm text-gray-500'>({course.reviews})</span>
                    </div>
                  </div>

                  <div className='text-sm text-gray-600 w-full sm:w-auto mt-2 sm:mt-0'>Instructor: <span className='font-medium text-gray-800'>{course.instructor}</span></div>
                  <div className='text-sm text-gray-600 w-full sm:w-auto mt-2 sm:mt-0'>{course.duration} • {course.lessons} lessons</div>
                </div>

                <section className='mt-10'>
                  <h2 className='text-xl font-semibold text-gray-900 mb-4'>Course Structure & Demo</h2>
                  <div className='flex flex-col lg:flex-row gap-6'>
                    <div className='flex-grow'>
                      <div className='w-full h-64 md:h-80 rounded-md overflow-hidden shadow-sm bg-black'>
                        <iframe
                          className='w-full h-full'
                          src={demoVideo}
                          title="Course demo video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    <div className='w-full lg:w-1/2 bg-transparent'>
                      {(course.curriculum || []).map((module, mi) => (
                        <details key={mi} className='bg-white rounded border'>
                          <summary className='cursor-pointer px-4 py-3 flex justify-between items-center text-sm font-medium text-gray-800'>
                            <div className='flex items-center gap-3'>
                              <span className='w-3 h-3 rounded-full bg-gray-200 inline-block' />
                              <span>{module.title}</span>
                            </div>
                            <div className='text-sm text-gray-500'>{module.total}</div>
                          </summary>

                          <ul className='divide-y divide-gray-300'>
                            {(module.lectures || []).map((lec, li) => (
                              <li key={li} className='px-4 py-3 flex items-start justify-between gap-4'>
                                <div className='flex items-start gap-3 min-w-0'>
                                  <img src={assets.play_icon} alt="play" className='w-6 h-6 flex-shrink-0 mt-1' />

                                  <div className='min-w-0'>
                                    <div className='flex items-center gap-2 flex-wrap'>
                                      <span className='font-medium text-gray-800 truncate'>{lec.title}</span>
                                      {lec.quiz && <span className='ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded'>Quiz</span>}
                                      {lec.assignment && <span className='ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded'>Assignment</span>}
                                    </div>

                                    {lec.description && <p className='mt-1 text-sm text-gray-500 truncate'>{lec.description}</p>}

                                    
                                  </div>
                                </div>

                                <div className='text-sm text-gray-500 flex-shrink-0 ml-4'>{lec.duration}</div>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </div>
                </section>

                <section className='mt-10'>
                  <h2 className='text-xl font-semibold text-gray-900 mb-3'>About this course</h2>
                  <p className='text-gray-600'>{longDescription}</p>

                  <div className='mt-6'>
                    <h3 className='text-lg font-medium text-gray-900 mb-2'>What's included</h3>
                    <ul className='list-disc list-inside text-gray-600 space-y-1'>
                      <li>Lifetime access with free updates</li>
                      <li>Step-by-step, hands-on project guidance</li>
                      <li>Downloadable resources and source code</li>
                      <li>Quizzes to test your knowledge</li>
                      <li>Certificate of completion</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>

            <aside className='order-first w-full lg:order-last lg:w-1/3'>
              <div className='sticky top-24 bg-white border rounded-lg shadow p-6'>
                <img src={course.image} alt={course.title} className='w-full rounded-md object-cover h-40 mb-4' />

                <div className='flex items-center gap-3 mb-4'>
                  <img src={assets.time_left_clock_icon} alt="time left" className='w-6 h-6' />
                  <p className='text-sm text-red-600 font-medium'>5 days left at this price!</p>
                </div>

                <div className='flex items-baseline gap-3 mb-4'>
                  <div className='text-3xl font-bold text-gray-900'>{course.price}</div>
                  <div className='text-sm text-gray-500 line-through'>$49.99</div>
                  <div className='text-sm bg-red-100 text-red-600 px-2 py-1 rounded'>20% off</div>
                </div>

                <div className='flex items-center gap-3 mb-4'>
                  <div className='flex items-center space-x-1'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <img
                        key={i}
                        className='w-4 h-4'
                        src={i < Math.round(course.rating) ? assets.star : assets.star_blank}
                        alt={i < Math.round(course.rating) ? 'star-filled' : 'star-empty'}
                      />
                    ))}
                  </div>
                  <div className='text-sm text-gray-700 font-medium'>{course.rating}</div>
                </div>

                <div className='flex justify-between text-sm text-gray-600 mb-6'>
                  <div className='flex items-center gap-2'>
                    <img src={assets.time_clock_icon} alt="duration" className='w-4 h-4' />
                    <span>{course.duration}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={assets.time_clock_icon} alt="lessons" className='w-4 h-4' />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>

                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md mb-4'>Enroll Now</button>

                <div className='text-sm text-gray-600'>
                  <p className='font-medium mb-2'>What's in the course?</p>
                  <ul className='list-disc list-inside space-y-1'>
                    <li>Lifetime access</li>
                    <li>Step-by-step, hands-on project guidance</li>
                    <li>Downloadable resources and source code</li>
                    <li>Quizzes to test your knowledge</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default CourseDetails
