"use client"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Sidebar from "@/components/sidebar"
import { useState } from "react"


export default function AttendancePage() {
  const mockEmployees = [
    {
      id: 1,
      name: "John Doe",
      department: "Engineering",
      checkIn: "9:00 AM",
      checkOut: "5:00 PM",
      totalHours: "8 hours",
      status: "Present",
    },
    {
      id: 2,
      name: "Jane Smith",
      department: "Marketing",
      checkIn: "8:30 AM",
      checkOut: "4:30 PM",
      totalHours: "8 hours",
      status: "Present",
    },
    {
      id: 3,
      name: "Mike Johnson",
      department: "Sales",
      checkIn: "9:15 AM",
      checkOut: "5:15 PM",
      totalHours: "8 hours",
      status: "Present",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      department: "HR",
      checkIn: "8:45 AM",
      checkOut: "4:45 PM",
      totalHours: "8 hours",
      status: "Present",
    },
    {
      id: 5,
      name: "David Brown",
      department: "Finance",
      checkIn: "9:30 AM",
      checkOut: "5:30 PM",
      totalHours: "8 hours",
      status: "Present",
    },
    {
      id: 6,
      name: "Lisa Garcia",
      department: "Engineering",
      checkIn: "--",
      checkOut: "--",
      totalHours: "0 hours",
      status: "Absent",
    },
    {
      id: 7,
      name: "Tom Anderson",
      department: "Operations",
      checkIn: "8:00 AM",
      checkOut: "4:00 PM",
      totalHours: "8 hours",
      status: "Present",
    },
    {
      id: 8,
      name: "Emily Davis",
      department: "Design",
      checkIn: "9:45 AM",
      checkOut: "5:45 PM",
      totalHours: "8 hours",
      status: "Present",
    },
  ]


  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 p-8">

   <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300
          ${isCollapsed ? "w-20" : "w-64"}`}
      >
        <Sidebar />
      </div>
        <div className="flex-1 ml-64 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <Card className="bg-white shadow-lg">
          <CardHeader className="border-b">
            <CardTitle className="text-2xl font-bold text-center">Attendance & Biometrics System</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Manager Info */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="manager-name" className="text-sm font-medium">
                    Manager Name:
                  </Label>
                  <Input id="manager-name" className="mt-1" placeholder="Enter manager name" />
                </div>

                <div>
                  <Label htmlFor="department" className="text-sm font-medium">
                    Department:
                  </Label>
                  <Input id="department" className="mt-1" placeholder="Enter department" />
                </div>

                <div>
                  <Label htmlFor="date" className="text-sm font-medium">
                    Date:
                  </Label>
                  <Input id="date" type="date" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="employee-name" className="text-sm font-medium">
                    Employee Name:
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select employee" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockEmployees.map((employee) => (
                        <SelectItem key={employee.id} value={employee.name.toLowerCase().replace(" ", "-")}>
                          {employee.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Column - Time Tracking */}
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="check-in" className="text-sm font-medium">
                      Check-In Time
                    </Label>
                    <Input id="check-in" type="time" className="mt-1" defaultValue="09:00" />
                  </div>

                  <div>
                    <Label htmlFor="check-out" className="text-sm font-medium">
                      Check-Out Time
                    </Label>
                    <Input id="check-out" type="time" className="mt-1" defaultValue="17:00" />
                  </div>

                  <div>
                    <Label htmlFor="total-hours" className="text-sm font-medium">
                      Total Hours Worked
                    </Label>
                    <Input id="total-hours" className="mt-1" defaultValue="8 hours" readOnly />
                  </div>
                </div>

                {/* Sample Data Display */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-3">Today's Record:</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-medium">Check-In</div>
                      <div className="text-green-600">9:00 AM</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Check-Out</div>
                      <div className="text-red-600">5:00 PM</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Total</div>
                      <div className="text-blue-600">8 hours</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <Button className="flex-1">Record Attendance</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    View Reports
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardHeader className="border-b">
            <CardTitle className="text-xl font-bold">Employee Attendance Records</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Check-In Time</TableHead>
                  <TableHead>Check-Out Time</TableHead>
                  <TableHead>Total Hours</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell className="text-green-600">{employee.checkIn}</TableCell>
                    <TableCell className="text-red-600">{employee.checkOut}</TableCell>
                    <TableCell className="text-blue-600">{employee.totalHours}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          employee.status === "Present" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      </div>
    </div>
  )
}
