"use client";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { setTitleSlice } from "@/store/titleSlice";

export default function ClipTitle() {
  const dispatch = useDispatch();
  return (
    <div>
      <TextField
        id="title"
        label="Title"
        type="search"
        fullWidth
        onChange={(e) => dispatch(setTitleSlice(e.target.value as string))}
      />
    </div>
  );
}
