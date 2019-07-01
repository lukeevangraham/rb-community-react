import React from "react";
import "../styles/main_styles.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  top_bar_background: {
    backgroundImage: 'url(/images/top_bar.jpg)'
  },
  headingStyle: {
    fontSize: 100
  }
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    /* <header className="header">
      <h1 style={styles.headingStyle}>Welcome</h1>
    </header> */



    <header className="header">
			
            {/* Top Bar */}
            <div className="top_bar">
                <div className="top_bar_background" style={styles.top_bar_background}></div>
                <div className="top_bar_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                                    <ul className="top_bar_contact_list">
                                        <li>
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <div>Email: info@rbcpc.org </div>
                                        </li>
                                        <li>
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            <div>Call Us: 858.487.0811</div>
                                        </li>
                                    </ul>
                                    <div className="top_bar_social ml-auto">
                                        <ul className="social_list">
                                            <li><a href="https://www.facebook.com/rbcpc/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="https://twitter.com/rbcpc/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="https://www.instagram.com/rbcpc/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>				
            </div>
    
            {/* Header Content */}
            <div className="header_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                <div className="logo_container">
                                    <a href="#">
                                        <div className="logo"><img src="/images/logo.png" alt=""/></div>
                                        <div className="logo_text">RB Community</div>
                                    </a>
                                </div>
                                <nav className="main_nav_contaner ml-auto">
                                    <ul className="main_nav">
                                        <li className="active"><a href="#">home</a></li>
                                        <li><a href="about.html">about</a></li>
                                        <li><a href="sermons.html">sermons</a></li>
                                        <li><a href="events.html">events</a></li>
                                        <li><a href="blog.html">blog</a></li>
                                        <li><a href="http://www.rbcpcpreschool.org/">preschool</a></li>
                                    </ul>
                                    {/* <div class="search_button"><i class="fa fa-search" aria-hidden="true"></i></div> */}
                                </nav>
    
                                {/* Hamburger */}
    
                                <div className="hamburger ml-auto">
                                    <i className="fa fa-bars" aria-hidden="true"></i>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            {/* Header Search Panel */}
            <div className="header_search_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
                                <form action="#" className="header_search_form">
                                    <input type="search" className="search_input" placeholder="Search" required="required" />
                                    <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>			
            </div>			
        </header>
  );
}

export default Header;
