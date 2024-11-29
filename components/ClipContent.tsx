"use client";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setContentSlice } from "@/store/contentSlice";

export default function ClipContent() {
  const dispatch = useDispatch();
  const content = useSelector((state: any) => state.content);
  return (
    <TextField
      id="outlined-textarea"
      label="Content"
      value={content ? content : ""}
      placeholder="Type your content here..."
      multiline
      fullWidth
      rows={10}
      onChange={(e) => {
        dispatch(setContentSlice(e.target.value));
      }}
    />
  );
}
