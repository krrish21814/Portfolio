import { Home } from "./components/Home";
import { About } from "./components/About";
import Projects from "./components/Projects";


export default function Main() {
  return (
    <main className="relative overflow-x-hidden h-screen overflow-y-auto">
      <section id="home" className="snap-start h-screen">
        <Home/>
      </section>

      <section id="about" className="snap-start h-screen">
        <About/>
      </section>

      <section id="projects" className="snap-start h-screen">
        <Projects/>
      </section>
    </main>
  );
}
