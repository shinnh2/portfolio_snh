import { useState } from "react";
import ArrowDown from "./../assets/arrow_down.svg";

// interface Data 	{
// 	projectName: string;
// 	proejctDescription: string[];
// 	client?: string;
// 	period: string;
// 	engagement: string;
// 	projectImg: string; //파일명
// 	projectLink: string;
//  github: string;
// }

const ProjectItem = ({ data }) => {
	const [isHideContent, setIsHideContent] = useState(true);
	const handleClickViewToggle = () => {
		setIsHideContent((prevValue) => !prevValue);
	};

	return (
		<div
			className={isHideContent ? "project_item" : "project_item show_content"}
		>
			<div className="project_img_wrap">
				<img src={`./project_img/${data.projectImg}`} />
			</div>
			<div className="project_content_wrap">
				<div className="project_name_wrap">
					<h3 className="project_name">{data.projectName}</h3>
					<button
						className="project_view_toggle"
						onClick={handleClickViewToggle}
					>
						<img src={ArrowDown} />
					</button>
				</div>
				<div className="hideable">
					<ul className="project_desc">
						{data.proejctDescription.map((el, idx) => (
							<li key={idx}>{el}</li>
						))}
					</ul>
					{data.client ? (
						<dl className="project_info">
							<dt className="title">클라이언트</dt>
							<dd className="content">{data.client}</dd>
						</dl>
					) : null}
					<dl className="project_info">
						<dt className="title">기간</dt>
						<dd className="content">{data.period}</dd>
					</dl>
					<dl className="project_info">
						<dt className="title">참여도</dt>
						<dd className="content">{data.engagement}</dd>
					</dl>
					{data.github ? (
						<dl className="project_info">
							<dt className="title">Github</dt>
							<dd className="content">
								<a href={data.github}>{data.github}</a>
							</dd>
						</dl>
					) : null}
					<a href={data.projectLink} className="project_link" target="_blank">
						프로젝트 상세보기
					</a>
				</div>
			</div>
		</div>
	);
};
export default ProjectItem;
