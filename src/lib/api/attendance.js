export async function getAttendance(date) {
  const formattedDate = date.toLocaleDateString("en-CA", { timeZone: "Asia/Manila" });
  const res = await fetch(`http://localhost:3000/api/v2/attendance/organization/e72f1df4-9164-4368-a36f-3d2600ac5c40/attendance-type/d3794b53-a4d8-4743-9b7f-974b350b0d0b?date=${formattedDate}`, { cache: "no-store" });
  return res.json();
}

export async function checkExistingAttendance(attendeeId, date) {
  const res = await fetch(`http://localhost:3000/api/v2/attendance/organization/e72f1df4-9164-4368-a36f-3d2600ac5c40/attendance-type/d3794b53-a4d8-4743-9b7f-974b350b0d0b?attendee-id=${attendeeId}&date=${date}`, { cache: "no-store" });

  return res.json();
}

export async function createAttendance(data) {
  const payload = {
    ...data,
    timeIn: new Date().toISOString(),
    weekNumber: 39,
    attendanceTypeId: "d3794b53-a4d8-4743-9b7f-974b350b0d0b",
    organizationId: "e72f1df4-9164-4368-a36f-3d2600ac5c40",
  }

  return fetch("http://localhost:3000/api/v2/attendance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

export async function updateAttendance(attendee) {
  const timeOut = new Date().toISOString();
  const timeInDate = new Date(attendee.timeIn);
  const timeOutDate = new Date(timeOut);
  const hoursWorkedInMinutes = Math.floor((timeOutDate - timeInDate) / (1000 * 60));

  const payload = {
    timeOut: timeOut,
    hoursWorked: hoursWorkedInMinutes,
  };

  return fetch(`http://localhost:3000/api/v2/attendance/${attendee.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}