"use server";
export default async function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "100px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>new clip board</div>
        <div>find your clip board</div>
      </div>
    </div>
  );
}
