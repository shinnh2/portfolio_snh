import MainTitle from "./MainTitle";

const skillsSet = [
	{
		title: "실무 경험 있음",
		skills: ["Javascript", "HTML", "CSS", "JQuery"],
		em: true,
	},
	{
		title: "협업 프로젝트 경험 있음",
		skills: ["React", "Github", "Git"],
		em: false,
	},
	{
		title: "개인 실습 경험 있음",
		skills: ["Typescript"],
		em: false,
	},
];

const Skills = () => {
	return (
		<div className="skills" id="skills">
			<div className="container main">
				<MainTitle title={"스킬"} />
				<div className="skills_wrap">
					{skillsSet.map((el, idx) => (
						<dl className="skills_set" key={idx}>
							<dt className="type">{el.title}</dt>
							{el.skills.map((skill, skillIdx) => (
								<dd className={el.em ? "skill em" : "skill"} key={skillIdx}>
									{skill}
								</dd>
							))}
						</dl>
					))}
				</div>
			</div>
		</div>
	);
};
export default Skills;
