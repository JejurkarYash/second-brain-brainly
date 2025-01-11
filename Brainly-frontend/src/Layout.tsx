import Features from "./components/ui/Features";
import Footer from "./components/ui/Footer";
import Hero from "./components/ui/Hero";
import HowItWorks from "./components/ui/HowItWorks";
import NavigationBar from "./components/ui/NavigationBar";

const Layout = () => {
  return (
    <main>
      <header>
        {/* navigation bar */}
        <NavigationBar />
        {/*  Hero section  */}
        <Hero />
        {/* // Features Section */}
        <Features />
        <HowItWorks />
        <Footer />
      </header>
    </main>
  );
};

export default Layout;
