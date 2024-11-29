// "use client";
// import FindClipBtn from "@/components/FindClipBtn";
// import NewClipBtn from "@/components/NewClipBtn";
// import OneTimeUseCheckBox from "@/components/OneTimeUseCheckBox";
// import Password from "@/components/Password";
// import { Card } from "@mui/material";
// import { RootState } from "@reduxjs/toolkit/query/react";
// import dynamic from "next/dynamic";
// import { useSelector } from "react-redux";

// const ExpirationSlider = dynamic(
//   () => import("@/components/ExpirationSlider"),
//   {
//     ssr: false,
//   }
// );
// const AddNewClipBtn = dynamic(() => import("@/components/AddNewClipBtn"), {
//   ssr: false,
// });
// const ClipTitle = dynamic(() => import("@/components/ClipTitle"), {
//   ssr: false,
// });
// const TitleError = dynamic(() => import("@/components/TitleError"), {
//   ssr: false,
// });
// const ClipContent = dynamic(() => import("@/components/ClipContent"), {
//   ssr: false,
// });
// const ContentError = dynamic(() => import("@/components/ContentError"), {
//   ssr: false,
// });
// const SendingClipSuccess = dynamic(
//   () => import("@/components/SendingClipSuccess"),
//   {
//     ssr: false,
//   }
// );

// export default function Home() {
//   const expiration = useSelector((state: any) => state.expiration.expire);
//   return (
//     <div className="flex font-mono justify-center items-center p-4 bg-[#F0F0F0] sm:p-10 w-full h-screen">
//       <SendingClipSuccess />
//       <Card className="w-full h-fit font-mono p-4 sm:p-10 ">
//         <div className="flex flex-col gap-4 mt-6">
//           <div className="flex flex-wrap gap-2 ">
//             <div className="text-2xl font-bold text-left mb-4">
//               Create your clipboard:
//             </div>
//             <div className="text-sm text-gray-500 ml-2">
//               Add a title and content to save.
//             </div>
//           </div>
//           <ClipTitle />
//           <TitleError />
//           <ClipContent />
//           <ContentError />
//           <div className="flex flex-wrap justify-center items-center w-full">
//             <div className="flex flex-col gap-4 w-full ml-4">
//               <div className="flex gap-4  font-semibold flex-col  ">
//                 <div className="text-lg">
//                   Expiration: {expiration} {expiration > 1 ? "Hours" : "Hour"}
//                 </div>

//                 <ExpirationSlider />
//               </div>
//               <div className="flex items-center gap-4">
//                 <OneTimeUseCheckBox />
//               </div>

//               <Password />
//             </div>
//             <div className="flex items-center gap-6 mt-10">
//               <AddNewClipBtn />
//               <FindClipBtn />
//             </div>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// }
"use client";

import FindClipBtn from "@/components/FindClipBtn";
import NewClipBtn from "@/components/NewClipBtn";
import OneTimeUseCheckBox from "@/components/OneTimeUseCheckBox";
import Password from "@/components/Password";
import { Card } from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query/react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const ExpirationSlider = dynamic(
  () => import("@/components/ExpirationSlider"),
  {
    ssr: false,
  }
);
const AddNewClipBtn = dynamic(() => import("@/components/AddNewClipBtn"), {
  ssr: false,
});
const ClipTitle = dynamic(() => import("@/components/ClipTitle"), {
  ssr: false,
});
const TitleError = dynamic(() => import("@/components/TitleError"), {
  ssr: false,
});
const ClipContent = dynamic(() => import("@/components/ClipContent"), {
  ssr: false,
});
const ContentError = dynamic(() => import("@/components/ContentError"), {
  ssr: false,
});
const SendingClipSuccess = dynamic(
  () => import("@/components/SendingClipSuccess"),
  {
    ssr: false,
  }
);

export default function Home() {
  const expiration = useSelector((state: any) => state.expiration.expire);

  return (
    <div className="flex justify-center items-center p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-screen font-mono">
      <SendingClipSuccess />
      <Card className="w-full max-w-4xl h-fit p-8 sm:p-12 bg-white rounded-3xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-x-105 mt-10">
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex flex-wrap gap-4 items-center justify-start">
            <div className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4">
              Create your clipboard:
            </div>
            <div className="text-sm sm:text-lg text-gray-600 ml-2">
              Add a title and content to save, and set an expiration time.
            </div>
          </div>
          <ClipTitle />
          <TitleError />
          <ClipContent />
          <ContentError />
          <div className="flex flex-wrap justify-center items-center w-full mt-8">
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-4">
                <div className="text-sm sm:text-lg font-semibold text-gray-700">
                  Expiration: {expiration} {expiration > 1 ? "Days" : "Day"}
                </div>
                <ExpirationSlider />
              </div>
              <div className="flex items-center gap-4">
                <OneTimeUseCheckBox />
              </div>
              <Password />
            </div>
            <div className="flex items-center gap-8 mt-12">
              <AddNewClipBtn />
              <FindClipBtn />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
