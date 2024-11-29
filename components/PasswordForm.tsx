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

  const key = params?.key as string | undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 via-teal-500 to-indigo-600 p-6">
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-6 ">
        <Typography
          variant="h4"
          className="text-2xl sm:text-4xl font-bold text-gray-800 text-center "
        >
          Secure Your Clipboard
        </Typography>

        <TextField
          label="Enter Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handleChange}
          fullWidth
          className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 "
          style={{
            backgroundColor: "#f9fafb",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          className="py-2 mt-4 text-lg rounded-full transition-all duration-300 hover:bg-blue-600 disabled:bg-gray-400 max-w-xs "
          disabled={loading}
        >
          {loading ? "Loading..." : "Try"}
        </Button>

        {error && (
          <Typography
            variant="body2"
            color="error"
            className="mt-4 text-center text-sm sm:text-base font-semibold text-orange-500"
          >
            *Incorrect password, please try again.
          </Typography>
        )}

        <div className="flex justify-center gap-6 mt-6">
          <NewClipBtn />
          <FindClipBtn />
        </div>
      </div>
    </div>
  );
}
