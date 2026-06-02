import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.jsx'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {publishableKey ? (
      <ClerkProvider publishableKey={publishableKey} afterSignOutUrl="/">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClerkProvider>
    ) : (
      <div className="min-h-screen grid place-items-center bg-slate-50 p-6 text-center">
        <div className="max-w-lg rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-darkBlack">Clerk is not configured</h1>
          <p className="mt-3 text-sm text-darkGray">
            Add <strong>VITE_CLERK_PUBLISHABLE_KEY</strong> to your <strong>.env</strong> file to enable authentication.
          </p>
        </div>
      </div>
    )}
  </StrictMode>,
)
