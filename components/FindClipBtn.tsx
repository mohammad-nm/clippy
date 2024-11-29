"use client";

import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
export default function FindClipBtn() {
  const router = useRouter();
  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<SearchIcon />}
      className="py-3 text-white bg-purple-500 hover:bg-purple-600 shadow-lg transform transition-all min-w-[550px]:hover:scale-105 text-xs sm:text-lg"
      onClick={() => router.push("/show")}
    >
      Find Clipboard
    </Button>
  );
}
