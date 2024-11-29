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
    <Dialog open={success.success} sx={{ borderRadius: "16px" }}>
      <Card
        sx={{
          p: 4,
          maxWidth: 500,
          width: "100%",
          margin: "auto",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            color: "#FF7043",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Success!
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8, color: "#FF7043" }}
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
          <Typography
            variant="h6"
            sx={{ color: "#4CAF50", fontWeight: "bold" }}
          >
            💾 Clipboard Saved!
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" color="textSecondary">
              🆔 Clipboard ID:{" "}
              <strong style={{ color: "#FF7043", fontSize: "1.25rem" }}>
                {key}
              </strong>
            </Typography>
            <Typography
              variant="body1"
              className="mb-2 text-sm font-semibold text-red-400"
            >
              📋 *Save this id to find your ClipBoard later
            </Typography>
            <Typography variant="body1" color="textSecondary">
              🔑 Password:{" "}
              <strong>{password ? password : "No Password"}</strong>{" "}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              ⏳ Expiration:{" "}
              <strong style={{ color: "#FF7043" }}>
                {expiration > 1 ? expiration + " Hours" : expiration + " Hour"}
              </strong>
            </Typography>
            <Typography variant="body1" color="textSecondary">
              🔄 One Time Use: <strong>{oneTime ? "Yes" : "No"}</strong>
            </Typography>
          </Box>

          <Typography variant="body1" color="textSecondary">
            🔗 You can share and visit your ClipBoard with this link:{" "}
            <a
              href={`https://clippy-theta.vercel.app/show/${key}`}
              style={{
                color: "#5f45d1",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              https://clippy-theta.vercel.app/show/{key}
            </a>
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Chip
              label="🔗 Press the button below to go to your ClipBoard!"
              color="primary"
              variant="outlined"
              sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center" }}>
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
            sx={{
              backgroundColor: "#FF7043",
              color: "white",
              "&:hover": {
                backgroundColor: "#FF5722",
              },
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Go to Clipboard
          </Button>
        </DialogActions>
      </Card>
    </Dialog>
  );
}
