import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

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
                            <h3>I have knowledge about Web development and Embedded systems development</h3>
                        </div>  
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                    <div className="col-6">
                    <header className="major">
                        <h2>Experience</h2>
                    </header>
                   <p><strong>COMPANY:&nbsp;&nbsp;<a href="https://www.archents.com/" target="_blank"> Archents</a></strong></p>
                    <p>I Worked here for 4 years as a software developer in different <br/> projects involving technologies like Web development, Blockchain Technology and Robotic Process Automation</p><br/>
                    <p><strong>COMPANY:&nbsp;&nbsp;<a href="https://www.fanshawec.ca/" target="_blank"> Fanshawe College</a></strong></p>
                    <p>I worked as a contract tutor in the department of Electronics and Embedded systems development for 7 months </p>
                </div>
                <div className="col-6">
                    <header className="major">
                        <h2>Experience</h2>
                    </header>
                   <p><strong>COMPANY:&nbsp;&nbsp;<a href="https://www.archents.com/" target="_blank"> Archents</a></strong></p>
                    <p>I Worked here for 4 years as a software developer in different <br/> projects involving technologies like Web development, Blockchain Technology and Robotic Process Automation</p><br/>
                    <p><strong>COMPANY:&nbsp;&nbsp;<a href="https://www.fanshawec.ca/" target="_blank"> Fanshawe College</a></strong></p>
                    <p>I worked as a contract tutor in the department of Electronics and Embedded systems development for 7 months </p>
                </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Projects</h2>
                            </header>
                            <p>Developed a Single Page Web Application for XPO logistics used for customer communication management</p>
                            <p>Developed a web application for Yedla company used for Events and client management</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Adipiscing amet consequat</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;