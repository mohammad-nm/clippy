"use server";
import { TextField } from "@mui/material";
import ExpirationSlider from "@/components/ExpirationSlider";
import AddNewClipBtn from "@/components/AddNewClipBtn";
export default async function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            Enter your clipboard Title and the Content you want to save:
          </div>
          <TextField id="title" label="Title" type="search" fullWidth />
          <TextField
            id="outlined-textarea"
            label="Content"
            placeholder="Type your content here..."
            multiline
            fullWidth
            rows={4}
          />
          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <AddNewClipBtn />
            <ExpirationSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
