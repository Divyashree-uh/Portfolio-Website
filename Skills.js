import React from "react";
import "./Skills.css";


const Skills = () => {
    return (
        <div className="services-container">
            <div className="services-list-container">
                {/* desc */}
                <div className="services-desc-container">
                    <h1>
                        My Skills <span><i class="fa fa-cogs" aria-hidden="true"></i>
                        </span>
                    </h1>
                    <p>
                        These skills collectively demonstrate that I am a well-rounded proficient candidate in web development, programming languages, databases, and problem-solving techniques.
                    </p>
                    <a href="https://www.linkedin.com/in/divyashree-v-46a499287/" target="_blank">
                        <button>LinkedIn</button>
                    </a>
                </div>
                {/* item */}
                <div className="service-item-container">
                    <div className="services-item">

                        <div className="item-desc">
                            
                            <div class="span-container">
                                <span class="span-element">HTML</span>
                                <span class="span-element">CSS</span>
                                <span class="span-element">JavaScript</span>
                                <span class="span-element">Bootstrap</span>
                                <span class="span-element">MongoDB</span>
                                <span class="span-element">ExpressJS</span>
                                <span class="span-element">ReactJS</span>
                                <span class="span-element">NodeJS</span>
                                <span class="span-element">DBMS</span>
                                <span class="span-element">OOPS</span>
                                <span class="span-element">Computer Networks</span>
                                <span class="span-element">Operating Systems </span>
                                <span class="span-element">C Language</span>
                                <span class="span-element">Python </span>
                                <span class="span-element">Problem Solving</span>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills