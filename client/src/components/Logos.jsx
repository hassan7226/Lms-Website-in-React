import { assets } from '../assets/assets'

const Logos = () => {
  const items = [
    assets.microsoft_logo,
    assets.walmart_logo,
    assets.adobe_logo,
    assets.paypal_logo,
    assets.accenture_logo,
  ]

  return (
    <section className="px-4 py-12 bg-white pt-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em]">Trusted By Learners From</p>
        <h2 className="mt-2 text-center text-2xl font-extrabold">Top Global Companies</h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {items.map((imgs, index) => (
            <div key={index} className="flex h-12 w-40 items-center justify-center opacity-90">
              <img src={imgs} alt={`logo-${index}`} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
