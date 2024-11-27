import NoData from "@/components/NoData";
import ShowData from "@/components/ShowData";
import axios from "axios";

interface ShowPageProps {
  params: Promise<{ key: string }>;
}
export default async function ShowPage({ params }: ShowPageProps) {
  const { key } = await params;

  const res = await axios.post(`https://clippy-theta.vercel.app/api/redis`, {
    key: key,
    command: "get",
  });

  if (!res.data.result) return <NoData />;

  const data = JSON.parse(res.data.result);
  return <ShowData data={data} keyValue={key} />;
}
