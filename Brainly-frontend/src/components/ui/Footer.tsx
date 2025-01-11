import { Brain, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex w-full font-satoshi flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between">
      <div className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Second Brain. All rights reserved.
      </div>
      <div className="flex items-center space-x-4">
        <Link
          to="https://x.com/YashJejurkar"
          target="_blank"
          className="text-muted-foreground hover:text-primary"
        >
          <Twitter className="size-5" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          to="http://github.com/JejurkarYash"
          target="_blank"
          className="text-muted-foreground hover:text-primary"
        >
          <Github className="size-5" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link to="#" className="text-muted-foreground hover:text-primary">
          <Brain className="size-5" />
          <span className="sr-only">Community</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
