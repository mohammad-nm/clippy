"use server";

import NewClipBtn from "@/components/NewClipBtn";
import FindClipBtn from "@/components/FindClipBtn";
import { Card, Typography } from "@mui/material";
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
        <Card
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div>
            <Typography
              sx={{
                fontSize: "2rem",
                fontFamily: "monospace",
                textAlign: "center",
              }}
            >
              Create a clip board or find one using the Clipboard ID you have!
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <NewClipBtn />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <FindClipBtn />
          </div>
        </Card>
      </div>
    </div>
  );
}
