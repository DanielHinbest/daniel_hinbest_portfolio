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
                        <a href="#"><img style={{ maxWidth: 800 }} src={process.env.PUBLIC_URL + "/images/slide1.jpg"} alt="placeholder" /></a>
                        <a href="#">{/*<img style={{ maxWidth: 400 }} src={process.env.PUBLIC_URL + "/images/2.jpg"} alt="placeholder" />*/}Placehold for Gold Medal</a>
                        <a href="#">{/*<img style={{ maxWidth: 400 }} src={process.env.PUBLIC_URL + "/images/3.jpg"} alt="placeholder" />*/}Content TBD</a>
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
