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
import { Textarea } from "@/components/ui/textarea"
import { formatPeso } from "@/lib/utils/formatters"
export function DialogDemo({ firstName, lastName, grossPay, sssDeduction, philhealthDeduction, pagibigDeduction, incomeTaxDeduction, netPay }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Employee Payroll Details</DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Review and adjust payroll details
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h1 className="font-bold">Employee Name</h1>
              <p>{firstName} {lastName}</p>
            </div>

            <div>
              <h1 className="font-bold">Gross Pay </h1>
              <p>{formatPeso(grossPay)}</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl">Deductions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div>
                <h1 className="font-bold">SSS <span className="font-normal text-slate-400">— 2% of Gross Pay</span></h1>
                <h1 className="mt-1 text-red-400">- {formatPeso(sssDeduction)}</h1>
              </div>
              <div>
                <h1 className="font-bold">PhilHealth <span className="font-normal text-slate-400">— 2% of Gross Pay</span></h1>
                <h1 className="mt-1 text-red-400">- {formatPeso(philhealthDeduction)}</h1>
              </div>
              <div>
                <h1 className="font-bold">Pagibig <span className="font-normal text-slate-400">— ₱100 Fixed</span></h1>
                <h1 className="mt-1 text-red-400">- {formatPeso(pagibigDeduction)}</h1>
              </div>
              <div>
                <h1 className="font-bold">Income Tax <span className="font-normal text-slate-400">— 3% of Gross Pay</span></h1>
                <h1 className="mt-1 text-red-400">- {formatPeso(incomeTaxDeduction)}</h1>
              </div>
            </div>
          </div>

          {/* Additions */}
          <div>
            <h3 className="font-bold text-xl">Additions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div>
                <h1 className="font-bold">OT Hours</h1>
                <h1 className="mt-1">'N/A'</h1>
              </div>
              <div>
                <h1 className="font-bold">Allowance (₱)</h1>
                <Input
                  placeholder="Amount"
                  type="number"
                />
              </div>
              <div className="sm:col-span-2">
                <h1 className="font-bold">Allowance Memo</h1>
                <Textarea
                  placeholder="Enter your allowance memo here"
                />
              </div>
            </div>
          </div>

          {/* Other Deduction */}
          <div>
            <h3 className="font-bold text-xl">Other Deduction</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div>
                <h1 className="font-bold">Deduction (₱)</h1>
                <Input
                  placeholder="Amount"
                  type="number"
                />
              </div>
              <div className="sm:col-span-2">
                <h1 className="font-bold">Deduction Memo</h1>
                <Textarea
                  placeholder="Enter deduction memo here"
                />
              </div>
            </div>
          </div>

          {/* Net Pay */}
          <div>
            <h1 className="font-bold">Total Net Pay</h1>
            <p className="font-bold text-sm">{formatPeso(netPay)}</p>
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
