import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
  return (
    <section className="min-h-screen bg-slate-50 grid place-items-center p-4">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" fallbackRedirectUrl="/" />
    </section>
  )
}

export default SignInPage
