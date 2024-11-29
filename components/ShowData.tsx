import { Card, Typography, CardContent, IconButton } from "@mui/material";
import NewClipBtn from "./NewClipBtn";
import FindClipBtn from "./FindClipBtn";
import axios from "axios";
import NoData from "./NoData";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LockIcon from "@mui/icons-material/Lock";

export default async function ShowData({
  data,
  keyValue,
}: {
  data: any;
  keyValue: string;
}) {
  if (!data) return <NoData />;

  // Calculate remaining hours
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
    <div className="max-w-6xl m-auto font-mono  mt-20 p-4 sm:p-8 transition-all ease-in-out duration-300 transform hover:scale-105 w-full">
      <Card
        variant="outlined"
        className="w-full p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-full"
      >
        <CardContent className="p-4 sm:p-6">
          <Typography
            variant="h5"
            component="div"
            className="text-indigo-600 font-semibold mb-4"
          >
            Clipboard ID: {keyValue}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="mt-4 font-semibold text-lg"
          >
            Title:
          </Typography>
          <Card
            variant="outlined"
            className="mt-2 p-4 text-sm bg-indigo-50 text-indigo-900 rounded-lg shadow-sm"
            dir="auto"
          >
            {data?.title}
          </Card>
          <Typography
            variant="body2"
            color="text.secondary"
            className="mt-4 font-semibold text-lg"
          >
            Content:
          </Typography>
          <Card
            variant="outlined"
            className="mt-2 p-4 text-sm bg-indigo-50 text-indigo-900 rounded-lg shadow-sm"
            dir="auto"
          >
            {data?.content}
          </Card>
          <div className="mt-4 flex flex-col gap-2 ml-4">
            <Typography
              variant="body2"
              color="text.secondary"
              className="flex items-center gap-2"
            >
              <LockIcon fontSize="small" /> Password:{" "}
              {data?.password ? data?.password : "No Password"}
            </Typography>
            <div className="flex items-center gap-2">
              <Typography
                variant="body2"
                color="text.secondary"
                className="flex items-center gap-2"
              >
                <AccessTimeIcon fontSize="small" /> One Time Use:{" "}
                {data?.oneTime ? "Yes" : "No"}
              </Typography>
              {data.oneTime && (
                <Typography
                  color="orange"
                  variant="body2"
                  className="text-sm italic"
                >
                  *This clipboard will be lost when you leave this page!
                </Typography>
              )}
            </div>
            <Typography
              variant="body2"
              color="text.secondary"
              className="text-green-600"
            >
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
