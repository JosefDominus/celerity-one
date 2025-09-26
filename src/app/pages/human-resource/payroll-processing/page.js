"use client"

import Sidebar from "@/components/sidebar";
import { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Table, TableCaption, TableHeader, TableRow, TableBody, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BadgeCheckIcon, PhilippinePeso, Search, Trash2, UserRoundPen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DialogDemo } from "@/components/employeemodal";



export default function PayrollPage() {
return(
 <div className="min-h-screen flex">

   <div className="w-64 fixed inset-y-0">
        <Sidebar />
      </div>

 <div className="flex-1 ml-64 p-4 md:p-8">
        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle>Employee's Payroll</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of Celerity One Employees</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Employee ID</TableHead>
                  <TableHead>Employee</TableHead>
                  <TableHead>Paid Hours</TableHead>
                  <TableHead>Gross Pay</TableHead>
                  <TableHead>Deductions</TableHead>
                  <TableHead>Net Pay</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">0001</TableCell>
                  <TableCell>Josef Dominic Valdes</TableCell>
                  <TableCell>24 hours</TableCell>
                  <TableCell>₱ 15,250</TableCell>
                  <TableCell>₱ 570</TableCell>
                  <TableCell>₱ 14,680</TableCell>
                  <TableCell>
                  <Badge variant="secondary" className="bg-green-500 text-white dark:bg-blue-600">
                  <BadgeCheckIcon />Paid</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row justify-center gap-2">
                      <Button variant="outline"><UserRoundPen/>Edit</Button>
                      <DialogDemo/></div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        </div>


</div>
);
}