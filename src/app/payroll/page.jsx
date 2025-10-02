"use client"

import Sidebar from "@/components/sidebar";
import { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Table, TableCaption, TableHeader, TableRow, TableBody, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BadgeCheckIcon, HandCoins, PhilippinePeso, Search, Trash2, UserRoundPen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DialogDemo } from "@/components/employeemodal";
import { formatMinutes } from '@/lib/utils/formatters';
import { formatPeso } from "@/lib/utils/formatters";
import { useEffect, useState } from "react";

export default function PayrollPage() {
const [payroll, setPayroll] = useState([]);

const fetchPayroll = async () => {
  const res = await fetch(
    "http://localhost:8000/api/v2/payroll",
    { cache: "no-store" }
  );
  const data = await res.json();
  setPayroll(data.data || []);
};

useEffect(() => {
  fetchPayroll();
}, []);

const generatePayroll = async (id, employeeId) => {
  try {
    const response = await fetch(`http://localhost:8000/api/v2/payroll/refresh/${id}?attendee-id=${employeeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        forceRefresh: true
      })
    });

    if (!response.ok) {
      throw new Error('Failed to update payroll');
    }

    const data = await response.json();
    console.log('Payroll updated successfully:', data);
    fetchPayroll();

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

console.log(payroll);
return(
  <main>
    <Card className="shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle>Employee's Payroll</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of Celerity One Employees</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Paid Hours</TableHead>
              <TableHead>Hourly Rate</TableHead>
              <TableHead>Deductions</TableHead>
              <TableHead>Net Pay</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payroll.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-gray-500">
                  Loading payroll...
                </TableCell>
              </TableRow>
            ) : (
              payroll.map((payroll) => (
                <TableRow key={payroll.id}>
                  <TableCell className="font-medium">{payroll.employee.firstName} {payroll.employee.lastName}</TableCell>
                  <TableCell>{formatMinutes(payroll.paidHours) || 'N/A'}</TableCell>
                  <TableCell>{formatPeso(payroll.hourlyRate)}</TableCell>
                  <TableCell>{formatPeso(payroll.totalDeductions)}</TableCell>
                  <TableCell>{formatPeso(payroll.netPay)}</TableCell>
                  <TableCell>
                  <Badge variant="secondary" className="bg-green-500 text-white dark:bg-blue-600">
                    <BadgeCheckIcon />{payroll.status}
                  </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row justify-center gap-2">
                      <Button onClick={() => generatePayroll(payroll.id, payroll.employeeId)}><HandCoins/>Refresh Details</Button>
                      <DialogDemo 
                        firstName={payroll.employee.firstName}
                        lastName={payroll.employee.lastName}
                        employeeId={payroll.employeeId}
                        grossPay={payroll.employee.salary}
                        philhealthDeduction={payroll.philhealthDeductions}
                        sssDeduction={payroll.sssDeductions}
                        pagibigDeduction={payroll.pagibigDeductions}
                        incomeTaxDeduction={payroll.incomeTax}
                        netPay={payroll.netPay}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </main>
);
}