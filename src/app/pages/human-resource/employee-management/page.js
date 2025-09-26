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
import {  Trash2, UserPlus, UserRoundPen, UserSearch } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

//add mock data later const = mockemployee

export default function EmployeePage() {
  return (
    <div className="min-h-screen flex">
      
      <div className="w-64 fixed inset-y-0">
        <Sidebar />
      </div>

      
      <div className="flex-1 ml-64 p-8">
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
                   <TableHead className="border border-gray-400 bg-gray-200">Picture</TableHead> 
                  <TableHead className="w-[100px] border border-gray-400 bg-gray-200">Employee ID</TableHead>
                  <TableHead className="text-center border border-gray-400 bg-gray-200">First Name</TableHead>
                  <TableHead className="text-center border border-gray-400 bg-gray-200">Last Name</TableHead>
                  <TableHead className="text-center border border-gray-400 bg-gray-200">Department</TableHead>
                  <TableHead className="text-center border border-gray-400 bg-gray-200">Email Address</TableHead>
                  <TableHead className="text-center border border-gray-400 bg-gray-200">Position</TableHead>
                  <TableHead className="text-center border border-gray-400 bg-gray-200">Hourly Rate</TableHead>
                  <TableHead className="text-center border border-gray-400 bg-gray-200">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                <TableCell><Avatar className="rounded-lg">
        <AvatarImage src="/dp.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar></TableCell>
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
