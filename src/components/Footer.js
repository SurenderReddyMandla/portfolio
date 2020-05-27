import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                   
                    <li><a href="https://github.com/SurenderReddyMandla" className="icon alt fa-github" target="_blank"><span className="label">GitHub</span></a></li>
                    <li><a href="https://www.linkedin.com/in/surenderreddymandla33" className="icon alt fa fa-linkedin" target="_blank"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy;2020</li><li>Designed by Surender</li>
                </ul>
              
            </section>
        )
    }
}

export default Footer
