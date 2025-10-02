import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatMinutes } from '@/lib/utils/formatters';

export default function AttendanceTable({ attendance }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Employee Name</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Check-In Time</TableHead>
          <TableHead>Check-Out Time</TableHead>
          <TableHead>Total Hours</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {attendance && attendance.length > 0 ? (
          attendance.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="font-medium">{employee.attendee.firstName} {employee.attendee.lastName}</TableCell>
              <TableCell>{employee.attendee.department}</TableCell>
              <TableCell className="text-green-600">
                {employee.timeIn &&
                  new Date(employee.timeIn).toLocaleTimeString('en-PH', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    timeZone: 'Asia/Manila'
                  }
                )}
              </TableCell>
              <TableCell className="text-red-600">
                {employee.timeOut &&
                  new Date(employee.timeOut).toLocaleTimeString('en-PH', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    timeZone: 'Asia/Manila'
                  }
                )}
              </TableCell>
              <TableCell className="text-blue-600">{formatMinutes(employee.hoursWorked)}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
              No attendance records found for this date.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}