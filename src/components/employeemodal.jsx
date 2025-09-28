"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function DialogDemo({
  title = "Employee Payroll Details",
  employeeId,
  employeeName,
  paidHours,
  grossPay,
}) {

  const [sss, setSss] = useState(2)
  const [philhealth, setPhilhealth] = useState(3)
  const [pagibig, setPagibig] = useState(200)
  const [tax, setTax] = useState(2)
  const [otHours, setOtHours] = useState(0)
  const [allowance, setAllowance] = useState(0)
  const [allowanceMemo, setAllowanceMemo] = useState("")
  const [otherDeduction, setOtherDeduction] = useState(0)
  const [deductionMemo, setDeductionMemo] = useState("")

  // Calculation
  const sssAmount = (grossPay * sss) / 100
  const philhealthAmount = (grossPay * philhealth) / 100
  const taxAmount = (grossPay * tax) / 100
  const totalDeductions =
    sssAmount + philhealthAmount + pagibig + taxAmount + otherDeduction
  const totalAdditions = allowance + otHours * 100 // example rate
  const netPay = grossPay - totalDeductions + totalAdditions

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Review and adjust payroll details
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Employee Name</Label>
              <p>{employeeName} </p>
            </div>
            <div>
              <Label>Employee ID</Label>
              <p>{employeeId} </p>
            </div>
          </div>

          {/* Gross Pay */}
          <div>
            <Label>Gross Pay (calculated by hours worked)</Label>
            <p>{grossPay}</p>
          </div>

          {/* Deductions */}
          <div>
            <h3 className="font-medium">Deductions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div>
                <Label>SSS (%)</Label>
                <Input
                  type="number"
                  value={sss}
                  onChange={(e) => setSss(Number(e.target.value))}
                />
              </div>
              <div>
                <Label>Philhealth (%)</Label>
                <Input
                  type="number"
                  value={philhealth}
                  onChange={(e) => setPhilhealth(Number(e.target.value))}
                />
              </div>
              <div>
                <Label>Pagibig (₱)</Label>
                <Input
                  type="number"
                  value={pagibig}
                  onChange={(e) => setPagibig(Number(e.target.value))}
                />
              </div>
              <div>
                <Label>Tax (%)</Label>
                <Input
                  type="number"
                  value={tax}
                  onChange={(e) => setTax(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Additions */}
          <div>
            <h3 className="font-medium">Additions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div>
                <Label>OT Hours</Label>
                <Input
                  type="number"
                  value={otHours}
                  onChange={(e) => setOtHours(Number(e.target.value))}
                />
              </div>
              <div>
                <Label>Allowance (₱)</Label>
                <Input
                  type="number"
                  value={allowance}
                  onChange={(e) => setAllowance(Number(e.target.value))}
                />
              </div>
              <div className="sm:col-span-2">
                <Label>Allowance Memo</Label>
                <Textarea
                  value={allowanceMemo}
                  onChange={(e) => setAllowanceMemo(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Other Deduction */}
          <div>
            <h3 className="font-medium">Other Deduction</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div>
                <Label>Deduction (₱)</Label>
                <Input
                  type="number"
                  value={otherDeduction}
                  onChange={(e) => setOtherDeduction(Number(e.target.value))}
                />
              </div>
              <div className="sm:col-span-2">
                <Label>Deduction Memo</Label>
                <Textarea
                  value={deductionMemo}
                  onChange={(e) => setDeductionMemo(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Net Pay */}
          <div>
            <Label>Total Net Pay</Label>
            <p> {netPay.toFixed(2)} </p>
          </div>

          {/* Footer */}
          <DialogFooter className="flex flex-col-reverse sm:flex-row justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="w-full sm:w-auto">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
