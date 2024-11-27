"use client";
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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export default function SendingClipSuccess() {
  const dispatch = useDispatch();
  const success = useSelector((state: any) => state.success);
  const password = useSelector((state: any) => state.password);
  const expiration = useSelector((state: any) => state.expiration.expire);
  const oneTime = useSelector((state: any) => state.oneTime);

  if (!success.success) return;
  const key = success.key;
  return (
    <Dialog open={success.success}>
      <DialogTitle>Success!</DialogTitle>
      <DialogContent>
        <Typography variant="body1">Clipboard Saved Successfully!</Typography>
        <Divider style={{ marginTop: "10px" }} />
        <Typography
          variant="body1"
          color="textSecondary"
          style={{ marginTop: "10px" }}
        >
          Clipboard ID: <strong>{key}</strong>
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
        <Typography
          variant="body1"
          color="textSecondary"
          style={{ marginTop: "10px" }}
        >
          You can share your ClipBoard with this link:{" "}
          <a href={`https://clippy-theta.vercel.app/show/${key}`}>
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
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
