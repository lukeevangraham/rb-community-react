import React from "react";
import "../styles/main_styles.css";
import "../styles/responsive.css";

function HomeAbout() {
    return (

<div className="about">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title_container text-center">
						<div className="section_title">welcome to rb community church</div>
						<div className="section_subtitle">It's the start of an amazing journey of faith</div>
					</div>
				</div>
			</div>
			<div className="row about_row">
				<div className="col-lg-6">
					<div className="about_image"><img src="/images/about.jpg" alt="" /></div>
				</div>
				<div className="col-lg-6">
					<div className="about_content">
						<div className="about_text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gestas ant eget risus varius, euismod tellus suscipit. Aenean condimentum cond mentum ulla, vitae imperd urna varius volutpa. Mauris lobotis comodo mollis nolle. In vetib  velit ifermentum empor euismod. Cras gravida maximus ligula ac posuere. Maecenas auctor interdum varius sollicitudin orci. Phasellus quis volutpat ex, id maximus magna. Sed elit posuere augue, tincid unt non ipsum sit amet, maximus sagittis lectus. Quisque tincidunt, antevis pharetra sodales, non ante magna tempus nulla, sed molestie orci magna quis tellus. Nulla facilisi sit amet libero sed condimentum.</p>
						</div>
						<div className="button about_button"><a href="#">read story</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	);
}

export default HomeAbout;
    