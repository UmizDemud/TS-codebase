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
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(true);
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		window.addEventListener("resize", () => {
			setOpenMenu(window.innerWidth > 700);
		}, false);

		function handleClickOutside(event: MouseEvent) {
			const target = event.target as Node;
			if (ref.current && !ref.current.contains(target)) {
				setOpenMenu(window.innerWidth > 700);
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [])
	

	return (
		<nav className={styles.nav}>
		
			<Link className={styles.logo} href="/">
				<U width={40} height={50}/>
				<div className={styles.logoSubtitle}>
					<span className={styles["subtitle-firstLetter"]}>U</span>mut
				</div>
			</Link>
			<div ref={ref}>
			<div className={styles["burger-menu-toggle"]}>
				<div className={styles["hamburger-lines"]}>
				<input checked={openMenu} className={styles["checkbox"]} type="checkbox" onChange={() => setOpenMenu(!openMenu)}/>
      	  <span className={styles["line"] + " " +  styles["line1"]}></span>
      	  <span className={styles["line"] + " " +  styles["line2"]}></span>
      	  <span className={styles["line"] + " " +  styles["line3"]}></span>
      	</div>  
			</div>
			<ul style={{display: openMenu ? "flex" : "none"}} className={styles.inLinks}>
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
					<Link href="https://demut.vercel.app/">
						<ImBlog size={19} />
					</Link>
				</li>
				<li className={styles.link + " " + styles["contact-link"]}>
					<Link href="/contact">
						<FaEnvelope size={19} />
					</Link>
				</li>
			</ul>
			</div>
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
