// "use client";
// import { setExpirationSlice } from "@/store/expirationSlice";
// import { setPasswordSlice } from "@/store/passwordSlice";
// import { setContentSlice } from "@/store/contentSlice";
// import { clearSuccessSlice } from "@/store/successModal";
// import {
//   Button,
//   DialogTitle,
//   Typography,
//   DialogContent,
//   DialogActions,
//   Divider,
// } from "@mui/material";
// import { Dialog } from "@mui/material";
// import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { setOneTimeSlice } from "@/store/oneTimeSlice";
// import { setTitleSlice } from "@/store/titleSlice";
// export default function SendingClipSuccess() {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const success = useSelector((state: any) => state.success);
//   const password = useSelector((state: any) => state.password);
//   const expiration = useSelector((state: any) => state.expiration.expire);
//   const oneTime = useSelector((state: any) => state.oneTime);

//   if (!success.success) return;
//   const key = success.key;
//   return (
//     <Dialog open={success.success}>
//       <DialogTitle className="font-semibold text-lg text-center text-orange-500">
//         Success!
//       </DialogTitle>
//       <DialogContent>
//         <Typography variant="body1" className="font-semibold text-lg">
//           Clipboard Saved Successfully!
//         </Typography>
//         <Divider className="my-2" />
//         <Typography
//           variant="body1"
//           color="textSecondary"
//           className="mt-2 font-semibold text-lg"
//         >
//           Clipboard ID: <strong className=" text-xl">{key}</strong>
//         </Typography>
//         <Typography variant="body1" color="textSecondary">
//           Password: <strong>{password ? password : "No Password"}</strong>
//         </Typography>
//         <Typography variant="body1" color="textSecondary">
//           Expiration:{" "}
//           <strong>
//             {expiration > 1 ? expiration + " Hours" : expiration + " Hour"}
//           </strong>
//         </Typography>
//         <Typography variant="body1" color="textSecondary">
//           One Time Use: <strong>{oneTime ? "Yes" : "No"}</strong>
//         </Typography>
//         <Typography variant="body1" color="textSecondary" className="mt-2">
//           You can share and visit your ClipBoard with this link:{" "}
//           <a
//             href={`https://clippy-theta.vercel.app/show/${key}`}
//             className="text-blue-500 underline text-xl"
//           >
//             https://clippy-theta.vercel.app/show/{key}
//           </a>
//         </Typography>
//       </DialogContent>
//       <DialogActions>
//         <Button
//           color="primary"
//           variant="contained"
//           onClick={() => {
//             dispatch(clearSuccessSlice({ success: false, key: null }));
//             dispatch(setPasswordSlice(null));
//             dispatch(setOneTimeSlice(false));
//             dispatch(setExpirationSlice(1));
//             dispatch(setTitleSlice(null));
//             dispatch(setContentSlice(null));
//             router.push(`/show/${key}/${password ? password : ""}`);
//           }}
//         >
//           Close
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }
"use client";
import { setExpirationSlice } from "@/store/expirationSlice";
import { setPasswordSlice } from "@/store/passwordSlice";
import { setContentSlice } from "@/store/contentSlice";
import { clearSuccessSlice } from "@/store/successModal";
import {
  Button,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Divider,
  Box,
  Card,
  Chip,
  IconButton,
} from "@mui/material";
import { Dialog } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setOneTimeSlice } from "@/store/oneTimeSlice";
import { setTitleSlice } from "@/store/titleSlice";
import CloseIcon from "@mui/icons-material/Close";

export default function SendingClipSuccess() {
  const router = useRouter();
  const dispatch = useDispatch();
  const success = useSelector((state: any) => state.success);
  const password = useSelector((state: any) => state.password);
  const expiration = useSelector((state: any) => state.expiration.expire);
  const oneTime = useSelector((state: any) => state.oneTime);

  if (!success.success) return null;

  const key = success.key;

  return (
    <Dialog open={success.success} className="rounded-3xl">
      <Card className="p-4 max-w-5xl w-full m-auto rounded-3xl shadow-lg">
        <DialogTitle className="text-center text-2xl sm:text-4xl text-orange-500 font-bold">
          Success!
          <IconButton
            className="absolute top-2 right-2 text-orange-500"
            onClick={() => {
              dispatch(clearSuccessSlice({ success: false, key: null }));
              dispatch(setPasswordSlice(null));
              dispatch(setOneTimeSlice(false));
              dispatch(setExpirationSlice(1));
              dispatch(setTitleSlice(null));
              dispatch(setContentSlice(null));
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Typography className="text-xl sm:text-2xl font-bold text-green-500">
            💾 Clipboard Saved!
          </Typography>

          <Divider className="my-2" />

          <Box className="mb-2">
            <Typography variant="body1" color="textSecondary">
              🆔 Clipboard ID:{" "}
              <strong className="text-sm sm:text-xl font-bold ">{key}</strong>
            </Typography>
            <Typography
              variant="body1"
              className="mb-2 text-xs sm:text-base font-semibold text-red-400"
            >
              📋 *Save this id to find your ClipBoard later
            </Typography>
            <Typography variant="body1" color="textSecondary">
              🔑 Password:{" "}
              <strong className="text-sm sm:text-xl">
                {password ? password : "No Password"}
              </strong>{" "}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              ⏳ Expiration:{" "}
              <strong className="text-sm sm:text-xl">
                {expiration > 1 ? expiration + " Hours" : expiration + " Hour"}
              </strong>
            </Typography>
            <Typography variant="body1" color="textSecondary">
              🔄 One Time Use:{" "}
              <strong className="text-sm sm:text-xl">
                {oneTime ? "Yes" : "No"}
              </strong>
            </Typography>
          </Box>

          <Typography variant="body1" color="textSecondary">
            🔗 You can share and visit your ClipBoard with this link:{" "}
            <a
              href={`https://clippy-theta.vercel.app/show/${key}`}
              className="text-blue-500 underline text-sm sm:text-base"
            >
              https://clippy-theta.vercel.app/show/{key}
            </a>
          </Typography>

          <Box className="flex justify-center mt-3">
            <Chip
              label="🔗 Press the button below to go to your ClipBoard!"
              color="success"
              variant="outlined"
              className="font-bold text-sm sm:text-base"
            />
          </Box>
        </DialogContent>

        <DialogActions className="justify-center">
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              dispatch(clearSuccessSlice({ success: false, key: null }));
              dispatch(setPasswordSlice(null));
              dispatch(setOneTimeSlice(false));
              dispatch(setExpirationSlice(1));
              dispatch(setTitleSlice(null));
              dispatch(setContentSlice(null));
              router.push(`/show/${key}/${password ? password : ""}`);
            }}
            className="bg-orange-500 text-white font-bold hover:bg-orange-600 "
          >
            Go to Clipboard
          </Button>
        </DialogActions>
      </Card>
    </Dialog>
  );
}
