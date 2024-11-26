"use server";
import Button from "@mui/material/Button";
export default async function Home() {
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
        <Button variant="contained">Show</Button>
      </div>
    </div>
  );
}
