"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { X, Eye, EyeOff, Lock, Mail, Users } from "lucide-react"
import { signInWithVerification, sendVerificationEmail } from '@/lib/auth'

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
})

type LoginForm = z.infer<typeof loginSchema>

export default function ManagementLogin({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginError, setLoginError] = useState("")
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  })

  const onSubmit = async (data: LoginForm) => {
    try {
      setIsLoading(true)
      setLoginError("")
      
      // Use enhanced Firebase authentication with email verification
      const user = await signInWithVerification(data.email, data.password)
      
      console.log("Login successful:", user)
      
      // Store auth state (in production, use secure httpOnly cookies)
      localStorage.setItem("authUser", JSON.stringify(user))
      
      // Redirect to management dashboard
      window.location.href = "/management/dashboard"
    } catch (error: any) {
      console.error("Login error:", error)
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setLoginError("Invalid email or password")
      } else if (error.code === 'auth/too-many-requests') {
        setLoginError("Too many failed attempts. Please try again later.")
      } else if (error.message?.includes('Access denied')) {
        setLoginError("Access denied. Admin privileges required.")
      } else if (error.message?.includes('verify your email')) {
        setLoginError("Please verify your email before signing in. Check your inbox for the verification link.")
      } else {
        setLoginError("Login failed. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-form-title"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-gray-900 rounded-xl border border-gray-800 shadow-2xl max-h-[90vh] overflow-y-auto p-6"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-600/20 rounded-lg">
              <Users className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Management Portal</h2>
              <p className="text-sm text-gray-400">Access leads and analytics</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Firebase Auth Notice */}
            <div className="p-3 bg-green-950/20 border border-green-900/30 rounded-lg">
              <p className="text-sm text-green-300">
                <strong>Secure Firebase Authentication</strong><br />
                Please use your admin credentials to access the management dashboard.
              </p>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  {...register("email")}
                  type="email"
                  className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="admin@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-10 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="rememberMe"
                {...register("rememberMe")}
                className="h-4 w-4 text-purple-600 border-gray-600 rounded focus:ring-purple-500"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-300">
                Remember me for 30 days
              </label>
            </div>

            {/* Error Message */}
            {loginError && (
              <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-lg">
                <p className="text-sm text-red-400">{loginError}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            {/* Additional Links */}
            <div className="flex justify-between text-sm">
              <button
                type="button"
                className="text-purple-400 hover:text-purple-300"
                onClick={() => alert("Password reset functionality coming soon")}
              >
                Forgot password?
              </button>
              <button
                type="button"
                className="text-purple-400 hover:text-purple-300"
                onClick={() => alert("To request access, contact your system administrator")}
              >
                Request access
              </button>
            </div>

            {/* Email Verification Notice */}
            <div className="p-3 bg-blue-950/20 border border-blue-900/30 rounded-lg">
              <p className="text-sm text-blue-300">
                <strong>Email Verification Required</strong><br />
                Make sure to verify your email address before attempting to sign in.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
