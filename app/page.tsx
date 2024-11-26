"use server";
import NewClipBtn from "@/components/NewClipBtn";
import FindClipBtn from "@/components/FindClipBtn";
export default async function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <NewClipBtn />
        <FindClipBtn />
      </div>
    </div>
  );
}
