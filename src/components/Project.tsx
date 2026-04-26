import { Project as ProjectType } from "../Utils/Types"

const Project = ({project}:{project: ProjectType}) => {
  return (
    <section id="project" className="card grid_item col-span-3 row-span-3 work">
            <a href={project.previewUrl} target="_blank">
                <img src={project.imageUrl} alt={project.name} title={project.name} />
            </a>
            <h2 className="card_body">{project.name}</h2>
        </section>
  )
}

export default Project