import React from "react";
function Tech(props){
  return<span>{props.tech}</span>
}
function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map(tech =><Tech tech={tech} key={technologies.indexOf(tech)}/> )}
      </div>
    </div>
  );
}

export default ProjectItem;
