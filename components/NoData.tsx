import { Card, Typography } from "@mui/material";
import NewClipBtn from "./NewClipBtn";
import FindClipBtn from "./FindClipBtn";

export default function NoData() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F0F0F0] p-10 max-w-[500px]:p-4">
      <Card className="w-fit mt-20 p-10 gap-10 flex flex-col max-w-[500px]:p-4">
        <Typography variant="h5" textAlign="center" fontFamily="monospace">
          The clipboard you are looking for does not exist. Try creating one!
        </Typography>
        <div className="flex gap-10 justify-center">
          <NewClipBtn />
          <FindClipBtn />
        </div>
      </Card>
    </div>
  );
}
