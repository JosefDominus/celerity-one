import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { UserSearch } from "lucide-react";

import EmployeeTable from "./components/employee-table";
import NewEmployeeDialog from "./components/new-employee-dialog";

export default async function EmployeePage() {
  const employeeRes = await fetch("http://localhost:8000/api/v2/employee", {
    cache: "no-store",
  });

  const employees = await employeeRes.json();

 const payrollRes = await fetch("http://localhost:8000/api/v2/payroll", {
    cache: "no-store",
  });

  const payrolls = await payrollRes.json();

  return (
    <main>
      <div className="flex justify-between mb-6">
      <div className="flex w-full max-w-sm items-center gap-2">
          <Input placeholder="Search" />
          <Button type="submit" variant="outline">
          <UserSearch/>
      </Button>
    </div>
      <NewEmployeeDialog />
      </div>

      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
        </CardHeader>
        <CardContent>
          <EmployeeTable employees={employees.data} payrolls={payrolls.data} />
        </CardContent>
      </Card>
    </main>
  );
}
