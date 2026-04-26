import { ExperienceData } from "../Utils/Types";

interface PropType {
  experiences: ExperienceData[]
}

const Experience: React.FC<PropType> = ({experiences}) => {
  function getTotalExperiece(){
    return "4"
  }
  return (
    <section
      id="experience"
      className="card grid_item col-span-3 row-span-3 work"
    >
      <h2>Experience</h2>
      <p>{`Total: ${getTotalExperiece()}`}</p>
      {experiences.map((experience) => (
        <div className="card_body" key={experience.id}>
          <div>
            <h3>{experience.role}</h3>
            <p>{experience.startDate}</p>
          </div>
          <a target="_blank">
            <img
              src={experience.companyLogoUrl}
              alt={experience.companyName}
              title={experience.companyName}
            />
          </a>
        </div>
      ))}
    </section>
  );
};

export default Experience;
