"use client";
import { setExpirationSlice } from "@/store/expirationSlice";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch } from "react-redux";
const MAX = 24;
const MIN = 1;
const marks = [
  {
    value: MIN,
    label: "1H",
  },
  {
    value: 12,
    label: "12H",
  },
  {
    value: MAX,
    label: "24H",
  },
];
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
export default function ExpirationSlider() {
  const cache = createCache({ key: "css", prepend: true });
  const dispatch = useDispatch();
  const [val, setVal] = useState<number>(MIN);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    dispatch(setExpirationSlice(newValue as number));
  };
  return (
    <CacheProvider value={cache}>
      <div>
        <Box sx={{ width: 250 }}>
          <Slider
            marks={marks}
            step={1}
            value={val}
            valueLabelDisplay="auto"
            min={MIN}
            max={MAX}
            onChange={handleChange}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="body2"
              onClick={() => setVal(MIN)}
              sx={{ cursor: "pointer" }}
            ></Typography>
            <Typography
              variant="body2"
              onClick={() => setVal(MAX)}
              sx={{ cursor: "pointer" }}
            ></Typography>
          </Box>
        </Box>
      </div>
    </CacheProvider>
  );
}
