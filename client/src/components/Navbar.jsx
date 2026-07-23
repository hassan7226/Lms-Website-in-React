import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-lightCyan">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={assets.logo} alt="Edemy logo" className="h-8" />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <SignedOut>
            <Link to="/educator/add-course" className="text-sm font-medium text-darkGray hover:text-darkBlack">
              Add Courses
            </Link>
            <span className="text-mediumGray">|</span>
          </SignedOut>

          <SignedIn>
            <Link to="/my-enrollments" className="text-sm font-medium text-darkGray hover:text-darkBlack">
              My Enrollments
            </Link>
            <span className="text-mediumGray">|</span>
          </SignedIn>

          <SignedOut>
            <Link to="/sign-in" className="text-sm font-medium text-darkGray hover:text-darkBlack">
              Login
            </Link>
            <Link
              to="/sign-up"
              className="rounded-full px-4 py-2 text-sm text-white font-semibold bg-gradient-to-r from-primaryBlue to-cyan-400 shadow-sm"
            >
              Create Account
            </Link>
          </SignedOut>

          <SignedIn>
            <Link to="/educator/dashboard" className="text-sm font-medium text-darkGray hover:text-darkBlack">
              Educator Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        <button
          type="button"
          className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-darkBlack shadow-sm transition hover:border-primaryBlue hover:text-primaryBlue lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white/95 px-4 py-4 shadow-lg backdrop-blur lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mediumGray">Navigation</p>
              <span className="rounded-full bg-lightCyan px-3 py-1 text-xs font-medium text-darkGray">Menu</span>
            </div>

            <div className="flex flex-col gap-2">
              <SignedOut>
                <Link
                  to="/educator/add-course"
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-darkGray transition hover:border-primaryBlue hover:bg-slate-50 hover:text-darkBlack"
                  onClick={() => setIsOpen(false)}
                >
                  Add Courses
                </Link>
              </SignedOut>

              <SignedIn>
                <Link
                  to="/my-enrollments"
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-darkGray transition hover:border-primaryBlue hover:bg-slate-50 hover:text-darkBlack"
                  onClick={() => setIsOpen(false)}
                >
                  My Enrollments
                </Link>
              </SignedIn>

              <SignedOut>
                <Link
                  to="/sign-in"
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-darkGray transition hover:border-primaryBlue hover:bg-slate-50 hover:text-darkBlack"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/sign-up"
                  className="rounded-xl bg-gradient-to-r from-primaryBlue to-cyan-400 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                  onClick={() => setIsOpen(false)}
                >
                  Create Account
                </Link>
              </SignedOut>

              <SignedIn>
                <Link
                  to="/"
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-darkGray transition hover:border-primaryBlue hover:bg-slate-50 hover:text-darkBlack"
                  onClick={() => setIsOpen(false)}
                >
                  Educator Dashboard
                </Link>
                <div className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
                  <span className="text-sm font-medium text-darkGray">Account</span>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
