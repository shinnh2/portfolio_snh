import MainTitle from "./MainTitle";
import ProfileIconEducation from "./ProfileIconEducation";
import ProfileIconCertification from "./ProfileIconCertification";
import ProfileIconCareer from "./ProfileIconCareer";

const profileContents = [
	{
		title: "경력",
		desc: [
			"약 2년 6개월",
			"누리어시스템 2019.08~2020.09",
			"앰플인터랙티브 2017.12~2019.3",
		],
	},
	{
		title: "수료한 교육",
		desc: [
			"코드스테이츠 SEB(소프트웨어 엔지니어링 부트캠프) 41기 프론트엔드 수료",
			"그린컴퓨터아카데미 웹 프론트엔드 과정 수료",
		],
	},
	{
		title: "자격증",
		desc: [
			"정보처리기사 (2019.5.22)",
			"컴퓨터활용능력 1급 (2022.8.26)",
			"웹디자인 기능사 (2017.9.29)",
			"컴퓨터그래픽스 운용기능사 (2016.6.24)",
		],
	},
];

const iconComponent = (idx) => {
	switch (idx) {
		case 0:
			return <ProfileIconEducation />;
		case 1:
			return <ProfileIconCertification />;
		case 2:
			return <ProfileIconCareer />;
	}
};

const Profile = () => {
	return (
		<div className="profile">
			<div className="container main">
				<MainTitle title={"프로필"} />
				<div className="profile_content_wrap">
					{profileContents.map((el, idx) => {
						return (
							<div className="profile_content" key={idx}>
								{iconComponent(idx)}
								<h3 className="profile_content_title">{el.title}</h3>
								<ul className="profile_content_description">
									{el.desc.map((descEl, descIdx) => (
										<li key={descIdx}>{descEl}</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default Profile;
