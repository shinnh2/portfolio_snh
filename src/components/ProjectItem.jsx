// interface Data 	{
// 	projectName: string;
// 	proejctDescription: string[];
// 	client: string;
// 	period: string;
// 	engagement: string;
// 	projectImg: string; //파일명
// 	projectLink: string;
// }

const ProjectItem = ({ data }) => {
	return (
		<div className="project_item">
			<div className="project_img_wrap">
				<img src={`./project_img/${data.projectImg}`} />
			</div>
			<div className="project_content_wrap">
				<h3 className="project_name">{data.projectName}</h3>
				<ul className="project_desc">
					{data.proejctDescription.map((el, idx) => (
						<li key={idx}>{el}</li>
					))}
				</ul>
				<dl className="project_info">
					<dt className="title">클라이언트</dt>
					<dd className="content">{data.client}</dd>
				</dl>
				<dl className="project_info">
					<dt className="title">기간</dt>
					<dd className="content">{data.period}</dd>
				</dl>
				<dl className="project_info">
					<dt className="title">참여도</dt>
					<dd className="content">{data.engagement}</dd>
				</dl>
				<a href={data.projectLink} className="project_link" target="_blank">
					프로젝트 상세보기
				</a>
			</div>
		</div>
	);
};
export default ProjectItem;
