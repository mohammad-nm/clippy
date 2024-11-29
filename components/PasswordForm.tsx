// "use client";
// import { Button, TextField, Typography } from "@mui/material";
// import { useState } from "react";
// import { useRouter, useParams } from "next/navigation";
// import NewClipBtn from "./NewClipBtn";
// import FindClipBtn from "./FindClipBtn";

// export default function PasswordForm({ pass }: { pass: string }) {
//   const [loading, setLoading] = useState(false);
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);
//   const router = useRouter();
//   const params = useParams();

//   // Check if params is not null and has a key property
//   const key = params?.key as string | undefined; // Type assertion

//   const handleChange = (e: any) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = () => {
//     setLoading(true);
//     setError(false);
//     if (password === pass) {
//       setLoading(false);
//       router.push(`/show/${key}/${password}`);
//     } else {
//       setLoading(false);
//       setError(true);
//     }
//   };
//   return (
//     <div className="flex flex-col items-center justify-center h-screen font-mono gap-10 bg-[#F0F0F0] p-4 sm:p-10">
//       <div className="text-3xl font-semibold">
//         Your Clipboard has a password!
//       </div>
//       <div className="flex flex-row items-center justify-center gap-10 ">
//         <TextField
//           label="Password"
//           onChange={handleChange}
//           style={{ width: "200px" }}
//         />
//         <Button variant="contained" color="primary" onClick={handleSubmit}>
//           {loading ? "Loading..." : "Try"}
//         </Button>
//       </div>
//       {error && (
//         <Typography
//           variant="body2"
//           color="error"
//           fontFamily="inherit"
//           fontSize="12px"
//         >
//           *Wrong password!
//         </Typography>
//       )}
//       <div className="flex flex-row gap-4">
//         <NewClipBtn />
//         <FindClipBtn />
//       </div>
//     </div>
//   );
// }

"use client";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import NewClipBtn from "./NewClipBtn";
import FindClipBtn from "./FindClipBtn";

export default function PasswordForm({ pass }: { pass: string }) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const params = useParams();

  const key = params?.key as string | undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    setError(false);
    if (password === pass) {
      setLoading(false);
      router.push(`/show/${key}/${password}`);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 via-teal-500 to-indigo-600 p-6">
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-6 ">
        <Typography
          variant="h4"
          className="text-2xl sm:text-4xl font-bold text-gray-800 text-center "
        >
          Secure Your Clipboard
        </Typography>

        <TextField
          label="Enter Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handleChange}
          fullWidth
          className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 "
          style={{
            backgroundColor: "#f9fafb",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          className="py-2 mt-4 text-lg rounded-full transition-all duration-300 hover:bg-blue-600 disabled:bg-gray-400 max-w-xs "
          disabled={loading}
        >
          {loading ? "Loading..." : "Try"}
        </Button>

        {error && (
          <Typography
            variant="body2"
            color="error"
            className="mt-4 text-center text-sm sm:text-base font-semibold text-orange-500"
          >
            *Incorrect password, please try again.
          </Typography>
        )}

        <div className="flex justify-center gap-6 mt-6">
          <NewClipBtn />
          <FindClipBtn />
        </div>
      </div>
    </div>
  );
}
