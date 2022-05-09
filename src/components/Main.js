import React from "react";
import Carousel from "./Carousel";
import About from './About';

const Main = () => (
    <main>
        <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousel>
                <a href="http://www.github.com/DanielHinbest"><img style={{ maxWidth: 400 }} src={process.env.PUBLIC_URL + "/images/1.jpg"} alt="placeholder" /></a>
                <a href="http://www.google.ca"><img style={{ maxWidth: 400 }} src={process.env.PUBLIC_URL + "/images/2.jpg"} alt="placeholder" /></a>
                <a href="http://www.durhamcollege.ca"><img style={{ maxWidth: 400 }} src={process.env.PUBLIC_URL + "/images/3.jpg"} alt="placeholder" /></a>
            </Carousel>
        </div>
        <div className="container marketing">
            {/* About Me here */}
            <div className="row">
                <About sectionTitle="My Education" imagePath={process.env.PUBLIC_URL + "/images/education.jpg"} paragraph="I will be graduating from Computer Programming and Analysis at Durham College in June 2022. 
                During this time, I have learned about developing desktop, console, and web applications. I have built learned how to design and implement a SQL database, as well as analyze and solve business problems
                I have received practice by bring provided a case for a business problem and how to plan and implement technology to address it. While attending Durham College, I've also had the opportunity to get involved
                by participated in activities including the First-Year Student Orientation and Open House as a program student representative and would speak with incoming students to discuss the program's studies
                and answer questions about the scope and opportunities. I've also served as a student representative on the Program Advisory Committee, which is a board that meets
                throughout the year and works to help shape the future of the program with input from students, alumni, faculty, and industry leaders."/>
                
                <About sectionTitle="My Work Experience" imagePath={process.env.PUBLIC_URL + "/images/work.png"} paragraph="From May 2021 to August 2021, I worked in my first position in the IT Industry
                as an Artificial Intelligence (AI) Research Assistant at the AI Hub at Durham College under the co-op education program. This allowed me to work with AI systems and research how it can be used in our lives.
                I would spend time researching and test technologies that can be used to provide chatbots for companies, and would build software applications for business clients
                of the AI Hub. From September 2021 to April 2022, I worked part-time as a Peer Tutor at Durham College. During this time, I would meet with
                students in first and second year, who needed assistance in their courses and would help them gain a further understanding on the concepts in the courses.
                In this program, I tutored courses that would focus on C#, C++, Python, Java, and SQL from an introductory to intermediate level."/>
                
                <About sectionTitle="My Technology Experience" imagePath={process.env.PUBLIC_URL + "/images/coding.png"} paragraph="I have experience building and maintaining applications for web, desktop, mainframe, and mobile environments using many languages and technologies.
                 My most proficient language is Java, which I was first introduced to in 2017, while attending high school. I have built console, desktop, and web applications using technologies including Swing UI and Spring Framework. In post-secondary education, I have
                 also gained experience in C#, Python, C++, PHP, JavaScript, and COBOL and have used technologies including Django (Python), Windows Forms, WPF, and ASP.NET (C#), Laravel (PHP), and React (JavaScript), and have built
                 SQL databases in SQL Server, PostgreSQL, and MySQL and have experience connecting databases to web and desktop environments."/>

                <About sectionTitle="My Accomplishments" imagePath={process.env.PUBLIC_URL + "/images/trophy.jpg"} paragraph="I graduated high school in 2019, and was awarded the Ontario Secondary School Diploma along with other awards
                including the Ontario Scholar, which is awarded to students with an average of 80% or higher in their best six Grade 12 courses. While studying at Durham College, I will be graduating in June 2022 with an Ontario College Advanced Diploma,
                and was on the College Honour Roll in every semester. This is achieved by a minimum Semester GPA of 4.0 out of 5 (equivalent to an 80% average) in that semester's courses. In the spring of 2022, I represented Durham College at the 2022 Skills Ontario Coding Competition, where I was
                competing against students from post-secondary institutions across Ontario and was required to complete tasks related to problem solving, general knowledge, flowcharts, and my coding abilities. At the Skills Ontario Closing Ceremony, I was announced
                as the Gold Medalist in the Post-Secondary Coding Competition."/>
            </div>
            <hr className="featurette-divider" />
            
            {/* Project examples */}
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                    <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                </div>
            </div>

            <hr className="featurette-divider" />


        </div>


    </main>
);

export default Main;
