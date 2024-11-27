"use client";
import dynamic from "next/dynamic";

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
