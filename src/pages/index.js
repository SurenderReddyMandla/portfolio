import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import badge1 from '../assets/images/Blockchaindev.png'
import badge2 from '../assets/images/BlockchainEsen.png'
import badge3 from '../assets/images/ccna.png'
import cert from '../assets/images/cisco.pdf'
class Homepage extends React.Component {
    render() {
        const siteTitle = "surender";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                            <header className="major">
                            
                                <h2><strong>About</strong></h2>
                            </header><br />
                        <div className="main style1 intro">
                            <h2>I'm a full-stack web developer based in Canada</h2>
                            <h3>I have passion for learning new technologies</h3>
                            <h3>I have knowledge in Web development and Embedded systems development</h3>
                        </div>  
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        
                        <div className="col-6">
                            <header className="major">
                                <h2>Professional Skills</h2>
                            </header>
                            <p><strong>Programming Languages:&nbsp;&nbsp;</strong>C++, Java, Javascript, Typescript, C#</p>
                            <p><strong> Operating Systems:&nbsp;&nbsp;</strong>Windows, Linux(Ubuntu and Kali)</p>
                            <p><strong>Front-End Technologies:&nbsp;&nbsp;</strong>Angular, AngularJs, Angular Material, HTML, CSS, Bootstrap, ReactJS</p>
                            <p><strong>Back-End Technologies:&nbsp;&nbsp;</strong>NodeJS, ExpressJS, ASP.Net core</p>
                            <p><strong>Database Servers:&nbsp;&nbsp;</strong>MSSQL, MySql</p>
                            <p><strong>Build Tools:&nbsp;&nbsp;</strong>NPM, Grunt, Gulp</p>
                            <p><strong>	DevOps tools:&nbsp;&nbsp;</strong>Jenkins, Docker, Github, Atlassian tool suite, Azure devops</p>
                            <p><strong>Version control:&nbsp;&nbsp;</strong>Git, Bitbucket</p>
                            <p><strong>RPA Tools:&nbsp;&nbsp;</strong>UI Path, Automation Anywhere</p>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Experience</h2>
                            </header>
                            <p><strong>COMPANY:&nbsp;&nbsp;<a href="https://www.archents.com/" target="_blank"> Archents</a></strong></p>
                            <p>I Worked here for 4 years as a software developer and done <br/> projects based on Web development and also worked on Blockchain Technology and Robotic Process Automation</p><br/>
                            <p><strong>COMPANY:&nbsp;&nbsp;<a href="https://www.fanshawec.ca/" target="_blank"> Fanshawe College</a></strong></p>
                            <p>I worked as a contract tutor in the department of Electronics and Embedded systems development for 7 months </p>
                            <header className="major">
                                <h2>Education</h2>
                            </header>
                            <p><strong>Post Graduation in Information Security Management</strong><br/>Fanshawe college&nbsp;(2019), Ontario, Canada</p>
                            <p><strong>Post Graduation in Electronics and Embedded Systems development</strong><br/>Fanshawe college&nbsp;(2018), Ontario, Canada</p>
                            <p><strong>Bachelors of Technology in Electronics and Communications Engineering</strong><br/>Jawaharlal Nehru University&nbsp;(2012-2016), Hyderabad, India</p>
                        </div>
                      
                            
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Certifications</h2>
                            </header>
                            
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={badge3} alt="" /></span>
                            <ul className="actions">
                                <li><a href={cert} className="button" target="_blank">View</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={badge1} alt="" /></span>
                            <ul className="actions">
                                <li><a href="https://www.youracclaim.com/badges/cc2fc447-25f4-4aed-bc87-4bf174736862/linked_in_profile" className="button" target="_blank">View</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={badge2} alt="" /></span>
                            <ul className="actions">
                                <li><a href="https://www.youracclaim.com/badges/c27401ad-1e23-476d-b678-990d4995802b/linked_in_profile" className="button" target="_blank">View</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Contact Details</h2>
                        </header>
                        <p><strong>Phone Number:&nbsp;&nbsp;</strong>+1(548)-388-4089</p>
                        <p><strong>Email:&nbsp;&nbsp;</strong>surenderreddymandla@gmail.com</p>
                        
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;