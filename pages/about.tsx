import { 
  faHtml5,
	faCss3,
  faGit,
  faJsSquare,
  faReact,
	faNode,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../components/AnimatedLetters";
import styles from '../styles/About.module.css'

const About = () => {
	const [letterClass, setLetterClass] = useState('text-animate')

	useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


	return (
		<>
		<div className="container">
			<div className="text-zone">
				<h1 className={styles.title}>
					<AnimatedLetters
						letterClass={letterClass}
						strArray={['A', 'b', 'o', 'u', 't' , ' ', 'm', 'e']}
						idx={15} />
				</h1>
				<p>
          I&apos;m a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
				<p> {/* align=LEFT */}
          I am naturally curious, and working on improving my capacity around
          all aspects of 21st-century computation. I am quite confident in my
          knowledge and ability to work on the tasks to completion. My own
          website and the links you may find about my work is always up to
          date. So please let it be known that, I am currently looking for a
          position in Frontend Web Development, Game Development or Fullstack
          Web Development. How professional and experienced I am, goes in that
          order. My interest however is always high.
        </p>
				<p>
          If I need to define myself in one sentence that would be a person
          who is driven, a literary enthusiast, and a developer who respects
          quality. I have always been amazed by the studying and comprehending
          of complex phenomena. When it comes to computer science, it is in
          the nature of computation and networks to work together. Imagining,
          defining, and bringing into being of new things is at its best when
          many great minds are put to the task. It is a thrill and, like any
          emotion, opens doors to great potential when shared.
        </p>
			</div>
			<div className={styles["stage-cube-cont"]}>
        <div className={styles["cubespinner"]}>
          <div className={styles["face1"]}>
            <FontAwesomeIcon icon={faNode} color="#68A063" />
          </div>
          <div className={styles["face2"]}>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className={styles["face3"]}>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className={styles["face4"]}>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className={styles["face5"]}>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className={styles["face6"]}>
            <FontAwesomeIcon icon={faGit} color="#EC4D28" />
          </div>
        </div>
			</div>
		</div>
		</>
	);
}
 
export default About;