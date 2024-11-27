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
    <div>
      <FormGroup>
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
      </FormGroup>
      {isPasswordPeotected ? (
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          onChange={(e) => dispatch(setPasswordSlice(e.target.value))}
        />
      ) : null}
    </div>
  );
}
