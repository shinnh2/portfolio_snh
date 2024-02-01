import MainTitle from "./MainTitle";
import ProjectItem from "./ProjectItem";
import projectData from "./../data/projectData";

const Project = () => {
	return (
		<div className="project">
			<div className="container main">
				<MainTitle title={"작업물"} subTitle={"개인 프로젝트"} />
				<div className="projects_total_info">개수: {projectData.length}</div>
				<ul className="project_list">
					{projectData.map((el, idx) => (
						<li key={idx}>
							<ProjectItem data={el} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default Project;
