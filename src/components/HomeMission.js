import React from "react";
import { Parallax, Background } from 'react-parallax';
import "../styles/main_styles.css";
import "../styles/responsive.css";

function HomeMission() {
    return (
<div className="mission">
		<div className="mission_background parallax-window" data-parallax="scroll" data-image-src="/images/mission.jpg" data-speed="0.8"></div>
		<div className="mission_items d-flex flex-row flex-wrap align-items-start justify-content-start">

			<div className="mission_item text-center">
				<div className="mission_icon"><i className="fa fa-bell-o" aria-hidden="true"></i></div>
				<div className="mission_title">our mission</div>
				<div className="mission_text">Lorem ipsum dolor  amet, consectet adipiscing doelit. Sed a mauri suscipita utrum arcu , gravida nisl. Interdum mante ipsum.</div>
			</div>

			<div className="mission_item text-center">
				<div className="mission_icon"><i className="fa fa-flag-o" aria-hidden="true"></i></div>
				<div className="mission_title">our community</div>
				<div className="mission_text">Lorem ipsum dolor  amet, consectet adipiscing doelit. Sed a mauri suscipita utrum arcu , gravida nisl. Interdum mante ipsum.</div>
			</div>

			<div className="mission_item text-center">
				<div className="mission_icon"><i className="fa fa-heart-o" aria-hidden="true"></i></div>
				<div className="mission_title">our belief</div>
				<div className="mission_text">Lorem ipsum dolor  amet, consectet adipiscing doelit. Sed a mauri suscipita utrum arcu , gravida nisl. Interdum mante ipsum.</div>
			</div>

			<div className="mission_item text-center">
				<div className="mission_icon"><i className="fa fa-moon-o" aria-hidden="true"></i></div>
				<div className="mission_title">our faith</div>
				<div className="mission_text">Lorem ipsum dolor  amet, consectet adipiscing doelit. Sed a mauri suscipita utrum arcu , gravida nisl. Interdum mante ipsum.</div>
			</div>

		</div>
	</div>

);
}

export default HomeMission;