import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import homeImage from '../images/home1.png';
import faqImage from '../images/faq.png';

import amazonLogo from '../images/amazonLogo.png';
import appleLogo from '../images/appleLogo.png';
import asicsLogo from '../images/asicsLogo.png';
import adidasLogo from '../images/adidasLogo.png';
import pinterestLogo from '../images/pinterestLogo.png';

import kitkatLogo from '../images/kitkatLogo.png';
import dieselLogo from '../images/dieselLogo.png';
import airbnbLogo from '../images/airbnbLogo.png';
import ebayLogo from '../images/ebayLogo.png';
import disneyLogo from '../images/disneyLogo.png';

import netflixLogo from '../images/netflixLogo.png';
import burgerkingLogo from '../images/burgerkingLogo.png';
import emiratesLogo from '../images/emiratesLogo.png';
import bookingLogo from '../images/bookingLogo.png';
import klookLogo from '../images/klookLogo.png';


const Home = () => {
    // State to manage which dropdown is open
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to toggle dropdown
    const toggleDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className="home-container1">
                <div className="home1-title">
                    <div className="home1-content">
                        <h1>The world’s leading absence management software</h1>
                        <h3>Discover why T.A.D.O. absence management software stands as the top choice among customers globally. Effortlessly oversee absence, leave, and time within a single customizable system – fostering a happier and more efficient workforce.</h3>
                        <button className="home1-demo-btn"><Link to="/Register">Book A Demo</Link></button>
                        <button className="home1-about-btn"><Link to="/About">Learn More About Us</Link></button>
                    </div>
                    <img src={homeImage} alt="Home - Happy Employees Image" />
                </div>
            </div>

            <div className="home-container2">
                <h2 className="home2-title">Start Focusing in Your People Today!</h2>
                <div className="home-image-container2">
                    <div className="people-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        </svg>
                        <h3 className="home2-title">78,9560+</h3>
                        active users worldwide
                    </div>
                    <div className="globe-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                        </svg>
                        <h3 className="home2-title">68+</h3>
                        countries
                    </div>
                    <div className="calendar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-check" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514" />
                            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z" />
                            <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                        </svg>
                        <h3 className="home2-title">1487+</h3>
                        Companies Subcribed
                    </div>
                </div>
            </div>

            <div className="home-container3">
                <Carousel
                    autoPlay={true}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    infiniteLoop={true}>
                    <div className="home-carousel-slide-content">
                        <img src={amazonLogo} alt="amazonLogo" />
                        <img src={asicsLogo} alt="asicsLogo" />
                        <img src={appleLogo} alt="appleLogo" />
                        <img src={adidasLogo} alt="adidasLogo" />
                        <img src={pinterestLogo} alt="pinterestLogo" />
                    </div>
                    <div className="home-carousel-slide-content">
                        <img src={kitkatLogo} alt="kitkatLogo" />
                        <img src={dieselLogo} alt="dieselLogo" />
                        <img src={airbnbLogo} alt="airbnbLogo" />
                        <img src={ebayLogo} alt="ebayLogo" />
                        <img src={disneyLogo} alt="disneyLogo" />
                    </div>
                    <div className="home-carousel-slide-content">
                        <img src={netflixLogo} alt="netflixLogo" />
                        <img src={burgerkingLogo} alt="burgerkingLogo" />
                        <img src={emiratesLogo} alt="emiratesLogo" />
                        <img src={bookingLogo} alt="bookingLogo" />
                        <img src={klookLogo} alt="klookLogo" />
                    </div>
                </Carousel>
            </div>

            <div className="home-container4">
                <div className="home-container4-content">
                    <div className="home4-title">
                        <h2>FEATURES</h2>
                        <p>Recognized as the top choice and most highly recommended solution for absence management software due to its exceptional value.</p>
                    </div>
                    <div className="home4-section">
                        <h3>Absence and Leave Reporting</h3>
                        <p>Automated reporting ensures HR teams receive weekly absence and leave reports seamlessly, complemented by our advanced reporting features. This integration provides robust and precise insights, empowering teams to pinpoint issues and mitigate absenteeism effectively.</p>
                        <br />
                        <h3>Manager Dashboard & Calendars</h3>
                        <p>Human resources teams and managers will be equipped with concise reporting tools for tracking and reporting holidays, featuring customizable dashboards and alerts for absence triggers.</p>
                    </div>
                    <div className="home4-section">
                        <h3>Absence and Leave Reporting</h3>
                        <p>Automated reporting ensures HR teams receive weekly absence and leave reports seamlessly, complemented by our advanced reporting features. This integration provides robust and precise insights, empowering teams to pinpoint issues and mitigate absenteeism effectively.</p>
                        <br />
                        <h3>Manager Dashboard & Calendars</h3>
                        <p>Human resources teams and managers will be equipped with concise reporting tools for tracking and reporting holidays, featuring customizable dashboards and alerts for absence triggers.</p>
                    </div>
                </div>
            </div>

            <div className="home-container5">
                <div className="home-container5-content">
                    <div className="faq-row">
                        <div className="faq-content">
                            <button className="dropdown-btn" onClick={() => toggleDropdown(0)}>
                                What training does T.A.D.O. provide and how much training is required?
                            </button>
                            {activeIndex === 0 && (
                                <div className="dropdown-content">
                                    <p>With T.A.D.O. you receive the support of our award-winning Customer Support team. Our T.A.D.O. Implementation Specialists will work with you to ensure smooth, efficient adoption of our automated processes and user-friendly platform.</p>
                                </div>
                            )}
                        </div>
                        <div className="faq-content">
                            <button className="dropdown-btn" onClick={() => toggleDropdown(1)}>
                                Can I upgrade as I scale my business?
                            </button>
                            {activeIndex === 1 && (
                                <div className="dropdown-content">
                                    <p>Yes, T.A.D.O. works with you as you grow your business, so it’s easy to add users and switch plans.</p>
                                </div>
                            )}
                        </div>
                        <div className="faq-content">
                            <button className="dropdown-btn" onClick={() => toggleDropdown(2)}>
                                What is leave management?
                            </button>
                            {activeIndex === 2 && (
                                <div className="dropdown-content">
                                    <p>
                                        Leave management encompasses the comprehensive administration of various types of employee leave within an organization. This includes overseeing annual leave, also known as holiday entitlement, where employees are allotted a specific number of days off per year.
                                        <br />
                                        <br />
                                        In addition to statutory leave, organizations may opt to provide additional holiday entitlement to their employees.
                                        <br />
                                        <br />
                                        Leave management also entails overseeing other legally mandated types of leave, such as maternity leave, paternity leave, and other similar categories.
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="faq-content">
                            <button className="dropdown-btn" onClick={() => toggleDropdown(3)}>
                                What size and types of businesses do you service?
                            </button>
                            {activeIndex === 3 && (
                                <div className="dropdown-content">
                                    <p>T.A.D.O. absence management software caters to organizations of all sizes and industries, regardless of their global location.
                                        <br />
                                        <br />
                                        We particularly excel in serving companies with 50 or more employees, accommodating various work arrangements such as office-based and remote workers, part-time and full-time staff, and those operating across multiple sites. Our software offers a unified platform for monitoring all forms of leave and absence, streamlining the management process for your convenience.</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="home5-title">
                        <h3>T.A.D.O. Leave Management <br /> System Questions</h3>
                        <img src={faqImage} alt="faqs" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home