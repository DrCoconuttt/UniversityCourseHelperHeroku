import {BsGithub} from "react-icons/bs"

const About = () => {

    return(
        <div className = "about">
            <h1 className = "centerText">
                About
            </h1>
            <div>
            The University Course Helper is a unique database management system that was created with the intent of solving 
            the following real-world problem encountered by university students. Course enrollment can be both a difficult and 
            stressful task, given the number of options that exist and the necessity to meet degree requirements. 
            A vast amount of information exists to assist with choosing which courses to enroll in, however, that information 
            is spread across a number of different platforms. For instance, one would have to visit the: University of Calgary 
            (UofC) Contacts page to obtain information about which professors are teaching certain courses and past course 
            syllabi, the UofC Calendar to determine which courses need to be taken to satisfy degree requirements, 
            and Rate My Professors to better understand what a professor’s teaching ability is like. In addition, some of these 
            aforementioned platforms are obtusely laid out, and require one to click through an unnecessary amount of pages to 
            find information for a single course. When pertinent information regarding courses is spread across a number of 
            platforms, it results in the course enrollment process being both overwhelming and tedious. Thus, the University 
            Course Helper was designed specifically to combat the limitations of the current method for obtaining course 
            information. This database management system serves as a single consolidated platform that provides relevant 
            information related to courses offered by the UofC, including information such as course relevancy to a certain 
            degree, and previous syllabi of courses, thereby streamlining the process of selecting courses. 
            </div>

            <div className="githubIconAlign">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/DrCoconuttt/UniversityCourseHelper" className="githubIcon" >
                        <BsGithub />
                </a>
            </div>
        </div>
    )
}

export default About