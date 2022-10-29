import Image from 'next/image'
import styles from '../styles/Portfolio.module.css'


const Portfolio = () => {
	return (
		<div className="container">
		<main className={styles["main"]}>
      <section className={styles["header"]}>
        <div className={styles["section" + " " + "left"]}>
          <h1 className={styles["title-name"]}><span>Umut</span> <span>Deniz</span> <span>Darendeli</span></h1>
          <h2 className={styles["job-title"]}>
            FRONTEND DEVELOPER | SOFTWARE DESIGNER
          </h2>
          <p className={styles["paragraph"]}>
            I’m a goal-oriented, creative and self-motivated web developer
            specializing in front-end. I am well familiar with CSS/HTML,
            Sass preprocessor, JS, React, cross-browser and adaptive markup
            skills. Always eager to improve, try to learn new technologies
            and stay up-to-date with Web development trends. I also learn
            quickly and do easily communicate with people. There is always a
            new project to look for.
          </p>
        </div>
        <div className={styles["section" + " " + "right"]}>
          <Image className={styles["pp"]} width={144} height={180} src='/assets/images/photo.jpg' alt="the person" />
        </div>
      </section>
      <section className={styles["contact"]}>
        <div className={styles["contactOptions"]}>
          <p>Phone</p>
          <p>+90 554 960 5406</p>
        </div>
        <div className={styles["contactOptions"]}>
          <p>Email</p>
          <p>uddarendeli1@gmail.com</p>
        </div>
        <div className={styles["contactOptions"]}>
          <a
            target="_blank"
            className={styles["website-link"]}
            rel="noreferrer"
            href="https://www.dare.land"
          >
            Website
          </a>
          <p>https://www.dare.land</p>
        </div>
        <div className={styles["contactOptions"]}>
          <p>Also available on</p>
          <p>Whatsapp - Telegram</p>
        </div>
      </section>
      <div className={styles["portfolio-content"]}>
        <section className={styles["content"]}>
          <h2 className={styles["title"]}>Experience</h2>
          <div className={styles["value"]}>
            <div className={styles["value-experience"]}>
              <h3 className={styles["subtitle"]}>Mate Academy | 2022 - Present</h3>
              <div className={styles["valueDescription"]}>
                <p className={styles["vD-tag"]}>
                  <i>Projects: </i>
                </p>
                <p>
                  Ongoing, the projects will be listed once the process is
                  complete.
                </p>
              </div>
              <div className={styles["valueDescription"]}>
                <p className={styles["vD-tag"]}>
                  <i>Tech stack: </i>
                </p>
                <p>
                  React (Context, Hooks, Router), Redux, Redux Thunk, Styled
                  Components, REST API (Axios), Node.js Express, Jest &
                  Enzyme, Atlas MongoDB.
                </p>
              </div>
            </div>
            <div className={styles["value-experience"]}>
              <h3 className={styles["subtitle"]}>Freelancing | 2020 - 2021</h3>
              <div className={styles["valueDescription"]}>
                <p className={styles["vD-tag"]}>
                  <i>Projects: </i>
                </p>
                <p>
                  Numerous projects entrusted by clients from the Wroclaw
                  University oSaT.
                </p>
                <p className={styles["vD-tag"]}>
                  <i>Tech stack: </i>
                </p>
                <p>
                  Two projects on Frontend Development using React.js and
                  Figma, and one 2D showcase game on Unity using C# for
                  scripting. <i>Referances available upon request.</i>
                </p>
              </div>
            </div>
            <div className={styles["value-experience"]}>
              <h3 className={styles["subtitle"]}>Front-end Engineer Internship</h3>
              <h4 className={styles["titleDetails"]}>Micazook | 2019 - 2019</h4>
              <div className={styles["valueDescription"]}>
                <p className={styles["vD-tag"]}>
                  <i>Projects: </i>
                </p>
                <p>
                  Emirates Airlines front-end support, support in
                  development of the new space shooter game.
                </p>
              </div>
              <div className={styles["valueDescription"]}>
                <p className={styles["vD-tag"]}>
                  <i>Tech stack: </i>
                </p>
                <p>
                  Component system and development platform similar to React
                  that was written in vanilla JS, Sass, Jira, Bitbucket,
                  Node.js for proxy servers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles["content"]}>
          <h2 className={styles["title"]}>Education</h2>
          <div className={styles["value"]}>
            <h3 className={styles["subtitle"]}>
              Wroclaw University of Science and Technology | 2017 - 2021
            </h3>
            <div className={styles["valueDescription"]}>
              <p className={styles["vD-tag"]}>
                <i>Description: </i>
              </p>
              <p>Bachelor Degree in Computer Science</p>
            </div>
            <div className={styles["valueDescription"]}>
              <p className={styles["vD-tag"]}>
                <i>Project: </i>
              </p>
              <p>
                The thesis project was to program an online teaching
                platform with mathematical plotting, latex syntax, calendar
                systems, video recording of the classes and their extensive
                databases.
              </p>
            </div>
            <div className={styles["valueDescription"]}>
              <p className={styles["vD-tag"]}>
                <i>Tech stack: </i>
              </p>
              <p>
                Node.js Express, PostgreSQL, encription including JWT,
                React.js(Redux), Zoom API, libraries for plotting and
                drawing. Moreover, some responsive handwritten code for
                controlling the platform and calendar activities.
              </p>
            </div>
          </div>
        </section>
        <section className={styles["content"]}>
          <div className={styles["title"]}>
            <h2>Skills</h2>
            <div className={styles["tooltip"]}>
              <div className={styles["daily"]}>Daily</div>
              <div className={styles["studied"]}>Studied</div>
            </div>
          </div>
          <div className={styles["value"]}>
            <div className={styles["value-skills"]}>
              <p className={styles["daily"]}>HTML5</p>
              <p className={styles["daily"]}>CSS3</p>
              <p className={styles["daily"]}>Sass</p>
              <p className={styles["daily"]}>React.js (Redux, Context, Hooks)</p>
              <p>Next.js</p>
              <p className={styles["daily"]}>Node - Express</p>
              <p>HTML Canvas, SVG, scalable graphics</p>
              <p>MySQL, PostgreSQL, MS-SQL</p>
              <p className={styles["daily"]}>MongoDB</p>
              <p className={styles["daily"]}>Postman</p>
              <p>.Net - MVC</p>
            </div>
          </div>
        </section>
        <section className={styles["content"]}>
          <div className={styles["title"]}>
            <h2>Tools</h2>
            <div className={styles["tooltip"]}>
              <div className={styles["daily"]}>Daily</div>
              <div className={styles["studied"]}>Studied</div>
            </div>
          </div>
          <div className={styles["value"]}>
            <div className={styles["value-tools"]}>
              <p>Figma</p>
              <p className={styles["daily"]}>GIT</p>
              <p className={styles["daily"]}>NPM - NVM</p>
              <p className={styles["daily"]}>VSCode</p>
              <p className={styles["daily"]}>ESLint</p>
              <p>Vercel</p>
              <p className={styles["daily"]}>Firebase</p>
              <p>Heroku</p>
            </div>
          </div>
        </section>
      </div>
    </main>
		</div>
	);
}
 
export default Portfolio;