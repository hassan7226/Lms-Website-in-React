import { assets } from '../assets/assets'
import { useCourses } from '../context/usecontext'

const TestimonialCard = ({ image, name, role, rating, text }) => {
  return (
    <div className='w-full max-w-sm rounded-lg bg-white p-4 shadow-md md:max-w-sm'>
      <div className="flex items-center gap-4 mb-4 bg-lightGray p-4 rounded-lg">
        <img src={image} alt={name} className="w-14 h-14 rounded-full" />
        <div>
          <div className="font-bold text-md sm:text-xl">{name}</div>
          <div className="text-sm sm:text-md text-gray-600">{role}</div>
        </div>
      </div>

      <div className="flex items-center mx-auto mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <img
            key={i}
            src={i < Math.round(rating) ? assets.star : assets.star_blank}
            alt={i < Math.round(rating) ? 'filled' : 'empty'}
            className="flex h-5 w-5"
          />
        ))}
      </div>

      <p className="">{text}</p>
    </div>
  )
}

const TestimonialsSection = () => {
  const { testimonials } = useCourses()
  return (
    <section className='bg-white px-4 py-10 md:px-8 md:py-4'>
        <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">Testimonials</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600 md:mb-12">Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.</p>
      <div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
