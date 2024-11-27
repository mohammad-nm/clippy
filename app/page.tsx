"use server";

import NewClipBtn from "@/components/NewClipBtn";
import FindClipBtn from "@/components/FindClipBtn";
import { Typography } from "@mui/material";
export default async function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#F0F0F0",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "50px",
          }}
        >
          <Typography variant="h4">Create a new clip</Typography>
          <NewClipBtn />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography variant="h4">Find a clip</Typography>
          <FindClipBtn />
        </div>
      </div>
    </div>
  );
}
