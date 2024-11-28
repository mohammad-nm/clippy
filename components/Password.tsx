import { clearPasswordSlice, setPasswordSlice } from "@/store/passwordSlice";
import { FormControlLabel } from "@mui/material";

import { FormGroup } from "@mui/material";
import { Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Password() {
  const [isPasswordPeotected, setIsPasswordPeotected] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 ">
      <FormGroup className="w-fit">
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => {
                setIsPasswordPeotected(e.target.checked);
                if (!e.target.checked) {
                  dispatch(setPasswordSlice(null));
                }
              }}
            />
          }
          label="Password Protected"
        />
        {isPasswordPeotected ? (
          <div className="w-full">
            <TextField
              id="password"
              label="Password"
              type="password"
              fullWidth
              onChange={(e) => dispatch(setPasswordSlice(e.target.value))}
            />
          </div>
        ) : null}
      </FormGroup>
    </div>
  );
}
