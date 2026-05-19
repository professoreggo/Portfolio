import "./Experience.css";
import ExperienceItem from "./ExperienceItem";

function Experience({ experience }) {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <h2 className="section__title">Experience</h2>
        <div className="experience__list">
          {experience.map((job,index) => (
            <ExperienceItem
              key={job.id}
              company={job.company}
              role={job.role}
              period={job.period}
              bullets={job.bullets}
              logo={job.logo}
              image={job.image}
              index={index}

            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Experience;
