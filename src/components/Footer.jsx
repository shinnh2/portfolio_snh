import VelogIcon from "./VelogIcon";
import GithubIcon from "./GithubIcon";

const Footer = () => {
	return (
		<div className="footer" id="footer">
			<div className="container main">
				<div className="my_links">
					<a
						href="https://velog.io/@shinnh2/posts"
						target="_blank"
						className="link velog"
					>
						<VelogIcon />
					</a>
					<a
						href="https://github.com/shinnh2"
						target="_blank"
						className="link github"
					>
						<GithubIcon />
					</a>
				</div>
				<p className="my_email">nahyeon.shin9@gmail.com</p>
				<p className="footer_comment">
					사용된 이미지들은 모두 상업적 목적이 아닌
					<br className="mobile_br" />
					포트폴리오 목적으로 사용되었습니다.
				</p>
			</div>
		</div>
	);
};
export default Footer;
