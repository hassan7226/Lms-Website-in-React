import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-lightCyan to-white min-h-[72vh] flex items-center px-4 py-12 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center px-4">
        <p className="text-sm font-extrabold uppercase tracking-[0.35em] text-darkGray">Trusted by learners worldwide</p>

        <h1 className="mt-5 max-w-4xl text-4xl text-darkBlack font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Empower your future with the courses designed to <span className="text-primaryBlue">fit your choice.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg text-darkGray">
          We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
        </p>

        <div className="w-full px-4 py-12 sm:py-14">
          <div className="mx-auto w-full max-w-3xl">
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
