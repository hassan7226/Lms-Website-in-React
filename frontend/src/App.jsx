import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import CoursesSection from './components/CoursesSection'
import { CourseProvider } from './context/usecontext'
import CourseList from './page/student/CourseList'
import CourseDetails from './page/student/CourseDetails'
import StudentCourseList from './page/student/CourseList'
import StudentCourseDetails from './page/student/CourseDetails'
import Educator, { EducatorIndex } from './page/educator/Educator.jsx'
import Dashboard from './page/educator/Dashboard.jsx'
import AddCourse from './page/educator/AddCourse.jsx'
import MyCourses from './page/educator/MyCourses.jsx'
import StudentsEnrolled from './page/educator/StudentsEnrolled.jsx'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './components/RequireAuth.jsx'
import SignInPage from './page/auth/SignInPage.jsx'
import SignUpPage from './page/auth/SignUpPage.jsx'
import MyEnrollments from './page/student/MyEnrollments'

const App = () => {
  return (
    <CourseProvider>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-slate-50">
              <Navbar />
              <Hero />
              <Logos />
              <CoursesSection />
              <TestimonialsSection />
              <CTASection />
              <Footer />
            </div>
          }
        />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />

        <Route path="/student/courses" element={<StudentCourseList />} />
        <Route path="/student/courses/:courseId" element={<StudentCourseDetails />} />

        <Route
          path="/educator"
          element={
            <RequireAuth>
              <Educator />
            </RequireAuth>
          }
        >
          <Route index element={<EducatorIndex />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="students-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </CourseProvider>
  )
}

export default App
