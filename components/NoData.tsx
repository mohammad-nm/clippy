import { Card, Typography } from "@mui/material";
import NewClipBtn from "./NewClipBtn";
import FindClipBtn from "./FindClipBtn";

export default function NoData() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F0F0F0",
        fontFamily: "monospace",
      }}
    >
      <Card
        style={{
          width: "fit-content",
          marginTop: "20%",
          padding: "20px",
          gap: "30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" textAlign="center" fontFamily="monospace">
          The clipboard you are looking for does not exist. Try creating one!
        </Typography>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <NewClipBtn />
          <FindClipBtn />
        </div>
      </Card>
    </div>
  );
}
