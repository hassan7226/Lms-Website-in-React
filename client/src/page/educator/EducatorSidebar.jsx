import { Link, useLocation } from 'react-router-dom'
import { assets } from '../../assets/assets'

const NavItem = ({ to, icon, label }) => {
  const location = useLocation()
  const isActive = location.pathname === to
  return (
    <Link to={to} className={`flex items-center gap-3 px-4 py-3 rounded-md transition ${isActive ? 'bg-primaryBlue text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
      <img src={icon} alt={label} className={`w-5 h-5 ${isActive ? 'filter brightness-0 invert' : ''}`} />
      <span className="font-medium">{label}</span>
    </Link>
  )
}

const EducatorSidebar = () => {
  return (
    <aside className="w-full border-b bg-white p-3 md:sticky md:top-0 md:h-screen md:w-64 md:border-b-0 md:border-r md:p-6">
      <nav className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
        <NavItem to="/educator/dashboard" icon={assets.home_icon} label="Dashboard" />
        <NavItem to="/educator/add-course" icon={assets.add_icon} label="Add Course" />
        <NavItem to="/educator/my-courses" icon={assets.my_course_icon} label="My Courses" />
        <NavItem to="/educator/students-enrolled" icon={assets.person_tick_icon} label="Students Enrolled" />
      </nav>
    </aside>
  )
}

export default EducatorSidebar
