"use server";

import NewClipBtn from "@/components/NewClipBtn";
import FindClipBtn from "@/components/FindClipBtn";
import { Card, Typography } from "@mui/material";
export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-mono p-10">
      <Card className="p-10 flex flex-col items-center gap-10 bg-white rounded-lg shadow-lg ">
        <div className="flex items-center gap-10">
          <Typography className="text-2xl font-bold text-center">
            Create a clip board or find one using the Clipboard ID you have!
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-10 p-10 w-full max-w-2xl">
          <NewClipBtn />
          <FindClipBtn />
        </div>
      </Card>
    </div>
  );
}
