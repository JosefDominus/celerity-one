"use client"


import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"
import {  CreditCard, MoreHorizontal, PhilippinePeso, TrendingUp } from "lucide-react" // <-- import icons

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: { label: "Desktop", color: "#2563eb" },
  mobile: { label: "Mobile", color: "#60a5fa" },
}

export default function ExpensesPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 fixed inset-y-0">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex-row ml-64 p-6 space-y-6">
        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Expenses */}
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <PhilippinePeso className="h-4 w-4 text-green-600" />
                </div>
                Total Expenses
              </CardTitle>
              <MoreHorizontal className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">₱28,450.75</div>
              <div className="flex items-center text-sm mt-1">
                <TrendingUp className="h-3 w-3 text-red-500 mr-1" />
                <span className="text-red-500 font-medium">8.2%</span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>


<Card className="max-w-sm mx-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-orange-600" />
                </div>
                Monthly Breakdown
              </CardTitle>
              <MoreHorizontal className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-gray-900 mb-4">$28,450.75</div>

              {/* Simple Bar Chart */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Oct</span>
                  <span className="text-xs text-gray-500">Nov</span>
                  <span className="text-xs text-gray-500">Dec</span>
                </div>

                <div className="flex items-end justify-between h-32 gap-4">
                  {/* October */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full space-y-1">
                      <div className="bg-green-500 h-16 rounded-t"></div>
                      <div className="bg-yellow-500 h-8 rounded"></div>
                      <div className="bg-red-500 h-12 rounded-b"></div>
                    </div>
                  </div>

                  {/* November */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full space-y-1">
                      <div className="bg-green-500 h-20 rounded-t"></div>
                      <div className="bg-yellow-500 h-6 rounded"></div>
                      <div className="bg-red-500 h-10 rounded-b"></div>
                    </div>
                  </div>

                  {/* December */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full space-y-1">
                      <div className="bg-green-500 h-24 rounded-t"></div>
                      <div className="bg-yellow-500 h-10 rounded"></div>
                      <div className="bg-red-500 h-14 rounded-b"></div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span className="text-gray-600">Operations</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                    <span className="text-gray-600">Marketing</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span className="text-gray-600">Travel</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}
