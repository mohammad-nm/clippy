"use client";
import { useSelector } from "react-redux";

export default function ContentError() {
  const error = useSelector((state: any) => state.error);
  return (
    <div className="text-orange-500 text-sm font-bold">
      {error.content ? "*Content is required!" : ""}
    </div>
  );
}
