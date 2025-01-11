import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentCard } from "@/components/ui/ContentCard";
import EmptyDashboard from "@/components/EmptyDashboard";

const ShareBrainPage = () => {
  const { brainId } = useParams();
  const [content, setContent] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get(` ${import.meta.env.VITE_backendUrl}/api/v1/brain/${brainId}`)
      .then((response) => {
        setContent(response.data.contents);
        setUsername(response.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [brainId]);

  return (
    <main className=" fixed top-0 left-0  bg-purple-50 h-screen w-screen overflow-x-hidden font-satoshi  ">
      {/* header */}
      <div className=" fixed top-0 left-0 w-screen  bg-white h-20   border-2 border-gray-200 shadow-sm flex flex-col  ">
        <div className="flex flex-col items-start mx-4   ">
          <h1 className=" text-lg md:text-xl   font-semibold mt-2 ">
            {` ${username}'s Second Brain`}
          </h1>
          <p className=" text-sm text-gray-500 ">Shared with you </p>
        </div>
      </div>

      {/* content  */}
      <div className=" py-16  ">
        {content.length === 0 ? (
          <EmptyDashboard />
        ) : (
          <div className="    grid grid-cols-1 items-center justify-center mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3      ">
            {content.map(({ title, link, type }) => (
              <span className=" w-[22rem] min-h-96     items-center m-6     ">
                <ContentCard url={link} type={type} title={title} />
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer  */}
    </main>
  );
};

export default ShareBrainPage;
