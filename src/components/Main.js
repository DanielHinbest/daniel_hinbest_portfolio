import React from "react";
import Carousel from "./Carousel";
import AboutList from './AboutList';
import ProjectList from './ProjectList';

class Main extends React.Component {
    render() {
        return (
            <main>
                <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
                    <Carousel>
                        <a href="#"><img style={{ maxWidth: 800 }} src={process.env.PUBLIC_URL + "/images/slide1.jpg"} alt="Daniel Hinbest" /></a>
                        <a href="#"><img style={{ maxWidth: 800 }} src={process.env.PUBLIC_URL + "/images/skills-certificate.png"} alt="Skills Ontario Certificate" /></a>
                        {/* <a href="#"><img style={{ maxWidth: 400 }} src={process.env.PUBLIC_URL + "/images/3.jpg"} alt="placeholder" />/a> */}
                    </Carousel>
                </div>
                <div className="container marketing">
                    {/* About Me here */}
                    <AboutList/>

                    <ProjectList />

                </div>


            </main>
        );
    }
}

export default Main;
