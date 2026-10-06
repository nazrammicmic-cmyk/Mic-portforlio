const { useState } = React;


function Navbar() {

    return (
        <nav className="navbar">

            <div className="nav-container">

                <div className="logo">
                    MyPortfolio
                </div>

                <ul className="nav-links">

                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#skills">Skills</a>
                    </li>

                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>

                </ul>

            </div>

        </nav>
    );
}


/* ================= HERO ================= */

function Hero() {

    return (
        <section className="hero" id="home">

            <div className="hero-content">

                <div className="profile-container">

                    <img
                        src="https://scontent.fceb6-2.fna.fbcdn.net/v/t1.15752-9/833374093_1602341334633079_1277287451604542751_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFt6joaWdCcedpSYredNKGuTgydhjNWmjJODJ2GM1aaMhNYKvRSGMFFzKxyyiil8s7t_iKEkVjaCWQhPBrPOxik&_nc_ohc=ipZ9W1xbM34Q7kNvwG6uWlf&_nc_oc=Adqa6-SbGtZ-_hTbV37U_4qcN_zwihxEv4a44acc9CHV-cX3VgGYu3oNw8mJENGxmyk&_nc_zt=23&_nc_ht=scontent.fceb6-2.fna&_nc_ss=7b2a8&oh=03_Q7cD6gE8hBUGkDn7RA2bkSge7WlMdM8fnp3vmcXFDVZrBA2AnQ&oe=6AEC0433"
                        alt="My Profile"
                        className="profile-picture"
                    />
``
                </div>

                <h1>
                    Hi, I'm <span>Mike Angelo Marzan</span>
                </h1>

                <h2>
                    BARCHELOR OF INFORMATION TECHNOLOGY
                </h2>

                <p>
                    I create modern, responsive and
                    user-friendly websites using HTML,
                    CSS, JavaScript and React.js.
                </p>

                <a
                    href="#projects"
                    className="btn"
                >
                    View My Projects
                </a>

            </div>

        </section>
    );
}


/* ================= ABOUT ================= */

function About() {

    return (
        <section id="about">

            <div className="container">

                <h2 className="section-title">
                    About <span>Me</span>
                </h2>

                <div className="about-content">

                    <div className="about-text">

                        <p>
                            Hello! I'm a student who is
                            passionate about technology
                            and web development.
                        </p>

                        <p>
                            I enjoy creating websites,
                            learning programming and
                            exploring new technologies.
                        </p>

                        <p>
                            My goal is to become a skilled
                            professional web developer.
                        </p>

                    </div>

                    <div className="about-card">

                        <h3>
                            My Goal
                        </h3>

                        <p>
                            To continuously improve my
                            programming skills and build
                            useful, creative and responsive
                            web applications.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}


/* ================= SKILLS ================= */

const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "PHP",
    "MySQL",
    "Git",
    "Responsive Design"
];


function Skills() {

    return (
        <section
            className="skills"
            id="skills"
        >

            <div className="container">

                <h2 className="section-title">
                    My <span>Skills</span>
                </h2>

                <div className="skills-grid">

                    {skills.map(
                        (skill, index) => (

                            <div
                                className="skill"
                                key={index}
                            >

                                <h3>
                                    {skill}
                                </h3>

                                <p>
                                    Web Development
                                </p>

                            </div>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}


/* ================= PROJECTS ================= */

const projects = [

    {
        title: "Registration Form",

        description:
            "A responsive registration form created using HTML and CSS."
    },

    {
        title: "Personal Portfolio",

        description:
            "A modern portfolio website showcasing skills and projects."
    },

    {
        title: "React Web App",

        description:
            "An interactive web application built using JavaScript and React."
    }

];


function Projects() {

    return (
        <section id="projects">

            <div className="container">

                <h2 className="section-title">
                    My <span>Projects</span>
                </h2>

                <div className="projects-grid">

                    {projects.map(
                        (project, index) => (

                            <div
                                className="project"
                                key={index}
                            >

                                <div className="project-image">
                                    💻
                                </div>

                                <div className="project-content">

                                    <h3>
                                        {project.title}
                                    </h3>

                                    <p>
                                        {project.description}
                                    </p>

                                    <a
                                        href="#"
                                        className="btn"
                                    >
                                        View Project
                                    </a>

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}


/* ================= CONTACT ================= */

function Contact() {

    const [message, setMessage] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        setMessage(
            "Thank you! Your message has been received."
        );

        event.target.reset();
    }

    return (
        <section
            className="contact"
            id="contact"
        >

            <div className="container">

                <h2 className="section-title">
                    Contact <span>Me</span>
                </h2>

                <div className="contact-container">

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                        />

                        <textarea
                            placeholder="Your Message"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="btn"
                        >
                            Send Message
                        </button>

                    </form>

                    {message && (

                        <p
                            style={{
                                marginTop: "20px",
                                color: "#38bdf8",
                                textAlign: "center"
                            }}
                        >
                            {message}
                        </p>

                    )}

                </div>

            </div>

        </section>
    );
}


/* ================= APP ================= */

function App() {

    return (
        <>

            <Navbar />

            <Hero />

            <About />

            <Skills />

            <Projects />

            <Contact />

            <footer>
                © 2026 Your Name. All Rights Reserved.
            </footer>

        </>
    );
}


/* ================= RENDER ================= */

const root =
    ReactDOM.createRoot(
        document.getElementById("root")
    );

root.render(<App />);