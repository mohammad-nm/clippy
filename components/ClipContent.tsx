"use client";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { setContentSlice } from "@/store/contentSlice";

export default function ClipContent() {
  const dispatch = useDispatch();
  return (
    <div>
      <TextField
        id="outlined-textarea"
        label="Content"
        placeholder="Type your content here..."
        multiline
        fullWidth
        rows={4}
        onChange={(e) => {
          dispatch(setContentSlice(e.target.value));
        }}
      />
    </div>
  );
}
