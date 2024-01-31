import MainTitle from "./MainTitle";
import ProjectItem from "./ProjectItem";
import workData from "../data/workData";

const Work = () => {
	return (
		<div className="work">
			<div className="container main">
				<MainTitle title={"작업물"} subTitle={"경력 프로젝트"} />
				<div className="projects_total_info">개수: {workData.length}</div>
				<ul className="project_list">
					{workData.map((el, idx) => (
						<li key={idx}>
							<ProjectItem data={el} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default Work;
