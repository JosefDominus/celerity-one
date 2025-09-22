"use client"

import { useState } from "react"
import {
  Home,
  Settings,
  User,
  FileText,
  BarChart3,
  Mail,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ChartPie,
  IdCardIcon,
  Fingerprint,
  PhilippinePeso,
  BanknoteArrowDown,
} from "lucide-react"

const sidebarItems = [
  { icon: ChartPie, label: "Overview/Analytics", href: "/" },
]

const sidebarItems2 = [
  { icon: IdCardIcon, label: "Employee Management", href: "/" },
  { icon: Fingerprint, label: "Attendance and Biometrics", href: "/profile" },
  { icon: FileText, label: "Payroll Processing", href: "/documents" },
]

const sidebarItems3 = [
  { icon: PhilippinePeso, label: "Sales and Revenue", href: "/" },
  { icon: BanknoteArrowDown, label: "Expenses", href: "/profile" },
]

export default function Sidebar({ className = "", ...props }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed)
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen)

  return (
    <>
      {/* Mobile menu button */}
      <button
        className={`fixed top-4 left-4 z-50 md:hidden p-2 rounded-md hover:bg-gray-100 ${className}`}
        onClick={toggleMobile}
      >
        {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMobile} />}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out md:relative md:translate-x-0 ${
          isCollapsed ? "w-16" : "w-64"
        } ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} ${className}`}
        {...props}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
            {!isCollapsed && <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>}
            <button
              onClick={toggleCollapsed}
              className="hidden md:flex h-8 w-8 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100"
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none ${
                    isCollapsed ? "justify-center px-2" : ""
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                </a>
              )
            })}
          </nav>

           {/* Header */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
            {!isCollapsed && <h2 className="text-lg font-semibold text-gray-900">Human Resources</h2>}
           
          </div>
          



           {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {sidebarItems2.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none ${
                    isCollapsed ? "justify-center px-2" : ""
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                </a>




                



              )
            })}
          </nav>

                     {/* Header */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
            {!isCollapsed && <h2 className="text-lg font-semibold text-gray-900">Financial Management</h2>}
           
          </div>
          



           {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {sidebarItems3.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none ${
                    isCollapsed ? "justify-center px-2" : ""
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                </a>




                



              )
            })}
          </nav>


          {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}>
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
                  <p className="text-xs text-gray-500 truncate">john@example.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
