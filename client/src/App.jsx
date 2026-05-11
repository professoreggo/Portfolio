import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
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
    </div>
  );
}
export default App;
