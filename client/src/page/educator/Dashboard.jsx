import { assets } from '../../assets/assets'

const stats = [
  {
    label: 'Total Enrollments',
    value: '1,240',
    icon: assets.person_tick_icon,
  },
  {
    label: 'Total Courses',
    value: '18',
    icon: assets.my_course_icon,
  },
  {
    label: 'Total Earning',
    value: '$24,560',
    icon: assets.earning_icon,
  },
]

const latestEnrollments = [
  {
    studentName: 'Aarav Patel',
    studentImage: assets.profile_img_1,
    courseTitle: 'Complete React Development',
    enrollmentDate: 'May 20, 2026',
  },
  {
    studentName: 'Sara Ahmed',
    studentImage: assets.profile_img_2,
    courseTitle: 'UI/UX Design Fundamentals',
    enrollmentDate: 'May 19, 2026',
  },
  {
    studentName: 'Michael Brown',
    studentImage: assets.profile_img_3,
    courseTitle: 'Data Analytics With Python',
    enrollmentDate: 'May 18, 2026',
  },
]

const Dashboard = () => {
  return (
    <section className="space-y-8">
    

      <div className="grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primaryBlue/20 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-mediumCyan/60 transition-transform duration-300 group-hover:scale-105 group-hover:bg-mediumCyan">
              <img src={stat.icon} alt={stat.label} className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
            </div>

            <div>
              <p className="text-sm font-medium text-mediumGray transition-colors duration-300 group-hover:text-primaryBlue">
                {stat.label}
              </p>
              <p className="mt-1 text-2xl font-black text-darkBlack transition-colors duration-300 group-hover:text-primaryBlue">
                {stat.value}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-primaryBlue/20 hover:shadow-lg">
        <div className="border-b border-gray-100 px-4 py-5 md:px-6">
          <h2 className="text-xl font-bold text-darkBlack">Latest Enrollments</h2>
          <p className="mt-1 text-sm text-mediumGray">Recent students joining your courses.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[640px] divide-y divide-gray-100 md:min-w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-sm font-semibold text-mediumGray">
                <th className="px-4 py-4 md:px-6">Student Name</th>
                <th className="px-4 py-4 md:px-6">Course Title</th>
                <th className="px-4 py-4 md:px-6">Enrollment Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {latestEnrollments.map((item) => (
                <tr
                  key={`${item.studentName}-${item.courseTitle}`}
                  className="align-middle transition-colors duration-300 hover:bg-mediumCyan/30"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.studentImage}
                        alt={item.studentName}
                        className="h-11 w-11 rounded-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <span className="font-semibold text-darkBlack transition-colors duration-300 hover:text-primaryBlue">
                        {item.studentName}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-darkGray transition-colors duration-300 hover:text-primaryBlue md:px-6">
                    {item.courseTitle}
                  </td>
                  <td className="px-4 py-4 text-darkGray md:px-6">{item.enrollmentDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
