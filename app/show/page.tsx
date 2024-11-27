"use client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NewClipBtn from "@/components/NewClipBtn";
export default function Home() {
  const [key, setKey] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#F0F0F0",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          Enter your Clipboard id here to find it:
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Clipboard ID:"
            placeholder="Enter ID"
            variant="outlined"
            onChange={(e) => setKey(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              if (key === "") return;
              setLoading(true);
              router.push(`/show/${key}`);
            }}
          >
            {loading ? "Loading..." : "Search"}
          </Button>
          <NewClipBtn />
        </div>
      </div>
    </div>
  );
}
