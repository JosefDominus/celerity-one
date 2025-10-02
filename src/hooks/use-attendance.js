import { useState, useEffect } from "react";
import { getAttendance } from "@/lib/api/attendance";

export function useAttendance(initialDate) {
  const [date, setDate] = useState(initialDate);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    if (!date) return;
    (async () => {
      const data = await getAttendance(date);
      setAttendance(data.data || []);
    })();
  }, [date]);

  return { date, setDate, attendance, setAttendance };
}