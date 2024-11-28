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
    <div className="w-90% m-auto font-mono bg-[#F0F0F0] mt-20 p-10 max-w-[500px]:p-4">
      <Card variant="outlined" className="max-w-full p-6 max-w-[500px]:p-4">
        <CardContent className="p-8">
          <Typography variant="h5" component="div">
            Clipboard ID: {keyValue}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="mt-4 font-semibold text-lg"
          >
            Title:
          </Typography>
          <Card variant="outlined" className="mt-2 p-4 text-sm " dir="auto">
            {data?.title}
          </Card>
          <Typography
            variant="body2"
            color="text.secondary"
            className="mt-4 font-semibold text-lg"
          >
            Content:
          </Typography>
          <Card variant="outlined" className="mt-2 p-4 text-sm" dir="auto">
            {data?.content}
          </Card>
          <div className="mt-4 flex flex-col gap-2 ml-4">
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
        <div className="flex justify-center gap-10 mb-4">
          <FindClipBtn />
          <NewClipBtn />
        </div>
      </Card>
    </div>
  );
}
