"use client"

import Sidebar from "@/components/sidebar";
import { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Table, TableCaption, TableHeader, TableRow, TableBody, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, UserRoundPen } from "lucide-react";



export default function PayrollPage() {
return(
 <div className="min-h-screen flex">

   <div className="w-64 fixed inset-y-0">
        <Sidebar />
      </div>

 <div className="flex-1 ml-64 p-4 md:p-8">
        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle>Employee List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of Celerity One Employees</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Employee ID</TableHead>
                  <TableHead>First Name</TableHead>
                  <TableHead>Last Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Email Address</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Hourly Rate</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">0001</TableCell>
                  <TableCell>Josef Dominic</TableCell>
                  <TableCell>Valdes</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>josefcute@gmail.com</TableCell>
                  <TableCell>Senior Software Engineer</TableCell>
                  <TableCell>25,000</TableCell>
                  <TableCell>
                    <div className="flex flex-row justify-center gap-2">
                      <Button variant="outline"><UserRoundPen/>Edit</Button>
                      <Button variant="destructive"><Trash2/>Delete</Button>
                    </div>
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