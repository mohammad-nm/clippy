// "use client";
// import { setOneTimeSlice } from "@/store/oneTimeSlice";
// import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";

// export default function OneTimeUseCheckBox() {
//   const [checked, setChecked] = useState(false);
//   const dispatch = useDispatch();
//   return (
//     <FormGroup className="flex flex-col gap-2 font-mono w-fit">
//       <FormControlLabel
//         control={
//           <Checkbox
//             onChange={(e) => {
//               setChecked(e.target.checked);
//               dispatch(setOneTimeSlice(e.target.checked));
//             }}
//           />
//         }
//         label="OneTime Use"
//       />
//       {checked && (
//         <div className="w-fit text-left text-sm font-mono font-semibold text-orange-500 ml-8">
//           *If you check this box, the clipboard will be deleted after one use.
//         </div>
//       )}
//     </FormGroup>
//   );
// }

"use client";
import { setOneTimeSlice } from "@/store/oneTimeSlice";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function OneTimeUseCheckBox() {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  return (
    <FormGroup className="flex flex-col gap-2 font-mono w-fit">
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
              setChecked(e.target.checked);
              dispatch(setOneTimeSlice(e.target.checked));
            }}
          />
        }
        label={
          <span className="text-lg text-gray-700 font-semibold">
            One Time Use
          </span>
        }
      />
      {checked && (
        <div className="w-fit text-left text-sm sm:text-base font-mono font-semibold text-orange-500 ml-8 animate-pulse">
          *Your clipboard will be deleted after one use.
        </div>
      )}
    </FormGroup>
  );
}
