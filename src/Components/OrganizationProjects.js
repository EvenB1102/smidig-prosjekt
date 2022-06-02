import React from "react";
import OrganizationProjectStyle from "../css/OrganizationProjectStyle.css"
import CharityCard from "./CharityCard";

const OrganizationProjects = ({title}) => {
    return (
        <div className="projectsWrapper">
            <div class="projectsNav">
                <div className="projectsNavButton">
                    <a href="/">Ongoing Projects</a>
                    <a href="/">Completed Projects</a>
                </div>
            </div>
            <div className="projectCardContainer">
                <h2>{title}</h2>
                <div className="projectCard">
                    <CharityCard></CharityCard>
                    <CharityCard></CharityCard>
                    <CharityCard></CharityCard>
                </div>
            </div>
        </div>
    )
}

export default OrganizationProjects