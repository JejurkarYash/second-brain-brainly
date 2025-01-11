import { useEffect } from "react";

export const useTwitterScript = () => {
  useEffect(() => {
    // Check if the script is already loaded
    if (
      !document.querySelector(
        "script[src='https://platform.twitter.com/widgets.js']"
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
};
