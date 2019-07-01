import React from "react";
import "../styles/main_styles.css";
import "../styles/responsive.css";

const styles = {
    home_background: {
        backgroundImage: 'url(/images/index.jpg)'
    }
};

function Home() {
    return (

        <div className="home">
            <div className="home_background" style={styles.home_background}></div>
            <div className="home_content text-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="home_title">Belief in God  as Father, Son and Holy Spirit is at the heart of our faith.</div>
                            <div className="home_text">God has revealed himself through the Bible. God has revealed himself most clearly through the gift of his Son, Jesus Christ. God makes himself known personally to each believer through the work of the Holy Spirit.</div>
                            <div className="button home_link"><a href="#">join with us</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
