import HeroSection from "../components/Landing/Hero/HeroSection";
import Nav from "../components/Landing/Nav/Nav";
import Gradient from "../project/components/Background/Gradient";
import StarsBackground from "../project/components/Background/StarsBackground";

export default function Home() {
  return (
    <>
      <main>
        <StarsBackground />
        <Nav />
        <HeroSection />
        <Gradient />
      </main>
    </>
  );
}
