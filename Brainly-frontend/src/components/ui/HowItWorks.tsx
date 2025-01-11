import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

const HowItWorks = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin");
    } else {
      navigate("/notes");
    }
  };
  return (
    <section
      id="how-it-works"
      className="container space-y-12 py-24 md:py-32 font-satoshi"
    >
      <div className="mx-auto max-w-[600px] space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          How It Works
        </h2>
        <p className="text-gray-500">
          Start organizing your digital content in three simple steps.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {[1, 2, 3].map((step) => (
          <div key={step} className="relative space-y-4 rounded-lg border p-6">
            <div className="absolute -top-4 left-6 flex size-8 items-center justify-center rounded-full bg-[#6366f1] text-sm font-bold text-white">
              {step}
            </div>
            {/* <Image
              src={`/placeholder.svg?height=200&width=400`}
              width={400}
              height={200}
              alt={`Step ${step}`}
              className="rounded-lg object-cover"
            /> */}
            <h3 className="font-semibold">
              {step === 1
                ? "Save Content"
                : step === 2
                ? "Organize with Tags"
                : "Access Anywhere"}
            </h3>
            <p className="text-sm text-gray-500">
              {step === 1
                ? "Save any digital content with our browser extension or mobile app."
                : step === 2
                ? "Add tags and organize your content into collections."
                : "Access your second brain from any device, anytime."}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button
          size="lg"
          className="bg-[#6366f1] hover:bg-[#6366f1]/90"
          onClick={handleGetStarted}
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default HowItWorks;
