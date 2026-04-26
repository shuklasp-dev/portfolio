import { Skill } from "../Utils/Types";

const Carousel = ({ skills }: { skills: Skill[] }) => {
  return (
    <section id="stack" className="card grid_item col-span-3 row-span-1 work">
      <div className="slide_wrapper">
        <div className="slide_track">
          {skills.map((skill) => (
            <img
              className="icon slide_item"
              src={skill.iconUrl}
              alt={skill.name}
              title={skill.name}
              key={skill.id}
            />
          ))}
        </div>
        <div className="slide_track">
          {skills.map((skill) => (
            <img
              className="icon slide_item"
              src={skill.iconUrl}
              alt={skill.name}
              title={skill.name}
              key={skill.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;