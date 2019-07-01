import React from "react";
import "../styles/main_styles.css";
import "../styles/responsive.css";

function EventTop() {
    return (
        <div className="event">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="event_container d-flex flex-lg-row flex-column align-items-center justify-content-start">
                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                <div className="event_day">21</div>
                                <div className="event_month">apr</div>
                            </div>
                            <div className="event_content">
                                <div className="event_title">UPCOMING EVENT: <a href="#">easter services</a></div>
                                <ul className="event_row">
                                    <li>
                                        <div className="event_icon"><img src="images/calendar.png" alt="" /></div>
                                            <span>08:30 AM, 10:00 AM, 11:30 AM (5:00 PM on Sat, Apr 20)</span>
								</li>
                                        <li>
                                            <div className="event_icon"><img src="images/location.png" alt="" /></div>
                                                <span>17010 Pomerado Rd, San Diego, California</span>
								</li>
							</ul>
						</div>
                                    <div className="event_timer_container ml-lg-auto">
                                        <ul className="event_timer">
                                            <li><div id="day" class="event_num">00</div><div class="event_ss">day</div></li>
                                            <li><div id="hour" class="event_num">00</div><div class="event_ss">hrs</div></li>
                                            <li><div id="minute" class="event_num">00</div><div class="event_ss">min</div></li>
                                            <li><div id="second" class="event_num">00</div><div class="event_ss">sec</div></li>
                                        </ul>
                                    </div>
					</div>
                            </div>
                        </div>
                    </div>
                </div>

                );
            }
            
            export default EventTop;
