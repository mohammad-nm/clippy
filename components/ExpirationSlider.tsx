"use client";
import { setExpirationSlice } from "@/store/expirationSlice";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const MAX = 7;
const MIN = 1;
const marks = [
  {
    value: MIN,
    label: "1 Day",
  },
  {
    value: MAX,
    label: "7 Days",
  },
];

export default function ExpirationSlider() {
  const cache = createCache({ key: "css", prepend: true });
  const dispatch = useDispatch();
  const expiration: number = useSelector(
    (state: any) => state.expiration.expire
  );

  const handleChange = (_: Event, newValue: number | number[]) => {
    dispatch(setExpirationSlice(newValue as number));
  };

  return (
    <CacheProvider value={cache}>
      <div className="flex flex-col items-center mt-4 mb-4 mx-16 sm:mx-32">
        <Slider
          marks={marks}
          step={2}
          value={expiration}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value} Days`}
          min={MIN}
          max={MAX}
          onChange={handleChange}
          sx={{
            color: "#a9a9a9",
            height: 8,
            "& .MuiSlider-thumb": {
              backgroundColor: "#a0a0a0",
              "&:hover": {
                backgroundColor: "#a8b8b8",
              },
            },
            "& .MuiSlider-track": {
              backgroundColor: "#8875de",
              height: 8,
            },
            "& .MuiSlider-rail": {
              backgroundColor: "orange",
            },
          }}
        />
      </div>
    </CacheProvider>
  );
}
