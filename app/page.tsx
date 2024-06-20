import { Cta } from "./components/Cta";
import { Faq } from "./components/faq";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Pricing } from "./components/pricing";
import { Team } from './components/team';
import { Testimonial } from './components/testimonial';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
        <Faq />
        <Pricing />
        <Team />
        <Testimonial />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
