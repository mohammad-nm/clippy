// "use client";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import TextField from "@mui/material/TextField";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import NewClipBtn from "@/components/NewClipBtn";
// export default function Home() {
//   const [key, setKey] = useState("");
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   return (
//     <div className="flex flex-col gap-20 justify-center items-center h-screen bg-[#F0F0F0] font-mono p-4 sm:p-10">
//       <Card className="p-6 sm:p-4">
//         <div className="text-2xl font-bold mb-8 text-center">
//           Enter your Clipboard id here to find it:
//         </div>

//         <div className="flex justify-center items-center gap-10 flex-wrap">
//           <div className="flex flex-col gap-2">
//             <TextField
//               id="outlined-basic"
//               label="Clipboard ID:"
//               placeholder="Enter ID"
//               variant="outlined"
//               onChange={(e) => setKey(e.target.value)}
//             />
//             {error && (
//               <div className="text-orange-500 text-sm mt-1 mb-2 ml-4">
//                 *Enter ID
//               </div>
//             )}
//             <Button
//               variant="contained"
//               onClick={() => {
//                 if (key === "") {
//                   setError(true);
//                   return;
//                 }
//                 setLoading(true);
//                 router.push(`/show/${key}`);
//                 setError(false);
//               }}
//             >
//               {loading ? "Loading..." : "Search"}
//             </Button>
//           </div>
//           <div className="flex items-center gap-4 ">
//             <div className="text-lg font-semibold">Or</div>
//             <div>
//               <NewClipBtn />
//             </div>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// }

"use client";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NewClipBtn from "@/components/NewClipBtn";

export default function Home() {
  const [key, setKey] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-mono p-6 sm:p-10">
      <Card className="w-full max-w-4xl p-8 bg-white/80 rounded-3xl shadow-lg backdrop-blur-md transform transition duration-300 hover:scale-105">
        <div className="text-2xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Enter your Clipboard ID to find it:
        </div>

        <div className="flex justify-center items-center gap-10 flex-wrap">
          <div className="flex flex-col gap-4 w-full max-w-2xl">
            <TextField
              id="outlined-basic"
              label="Clipboard ID"
              variant="outlined"
              placeholder="Enter ID"
              fullWidth
              onChange={(e) => setKey(e.target.value)}
              className="bg-white rounded-md shadow-md"
            />
            {error && (
              <div className="text-orange-500 text-sm mt-1 mb-2 ml-4">
                *Please enter a valid ID
              </div>
            )}
            <Button
              variant="contained"
              onClick={() => {
                if (key === "") {
                  setError(true);
                  return;
                }
                setLoading(true);
                router.push(`/show/${key}`);
                setError(false);
              }}
              className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full shadow-lg transition-all hover:scale-105"
            >
              {loading ? "Loading..." : "Search"}
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-6 sm:mt-0">
            <div className="text-sm sm:text-lg font-semibold text-gray-700">
              Or
            </div>
            <NewClipBtn />
          </div>
        </div>
      </Card>
    </div>
  );
}
