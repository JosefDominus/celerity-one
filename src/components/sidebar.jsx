"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { FileText, Menu, X, ChartPie, IdCardIcon, Fingerprint, PhilippinePeso, BanknoteArrowDown, HandCoins } from "lucide-react"

const sidebarConfig = [
  {
    name: "Dashbaord",
    items: [
      { icon: ChartPie, label: "Overview/Analytics", href: "/dashboard" },
    ]
  },
  {
    name: "Employees",
    items: [
      { icon: IdCardIcon, label: "Employee Management", href: "/employees" },
      { icon: Fingerprint, label: "Attendance", href: "/employees/attendance" },
    ]
  },
  {
    name: "Payroll",
    items: [
      { icon: HandCoins, label: "Payroll Processing", href: "/payroll" },
      { icon: FileText, label: "Reports", href: "/payroll/reports" },
    ]
  },
  {
    name: "Finance",
    items: [
      { icon: ChartPie, label: "Overview", href: "/finance" },
      { icon: PhilippinePeso, label: "Revenue", href: "/finance/revenue" },
      { icon: BanknoteArrowDown, label: "Expenses", href: "/finance/expenses" },
      { icon: FileText, label: "Reports", href: "/finance/reports" },
    ]
  }
]

export default function Sidebar({ className = "", ...props }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed)
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen)

  const isActive = (href) => pathname === href

  const handleLinkClick = (e) => {
    setTimeout(() => {
      e.target.blur()
    }, 100)
  }

  const renderNavItem = (item) => {
    const Icon = item.icon
    const active = isActive(item.href)

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={handleLinkClick}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-colors focus:outline-none ${
          active
            ? "bg-blue-100 text-blue-900" // Active state styling
            : "hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
        } ${isCollapsed ? "justify-center px-2" : ""}`}
        title={isCollapsed ? item.label : undefined}
      >
        <Icon className="h-5 w-5 flex-shrink-0" />
        {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
      </Link>
    )
  }

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
          {sidebarConfig.map((section, index) => (
            <div key={index}>
              <div className="flex items-center justify-between px-4 border-b border-gray-200 mt-4">
                {!isCollapsed && <h2 className="text-lg font-semibold text-gray-900">{section.name}</h2>}
              </div>
              <nav className="my-2">{section.items.map(renderNavItem)}</nav>
            </div>
          ))}
        </div>
      </aside>
    </>
  )
}
