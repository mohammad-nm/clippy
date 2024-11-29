// import NoData from "@/components/NoData";
// import ShowData from "@/components/ShowData";
// import axios from "axios";

// interface ShowPageProps {
//   params: Promise<{ key: string }>;
// }
// export default async function ShowPage({ params }: ShowPageProps) {
//   const { key } = await params;

//   const res = await axios.post(`https://clippy-theta.vercel.app/api/redis`, {
//     key: key,
//     command: "get",
//   });

//   if (!res.data.result) return <NoData />;

//   const data = JSON.parse(res.data.result);
//   return <ShowData data={data} keyValue={key} />;
// }
import NoData from "@/components/NoData";
import ShowData from "@/components/ShowData";
import axios from "axios";
import { Box, Typography } from "@mui/material";

interface ShowPageProps {
  params: Promise<{ key: string }>;
}

export default async function ShowPage({ params }: ShowPageProps) {
  const { key } = await params;

  // Fetch the clipboard data from the API
  let data = null;
  let error = null;

  try {
    const res = await axios.post(`https://clippy-theta.vercel.app/api/redis`, {
      key: key,
      command: "get",
    });

    if (res.data.result) {
      // Parse and pass data to the page
      data = JSON.parse(res.data.result);
    } else {
      error = "No data found for the provided key.";
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    error = "An error occurred while fetching data.";
  }

  // Handle loading state, or no data/error state
  if (error) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <Typography variant="h5" color="error" className="text-center">
          Oops! Something went wrong: {error}
        </Typography>
      </Box>
    );
  }

  if (!data) {
    return <NoData />;
  }

  // Return the ShowData component with fetched data
  return (
    <div className="flex justify-center items-center h-screen p-4 sm:p-10 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 w-full">
      <ShowData data={data} keyValue={key} />
    </div>
  );
}
