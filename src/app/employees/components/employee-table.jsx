"use client"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import { Trash2, UserRoundPen,HandCoins } from "lucide-react";

import { formatPeso } from "@/lib/utils/formatters";

export default function EmployeeTable({ employees, payrolls }) {
  const generateEmployeePayroll = async (employeeId) => {
    const payload = {
      employeeId: employeeId,
    }

    const generatePayrollRes = await fetch("http://localhost:8000/api/v2/payroll/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const response = await generatePayrollRes.json();
    console.log("API Response:", response);
    window.location.reload()
  }

  return (
    <Table>
      <TableCaption>A list of Celerity One Employees</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Picture</TableHead> 
          <TableHead>Full Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Email Address</TableHead>
          <TableHead>Salary</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => {
          const hasPayroll = payrolls.some(p => p.employeeId === employee.id);
          return (
            <TableRow key={employee.id}>
              <TableCell>
                <Avatar className="rounded-lg">
                  <AvatarImage src="/dp.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{employee.firstName} {employee.lastName}</TableCell>
              <TableCell>{employee.positionTitle}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{formatPeso(employee.salary)}</TableCell>
              <TableCell>
                <div className="flex flex-row gap-2">
                  <Button onClick={() => 
                    generateEmployeePayroll(employee.id)}
                    disabled={hasPayroll}
                    variant={hasPayroll ? "outline" : "default"}
                    title={hasPayroll ? "Payroll already exists" : "Generate payroll"}
                  ><HandCoins/>
                    Generate Payroll
                  </Button>
                  <Button variant="outline"><UserRoundPen/></Button>
                  <Button variant="destructive"><Trash2/></Button>
                </div>
              </TableCell>  
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}