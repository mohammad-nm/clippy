"use client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
export default function FindClipBtn() {
  const router = useRouter();
  return (
    <Button variant="contained" onClick={() => router.push("/show")}>
      Find a clipboard
    </Button>
  );
}
