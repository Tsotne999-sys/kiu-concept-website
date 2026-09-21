import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About, CallToAction, Footer } from "@/components/editorial";
import { Programs } from "@/components/programs";
import { ComputerScience } from "@/components/computer-science";
import { Campus } from "@/components/campus";
import { Statistics } from "@/components/statistics";
import { StudentLife } from "@/components/student-life";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Programs />
        <ComputerScience />
        <Campus />
        <Statistics />
        <StudentLife />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
