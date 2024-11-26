"use client";
import { Button } from "@mui/material";
import axios from "axios";
export default function AddNewClipBtn() {
  const handleClick = () => {
    const sendData = async () => {
      const res = await axios.post("/api/redis", {
        command: "set",
        key: "test",
        value: "test",
        expire: 10,
      });
      console.log(res);
    };
    sendData();
  };
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        create
      </Button>
    </div>
  );
}
