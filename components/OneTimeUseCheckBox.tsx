"use client";
import { setOneTimeSlice } from "@/store/oneTimeSlice";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

export default function OneTimeUseCheckBox() {
  const dispatch = useDispatch();
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e) => dispatch(setOneTimeSlice(e.target.checked))}
          />
        }
        label="One Time Use"
      />
      <FormHelperText sx={{ fontSize: "0.8rem", color: "orange" }}>
        *If you check this box, the clipboard will be deleted after one use.
      </FormHelperText>
    </FormGroup>
  );
}
