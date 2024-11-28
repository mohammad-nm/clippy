"use client";
import { useSelector } from "react-redux";

export default function TitleError() {
  const error = useSelector((state: any) => state.error);
  return (
    <div className="text-orange-500 text-sm font-semibold">
      {error.title ? "*Title is required!" : ""}
    </div>
  );
}
