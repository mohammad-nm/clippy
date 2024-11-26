"use client";
import { useSelector } from "react-redux";

export default function TitleError() {
  const error = useSelector((state: any) => state.error);
  return (
    <div
      style={{
        color: "orange",
        fontSize: "12px",
        margin: "0px",
        padding: "0px",
        fontWeight: "bold",
      }}
    >
      {error.title ? "*Title is required!" : ""}
    </div>
  );
}
