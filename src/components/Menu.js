import React from "react";
import "../styles/main_styles.css";
import "../styles/responsive.css";

function Menu() {
    return (
        <div className="menu d-flex flex-column align-items-center justify-content-center">
            <div className="menu_content">
                <div className="cross_1 d-flex flex-column align-items-center justify-content-center"><img src="images/logo.png" alt="" /></div>
                    <form action="#" className="menu_search_form">
                        <input type="search" className="menu_search_input" placeholder="Search" required="required" />
                            <button className="menu_search_button d-flex flex-column align-items-center justify-content-center">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
			</form>
                        <nav class="menu_nav">
                            <ul>
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="sermons.html">Sermons</a></li>
                                <li><a href="events.html">Events</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
		</div>
                    <div className="menu_close"><i className="fa fa-times" aria-hidden="true"></i></div>
                </div>
                );
            }
            
            export default Menu;
