"use client";
import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"

import { useForm } from "react-hook-form";
import { ChevronDownIcon } from "lucide-react";

import AttendanceTable from "./components/attendance-table";
import { Button } from "@/components/ui/button";
import { useAttendance } from "@/hooks/use-attendance";
import { checkExistingAttendance, createAttendance, updateAttendance } from "@/lib/api/attendance";

export default function AttendancePage() {
  const { date, setDate, attendance } = useAttendance(new Date());

  const [open, setOpen] = useState(false)
  console.log(new Date())

  const form = useForm({
    defaultValues: {
      attendeeId: "",
    },
  });

  const onSubmit = async (data) => {
    let currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-CA", { timeZone: "Asia/Manila" });

    try {
      console.log(data.attendeeId, formattedDate)
      const attendee = await checkExistingAttendance(data.attendeeId, formattedDate);
      const existing = attendee.data?.[0];
      console.log(attendee.data?.[0]);

      if(!existing) {
        await createAttendance(data);
      } else {
        await updateAttendance(existing);
      }

      setDate(new Date(date));
      form.reset();
      console.log("Resetting form...");
    } catch (error) {
      console.error("Error handling attendance:", error);
    }
  }

  return (
    <main>
      <div className="max-w-6xl mx-auto space-y-8">
        <Card className="bg-white shadow-lg">
          <CardHeader className="border-b">
            <CardTitle className="text-2xl font-bold text-center">Attendance & Biometrics System</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="attendeeId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employee ID:</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Scan or Paste ID" 
                          {...field} 
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault(); // avoid page refresh
                              form.handleSubmit(onSubmit)();
                            }
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardHeader className="border-b">
            <CardTitle className="text-xl font-bold">Employee Attendance Records</CardTitle>
            <Label htmlFor="date" className="px-1">
              Select Date
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="w-48 justify-between font-normal"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    if (!date) return;
                    setDate(date)
                    setOpen(false)
                  }}
                />
              </PopoverContent>
            </Popover>
          </CardHeader>
          <CardContent className="p-6">
            <AttendanceTable attendance={attendance} />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
