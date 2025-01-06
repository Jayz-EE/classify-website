import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../styles/Products.scss";
import StyledButton2 from "../components/styled_button_2";
import CardComponent from "../components/lms_section_cards";
import lms_data from "../data/lms_card_data.jsx";
import Images from "../assets/images/image.jsx";
import { MdDescription, MdSource, MdPaid, MdOutlineEqualizer, MdPeopleAlt } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { contents } from "../data/empowering_contents.jsx";
import EmpoweringComponent from "../components/empowering_section.jsx";

export default function Products() {
    const [activeTab, setActiveTab] = useState("admission");
    
    const tabContent = {
        admission: {
            title: ["Paperless Admission"],
            content: [
                "Create a seamless enrollment experience for students and parents.",
                "Make registration and admission fast, easy, and secure.",
            ],
            image: Images.Admission,
        },
        RMS: {
            title: ["Registrar Module"],
            content: [
                "Manage your school records and transact effortlessly through Classify Record Management System (RMS)."
            ],
            image: Images.RMS2,
        },
        finance: {
            title: ["Financial Reporting Module"],
            content: [
                "Manage financial records and create financial reports.",
                "Get real-time visibility on your school's overall financial performance.",
            ],
            image: Images.Finance,
        },
        analysis: {
            title: ["Student Performance Analytics", "Teacher Performance Analytics", "School Administration Analytics"],
            content: [
                [
                    "Monitor students' online class activities.",
                    "Track test scores.",
                    "Give real-time feedback."
                ],
                [
                    "Rate teachers' performance at the end of each semester.",
                    "Provide real-time feedback.",
                    "Measure instructional effectiveness, classroom management, and delivery."
                ],
                [
                    "Track inquiries, enlisted, and enrolled students in real-time.",
                    "Translate data into powerful and easy-to-understand graphs and visuals."
                ]
            ],
            image: Images.Analytics,
        },
        LMS: {
            title: ["Blended Learning"],
            content: [
                "Integrate self-paced learning with virtual classroom learning.",
                "Create customized online quizzes and tests with varying question types like multiple-choice, true or false, fill in the blanks and essays.",
            ],
            image: Images.LMS2,
        },
        community: {
            title: ["News Feed Module", "Calendar Module", "Messaging Module", "Notification Module"],
            content: [
                [
                    "Post announcements, files, links, and share images on the private newsfeed.",
                    "Communicate quickly and easily with the school community."
                ],
                [
                    "Maintain school calendar for upcoming events, exams, fees schedules."
                ],
                [
                    "Create collaborative group chats for class-related, extra-curricular, and project-based activities."
                ],
                [
                    "Multi-device push notification features allow users to stay updated."
                ]
            ],
            image: Images.Social,
        },
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-section-overlay">
                    <Container fluid style={{ height: "100%" }}>
                        <div className="hero-content">
                            <h1 className="hero-section-title">
                                Classifys<span>LMS</span>® is the leading Learning Management System
                            </h1>
                            <p>
                                Classify is a leading technology company specializing in Education Technology platforms.
                                Our aim is to create a sustainable and effective virtual learning platform catered
                                towards the needs of all educational institutions.
                            </p>
                            <div className="styled_button">
                                <StyledButton2 button_name={"Book a Free Demo"} />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            {/* LMS Section */}
            <div id="lms-section" className="lms-section">
                <div className="container d-flex flex-column justify-content-center">
                    <h1 className="product-lms">
                        Classify<span>LMS</span>®
                    </h1>
                    <p className="lms-0 text-center w-100">
                        <span className="lms-1">Learning </span>
                        <span className="lms-2">Management </span>
                        <span className="lms-3">System </span>
                    </p>
                    <p className="lms-content">
                        Our first fully-customizable software solution, enabling institutions, educators, and students to focus
                        on learning without the limitations of time, location, administrative hassles, and costly supplies.
                    </p>
                    <div className="row pt-4">
                        {lms_data.map((details, index) => (
                            <CardComponent key={index} lms_data={details} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Section */}
            <div className="lms-tabs-section justify-content-center container-fluid">
                <div className="col-md-1 col-lg-1 col-xl-1 col-sm-12 col-xs-12 icons-container">
                    {Object.keys(tabContent).map((tabKey, index) => (
                        <div
                            key={index}
                            className={`tabs-icons ${activeTab === tabKey ? "active" : ""}`}
                            onClick={() => setActiveTab(tabKey)}
                        >
                            {index === 0 && <MdDescription className="icons" />}
                            {index === 1 && <MdSource className="icons" />}
                            {index === 2 && <MdPaid className="icons" />}
                            {index === 3 && <MdOutlineEqualizer className="icons" />}
                            {index === 4 && <IoMdHome className="icons" />}
                            {index === 5 && <MdPeopleAlt className="icons" />}
                        </div>
                    ))}
                </div>
                <div className="col-md-11 col-12 content-container">
                    <div className="row g-3 justify-content-center align-items-center" style={{ height: "100%" }}>
                        <div className="col-lg-6 col-md-12 featureContent d-flex flex-column justify-content-center">
                            {Array.isArray(tabContent[activeTab].title) ? (
                                tabContent[activeTab].title.map((title, idx) => (
                                    <div key={idx} className="tab-section">
                                        <h2>{title}</h2>
                                        <ul>
                                            {Array.isArray(tabContent[activeTab].content[idx])
                                                ? tabContent[activeTab].content[idx].map((item, subIdx) => (
                                                    <li key={subIdx}>{item}</li>
                                                ))
                                                : <li>{tabContent[activeTab].content[idx]}</li>}
                                        </ul>
                                    </div>
                                ))
                            ) : (
                                <div className="tab-section">
                                    <h2>{tabContent[activeTab].title}</h2>
                                    <ul>
                                        {tabContent[activeTab].content.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-4 col-md-12 featureImage d-flex align-items-center justify-content-center">
                            <img
                                src={tabContent[activeTab].image}
                                alt={tabContent[activeTab].title}
                                className="p-3"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Empowering Section */}
            <div className="empowering-section">
                <div className="pb-5">
                    <div className="container">
                        <div className="row">
                            <h1 id="product-section" className="empowering-text-title text-md-2">Empowering Education with Classify's Innovative Solutions</h1>
                        </div>
                        <div>
                            {contents.map((details, index) => {
                                if (details.type === "left") {
                                    return <EmpoweringComponent.LeftImageCard key={index} content={details} />;
                                } else if (details.type === "right") {
                                    return <EmpoweringComponent.RightImageCard key={index} content={details} />;
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
