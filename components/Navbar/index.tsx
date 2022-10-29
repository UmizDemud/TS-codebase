import Link from "next/link";
import styles from "./Navbar.module.css";
import {
	FaHome,
	FaUser,
	FaSuitcase,
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaFacebook,
	FaSkype,
	FaDiscord
} from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import U from "../U";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<U width={40} height={50}/>
				<div className={styles.logoSubtitle}>
					Umut
				</div>
			</div>

			<ul className={styles.inLinks}>
				<li className={styles.link + " " + styles["home-link"]}>
					<Link href="/">
						<FaHome size={19} />
					</Link>
				</li>
				<li className={styles.link + " " + styles["about-link"]}>
					<Link href="/about">
						<FaUser size={19} />
					</Link>
				</li>
				<li className={styles.link + " " + styles["portfolio-link"]}>
					<Link href="/portfolio">
						<FaSuitcase size={19} />
					</Link>
				</li>
				<li className={styles.link + " " + styles["blog-link"]}>
					<Link href="/blog">
						<ImBlog size={19} />
					</Link>
				</li>
				<li className={styles.link + " " + styles["contact-link"]}>
					<Link href="/contact">
						<FaEnvelope size={19} />
					</Link>
				</li>
			</ul>
			<ul className={styles.outLinks}>
				<li className={styles.link}>
					<Link
					  href="https://www.linkedin.com/in/umut-deniz-darendeli-a7317115b/"
						aria-label="Linked In Profile"
						target="_blank">
						<FaLinkedin />
					</Link>
				</li>
				<li className={styles.link}>
					<Link 
					  href="https://github.com/UmizDemud"
						aria-label="Github Profile"
						target="_blank">
						<FaGithub />
					</Link>
				</li>
				<li className={styles.link}>
					<Link
						href="skype:live:.cid.14c4f051d6bd4358?call"
						area-label="skype link"
						target="_blank">
						<FaSkype />
					</Link>
				</li>
				<li className={styles.link}>
					<Link 
						href="https://www.facebook.com/profile.php?id=100081559273940"
						aria-label="facebook link"
						target="_blank">
						<FaFacebook />
					</Link>
				</li>
				<li className={styles.link}>
					<Link
						href="https://discord.gg/syWsgVjh"
						aria-label="discord link"
						target="_blank">
						<FaDiscord />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
