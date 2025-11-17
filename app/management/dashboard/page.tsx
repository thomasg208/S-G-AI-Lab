"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, TrendingUp, Calendar, Filter, Download, Eye, Mail, Phone, Building } from "lucide-react"
import { getCurrentUser, signOutUser } from '@/lib/auth'
import { leadService, Lead } from '@/lib/database'

export default function ManagementDashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [filter, setFilter] = useState<'all' | 'investors' | 'customers'>('all')
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Check authentication
    const initializeDashboard = async () => {
      try {
        // Get current user from Firebase
        const currentUser = await getCurrentUser()
        
        if (!currentUser) {
          window.location.href = '/'
          return
        }

        setUser(currentUser)

        // Fetch real leads from Firebase
        const fetchLeads = async () => {
          try {
            const leadsData = await leadService.getAllLeads()
            setLeads(leadsData)
          } catch (error) {
            console.error('Error fetching leads:', error)
            // Fallback to empty array on error
            setLeads([])
          } finally {
            setIsLoading(false)
          }
        }

        fetchLeads()
      } catch (error) {
        console.error('Authentication error:', error)
        window.location.href = '/'
      }
    }

    initializeDashboard()
  }, [])

  const handleLogout = async () => {
    try {
      await signOutUser()
      // Clear local storage as backup
      localStorage.removeItem('authUser')
      window.location.href = '/'
    } catch (error) {
      console.error('Logout error:', error)
      // Force logout even if Firebase fails
      localStorage.removeItem('authUser')
      window.location.href = '/'
    }
  }

  const updateLeadStatus = async (leadId: string, newStatus: Lead['status']) => {
    try {
      // Update in Firebase
      await leadService.updateLeadStatus(leadId, newStatus)
      
      // Update local state
      setLeads(prev => prev.map(lead => 
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      ))
    } catch (error) {
      console.error('Error updating lead status:', error)
      // Revert local state on error
      setLeads(prev => prev)
    }
  }

  const exportLeads = () => {
    const csvContent = [
      ['Name', 'Email', 'Company', 'Role', 'Phone', 'Products', 'Use Case', 'Timeline', 'Budget', 'Investor', 'Status', 'Submitted'],
      ...leads.map(lead => [
        lead.name,
        lead.email,
        lead.company,
        lead.role,
        lead.phone || '',
        lead.interestedProducts.join(', '),
        lead.useCase,
        lead.timeline || '',
        lead.budget || '',
        lead.isInvestor ? 'Yes' : 'No',
        lead.status,
        new Date(lead.submittedAt).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const filteredLeads = leads.filter(lead => {
    if (filter === 'all') return true
    if (filter === 'investors') return lead.isInvestor
    if (filter === 'customers') return !lead.isInvestor
    return true
  })

  const stats = {
    total: leads.length,
    investors: leads.filter(l => l.isInvestor).length,
    customers: leads.filter(l => !l.isInvestor).length,
    new: leads.filter(l => l.status === 'new').length,
    qualified: leads.filter(l => l.status === 'qualified').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    closed: leads.filter(l => l.status === 'closed').length
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded border-2 border-purple-600/30 border-t-purple-600 mx-auto mb-4"></div>
          <div className="text-white">Loading dashboard...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="text-gray-400 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Site
              </Button>
              <div>
                <h1 className="text-xl font-bold text-white">Management Dashboard</h1>
                <p className="text-sm text-gray-400">Leads & Analytics</p>
                {user && (
                  <p className="text-xs text-gray-500">Logged in as {user.email}</p>
                )}
              </div>
            </div>
            <Button
              onClick={exportLeads}
              disabled={leads.length === 0}
              className="bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-8">
        {/* Stats Cards */}
        <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Leads</p>
                <p className="text-2xl font-bold text-white">{stats.total}</p>
              </div>
              <Users className="h-8 w-8 text-purple-400" />
            </div>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Investors</p>
                <p className="text-2xl font-bold text-green-400">{stats.investors}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Customers</p>
                <p className="text-2xl font-bold text-blue-400">{stats.customers}</p>
              </div>
              <Building className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">New Leads</p>
                <p className="text-2xl font-bold text-yellow-400">{stats.new}</p>
              </div>
              <Calendar className="h-8 w-8 text-yellow-400" />
            </div>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Qualified</p>
                <p className="text-2xl font-bold text-purple-400">{stats.qualified}</p>
              </div>
              <Eye className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-4 mb-6">
          <Filter className="h-5 w-5 text-gray-400" />
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'all' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Leads ({stats.total})
          </button>
          <button
            onClick={() => setFilter('investors')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'investors' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Investors ({stats.investors})
          </button>
          <button
            onClick={() => setFilter('customers')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'customers' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Customers ({stats.customers})
          </button>
        </div>

        {/* Leads Table */}
        {filteredLeads.length === 0 ? (
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-12 text-center">
            <div className="text-gray-400 mb-2">
              {filter === 'all' ? 'No leads yet' : 
               filter === 'investors' ? 'No investor leads yet' : 'No customer leads yet'}
            </div>
            <p className="text-sm text-gray-500">
              Leads will appear here when users submit demo requests through the website.
            </p>
          </div>
        ) : (
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Lead Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Products
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Use Case
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-800/30">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-white">{lead.name}</div>
                          <div className="text-sm text-gray-400">{lead.company}</div>
                          <div className="text-xs text-gray-500">{lead.role}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            <Mail className="h-3 w-3 text-gray-500" />
                            <span className="text-xs text-gray-500">{lead.email}</span>
                          </div>
                          {lead.phone && (
                            <div className="flex items-center space-x-2 mt-1">
                              <Phone className="h-3 w-3 text-gray-500" />
                              <span className="text-xs text-gray-500">{lead.phone}</span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {lead.interestedProducts.map((product) => (
                            <span
                              key={product}
                              className="px-2 py-1 text-xs bg-purple-600/20 text-purple-300 rounded"
                            >
                              {product.replace('-', ' ')}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="max-w-xs">
                          <p className="text-sm text-gray-300 line-clamp-2">{lead.useCase}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded ${
                          lead.isInvestor 
                            ? 'bg-green-600/20 text-green-300' 
                            : 'bg-blue-600/20 text-blue-300'
                        }`}>
                          {lead.isInvestor ? 'Investor' : 'Customer'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={lead.status}
                          onChange={(e) => updateLeadStatus(lead.id!, e.target.value as Lead['status'])}
                          className="text-xs bg-gray-800 border border-gray-700 rounded text-white px-2 py-1"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-400">
                          {new Date(lead.submittedAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs"
                          >
                            View
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
