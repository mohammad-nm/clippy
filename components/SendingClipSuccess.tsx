"use client";
import { clearExpirationSlice } from "@/store/expirationSlice";
import { clearPasswordSlice } from "@/store/passwordSlice";
import { clearContentSlice } from "@/store/contentSlice";
import { clearSuccessSlice } from "@/store/successModal";
import {
  Button,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";
import { Dialog } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearOneTimeSlice } from "@/store/oneTimeSlice";
import { clearTitleSlice } from "@/store/titleSlice";
export default function SendingClipSuccess() {
  const router = useRouter();
  const dispatch = useDispatch();
  const success = useSelector((state: any) => state.success);
  const password = useSelector((state: any) => state.password);
  const expiration = useSelector((state: any) => state.expiration.expire);
  const oneTime = useSelector((state: any) => state.oneTime);

  if (!success.success) return;
  const key = success.key;
  return (
    <Dialog open={success.success}>
      <DialogTitle className="font-semibold text-lg text-center text-orange-500">
        Success!
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" className="font-semibold text-lg">
          Clipboard Saved Successfully!
        </Typography>
        <Divider className="my-2" />
        <Typography
          variant="body1"
          color="textSecondary"
          className="mt-2 font-semibold text-lg"
        >
          Clipboard ID: <strong className=" text-xl">{key}</strong>
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Password: <strong>{password ? password : "No Password"}</strong>
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Expiration:{" "}
          <strong>
            {expiration > 1 ? expiration + " Hours" : expiration + " Hour"}
          </strong>
        </Typography>
        <Typography variant="body1" color="textSecondary">
          One Time Use: <strong>{oneTime ? "Yes" : "No"}</strong>
        </Typography>
        <Typography variant="body1" color="textSecondary" className="mt-2">
          You can share and visit your ClipBoard with this link:{" "}
          <a
            href={`https://clippy-theta.vercel.app/show/${key}`}
            className="text-blue-500 underline text-xl"
          >
            https://clippy-theta.vercel.app/show/{key}
          </a>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            dispatch(clearSuccessSlice({ success: false, key: null }));
            dispatch(clearPasswordSlice());
            dispatch(clearOneTimeSlice());
            dispatch(clearExpirationSlice());
            dispatch(clearTitleSlice());
            dispatch(clearContentSlice());
            router.push(`/show/${key}/${password ? password : ""}`);
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
