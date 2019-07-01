import React from "react";
import "../styles/main_styles.css";
import "../styles/responsive.css";

function HomeSermons() {
    return (

        <div className="sermons">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section_title_container text-center">
                            <div className="section_title">sermons today</div>
                            <div className="section_subtitle">Our lives in praising God</div>
                        </div>
                    </div>
                </div>
                <div className="row sermons_row">
                    <div className="col-lg-4 sermon_col">
                        <div className="card">
                            <img className="card-img-top" src="/images/sermon_1.jpg" alt="" />
                                <div className="card-body text-center">
                                    <div className="card-title sermon_title"><a href="sermon.html">Sermons on Prayer:  Running Well, FinIshing Strong</a></div>
                                    <div className="card-text sermon_info_container">
                                        <div className="sermon_info">
                                            <div className="sermon_info_title">Pastor: </div>
                                            <ul className="sermon_info_list">
                                                <li><a href="#">Josh Brighton</a></li>
                                            </ul>
                                        </div>
                                        <div className="sermon_info">
                                            <div className="sermon_info_title">Categories: </div>
                                            <ul className="sermon_info_list">
                                                <li><a href="#">God, </a></li>
                                                <li><a href="#">Prayer</a></li>
                                            </ul>
                                        </div>
                                        <div className="sermon_links">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-link" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-file-pdf-o" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-download" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
					</div>
                        </div>

                        <div className="col-lg-4 sermon_col">
                            <div className="card">
                                <img className="card-img-top" src="/images/sermon_2.jpg" alt="" />
                                    <div className="card-body text-center">
                                        <div className="card-title sermon_title"><a href="sermon.html">Sermons on Faith: A Life Worth Living, A new purpose</a></div>
                                        <div className="card-text sermon_info_container">
                                            <div className="sermon_info">
                                                <div className="sermon_info_title">Pastor: </div>
                                                <ul className="sermon_info_list">
                                                    <li><a href="#">Julia Amber</a></li>
                                                </ul>
                                            </div>
                                            <div className="sermon_info">
                                                <div className="sermon_info_title">Categories: </div>
                                                <ul className="sermon_info_list">
                                                    <li><a href="#">God, </a></li>
                                                    <li><a href="#">Faith</a></li>
                                                </ul>
                                            </div>
                                            <div className="sermon_links">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-link" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-file-pdf-o" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-download" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
					</div>
                            </div>

                            <div className="col-lg-4 sermon_col">
                                <div className="card">
                                    <img className="card-img-top" src="/images/sermon_3.jpg" alt="" />
                                        <div className="card-body text-center">
                                            <div className="card-title sermon_title"><a href="sermon.html">Sermons for Communion Services: Come to the Table</a></div>
                                            <div className="card-text sermon_info_container">
                                                <div className="sermon_info">
                                                    <div className="sermon_info_title">Pastor: </div>
                                                    <ul className="sermon_info_list">
                                                        <li><a href="#">Ashley Young</a></li>
                                                    </ul>
                                                </div>
                                                <div className="sermon_info">
                                                    <div className="sermon_info_title">Categories: </div>
                                                    <ul className="sermon_info_list">
                                                        <li><a href="#">God, </a></li>
                                                        <li><a href="#">Communion</a></li>
                                                    </ul>
                                                </div>
                                                <div className="sermon_links">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-link" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-file-pdf-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-download" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
					</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    );
                }
                
export default HomeSermons;