import { SignUp, useUser } from '@clerk/clerk-react'

const SignUpPage = () => {
 
  return (
    <section className="min-h-screen bg-slate-50 grid place-items-center p-4">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" fallbackRedirectUrl="/" />
    </section>
  )
}

export default SignUpPage
