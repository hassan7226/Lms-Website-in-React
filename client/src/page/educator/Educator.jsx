import { Navigate, Outlet, Link } from 'react-router-dom'
import EducatorSidebar from './EducatorSidebar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Educator = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="flex flex-col md:flex-row">
        <EducatorSidebar />

        <main className="flex-1 p-4 sm:p-6 md:p-8">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export const EducatorIndex = () => <Navigate to="/educator/dashboard" replace />

export default Educator
