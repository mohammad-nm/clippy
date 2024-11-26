"use client";
import { clearSuccessSlice } from "@/store/successModal";
import {
  Button,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Dialog } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export default function SendingClipSuccess() {
  const dispatch = useDispatch();
  const success = useSelector((state: any) => state.success);
  if (!success.success) return;
  const key = success.key;
  return (
    <Dialog open={success.success}>
      <DialogTitle>Success!</DialogTitle>
      <DialogContent>
        <Typography variant="body1">ClipBoard Saved Successfully!</Typography>
        <Typography variant="body1" color="textSecondary">
          Key: <strong>{key}</strong>
        </Typography>
        <Typography variant="body1" color="textSecondary">
          You can access your ClipBoard at{" "}
          <a href={`http://localhost:3000/show/${key}`}>
            http://localhost:3000/show/{key}
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
