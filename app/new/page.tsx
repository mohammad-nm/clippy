"use client";
import FindClipBtn from "@/components/FindClipBtn";
import NewClipBtn from "@/components/NewClipBtn";
import OneTimeUseCheckBox from "@/components/OneTimeUseCheckBox";
import Password from "@/components/Password";
import { Card } from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query/react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const ExpirationSlider = dynamic(
  () => import("@/components/ExpirationSlider"),
  {
    ssr: false,
  }
);
const AddNewClipBtn = dynamic(() => import("@/components/AddNewClipBtn"), {
  ssr: false,
});
const ClipTitle = dynamic(() => import("@/components/ClipTitle"), {
  ssr: false,
});
const TitleError = dynamic(() => import("@/components/TitleError"), {
  ssr: false,
});
const ClipContent = dynamic(() => import("@/components/ClipContent"), {
  ssr: false,
});
const ContentError = dynamic(() => import("@/components/ContentError"), {
  ssr: false,
});
const SendingClipSuccess = dynamic(
  () => import("@/components/SendingClipSuccess"),
  {
    ssr: false,
  }
);

export default function Home() {
  const expiration = useSelector((state: any) => state.expiration.expire);
  return (
    <div className="flex font-mono justify-center items-center p-10 bg-[#F0F0F0]">
      <SendingClipSuccess />
      <Card className="w-full h-fit font-mono mt-1/2 p-10">
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex flex-wrap gap-2 ">
            <div className="text-2xl font-bold text-left mb-4">
              Create your clipboard:
            </div>
            <div className="text-sm text-gray-500 ml-2">
              Add a title and content to save.
            </div>
          </div>
          <ClipTitle />
          <TitleError />
          <ClipContent />
          <ContentError />
          <div className="flex flex-wrap justify-center items-center w-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-4  font-semibold flex-col ">
                <div className="text-lg">
                  Expiration: {expiration} {expiration > 1 ? "Hours" : "Hour"}
                </div>

                <ExpirationSlider />
              </div>
              <div className="flex items-center gap-4">
                <OneTimeUseCheckBox />
              </div>

              <Password />
            </div>
            <div className="flex items-center gap-6 mt-10">
              <AddNewClipBtn />
              <FindClipBtn />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
