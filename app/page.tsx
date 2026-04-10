import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import OnlineCare from "@/components/OnlineCare";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[72px] md:pt-20">
        <Hero />
        <Welcome />
        <About />
        <Services />
        <OnlineCare />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
