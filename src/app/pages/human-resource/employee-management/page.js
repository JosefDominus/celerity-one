import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Trash2, UserPlus, UserRoundPen, UserSearch } from "lucide-react";

export default function EmployeePage() {
  return (
    <div className="min-h-screen flex">
      
      <div className="w-64 fixed inset-y-0">
        <Sidebar />
      </div>

      
      <div className="flex-1 ml-64 p-8">
        {/* Top action buttons */}
        <div className="flex justify-between mb-6">
        <div className="flex w-full max-w-sm items-center gap-2">
            <Input placeholder="Search" />
            <Button type="submit" variant="outline">
            <UserSearch/>
        </Button>
    </div>
          <Button><UserPlus/> Add New Employee</Button>
        </div>

        
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
                  <TableHead>Email Address</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">0001</TableCell>
                  <TableCell>Josef Dominic</TableCell>
                  <TableCell>Valdes</TableCell>
                  <TableCell>josefcute@gmail.com</TableCell>
                  <TableCell>
                    <div className="flex flex-row justify-center gap-2">
                      <Button variant="outline"><UserRoundPen/>Edit</Button>
                      <Button variant="destructive"><Trash2/>Delete</Button>
                      <Button><Eye/>View</Button>
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
