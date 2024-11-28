"use client";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NewClipBtn from "@/components/NewClipBtn";
export default function Home() {
  const [key, setKey] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div>
      {" "}
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
        <Card sx={{ padding: "10px" }}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontFamily: "monospace",
              margin: "20px",
              marginBottom: "40px",
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
            <div>
              <TextField
                id="outlined-basic"
                label="Clipboard ID:"
                placeholder="Enter ID"
                variant="outlined"
                onChange={(e) => setKey(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Button
                variant="contained"
                onClick={() => {
                  if (key === "") {
                    setError(true);
                    return;
                  }
                  setLoading(true);
                  router.push(`/show/${key}`);
                  setError(false);
                }}
              >
                {loading ? "Loading..." : "Search"}
              </Button>
              <div style={{ fontSize: "1rem" }}>Or</div>
              <NewClipBtn />
            </div>
          </div>
          {error && (
            <div
              style={{
                margin: "10px",
                color: "orange",
              }}
            >
              *Enter ID
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
