import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalidCredential, setInvalidCredential] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignin = async (e: FormEvent) => {
    e.preventDefault(); // preventing from reloading the page

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_backendUrl}/api/v1/signin`,
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (e: any) {
      setInvalidCredential(true);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen font-satoshi    ">
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-6 w-6 text-purple-600" />
            <CardTitle className="text-2xl">Sign In</CardTitle>
          </div>
          <CardDescription className=" text-left text-gray-700">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSignin}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2 text-left   ">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setInvalidCredential(false)}
              />
            </div>
            <div className="grid gap-2 text-left ">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onFocus={() => setInvalidCredential(false)}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            {invalidCredential && (
              <div className=" transition transform  duration-500 ease-out  ">
                <p className=" text-red-300 mb-2 ">Invalid Credentials !</p>
              </div>
            )}
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700"
              type="submit"
            >
              Sign In
            </Button>
            {/* {error && <p className="text-red-500 mt-2">{error}</p>} */}
            <p className="mt-2 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/signup" className="text-purple-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
