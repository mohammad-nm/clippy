"use client";
import FindClipBtn from "@/components/FindClipBtn";
import NewClipBtn from "@/components/NewClipBtn";
import OneTimeUseCheckBox from "@/components/OneTimeUseCheckBox";
import Password from "@/components/Password";
import { Card } from "@mui/material";
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
    <div
      style={{
        display: "flex",
        fontFamily: "monospace",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SendingClipSuccess />

      <Card
        style={{
          width: "fit-content",
          height: "fit-content",
          fontFamily: "monospace",
          marginTop: "10%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              margin: "20px",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "left",
                marginBottom: "2rem",
              }}
            >
              Create your clipboard:{" "}
              <span
                style={{
                  display: "block",
                  fontSize: "1rem",
                  color: "gray",
                  marginTop: "10px",
                }}
              >
                Add a title and content to save.
              </span>
            </div>
            <ClipTitle />
            <TitleError />
            <ClipContent />
            <ContentError />
            <div
              style={{
                display: "flex",
                gap: "30px",
                alignItems: "start",
                margin: "10px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  gap: "30px",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      marginLeft: "-10px",
                      marginBottom: "10px",
                    }}
                  >
                    Expiration time:
                  </div>
                  <ExpirationSlider />
                </div>
                <OneTimeUseCheckBox />
                <Password />
              </div>
              <AddNewClipBtn />
            </div>
            <div style={{ marginTop: "20px" }}>
              <FindClipBtn />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
