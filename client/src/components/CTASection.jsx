const CTASection = () => {
  return (
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Ready to start learning?</h2>
        <p className="max-w-3xl text-center text-gray-600">Join thousands of learners and advance your career with our curated courses. Learn from industry experts, gain hands-on experience, and earn recognized certifications. Start your learning journey today and unlock your full potential.</p>

        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
          <button className="rounded bg-primaryBlue px-10 py-3 text-white hover:bg-blue-600">Get Started</button>
          <button className="rounded border border-gray-300 px-10 py-3 text-gray-700 hover:bg-blue-100">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
