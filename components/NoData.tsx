
import { Card, Typography, Box } from "@mui/material";
import NewClipBtn from "./NewClipBtn";
import FindClipBtn from "./FindClipBtn";

export default function NoData() {
  return (
    <Box className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-4  ">
      <Card className="p-8 flex flex-col items-center gap-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg max-w-4xl text-center">
        <Typography
          variant="h4"
          className="text-2xl sm:text-4xl font-extrabold text-gray-800"
        >
          The clipboard you are looking for does not exist.
        </Typography>
        <Typography
          variant="body1"
          className="text-sm sm:text-lg text-gray-600"
        >
          No worries! You can create a new one or find an existing clipboard
          with the right ID.
        </Typography>
        <Box className="flex gap-8 justify-center mt-6 w-full">
          <NewClipBtn />
          <FindClipBtn />
        </Box>
      </Card>
    </Box>
  );
}
