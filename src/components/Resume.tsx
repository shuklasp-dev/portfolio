import React from "react";
import { getMonthAndYear } from "../Utils/helper";
import { Resume as ResumeType } from "../Utils/Types";
import viewIcon from '../assets/icons/view.svg'
import downloadIcon from '../assets/icons/download.svg'

interface PropType {
  resume: ResumeType,
  updatedAt: string,
}

const Resume: React.FC<PropType> = ({resume, updatedAt}) => {
  return (
    <section
      id="resume"
      className="card card_header grid_item col-span-2 row-span-2 work"
    >
      <div>
        <h2>Resume</h2>
        <p>{getMonthAndYear(updatedAt)}</p>
      </div>
      <div>
        <a
          href={resume.fileUrl}
          target="_blank"
        >
          <img className="icon" src={viewIcon} alt="view" title="View Resume" />
        </a>
        <a
          href={resume.fileUrl}
          download={`Resume`}
          target="_blank"
        >
          <img className="icon" src={downloadIcon} alt="download" title="Download Resume" />
        </a>
      </div>
    </section>
  );
};

export default Resume;
