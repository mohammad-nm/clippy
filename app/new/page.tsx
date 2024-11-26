"use server";

import ExpirationSlider from "@/components/ExpirationSlider";
import AddNewClipBtn from "@/components/AddNewClipBtn";
import ClipTitle from "@/components/ClipTitle";
import ClipContent from "@/components/ClipContent";
import TitleError from "@/components/TitleError";
import ContentError from "@/components/ContentError";
import SendingClipSuccess from "@/components/SendingClipSuccess";

export default async function Home() {
  return (
    <div style={{ fontFamily: "monospace" }}>
      <SendingClipSuccess />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div
            style={{
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            Enter your clipboard Title and the Content you want to save:
          </div>
          <ClipTitle />
          <TitleError />
          <ClipContent />
          <ContentError />
          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              margin: "10px",
              justifyContent: "space-between",
            }}
          >
            <ExpirationSlider />
            <AddNewClipBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
