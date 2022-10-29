import styles from './AnimatedLetters.module.css'
import { FunctionComponent } from 'react'

interface AnimatedLettersProps {
	letterClass: string,
	strArray: Array<string>;
	idx: number;
}
 
const AnimatedLetters: FunctionComponent<AnimatedLettersProps> = (props) => {
	return (
		<span>
			{
				props.strArray.map((char, i) => (
					<span key={char + i} className={styles[props.letterClass] + ` _${props.idx}`}>
						{char}
					</span>
				))
			}
		</span>
	);
}
 
export default AnimatedLetters;