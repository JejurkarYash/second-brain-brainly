import axios from "axios";
import { useEffect, useState } from "react";

export const useContents = () => {
  const [contents, setContents] = useState([]);
  const [username, setUsername] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_backendUrl}/api/v1/content`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    if (response.data) {
      setContents(response.data.content);
      setUsername(response.data.username);
    }
  };

  // it will fetch the data after every 10 seconds
  useEffect(() => {
    fetchData();

    const timeInterval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return { contents, fetchData, username };
};
