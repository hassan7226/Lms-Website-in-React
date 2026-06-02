import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-8 bg-darkBlack px-4 py-10 pt-12 text-white md:px-8 lg:px-32'>
      <div className='flex w-full max-w-7xl flex-col items-start justify-center gap-12 md:flex-row md:items-start md:justify-between'>
        <div className='flex flex-col items-start justify-center'>
          <img className='h-8' src={assets.logo_dark} alt="Company logo" />
          <p className='mt-4 max-w-sm text-sm text-gray-300 sm:text-left'>
            LearnX helps learners build practical skills through flexible,
            high-quality online courses.
          </p>
        </div>

        <nav aria-label="Footer links">
          <h3 className='text-lg font-bold'>Links</h3>
          <ul className='mt-4 flex flex-wrap gap-3 text-sm text-gray-300 md:flex-col md:gap-2'>
            <li><a href="/about" className='hover:underline'>About Us</a></li>
            <li><a href="/courses" className='hover:underline'>Courses</a></li>
            <li><a href="/contact" className='hover:underline'>Contact</a></li>
            <li><a href="/privacy" className='hover:underline'>Privacy Policy</a></li>
          </ul>
        </nav>

        <div className='flex w-full max-w-xs flex-col gap-4 md:max-w-sm'>
          <h3 className='text-lg font-bold'>Newsletter</h3>
          <p className='text-sm text-gray-300'>Subscribe to get updates on new courses and learning tips.</p>
          <form className='flex flex-col gap-2 md:flex-row'>
            <input className='w-full rounded-md bg-[#1F2937] p-3 text-sm outline-none' type="email" placeholder="Enter your email" />
            <button className='rounded-md bg-primaryBlue px-6 py-3 text-sm font-semibold' type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <hr className="w-full max-w-7xl border-gray-600" />
      <div>
        <p>Copyright © 2026 LearnX. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
