import React from "react";
import Project from "./Project";

class ProjectList extends React.Component {
    render() {
        return (
            <div>
                <Project
                    firstDivClass="col-md-6"
                    featuretteHeader="Capstone Project: Groceries To Go"
                    description="Groceries To Go was developed as a 12-week capstone project with two classmates, Ryan and Yash, in the final semester of Computer Programming
                    and Analysis using Java, Spring Framework, and a MySQL database backend. This application provides users access to a series
                    of local grocery stores in Durham Region and would allow them to place orders to be delivered to their homes."
                    secondDivClass="col-md-6"
                    image={process.env.PUBLIC_URL + "/images/gtg.jpg"}
                    GitHubPath="https://www.github.com/DanielHinbest/GroceriesToGo"
                    imageAltText="A photo of the Groceries To Go cart view"
                />

                <Project
                    firstDivClass="col-md-7 order-md-2"
                    featuretteHeader="Database Application: McLaughlin University"
                    description="McLaughlin University was developed in a Database Development class with in a group of four classmates, Ryan, Anna, and Yash, in our fifth semester
                    in Computer Programming and Analysis"
                    secondDivClass="col-md-5 order-md-1"
                    image={process.env.PUBLIC_URL + "/images/mclaughlin_uni.jpg"}
                    GitHubPath="https://www.github.com/DanielHinbest/McLaughlinUniversity"
                    imageAltText="A photo of the McLaughlin University home screen"
                />

                <Project
                    firstDivClass="col-md-7"
                    featuretteHeader="And lastly, this one."
                    description="And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content."
                    secondDivClass="col-md-5"
                    image={process.env.PUBLIC_URL + "/images/3.jpg"}
                    GitHubPath="https://www.github.com/DanielHinbest"
                    imageAltText=""
                />

                <hr className="featurette-divider" />
            </div>
        );
    }
}

export default ProjectList;