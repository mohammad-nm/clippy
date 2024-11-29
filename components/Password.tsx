// import { clearPasswordSlice, setPasswordSlice } from "@/store/passwordSlice";
// import { FormControlLabel } from "@mui/material";

// import { FormGroup } from "@mui/material";
// import { Checkbox } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import { useState } from "react";
// import { useDispatch } from "react-redux";

// export default function Password() {
//   const [isPasswordPeotected, setIsPasswordPeotected] = useState(false);
//   const dispatch = useDispatch();
//   return (
//     <div className="flex flex-col gap-2 ">
//       <FormGroup className="w-fit">
//         <FormControlLabel
//           control={
//             <Checkbox
//               onChange={(e) => {
//                 setIsPasswordPeotected(e.target.checked);
//                 if (!e.target.checked) {
//                   dispatch(setPasswordSlice(null));
//                 }
//               }}
//             />
//           }
//           label="Password Protected"
//         />
//         {isPasswordPeotected ? (
//           <div className="w-full">
//             <TextField
//               id="password"
//               label="Password"
//               type="password"
//               fullWidth
//               onChange={(e) => dispatch(setPasswordSlice(e.target.value))}
//             />
//           </div>
//         ) : null}
//       </FormGroup>
//     </div>
//   );
// }

"use client";
import { clearPasswordSlice, setPasswordSlice } from "@/store/passwordSlice";
import {
  FormControlLabel,
  Checkbox,
  FormGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Password() {
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 w-full">
      <FormGroup className="w-fit">
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "#ff7c7c",
                "&.Mui-checked": {
                  color: "#ff4d4d",
                },
              }}
              onChange={(e) => {
                setIsPasswordProtected(e.target.checked);
                if (!e.target.checked) {
                  dispatch(setPasswordSlice(null));
                }
              }}
            />
          }
          label={
            <span className="text-lg text-gray-700 font-semibold">
              Password Protected
            </span>
          }
        />
        {isPasswordProtected && (
          <div className="w-full mt-4">
            <TextField
              id="password"
              label="Password"
              type="password"
              fullWidth
              onChange={(e) => dispatch(setPasswordSlice(e.target.value))}
              variant="outlined"
              sx={{
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ff7c7c",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ff4d4d",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ff4d4d",
                  },
                },
              }}
            />
          </div>
        )}
      </FormGroup>
      {isPasswordProtected && (
        <div className="w-full text-sm text-orange-500 font-semibold mt-2 animate-pulse ml-8">
          *Your clipboard will be password protected after setting this
          password.
        </div>
      )}
    </div>
  );
}
