"use server";
import NewClipBtn from "@/components/NewClipBtn";
import { Typography } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import axios from "axios";
export default async function ShowPage({
  params,
}: {
  params: { key: string };
}) {
  const { key } = params;
  const res = await axios.post(`http://localhost:3000/api/redis`, {
    key: key,
    command: "get",
  });
  const data = JSON.parse(res.data.result);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          KEY: {key}
        </Typography>
        <Typography variant="h6" component="div">
          {data?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.content}
        </Typography>
      </CardContent>
      <NewClipBtn />
    </Card>
  );
}
