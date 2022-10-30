import React, { useEffect, useState } from 'react'
import { useRef, useCallback } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../components/AnimatedLetters'
import styles from '../styles/Contact.module.css'

// map
import dynamic from 'next/dynamic';
import { FaMap } from 'react-icons/fa'

const MapWithNoSSR = dynamic(() => import("../components/Map/Map"), {
	ssr: false,
});

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef<HTMLFormElement>(null)
	const [result, setResult] = useState("none")
	const [lastPosition, setLastPosition] = useState<[number, number]>([39.879616, 32.836274]);
	const [showMap, setShowMap] = useState(true)
	const [loading, setLoading] = useState(true)
	const [pageO, setPageO] = useState(false)

  useEffect(() => {
		setPageO(true)
		if (loading) {
			window.innerWidth < 700 ? setShowMap(false) : '';
			setLoading(false);
		}
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
		setPageO(false)
  }, [result, showMap, loading])

  const sendEmail = useCallback(
		(e:React.SyntheticEvent) => {
			e.preventDefault()
			if (!form) return;
			if (!form.current) return;
			emailjs
				.sendForm('default_service', 'template_sc04b6q', form.current, 'oUUw76WGTQb1VE1tl')
				.then(
					() => {
						setResult('Message successfully sent!')
						alert('Message successfully sent!')
						
					},
					() => {
						setResult('Failed to send the message, please try again')
						alert('Failed to send the message, please try again')
					}
				)
		},
		[],
	)
	

  return (
    <> pageO ? 
      <div className={"container " + styles["contact-page"]}>
        <div className={styles["text-zone"]}>
          <div className={styles["headerContainer"]}><h1 aria-label="Contact Me">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
					<div className={styles["mapToggle"]}>
					<p> Toggle map</p>
					<div className={styles["mapButton"]} onClick={() => setShowMap(!showMap)}>
						<FaMap /> 
					</div>
					</div>
					</div>
          <div className={styles["contact-form"]}>
            <form tabIndex={0} ref={form} onSubmit={sendEmail}>
              <ul>
                <li className={styles["half"]}>
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className={styles["half"]}>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
										className={styles["text-area"]}
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
									<div></div>
                  <input type="submit" className={styles["flat-button"]} value="SEND" />
                </li>
              </ul>
            </form>
          </div>
					<p style={{border: "1px solid black", background: "#fff", padding: "1rem", borderRadius: "4px"}}>
						You can instantly send an email using this form as you wish.</p>
        </div>
        <div style={{height: showMap ? '80vh' : '0'}} className={styles["map-wrap"]}>
					<MapWithNoSSR
            lastPosition={lastPosition}
          />
					<div style={{display: showMap ? 'block' : 'none'}} className={styles["info-map"]}>
        	  Ankara Türkiye
        	  <br />
        	  Elmadağı Sokak, 18/6
        	  <br />
        	  Aydınlar Mahallesi, Çankaya
        	  <br />
        	  06460
        	  <br /><br />
						Or just send an email to:<br />deniz@dare.land
        	</div>
        </div>
      </div> : <></>
    </>
  )
}

export default Contact
