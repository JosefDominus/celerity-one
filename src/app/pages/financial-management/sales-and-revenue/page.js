"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus, ChevronDown } from "lucide-react"
import Sidebar from "@/components/sidebar" 
import { PurchaseOrderModal } from "@/components/purchasemodal"


const mockSalesData = [
  {
    date: "12/18/2024",
    depositedTo: "BAS443",
    no: "4",
    customer: "Felix Dela Cruz",
    memo: "Felix rental payment for the month of November",
    category: "Lease Payment",
    total: "₱ 5,871.50",
  },
  {
    date: "12/30/2024",
    depositedTo: "BAS443",
    no: "3",
    customer: "JV Empleo",
    memo: "Development of Project Axis: Accounting Tracks",
    category: "Software Development",
    total: "₱ 59,948.00",
  },
  {
    date: "11/23/2024",
    depositedTo: "Undeposited Funds",
    no: "",
    customer: "Reman Boniza",
    memo: "4 pcs of Label Printer and LTHSO",
    category: "Office Supplies",
    total: "₱ 24,005.00",
  },
  {
    date: "11/23/2024",
    depositedTo: "BAS443",
    no: "",
    customer: "JV Empleo",
    memo: "Development of Project Luke: Asset Wise",
    category: "Software Development",
    total: "₱ 74,948.00",
  },
]

export default function SalesRevenuePage() {
  const [salesData, setSalesData] = useState([])


  useEffect(() => {
    async function fetchSales() {
      try {
        const res = await fetch("/api/sales") // replace with your backend endpoint
        if (!res.ok) throw new Error("Failed to fetch sales data")
        const data = await res.json()
        setSalesData(data)
      } catch (error) {
        console.error(error)
        setSalesData(mockSalesData)
      }
    }

    fetchSales()
  }, [])

  return (
    <div className="min-h-screen flex">
      <div className="w-64 fixed inset-y-0 border-r bg-white">
        <Sidebar />
      </div>

    
      <div className="flex-1 ml-64 p-8">
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            All Sales ({salesData.length})
          </h1>
          <PurchaseOrderModal />
        </div>

        
        <div className="bg-white rounded-lg border shadow-sm overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b bg-gray-50">
                <TableHead className="font-medium text-gray-600">Date</TableHead>
                <TableHead className="font-medium text-gray-600">Deposited to</TableHead>
                <TableHead className="font-medium text-gray-600">No.</TableHead>
                <TableHead className="font-medium text-gray-600">Customer</TableHead>
                <TableHead className="font-medium text-gray-600">Memo</TableHead>
                <TableHead className="font-medium text-gray-600">Category</TableHead>
                <TableHead className="font-medium text-gray-600 text-right">Total</TableHead>
                <TableHead className="font-medium text-gray-600">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesData.length > 0 ? (
                salesData.map((sale, index) => (
                  <TableRow
                    key={index}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                  >
                    <TableCell>{sale.date}</TableCell>
                    <TableCell>{sale.depositedTo}</TableCell>
                    <TableCell>{sale.no || "-"}</TableCell>
                    <TableCell className="font-medium">{sale.customer}</TableCell>
                    <TableCell className="max-w-xs truncate">{sale.memo}</TableCell>
                    <TableCell>{sale.category}</TableCell>
                    <TableCell className="text-right font-medium">{sale.total}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 flex items-center gap-1"
                          >
                            View
                            <ChevronDown className="w-3 h-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="text-center text-gray-500 py-6"
                  >
                    No sales data found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
