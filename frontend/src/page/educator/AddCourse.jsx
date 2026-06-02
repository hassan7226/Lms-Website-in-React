import { assets } from '../../assets/assets'

const AddCourse = () => {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primaryBlue">Add Course</p>
        <h1 className="mt-2 text-2xl font-black text-darkBlack md:text-3xl">Create a new course</h1>
      </div>

      <form className="space-y-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-darkBlack" htmlFor="courseTitle">
              Course Title
            </label>
            <input
              id="courseTitle"
              type="text"
              placeholder="Enter course title"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-primaryBlue focus:ring-2 focus:ring-primaryBlue/10"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-darkBlack" htmlFor="courseHeading">
              Course Heading
            </label>
            <input
              id="courseHeading"
              type="text"
              placeholder="Enter course heading"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-primaryBlue focus:ring-2 focus:ring-primaryBlue/10"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-darkBlack" htmlFor="courseDescription">
              Course Description
            </label>
            <textarea
              id="courseDescription"
              rows="4"
              placeholder="Course description"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-primaryBlue focus:ring-2 focus:ring-primaryBlue/10"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-darkBlack" htmlFor="coursePrice">
              Course Price
            </label>
            <input
              id="coursePrice"
              type="number"
              placeholder="0.00"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-primaryBlue focus:ring-2 focus:ring-primaryBlue/10"
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-darkBlack">Course Thumbnail</p>
            <label
              htmlFor="thumbnailUpload"
              className="flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-slate-50 px-4 py-4 text-center transition hover:border-primaryBlue hover:bg-mediumCyan/20"
            >
              <img src={assets.upload_area} alt="Upload thumbnail" className="h-16 w-16 object-contain" />
              <span className="mt-2 text-sm font-medium text-darkGray">Upload thumbnail</span>
              <span className="mt-1 text-xs text-mediumGray">PNG, JPG or WEBP</span>
            </label>
            <input id="thumbnailUpload" type="file" accept="image/*" className="hidden" />
          </div>
        </div>

        <div className="flex justify-stretch md:justify-end">
          <button
            type="submit"
            className="w-full rounded-xl bg-primaryBlue px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg md:w-auto"
          >
            Add Course
          </button>
        </div>
      </form>
    </section>
  )
}

export default AddCourse
