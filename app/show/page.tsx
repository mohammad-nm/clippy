"use client";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NewClipBtn from "@/components/NewClipBtn";
export default function Home() {
  const [key, setKey] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col gap-20 justify-center items-center h-screen bg-[#F0F0F0] font-mono p-6 max-w-[500px]:p-4">
      <Card className="p-6">
        <div className="text-2xl font-bold mb-8 text-center">
          Enter your Clipboard id here to find it:
        </div>

        <div className="flex justify-center items-center gap-10 flex-wrap">
          <div className="flex flex-col gap-2">
            <TextField
              id="outlined-basic"
              label="Clipboard ID:"
              placeholder="Enter ID"
              variant="outlined"
              onChange={(e) => setKey(e.target.value)}
            />
            {error && (
              <div className="text-orange-500 text-sm mt-1 mb-2 ml-4">
                *Enter ID
              </div>
            )}
            <Button
              variant="contained"
              onClick={() => {
                if (key === "") {
                  setError(true);
                  return;
                }
                setLoading(true);
                router.push(`/show/${key}`);
                setError(false);
              }}
            >
              {loading ? "Loading..." : "Search"}
            </Button>
          </div>
          <div className="flex items-center gap-4 ">
            <div className="text-lg font-semibold">Or</div>
            <div>
              <NewClipBtn />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
