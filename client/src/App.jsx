import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import data from "./data/portfolio.json";


function App() {
  return (
    <div>
      <Navbar />
      <Hero
        name={data.personal.name}
        title={data.personal.title}
        summary={data.personal.summary}
      />
      <Skills skills={data.skills} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects}/>
      <Contact email={data.personal.email}/>
    </div>
  );
}
export default App;
