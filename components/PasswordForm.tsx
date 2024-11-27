"use client";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import NewClipBtn from "./NewClipBtn";
import FindClipBtn from "./FindClipBtn";

export default function PasswordForm({ pass }: { pass: string }) {
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
    if (password === pass) {
      router.push(`/show/${key}/${password}`);
    } else {
      setError(true);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "monospace",
        gap: "20px",
        backgroundColor: "#F0F0F0",
      }}
    >
      <Typography variant="h4" gutterBottom style={{ fontFamily: "inherit" }}>
        Your Clipboard has a password!
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <TextField
          label="Password"
          onChange={handleChange}
          style={{ width: "200px" }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
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
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <NewClipBtn />
        <FindClipBtn />
      </div>
    </div>
  );
}
