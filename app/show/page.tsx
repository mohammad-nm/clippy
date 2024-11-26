"use client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [key, setKey] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Key"
          placeholder="Enter Key"
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
          {loading ? "Loading..." : "Show"}
        </Button>
      </div>
    </div>
  );
}
