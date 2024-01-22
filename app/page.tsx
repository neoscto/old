import Advantages from "./components/advantages/Advantages";
import Blogs from "./components/Blogs";
import Comparison from "./components/Comparison";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Mentions from "./components/Mentions";

export default function Home() {
  return (
    <main className="mx-auto w-full flex flex-col bg-white">
      <Hero />
      <Mentions />
      <Advantages />
      <Comparison />
      <Contact />
      <Blogs />
    </main>
  );
}
