"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle, 
  Mail, 
  Phone, 
  Building, 
  User, 
  Calendar,
  DollarSign,
  Send,
  X
} from "lucide-react"
import { leadService } from '@/lib/database'

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  phone: z.string().optional(),
  interestedProducts: z.array(z.string()).min(1, "Please select at least one product"),
  useCase: z.string().min(10, "Please provide more details about your use case"),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  isInvestor: z.boolean().default(false),
  status: z.enum(['new', 'contacted', 'qualified', 'closed']).default('new'),
})

type DemoForm = z.infer<typeof formSchema>

const products = [
  { id: "urban-vantage", name: "Urban Vantage™", description: "Precision real-estate analytics platform designed to empower investors, developers, and property managers with intelligent data-driven insights" },
  { id: "crypto-lab", name: "Crypto Lab™", description: "Next-generation educational platform with open-source crypto and blockchain courses, interactive lessons, and AGI-powered mentorship" },
  { id: "nexalytica", name: "Nexalytica™", description: "Next-gen analytics platform with AI-driven adaptive learning and personalized education paths" },
  { id: "qft", name: "QFT™", description: "Quantum financial tools with game theory simulation, AGI integration, and real-time learning engine for DeFi" },
  { id: "guardian-ai", name: "Guardian AI™", description: "AI security suite with autonomous monitoring and threat protection" },
  { id: "fusioncell", name: "FusionCell™", description: "AI-driven battery digital twin platform revolutionizing energy management with predictive analytics" },
]

const timelines = [
  { value: "immediate", label: "Immediate (ASAP)" },
  { value: "month", label: "Within 1 month" },
  { value: "quarter", label: "Within 3 months" },
  { value: "half-year", label: "Within 6 months" },
  { value: "year", label: "Within 1 year" },
]

const budgets = [
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-250k", label: "$100,000 - $250,000" },
  { value: "250k+", label: "$250,000+" },
]

export default function DemoRequestForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<DemoForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interestedProducts: [],
      isInvestor: false,
      status: 'new',
    },
  })

  const watchedProducts = watch("interestedProducts")
  const isInvestor = watch("isInvestor")

  const onSubmit = async (data: DemoForm) => {
    try {
      setIsSubmitting(true)
      setError("")
      
      // Save lead to Firebase
      const leadId = await leadService.createLead(data)
      
      console.log("Lead created successfully:", leadId)
      setIsSubmitted(true)
      
      // Reset form after successful submission
      reset()
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
      }, 3000)
      
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("Failed to submit request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleProduct = (productId: string) => {
    const currentProducts = watchedProducts || []
    if (currentProducts.includes(productId)) {
      setValue("interestedProducts", currentProducts.filter(p => p !== productId))
    } else {
      setValue("interestedProducts", [...currentProducts, productId])
    }
  }

  if (!isOpen) return null

  if (isSubmitted) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-black/50 p-4"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-md bg-gray-900 rounded-xl border border-gray-800 shadow-2xl p-8 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600/20 mb-6">
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
          <p className="text-gray-300 mb-6">
            Thank you for your interest. Our team will review your request and get back to you within 24 hours.
          </p>
          <Button
            onClick={onClose}
            className="bg-purple-600 text-white hover:bg-purple-700"
          >
            Close
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-2xl bg-gray-900 rounded-xl border border-gray-800 shadow-2xl max-h-[90vh] overflow-y-auto"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div>
            <h2 className="text-2xl font-bold text-white">Request a Demo</h2>
            <p className="text-gray-400">Tell us about your needs and we'll be in touch</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Contact Information */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    {...register("company")}
                    type="text"
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Acme Corp"
                  />
                </div>
                {errors.company && (
                  <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Role *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    {...register("role")}
                    type="text"
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="CTO, Product Manager, etc."
                  />
                </div>
                {errors.role && (
                  <p className="mt-1 text-sm text-red-400">{errors.role.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  I am a... *
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      {...register("isInvestor")}
                      value="false"
                      className="text-purple-600 border-gray-600 focus:ring-purple-500"
                    />
                    <span className="text-gray-300">Customer</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      {...register("isInvestor")}
                      value="true"
                      className="text-purple-600 border-gray-600 focus:ring-purple-500"
                    />
                    <span className="text-gray-300">Investor</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Product Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Interested Products *
              </label>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <label
                    key={product.id}
                    className={`flex items-start space-x-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                      watchedProducts?.includes(product.id)
                        ? 'border-purple-500 bg-purple-600/20'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={product.id}
                      checked={watchedProducts?.includes(product.id)}
                      onChange={() => toggleProduct(product.id)}
                      className="mt-1 text-purple-600 border-gray-600 rounded focus:ring-purple-500"
                    />
                    <div>
                      <div className="font-medium text-white">{product.name}</div>
                      <div className="text-sm text-gray-400">{product.description}</div>
                    </div>
                  </label>
                ))}
              </div>
              {errors.interestedProducts && (
                <p className="mt-1 text-sm text-red-400">{errors.interestedProducts.message}</p>
              )}
            </div>

            {/* Use Case */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Use Case Details *
              </label>
              <textarea
                {...register("useCase")}
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Describe how you plan to use our products and what specific problems you're trying to solve..."
              />
              {errors.useCase && (
                <p className="mt-1 text-sm text-red-400">{errors.useCase.message}</p>
              )}
            </div>

            {/* Additional Details */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Timeline
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <select
                    {...register("timeline")}
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <select
                    {...register("budget")}
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget) => (
                      <option key={budget.value} value={budget.value}>
                        {budget.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-lg">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 animate-spin rounded border-2 border-white/30 border-t-white" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Submit Request</span>
                  </div>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
