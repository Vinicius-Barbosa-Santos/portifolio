import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 bg-slate-950 text-slate-200 min-h-screen">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Testimonials />
        {/* <Contact /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
