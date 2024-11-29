"use client";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setTitleSlice } from "@/store/titleSlice";

export default function ClipTitle() {
  const dispatch = useDispatch();
  const title = useSelector((state: any) => state.title);
  return (
    <TextField
      id="title"
      label="Title"
      type="search"
      value={title ? title : ""}
      fullWidth
      onChange={(e) => dispatch(setTitleSlice(e.target.value as string))}
    />
  );
}
