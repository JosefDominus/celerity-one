"use client"
import Sidebar from "@/components/sidebar";
import { useParams } from "next/navigation";

export default function AttendanceDetailPage() {
  const params = useParams();

  return (
    <main>
      DISPLAY ATTENDEE INFORMATION HERE, WITH MESSAGE THAT SUCCESSFULLY LOGGED IN
      <p>ID: {params.id}</p>
    </main>
  )
}