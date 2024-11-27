import { Card, Typography, CardContent } from "@mui/material";
import NewClipBtn from "./NewClipBtn";
import FindClipBtn from "./FindClipBtn";
import axios from "axios";
import NoData from "./NoData";

export default async function ShowData({
  data,
  keyValue,
}: {
  data: any;
  keyValue: string;
}) {
  if (!data) return <NoData />;
  // calculate remaining hours
  const createdDate = new Date(data?.date);
  const currentDate = new Date();
  const expirationHours = data?.expire;
  const elapsedHours = Math.floor(
    (currentDate.getTime() - createdDate.getTime()) / (1000 * 60 * 60)
  );
  const remainingHours = expirationHours - elapsedHours;
  const deleteClip = async () => {
    const res = await axios.post(`https://clippy-theta.vercel.app/api/redis`, {
      key: keyValue,
      command: "del",
    });
  };
  if (data?.oneTime) {
    deleteClip();
  }
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        fontFamily: "monospace",
        marginTop: "100px",
        backgroundColor: "#F0F0F0",
      }}
    >
      <Card variant="outlined" sx={{ maxWidth: "100%", padding: "10px" }}>
        <CardContent sx={{ padding: "20px" }}>
          <Typography variant="h5" component="div">
            Clipboard ID: {keyValue}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: "10px", fontSize: "1.2rem" }}
          >
            Title:
          </Typography>
          <Card
            variant="outlined"
            sx={{ marginTop: "5px", padding: "10px", fontSize: "1rem" }}
          >
            {data?.title}
          </Card>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: "10px", fontSize: "1.2rem" }}
          >
            Content:
          </Typography>
          <Card
            variant="outlined"
            sx={{ marginTop: "5px", padding: "10px", fontSize: "1rem" }}
          >
            {data?.content}
          </Card>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              marginLeft: "10px",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Password: {data?.password ? data?.password : "No Password"}
            </Typography>
            <div>
              <Typography variant="body2" color="text.secondary">
                One Time Use: {data?.oneTime ? "Yes" : "No"}
              </Typography>
              {data.oneTime ? (
                <Typography color="orange" variant="body2">
                  *This clipboard will be lost when you leave this page!
                </Typography>
              ) : null}
            </div>
            <Typography variant="body2" color="text.secondary">
              {`Expiration: ${
                remainingHours > 0 ? remainingHours : 0
              } hours remaining`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Created On: {new Date(data?.date).toLocaleString()}
            </Typography>
          </div>
        </CardContent>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <FindClipBtn />
          <NewClipBtn />
        </div>
      </Card>
    </div>
  );
}
