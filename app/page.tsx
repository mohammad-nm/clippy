// "use server";

// import NewClipBtn from "@/components/NewClipBtn";
// import FindClipBtn from "@/components/FindClipBtn";
// import { Card, Typography } from "@mui/material";
// export default async function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-mono p-4 sm:p-10">
//       <Card className="p-4 sm:p-10 flex flex-col items-center gap-10 bg-white rounded-lg shadow-lg">
//         <div className="flex items-center gap-10">
//           <Typography className="text-2xl font-bold text-center">
//             Create a clip board or find one using the Clipboard ID you have!
//           </Typography>
//         </div>
//         <div className="flex flex-col items-center gap-10 p-10 w-full max-w-2xl">
//           <NewClipBtn />
//           <FindClipBtn />
//         </div>
//       </Card>
//     </div>
//   );
// }"use client";
"use client";

import NewClipBtn from "@/components/NewClipBtn";
import FindClipBtn from "@/components/FindClipBtn";
import { Card, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Box className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4">
      <Card className="p-6 flex flex-col items-center gap-10 bg-white/80 backdrop-blur-md rounded-xl shadow-lg max-w-3xl  text-center">
        <Typography variant="h4" className="font-bold text-gray-800">
          Create a Clipboard or Find One!
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          Easily create a new clipboard or find one using your Clipboard ID.
          Share and organize effortlessly!
        </Typography>
        <Box className="flex flex-col gap-4 w-full">
          <NewClipBtn />
          <FindClipBtn />
        </Box>
      </Card>
    </Box>
  );
}
