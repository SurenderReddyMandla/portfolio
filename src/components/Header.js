import React from 'react'
import pic from '../assets/images/pic.png'
class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span ><img src={pic} alt="" className="profilepic"/></span>
                    <h1><p>Thank you for your visit.</p>
                    I'm <strong>Surender Mandla</strong></h1>
                    
                    <ul className="actions">
                        <li>
                        <a href="#one" className="button scrolly">Know More About Me</a>
                        </li>
                      
                    </ul>
                    
                </div>
            </section>
        )
    }
}

export default Header
