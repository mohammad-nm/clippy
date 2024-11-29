"use client";
import { setErrorSlice } from "@/store/errorSlice";
import { setSuccessSlice } from "@/store/successModal";
import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";

// Generate a short ID for clipboard
const generateShortId = (length: number) => {
  const chars = "abcdefghijkmnpqrstuvwxyz";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};

export default function AddNewClipBtn() {
  const [loading, setLoading] = useState(false);
  let key: string = generateShortId(6);
  const title: string | null = useSelector((state: any) => state.title);
  const content: string | null = useSelector((state: any) => state.content);
  const expire: number = useSelector((state: any) => state.expiration.expire);
  const oneTime: boolean = useSelector((state: any) => state.oneTime);
  const password: string | null = useSelector((state: any) => state.password);

  const dispatch = useDispatch();

  const handleClick = async () => {
    setLoading(true);
    if (!title || !content) {
      dispatch(
        setErrorSlice({
          title: title === null ? true : false,
          content: content === null ? true : false,
        })
      );
      setLoading(false);
      return;
    }
    dispatch(
      setErrorSlice({
        title: false,
        content: false,
      })
    );
    setLoading(false);

    const res = await axios.post("/api/redis", {
      command: "set",
      key: key,
      value: JSON.stringify({
        title,
        content,
        password,
        oneTime,
        expire,
        date: new Date().toISOString(),
      }),
      expire: expire * 86400,
    });
    if (res.data.result === "OK") {
      dispatch(
        setSuccessSlice({
          success: true,
          key: key,
        })
      );
      key = generateShortId(6);
    } else {
      console.log("error");
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      className="py-3 text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-br transform transition-all hover:scale-105 shadow-xl "
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? (
        <span className="animate-pulse">Creating...</span>
      ) : (
        "Create Clipboard"
      )}
    </Button>
  );
}
