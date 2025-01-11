import { Brain, X, LogOut, LogIn, User, Star } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { useContents } from "@/hooks/useContents";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { username } = useContents();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserLoggedIn(true);
    }
  }, [username]);

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    setUserLoggedIn(false);
  };

  const handleGetStarted = () => {
    if (userLoggedIn) {
      navigate("/notes");
    } else {
      navigate("/signin");
    }
  };

  const handleSignIn = () => navigate("/signin");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 font-satoshi">
      <div className="container flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <Brain size={32} className="text-primary" />
            <span className="text-xl font-bold">Second Brain</span>
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          {!menuOpen && (
            <button
              onClick={() => setMenuOpen(true)}
              className="text-primary focus:outline-none"
            >
              ☰
            </button>
          )}
        </div>

        {/* Navigation Links for Medium+ Screens */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="#" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link to="#" className="text-sm font-medium hover:text-primary">
            How it works
          </Link>
          {userLoggedIn ? (
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <span>Welcome</span>
                <span className="font-semibold">{username}</span>
              </span>
              <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={handleSignIn}>
                Sign in
              </Button>
              <Button onClick={handleGetStarted}>Get Started</Button>
            </div>
          )}
        </nav>
      </div>

      {/* Slide-in Menu Drawer for Small Screens */}
      {menuOpen && (
        <div className="  inset-0 z-50 flex items-end md:hidden ">
          <div className="  w-full bg-white rounded-t-xl p-6 shadow-lg">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-primary text-2xl"
            >
              <X />
            </button>
            <div className="flex flex-col items-center space-y-6">
              <Link
                to="#"
                className="flex items-center space-x-2 text-lg font-medium text-gray-800 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                <Star size={20} />
                <span>Features</span>
              </Link>
              <Link
                to="#"
                className="flex items-center space-x-2 text-lg font-medium text-gray-800 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                <User size={20} />
                <span>How it works</span>
              </Link>
              {userLoggedIn ? (
                <div className="flex flex-col items-center space-y-3">
                  <span className="flex items-center space-x-1 text-lg text-gray-800">
                    <span>Welcome</span>
                    <span className="font-semibold">{username}</span>
                  </span>
                  <Button onClick={handleLogoutClick}>
                    <LogOut size={20} className="mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-3">
                  <Button variant="outline" onClick={handleSignIn}>
                    <LogIn size={20} className="mr-2" />
                    Sign in
                  </Button>
                  <Button onClick={handleGetStarted}>Get Started</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
