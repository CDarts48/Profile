import React from "react";
import reactImage from './react image .jpeg'; // Import the image

function About() {
    return (
        <section id="about-me" className="my-5 intro">
            <div className="flex-row">
                <h1 id="about" className="section-title primary-border">
                    About Me
                </h1>
            </div>
            <div className="flex-row">
                <div className="intro-info">
                    <p>
                        Greetings! I'm Corey Donahue, and I live in the beautiful city of Boulder, Colorado. I am passionate about various activities including Jiu-Jitsu, exercising, grilling, and spending quality time playing with my daughter.
                    </p>
                    <p>
                        Additionally, I hold a Master's degree in International Law, which has provided me with valuable insights and knowledge in the field of law and global affairs. I also have extensive experience in software sales, and I am currently on a journey to better understand and create software.
                    </p>
                </div>
                <img src={reactImage} alt="React" style={{ width: '400px', height: '400px' }} /> {/* Add the image */}
            </div>
        </section>
    );
}

export default About;