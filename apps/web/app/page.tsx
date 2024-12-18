import HeroSection from "../components/Landing/Hero/HeroSection";
import PaymentSection from "../components/Landing/Hero/PaymentSection";
import QASection from "../components/Landing/Hero/QASection";
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
        <section className="h-full py-10 px-14 mb-32">
          <PaymentSection />
        </section>
        <section className="h-full">
          <QASection />
        </section>
        <section className="h-96 flex justify-center items-center">
          <span className=" lg:text-8xl text-5xl sm:text-6xl md:text-7xl flex  bg-gradient-to-b from-gray-500/30  to-gray-500/10 bg-clip-text text-transparent">
            <p className="font-bold">GetPortfolio</p>
            <p>.com</p>
          </span>
        </section>
      </main>
    </>
  );
}
