// import { Card, Typography } from "@mui/material";
// import NewClipBtn from "./NewClipBtn";
// import FindClipBtn from "./FindClipBtn";

// export default function NoData() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-[#F0F0F0] p-4 sm:p-10">
//       <Card className="w-fit mt-20 p-4 sm:p-10 gap-10 flex flex-col max-w-[500px]:p-4">
//         <Typography variant="h5" textAlign="center" fontFamily="monospace">
//           The clipboard you are looking for does not exist. Try creating one!
//         </Typography>
//         <div className="flex gap-10 justify-center">
//           <NewClipBtn />
//           <FindClipBtn />
//         </div>
//       </Card>
//     </div>
//   );
// }

import { Card, Typography, Box } from "@mui/material";
import NewClipBtn from "./NewClipBtn";
import FindClipBtn from "./FindClipBtn";

export default function NoData() {
  return (
    <Box className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-4">
      <Card className="p-8 flex flex-col items-center gap-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg max-w-3xl text-center">
        <Typography variant="h4" className="font-extrabold text-gray-800">
          The clipboard you are looking for does not exist.
        </Typography>
        <Typography variant="body1" className="text-gray-600">
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
