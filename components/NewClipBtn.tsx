"use client";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
export default function NewClipBtn() {
  const router = useRouter();
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      className="py-3 text-white bg-blue-500 hover:bg-blue-600 shadow-lg transform transition-all min-w-[550px]:hover:scale-105 text-xs sm:text-lg"
      onClick={() => router.push("/new")}
    >
      Create New Clipboard
    </Button>
  );
}
