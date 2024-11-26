"use client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
export default function NewClipBtn() {
  const router = useRouter();
  return (
    <Button variant="contained" onClick={() => router.push("/new")}>
      create new clipboard
    </Button>
  );
}
