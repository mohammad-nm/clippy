"use client";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import NewClipBtn from "./NewClipBtn";
import FindClipBtn from "./FindClipBtn";

export default function PasswordForm({ pass }: { pass: string }) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const params = useParams();

  // Check if params is not null and has a key property
  const key = params?.key as string | undefined; // Type assertion

  const handleChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    setError(false);
    if (password === pass) {
      setLoading(false);
      router.push(`/show/${key}/${password}`);
    } else {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen font-mono gap-10 bg-[#F0F0F0]">
      <div className="text-3xl font-semibold">
        Your Clipboard has a password!
      </div>
      <div className="flex flex-row items-center justify-center gap-10 ">
        <TextField
          label="Password"
          onChange={handleChange}
          style={{ width: "200px" }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {loading ? "Loading..." : "Try"}
        </Button>
      </div>
      {error && (
        <Typography
          variant="body2"
          color="error"
          fontFamily="inherit"
          fontSize="12px"
        >
          *Wrong password!
        </Typography>
      )}
      <div className="flex flex-row gap-4">
        <NewClipBtn />
        <FindClipBtn />
      </div>
    </div>
  );
}
