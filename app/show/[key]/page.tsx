"use server";

import NoData from "@/components/NoData";
import PasswordForm from "@/components/PasswordForm";
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

  if (data.password) {
    return <PasswordForm pass={data.password} />;
  }

  return (
    <div className="flex justify-center items-center h-screen p-4 sm:p-10  bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 w-full ">
      <ShowData data={data} keyValue={key} />
    </div>
  );
}
